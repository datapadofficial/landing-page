export interface FeatureDocStep {
  title: string;
  description: string;
  image?: string;
  icon?: string;
  color?: string;
}

export interface FeatureDoc {
  // Frontmatter fields
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  color: string;
  benefits: string[];
  useCases: string[];
  ctaText: string;
  ctaUrl: string;
  category: "core" | "integration" | "automation" | "advanced";
  priority: number;
  videoUrl: string;
  redirectUrl?: string;
  steps: FeatureDocStep[];
  
  // SEO fields
  seoTitle?: string;
  seoDescription?: string;
  lastModified?: string;
  
  // Content
  content: string;
}
