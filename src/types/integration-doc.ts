export interface IntegrationDoc {
  slug: string;
  content: string;
  title: string;
  description: string;
  category: "advertising" | "analytics" | "crm" | "ecommerce" | "social" | "database" | "finance" | "email" | "other";
  icon: string;
  website?: string;
  setupTime?: string;
  isSSLEncrypted?: boolean;
  lastModified?: string;
  published?: boolean;
  
  // SEO fields
  seoTitle?: string;
  seoDescription?: string;
  
  // Features for the "What You'll Get" section
  features?: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
}
