import { Metadata } from "next";
import {
  Database,
  MessageSquare,
  BarChart3,
  Users,
  Calendar,
  Share2,
  TrendingUp,
} from "lucide-react";

import { VsHero } from "@/components/vs/vs-hero";
import { VsComparisonTable } from "@/components/vs/vs-comparison-table";
import { DatapadCasestudies } from "@/components/datapad-casestudies";
import { MainLogos } from "@/components/main-logos";
import { Cta18 } from "@/components/cta18";
import { Faq2 } from "@/components/faq2";

export const metadata: Metadata = {
  title: "Datapad vs Julius AI - Compare AI Analytics Platforms",
  description:
    "Compare Datapad and Julius AI. See why teams choose Datapad's comprehensive AI analytics over Julius's limited chat-based analysis. Get actionable insights, not just conversations.",
  openGraph: {
    title: "Datapad vs Julius AI",
    description:
      "Compare Datapad and Julius AI. See why teams choose Datapad's comprehensive AI analytics over limited chat tools.",
    type: "website",
  },
};

const FAQ_ITEMS = [
  {
    question: "How is Datapad different from Julius?",
    answer:
      "While Julius focuses on chat-based data analysis, Datapad is a comprehensive analytics suite. We connect to 50+ data sources, create automated reports, build dashboards, and generate actionable campaigns - not just chat responses.",
  },
  {
    question: "Can Datapad connect to databases like Julius?",
    answer:
      "Yes, and much more! Datapad connects to all major databases (SQL, BigQuery, Snowflake, etc.) plus 50+ marketing, sales, and business tools. Julius is limited to file uploads and basic integrations.",
  },
  {
    question: "Does Datapad support team collaboration?",
    answer:
      "Absolutely! Datapad offers team workspaces, role management, shared dashboards, and collaborative reporting. Julius is primarily designed for individual use.",
  },
  {
    question: "Can I automate reporting with Datapad?",
    answer:
      "Yes! Datapad creates automated, scheduled reports with AI-powered insights. Julius requires manual interaction for each analysis.",
  },
  {
    question: "What about data visualization?",
    answer:
      "Datapad generates beautiful, interactive dashboards and shareable reports. Julius provides basic charts within chat conversations only.",
  },
  {
    question: "Is Datapad suitable for non-technical users?",
    answer:
      "Definitely! While Julius targets data scientists, Datapad is built for business users. Ask questions in natural language and get business-ready insights and campaigns.",
  },
];

const JULIUS_FEATURES = [
  {
    feature: "Chat with your data",
    icon: MessageSquare,
    datapad: {
      available: true,
      description:
        "Natural language queries with instant answers and visualizations",
    },
    competitor: {
      available: true,
      description: "Basic chat interface for data analysis",
    },
  },
  {
    feature: "CSV, sheets data analysis",
    icon: Database,
    datapad: {
      available: true,
      description: "Advanced analysis with AI insights and automated reporting",
    },
    competitor: {
      available: true,
      description: "File upload and basic statistical analysis",
    },
  },
  {
    feature: "Connect to databases",
    icon: Database,
    datapad: {
      available: true,
      description:
        "All major databases: SQL, BigQuery, Snowflake, PostgreSQL, etc.",
    },
    competitor: {
      available: false,
      description: "No direct database connections available",
    },
  },
  {
    feature: "50+ integrations",
    icon: BarChart3,
    datapad: {
      available: true,
      description: "Marketing, sales, social, and business tool integrations",
    },
    competitor: {
      available: false,
      description: "Limited to file uploads and basic APIs",
    },
  },
  {
    feature: "Automated reporting",
    icon: Calendar,
    datapad: {
      available: true,
      description: "Scheduled AI-powered reports and alerts",
    },
    competitor: {
      available: false,
      description: "Manual analysis required for each query",
    },
  },
  {
    feature: "Interactive dashboards",
    icon: Share2,
    datapad: {
      available: true,
      description: "Beautiful, shareable dashboards and reports",
    },
    competitor: {
      available: false,
      description: "Chat-only results, no persistent dashboards",
    },
  },
  {
    feature: "Team collaboration",
    icon: Users,
    datapad: {
      available: true,
      description: "Workspaces, role management, and shared insights",
    },
    competitor: {
      available: false,
      description: "Individual use only, no team features",
    },
  },
  {
    feature: "Anomaly detection",
    icon: TrendingUp,
    datapad: {
      available: true,
      description: "Proactive AI-powered alerts and trend detection",
    },
    competitor: {
      available: false,
      description: "No automated monitoring capabilities",
    },
  },
];

export default function JuliusComparisonPage() {
  return (
    <>
      {/* Hero Section */}
      <VsHero
        competitorName="Julius"
        competitorLogo="/images/julius-logo.png"
        subtitle="No more wasting time on analyzing Excels, CSVs. Get instant answers anywhere, anytime."
      />

      {/* Comparison Table */}
      <VsComparisonTable
        competitorName="Julius"
        competitorTagline="AI data science tool"
        competitorDescription="Limited to in-chat results targeted towards data scientists"
        competitorLogo="/images/julius-logo.png"
        features={JULIUS_FEATURES}
        title="Datapad is a comprehensive suite, Julius is a data-science tool."
      />

      {/* Trusted By Section */}
      <MainLogos />

      {/* Testimonials */}
      <DatapadCasestudies />

      {/* Julius-specific FAQ */}
      <Faq2 heading="Julius vs Datapad: Common Questions" items={FAQ_ITEMS} />

      {/* CTA Section */}
      <Cta18 />
    </>
  );
}
