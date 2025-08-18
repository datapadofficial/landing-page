export interface LegalDocument {
  slug: string;
  title: string;
  description: string;
  date: string;
  lastModified?: string;
  content: string;
  // SEO fields
  seoTitle?: string;
  seoDescription?: string;
}
