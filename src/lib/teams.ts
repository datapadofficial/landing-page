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

  // Meta info
  priority: number;
}

export const teams: Team[] = [
  {
    slug: "marketing",
    name: "Marketing",
    description:
      "Analyze campaign performance, ROI, and marketing attribution across all channels",
    icon: "TrendingUp",
    color: "chart-red",
    seoTitle: "Marketing Analytics & Campaign Performance | Datapad",
    seoDescription:
      "Optimize your marketing campaigns with AI-powered analytics. Track ROI, attribution, and performance across Facebook Ads, Google Ads, and more.",
    featuredIntegrations: [
      "facebook-ads",
      "google-ads",
      "linkedin-ads",
      "google-analytics",
    ],
    featuredFeatures: [
      "ai-data-agent",
      "generative-dashboards",
      "data-blending",
    ],
    priority: 1,
  },
  {
    slug: "sales",
    name: "Sales",
    description:
      "Track sales performance, pipeline health, and revenue metrics",
    icon: "DollarSign",
    color: "chart-green",
    seoTitle: "Sales Analytics & Performance Tracking | Datapad",
    seoDescription:
      "Monitor sales performance, pipeline health, and revenue metrics with AI-powered sales analytics and dashboards.",
    featuredIntegrations: ["salesforce", "hubspot", "stripe"],
    featuredFeatures: ["ai-data-agent", "automations", "shareable-reports"],
    priority: 2,
  },
  {
    slug: "retail-ecommerce",
    name: "Retail & E-Commerce",
    description:
      "Monitor online store performance, inventory, and customer behavior",
    icon: "ShoppingCart",
    color: "chart-purple",
    seoTitle: "E-Commerce Analytics & Retail Intelligence | Datapad",
    seoDescription:
      "Optimize your online store with comprehensive e-commerce analytics. Track sales, inventory, customer behavior, and conversion rates.",
    featuredIntegrations: ["shopify", "stripe", "google-analytics"],
    featuredFeatures: ["generative-dashboards", "data-blending", "automations"],
    priority: 3,
  },
  {
    slug: "content-seo",
    name: "Content & SEO",
    description: "Track content performance, SEO rankings, and organic growth",
    icon: "Search",
    color: "chart-blue",
    seoTitle: "SEO Analytics & Content Performance | Datapad",
    seoDescription:
      "Improve your SEO strategy with AI-powered content and search analytics. Track rankings, organic traffic, and content performance.",
    featuredIntegrations: ["google-analytics", "google-searchconsole"],
    featuredFeatures: ["ai-data-agent", "web-access", "automations"],
    priority: 4,
  },
  {
    slug: "social-media",
    name: "Social Media",
    description:
      "Analyze social media performance, engagement, and brand metrics",
    icon: "Users",
    color: "chart-orange",
    seoTitle: "Social Media Analytics & Brand Monitoring | Datapad",
    seoDescription:
      "Track social media performance across all platforms. Monitor engagement, reach, and brand metrics with AI-powered analytics.",
    featuredIntegrations: [
      "facebook",
      "instagram-business",
      "linkedin-social",
      "tiktok",
    ],
    featuredFeatures: ["ai-data-agent", "data-blending", "shareable-reports"],
    priority: 5,
  },
  {
    slug: "product-management",
    name: "Product Management",
    description:
      "Track product usage, feature adoption, and user behavior analytics",
    icon: "Package",
    color: "chart-yellow",
    seoTitle: "Product Analytics & User Behavior Tracking | Datapad",
    seoDescription:
      "Understand product usage and user behavior with advanced product analytics. Track feature adoption, user journeys, and engagement.",
    featuredIntegrations: ["mixpanel", "google-analytics"],
    featuredFeatures: ["ai-data-agent", "learning-layer", "automations"],
    priority: 6,
  },
  {
    slug: "finance",
    name: "Finance",
    description:
      "Monitor financial performance, cash flow, and profitability metrics",
    icon: "Calculator",
    color: "chart-green",
    seoTitle: "Financial Analytics & Business Intelligence | Datapad",
    seoDescription:
      "Track financial performance with AI-powered analytics. Monitor cash flow, profitability, and key financial metrics in real-time.",
    featuredIntegrations: ["stripe", "quickbooks", "google-sheets"],
    featuredFeatures: [
      "generative-dashboards",
      "automations",
      "shareable-reports",
    ],
    priority: 7,
  },
  {
    slug: "agency",
    name: "Agency",
    description:
      "Client reporting, campaign management, and performance tracking for agencies",
    icon: "Building",
    color: "chart-red",
    seoTitle: "Agency Analytics & Client Reporting | Datapad",
    seoDescription:
      "Streamline agency operations with comprehensive client reporting and campaign analytics. Perfect for marketing agencies and consultants.",
    featuredIntegrations: [
      "facebook-ads",
      "google-ads",
      "google-analytics",
      "linkedin-ads",
    ],
    featuredFeatures: ["shareable-reports", "data-blending", "slack-bot"],
    priority: 8,
  },
  {
    slug: "growth",
    name: "Growth",
    description: "Customer acquisition, retention, and lifecycle analytics",
    icon: "TrendingUp",
    color: "chart-purple",
    seoTitle: "Growth Analytics & Customer Lifecycle Tracking | Datapad",
    seoDescription:
      "Optimize growth strategies with customer acquisition, retention, and lifecycle analytics. Track LTV, CAC, and growth metrics.",
    featuredIntegrations: ["mixpanel", "stripe", "google-analytics"],
    featuredFeatures: ["ai-data-agent", "learning-layer", "automations"],
    priority: 9,
  },
  {
    slug: "supply-chain",
    name: "Supply Chain",
    description:
      "Inventory management, logistics, and supply chain optimization",
    icon: "Truck",
    color: "chart-orange",
    seoTitle: "Supply Chain Analytics & Inventory Management | Datapad",
    seoDescription:
      "Optimize supply chain operations with AI-powered analytics. Track inventory, logistics, and operational efficiency.",
    featuredIntegrations: ["google-sheets", "database"],
    featuredFeatures: [
      "automations",
      "generative-dashboards",
      "text-to-sql-python",
    ],
    priority: 10,
  },
  {
    slug: "crm",
    name: "CRM",
    description:
      "Customer relationship management and sales pipeline analytics",
    icon: "Users",
    color: "chart-blue",
    seoTitle: "CRM Analytics & Customer Intelligence | Datapad",
    seoDescription:
      "Enhance customer relationships with comprehensive CRM analytics. Track customer interactions, sales pipeline, and relationship metrics.",
    featuredIntegrations: ["salesforce", "hubspot"],
    featuredFeatures: ["ai-data-agent", "learning-layer", "shareable-reports"],
    priority: 11,
  },
];

export function getTeamBySlug(slug: string): Team | undefined {
  return teams.find((team) => team.slug === slug);
}

export function getAllTeams(): Team[] {
  return teams.sort((a, b) => a.priority - b.priority);
}

export function getTeamsByPriority(limit?: number): Team[] {
  const sorted = teams.sort((a, b) => a.priority - b.priority);
  return limit ? sorted.slice(0, limit) : sorted;
}
