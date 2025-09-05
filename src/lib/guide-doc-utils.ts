import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { GuideDoc } from '@/types/guide-doc';

const guidesDirectory = path.join(process.cwd(), 'src/data/docs/guides');

export async function getGuideDocBySlug(slug: string): Promise<GuideDoc | null> {
  try {
    const filePath = path.join(guidesDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || '',
      description: data.description || '',
      category: data.category || '',
      difficulty: data.difficulty || 'beginner',
      estimatedTime: data.estimatedTime || '',
      author: data.author,
      lastUpdated: data.lastUpdated,
      features: data.features || [],
      steps: data.steps || [],
      faqs: data.faqs || [],
      seoTitle: data.seoTitle,
      seoDescription: data.seoDescription,
      content,
    };
  } catch (error) {
    console.error(`Error reading guide doc ${slug}:`, error);
    return null;
  }
}

export async function getAllGuideDocs(): Promise<GuideDoc[]> {
  try {
    if (!fs.existsSync(guidesDirectory)) {
      return [];
    }

    const fileNames = fs.readdirSync(guidesDirectory);
    const allGuideDocs = await Promise.all(
      fileNames
        .filter((name) => name.endsWith('.mdx'))
        .map(async (name) => {
          const slug = name.replace(/\.mdx$/, '');
          return await getGuideDocBySlug(slug);
        })
    );

    return allGuideDocs.filter((doc): doc is GuideDoc => doc !== null);
  } catch (error) {
    console.error('Error getting all guide docs:', error);
    return [];
  }
}

export async function getGuideDocSlugs(): Promise<string[]> {
  try {
    if (!fs.existsSync(guidesDirectory)) {
      return [];
    }

    const fileNames = fs.readdirSync(guidesDirectory);
    return fileNames
      .filter((name) => name.endsWith('.mdx'))
      .map((name) => name.replace(/\.mdx$/, ''));
  } catch (error) {
    console.error('Error getting guide doc slugs:', error);
    return [];
  }
}
