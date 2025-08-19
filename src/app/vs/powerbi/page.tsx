import { Metadata } from "next";
import {
  Database,
  MessageSquare,
  BarChart3,
  Users,
  Calendar,
  TrendingUp,
  Zap,
} from "lucide-react";

import { VsHero } from "@/components/vs/vs-hero";
import { VsComparisonTable } from "@/components/vs/vs-comparison-table";
import { DatapadCasestudies } from "@/components/datapad-casestudies";
import { Logos5 } from "@/components/main-logos";
import { Cta18 } from "@/components/cta18";
import { Faq2 } from "@/components/faq2";
import { Feature128 } from "@/components/feature128";

export const metadata: Metadata = {
  title: "Datapad vs Power BI - Compare AI Analytics vs Traditional BI",
  description:
    "Compare Datapad and Microsoft Power BI. See why teams choose Datapad's AI-powered analytics over traditional BI tools. Get actionable campaigns, not just charts.",
  openGraph: {
    title: "Datapad vs Power BI",
    description:
      "Compare Datapad and Microsoft Power BI. AI-powered analytics vs traditional business intelligence.",
    type: "website",
  },
};

const FAQ_ITEMS = [
  {
    question: "How is Datapad different from Power BI?",
    answer:
      "While Power BI focuses on data visualization and reporting, Datapad is an AI-first analytics platform that creates actionable campaigns and strategies. Power BI shows you what happened, Datapad tells you what to do next.",
  },
  {
    question: "Do I need technical skills for Datapad vs Power BI?",
    answer:
      "Datapad requires no technical skills - just ask questions in natural language. Power BI requires knowledge of DAX, data modeling, and complex setup procedures.",
  },
  {
    question: "Can Datapad replace our Power BI setup?",
    answer:
      "Yes! Datapad connects to the same data sources as Power BI but adds AI-powered insights, automated reporting, and actionable campaign generation that Power BI lacks.",
  },
  {
    question: "What about data governance and enterprise features?",
    answer:
      "Datapad offers enterprise-grade security and governance while being much easier to use than Power BI's complex permission systems and row-level security setup.",
  },
  {
    question: "How does pricing compare?",
    answer:
      "Datapad's transparent pricing often costs less than Power BI Premium when you factor in setup time, training, and ongoing maintenance. Plus you get AI insights that Power BI doesn't offer.",
  },
];

const POWERBI_FEATURES = [
  {
    feature: "Natural language queries",
    icon: MessageSquare,
    datapad: {
      available: true,
      description:
        "Advanced AI understands business context and generates insights",
    },
    competitor: {
      available: true,
      description: "Basic Q&A feature with limited understanding",
    },
  },
  {
    feature: "Data source connections",
    icon: Database,
    datapad: {
      available: true,
      description: "50+ integrations with one-click setup",
    },
    competitor: {
      available: true,
      description: "Many connectors but complex setup required",
    },
  },
  {
    feature: "Automated insights",
    icon: Zap,
    datapad: {
      available: true,
      description: "AI automatically discovers trends and anomalies",
    },
    competitor: {
      available: false,
      description: "Manual analysis required, no proactive insights",
    },
  },
  {
    feature: "Campaign generation",
    icon: TrendingUp,
    datapad: {
      available: true,
      description: "Creates actionable marketing and business campaigns",
    },
    competitor: {
      available: false,
      description: "Shows charts only, no actionable recommendations",
    },
  },
  {
    feature: "Easy dashboard creation",
    icon: BarChart3,
    datapad: {
      available: true,
      description: "AI generates dashboards automatically from your questions",
    },
    competitor: {
      available: true,
      description: "Manual dashboard building with steep learning curve",
    },
  },
  {
    feature: "Real-time collaboration",
    icon: Users,
    datapad: {
      available: true,
      description: "Built-in team workspaces and instant sharing",
    },
    competitor: {
      available: true,
      description: "Complex workspace setup and licensing required",
    },
  },
  {
    feature: "Scheduled reporting",
    icon: Calendar,
    datapad: {
      available: true,
      description: "AI-powered reports with insights and recommendations",
    },
    competitor: {
      available: true,
      description: "Basic report scheduling without AI insights",
    },
  },
  {
    feature: "No-code setup",
    icon: Zap,
    datapad: {
      available: true,
      description: "Connect and start analyzing in minutes",
    },
    competitor: {
      available: false,
      description: "Requires IT setup, DAX knowledge, and data modeling",
    },
  },
];

export default function PowerBIComparisonPage() {
  return (
    <>
      {/* Hero Section */}
      <VsHero
        competitorName="Power BI"
        subtitle="Move beyond traditional BI dashboards. While Power BI shows you charts, Datapad creates the campaigns and strategies that drive real business results."
        ctaText="Start Your AI Analytics"
      />

      {/* Comparison Table */}
      <VsComparisonTable
        competitorName="Power BI"
        competitorTagline="Microsoft's business intelligence platform"
        competitorDescription="Traditional BI tool focused on visualization and reporting"
        competitorLogo="/images/datapad-logo.svg"
        features={POWERBI_FEATURES}
        title="Datapad delivers AI-powered business intelligence, Power BI offers traditional charts and dashboards."
      />

      {/* Additional Feature Section - Custom for Power BI */}
      <Feature128 />

      {/* Trusted By Section */}
      <Logos5 />

      {/* Testimonials */}
      <DatapadCasestudies />

      {/* Power BI-specific FAQ */}
      <Faq2
        heading="Power BI vs Datapad: Enterprise Questions"
        items={FAQ_ITEMS}
      />

      {/* CTA Section */}
      <Cta18 />
    </>
  );
}
