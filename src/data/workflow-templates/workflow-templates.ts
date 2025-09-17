import { WorkflowTemplate } from "@/types/template";

export const workflows: WorkflowTemplate[] = [
  {
    id: "RCP-1",
    slug: "crosschannel-marketing-roi-analysis",
    title: "Cross-Channel Marketing ROI Analysis",
    description:
      "Which marketing channels are \r\ngiving us the best return on \r\ninvestment? Show me impression, click, overall performance and cost per acquisition across all our advertising platforms and create a dash...",
    team: "marketing",
    integrations: [
      "facebook-ads",
      "google-ads",
      "google-analytics",
      "linkedin-ads",
      "tiktok-ads",
    ],
    difficulty: "advanced",
    estimatedTime: "20-30 minutes",
    prompt:
      "Which marketing channels are \r\ngiving us the best return on \r\ninvestment? Show me impression, click, overall performance and cost per acquisition across all our advertising platforms and create a dashboard.",
    mockData:
      "Recipes%20Database%20241d568624128093b1bde0718b9200d9/marketing_mock_data.csv",
  },
  {
    id: "RCP-2",
    slug: "sales-performance-dashboard",
    title: "Sales Performance Dashboard",
    description:
      "How is our sales team performing this quarter? Show me individual performance, pipeline, and deal conversion rates. Create a sales dashboard.",
    team: "sales",
    integrations: ["postgres"],
    difficulty: "beginner",
    estimatedTime: "5-10 minutes",
    prompt:
      "How is our sales team performing this quarter? Show me individual performance, pipeline, and deal conversion rates. Create a sales dashboard.",
    mockData:
      "Recipes%20Database%20241d568624128093b1bde0718b9200d9/sales_performance_dashboard_q3_2025.csv",
  },
  {
    id: "RCP-3",
    slug: "ecommerce-performance-analysis",
    title: "E-commerce Performance Analysis",
    description:
      "How is our online store performing? Show me conversion rates, average order value, cart abandonment rates, and top-selling products. Create a comprehensive e-commerce dashboard.",
    team: "retail-ecommerce",
    integrations: ["facebook-ads", "google-ads", "google-analytics", "shopify"],
    difficulty: "intermediate",
    estimatedTime: "10-20 minutes",
    prompt:
      "How is our online store performing? Show me conversion rates, average order value, cart abandonment rates, and top-selling products. Create a comprehensive e-commerce dashboard.",
    mockData:
      "Recipes%20Database%20241d568624128093b1bde0718b9200d9/ecommerce_performance_mock_q3_2025.csv",
  },
  {
    id: "RCP-5",
    slug: "comprehensive-seo-performance",
    title: "Comprehensive SEO Performance",
    description:
      "How is our SEO performing? Show me keyword rankings, organic traffic trends, and page performance. Create a monthly SEO overview dashboard",
    team: "content-seo",
    integrations: ["google-analytics", "google-searchconsole"],
    difficulty: "beginner",
    estimatedTime: "5-10 minutes",
    prompt:
      "How is our SEO performing? Show me keyword rankings, organic traffic trends, and page performance. Create a monthly SEO overview dashboard",
    mockData:
      "Recipes%20Database%20241d568624128093b1bde0718b9200d9/seo_performance_monthly_may-aug2025.csv",
  },
  {
    id: "RCP-8",
    slug: "social-media-performance-tracking",
    title: "Social Media Performance Tracking",
    description:
      "How are our social media channels performing? Track engagement rates, follower growth, reach, and conversions across all platforms. Create a weekly social media dashboard.",
    team: "social-media",
    integrations: [
      "facebook",
      "google-analytics",
      "instagram-business",
      "linkedin-social",
    ],
    difficulty: "intermediate",
    estimatedTime: "10-20 minutes",
    prompt:
      "How are our social media channels performing? Track engagement rates, follower growth, reach, and conversions across all platforms. Create a weekly social media dashboard.",
    mockData:
      "Recipes%20Database%20241d568624128093b1bde0718b9200d9/social_media_mock_data.csv",
  },
  {
    id: "RCP-9",
    slug: "product-usage-analytics",
    title: "Product Usage Analytics",
    description:
      "How are users engaging with our product features? Show me feature adoption rates, user journey analysis, and identify areas where users are dropping off.",
    team: "product-management",
    integrations: ["postgres", "google-analytics", "mixpanel"],
    difficulty: "intermediate",
    estimatedTime: "10-20 minutes",
    prompt:
      "How are users engaging with our product features? Show me feature adoption rates, user journey analysis, and identify areas where users are dropping off.",
    mockData:
      "Recipes%20Database%20241d568624128093b1bde0718b9200d9/product_usage_events_MayJune2025.csv",
  },
  {
    id: "RCP-10",
    slug: "profitability-analysis",
    title: "Profitability Analysis",
    description:
      "What are our most profitable products, channels, and customer segments? Calculate profit margins, contribution margins, and identify optimization opportunities.",
    team: "finance",
    integrations: ["postgres", "google-sheets", "excel", "stripe"],
    difficulty: "intermediate",
    estimatedTime: "10-20 minutes",
    prompt:
      "What are our most profitable products, channels, and customer segments? Calculate profit margins, contribution margins, and identify optimization opportunities.",
    mockData:
      "Recipes%20Database%20241d568624128093b1bde0718b9200d9/profitability_mock_data.csv",
  },
  {
    id: "RCP-11",
    slug: "cash-flow-forecasting",
    title: "Cash Flow Forecasting",
    description:
      "What will our cash flow look like over the next 6 months? Create predictive models based on historical patterns, seasonality, and current pipeline",
    team: "finance",
    integrations: ["postgres", "google-sheets", "excel"],
    difficulty: "beginner",
    estimatedTime: "5-10 minutes",
    prompt:
      "What will our cash flow look like over the next 6 months? Create predictive models based on historical patterns, seasonality, and current pipeline",
    mockData:
      "Recipes%20Database%20241d568624128093b1bde0718b9200d9/cash_flow_forecast_mock_data.csv",
  },
  {
    id: "RCP-12",
    slug: "client-performance-dashboard",
    title: "Client Performance Dashboard",
    description:
      "Create comprehensive performance dashboard showing advertising spend, impression, click, CTR, leads generated, conversion rates, and ROI.",
    team: "agency",
    integrations: [
      "facebook-ads",
      "google-ads",
      "google-analytics",
      "linkedin-ads",
      "tiktok-ads",
    ],
    difficulty: "advanced",
    estimatedTime: "20-30 minutes",
    prompt:
      "Create comprehensive performance dashboard showing advertising spend, impression, click, CTR, leads generated, conversion rates, and ROI.",
    mockData:
      "Recipes%20Database%20241d568624128093b1bde0718b9200d9/client_performance_dashboard_MayJune2025.csv",
  },
  {
    id: "RCP-13",
    slug: "paid-vs-organic-traffic-blend",
    title: "Paid vs Organic Traffic Blend",
    description:
      "Blend paid and organic sessions for the past 90 days. Show cost‑per‑session, bounce rate and conversions by source/medium.",
    team: "marketing",
    integrations: ["google-ads", "google-analytics", "google-searchconsole"],
    difficulty: "intermediate",
    estimatedTime: "10-20 minutes",
    prompt:
      "Blend paid and organic sessions for the past 90 days. Show cost‑per‑session, bounce rate and conversions by source/medium.",
    mockData:
      "Recipes%20Database%20241d568624128093b1bde0718b9200d9/paid_vs_organic_blend_mock_data.csv",
  },
  {
    id: "RCP-14",
    slug: "seo-health-monitor",
    title: "SEO Health Monitor",
    description:
      "How are our top‑15 landing pages ranking and trending? Surface pages that lost positions, estimate traffic loss and suggest “quick‑win” keywords.",
    team: "content-seo",
    integrations: ["google-searchconsole"],
    difficulty: "beginner",
    estimatedTime: "5-10 minutes",
    prompt:
      "How are our top‑15 landing pages ranking and trending? Surface pages that lost positions, estimate traffic loss and suggest “quick‑win” keywords.",
    mockData:
      "Recipes%20Database%20241d568624128093b1bde0718b9200d9/seo_health_monitor_top15pages_JulAug2025.csv",
  },
  {
    id: "RCP-15",
    slug: "ecommerce-funnel-performance",
    title: "Ecommerce Funnel Performance",
    description:
      "Visualise the customer funnel from add‑to‑cart through checkout. Highlight drop‑off points, analyze my business and suggest me action items to increase conversions through the funnel steps.",
    team: "retail-ecommerce",
    integrations: ["google-analytics", "shopify"],
    difficulty: "beginner",
    estimatedTime: "5-10 minutes",
    prompt:
      "Visualise the customer funnel from add‑to‑cart through checkout. Highlight drop‑off points, analyze my business and suggest me action items to increase conversions through the funnel steps.",
    mockData:
      "Recipes%20Database%20241d568624128093b1bde0718b9200d9/ecommerce_funnel_mock_data.csv",
  },
  {
    id: "RCP-16",
    slug: "customer-ltv-cohort-analysis",
    title: "Customer LTV Cohort Analysis",
    description:
      "Build 12‑month LTV curves by acquisition channel. Segment by cohorts created in Mixpanel and visualise median payback period.",
    team: "growth",
    integrations: ["mixpanel", "stripe"],
    difficulty: "beginner",
    estimatedTime: "5-10 minutes",
    prompt:
      "Build 12‑month LTV curves by acquisition channel. Segment by cohorts created in Mixpanel and visualise median payback period.",
    mockData:
      "Recipes%20Database%20241d568624128093b1bde0718b9200d9/customer_ltv_cohorts_12m_Jul2024-Jun2025.csv",
  },
  {
    id: "RCP-17",
    slug: "inventory-stockout-prediction",
    title: "Inventory Stock‑Out Prediction",
    description:
      "Predict SKU‑level stock‑out dates using historical sales and current inventory. Flag items at risk within 14 days.",
    team: "supply-chain",
    integrations: ["postgres", "google-sheets", "excel"],
    difficulty: "beginner",
    estimatedTime: "5-10 minutes",
    prompt:
      "Predict SKU‑level stock‑out dates using historical sales and current inventory. Flag items at risk within 14 days.",
    mockData:
      "Recipes%20Database%20241d568624128093b1bde0718b9200d9/inventory_stockout_prediction_mock_data.csv",
  },
  {
    id: "RCP-18",
    slug: "product-feature-adoption",
    title: "Product Feature Adoption",
    description:
      "Show daily active users of new feature X vs control features, compute 7‑day rolling adoption and surface segments with lowest uptake.",
    team: "product-management",
    integrations: ["postgres", "mixpanel"],
    difficulty: "beginner",
    estimatedTime: "5-10 minutes",
    prompt:
      "Show daily active users of new feature X vs control features, compute 7‑day rolling adoption and surface segments with lowest uptake.",
    mockData:
      "Recipes%20Database%20241d568624128093b1bde0718b9200d9/product_feature_adoption_MayAug2025_small.csv",
  },
  {
    id: "RCP-19",
    slug: "subscription-pricing-strategy",
    title: "Subscription Pricing Strategy",
    description:
      "How do different pricing tiers/packages perform? Show me conversion rates by package",
    team: "product-management",
    integrations: ["postgres", "stripe"],
    difficulty: "beginner",
    estimatedTime: "5-10 minutes",
    prompt:
      "How do different pricing tiers/packages perform? Show me conversion rates by package",
    mockData:
      "Recipes%20Database%20241d568624128093b1bde0718b9200d9/subscription_pricing_strategy_mock_data.csv",
  },
  {
    id: "RCP-20",
    slug: "client-roi-proof",
    title: "Client ROI Proof",
    description:
      "What ROI are my paid ads delivering? Show revenue generated vs ad spend across all campaigns.",
    team: "agency",
    integrations: [
      "facebook-ads",
      "google-ads",
      "google-analytics",
      "google-sheets",
      "excel",
      "linkedin-ads",
      "tiktok-ads",
    ],
    difficulty: "advanced",
    estimatedTime: "20-30 minutes",
    prompt:
      "What ROI are my paid ads delivering? Show revenue generated vs ad spend across all campaigns.",
    mockData:
      "Recipes%20Database%20241d568624128093b1bde0718b9200d9/client_roi_proof_mock_data.csv",
  },
  {
    id: "RCP-21",
    slug: "keywords-in-danger",
    title: "Keywords in Danger",
    description:
      "List all query–URL pairs that have fallen out of the top‑10 positions in the last 30 days and lost more than 25 % of clicks. Plot the drop and flag pages to refresh first.",
    team: "content-seo",
    integrations: ["google-searchconsole"],
    difficulty: "beginner",
    estimatedTime: "5-10 minutes",
    prompt:
      "List all query–URL pairs that have fallen out of the top‑10 positions in the last 30 days and lost more than 25 % of clicks. Plot the drop and flag pages to refresh first.",
    mockData:
      "Recipes%20Database%20241d568624128093b1bde0718b9200d9/keywords_in_danger_mock_data.csv",
  },
  {
    id: "RCP-22",
    slug: "highpotential-almost-there-keywords",
    title: "High‑Potential “Almost There” Keywords",
    description:
      "Identify keywords ranking in positions 11–20 with >1 000 impressions and CTR below 2 %. Sort by potential additional clicks if we move into the top‑10 and suggest priority order.",
    team: "content-seo",
    integrations: ["google-searchconsole"],
    difficulty: "beginner",
    estimatedTime: "5-10 minutes",
    prompt:
      "Identify keywords ranking in positions 11–20 with >1 000 impressions and CTR below 2 %. Sort by potential additional clicks if we move into the top‑10 and suggest priority order.",
    mockData:
      "Recipes%20Database%20241d568624128093b1bde0718b9200d9/high_potential_keywords_mock_data.csv",
  },
  {
    id: "RCP-23",
    slug: "risingtrend-blog-topic-ideas",
    title: "Rising‑Trend Blog Topic Ideas",
    description:
      "Surface queries whose impressions have grown >50 % month‑over‑month that we do not target with existing blog URLs. Cluster them into 5 topic buckets and output suggested H1 titles.",
    team: "content-seo",
    integrations: ["google-analytics", "google-searchconsole"],
    difficulty: "beginner",
    estimatedTime: "5-10 minutes",
    prompt:
      "Surface queries whose impressions have grown >50 % month‑over‑month that we do not target with existing blog URLs. Cluster them into 5 topic buckets and output suggested H1 titles.",
    mockData:
      "Recipes%20Database%20241d568624128093b1bde0718b9200d9/rising_trend_queries_AprJul2025.csv",
  },
  {
    id: "RCP-24",
    slug: "landing-page-conversion-lift",
    title: "Landing Page Conversion Lift",
    description:
      "Find landing pages with >5 000 organic sessions, bounce rate >60 % and conversion rate < site average. Show the top 10 offenders and estimate incremental leads if we match average CVR.",
    team: "content-seo",
    integrations: ["google-analytics", "google-searchconsole"],
    difficulty: "beginner",
    estimatedTime: "5-10 minutes",
    prompt:
      "Find landing pages with >5 000 organic sessions, bounce rate >60 % and conversion rate < site average. Show the top 10 offenders and estimate incremental leads if we match average CVR.",
    mockData:
      "Recipes%20Database%20241d568624128093b1bde0718b9200d9/landing_page_conversion_lift_mock_data.csv",
  },
  {
    id: "RCP-25",
    slug: "keyword-cannibalisation-detective",
    title: "Keyword Cannibalisation Detective",
    description:
      "List keywords for which two or more of our URLs compete in the top‑30 results. Display clicks, impressions and average position per URL and highlight which page should be canonical.",
    team: "content-seo",
    integrations: ["google-searchconsole"],
    difficulty: "beginner",
    estimatedTime: "5-10 minutes",
    prompt:
      "List keywords for which two or more of our URLs compete in the top‑30 results. Display clicks, impressions and average position per URL and highlight which page should be canonical.",
    mockData:
      "Recipes%20Database%20241d568624128093b1bde0718b9200d9/keyword_cannibalisation_top30_Jul2025.csv",
  },
  {
    id: "RCP-26",
    slug: "seasonal-keyword-planner",
    title: "Seasonal Keyword Planner",
    description:
      "Pull the top 50 keywords by clicks for November–December last year. Forecast expected impressions for this holiday season and suggest publication deadlines for supporting content.",
    team: "content-seo",
    integrations: ["google-searchconsole"],
    difficulty: "beginner",
    estimatedTime: "5-10 minutes",
    prompt:
      "Pull the top 50 keywords by clicks for November–December last year. Forecast expected impressions for this holiday season and suggest publication deadlines for supporting content.",
    mockData:
      "Recipes%20Database%20241d568624128093b1bde0718b9200d9/seasonal_keyword_planner_mock_data.csv",
  },
  {
    id: "RCP-27",
    slug: "optimizing-lowctr-pages",
    title: "Optimizing Low‑CTR Pages",
    description:
      "Flag queries where we rank top‑5 but CTR is below the Search Console benchmark. Export the corresponding title tags and suggest a rewritten version under 60 characters.",
    team: "content-seo",
    integrations: ["google-searchconsole"],
    difficulty: "beginner",
    estimatedTime: "5-10 minutes",
    prompt:
      "Flag queries where we rank top‑5 but CTR is below the Search Console benchmark. Export the corresponding title tags and suggest a rewritten version under 60 characters.",
    mockData:
      "Recipes%20Database%20241d568624128093b1bde0718b9200d9/low_ctr_pages_mock_data.csv",
  },
  {
    id: "RCP-28",
    slug: "paid-vs-organic-keyword-gap",
    title: "Paid vs Organic Keyword Gap",
    description:
      "Compare our top 100 converting Google Ads search terms to organic rankings. Highlight any paid term with CPA < $20 where we rank worse than position 20 organically.",
    team: "content-seo",
    integrations: ["google-ads", "google-searchconsole"],
    difficulty: "beginner",
    estimatedTime: "5-10 minutes",
    prompt:
      "Compare our top 100 converting Google Ads search terms to organic rankings. Highlight any paid term with CPA < $20 where we rank worse than position 20 organically.",
    mockData:
      "Recipes%20Database%20241d568624128093b1bde0718b9200d9/paid_vs_organic_keyword_gap_mock_data.csv",
  },
  {
    id: "RCP-29",
    slug: "competitor-content-gap",
    title: "Competitor Content Gap",
    description:
      "Using competitor_keywords.csv, find high‑volume terms competitors rank top‑10 for that we don’t rank in the top‑30. Provide an ordered list with estimated search volume and content angle.",
    team: "content-seo",
    integrations: ["google-searchconsole", "google-sheets", "excel"],
    difficulty: "beginner",
    estimatedTime: "5-10 minutes",
    prompt:
      "Using competitor_keywords.csv, find high‑volume terms competitors rank top‑10 for that we don’t rank in the top‑30. Provide an ordered list with estimated search volume and content angle.",
    mockData:
      "Recipes%20Database%20241d568624128093b1bde0718b9200d9/competitor_content_gap_single.csv",
  },
  {
    id: "RCP-30",
    slug: "budget-pacing-forecast",
    title: "Budget Pacing & Forecast",
    description:
      "Show current month spend vs budget by channel. Forecast end‑of‑month spend based on daily pacing and alert if any channel will exceed budget by >5 %.",
    team: "marketing",
    integrations: [
      "facebook-ads",
      "google-ads",
      "google-sheets",
      "excel",
      "linkedin-ads",
      "tiktok-ads",
    ],
    difficulty: "advanced",
    estimatedTime: "20-30 minutes",
    prompt:
      "Show current month spend vs budget by channel. Forecast end‑of‑month spend based on daily pacing and alert if any channel will exceed budget by >5 %.",
    mockData:
      "Recipes%20Database%20241d568624128093b1bde0718b9200d9/budget_pacing_forecast_mock_data.csv",
  },
  {
    id: "RCP-31",
    slug: "customer-acquisition-cost-dashboard",
    title: "Customer Acquisition Cost Dashboard",
    description:
      "Calculate blended CAC and channel‑level CAC for the last 90 days. Include CAC ÷ LTV ratios and highlight channels above the 0.8 threshold.",
    team: "marketing",
    integrations: ["postgres", "google-ads", "linkedin-ads", "stripe"],
    difficulty: "intermediate",
    estimatedTime: "10-20 minutes",
    prompt:
      "Calculate blended CAC and channel‑level CAC for the last 90 days. Include CAC ÷ LTV ratios and highlight channels above the 0.8 threshold.",
    mockData:
      "Recipes%20Database%20241d568624128093b1bde0718b9200d9/customer_acquisition_cost_mock_data.csv",
  },
  {
    id: "RCP-32",
    slug: "lifetime-value-cohort-by-channel",
    title: "Lifetime Value Cohort by Channel",
    description:
      "Build 12‑month LTV curves for users acquired via Paid Search, Paid Social and Organic. Show median, 75th and 90th percentile LTV for each cohort.",
    team: "marketing",
    integrations: ["google-analytics", "mixpanel", "stripe"],
    difficulty: "intermediate",
    estimatedTime: "10-20 minutes",
    prompt:
      "Build 12‑month LTV curves for users acquired via Paid Search, Paid Social and Organic. Show median, 75th and 90th percentile LTV for each cohort.",
    mockData:
      "Recipes%20Database%20241d568624128093b1bde0718b9200d9/ltv_cohort_by_channel_mock_data.csv",
  },
  {
    id: "RCP-33",
    slug: "paid-search-keyword-harvest",
    title: "Paid Search Keyword Harvest",
    description:
      "List paid keywords converting at CPA < $25 where organic rank is worse than position 15. Suggest new landing page or optimisation plan.",
    team: "marketing",
    integrations: ["google-ads", "google-searchconsole"],
    difficulty: "beginner",
    estimatedTime: "5-10 minutes",
    prompt:
      "List paid keywords converting at CPA < $25 where organic rank is worse than position 15. Suggest new landing page or optimisation plan.",
    mockData:
      "Recipes%20Database%20241d568624128093b1bde0718b9200d9/paid_search_keyword_harvest_mock_data.csv",
  },
  {
    id: "RCP-34",
    slug: "geographic-campaign-segmentation",
    title: "Geographic Campaign Segmentation",
    description:
      "Break down spend, conversions and CPA by country and region. Flag any region where CPA is 30 % above global average and suggest bid adjustments.",
    team: "marketing",
    integrations: ["facebook-ads", "google-ads", "google-analytics"],
    difficulty: "intermediate",
    estimatedTime: "10-20 minutes",
    prompt:
      "Break down spend, conversions and CPA by country and region. Flag any region where CPA is 30 % above global average and suggest bid adjustments.",
    mockData:
      "Recipes%20Database%20241d568624128093b1bde0718b9200d9/geographic_campaign_segmentation_mock_data.csv",
  },
  {
    id: "RCP-35",
    slug: "cro-opportunity-heatmap",
    title: "CRO Opportunity Heatmap",
    description:
      "List landing pages with >2 000 sessions, CVR below site median and bounce rate >60 %. Estimate incremental revenue at benchmark CVR.",
    team: "marketing",
    integrations: ["google-analytics", "google-searchconsole"],
    difficulty: "beginner",
    estimatedTime: "5-10 minutes",
    prompt:
      "List landing pages with >2 000 sessions, CVR below site median and bounce rate >60 %. Estimate incremental revenue at benchmark CVR.",
    mockData:
      "Recipes%20Database%20241d568624128093b1bde0718b9200d9/cro_opportunity_heatmap_mock_data.csv",
  },
  {
    id: "RCP-40",
    slug: "google-ads-keyword-drain",
    title: "Google Ads Keyword Drain",
    description:
      "Which Google Ads keywords are costing me money without getting conversions? Show me cost per conversion by keyword.",
    team: "marketing",
    integrations: ["google-ads", "google-analytics"],
    difficulty: "beginner",
    estimatedTime: "5-10 minutes",
    prompt:
      "Which Google Ads keywords are costing me money without getting conversions? Show me cost per conversion by keyword.",
    mockData:
      "Recipes%20Database%20241d568624128093b1bde0718b9200d9/google_ads_keyword_drain_mock_data.csv",
  },
  {
    id: "RCP-41",
    slug: "facebook-ad-money-waste-check",
    title: "Facebook Ad Money Waste Check",
    description:
      "Show me which Facebook campaigns are actually making money. What's my cost per customer vs revenue per customer?",
    team: "marketing",
    integrations: ["facebook-ads", "stripe"],
    difficulty: "beginner",
    estimatedTime: "5-10 minutes",
    prompt:
      "Show me which Facebook campaigns are actually making money. What's my cost per customer vs revenue per customer?",
    mockData:
      "Recipes%20Database%20241d568624128093b1bde0718b9200d9/facebook_ad_money_waste_check_mock_data.csv",
  },
  {
    id: "RCP-36",
    slug: "cart-abandonment-investigation",
    title: "Cart Abandonment Investigation",
    description:
      "Why are customers abandoning their carts? Show me where people drop off in checkout.",
    team: "retail-ecommerce",
    integrations: ["google-analytics", "shopify"],
    difficulty: "beginner",
    estimatedTime: "5-10 minutes",
    prompt:
      "Why are customers abandoning their carts? Show me where people drop off in checkout.",
    mockData:
      "Recipes%20Database%20241d568624128093b1bde0718b9200d9/cart_abandonment_investigation_mock_data.csv",
  },
  {
    id: "RCP-37",
    slug: "inventory-stockout-prevention",
    title: "Inventory Stockout Prevention",
    description:
      "Which products will I run out of next month? Show me current inventory vs sales velocity",
    team: "retail-ecommerce",
    integrations: ["postgres", "google-sheets", "excel", "shopify"],
    difficulty: "intermediate",
    estimatedTime: "10-20 minutes",
    prompt:
      "Which products will I run out of next month? Show me current inventory vs sales velocity",
    mockData:
      "Recipes%20Database%20241d568624128093b1bde0718b9200d9/inventory_stockout_prevention_mock_data.csv",
  },
  {
    id: "RCP-38",
    slug: "seasonal-sales-planning",
    title: "Seasonal Sales Planning",
    description:
      "How much should I order for Black Friday? Show me last year's sales patterns and current trends.",
    team: "retail-ecommerce",
    integrations: ["postgres", "google-analytics", "shopify"],
    difficulty: "intermediate",
    estimatedTime: "10-20 minutes",
    prompt:
      "How much should I order for Black Friday? Show me last year's sales patterns and current trends.",
  },
  {
    id: "RCP-39",
    slug: "product-profitability-reality-check",
    title: "Product Profitability Reality Check",
    description:
      "Which products are most profitable after advertising costs? Show me profit per product after ad spend.",
    team: "retail-ecommerce",
    integrations: ["postgres", "facebook-ads", "google-ads", "shopify"],
    difficulty: "intermediate",
    estimatedTime: "10-20 minutes",
    prompt:
      "Which products are most profitable after advertising costs? Show me profit per product after ad spend.",
  },
  {
    id: "RCP-42",
    slug: "fastmoving-stock-alert",
    title: "Fast-Moving Stock Alert",
    description:
      "Which products will sell out in the next 2 weeks based on current sales velocity?",
    team: "retail-ecommerce",
    integrations: ["postgres", "shopify"],
    difficulty: "beginner",
    estimatedTime: "5-10 minutes",
    prompt:
      "Which products will sell out in the next 2 weeks based on current sales velocity?",
  },
  {
    id: "RCP-43",
    slug: "product-bundle-opportunity",
    title: "Product Bundle Opportunity",
    description:
      "Which products are frequently bought together? Show me product combinations that could increase order value",
    team: "retail-ecommerce",
    integrations: ["postgres", "google-analytics", "shopify"],
    difficulty: "intermediate",
    estimatedTime: "10-20 minutes",
    prompt:
      "Which products are frequently bought together? Show me product combinations that could increase order value",
  },
  {
    id: "RCP-44",
    slug: "discount-impact-analysis",
    title: "Discount Impact Analysis",
    description:
      "Did my recent price changes increase total profit? Show me volume increase vs margin decrease by product.",
    team: "retail-ecommerce",
    integrations: ["postgres", "google-sheets", "excel", "shopify"],
    difficulty: "intermediate",
    estimatedTime: "10-20 minutes",
    prompt:
      "Did my recent price changes increase total profit? Show me volume increase vs margin decrease by product.",
  },
  {
    id: "RCP-45",
    slug: "dead-stock-identification",
    title: "Dead Stock Identification",
    description:
      "Which products haven't sold in 90 days? Show me slow-moving inventory with quantities and cost tied up.",
    team: "retail-ecommerce",
    integrations: ["postgres", "google-sheets", "excel", "shopify"],
    difficulty: "intermediate",
    estimatedTime: "10-20 minutes",
    prompt:
      "Which products haven't sold in 90 days? Show me slow-moving inventory with quantities and cost tied up.",
  },
  {
    id: "RCP-46",
    slug: "campaign-performance-crash",
    title: "Campaign Performance Crash",
    description:
      "What caused my client's campaign performance to crash yesterday? Show me all metrics vs the previous week by campaign.",
    team: "agency",
    integrations: ["facebook-ads", "google-ads", "google-analytics"],
    difficulty: "intermediate",
    estimatedTime: "10-20 minutes",
    prompt:
      "What caused my client's campaign performance to crash yesterday? Show me all metrics vs the previous week by campaign.",
  },
  {
    id: "RCP-47",
    slug: "conversion-rate-sudden-drop",
    title: "Conversion Rate Sudden Drop",
    description:
      "What caused my client's conversion rate to drop? Compare this week vs last month across all traffic sources.",
    team: "agency",
    integrations: ["facebook-ads", "google-ads", "google-analytics"],
    difficulty: "intermediate",
    estimatedTime: "10-20 minutes",
    prompt:
      "What caused my client's conversion rate to drop? Compare this week vs last month across all traffic sources.",
  },
  {
    id: "RCP-48",
    slug: "cost-per-lead-spike",
    title: "Cost Per Lead Spike",
    description:
      "Why did cost per lead increase so much? Show me lead costs by campaign and ad set over time.",
    team: "agency",
    integrations: [
      "facebook-ads",
      "google-ads",
      "google-analytics",
      "linkedin-ads",
    ],
    difficulty: "intermediate",
    estimatedTime: "10-20 minutes",
    prompt:
      "Why did cost per lead increase so much? Show me lead costs by campaign and ad set over time.",
  },
  {
    id: "RCP-49",
    slug: "monthovermonth-growth-report",
    title: "Month-over-Month Growth Report",
    description:
      "How much have we grown this client's business? Show me leads, sales, and revenue growth since we started",
    team: "agency",
    integrations: [
      "postgres",
      "facebook-ads",
      "google-ads",
      "google-analytics",
      "google-sheets",
      "excel",
    ],
    difficulty: "advanced",
    estimatedTime: "20-30 minutes",
    prompt:
      "How much have we grown this client's business? Show me leads, sales, and revenue growth since we started",
  },
  {
    id: "RCP-50",
    slug: "competitive-performance-comparison",
    title: "Competitive Performance Comparison",
    description:
      "How does this client rank against competitors? Show me search visibility, ad presence, and market share indicators.",
    team: "agency",
    integrations: ["google-ads", "google-analytics", "google-searchconsole"],
    difficulty: "intermediate",
    estimatedTime: "10-20 minutes",
    prompt:
      "How does this client rank against competitors? Show me search visibility, ad presence, and market share indicators.",
  },
  {
    id: "RCP-51",
    slug: "longterm-value-demonstration",
    title: "Long-term Value Demonstration",
    description:
      "What's the long-term value we've created? Show me customer lifetime value and retention improvements since we started.",
    team: "agency",
    integrations: ["postgres", "google-analytics", "google-sheets", "excel", "stripe"],
    difficulty: "intermediate",
    estimatedTime: "10-20 minutes",
    prompt:
      "What's the long-term value we've created? Show me customer lifetime value and retention improvements since we started.",
  },
  {
    id: "RCP-52",
    slug: "underperforming-campaign-identification",
    title: "Underperforming Campaign Identification",
    description:
      "Which of this client's campaigns are underperforming? Show me campaigns below target CPA or ROAS.",
    team: "agency",
    integrations: [
      "facebook-ads",
      "google-admanager",
      "google-ads",
      "google-analytics",
    ],
    difficulty: "intermediate",
    estimatedTime: "10-20 minutes",
    prompt:
      "Which of this client's campaigns are underperforming? Show me campaigns below target CPA or ROAS.",
  },
  {
    id: "RCP-53",
    slug: "creative-performance-analysis",
    title: "Creative Performance Analysis",
    description:
      "Which ad creatives are still performing for this client? Show me performance by creative and when to refresh.",
    team: "agency",
    integrations: ["facebook-ads", "google-ads", "linkedin-ads", "tiktok-ads"],
    difficulty: "intermediate",
    estimatedTime: "10-20 minutes",
    prompt:
      "Which ad creatives are still performing for this client? Show me performance by creative and when to refresh.",
  },
  {
    id: "RCP-54",
    slug: "google-ads-keyword-optimization",
    title: "Google Ads Keyword Optimization",
    description:
      "Create a comprehensive Google Ads Dashboard with impression, clicks, conversion metrics, plot trendlines and charts. Which Google Ads keywords are costing me money without getting conversions? Show me...",
    team: "marketing",
    integrations: ["google-ads"],
    difficulty: "intermediate",
    estimatedTime: "10-20 minutes",
    prompt:
      "Create a comprehensive Google Ads Dashboard with impression, clicks, conversion metrics, plot trendlines and charts. Which Google Ads keywords are costing me money without getting conversions? Show me cost per conversion by keyword. Do this for all active campaigns. For each keyword show which campaign, ad group it belongs to.",
    mockData:
      "Recipes%20Database%20241d568624128093b1bde0718b9200d9/google_ads_keyword_optimization_mock_data.csv",
  },
  {
    id: "RCP-55",
    slug: "create-rfm-analysis",
    title: "Create RFM Analysis",
    description: "",
    team: "crm",
    integrations: [],
    difficulty: "beginner",
    estimatedTime: "5-10 minutes",
    prompt: "",
  },
  {
    id: "RCP-56",
    slug: "identify-top-customers",
    title: "Identify Top Customers",
    description: "",
    team: "crm",
    integrations: [],
    difficulty: "beginner",
    estimatedTime: "5-10 minutes",
    prompt: "",
  },
  {
    id: "RCP-57",
    slug: "identify-churning-customers",
    title: "Identify Churning Customers",
    description: "",
    team: "crm",
    integrations: [],
    difficulty: "beginner",
    estimatedTime: "5-10 minutes",
    prompt: "",
  },
  {
    id: "RCP-58",
    slug: "google-ads-search-keyword-optimization-strategies",
    title: "Google Ads Search Keyword Optimization Strategies",
    description: "",
    team: "marketing",
    integrations: ["google-ads"],
    difficulty: "beginner",
    estimatedTime: "5-10 minutes",
    prompt: "",
  },
  {
    id: "RCP-1754913814969",
    slug: "tiktok-campaign-roi-analysis",
    title: "TikTok Campaign ROI Analysis",
    description:
      "Analyze tiktok campaign roi analysis with comprehensive insights and visualizations",
    team: "marketing",
    integrations: ["google-analytics"],
    difficulty: "beginner",
    estimatedTime: "5-10 minutes",
    prompt:
      "How can I analyze tiktok campaign roi analysis? Show me key metrics and trends.",
    mockData: "tiktok-campaign-roi-analysis_mock_data.csv",
  },
  {
    id: "RCP-59",
    slug: "youtube-channel-performance-optimization",
    title: "YouTube Channel Performance Optimization",
    description:
      "Which YouTube videos are driving the most engagement and conversions? Analyze views, watch time, CTR, and subscriber growth to identify top-performing content patterns and optimize your content strategy.",
    team: "content-creators",
    integrations: ["youtube", "google-analytics"],
    difficulty: "intermediate",
    estimatedTime: "10-20 minutes",
    prompt:
      "Which YouTube videos are driving the most engagement and conversions? Show me views, watch time, click-through rates, subscriber growth, and revenue generated by video. Identify patterns in top-performing content and suggest optimization strategies for future videos.",
    mockData:
      "Recipes%20Database%20241d568624128093b1bde0718b9200d9/youtube_channel_performance_mock_data.csv",
  },
  {
    id: "RCP-60",
    slug: "youtube-audience-retention-analysis",
    title: "YouTube Audience Retention Analysis",
    description:
      "Where are viewers dropping off in my videos? Analyze audience retention graphs, identify drop-off points, and get actionable recommendations to improve watch time and engagement.",
    team: "content-creators",
    integrations: ["youtube"],
    difficulty: "beginner",
    estimatedTime: "5-10 minutes",
    prompt:
      "Where are viewers dropping off in my videos? Show me audience retention data, identify the specific timestamps where viewers leave, and analyze patterns across my top 20 videos. Provide actionable recommendations to improve watch time and reduce drop-off rates.",
    mockData:
      "Recipes%20Database%20241d568624128093b1bde0718b9200d9/youtube_retention_analysis_mock_data.csv",
  },
  {
    id: "RCP-61",
    slug: "youtube-monetization-revenue-tracker",
    title: "YouTube Monetization Revenue Tracker",
    description:
      "How much revenue is each video generating? Track AdSense earnings, sponsorship ROI, and channel monetization performance. Identify your most profitable content types and optimize revenue streams.",
    team: "content-creators",
    integrations: ["youtube", "google-ads", "stripe"],
    difficulty: "intermediate",
    estimatedTime: "10-20 minutes",
    prompt:
      "How much revenue is each video generating? Show me AdSense earnings per video, sponsorship performance, merchandise sales, and total revenue by content type. Calculate revenue per view and identify which video topics and formats are most profitable. Create a monetization optimization plan.",
    mockData:
      "Recipes%20Database%20241d568624128093b1bde0718b9200d9/youtube_revenue_tracker_mock_data.csv",
  },
  {
    id: "RCP-62",
    slug: "youtube-competitor-content-gap-analysis",
    title: "YouTube Competitor Content Gap Analysis",
    description:
      "What content are my competitors creating that I'm missing? Analyze competitor video performance, identify trending topics in my niche, and discover untapped content opportunities.",
    team: "content-creators",
    integrations: ["youtube", "google-sheets", "excel"],
    difficulty: "advanced",
    estimatedTime: "20-30 minutes",
    prompt:
      "What content are my competitors creating that I'm missing? Analyze competitor channels in my niche, identify their top-performing videos, trending topics, and content gaps I can fill. Show me video topics with high engagement that I haven't covered yet and suggest a content calendar to capture these opportunities.",
    mockData:
      "Recipes%20Database%20241d568624128093b1bde0718b9200d9/youtube_competitor_gap_analysis_mock_data.csv",
  },
  {
    id: "RCP-63",
    slug: "youtube-thumbnail-ctr-optimization",
    title: "YouTube Thumbnail CTR Optimization",
    description:
      "Which thumbnails get the most clicks? Analyze click-through rates by thumbnail style, color, text, and visual elements. Get data-driven recommendations to design thumbnails that maximize views.",
    team: "content-creators",
    integrations: ["youtube"],
    difficulty: "beginner",
    estimatedTime: "5-10 minutes",
    prompt:
      "Which thumbnails get the most clicks? Analyze click-through rates across my videos, identify patterns in high-performing thumbnails including colors, text placement, facial expressions, and visual elements. Compare CTR performance and provide specific recommendations for designing thumbnails that maximize clicks and views.",
    mockData:
      "Recipes%20Database%20241d568624128093b1bde0718b9200d9/youtube_thumbnail_ctr_optimization_mock_data.csv",
  },
];
