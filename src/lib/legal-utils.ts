import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { cache } from "react";
import { LegalDocument } from "@/types/legal-document";

const legalDirectory = path.join(process.cwd(), "src/data/legal");

// Cache the function to avoid re-reading files on every request
export const getAllLegalDocuments = cache(
  async (): Promise<LegalDocument[]> => {
    // Create the legal directory if it doesn't exist
    if (!fs.existsSync(legalDirectory)) {
      fs.mkdirSync(legalDirectory, { recursive: true });
      return [];
    }

    const fileNames = fs.readdirSync(legalDirectory);
    const allLegalData = fileNames
      .filter((fileName) => fileName.endsWith(".mdx"))
      .map((fileName) => {
        const slug = fileName.replace(/\.mdx$/, "");
        const fullPath = path.join(legalDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        // Use gray-matter to parse the legal document metadata section
        const matterResult = matter(fileContents);

        return {
          slug,
          content: matterResult.content,
          title: matterResult.data.title || "Untitled",
          description: matterResult.data.description || "",
          date: matterResult.data.date || new Date().toISOString(),
          lastModified: matterResult.data.lastModified,
          seoTitle: matterResult.data.seoTitle,
          seoDescription: matterResult.data.seoDescription,
        } as LegalDocument;
      })
      .sort((a, b) => {
        // Sort by date (newest first)
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });

    return allLegalData;
  }
);

export const getLegalDocumentBySlug = cache(
  async (slug: string): Promise<LegalDocument | null> => {
    try {
      const fullPath = path.join(legalDirectory, `${slug}.mdx`);

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
        lastModified: matterResult.data.lastModified,
        seoTitle: matterResult.data.seoTitle,
        seoDescription: matterResult.data.seoDescription,
      } as LegalDocument;
    } catch (error) {
      console.error(`Error reading legal document ${slug}:`, error);
      return null;
    }
  }
);

export const getLegalDocumentSlugs = cache(async (): Promise<string[]> => {
  if (!fs.existsSync(legalDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(legalDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => fileName.replace(/\.mdx$/, ""));
});
