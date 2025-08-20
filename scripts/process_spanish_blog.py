#!/usr/bin/env python3
"""
Script to process Spanish blog posts from CSV and create MDX files with proper front-matter.
"""

import pandas as pd
import re
import os
import html
import unicodedata
from pathlib import Path
from markdownify import markdownify as md
from html2text import html2text

def slugify(text):
    """Convert text to URL-friendly slug"""
    # Normalize unicode characters
    text = unicodedata.normalize('NFKD', text)
    # Convert to lowercase and replace spaces/special chars with hyphens
    text = re.sub(r'[^\w\s-]', '', text.lower())
    text = re.sub(r'[-\s]+', '-', text)
    return text.strip('-')

def clean_html_entities(text):
    """Clean HTML entities and normalize text"""
    if not text or pd.isna(text):
        return ""
    # Convert to string if it's not already
    text = str(text)
    # Decode HTML entities first
    text = html.unescape(text)
    # Replace common HTML entities that might remain
    text = text.replace('&lt;', '<')
    text = text.replace('&gt;', '>')
    text = text.replace('&amp;', '&')
    text = text.replace('&quot;', '"')
    text = text.replace('&#x27;', "'")
    text = text.replace('&#128640;', '🚀')
    text = text.replace('&#128202;', '📊')
    return text

def html_to_markdown(html_content):
    """Convert HTML content to Markdown using markdownify with better settings"""
    if not html_content:
        return ""
    
    # Clean HTML entities first
    html_content = clean_html_entities(html_content)
    
    # Use markdownify with better settings for GFM
    markdown_content = md(
        html_content, 
        heading_style="ATX",  # Use # for headings
        bullets="-",          # Use - for bullet points
        strong_tag="**",      # Use ** for bold
        emphasis_tag="_",     # Use _ for italic
        strip=['script', 'style'],  # Remove script and style tags
    )
    
    # Clean up the markdown
    # Remove excessive newlines
    markdown_content = re.sub(r'\n{3,}', '\n\n', markdown_content)
    
    # Fix common markdown issues
    markdown_content = re.sub(r'\*\*([^*]+)\*\*', r'**\1**', markdown_content)
    
    return markdown_content.strip()

def extract_front_matter_from_english_post(english_slug):
    """Extract front-matter from existing English MDX post"""
    english_file = Path(f"src/data/posts/{english_slug}.mdx")
    
    if not english_file.exists():
        print(f"Warning: English post not found: {english_file}")
        return None
    
    try:
        with open(english_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Extract front-matter (everything between the first --- and second ---)
        match = re.match(r'^---\s*\n(.*?)\n---', content, re.DOTALL)
        if not match:
            print(f"Warning: No front-matter found in {english_file}")
            return None
        
        front_matter_text = match.group(1)
        
        # Parse front-matter into a dictionary
        front_matter = {}
        for line in front_matter_text.split('\n'):
            line = line.strip()
            if not line or line.startswith('#'):
                continue
            
            if ':' in line:
                key, value = line.split(':', 1)
                key = key.strip()
                value = value.strip().strip('"\'')
                
                # Convert boolean strings to actual booleans
                if value.lower() in ['true', 'false']:
                    value = value.lower() == 'true'
                
                front_matter[key] = value
        
        return front_matter
    
    except Exception as e:
        print(f"Error processing {english_file}: {e}")
        return None

def generate_spanish_slug(english_slug, provided_spanish_slug=None):
    """Generate or use Spanish slug"""
    # Use provided Spanish slug if it exists, otherwise generate one
    if provided_spanish_slug and str(provided_spanish_slug).strip() and not pd.isna(provided_spanish_slug):
        return str(provided_spanish_slug).strip()
    else:
        # Fallback: add -es suffix for posts without predefined Spanish slugs
        return f"{english_slug}-es"

def process_single_post(row):
    """Process a single blog post row from the CSV"""
    english_slug = row['English_URL_Slug']
    spanish_content = row['Spanish_Content_Raw']
    provided_spanish_slug = row.get('Spanish_URL_Slug', None)
    english_title = row.get('English_Title', '')
    spanish_title = row.get('Spanish_Title', '')
    english_description = row.get('English_Description', '')
    spanish_description = row.get('Spanish_Description', '')
    
    print(f"Processing: {english_slug}")
    
    # Check if English slug is valid (not HTML content or too long)
    if not english_slug or pd.isna(english_slug) or len(str(english_slug)) > 200 or '<' in str(english_slug):
        print(f"Skipping {english_slug} - invalid English slug (too long or contains HTML)")
        return None
    
    # Check if Spanish content exists
    if pd.isna(spanish_content) or not str(spanish_content).strip():
        print(f"Skipping {english_slug} - no Spanish content available")
        return None
    
    # Get front-matter from English version
    front_matter = extract_front_matter_from_english_post(english_slug)
    if not front_matter:
        print(f"Skipping {english_slug} - could not extract front-matter")
        return None
    
    # Use Spanish slug from CSV or generate one
    spanish_slug = generate_spanish_slug(english_slug, provided_spanish_slug)
    print(f"  Using Spanish slug: {spanish_slug}")
    
    # Use Spanish title if available
    if spanish_title and not pd.isna(spanish_title) and str(spanish_title).strip():
        print(f"  Using Spanish title: {spanish_title}")
        final_title = str(spanish_title).strip()
    else:
        print(f"  No Spanish title found, using English: {english_title}")
        final_title = str(english_title).strip() if english_title and not pd.isna(english_title) else front_matter.get('title', 'Untitled')
    
    # Use Spanish description if available
    if spanish_description and not pd.isna(spanish_description) and str(spanish_description).strip():
        print(f"  Using Spanish description")
        final_description = str(spanish_description).strip()
    else:
        print(f"  No Spanish description found, using English description")
        final_description = str(english_description).strip() if english_description and not pd.isna(english_description) else front_matter.get('description', '')
    
    # Convert HTML content to Markdown
    markdown_content = html_to_markdown(spanish_content)
    
    if not markdown_content:
        print(f"Warning: No content generated for {english_slug}")
        return None
    
    # Update front-matter for Spanish version
    spanish_front_matter = front_matter.copy()
    spanish_front_matter['slug'] = spanish_slug
    
    # Add reference to the original English post for mapping
    spanish_front_matter['originalEnglishSlug'] = english_slug
    spanish_front_matter['language'] = 'es'
    
    # Update title with Spanish version
    spanish_front_matter['title'] = final_title
    
    # Update description with Spanish version
    spanish_front_matter['description'] = final_description
    
    # Update SEO title if it exists
    if 'seoTitle' in spanish_front_matter:
        spanish_front_matter['seoTitle'] = final_title
    
    # Update SEO description if it exists
    if 'seoDescription' in spanish_front_matter:
        spanish_front_matter['seoDescription'] = final_description
    
    # Ensure published posts remain published (not draft)
    if 'draft' in spanish_front_matter and not spanish_front_matter.get('draft', False):
        spanish_front_matter['draft'] = False
    
    # Create the MDX content
    mdx_content = "---\n"
    for key, value in spanish_front_matter.items():
        if isinstance(value, bool):
            value = str(value).lower()
        elif isinstance(value, str) and (' ' in value or any(c in value for c in ['-', ':', '/', '(', ')'])):
            value = f'"{value}"'
        mdx_content += f"{key}: {value}\n"
    mdx_content += "---\n\n"
    mdx_content += markdown_content
    
    # Create output directory for Spanish posts
    output_dir = Path("src/data/es/posts")
    output_dir.mkdir(parents=True, exist_ok=True)
    
    # Write the Spanish MDX file
    output_file = output_dir / f"{spanish_slug}.mdx"
    
    try:
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(mdx_content)
        
        print(f"✅ Created: {output_file}")
        return output_file
    
    except Exception as e:
        print(f"❌ Error writing {output_file}: {e}")
        return None

def process_all_posts(df):
    """Process all blog posts with Spanish content"""
    print("Processing all posts with Spanish content...")
    
    successful_posts = []
    failed_posts = []
    skipped_posts = []
    
    for index, row in df.iterrows():
        english_slug = row['English_URL_Slug']
        
        # Check if Spanish content exists
        if pd.isna(row['Spanish_Content_Raw']) or not str(row['Spanish_Content_Raw']).strip():
            skipped_posts.append(english_slug)
            continue
        
        print(f"[{index+1}/{len(df)}] Processing: {english_slug}")
        result = process_single_post(row)
        
        if result:
            successful_posts.append(english_slug)
            print(f"  ✅ Success")
        else:
            failed_posts.append(english_slug)
            print(f"  ❌ Failed")
    
    # Print summary
    print("\n" + "="*60)
    print("PROCESSING SUMMARY")
    print("="*60)
    print(f"📊 Total posts in CSV: {len(df)}")
    print(f"✅ Successfully processed: {len(successful_posts)}")
    print(f"❌ Failed to process: {len(failed_posts)}")
    print(f"⏭️  Skipped (no Spanish content): {len(skipped_posts)}")
    
    if failed_posts:
        print(f"\n❌ Failed posts:")
        for post in failed_posts:
            print(f"  - {post}")
    
    return successful_posts, failed_posts, skipped_posts

def main():
    """Main function to process Spanish blog posts"""
    import sys
    
    csv_file = "src/data/csv/extracted_blog_posts.csv"
    
    if not os.path.exists(csv_file):
        print(f"Error: CSV file not found: {csv_file}")
        return
    
    # Load CSV
    try:
        df = pd.read_csv(csv_file)
        print(f"Loaded {len(df)} blog posts from CSV")
    except Exception as e:
        print(f"Error loading CSV: {e}")
        return
    
    # Check if user wants to process all or just test one
    if len(sys.argv) > 1 and sys.argv[1] == "--all":
        # Process all posts
        process_all_posts(df)
    else:
        # Find the first post with Spanish content for testing
        print("Running in TEST mode - processing one post only.")
        print("Use '--all' flag to process all posts: python scripts/process_spanish_blog.py --all")
        print()
        
        if len(df) > 0:
            print("Looking for a post with Spanish content AND Spanish slug to test...")
            processed = False
            for index, row in df.iterrows():
                has_spanish_content = not pd.isna(row['Spanish_Content_Raw']) and str(row['Spanish_Content_Raw']).strip()
                has_spanish_slug = not pd.isna(row['Spanish_URL_Slug']) and str(row['Spanish_URL_Slug']).strip()
                
                if has_spanish_content and has_spanish_slug:
                    print(f"Found post with Spanish content and slug at index {index}")
                    print(f"  English: {row['English_URL_Slug']} -> Spanish: {row['Spanish_URL_Slug']}")
                    result = process_single_post(row)
                    if result:
                        print(f"✅ Successfully processed test post: {result}")
                        processed = True
                        break
                    else:
                        print(f"❌ Failed to process post at index {index}, trying next...")
                        continue
            
            if not processed:
                print("❌ No posts with Spanish content found or all failed to process")
        else:
            print("No posts found in CSV")

if __name__ == "__main__":
    main()
