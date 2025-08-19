export interface Integration {
  id: string;
  name: string;
  headline: string;
  description: string;
  cta?: string;
  secondaryCta?: string;
  website?: string;
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
  benefits?: string[];
  painPoints?: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  solutions?: Array<{
    title: string;
    description: string;
  }>;
}
