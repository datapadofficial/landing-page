import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { GuidesOverviewDoc } from '@/types/guide-doc';

const guidesOverviewPath = path.join(process.cwd(), 'src/data/docs/guides-overview.mdx');

export async function getGuidesOverviewDoc(): Promise<GuidesOverviewDoc | null> {
  try {
    const fileContents = fs.readFileSync(guidesOverviewPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      title: data.title || '',
      description: data.description || '',
      seoTitle: data.seoTitle,
      seoDescription: data.seoDescription,
      content,
    };
  } catch (error) {
    console.error('Error reading guides overview doc:', error);
    return null;
  }
}
