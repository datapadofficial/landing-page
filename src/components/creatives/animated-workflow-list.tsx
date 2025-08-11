"use client";

import Image from "next/image";
import {
  AnimatedList,
  AnimatedListItem,
} from "@/components/magicui/animated-list";

// High-converting workflow data based on USE_CASES.csv
const workflows = [
  {
    id: "RCP-1",
    title: "Cross-Channel Marketing ROI",
    description:
      "Which channels give the best ROI? Get impression, click, and cost analysis across all ad platforms.",
    integration: "google-analytics",
    category: "Marketing",
    impact: "High ROI",
  },
  {
    id: "RCP-3",
    title: "E-commerce Performance Dashboard",
    description:
      "Track conversion rates, cart abandonment, and top products with comprehensive analytics.",
    integration: "shopify",
    category: "E-commerce",
    impact: "Boost Sales",
  },
  {
    id: "RCP-2",
    title: "Sales Performance Tracker",
    description:
      "Monitor team performance, pipeline health, and deal conversion rates in real-time.",
    integration: "salesforce",
    category: "Sales",
    impact: "Team Growth",
  },
  {
    id: "RCP-40",
    title: "Google Ads Money Drain Fix",
    description:
      "Find keywords burning budget without conversions. Stop wasting ad spend instantly.",
    integration: "google-ads",
    category: "PPC",
    impact: "Save Budget",
  },
  {
    id: "RCP-41",
    title: "Facebook Ad Profitability Check",
    description:
      "See which campaigns actually make money vs cost per customer acquisition.",
    integration: "facebook-ads",
    category: "Social Ads",
    impact: "Profit Focus",
  },
  {
    id: "RCP-5",
    title: "SEO Performance Overview",
    description:
      "Track keyword rankings, organic traffic trends, and page performance with monthly insights.",
    integration: "google-searchconsole",
    category: "SEO",
    impact: "Organic Growth",
  },
  {
    id: "RCP-8",
    title: "Social Media Performance",
    description:
      "Monitor engagement rates, follower growth, reach, and conversions across platforms.",
    integration: "instagram-business",
    category: "Social Media",
    impact: "Brand Growth",
  },
  {
    id: "RCP-9",
    title: "Product Usage Analytics",
    description:
      "Analyze feature adoption rates, user journeys, and identify drop-off points.",
    integration: "mixpanel",
    category: "Product",
    impact: "User Insights",
  },
  {
    id: "RCP-10",
    title: "Profitability Analysis",
    description:
      "Calculate profit margins by product, channel, and customer segment.",
    integration: "stripe",
    category: "Finance",
    impact: "Profit Max",
  },
  {
    id: "RCP-11",
    title: "Cash Flow Forecasting",
    description:
      "Predict cash flow patterns with historical data and pipeline analysis.",
    integration: "quickbooks",
    category: "Finance",
    impact: "Cash Control",
  },
  {
    id: "RCP-12",
    title: "Client Performance Dashboard",
    description:
      "Track advertising spend, impressions, clicks, CTR, leads, and ROI for clients.",
    integration: "linkedin-ads",
    category: "Agency",
    impact: "Client ROI",
  },
  {
    id: "RCP-13",
    title: "Paid vs Organic Traffic",
    description:
      "Blend paid and organic sessions with cost-per-session and bounce rate analysis.",
    integration: "google-ads",
    category: "Marketing",
    impact: "Traffic Mix",
  },
  {
    id: "RCP-15",
    title: "Ecommerce Funnel Analysis",
    description:
      "Visualize customer funnel from cart to checkout and identify drop-off points.",
    integration: "shopify",
    category: "E-commerce",
    impact: "Conversion",
  },
  {
    id: "RCP-16",
    title: "Customer LTV Cohorts",
    description:
      "Build 12-month LTV curves by acquisition channel with payback analysis.",
    integration: "stripe",
    category: "Growth",
    impact: "LTV Growth",
  },
  {
    id: "RCP-17",
    title: "Inventory Stock-Out Prediction",
    description:
      "Predict SKU-level stock-out dates and flag at-risk items within 14 days.",
    integration: "shopify",
    category: "Supply Chain",
    impact: "Stock Control",
  },
  {
    id: "RCP-18",
    title: "Feature Adoption Tracking",
    description:
      "Monitor daily active users of new features vs control with adoption rates.",
    integration: "mixpanel",
    category: "Product",
    impact: "Feature Success",
  },
  {
    id: "RCP-19",
    title: "Subscription Pricing Strategy",
    description:
      "Analyze conversion rates by pricing tier and package performance.",
    integration: "stripe",
    category: "SaaS",
    impact: "Price Optimize",
  },
  {
    id: "RCP-21",
    title: "Keywords in Danger",
    description:
      "Find query-URL pairs that dropped out of top-10 and lost 25%+ clicks.",
    integration: "google-searchconsole",
    category: "SEO",
    impact: "Rank Recovery",
  },
  {
    id: "RCP-22",
    title: "High-Potential Keywords",
    description:
      "Identify positions 11-20 keywords with 1000+ impressions and low CTR.",
    integration: "google-searchconsole",
    category: "SEO",
    impact: "Quick Wins",
  },
  {
    id: "RCP-24",
    title: "Landing Page Conversion Lift",
    description:
      "Find high-traffic pages with poor conversion and estimate lift potential.",
    integration: "google-analytics",
    category: "CRO",
    impact: "Conversion+",
  },
  {
    id: "RCP-30",
    title: "Budget Pacing & Forecast",
    description:
      "Monitor monthly spend vs budget and forecast end-of-month performance.",
    integration: "facebook-ads",
    category: "Marketing",
    impact: "Budget Control",
  },
  {
    id: "RCP-31",
    title: "Customer Acquisition Cost",
    description: "Calculate blended CAC and channel-level CAC with LTV ratios.",
    integration: "google-ads",
    category: "Growth",
    impact: "CAC Optimize",
  },
  {
    id: "RCP-36",
    title: "Cart Abandonment Investigation",
    description:
      "Analyze why customers abandon carts and where they drop off in checkout.",
    integration: "shopify",
    category: "E-commerce",
    impact: "Cart Recovery",
  },
  {
    id: "RCP-46",
    title: "Campaign Performance Crash",
    description:
      "Identify what caused campaign performance drops with week-over-week analysis.",
    integration: "facebook-ads",
    category: "Agency",
    impact: "Crisis Fix",
  },
  {
    id: "RCP-54",
    title: "Google Ads Optimization",
    description:
      "Comprehensive dashboard with impressions, clicks, conversions, and keyword analysis.",
    integration: "google-ads",
    category: "PPC",
    impact: "Ad Optimize",
  },
];

const WorkflowCard = ({ workflow }: { workflow: (typeof workflows)[0] }) => {
  const getIntegrationLogo = (integration: string) => {
    const logoMap: { [key: string]: string } = {
      "facebook-ads": "/images/integrations/facebook-ads.png",
      "google-ads": "/images/integrations/google-ads.png",
      "google-analytics": "/images/integrations/google-analytics.png",
      "linkedin-ads": "/images/integrations/linkedin-ads.png",
      "google-searchconsole": "/images/integrations/google-searchconsole.png",
      "instagram-business": "/images/integrations/instagram-business.png",
      shopify: "/images/integrations/shopify.png",
      salesforce: "/images/integrations/salesforce.png",
      hubspot: "/images/integrations/hubspot.png",
      stripe: "/images/integrations/stripe.png",
      mixpanel: "/images/integrations/mixpanel.png",
      quickbooks: "/images/integrations/quickbooks.png",
    };
    return logoMap[integration] || "/images/integrations/manual.png";
  };

  return (
    <div className="bg-transparent border border-border/30 rounded-lg p-3 backdrop-blur-sm hover:border-border/60 transition-all duration-200">
      <div className="flex items-center justify-between mb-2">
        <div className="rounded border border-border/20 overflow-hidden bg-background/50 flex-shrink-0">
          <Image
            src={getIntegrationLogo(workflow.integration)}
            alt={workflow.integration}
            width={18}
            height={18}
          />
        </div>
        <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
          {workflow.impact}
        </span>
      </div>
      <p className="font-medium mb-1 line-clamp-1">{workflow.title}</p>
      {/* <p className="text-xs text-muted-foreground leading-tight line-clamp-1">
        {workflow.description}
      </p> */}
    </div>
  );
};

export function AnimatedWorkflowList() {
  return (
    <div className="relative h-[280px] w-full overflow-hidden">
      <AnimatedList delay={2000} className="max-h-[280px] overflow-hidden">
        {workflows.map((workflow) => (
          <AnimatedListItem key={workflow.id}>
            <WorkflowCard workflow={workflow} />
          </AnimatedListItem>
        ))}
      </AnimatedList>
    </div>
  );
}
