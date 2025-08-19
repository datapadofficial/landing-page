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
  redirectUrl?: string;
  steps: {
    title: string;
    description: string;
    image?: string;
    icon?: string;
    color?: string;
  }[];
}
