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

  // Conversion-focused messaging
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
    conversionCopy: {
      whyConnect: {
        headline: "Turn Facebook Ad Data Into Instant Optimization Actions",
        description:
          "Stop manually analyzing spreadsheets. Get AI-powered insights that tell you exactly which ads to scale, pause, or optimize—with specific recommendations ready to implement.",
        benefits: [
          "Get instant ROAS analysis across all campaigns with actionable next steps",
          "AI identifies your best-performing audiences and suggests lookalike expansions",
          "Automatic budget reallocation recommendations based on performance trends",
          "Generate ready-to-use ad copy variations based on your top performers",
          "Daily anomaly alerts when campaigns underperform or overspend",
        ],
        cta: "Connect Facebook Ads & Get Optimization Actions",
      },
      painPoints: [
        "Spending hours in Ads Manager trying to figure out what's working",
        "Missing optimization opportunities while campaigns burn budget",
        "Can't quickly identify which audiences to scale or pause",
        "No clear action plan from your ad data",
      ],
      solutions: [
        "AI analyzes your data and creates specific optimization to-do lists",
        "Real-time alerts prevent budget waste on underperforming campaigns",
        "Instant audience insights with expansion recommendations",
        "Generate campaign briefs and ad copy based on your best performers",
      ],
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
    conversionCopy: {
      whyConnect: {
        headline: "Transform Google Ads Data Into Winning Keyword Strategies",
        description:
          "Skip the guesswork. Get AI-powered keyword analysis that shows you exactly which terms to bid higher on, which to pause, and new opportunities to capture.",
        benefits: [
          "Instant keyword ROI analysis with specific bid adjustment recommendations",
          "AI discovers profitable long-tail keyword opportunities you're missing",
          "Automated quality score improvement suggestions for better ad rankings",
          "Smart budget reallocation across campaigns based on performance data",
          "Generate high-converting ad copy variations from your best performers",
        ],
        cta: "Connect Google Ads & Optimize Keywords Now",
      },
      painPoints: [
        "Wasting budget on keywords that don't convert",
        "Missing profitable keyword opportunities competitors are capturing",
        "Can't quickly identify which campaigns need attention",
        "No clear strategy for improving quality scores and reducing costs",
      ],
      solutions: [
        "AI identifies your most profitable keywords and suggests bid optimizations",
        "Discover untapped keyword opportunities with conversion potential",
        "Get specific quality score improvement recommendations",
        "Generate campaign optimization checklists based on your data",
      ],
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
    conversionCopy: {
      whyConnect: {
        headline: "Turn Website Traffic Into Growth Action Plans",
        description:
          "Stop drowning in GA4 reports. Get AI that analyzes your traffic patterns and creates specific optimization strategies to increase conversions and revenue.",
        benefits: [
          "AI identifies your highest-converting traffic sources and scaling opportunities",
          "Automatic conversion funnel analysis with specific improvement recommendations",
          "Smart audience segmentation with personalized marketing strategies",
          "Content performance analysis with SEO optimization suggestions",
          "Revenue attribution insights across all marketing channels",
        ],
        cta: "Connect Google Analytics & Get Growth Insights",
      },
      painPoints: [
        "GA4 interface is confusing and hard to get actionable insights from",
        "Can't quickly identify which traffic sources actually drive revenue",
        "Missing conversion opportunities buried in complex reports",
        "No clear strategy for improving website performance",
      ],
      solutions: [
        "AI simplifies GA4 data into clear, actionable growth recommendations",
        "Identify your most profitable traffic sources and how to scale them",
        "Get specific conversion rate optimization suggestions",
        "Generate content and SEO strategies based on your best-performing pages",
      ],
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
    conversionCopy: {
      whyConnect: {
        headline: "Transform E-commerce Data Into Revenue Growth Strategies",
        description:
          "Stop guessing what products to promote. Get AI-powered insights that identify your most profitable customers, products, and marketing opportunities.",
        benefits: [
          "AI identifies your highest-value customers and creates retention strategies",
          "Product performance analysis with inventory and pricing optimization recommendations",
          "Customer lifetime value predictions with personalized marketing campaigns",
          "Seasonal trend analysis with inventory planning suggestions",
          "Abandoned cart recovery strategies based on customer behavior patterns",
        ],
        cta: "Connect Shopify & Boost E-commerce Revenue",
      },
      painPoints: [
        "Can't identify which products are actually profitable after all costs",
        "Missing opportunities to increase customer lifetime value",
        "Inventory decisions based on gut feeling rather than data",
        "No clear strategy for reducing cart abandonment",
      ],
      solutions: [
        "AI calculates true product profitability including all costs and fees",
        "Get specific customer retention and upselling strategies",
        "Smart inventory recommendations based on seasonal trends and demand",
        "Generate personalized email campaigns for cart recovery and retention",
      ],
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
    conversionCopy: {
      whyConnect: {
        headline: "Turn Payment Data Into Revenue Optimization Strategies",
        description:
          "Stop losing money to failed payments and churn. Get AI insights that identify revenue leaks and create specific strategies to maximize your payment success rates.",
        benefits: [
          "AI identifies patterns in failed payments and suggests optimization strategies",
          "Subscription churn prediction with personalized retention campaigns",
          "Revenue forecasting based on payment trends and customer behavior",
          "Dispute prevention strategies based on transaction patterns",
          "Customer payment behavior analysis for pricing optimization",
        ],
        cta: "Connect Stripe & Optimize Revenue Flows",
      },
      painPoints: [
        "Losing revenue to failed payments and subscription churn",
        "Can't predict which customers are likely to cancel subscriptions",
        "No clear strategy for reducing payment disputes and chargebacks",
        "Missing insights about optimal pricing strategies",
      ],
      solutions: [
        "AI identifies payment failure patterns and suggests fixes to increase success rates",
        "Get early warning alerts for customers likely to churn with retention strategies",
        "Reduce disputes with AI-powered transaction monitoring and alerts",
        "Generate pricing optimization recommendations based on customer payment behavior",
      ],
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
    conversionCopy: {
      whyConnect: {
        headline: "Transform CRM Data Into Sales-Winning Strategies",
        description:
          "Stop losing deals in your pipeline. Get AI that analyzes your HubSpot data and creates specific strategies to close more deals and accelerate your sales cycle.",
        benefits: [
          "AI identifies your highest-probability deals and suggests next actions to close them",
          "Lead scoring optimization based on your actual conversion patterns",
          "Sales process analysis with specific bottleneck removal recommendations",
          "Campaign performance insights with audience targeting improvements",
          "Customer journey mapping with personalized nurture sequences",
        ],
        cta: "Connect HubSpot & Accelerate Sales Growth",
      },
      painPoints: [
        "Deals stalling in the pipeline with no clear next steps",
        "Can't identify which leads are actually worth pursuing",
        "Marketing campaigns not generating quality leads",
        "No visibility into what's working in your sales process",
      ],
      solutions: [
        "AI analyzes deal patterns and suggests specific actions to move deals forward",
        "Get data-driven lead scoring that identifies your best prospects",
        "Optimize campaigns with insights about your highest-converting audiences",
        "Generate sales playbooks based on your top performers' successful strategies",
      ],
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
    conversionCopy: {
      whyConnect: {
        headline: "Turn B2B Ad Spend Into Qualified Lead Generation",
        description:
          "Stop wasting budget on LinkedIn ads that don't convert. Get AI insights that identify your most profitable B2B audiences and create campaigns that actually generate sales-ready leads.",
        benefits: [
          "AI identifies your highest-converting professional audiences and job titles",
          "Campaign optimization recommendations based on B2B buyer behavior patterns",
          "Lead quality analysis with scoring based on conversion likelihood",
          "Industry-specific targeting insights for better campaign performance",
          "Creative performance analysis with B2B messaging optimization suggestions",
        ],
        cta: "Connect LinkedIn Ads & Generate Quality B2B Leads",
      },
      painPoints: [
        "LinkedIn ads are expensive but not generating quality leads",
        "Can't identify which professional audiences actually convert",
        "B2B campaigns getting impressions but no meaningful engagement",
        "No clear strategy for optimizing LinkedIn ad creative for professionals",
      ],
      solutions: [
        "AI analyzes your B2B conversion data to identify your ideal professional audience",
        "Get specific targeting recommendations based on job titles that actually convert",
        "Optimize ad creative with messaging that resonates with B2B decision makers",
        "Generate lead nurturing strategies based on LinkedIn campaign performance",
      ],
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
    conversionCopy: {
      whyConnect: {
        headline: "Turn Salesforce Data Into Revenue Acceleration Strategies",
        description:
          "Stop letting deals slip through the cracks. Get AI insights that identify your hottest opportunities, predict deal outcomes, and create specific action plans to close more revenue faster.",
        benefits: [
          "AI predicts deal probability and suggests specific actions to increase close rates",
          "Lead scoring optimization based on your actual conversion patterns",
          "Sales team performance analysis with coaching recommendations",
          "Pipeline forecasting with accuracy improvements using AI modeling",
          "Customer churn risk identification with retention strategy suggestions",
        ],
        cta: "Connect Salesforce & Accelerate Revenue Growth",
      },
      painPoints: [
        "Deals stalling in the pipeline without clear next steps",
        "Can't accurately predict which deals will actually close",
        "Sales team missing opportunities and not following best practices",
        "No early warning system for customers likely to churn",
      ],
      solutions: [
        "AI analyzes your deal patterns and suggests specific actions to move opportunities forward",
        "Get accurate deal probability predictions with recommended next steps",
        "Identify your top sales performers' strategies and replicate them across the team",
        "Receive early alerts for at-risk customers with specific retention strategies",
      ],
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
    conversionCopy: {
      whyConnect: {
        headline: "Transform Instagram Content Into Viral Growth Strategies",
        description:
          "Stop posting blindly. Get AI insights that identify your most engaging content patterns and create specific strategies to grow your Instagram following and drive real business results.",
        benefits: [
          "AI analyzes your top posts to identify viral content patterns and themes",
          "Hashtag optimization recommendations based on your audience engagement",
          "Optimal posting time analysis for maximum reach and engagement",
          "Story performance insights with specific content format recommendations",
          "Influencer collaboration opportunities based on audience overlap analysis",
        ],
        cta: "Connect Instagram & Accelerate Social Growth",
      },
      painPoints: [
        "Posting consistently but not seeing follower or engagement growth",
        "Can't identify which content types resonate with your audience",
        "Wasting time on hashtags that don't actually increase reach",
        "Stories getting low views despite having followers",
      ],
      solutions: [
        "AI identifies your most engaging content patterns and suggests similar post ideas",
        "Get data-driven hashtag strategies that actually increase your reach",
        "Optimize posting schedule based on when your audience is most active",
        "Generate content calendars based on your highest-performing post types",
      ],
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
    conversionCopy: {
      whyConnect: {
        headline: "Transform Spreadsheets Into Intelligent Business Insights",
        description:
          "Stop manually analyzing spreadsheet data. Get AI that automatically identifies trends, anomalies, and opportunities in your Google Sheets data—with actionable recommendations.",
        benefits: [
          "AI automatically identifies patterns and trends in your spreadsheet data",
          "Smart anomaly detection alerts for unusual changes in your metrics",
          "Generate executive summaries and reports from your sheet data",
          "Predictive analysis based on historical trends in your spreadsheets",
          "Automated data validation and quality checks for cleaner insights",
        ],
        cta: "Connect Google Sheets & Get Intelligent Analysis",
      },
      painPoints: [
        "Spending hours manually analyzing spreadsheet data for insights",
        "Missing important trends and anomalies buried in your data",
        "Can't easily create professional reports from spreadsheet data",
        "No way to predict future trends based on historical spreadsheet data",
      ],
      solutions: [
        "AI automatically analyzes your sheets and highlights key insights and trends",
        "Get instant alerts when important metrics change significantly",
        "Generate professional reports and dashboards from your spreadsheet data",
        "Use predictive AI to forecast trends based on your historical data",
      ],
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
    conversionCopy: {
      whyConnect: {
        headline: "Transform Database Queries Into Business Intelligence",
        description:
          "Stop writing complex SQL queries manually. Ask questions in plain English and get instant insights from your PostgreSQL database—with AI that understands your business context.",
        benefits: [
          "Ask questions in natural language and get instant SQL queries and results",
          "AI automatically identifies patterns and anomalies in your database",
          "Generate executive dashboards and reports from your database data",
          "Smart data quality monitoring with automated alerts for issues",
          "Predictive analytics based on historical database trends",
        ],
        cta: "Connect PostgreSQL & Get Instant Database Insights",
      },
      painPoints: [
        "Need to write complex SQL queries to get basic business insights",
        "Important data patterns and anomalies going unnoticed",
        "Can't easily create reports and dashboards from database data",
        "No way to monitor data quality and catch issues early",
      ],
      solutions: [
        "Ask questions in plain English and get instant database insights",
        "AI continuously monitors your data and alerts you to important changes",
        "Generate professional reports and dashboards without writing SQL",
        "Automated data quality checks ensure your insights are always accurate",
      ],
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
