export interface Integration {
  id: string;
  name: string;
  description: string;
  category:
    | "advertising"
    | "analytics"
    | "crm"
    | "ecommerce"
    | "social"
    | "database"
    | "finance"
    | "email"
    | "other";
  icon: string;
  website?: string;
  specs: {
    dataTypes: string[];
    updateFrequency: string;
    historicalData: string;
    apiDocs?: string;
  };
  seoContent?: {
    overview?: string;
    useCases?: string;
    setup?: string;
    benefits?: string;
  };
  conversionCopy?: {
    whyConnect: {
      headline: string;
      description: string;
      benefits: string[];
      cta: string;
    };
    painPoints: string[];
    solutions: string[];
  };
}
