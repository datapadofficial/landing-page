import { LucideIcon } from "lucide-react";

export interface CompetitorFeature {
  feature: string;
  icon: LucideIcon;
  datapad: {
    available: boolean;
    description: string;
  };
  competitor: {
    available: boolean;
    description: string;
  };
}

export interface CompetitorFaq {
  question: string;
  answer: string;
}

export interface Competitor {
  id: string;
  name: string;
  logo: string;
  tagline: string;
  description: string;
  subtitle: string;
  ctaText?: string;
  faqItems: CompetitorFaq[];
  features: CompetitorFeature[];
  badgeText?: string;
  metadata: {
    title: string;
    description: string;
    openGraph: {
      title: string;
      description: string;
      type: string;
    };
  };
}
