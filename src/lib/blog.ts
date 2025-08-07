import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { cache } from "react";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author?: string;
  tags?: string[];
  published?: boolean;
  content: string;
  // Enhanced SEO fields
  seoTitle?: string;
  seoDescription?: string;
  image?: string;
  imageAlt?: string;
  featured?: boolean;
  popular?: boolean;
  lastModified?: string;
  customDate?: string;
  footerTitle?: string;
  showInFooter?: boolean;
  hideInBlog?: boolean;
  showImage?: boolean;
  createdDate?: string;
}

const postsDirectory = path.join(process.cwd(), "content/posts");

// Cache the function to avoid re-reading files on every request
export const getAllPosts = cache(async (): Promise<BlogPost[]> => {
  // Create the posts directory if it doesn't exist
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      return {
        slug,
        content: matterResult.content,
        title: matterResult.data.title || "Untitled",
        description: matterResult.data.description || "",
        date: matterResult.data.date || new Date().toISOString(),
        author: matterResult.data.author,
        tags: matterResult.data.tags || [],
        published: matterResult.data.published !== false, // Default to true
        // Enhanced SEO fields
        seoTitle: matterResult.data.seoTitle,
        seoDescription: matterResult.data.seoDescription,
        image: matterResult.data.image,
        imageAlt: matterResult.data.imageAlt,
        featured: matterResult.data.featured || false,
        popular: matterResult.data.popular || false,
        lastModified: matterResult.data.lastModified,
        customDate: matterResult.data.customDate,
        footerTitle: matterResult.data.footerTitle,
        showInFooter: matterResult.data.showInFooter || false,
        hideInBlog: matterResult.data.hideInBlog || false,
        showImage: matterResult.data.showImage !== false, // Default to true
        createdDate: matterResult.data.createdDate,
      } as BlogPost;
    })
    .filter((post) => post.published) // Only return published posts
    .sort((a, b) => {
      // Sort posts by date (newest first)
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  return allPostsData;
});

export const getPostBySlug = cache(
  async (slug: string): Promise<BlogPost | null> => {
    try {
      const fullPath = path.join(postsDirectory, `${slug}.mdx`);

      if (!fs.existsSync(fullPath)) {
        return null;
      }

      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents);

      return {
        slug,
        content: matterResult.content,
        title: matterResult.data.title || "Untitled",
        description: matterResult.data.description || "",
        date: matterResult.data.date || new Date().toISOString(),
        author: matterResult.data.author,
        tags: matterResult.data.tags || [],
        published: matterResult.data.published !== false,
        // Enhanced SEO fields
        seoTitle: matterResult.data.seoTitle,
        seoDescription: matterResult.data.seoDescription,
        image: matterResult.data.image,
        imageAlt: matterResult.data.imageAlt,
        featured: matterResult.data.featured || false,
        popular: matterResult.data.popular || false,
        lastModified: matterResult.data.lastModified,
        customDate: matterResult.data.customDate,
        footerTitle: matterResult.data.footerTitle,
        showInFooter: matterResult.data.showInFooter || false,
        hideInBlog: matterResult.data.hideInBlog || false,
        showImage: matterResult.data.showImage !== false, // Default to true
        createdDate: matterResult.data.createdDate,
      } as BlogPost;
    } catch (error) {
      console.error(`Error reading post ${slug}:`, error);
      return null;
    }
  }
);

export const getPostSlugs = cache(async (): Promise<string[]> => {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => fileName.replace(/\.mdx$/, ""));
});
