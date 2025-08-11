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

// Helper function to create integration objects with consistent structure
const createIntegration = (
  id: string,
  name: string,
  description: string,
  category: Integration["category"],
  website: string,
  dataTypes: string[],
  updateFrequency: string = "Real-time",
  historicalData: string = "Unlimited",
  apiDocs?: string,
  seoContent?: Integration["seoContent"],
  hasCustomPage: boolean = false
): Integration => ({
  id,
  name,
  description,
  category,
  icon: `/images/integrations/${id}.png`,
  website,
  specs: {
    dataTypes,
    updateFrequency,
    historicalData,
    apiDocs,
  },
  seoContent,
  hasCustomPage,
});

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
  {
    id: "instagram-business",
    name: "Instagram Business",
    description:
      "Instagram's business platform for managing posts, stories, and analyzing social media performance",
    category: "social",
    icon: "/images/integrations/instagram-business.png",
    website: "https://business.instagram.com",
    specs: {
      dataTypes: ["posts", "stories", "insights", "followers", "engagement"],
      updateFrequency: "Real-time",
      historicalData: "2+ years",
      apiDocs: "https://developers.facebook.com/docs/instagram-api",
    },
    seoContent: {
      overview: `# Instagram Business Integration

Connect your Instagram Business account to Datapad for comprehensive social media analytics. Track post performance, story engagement, follower growth, and audience insights to optimize your Instagram marketing strategy.`,
      useCases: `## Common Use Cases

- **Content Performance**: Analyze which posts and stories drive the most engagement
- **Audience Growth**: Track follower growth and demographic insights
- **Hashtag Analysis**: Identify the most effective hashtags for your content
- **Story Analytics**: Monitor story views, exits, and engagement rates
- **Competitor Benchmarking**: Compare your performance against industry standards`,
      setup: `## Quick Setup Guide

1. **Connect Account**: Link your Instagram Business account
2. **Grant Permissions**: Allow access to posts, insights, and follower data
3. **Select Metrics**: Choose which KPIs you want to track
4. **Set Refresh Rate**: Configure how often to sync your data
5. **Start Analyzing**: Begin exploring your Instagram analytics`,
    },
  },
  // Analytics & Tracking
  {
    id: "google-sheets",
    name: "Google Sheets",
    description:
      "Google's cloud-based spreadsheet application for data analysis and collaboration",
    category: "other",
    icon: "/images/integrations/google-sheets.png",
    website: "https://sheets.google.com",
    specs: {
      dataTypes: ["spreadsheets", "cells", "charts", "formulas", "data"],
      updateFrequency: "Real-time",
      historicalData: "Unlimited",
      apiDocs: "https://developers.google.com/sheets/api",
    },
  },
  {
    id: "airtable",
    name: "Airtable",
    description:
      "Cloud-based database platform that combines spreadsheet simplicity with database power",
    category: "database",
    icon: "/images/integrations/airtable.png",
    website: "https://airtable.com",
    specs: {
      dataTypes: ["records", "tables", "bases", "attachments", "formulas"],
      updateFrequency: "Real-time",
      historicalData: "Unlimited",
      apiDocs: "https://airtable.com/developers/web/api/introduction",
    },
  },
  // Email Marketing
  {
    id: "mailchimp",
    name: "Mailchimp",
    description:
      "Email marketing platform for managing mailing lists and creating campaigns",
    category: "email",
    icon: "/images/integrations/mailchimp.png",
    website: "https://mailchimp.com",
    specs: {
      dataTypes: [
        "campaigns",
        "audiences",
        "reports",
        "automation",
        "subscribers",
      ],
      updateFrequency: "Real-time",
      historicalData: "Unlimited",
      apiDocs: "https://mailchimp.com/developer/marketing/",
    },
  },
  {
    id: "klaviyo",
    name: "Klaviyo",
    description: "Email and SMS marketing platform for e-commerce businesses",
    category: "email",
    icon: "/images/integrations/klaviyo.png",
    website: "https://www.klaviyo.com",
    specs: {
      dataTypes: ["campaigns", "flows", "profiles", "events", "segments"],
      updateFrequency: "Real-time",
      historicalData: "Unlimited",
      apiDocs: "https://developers.klaviyo.com/en",
    },
  },
  {
    id: "activecampaign",
    name: "ActiveCampaign",
    description:
      "Customer experience automation platform combining email marketing, marketing automation, and CRM",
    category: "email",
    icon: "/images/integrations/activecampaign.png",
    website: "https://www.activecampaign.com",
    specs: {
      dataTypes: ["contacts", "campaigns", "automations", "deals", "tags"],
      updateFrequency: "Real-time",
      historicalData: "Unlimited",
      apiDocs: "https://developers.activecampaign.com",
    },
  },
  // Social Media
  {
    id: "linkedin-social",
    name: "LinkedIn",
    description:
      "Professional networking platform for business connections and content sharing",
    category: "social",
    icon: "/images/integrations/linkedin-social.png",
    website: "https://linkedin.com",
    specs: {
      dataTypes: [
        "posts",
        "connections",
        "company_pages",
        "analytics",
        "messages",
      ],
      updateFrequency: "Real-time",
      historicalData: "2+ years",
      apiDocs: "https://docs.microsoft.com/en-us/linkedin/",
    },
  },
  {
    id: "facebook",
    name: "Facebook",
    description:
      "Social media platform for connecting people and businesses worldwide",
    category: "social",
    icon: "/images/integrations/facebook.png",
    website: "https://facebook.com",
    specs: {
      dataTypes: ["posts", "pages", "insights", "comments", "reactions"],
      updateFrequency: "Real-time",
      historicalData: "2+ years",
      apiDocs: "https://developers.facebook.com/docs/graph-api",
    },
  },
  {
    id: "tiktok",
    name: "TikTok",
    description:
      "Short-form video platform for creative content and viral marketing",
    category: "social",
    icon: "/images/integrations/tiktok.png",
    website: "https://tiktok.com",
    specs: {
      dataTypes: ["videos", "profiles", "analytics", "hashtags", "trends"],
      updateFrequency: "Real-time",
      historicalData: "1+ years",
      apiDocs: "https://developers.tiktok.com",
    },
  },
  {
    id: "youtube",
    name: "YouTube",
    description:
      "Video sharing platform for content creation and audience engagement",
    category: "social",
    icon: "/images/integrations/youtube.png",
    website: "https://youtube.com",
    specs: {
      dataTypes: ["videos", "channels", "analytics", "comments", "subscribers"],
      updateFrequency: "Real-time",
      historicalData: "Unlimited",
      apiDocs: "https://developers.google.com/youtube",
    },
  },
  // Advertising Platforms
  {
    id: "google-admanager",
    name: "Google Ad Manager",
    description:
      "Google's ad management platform for publishers and advertisers",
    category: "advertising",
    icon: "/images/integrations/google-admanager.png",
    website: "https://admanager.google.com",
    specs: {
      dataTypes: ["orders", "line_items", "creatives", "reports", "inventory"],
      updateFrequency: "Real-time",
      historicalData: "3+ years",
      apiDocs: "https://developers.google.com/ad-manager",
    },
  },
  {
    id: "bing-ads",
    name: "Microsoft Advertising",
    description:
      "Microsoft's advertising platform for search and display campaigns",
    category: "advertising",
    icon: "/images/integrations/bing-ads.png",
    website: "https://ads.microsoft.com",
    specs: {
      dataTypes: ["campaigns", "ad_groups", "keywords", "ads", "reports"],
      updateFrequency: "Real-time",
      historicalData: "3+ years",
      apiDocs: "https://docs.microsoft.com/en-us/advertising/",
    },
  },
  {
    id: "snapchat-ads",
    name: "Snapchat Ads",
    description:
      "Snapchat's advertising platform for reaching younger demographics",
    category: "advertising",
    icon: "/images/integrations/snapchat-ads.png",
    website: "https://ads.snapchat.com",
    specs: {
      dataTypes: ["campaigns", "ad_sets", "ads", "audiences", "insights"],
      updateFrequency: "Real-time",
      historicalData: "2+ years",
      apiDocs: "https://developers.snapchat.com/api/docs/",
    },
  },
  {
    id: "twitter-ads",
    name: "X Ads (Twitter)",
    description: "X's advertising platform for promoted tweets and campaigns",
    category: "advertising",
    icon: "/images/integrations/twitter-ads.png",
    website: "https://ads.x.com",
    specs: {
      dataTypes: [
        "campaigns",
        "tweets",
        "audiences",
        "analytics",
        "conversions",
      ],
      updateFrequency: "Real-time",
      historicalData: "2+ years",
      apiDocs: "https://developer.x.com/en/docs/twitter-ads-api",
    },
  },
  // Databases
  {
    id: "mysql",
    name: "MySQL",
    description: "Open-source relational database management system",
    category: "database",
    icon: "/images/integrations/mysql.png",
    website: "https://mysql.com",
    specs: {
      dataTypes: ["tables", "queries", "procedures", "functions", "views"],
      updateFrequency: "Real-time",
      historicalData: "Unlimited",
      apiDocs: "https://dev.mysql.com/doc/",
    },
  },
  {
    id: "postgres",
    name: "PostgreSQL",
    description: "Advanced open-source relational database system",
    category: "database",
    icon: "/images/integrations/postgres.png",
    website: "https://postgresql.org",
    specs: {
      dataTypes: ["tables", "queries", "functions", "triggers", "indexes"],
      updateFrequency: "Real-time",
      historicalData: "Unlimited",
      apiDocs: "https://www.postgresql.org/docs/",
    },
  },
  {
    id: "mongodb",
    name: "MongoDB",
    description: "NoSQL document database for modern applications",
    category: "database",
    icon: "/images/integrations/mongodb.png",
    website: "https://mongodb.com",
    specs: {
      dataTypes: [
        "documents",
        "collections",
        "aggregations",
        "indexes",
        "queries",
      ],
      updateFrequency: "Real-time",
      historicalData: "Unlimited",
      apiDocs: "https://docs.mongodb.com/",
    },
  },
  {
    id: "snowflake",
    name: "Snowflake",
    description: "Cloud data platform for data warehousing and analytics",
    category: "database",
    icon: "/images/integrations/snowflake.png",
    website: "https://snowflake.com",
    specs: {
      dataTypes: ["tables", "views", "warehouses", "databases", "schemas"],
      updateFrequency: "Real-time",
      historicalData: "Unlimited",
      apiDocs: "https://docs.snowflake.com/",
    },
  },
  {
    id: "redshift",
    name: "Amazon Redshift",
    description: "Amazon's cloud data warehouse for big data analytics",
    category: "database",
    icon: "/images/integrations/redshift.png",
    website: "https://aws.amazon.com/redshift/",
    specs: {
      dataTypes: ["tables", "clusters", "queries", "schemas", "databases"],
      updateFrequency: "Real-time",
      historicalData: "Unlimited",
      apiDocs: "https://docs.aws.amazon.com/redshift/",
    },
  },
  {
    id: "google-bigquery",
    name: "Google BigQuery",
    description: "Google's serverless data warehouse for analytics at scale",
    category: "database",
    icon: "/images/integrations/google-bigquery.png",
    website: "https://cloud.google.com/bigquery",
    specs: {
      dataTypes: ["tables", "datasets", "queries", "jobs", "routines"],
      updateFrequency: "Real-time",
      historicalData: "Unlimited",
      apiDocs: "https://cloud.google.com/bigquery/docs",
    },
  },
  // CRM & Customer Support
  {
    id: "intercom",
    name: "Intercom",
    description:
      "Customer messaging platform for sales, marketing, and support",
    category: "crm",
    icon: "/images/integrations/intercom.png",
    website: "https://intercom.com",
    specs: {
      dataTypes: ["conversations", "users", "leads", "articles", "events"],
      updateFrequency: "Real-time",
      historicalData: "Unlimited",
      apiDocs: "https://developers.intercom.com",
    },
  },
  {
    id: "zendesk",
    name: "Zendesk",
    description: "Customer service platform for support ticket management",
    category: "crm",
    icon: "/images/integrations/zendesk.png",
    website: "https://zendesk.com",
    specs: {
      dataTypes: [
        "tickets",
        "users",
        "organizations",
        "groups",
        "satisfaction",
      ],
      updateFrequency: "Real-time",
      historicalData: "Unlimited",
      apiDocs: "https://developer.zendesk.com",
    },
  },
  // Analytics & SEO
  {
    id: "ahrefs",
    name: "Ahrefs",
    description:
      "SEO toolset for backlink analysis, keyword research, and competitor analysis",
    category: "analytics",
    icon: "/images/integrations/ahrefs.png",
    website: "https://ahrefs.com",
    specs: {
      dataTypes: [
        "keywords",
        "backlinks",
        "rankings",
        "traffic",
        "competitors",
      ],
      updateFrequency: "Daily",
      historicalData: "5+ years",
      apiDocs: "https://ahrefs.com/api",
    },
  },
  {
    id: "semrush",
    name: "SEMrush",
    description:
      "Digital marketing toolkit for SEO, PPC, and content marketing",
    category: "analytics",
    icon: "/images/integrations/semrush.png",
    website: "https://semrush.com",
    specs: {
      dataTypes: ["keywords", "domains", "ads", "backlinks", "traffic"],
      updateFrequency: "Daily",
      historicalData: "3+ years",
      apiDocs: "https://developer.semrush.com",
    },
  },
  {
    id: "google-searchconsole",
    name: "Google Search Console",
    description:
      "Google's tool for monitoring website performance in search results",
    category: "analytics",
    icon: "/images/integrations/google-searchconsole.png",
    website: "https://search.google.com/search-console",
    specs: {
      dataTypes: ["queries", "pages", "clicks", "impressions", "positions"],
      updateFrequency: "Daily",
      historicalData: "16 months",
      apiDocs: "https://developers.google.com/webmaster-tools",
    },
  },
  {
    id: "google-mybusiness",
    name: "Google My Business",
    description:
      "Google's platform for managing business listings and local presence",
    category: "analytics",
    icon: "/images/integrations/google-mybusiness.png",
    website: "https://business.google.com",
    specs: {
      dataTypes: ["locations", "posts", "reviews", "insights", "photos"],
      updateFrequency: "Real-time",
      historicalData: "18 months",
      apiDocs: "https://developers.google.com/my-business",
    },
  },
  {
    id: "metabase",
    name: "Metabase",
    description:
      "Open-source business intelligence and data visualization tool",
    category: "analytics",
    icon: "/images/integrations/metabase.png",
    website: "https://metabase.com",
    specs: {
      dataTypes: [
        "dashboards",
        "questions",
        "collections",
        "databases",
        "metrics",
      ],
      updateFrequency: "Real-time",
      historicalData: "Unlimited",
      apiDocs: "https://www.metabase.com/docs/latest/api-documentation",
    },
  },
  {
    id: "tableau",
    name: "Tableau",
    description: "Data visualization and business intelligence platform",
    category: "analytics",
    icon: "/images/integrations/tableau.png",
    website: "https://tableau.com",
    specs: {
      dataTypes: ["workbooks", "datasources", "views", "users", "projects"],
      updateFrequency: "Real-time",
      historicalData: "Unlimited",
      apiDocs: "https://help.tableau.com/current/api/rest_api/en-us/",
    },
  },
  // Finance & Accounting
  {
    id: "quickbooks",
    name: "QuickBooks",
    description: "Accounting software for small and medium-sized businesses",
    category: "finance",
    icon: "/images/integrations/quickbooks.png",
    website: "https://quickbooks.intuit.com",
    specs: {
      dataTypes: ["invoices", "customers", "vendors", "items", "reports"],
      updateFrequency: "Real-time",
      historicalData: "Unlimited",
      apiDocs:
        "https://developer.intuit.com/app/developer/qbo/docs/api/accounting",
    },
  },
  {
    id: "profitwell",
    name: "ProfitWell",
    description: "Subscription analytics and revenue optimization platform",
    category: "finance",
    icon: "/images/integrations/profitwell.png",
    website: "https://profitwell.com",
    specs: {
      dataTypes: ["subscriptions", "revenue", "churn", "ltv", "cohorts"],
      updateFrequency: "Real-time",
      historicalData: "Unlimited",
      apiDocs: "https://profitwellapiv2.docs.apiary.io",
    },
  },
  // E-commerce
  {
    id: "woo-commerce",
    name: "WooCommerce",
    description: "WordPress e-commerce plugin for online stores",
    category: "ecommerce",
    icon: "/images/integrations/woo-commerce.png",
    website: "https://woocommerce.com",
    specs: {
      dataTypes: ["orders", "products", "customers", "coupons", "reports"],
      updateFrequency: "Real-time",
      historicalData: "Unlimited",
      apiDocs: "https://woocommerce.github.io/woocommerce-rest-api-docs/",
    },
  },
  // Communication & Automation
  {
    id: "slack",
    name: "Slack",
    description: "Business communication platform for team collaboration",
    category: "other",
    icon: "/images/integrations/slack.png",
    website: "https://slack.com",
    specs: {
      dataTypes: ["messages", "channels", "users", "files", "apps"],
      updateFrequency: "Real-time",
      historicalData: "Unlimited",
      apiDocs: "https://api.slack.com",
    },
  },
  {
    id: "zapier",
    name: "Zapier",
    description: "Automation platform connecting apps and services",
    category: "other",
    icon: "/images/integrations/zapier.png",
    website: "https://zapier.com",
    specs: {
      dataTypes: ["zaps", "triggers", "actions", "apps", "webhooks"],
      updateFrequency: "Real-time",
      historicalData: "2 months",
      apiDocs: "https://zapier.com/developer/documentation/v2/rest-api/",
    },
  },
  // Additional Databases
  {
    id: "clickhouse",
    name: "ClickHouse",
    description: "Open-source column-oriented database for analytics",
    category: "database",
    icon: "/images/integrations/clickhouse.png",
    website: "https://clickhouse.com",
    specs: {
      dataTypes: [
        "tables",
        "queries",
        "materialized_views",
        "dictionaries",
        "functions",
      ],
      updateFrequency: "Real-time",
      historicalData: "Unlimited",
      apiDocs: "https://clickhouse.com/docs/en/interfaces/http/",
    },
  },
  {
    id: "mariadb",
    name: "MariaDB",
    description: "Open-source relational database, MySQL-compatible",
    category: "database",
    icon: "/images/integrations/mariadb.png",
    website: "https://mariadb.org",
    specs: {
      dataTypes: ["tables", "queries", "procedures", "functions", "views"],
      updateFrequency: "Real-time",
      historicalData: "Unlimited",
      apiDocs: "https://mariadb.com/kb/en/mariadb-server-documentation/",
    },
  },
  {
    id: "mssql",
    name: "Microsoft SQL Server",
    description: "Microsoft's relational database management system",
    category: "database",
    icon: "/images/integrations/mssql.png",
    website: "https://www.microsoft.com/sql-server",
    specs: {
      dataTypes: ["tables", "queries", "procedures", "functions", "views"],
      updateFrequency: "Real-time",
      historicalData: "Unlimited",
      apiDocs: "https://docs.microsoft.com/en-us/sql/",
    },
  },
  {
    id: "oracle",
    name: "Oracle Database",
    description: "Enterprise relational database management system",
    category: "database",
    icon: "/images/integrations/oracle.png",
    website: "https://oracle.com/database",
    specs: {
      dataTypes: ["tables", "queries", "procedures", "packages", "views"],
      updateFrequency: "Real-time",
      historicalData: "Unlimited",
      apiDocs: "https://docs.oracle.com/en/database/",
    },
  },
  // Data Sources & Utilities
  {
    id: "csv",
    name: "CSV Files",
    description: "Comma-separated values file format for data import/export",
    category: "other",
    icon: "/images/integrations/csv.png",
    website: "https://en.wikipedia.org/wiki/Comma-separated_values",
    specs: {
      dataTypes: ["rows", "columns", "headers", "delimited_data", "text"],
      updateFrequency: "Manual",
      historicalData: "Unlimited",
      apiDocs: "https://tools.ietf.org/html/rfc4180",
    },
  },
  {
    id: "python",
    name: "Python",
    description: "Programming language for data analysis and automation",
    category: "other",
    icon: "/images/integrations/python.png",
    website: "https://python.org",
    specs: {
      dataTypes: ["scripts", "functions", "modules", "data", "apis"],
      updateFrequency: "Real-time",
      historicalData: "Unlimited",
      apiDocs: "https://docs.python.org/3/",
    },
  },
  {
    id: "manual",
    name: "Manual Data Entry",
    description: "Direct data input and custom data sources",
    category: "other",
    icon: "/images/integrations/manual.png",
    website: "https://datapad.io",
    specs: {
      dataTypes: ["custom", "manual", "forms", "surveys", "user_input"],
      updateFrequency: "Manual",
      historicalData: "Unlimited",
      apiDocs: "https://datapad.io/docs",
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
