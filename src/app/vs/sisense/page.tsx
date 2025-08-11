import { Metadata } from "next";
import {
  Database,
  MessageSquare,
  BarChart3,
  Users,
  Calendar,
  TrendingUp,
  Zap,
  Brain,
} from "lucide-react";

import { VsHero } from "@/components/vs/vs-hero";
import { VsComparisonTable } from "@/components/vs/vs-comparison-table";
import { DatapadCasestudies } from "@/components/datapad-casestudies";
import { Logos5 } from "@/components/logos5";
import { Cta18 } from "@/components/cta18";
import { Faq2 } from "@/components/faq2";

export const metadata: Metadata = {
  title: "Datapad vs Sisense - AI Analytics vs Traditional BI Platform",
  description:
    "Compare Datapad and Sisense. See why teams choose Datapad's AI-powered campaign generation over Sisense's complex BI platform. Get actionable strategies, not just dashboards.",
  openGraph: {
    title: "Datapad vs Sisense",
    description:
      "Compare Datapad and Sisense. AI-powered analytics vs traditional business intelligence platform.",
    type: "website",
  },
};

const FAQ_ITEMS = [
  {
    question: "How is Datapad different from Sisense?",
    answer:
      "While Sisense focuses on complex data modeling and traditional BI dashboards, Datapad is an AI-first platform that creates actionable campaigns and strategies. Sisense shows you what happened, Datapad creates what you should do next.",
  },
  {
    question: "Do I need technical expertise for Datapad vs Sisense?",
    answer:
      "Datapad requires no technical skills - just natural language questions. Sisense requires data modeling expertise, ElastiCube management, and complex setup procedures that typically need IT involvement.",
  },
  {
    question: "Can Datapad replace our Sisense implementation?",
    answer:
      "Yes! Datapad connects to the same data sources as Sisense but eliminates the need for complex data cubes and modeling. Plus, you get AI-powered insights and campaign generation that Sisense doesn't offer.",
  },
  {
    question: "What about handling large datasets?",
    answer:
      "Datapad handles enterprise-scale data efficiently through cloud-native architecture, while Sisense relies on ElastiCubes that require ongoing maintenance and optimization. Datapad's AI also automatically optimizes queries.",
  },
  {
    question: "How does the implementation time compare?",
    answer:
      "Datapad can be set up in minutes with one-click integrations. Sisense typically requires weeks or months for proper ElastiCube setup, data modeling, and dashboard creation.",
  },
  {
    question: "What about total cost of ownership?",
    answer:
      "Datapad's transparent pricing is often significantly lower than Sisense when you factor in implementation costs, ongoing maintenance, training, and the need for technical resources to manage ElastiCubes.",
  },
];

const SISENSE_FEATURES = [
  {
    feature: "Natural language queries",
    icon: MessageSquare,
    datapad: {
      available: true,
      description:
        "Advanced conversational AI that understands business context and generates insights",
    },
    competitor: {
      available: true,
      description:
        "Basic natural language interface with limited understanding",
    },
  },
  {
    feature: "Data source connections",
    icon: Database,
    datapad: {
      available: true,
      description: "50+ integrations with automated setup and data blending",
    },
    competitor: {
      available: true,
      description:
        "Many connectors but requires complex ElastiCube modeling and setup",
    },
  },
  {
    feature: "AI-powered insights",
    icon: Brain,
    datapad: {
      available: true,
      description:
        "Proactive AI analyst that discovers trends and generates business recommendations",
    },
    competitor: {
      available: true,
      description:
        "Basic AI features but requires manual analysis and interpretation",
    },
  },
  {
    feature: "Campaign generation",
    icon: TrendingUp,
    datapad: {
      available: true,
      description:
        "Creates actionable marketing campaigns and business strategies from data",
    },
    competitor: {
      available: false,
      description:
        "Dashboard and reporting focus only, no actionable campaign creation",
    },
  },
  {
    feature: "Easy dashboard creation",
    icon: BarChart3,
    datapad: {
      available: true,
      description:
        "AI automatically generates dashboards from natural language questions",
    },
    competitor: {
      available: true,
      description:
        "Powerful dashboards but require ElastiCube setup and technical knowledge",
    },
  },
  {
    feature: "Team collaboration",
    icon: Users,
    datapad: {
      available: true,
      description:
        "Built-in team workspaces with instant sharing and collaborative analysis",
    },
    competitor: {
      available: true,
      description:
        "Collaboration features available but complex permission management required",
    },
  },
  {
    feature: "Automated reporting",
    icon: Calendar,
    datapad: {
      available: true,
      description:
        "AI-powered scheduled reports with insights and actionable recommendations",
    },
    competitor: {
      available: true,
      description:
        "Scheduled reporting available but without AI-generated insights",
    },
  },
  {
    feature: "No-code setup",
    icon: Zap,
    datapad: {
      available: true,
      description:
        "Connect and start analyzing immediately with natural language",
    },
    competitor: {
      available: false,
      description:
        "Requires ElastiCube modeling, data preparation, and technical setup",
    },
  },
  {
    feature: "Real-time monitoring",
    icon: TrendingUp,
    datapad: {
      available: true,
      description:
        "Proactive anomaly detection with automated business recommendations",
    },
    competitor: {
      available: true,
      description:
        "Real-time capabilities but require manual threshold setup and monitoring",
    },
  },
];

export default function SisenseComparisonPage() {
  return (
    <>
      {/* Hero Section */}
      <VsHero
        competitorName="Sisense"
        subtitle="Move beyond complex BI platforms. While Sisense requires technical teams to build ElastiCubes and model data, Datapad's AI creates actionable campaigns and strategies instantly."
        ctaText="Start Your AI Analytics"
      />

      {/* Comparison Table */}
      <VsComparisonTable
        competitorName="Sisense"
        competitorTagline="AI-driven analytics platform"
        competitorDescription="Traditional BI platform requiring complex data modeling and technical setup"
        competitorLogo="/images/datapad-logo.svg"
        features={SISENSE_FEATURES}
        title="Datapad delivers instant AI-powered business intelligence, Sisense requires complex technical setup."
      />

      {/* Trusted By Section */}
      <Logos5 />

      {/* Testimonials */}
      <DatapadCasestudies />

      {/* Sisense-specific FAQ */}
      <Faq2 heading="Sisense vs Datapad: Common Questions" items={FAQ_ITEMS} />

      {/* CTA Section */}
      <Cta18 />
    </>
  );
}
