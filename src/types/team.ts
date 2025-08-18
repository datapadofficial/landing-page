export interface Team {
  slug: string;
  name: string;
  description: string;
  icon: string;
  color: string;

  // SEO content
  seoTitle?: string;
  seoDescription?: string;

  // Featured content
  featuredIntegrations: string[]; // Integration IDs
  featuredFeatures: string[]; // Feature slugs

  // Value propositions for Feature197 component
  valuePropositions?: Array<{
    id: number;
    title: string;
    image: string;
    description: string;
    videoUrl?: string;
    icon?: string; // Icon name as string
  }>;

  // Meta info
  priority: number;
}
