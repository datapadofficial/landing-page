import { Team } from "@/types/team";

export const teams: Team[] = [
  {
    slug: "marketing",
    name: "Marketing",
    description:
      "Analyze campaign performance, ROI, and marketing attribution across all channels",
    icon: "trending-up",
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
      "data-blending",
      "dashboards",
      "ai-data-agent",
      "workflows",
    ],
    painPoints: [
      {
        icon: "scatter-chart",
        title: "Data Scattered Everywhere",
        description:
          "Campaign metrics are spread across Facebook Ads, Google Ads, email platforms, and analytics tools. Getting a unified view requires hours of manual work.",
      },
      {
        icon: "clock",
        title: "Manual Reporting Hell",
        description:
          "Spending 10+ hours weekly copying data from different platforms into spreadsheets. Reports are outdated by the time they're finished.",
      },
      {
        icon: "question-mark",
        title: "Attribution Mystery",
        description:
          "Can't prove which campaigns actually drive revenue. Marketing gets blamed for poor ROI when attribution is broken, not strategy.",
      },
    ],
    priority: 1,
  },
  {
    slug: "sales",
    name: "Sales",
    description:
      "Track sales performance, pipeline health, and revenue metrics",
    icon: "dollar-sign",
    color: "chart-green",
    seoTitle: "Sales Analytics & Performance Tracking | Datapad",
    seoDescription:
      "Monitor sales performance, pipeline health, and revenue metrics with AI-powered sales analytics and dashboards.",
    featuredIntegrations: ["salesforce", "hubspot", "stripe"],
    featuredFeatures: ["ai-data-agent", "workflows", "shareable-reports"],
    painPoints: [
      {
        icon: "eye-off",
        title: "Pipeline Blindness",
        description:
          "Deal visibility is limited to what's in CRM, but data is often outdated or incomplete. Can't see which deals are really at risk.",
      },
      {
        icon: "trending-up-down",
        title: "Forecasting By Gut",
        description:
          "Monthly forecasts are based on intuition, not data. Revenue predictions are consistently off, making planning impossible.",
      },
      {
        icon: "file-spreadsheet",
        title: "Commission Chaos",
        description:
          "Territory management and commission calculations happen in spreadsheets. Errors are common and disputes waste everyone's time.",
      },
    ],
    priority: 5,
  },
  {
    slug: "retail-ecommerce",
    name: "Retail & E-Commerce",
    description:
      "Monitor online store performance, inventory, and customer behavior",
    icon: "shopping-cart",
    color: "chart-purple",
    seoTitle: "E-Commerce Analytics & Retail Intelligence | Datapad",
    seoDescription:
      "Optimize your online store with comprehensive e-commerce analytics. Track sales, inventory, customer behavior, and conversion rates.",
    featuredIntegrations: ["shopify", "stripe", "google-analytics"],
    featuredFeatures: ["generative-dashboards", "data-blending", "workflows"],
    painPoints: [
      {
        icon: "package-x",
        title: "Inventory Chaos",
        description:
          "Stock levels are never accurate across channels. Overselling happens regularly while popular items go out of stock unnoticed.",
      },
      {
        icon: "trending-down",
        title: "Demand Guessing Game",
        description:
          "Can't predict seasonal trends or customer demand. Ordering too much or too little inventory burns cash and loses sales.",
      },
      {
        icon: "user-x",
        title: "Customer Journey Mystery",
        description:
          "Customer behavior insights are buried in complex analytics tools. Can't understand why visitors leave without buying.",
      },
    ],
    priority: 6,
  },
  {
    slug: "content-seo",
    name: "Content & SEO",
    description: "Track content performance, SEO rankings, and organic growth",
    icon: "search",
    color: "chart-blue",
    seoTitle: "SEO Analytics & Content Performance | Datapad",
    seoDescription:
      "Improve your SEO strategy with AI-powered content and search analytics. Track rankings, organic traffic, and content performance.",
    featuredIntegrations: ["google-analytics", "google-searchconsole"],
    featuredFeatures: ["ai-data-agent", "web-access", "workflows"],
    painPoints: [
      {
        icon: "trending-down",
        title: "Ranking Changes Go Unnoticed",
        description:
          "Keyword ranking drops take weeks to discover. By then, organic traffic has already plummeted and recovery takes months.",
      },
      {
        icon: "scatter-chart",
        title: "Content Performance Puzzle",
        description:
          "Content metrics are scattered across Analytics, Search Console, and social platforms. Can't tell which content actually drives business results.",
      },
      {
        icon: "link-2-off",
        title: "Content-Revenue Disconnect",
        description:
          "Content efforts can't be connected to actual business outcomes. Hard to prove content ROI or justify content marketing budgets.",
      },
    ],
    priority: 2,
  },
  {
    slug: "social-media",
    name: "Social Media",
    description:
      "Analyze social media performance, engagement, and brand metrics",
    icon: "users",
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
    painPoints: [
      {
        icon: "repeat",
        title: "Platform Juggling Nightmare",
        description:
          "Managing metrics across Facebook, Instagram, LinkedIn, TikTok, and Twitter manually. Each platform has different reporting periods and metrics.",
      },
      {
        icon: "question-mark",
        title: "Vanity Metrics Trap",
        description:
          "Lots of likes and shares, but can't prove social media actually drives business results. Engagement data doesn't translate to revenue impact.",
      },
      {
        icon: "dollar-sign",
        title: "Influencer ROI Black Hole",
        description:
          "Influencer campaigns cost thousands but ROI is impossible to calculate. Can't track which partnerships actually drive sales or brand awareness.",
      },
    ],
    priority: 7,
  },
  {
    slug: "product-management",
    name: "Product Management",
    description:
      "Track product usage, feature adoption, and user behavior analytics",
    icon: "package",
    color: "chart-yellow",
    seoTitle: "Product Analytics & User Behavior Tracking | Datapad",
    seoDescription:
      "Understand product usage and user behavior with advanced product analytics. Track feature adoption, user journeys, and engagement.",
    featuredIntegrations: ["mixpanel", "google-analytics"],
    featuredFeatures: ["ai-data-agent", "learning-layer", "workflows"],
    painPoints: [
      {
        icon: "search-x",
        title: "User Behavior Mystery",
        description:
          "User behavior insights are buried in complex analytics tools. Need a data science degree to understand why users churn or don't adopt features.",
      },
      {
        icon: "clock",
        title: "Late Feature Adoption Alerts",
        description:
          "Discover feature adoption issues weeks after launch. By then, users have already formed habits and changing behavior is nearly impossible.",
      },
      {
        icon: "message-circle",
        title: "Scattered Customer Feedback",
        description:
          "Customer feedback is scattered across support tickets, app store reviews, and user interviews. Can't connect feedback to actual product usage patterns.",
      },
    ],
    priority: 8,
  },
  {
    slug: "finance",
    name: "Finance",
    description:
      "Monitor financial performance, cash flow, and profitability metrics",
    icon: "calculator",
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
    painPoints: [
      {
        icon: "file-spreadsheet",
        title: "Excel Reporting Prison",
        description:
          "Financial reporting is still done in Excel with manual data entry. Reports are error-prone, time-consuming, and outdated before they're finished.",
      },
      {
        icon: "crystal-ball",
        title: "Reactive Cash Flow Management",
        description:
          "Cash flow forecasting happens after problems arise. Can't predict cash crunches or identify seasonal patterns until it's too late.",
      },
      {
        icon: "building",
        title: "Department Spending Blindness",
        description:
          "Department spending insights arrive after budgets are already blown. Can't track ROI by department or optimize resource allocation.",
      },
    ],
    priority: 9,
  },
  {
    slug: "agency",
    name: "Agency",
    description:
      "Client reporting, campaign management, and performance tracking for agencies",
    icon: "building",
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
    painPoints: [
      {
        icon: "clock",
        title: "Client Reporting Time Sink",
        description:
          "20+ hours weekly creating client reports manually. Copy-pasting data from different platforms into branded PowerPoints and PDFs for each client.",
      },
      {
        icon: "bar-chart-3",
        title: "Cross-Client Performance Mystery",
        description:
          "Can't easily compare campaign performance across clients. Hard to identify which strategies work best or share learnings across accounts.",
      },
      {
        icon: "dollar-sign",
        title: "Profitability Per Client Unknown",
        description:
          "Don't know which clients are actually profitable. Time tracking and cost allocation are manual, making pricing and resource decisions difficult.",
      },
    ],
    priority: 3,
  },
  {
    slug: "growth",
    name: "Growth",
    description: "Customer acquisition, retention, and lifecycle analytics",
    icon: "trending-up",
    color: "chart-purple",
    seoTitle: "Growth Analytics & Customer Lifecycle Tracking | Datapad",
    seoDescription:
      "Optimize growth strategies with customer acquisition, retention, and lifecycle analytics. Track LTV, CAC, and growth metrics.",
    featuredIntegrations: ["mixpanel", "stripe", "google-analytics"],
    featuredFeatures: ["ai-data-agent", "learning-layer", "workflows"],
    painPoints: [
      {
        icon: "calculator",
        title: "CAC/LTV Guesswork",
        description:
          "Customer acquisition cost and lifetime value calculations are estimates based on incomplete data. Growth decisions are based on hunches, not hard numbers.",
      },
      {
        icon: "user-minus",
        title: "Churn Prediction After the Fact",
        description:
          "Discover customers are churning after they've already left. Can't identify at-risk users or intervene before it's too late to save them.",
      },
      {
        icon: "flask",
        title: "Growth Experiment Measurement Gap",
        description:
          "Growth experiments lack proper measurement and statistical significance. Can't tell if improvements are real or just random variance.",
      },
    ],
    priority: 10,
  },
  {
    slug: "supply-chain",
    name: "Supply Chain",
    description:
      "Inventory management, logistics, and supply chain optimization",
    icon: "truck",
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
    painPoints: [
      {
        icon: "trending-up",
        title: "Demand Forecasting By History",
        description:
          "Inventory forecasting is based on historical averages, not real market signals. Over-ordering ties up cash while stockouts lose sales.",
      },
      {
        icon: "clock",
        title: "Supplier Performance Delays",
        description:
          "Supplier performance tracking is manual and arrives weeks after delivery issues occur. Can't proactively manage supplier relationships.",
      },
      {
        icon: "dollar-sign",
        title: "Hidden Cost Optimization Opportunities",
        description:
          "Cost optimization opportunities are buried in spreadsheets. Can't identify which suppliers, routes, or logistics changes would save the most money.",
      },
    ],
    priority: 11,
  },
  {
    slug: "crm",
    name: "CRM",
    description:
      "Customer relationship management and sales pipeline analytics",
    icon: "users",
    color: "chart-blue",
    seoTitle: "CRM Analytics & Customer Intelligence | Datapad",
    seoDescription:
      "Enhance customer relationships with comprehensive CRM analytics. Track customer interactions, sales pipeline, and relationship metrics.",
    featuredIntegrations: ["salesforce", "hubspot"],
    featuredFeatures: ["ai-data-agent", "learning-layer", "shareable-reports"],
    painPoints: [
      {
        icon: "database",
        title: "Customer Data Silos",
        description:
          "Customer data is scattered across CRM, support tickets, email, and billing systems. Getting a complete customer view requires manual detective work.",
      },
      {
        icon: "heart",
        title: "Relationship Health Guesswork",
        description:
          "Customer relationship health scores are based on gut feelings, not data. Can't predict which customers are at risk of churning or ready to expand.",
      },
      {
        icon: "calendar",
        title: "Outdated Customer Lifetime Value",
        description:
          "Customer lifetime value calculations are updated quarterly at best. Can't make real-time decisions about customer investment and resource allocation.",
      },
    ],
    priority: 4,
  },
];
