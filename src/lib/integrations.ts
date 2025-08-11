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

  // Technical specs
  specs: {
    dataTypes: string[];
    updateFrequency: string;
    historicalData: string;
    apiDocs?: string;
  };

  // SEO content (markdown strings for 30% custom content)
  seoContent?: {
    overview?: string;
    useCases?: string;
    setup?: string;
    benefits?: string;
  };

  // For custom components (30% custom)
  hasCustomPage?: boolean;
}

export const integrations: Integration[] = [
  {
    id: "facebook-ads",
    name: "Facebook Ads",
    description:
      "Meta's advertising platform for targeted campaigns across Facebook and Instagram",
    category: "advertising",
    icon: "/images/integrations/facebook-ads.png",
    website: "https://www.facebook.com/business/ads",
    specs: {
      dataTypes: ["campaigns", "ad_sets", "ads", "insights", "audiences"],
      updateFrequency: "Real-time",
      historicalData: "2+ years",
      apiDocs: "https://developers.facebook.com/docs/marketing-api",
    },
    seoContent: {
      overview: `# Facebook Ads Integration

Connect your Facebook Ads account to Datapad for comprehensive campaign analysis and optimization. Get real-time insights into your ad performance, ROI, and audience engagement across Facebook and Instagram.`,
      useCases: `## Common Use Cases

- **ROI Analysis**: Track return on ad spend across all campaigns
- **Campaign Optimization**: Identify top-performing ads and audiences  
- **Budget Management**: Monitor spend and pacing against targets
- **Cross-Platform Analytics**: Compare Facebook and Instagram performance
- **Audience Insights**: Understand demographics and behavior patterns`,
      setup: `## Quick Setup Guide

1. **Connect Account**: Link your Facebook Business Manager account
2. **Select Ad Accounts**: Choose which ad accounts to sync
3. **Configure Metrics**: Select the KPIs you want to track
4. **Set Refresh Rate**: Choose how often to update your data
5. **Start Analyzing**: Begin exploring your campaign data`,
    },
    hasCustomPage: true,
  },
  {
    id: "google-ads",
    name: "Google Ads",
    description:
      "Google's advertising platform for search, display, and video campaigns",
    category: "advertising",
    icon: "/images/integrations/google-ads.png",
    website: "https://ads.google.com",
    specs: {
      dataTypes: ["campaigns", "ad_groups", "keywords", "ads", "extensions"],
      updateFrequency: "Real-time",
      historicalData: "3+ years",
      apiDocs: "https://developers.google.com/google-ads/api",
    },
    seoContent: {
      overview: `# Google Ads Integration

Integrate Google Ads with Datapad to analyze your search, display, and video campaign performance. Get actionable insights to optimize your ad spend and improve campaign results.`,
      useCases: `## Common Use Cases

- **Keyword Performance**: Analyze which keywords drive the best ROI
- **Campaign Optimization**: Identify underperforming campaigns and ad groups
- **Quality Score Monitoring**: Track and improve ad relevance scores
- **Competitive Analysis**: Compare performance against industry benchmarks
- **Budget Allocation**: Optimize spend across campaigns and keywords`,
    },
  },
  {
    id: "google-analytics",
    name: "Google Analytics",
    description:
      "Google's web analytics platform for tracking website and app performance",
    category: "analytics",
    icon: "/images/integrations/google-analytics.png",
    website: "https://analytics.google.com",
    specs: {
      dataTypes: ["sessions", "users", "pageviews", "conversions", "events"],
      updateFrequency: "24 hours",
      historicalData: "4+ years",
      apiDocs: "https://developers.google.com/analytics",
    },
  },
  {
    id: "shopify",
    name: "Shopify",
    description:
      "E-commerce platform for online stores and retail point-of-sale systems",
    category: "ecommerce",
    icon: "/images/integrations/shopify.png",
    website: "https://www.shopify.com",
    specs: {
      dataTypes: ["orders", "products", "customers", "inventory", "sales"],
      updateFrequency: "Real-time",
      historicalData: "Unlimited",
      apiDocs: "https://shopify.dev/docs/api",
    },
  },
  {
    id: "stripe",
    name: "Stripe",
    description: "Payment processing platform for online businesses",
    category: "finance",
    icon: "/images/integrations/stripe.png",
    website: "https://stripe.com",
    specs: {
      dataTypes: [
        "payments",
        "customers",
        "subscriptions",
        "invoices",
        "disputes",
      ],
      updateFrequency: "Real-time",
      historicalData: "Unlimited",
      apiDocs: "https://stripe.com/docs/api",
    },
  },
  {
    id: "hubspot",
    name: "HubSpot",
    description:
      "Customer relationship management and marketing automation platform",
    category: "crm",
    icon: "/images/integrations/hubspot.png",
    website: "https://www.hubspot.com",
    specs: {
      dataTypes: ["contacts", "companies", "deals", "tickets", "campaigns"],
      updateFrequency: "Real-time",
      historicalData: "Unlimited",
      apiDocs: "https://developers.hubspot.com",
    },
  },
  {
    id: "linkedin-ads",
    name: "LinkedIn Ads",
    description:
      "LinkedIn's advertising platform for B2B marketing and professional targeting",
    category: "advertising",
    icon: "/images/integrations/linkedin-ads.png",
    website: "https://business.linkedin.com/marketing-solutions/ads",
    specs: {
      dataTypes: [
        "campaigns",
        "creatives",
        "audiences",
        "demographics",
        "insights",
      ],
      updateFrequency: "Real-time",
      historicalData: "2+ years",
      apiDocs: "https://docs.microsoft.com/en-us/linkedin/",
    },
  },
  {
    id: "tiktok-ads",
    name: "TikTok Ads",
    description:
      "TikTok's advertising platform for video-first marketing campaigns",
    category: "advertising",
    icon: "/images/integrations/tiktok-ads.png",
    website: "https://ads.tiktok.com",
    specs: {
      dataTypes: ["campaigns", "ad_groups", "ads", "audiences", "videos"],
      updateFrequency: "Real-time",
      historicalData: "2+ years",
      apiDocs: "https://ads.tiktok.com/marketing_api/docs",
    },
  },
  {
    id: "mixpanel",
    name: "Mixpanel",
    description:
      "Advanced analytics platform for tracking user behavior and product usage",
    category: "analytics",
    icon: "/images/integrations/mixpanel.png",
    website: "https://mixpanel.com",
    specs: {
      dataTypes: ["events", "users", "funnels", "cohorts", "retention"],
      updateFrequency: "Real-time",
      historicalData: "5+ years",
      apiDocs: "https://developer.mixpanel.com",
    },
  },
  {
    id: "salesforce",
    name: "Salesforce",
    description: "Leading customer relationship management (CRM) platform",
    category: "crm",
    icon: "/images/integrations/salesforce.png",
    website: "https://www.salesforce.com",
    specs: {
      dataTypes: ["accounts", "contacts", "opportunities", "leads", "cases"],
      updateFrequency: "Real-time",
      historicalData: "Unlimited",
      apiDocs: "https://developer.salesforce.com",
    },
  },
];

export function getIntegrationById(id: string): Integration | undefined {
  return integrations.find((integration) => integration.id === id);
}

export function getAllIntegrations(): Integration[] {
  return integrations;
}

export function getIntegrationsByCategory(
  category: Integration["category"]
): Integration[] {
  return integrations.filter(
    (integration) => integration.category === category
  );
}

export function getIntegrationsByIds(ids: string[]): Integration[] {
  return integrations.filter((integration) => ids.includes(integration.id));
}

// Note: This function references workflows, but we keep it here for cross-referencing
// The actual implementation would be: getWorkflowsByIntegration(integrationId)
