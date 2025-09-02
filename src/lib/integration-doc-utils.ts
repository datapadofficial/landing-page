import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { cache } from "react";
import { IntegrationDoc } from "@/types/integration-doc";

const integrationDocsDirectory = path.join(process.cwd(), "src/data/docs/integrations");

// Cache the function to avoid re-reading files on every request
export const getAllIntegrationDocs = cache(async (): Promise<IntegrationDoc[]> => {
  // Create the integration docs directory if it doesn't exist
  if (!fs.existsSync(integrationDocsDirectory)) {
    fs.mkdirSync(integrationDocsDirectory, { recursive: true });
    return [];
  }

  const fileNames = fs.readdirSync(integrationDocsDirectory);
  const allIntegrationDocs = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(integrationDocsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the integration doc metadata section
      const matterResult = matter(fileContents);

      return {
        slug,
        content: matterResult.content,
        title: matterResult.data.title || "Untitled Integration",
        description: matterResult.data.description || "",
        category: matterResult.data.category || "other",
        icon: matterResult.data.icon || "/images/integrations/default.png",
        website: matterResult.data.website,
        setupTime: matterResult.data.setupTime,
        isSSLEncrypted: matterResult.data.isSSLEncrypted || false,
        lastModified: matterResult.data.lastModified,
        published: matterResult.data.published !== false, // Default to true
        seoTitle: matterResult.data.seoTitle,
        seoDescription: matterResult.data.seoDescription,
        features: matterResult.data.features || [],
      } as IntegrationDoc;
    })
    .filter((doc) => doc.published) // Only return published docs
    .sort((a, b) => {
      // Sort docs by title alphabetically
      return a.title.localeCompare(b.title);
    });

  return allIntegrationDocs;
});

export const getIntegrationDocBySlug = cache(
  async (slug: string): Promise<IntegrationDoc | null> => {
    try {
      const fullPath = path.join(integrationDocsDirectory, `${slug}.mdx`);

      if (!fs.existsSync(fullPath)) {
        return null;
      }

      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents);

      return {
        slug,
        content: matterResult.content,
        title: matterResult.data.title || "Untitled Integration",
        description: matterResult.data.description || "",
        category: matterResult.data.category || "other",
        icon: matterResult.data.icon || "/images/integrations/default.png",
        website: matterResult.data.website,
        setupTime: matterResult.data.setupTime,
        isSSLEncrypted: matterResult.data.isSSLEncrypted || false,
        lastModified: matterResult.data.lastModified,
        published: matterResult.data.published !== false,
        seoTitle: matterResult.data.seoTitle,
        seoDescription: matterResult.data.seoDescription,
        features: matterResult.data.features || [],
      } as IntegrationDoc;
    } catch (error) {
      console.error(`Error reading integration doc ${slug}:`, error);
      return null;
    }
  }
);

export const getIntegrationDocSlugs = cache(async (): Promise<string[]> => {
  if (!fs.existsSync(integrationDocsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(integrationDocsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => fileName.replace(/\.mdx$/, ""));
});

export const getIntegrationDocsByCategory = cache(
  async (category: IntegrationDoc["category"]): Promise<IntegrationDoc[]> => {
    const allDocs = await getAllIntegrationDocs();
    return allDocs.filter((doc) => doc.category === category);
  }
);
