import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { IntegrationsOverviewDoc } from '@/types/integrations-overview';

const overviewDirectory = path.join(process.cwd(), 'src/data/docs');

export async function getIntegrationsOverview(): Promise<IntegrationsOverviewDoc | null> {
  try {
    const fullPath = path.join(overviewDirectory, 'integrations-overview.mdx');
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug: 'integrations-overview',
      content,
      title: data.title || 'Integrations',
      description: data.description || '',
      seoTitle: data.seoTitle,
      seoDescription: data.seoDescription,
      keywords: data.keywords,
      lastModified: data.lastModified,
      published: data.published ?? true,
    };
  } catch (error) {
    console.error('Error loading integrations overview:', error);
    return null;
  }
}
