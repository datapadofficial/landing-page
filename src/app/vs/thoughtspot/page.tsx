import { Metadata } from "next";
import {
  Database,
  BarChart3,
  Users,
  Calendar,
  TrendingUp,
  Zap,
  Brain,
  Search,
} from "lucide-react";

import { VsHero } from "@/components/vs/vs-hero";
import { VsComparisonTable } from "@/components/vs/vs-comparison-table";
import { DatapadCasestudies } from "@/components/datapad-casestudies";
import { Logos5 } from "@/components/logos5";
import { Cta18 } from "@/components/cta18";
import { Faq2 } from "@/components/faq2";

export const metadata: Metadata = {
  title: "Datapad vs ThoughtSpot - AI Analytics vs Search-Driven Analytics",
  description:
    "Compare Datapad and ThoughtSpot. See why teams choose Datapad's AI-powered campaign generation over ThoughtSpot's search-only approach. Get actionable strategies, not just search results.",
  openGraph: {
    title: "Datapad vs ThoughtSpot",
    description:
      "Compare Datapad and ThoughtSpot. AI-powered analytics vs search-driven business intelligence.",
    type: "website",
  },
};

const FAQ_ITEMS = [
  {
    question: "How is Datapad different from ThoughtSpot?",
    answer:
      "While ThoughtSpot focuses on search-driven analytics and requires you to know what to search for, Datapad proactively analyzes your data and creates actionable campaigns. ThoughtSpot helps you find answers, Datapad tells you what actions to take.",
  },
  {
    question: "Do I need to know what questions to ask?",
    answer:
      "With Datapad, no! Our AI proactively discovers insights and generates recommendations. ThoughtSpot requires you to know what to search for and how to phrase your questions correctly.",
  },
  {
    question: "Can Datapad replace our ThoughtSpot setup?",
    answer:
      "Yes! Datapad connects to the same enterprise data sources as ThoughtSpot but adds proactive AI analysis, automated campaign generation, and actionable recommendations that ThoughtSpot's search approach lacks.",
  },
  {
    question: "What about data governance and security?",
    answer:
      "Datapad offers enterprise-grade security and governance while being much more proactive than ThoughtSpot's reactive search model. You get insights automatically without needing to search.",
  },
  {
    question: "How does the user experience compare?",
    answer:
      "Datapad's conversational AI is more intuitive than ThoughtSpot's search interface. Instead of learning search syntax, you simply ask questions naturally and get comprehensive insights with action plans.",
  },
  {
    question: "Can Datapad handle complex enterprise data?",
    answer:
      "Absolutely! Datapad works with the same enterprise data sources as ThoughtSpot but adds AI-powered analysis that proactively monitors your business and generates actionable insights automatically.",
  },
];

const THOUGHTSPOT_FEATURES = [
  {
    feature: "Search-driven analytics",
    icon: Search,
    datapad: {
      available: true,
      description:
        "Natural language queries plus proactive AI insights and recommendations",
    },
    competitor: {
      available: true,
      description:
        "Search-based queries requiring knowledge of search syntax and data structure",
    },
  },
  {
    feature: "Enterprise data connections",
    icon: Database,
    datapad: {
      available: true,
      description: "50+ integrations with automated setup and data blending",
    },
    competitor: {
      available: true,
      description:
        "Enterprise connectors but complex setup and data modeling required",
    },
  },
  {
    feature: "Proactive insights",
    icon: Brain,
    datapad: {
      available: true,
      description:
        "AI automatically discovers trends, anomalies, and business opportunities",
    },
    competitor: {
      available: false,
      description: "Reactive search only - you must know what to look for",
    },
  },
  {
    feature: "Campaign generation",
    icon: TrendingUp,
    datapad: {
      available: true,
      description:
        "Creates actionable marketing campaigns and business strategies from insights",
    },
    competitor: {
      available: false,
      description:
        "Search results only, no actionable campaign recommendations",
    },
  },
  {
    feature: "Automated dashboards",
    icon: BarChart3,
    datapad: {
      available: true,
      description:
        "AI generates relevant dashboards based on your business context",
    },
    competitor: {
      available: true,
      description: "Manual dashboard creation from search results",
    },
  },
  {
    feature: "Team collaboration",
    icon: Users,
    datapad: {
      available: true,
      description:
        "Built-in workspaces with shared insights and collaborative analysis",
    },
    competitor: {
      available: true,
      description:
        "Collaboration features available but focused on sharing search results",
    },
  },
  {
    feature: "Automated reporting",
    icon: Calendar,
    datapad: {
      available: true,
      description:
        "AI-powered scheduled reports with insights and action recommendations",
    },
    competitor: {
      available: true,
      description:
        "Scheduled reports based on saved searches without AI insights",
    },
  },
  {
    feature: "No learning curve",
    icon: Zap,
    datapad: {
      available: true,
      description:
        "Conversational AI that understands business context naturally",
    },
    competitor: {
      available: false,
      description:
        "Requires learning search syntax and understanding data relationships",
    },
  },
  {
    feature: "Anomaly detection",
    icon: TrendingUp,
    datapad: {
      available: true,
      description:
        "Proactive monitoring with automated alerts and business recommendations",
    },
    competitor: {
      available: true,
      description:
        "Basic alerting available but requires manual setup and monitoring",
    },
  },
];

export default function ThoughtSpotComparisonPage() {
  return (
    <>
      {/* Hero Section */}
      <VsHero
        competitorName="ThoughtSpot"
        subtitle="Move beyond reactive search analytics. While ThoughtSpot waits for you to ask the right questions, Datapad's AI proactively discovers insights and creates actionable business strategies."
        ctaText="Start Your AI Analytics"
      />

      {/* Comparison Table */}
      <VsComparisonTable
        competitorName="ThoughtSpot"
        competitorTagline="Search-driven analytics platform"
        competitorDescription="Reactive search-based analytics requiring users to know what questions to ask"
        competitorLogo="/images/datapad-logo.svg"
        features={THOUGHTSPOT_FEATURES}
        title="Datapad delivers proactive AI-powered insights, ThoughtSpot offers reactive search-driven analytics."
      />

      {/* Trusted By Section */}
      <Logos5 />

      {/* Testimonials */}
      <DatapadCasestudies />

      {/* ThoughtSpot-specific FAQ */}
      <Faq2
        heading="ThoughtSpot vs Datapad: Common Questions"
        items={FAQ_ITEMS}
      />

      {/* CTA Section */}
      <Cta18 />
    </>
  );
}
