import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { FeatureDoc } from "@/types/feature-doc";

const FEATURES_DIRECTORY = path.join(process.cwd(), "src/data/docs/features");

export async function getFeatureDocBySlug(slug: string): Promise<FeatureDoc | null> {
  try {
    const filePath = path.join(FEATURES_DIRECTORY, `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);

    return {
      slug,
      content,
      ...data,
    } as FeatureDoc;
  } catch (error) {
    console.error(`Error reading feature doc for slug ${slug}:`, error);
    return null;
  }
}

export async function getAllFeatureDocs(): Promise<FeatureDoc[]> {
  try {
    if (!fs.existsSync(FEATURES_DIRECTORY)) {
      return [];
    }

    const filenames = fs.readdirSync(FEATURES_DIRECTORY);
    const features = await Promise.all(
      filenames
        .filter((name) => name.endsWith(".mdx"))
        .map(async (name) => {
          const slug = name.replace(/\.mdx$/, "");
          return await getFeatureDocBySlug(slug);
        })
    );

    return features
      .filter((feature): feature is FeatureDoc => feature !== null)
      .sort((a, b) => a.priority - b.priority);
  } catch (error) {
    console.error("Error reading feature docs:", error);
    return [];
  }
}

export async function getFeatureDocSlugs(): Promise<string[]> {
  try {
    if (!fs.existsSync(FEATURES_DIRECTORY)) {
      return [];
    }

    const filenames = fs.readdirSync(FEATURES_DIRECTORY);
    return filenames
      .filter((name) => name.endsWith(".mdx"))
      .map((name) => name.replace(/\.mdx$/, ""));
  } catch (error) {
    console.error("Error reading feature doc slugs:", error);
    return [];
  }
}

export async function getFeatureDocsByCategory(
  category: FeatureDoc["category"]
): Promise<FeatureDoc[]> {
  const allFeatures = await getAllFeatureDocs();
  return allFeatures
    .filter((feature) => feature.category === category)
    .sort((a, b) => a.priority - b.priority);
}
