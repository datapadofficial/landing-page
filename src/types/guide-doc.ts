export interface GuideDocStep {
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface GuideDocFeature {
  title: string;
  description: string;
  icon: string;
}

export interface GuideDocFaq {
  question: string;
  answer: string;
}

export interface GuideDoc {
  // Frontmatter fields
  slug: string;
  title: string;
  description: string;
  category: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  estimatedTime: string;
  author?: string;
  lastUpdated?: string;
  
  // Optional sections
  features?: GuideDocFeature[];
  steps?: GuideDocStep[];
  faqs?: GuideDocFaq[];
  
  // SEO fields
  seoTitle?: string;
  seoDescription?: string;
  
  // Content
  content: string;
}

export interface GuidesOverviewDoc {
  // Frontmatter fields
  title: string;
  description: string;
  seoTitle?: string;
  seoDescription?: string;
  
  // Content
  content: string;
}
