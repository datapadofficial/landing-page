import { Integration } from "@/types/integration";

export const integrations: Integration[] = [
  {
    id: "facebook-ads",
    name: "Facebook Ads",
    category: "advertising",
    icon: "/images/integrations/facebook-ads.png",
    website: "https://www.facebook.com/business/ads",
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
    painPoints: [
      {
        title: "Manual Analysis Hours",
        description:
          "Spending hours in Ads Manager trying to figure out what's working",
        icon: "clock",
      },
      {
        title: "Missed Optimization Opportunities",
        description:
          "Missing optimization opportunities while campaigns burn budget",
        icon: "target",
      },
      {
        title: "Audience Scaling Confusion",
        description: "Can't quickly identify which audiences to scale or pause",
        icon: "users",
      },
    ],
    solutions: [
      {
        title: "AI Optimization Lists",
        description:
          "AI analyzes your data and creates specific optimization to-do lists",
      },
      {
        title: "Real-time Budget Alerts",
        description:
          "Real-time alerts prevent budget waste on underperforming campaigns",
      },
      {
        title: "Instant Audience Insights",
        description: "Instant audience insights with expansion recommendations",
      },
      {
        title: "Generated Campaign Briefs",
        description:
          "Generate campaign briefs and ad copy based on your best performers",
      },
    ],
  },
  {
    id: "google-ads",
    name: "Google Ads",
    category: "advertising",
    icon: "/images/integrations/google-ads.png",
    website: "https://ads.google.com",
    headline: "Turn Google Ads spend into compounding ROI — automatically",
    description:
      "Plug in Google Ads. The agent fetches data, finds waste, generates strategy, and ships optimizations—on your approval or on autopilot.",
    benefits: [
      "Instant keyword ROI analysis with specific bid adjustment recommendations",
      "AI discovers profitable long-tail keyword opportunities you're missing",
      "Automated quality score improvement suggestions for better ad rankings",
      "Smart budget reallocation across campaigns based on performance data",
      "Generate high-converting ad copy variations from your best performers",
    ],
    cta: "Connect Google Ads",
    secondaryCta: "Optimize Your Campaigns",
    painPoints: [
      {
        title: "Spending with No Conversions",
        description: "Your ads are getting clicks but nobody's buying anything",
        icon: "credit-card",
      },
      {
        title: "Don't Know Which Keywords to Target",
        description:
          "Shooting in the dark with keyword choices while competitors steal your traffic",
        icon: "search",
      },
      {
        title: "Can't Tell What's Working vs. What's Not",
        description:
          "Drowning in Google Ads data with no clear picture of what drives results",
        icon: "bar-chart-3",
      },
    ],
    solutions: [
      {
        title: "See Exactly Which Keywords Convert",
        description:
          "Get instant clarity on which keywords actually drive sales, not just clicks",
      },
      {
        title: "Get Profitable Keyword Recommendations",
        description:
          "AI finds high-converting keywords your competitors are using that you're missing",
      },
      {
        title: "Clear Performance Breakdown by Campaign",
        description:
          "See exactly which campaigns, ad groups, and keywords are making you money",
      },
    ],
  },
  {
    id: "google-analytics",
    name: "Google Analytics",
    category: "analytics",
    icon: "/images/integrations/google-analytics.png",
    website: "https://analytics.google.com",
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
    painPoints: [
      {
        title: "Confusing GA4 Interface",
        description:
          "GA4 interface is confusing and hard to get actionable insights from",
        icon: "help-circle",
      },
      {
        title: "Revenue Source Clarity",
        description:
          "Can't quickly identify which traffic sources actually drive revenue",
        icon: "dollar-sign",
      },
      {
        title: "Hidden Conversion Opportunities",
        description:
          "Missing conversion opportunities buried in complex reports",
        icon: "eye-off",
      },
    ],
    solutions: [
      {
        title: "Simplified Growth Recommendations",
        description:
          "AI simplifies GA4 data into clear, actionable growth recommendations",
      },
      {
        title: "Profitable Traffic Identification",
        description:
          "Identify your most profitable traffic sources and how to scale them",
      },
      {
        title: "CRO Optimization Suggestions",
        description: "Get specific conversion rate optimization suggestions",
      },
      {
        title: "Content SEO Strategies",
        description:
          "Generate content and SEO strategies based on your best-performing pages",
      },
    ],
  },
  {
    id: "excel",
    name: "Excel",
    category: "analytics",
    icon: "/images/integrations/excel.png",
    website: "https://www.microsoft.com/microsoft-365/excel",
    headline: "Give Your Excel Data an AI Analyst That Builds Dashboards For You",
    description:
      "Connect Excel to Datapad and hand every spreadsheet to an Excel AI analyst. Run Excel analysis using AI, fix Excel with AI cleanup, and turn messy tabs into automated insights, alerts, and board-ready dashboards in minutes.",
    benefits: [
      "Excel AI analyst cleans data, reconciles tabs, and highlights revenue-impacting trends instantly",
      "AI Excel analyzer spots anomalies across sheets and explains the why with natural language context",
      "Excel AI data analyst auto-builds dashboards, decks, and stakeholder updates for every KPI",
      "Run AI Excel data science forecasts, cohort analysis, and scenario planning without writing formulas",
      "Ask questions in chat and get Excel analysis using AI with refreshable answers and charts",
    ],
    cta: "Connect Excel & Launch AI Dashboards",
    painPoints: [
      {
        title: "Manual Spreadsheet Maintenance",
        description:
          "Hours lost cleaning Excel exports, fixing formulas, and reconciling tabs before analysis can start",
        icon: "eraser",
      },
      {
        title: "Dashboards That Go Stale",
        description:
          "Leadership wants live Excel dashboards but updates require tedious copy-paste work",
        icon: "layout-dashboard",
      },
      {
        title: "Slow Answers to Urgent Questions",
        description:
          "Teams wait days for someone to run a fresh Excel report or troubleshoot why numbers broke",
        icon: "alarm-clock",
      },
    ],
    solutions: [
      {
        title: "Fix Excel With AI",
        description:
          "Automated cleanup repairs broken formulas, aligns column headers, and prepares every sheet for analysis",
      },
      {
        title: "AI Excel Dashboard Builder",
        description:
          "Auto-generate interactive dashboards, decks, and executive summaries straight from Excel data",
      },
      {
        title: "Excel AI Analyst on Call",
        description:
          "Chat with your data, request ad-hoc reports, and get citations back in your original spreadsheets",
      },
      {
        title: "AI Excel Data Science",
        description:
          "Forecast KPIs, segment cohorts, and simulate scenarios using machine learning on top of Excel",
      },
    ],
  },
  {
    id: "shopify",
    name: "Shopify",
    category: "ecommerce",
    icon: "/images/integrations/shopify.png",
    website: "https://www.shopify.com",
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
    painPoints: [
      {
        title: "Hidden Product Costs",
        description:
          "Can't identify which products are actually profitable after all costs",
        icon: "package",
      },
      {
        title: "Missed Lifetime Value",
        description:
          "Missing opportunities to increase customer lifetime value",
        icon: "heart",
      },
      {
        title: "Gut-Based Inventory Decisions",
        description:
          "Inventory decisions based on gut feeling rather than data",
        icon: "warehouse",
      },
    ],
    solutions: [
      {
        title: "True Profitability Calculations",
        description:
          "AI calculates true product profitability including all costs and fees",
      },
      {
        title: "Retention Upselling Strategies",
        description: "Get specific customer retention and upselling strategies",
      },
      {
        title: "Smart Inventory Recommendations",
        description:
          "Smart inventory recommendations based on seasonal trends and demand",
      },
      {
        title: "Personalized Cart Recovery",
        description:
          "Generate personalized email campaigns for cart recovery and retention",
      },
    ],
  },
  {
    id: "stripe",
    name: "Stripe",
    category: "finance",
    icon: "/images/integrations/stripe.png",
    website: "https://stripe.com",
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
    painPoints: [
      {
        title: "Failed Payment Revenue",
        description: "Losing revenue to failed payments and subscription churn",
        icon: "x-circle",
      },
      {
        title: "Unpredictable Subscription Churn",
        description:
          "Can't predict which customers are likely to cancel subscriptions",
        icon: "trending-down",
      },
      {
        title: "Payment Dispute Strategy",
        description:
          "No clear strategy for reducing payment disputes and chargebacks",
        icon: "alert-triangle",
      },
    ],
    solutions: [
      {
        title: "Payment Failure Analysis",
        description:
          "AI identifies payment failure patterns and suggests fixes to increase success rates",
      },
      {
        title: "Churn Warning Alerts",
        description:
          "Get early warning alerts for customers likely to churn with retention strategies",
      },
      {
        title: "AI Transaction Monitoring",
        description:
          "Reduce disputes with AI-powered transaction monitoring and alerts",
      },
      {
        title: "Pricing Optimization Recommendations",
        description:
          "Generate pricing optimization recommendations based on customer payment behavior",
      },
    ],
  },
  {
    id: "hubspot",
    name: "HubSpot",
    category: "crm",
    icon: "/images/integrations/hubspot.png",
    website: "https://www.hubspot.com",
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
    painPoints: [
      {
        title: "Stalled Pipeline Deals",
        description: "Deals stalling in the pipeline with no clear next steps",
        icon: "pause-circle",
      },
      {
        title: "Lead Quality Uncertainty",
        description: "Can't identify which leads are actually worth pursuing",
        icon: "circle-question-mark",
      },
      {
        title: "Poor Lead Generation",
        description: "Marketing campaigns not generating quality leads",
        icon: "user-x",
      },
    ],
    solutions: [
      {
        title: "Deal Pattern Analysis",
        description:
          "AI analyzes deal patterns and suggests specific actions to move deals forward",
      },
      {
        title: "Data-Driven Lead Scoring",
        description:
          "Get data-driven lead scoring that identifies your best prospects",
      },
      {
        title: "Campaign Audience Optimization",
        description:
          "Optimize campaigns with insights about your highest-converting audiences",
      },
      {
        title: "Generated Sales Playbooks",
        description:
          "Generate sales playbooks based on your top performers' successful strategies",
      },
    ],
  },
  {
    id: "linkedin-ads",
    name: "LinkedIn Ads",
    category: "advertising",
    icon: "/images/integrations/linkedin-ads.png",
    website: "https://business.linkedin.com/marketing-solutions/ads",
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
    painPoints: [
      {
        title: "Expensive Low Quality",
        description:
          "LinkedIn ads are expensive but not generating quality leads",
        icon: "banknote",
      },
      {
        title: "Professional Audience Mystery",
        description:
          "Can't identify which professional audiences actually convert",
        icon: "briefcase",
      },
      {
        title: "Impressions Without Engagement",
        description:
          "B2B campaigns getting impressions but no meaningful engagement",
        icon: "eye",
      },
    ],
    solutions: [
      {
        title: "B2B Conversion Analysis",
        description:
          "AI analyzes your B2B conversion data to identify your ideal professional audience",
      },
      {
        title: "Job Title Targeting",
        description:
          "Get specific targeting recommendations based on job titles that actually convert",
      },
      {
        title: "B2B Creative Optimization",
        description:
          "Optimize ad creative with messaging that resonates with B2B decision makers",
      },
      {
        title: "Lead Nurturing Strategies",
        description:
          "Generate lead nurturing strategies based on LinkedIn campaign performance",
      },
    ],
  },
  {
    id: "tiktok-ads",
    name: "TikTok Ads",
    headline: "Turn TikTok Ads Into Revenue Growth Strategies",
    description:
      "Stop guessing what ads to run. Get AI insights that identify your most profitable TikTok audiences and create campaigns that actually generate sales-ready leads.",
    category: "advertising",
    icon: "/images/integrations/tiktok-ads.png",
    website: "https://ads.tiktok.com",
  },
  {
    id: "mixpanel",
    name: "Mixpanel",
    category: "analytics",
    icon: "/images/integrations/mixpanel.png",
    website: "https://mixpanel.com",
    headline:
      "Transform User Behavior Data Into Growth Acceleration Strategies",
    description:
      "Stop guessing why users churn or convert. Get AI insights that analyze your Mixpanel events and create specific strategies to increase retention, engagement, and revenue per user.",
  },
  {
    id: "salesforce",
    name: "Salesforce",
    category: "crm",
    icon: "/images/integrations/salesforce.png",
    website: "https://www.salesforce.com",
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
    painPoints: [
      {
        title: "Stalled Pipeline Deals",
        description: "Deals stalling in the pipeline without clear next steps",
        icon: "pause-circle",
      },
      {
        title: "Inaccurate Deal Predictions",
        description: "Can't accurately predict which deals will actually close",
        icon: "trending-up-down",
      },
      {
        title: "Missed Sales Opportunities",
        description:
          "Sales team missing opportunities and not following best practices",
        icon: "target",
      },
    ],
    solutions: [
      {
        title: "Deal Pattern Analysis",
        description:
          "AI analyzes your deal patterns and suggests specific actions to move opportunities forward",
      },
      {
        title: "Accurate Deal Predictions",
        description:
          "Get accurate deal probability predictions with recommended next steps",
      },
      {
        title: "Top Performer Strategies",
        description:
          "Identify your top sales performers' strategies and replicate them across the team",
      },
      {
        title: "Early Risk Alerts",
        description:
          "Receive early alerts for at-risk customers with specific retention strategies",
      },
    ],
  },
  {
    id: "instagram-business",
    name: "Instagram Business",
    category: "social",
    icon: "/images/integrations/instagram-business.png",
    website: "https://business.instagram.com",
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
    painPoints: [
      {
        title: "No Growth Despite",
        description:
          "Posting consistently but not seeing follower or engagement growth",
        icon: "trending-down",
      },
      {
        title: "Content Resonance Mystery",
        description:
          "Can't identify which content types resonate with your audience",
        icon: "message-square",
      },
      {
        title: "Wasted Hashtag Time",
        description:
          "Wasting time on hashtags that don't actually increase reach",
        icon: "hash",
      },
    ],
    solutions: [
      {
        title: "Engaging Content Patterns",
        description:
          "AI identifies your most engaging content patterns and suggests similar post ideas",
      },
      {
        title: "Data-Driven Hashtag Strategies",
        description:
          "Get data-driven hashtag strategies that actually increase your reach",
      },
      {
        title: "Optimized Posting Schedule",
        description:
          "Optimize posting schedule based on when your audience is most active",
      },
      {
        title: "Generated Content Calendars",
        description:
          "Generate content calendars based on your highest-performing post types",
      },
    ],
  },
  {
    id: "google-sheets",
    name: "Google Sheets",
    category: "other",
    icon: "/images/integrations/google-sheets.png",
    website: "https://sheets.google.com",
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
    painPoints: [
      {
        title: "Manual Analysis Hours",
        description:
          "Spending hours manually analyzing spreadsheet data for insights",
        icon: "clock",
      },
      {
        title: "Hidden Trends Anomalies",
        description:
          "Missing important trends and anomalies buried in your data",
        icon: "trending-up",
      },
      {
        title: "Professional Report Creation",
        description:
          "Can't easily create professional reports from spreadsheet data",
        icon: "file-text",
      },
    ],
    solutions: [
      {
        title: "Automated Sheet Analysis",
        description:
          "AI automatically analyzes your sheets and highlights key insights and trends",
      },
      {
        title: "Instant Metric Alerts",
        description:
          "Get instant alerts when important metrics change significantly",
      },
      {
        title: "Professional Report Generation",
        description:
          "Generate professional reports and dashboards from your spreadsheet data",
      },
      {
        title: "Predictive Trend Forecasting",
        description:
          "Use predictive AI to forecast trends based on your historical data",
      },
    ],
  },
  {
    id: "airtable",
    name: "Airtable",
    category: "database",
    icon: "/images/integrations/airtable.png",
    website: "https://airtable.com",
    headline: "Transform Project Data Into Strategic Workflow Optimization",
    description:
      "Stop managing projects in silos. Get AI insights that analyze your Airtable data to identify bottlenecks, optimize resource allocation, and accelerate project delivery.",
  },
  {
    id: "mailchimp",
    name: "Mailchimp",
    category: "email",
    icon: "/images/integrations/mailchimp.png",
    website: "https://mailchimp.com",
    headline: "Transform Email Campaigns Into Revenue Growth Engines",
    description:
      "Stop sending emails that get ignored. Get AI insights that analyze your Mailchimp campaigns and create specific strategies to increase open rates, engagement, and conversions.",
  },
  {
    id: "klaviyo",
    name: "Klaviyo",
    category: "email",
    icon: "/images/integrations/klaviyo.png",
    website: "https://www.klaviyo.com",
    headline: "Turn E-commerce Email Data Into Customer Lifetime Value Growth",
    description:
      "Stop losing revenue to poor email performance. Get AI that analyzes your Klaviyo flows and creates personalized strategies to maximize customer retention and purchase frequency.",
  },
  {
    id: "activecampaign",
    name: "ActiveCampaign",
    category: "email",
    icon: "/images/integrations/activecampaign.png",
    website: "https://www.activecampaign.com",
    headline: "Transform Marketing Automation Into Lead Conversion Machines",
    description:
      "Stop creating automations that don't convert. Get AI insights that analyze your ActiveCampaign workflows and optimize them for maximum lead nurturing and sales conversion.",
  },
  {
    id: "linkedin-social",
    name: "LinkedIn",
    category: "social",
    icon: "/images/integrations/linkedin-social.png",
    website: "https://linkedin.com",
    headline: "Transform Professional Content Into B2B Lead Generation",
    description:
      "Stop posting on LinkedIn without results. Get AI insights that analyze your professional content performance and create strategies to build authority and generate qualified leads.",
  },
  {
    id: "facebook",
    name: "Facebook",
    category: "social",
    icon: "/images/integrations/facebook.png",
    website: "https://facebook.com",
    headline: "Turn Facebook Engagement Into Brand Growth Strategies",
    description:
      "Stop posting without measuring impact. Get AI insights that analyze your Facebook page performance and create specific content strategies to increase reach and engagement.",
  },
  {
    id: "tiktok",
    name: "TikTok",
    category: "social",
    icon: "/images/integrations/tiktok.png",
    website: "https://tiktok.com",
    headline: "Transform Viral Content Into Sustainable Growth Strategies",
    description:
      "Stop creating TikTok content blindly. Get AI insights that identify your viral patterns and create specific strategies to consistently grow your following and engagement.",
  },
  {
    id: "youtube",
    name: "YouTube",
    category: "social",
    icon: "/images/integrations/youtube.png",
    website: "https://youtube.com",
    headline: "Turn Video Analytics Into Channel Growth Acceleration",
    description:
      "Stop guessing what content works on YouTube. Get AI insights that analyze your channel performance and create specific strategies to increase subscribers, views, and revenue.",
  },
  {
    id: "google-admanager",
    name: "Google Ad Manager",
    category: "advertising",
    icon: "/images/integrations/google-admanager.png",
    website: "https://admanager.google.com",
    headline: "Transform Ad Inventory Into Maximum Revenue Optimization",
    description:
      "Stop leaving ad revenue on the table. Get AI insights that analyze your Google Ad Manager performance and create specific strategies to optimize inventory pricing and fill rates.",
  },
  {
    id: "bing-ads",
    name: "Microsoft Advertising",
    category: "advertising",
    icon: "/images/integrations/bing-ads.png",
    website: "https://ads.microsoft.com",
    headline: "Turn Bing Search Ads Into Profitable Customer Acquisition",
    description:
      "Stop missing Bing's untapped audience. Get AI insights that optimize your Microsoft Advertising campaigns to capture high-intent traffic at lower costs than Google Ads.",
  },
  {
    id: "snapchat-ads",
    name: "Snapchat Ads",
    category: "advertising",
    icon: "/images/integrations/snapchat-ads.png",
    website: "https://ads.snapchat.com",
    headline: "Transform Snapchat Ads Into Gen-Z Customer Acquisition",
    description:
      "Stop struggling to reach younger audiences. Get AI insights that optimize your Snapchat campaigns to effectively target Gen-Z and millennial demographics with creative that converts.",
  },
  {
    id: "twitter-ads",
    name: "X Ads (Twitter)",
    category: "advertising",
    icon: "/images/integrations/twitter-ads.png",
    website: "https://ads.x.com",
    headline: "Turn X/Twitter Ads Into Real-Time Engagement Growth",
    description:
      "Stop wasting budget on ads that don't engage. Get AI insights that optimize your X advertising campaigns to drive real-time conversations and qualified lead generation.",
  },
  {
    id: "mysql",
    name: "MySQL",
    category: "database",
    icon: "/images/integrations/mysql.png",
    website: "https://mysql.com",
    headline: "Turn MySQL Data Into Intelligent Business Insights",
    description:
      "Stop writing complex queries manually. Ask questions in plain English and get instant insights from your MySQL database—with AI that understands your business context.",
  },
  {
    id: "postgres",
    name: "PostgreSQL",
    category: "database",
    icon: "/images/integrations/postgres.png",
    website: "https://postgresql.org",
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
    painPoints: [
      {
        title: "Complex SQL Required",
        description:
          "Need to write complex SQL queries to get basic business insights",
        icon: "code",
      },
      {
        title: "Unnoticed Data Patterns",
        description: "Important data patterns and anomalies going unnoticed",
        icon: "search",
      },
      {
        title: "Database Report Creation",
        description:
          "Can't easily create reports and dashboards from database data",
        icon: "database",
      },
    ],
    solutions: [
      {
        title: "Plain English Queries",
        description:
          "Ask questions in plain English and get instant database insights",
      },
      {
        title: "Continuous Data Monitoring",
        description:
          "AI continuously monitors your data and alerts you to important changes",
      },
      {
        title: "SQL-Free Report Generation",
        description:
          "Generate professional reports and dashboards without writing SQL",
      },
      {
        title: "Automated Quality Checks",
        description:
          "Automated data quality checks ensure your insights are always accurate",
      },
    ],
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "database",
    icon: "/images/integrations/mongodb.png",
    website: "https://mongodb.com",
    headline: "Transform NoSQL Data Into Strategic Business Actions",
    description:
      "Stop struggling with complex MongoDB queries. Get AI that analyzes your document data and provides instant business insights without needing to know query syntax.",
  },
  {
    id: "snowflake",
    name: "Snowflake",
    category: "database",
    icon: "/images/integrations/snowflake.png",
    website: "https://snowflake.com",
    headline: "Turn Cloud Data Warehouse Into Strategic Intelligence",
    description:
      "Stop waiting for data teams to create reports. Get AI that instantly analyzes your Snowflake data warehouse and provides strategic insights for immediate business action.",
  },
  {
    id: "redshift",
    name: "Amazon Redshift",
    category: "database",
    icon: "/images/integrations/redshift.png",
    website: "https://aws.amazon.com/redshift/",
    headline:
      "Transform Redshift Analytics Into Growth Acceleration Strategies",
    description:
      "Stop getting stuck in complex data analysis. Get AI that automatically analyzes your Amazon Redshift data and creates specific strategies to optimize business performance.",
  },
  {
    id: "google-bigquery",
    name: "Google BigQuery",
    category: "database",
    icon: "/images/integrations/google-bigquery.png",
    website: "https://cloud.google.com/bigquery",
    headline: "Turn Big Data Into Smart Business Decisions",
    description:
      "Stop drowning in massive datasets. Get AI that analyzes your BigQuery data and provides clear, actionable insights to drive strategic business growth.",
  },
  {
    id: "intercom",
    name: "Intercom",
    category: "crm",
    icon: "/images/integrations/intercom.png",
    website: "https://intercom.com",
    headline:
      "Transform Customer Conversations Into Revenue Growth Opportunities",
    description:
      "Stop missing signals in customer conversations. Get AI insights that analyze your Intercom data to identify upsell opportunities, reduce churn, and improve customer satisfaction.",
  },
  {
    id: "zendesk",
    name: "Zendesk",
    category: "crm",
    icon: "/images/integrations/zendesk.png",
    website: "https://zendesk.com",
    headline: "Turn Support Tickets Into Customer Success Strategies",
    description:
      "Stop treating support as a cost center. Get AI insights that analyze your Zendesk tickets to identify product improvements, reduce support volume, and increase customer retention.",
  },
  {
    id: "ahrefs",
    name: "Ahrefs",
    category: "analytics",
    icon: "/images/integrations/ahrefs.png",
    website: "https://ahrefs.com",
    headline: "Turn SEO Data Into Traffic Growth Action Plans",
    description:
      "Stop drowning in keyword rankings and backlink data. Get AI that analyzes your Ahrefs metrics and creates specific SEO strategies to increase organic traffic and search visibility.",
  },
  {
    id: "semrush",
    name: "SEMrush",
    category: "analytics",
    icon: "/images/integrations/semrush.png",
    website: "https://semrush.com",
    headline:
      "Transform Competitor Intelligence Into Market Domination Strategies",
    description:
      "Stop manually analyzing competitor data. Get AI insights that turn your SEMrush intelligence into specific strategies to outrank competitors and capture their traffic.",
  },
  {
    id: "google-searchconsole",
    name: "Google Search Console",
    category: "analytics",
    icon: "/images/integrations/google-searchconsole.png",
    website: "https://search.google.com/search-console",
    headline: "Turn Search Performance Data Into SEO Growth Strategies",
    description:
      "Stop guessing which pages need optimization. Get AI insights that analyze your Search Console data and create specific action plans to improve rankings and click-through rates.",
  },
  {
    id: "google-mybusiness",
    name: "Google My Business",
    category: "social",
    icon: "/images/integrations/google-mybusiness.png",
    website: "https://business.google.com",
    headline:
      "Transform Local Search Data Into Customer Acquisition Strategies",
    description:
      "Stop losing local customers to competitors. Get AI insights that analyze your Google My Business performance and create specific strategies to dominate local search results.",
  },
  {
    id: "metabase",
    name: "Metabase",
    category: "analytics",
    icon: "/images/integrations/metabase.png",
    website: "https://metabase.com",
    headline: "Turn Dashboard Data Into Strategic Business Actions",
    description:
      "Stop staring at dashboards without knowing what to do next. Get AI insights that analyze your Metabase data and create specific action plans to drive business growth.",
  },
  {
    id: "tableau",
    name: "Tableau",
    category: "analytics",
    icon: "/images/integrations/tableau.png",
    website: "https://tableau.com",
    headline: "Transform Complex Visualizations Into Clear Business Strategies",
    description:
      "Stop getting lost in complex Tableau dashboards. Get AI that automatically analyzes your visualizations and creates specific, actionable strategies to improve business performance.",
  },
  {
    id: "quickbooks",
    name: "QuickBooks",
    category: "finance",
    icon: "/images/integrations/quickbooks.png",
    website: "https://quickbooks.intuit.com",
    headline: "Transform Financial Data Into Strategic Business Growth",
    description:
      "Stop drowning in QuickBooks reports. Get AI insights that analyze your financial data and create specific strategies to optimize cash flow, reduce costs, and accelerate growth.",
  },
  {
    id: "profitwell",
    name: "ProfitWell",
    category: "finance",
    icon: "/images/integrations/profitwell.png",
    website: "https://profitwell.com",
    headline: "Turn Subscription Metrics Into Revenue Optimization Strategies",
    description:
      "Stop guessing why subscription revenue fluctuates. Get AI insights that analyze your ProfitWell metrics and create specific strategies to reduce churn and maximize customer lifetime value.",
  },
  {
    id: "woo-commerce",
    name: "WooCommerce",
    category: "ecommerce",
    icon: "/images/integrations/woo-commerce.png",
    website: "https://woocommerce.com",
    headline: "Transform WordPress E-commerce Into Revenue Growth Engine",
    description:
      "Stop guessing what products to promote on your WooCommerce store. Get AI insights that analyze your sales data and create specific strategies to increase conversions and customer value.",
  },
  {
    id: "slack",
    name: "Slack",
    category: "other",
    icon: "/images/integrations/slack.png",
    website: "https://slack.com",
    headline: "Transform Team Communication Into Productivity Insights",
    description:
      "Stop missing important signals in team conversations. Get AI insights that analyze your Slack data to identify collaboration bottlenecks and optimize team productivity.",
  },
  {
    id: "zapier",
    name: "Zapier",
    category: "other",
    icon: "/images/integrations/zapier.png",
    website: "https://zapier.com",
    headline: "Turn Workflow Automation Into Business Growth Optimization",
    description:
      "Stop creating automations without measuring impact. Get AI insights that analyze your Zapier workflows and optimize them for maximum efficiency and business value.",
  },
  {
    id: "clickhouse",
    name: "ClickHouse",
    category: "database",
    icon: "/images/integrations/clickhouse.png",
    website: "https://clickhouse.com",
    headline: "Transform Real-Time Analytics Into Instant Business Actions",
    description:
      "Stop waiting for slow analytics queries. Get AI that leverages ClickHouse's speed to provide instant business insights and recommendations for immediate action.",
  },
  {
    id: "mariadb",
    name: "MariaDB",
    category: "database",
    icon: "/images/integrations/mariadb.png",
    website: "https://mariadb.org",
    headline: "Turn Database Queries Into Strategic Business Intelligence",
    description:
      "Stop struggling with SQL complexity. Get AI that analyzes your MariaDB data and provides instant business insights through natural language queries.",
  },
  {
    id: "mssql",
    name: "Microsoft SQL Server",
    category: "database",
    icon: "/images/integrations/mssql.png",
    website: "https://www.microsoft.com/sql-server",
    headline: "Transform SQL Server Data Into Enterprise Growth Strategies",
    description:
      "Stop waiting for IT reports. Get AI that instantly analyzes your SQL Server database and provides strategic insights to optimize business operations and drive growth.",
  },
  {
    id: "oracle",
    name: "Oracle Database",
    category: "database",
    icon: "/images/integrations/oracle.png",
    website: "https://oracle.com/database",
    headline: "Turn Enterprise Database Into Strategic Competitive Advantage",
    description:
      "Stop relying on complex Oracle queries for insights. Get AI that automatically analyzes your enterprise database and creates strategic recommendations for business optimization.",
  },
  {
    id: "csv",
    name: "CSV Files",
    category: "other",
    icon: "/images/integrations/csv.png",
    website: "https://en.wikipedia.org/wiki/Comma-separated_values",
    headline: "Transform Raw CSV Data Into Strategic Business Intelligence",
    description:
      "Stop manually analyzing CSV files for hours. Get AI that instantly analyzes your spreadsheet data and provides actionable insights with specific recommendations for growth.",
  },
  {
    id: "python",
    name: "Python",
    category: "other",
    icon: "/images/integrations/python.png",
    website: "https://python.org",
    headline: "Turn Python Analytics Into Automated Business Intelligence",
    description:
      "Stop writing complex Python scripts for every analysis. Get AI that understands your data and automatically generates insights without requiring coding expertise.",
  },
  {
    id: "manual",
    name: "Manual Data Entry",
    category: "other",
    icon: "/images/integrations/manual.png",
    website: "https://datapad.io",
    headline: "Transform Manual Data Into Intelligent Business Insights",
    description:
      "Stop struggling to make sense of manually entered data. Get AI that analyzes any data format and provides instant insights with specific recommendations for business growth.",
  },
];
