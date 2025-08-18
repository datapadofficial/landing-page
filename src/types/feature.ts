export interface Feature {
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
  // Special redirect URL for features that don't follow the standard /features/[slug] pattern
  redirectUrl?: string;
}
