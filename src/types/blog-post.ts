export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author?: string;
  tags?: string[];
  published?: boolean;
  content: string;
  // Enhanced SEO fields
  seoTitle?: string;
  seoDescription?: string;
  image?: string;
  imageAlt?: string;
  featured?: boolean;
  popular?: boolean;
  lastModified?: string;
  customDate?: string;
  footerTitle?: string;
  showInFooter?: boolean;
  hideInBlog?: boolean;
  showImage?: boolean;
  createdDate?: string;
}
