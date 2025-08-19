export interface Team {
  slug: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  seoTitle?: string;
  seoDescription?: string;
  featuredIntegrations: string[];
  featuredFeatures: string[];
  valuePropositions?: Array<{
    id: number;
    title: string;
    image: string;
    description: string;
    videoUrl?: string;
    icon?: string;
  }>;
  painPoints?: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  priority: number;
}
