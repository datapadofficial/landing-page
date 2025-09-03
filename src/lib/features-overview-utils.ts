import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { FeaturesOverviewDoc } from "@/types/features-overview";

const FEATURES_OVERVIEW_FILE = path.join(process.cwd(), "src/data/docs/features-overview.mdx");

export async function getFeaturesOverviewDoc(): Promise<FeaturesOverviewDoc | null> {
  try {
    const fileContent = fs.readFileSync(FEATURES_OVERVIEW_FILE, "utf8");
    const { data, content } = matter(fileContent);

    return {
      content,
      ...data,
    } as FeaturesOverviewDoc;
  } catch (error) {
    console.error("Error reading features overview doc:", error);
    return null;
  }
}
