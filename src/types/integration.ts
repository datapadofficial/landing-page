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
  headline?: string;
  conversionDescription?: string;
  conversionBenefits?: string[];
  cta?: string;
  painPoints?: Array<{
    title: string;
    description: string;
  }>;
  solutions?: Array<{
    title: string;
    description: string;
  }>;
}
