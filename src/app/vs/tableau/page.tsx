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
import { MainLogos } from "@/components/main-logos";
import { Cta18 } from "@/components/cta18";
import { Faq2 } from "@/components/faq2";

export const metadata: Metadata = {
  title: "Datapad vs Tableau - AI Analytics vs Traditional Data Visualization",
  description:
    "Compare Datapad and Tableau. See why teams choose Datapad's AI-powered analytics over Tableau's complex visualization tools. Get actionable campaigns, not just charts.",
  openGraph: {
    title: "Datapad vs Tableau",
    description:
      "Compare Datapad and Tableau. AI-powered analytics vs traditional data visualization.",
    type: "website",
  },
};

const FAQ_ITEMS = [
  {
    question: "How is Datapad different from Tableau?",
    answer:
      "While Tableau focuses on data visualization and requires technical expertise, Datapad is an AI-first analytics platform that creates actionable campaigns and strategies. Tableau shows you beautiful charts, Datapad tells you what actions to take.",
  },
  {
    question: "Do I need technical skills for Datapad vs Tableau?",
    answer:
      "Datapad requires no technical skills - just ask questions in natural language. Tableau requires extensive training, understanding of data modeling, calculated fields, and complex visualization techniques.",
  },
  {
    question: "Can Datapad replace our Tableau setup?",
    answer:
      "Yes! Datapad connects to the same data sources as Tableau but adds AI-powered insights, automated campaign generation, and natural language queries that Tableau lacks. Plus, it's much easier to use.",
  },
  {
    question: "What about advanced visualizations?",
    answer:
      "Datapad automatically generates the right visualizations for your data and questions. While Tableau offers more manual control over chart types, Datapad's AI chooses optimal visualizations and focuses on actionable insights.",
  },
  {
    question: "How does pricing compare?",
    answer:
      "Datapad's transparent pricing often costs significantly less than Tableau when you factor in licensing, training, and implementation costs. Plus you get AI insights and campaign generation that Tableau doesn't offer.",
  },
  {
    question: "Can Datapad handle enterprise-scale data?",
    answer:
      "Absolutely! Datapad connects to enterprise databases, data warehouses, and cloud platforms just like Tableau, but with AI-powered analysis that scales automatically without complex setup.",
  },
];

const TABLEAU_FEATURES = [
  {
    feature: "Natural language queries",
    icon: MessageSquare,
    datapad: {
      available: true,
      description:
        "Advanced AI understands business context and generates insights automatically",
    },
    competitor: {
      available: true,
      description:
        "Basic Ask Data feature with limited natural language understanding",
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
      description:
        "Extensive connectors but complex setup and data preparation required",
    },
  },
  {
    feature: "AI-powered insights",
    icon: Brain,
    datapad: {
      available: true,
      description:
        "Proactive AI analyst that discovers trends and generates recommendations",
    },
    competitor: {
      available: false,
      description: "Manual analysis required, no AI-powered insight generation",
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
      description: "Visualization only, no actionable campaign recommendations",
    },
  },
  {
    feature: "Easy dashboard creation",
    icon: BarChart3,
    datapad: {
      available: true,
      description:
        "AI generates dashboards automatically from natural language questions",
    },
    competitor: {
      available: true,
      description:
        "Powerful but complex dashboard building requiring extensive training",
    },
  },
  {
    feature: "Team collaboration",
    icon: Users,
    datapad: {
      available: true,
      description:
        "Built-in team workspaces with instant sharing and commenting",
    },
    competitor: {
      available: true,
      description:
        "Collaboration available but requires Tableau Server/Cloud licensing",
    },
  },
  {
    feature: "Automated reporting",
    icon: Calendar,
    datapad: {
      available: true,
      description:
        "AI-powered scheduled reports with insights and action items",
    },
    competitor: {
      available: true,
      description: "Basic report scheduling without AI-generated insights",
    },
  },
  {
    feature: "No-code setup",
    icon: Zap,
    datapad: {
      available: true,
      description:
        "Connect and start analyzing in minutes with natural language",
    },
    competitor: {
      available: false,
      description:
        "Requires extensive training, data modeling, and technical expertise",
    },
  },
  {
    feature: "Real-time alerts",
    icon: TrendingUp,
    datapad: {
      available: true,
      description:
        "Proactive anomaly detection with automated business recommendations",
    },
    competitor: {
      available: true,
      description:
        "Basic alerting available but requires manual threshold setup",
    },
  },
];

export default function TableauComparisonPage() {
  return (
    <>
      {/* Hero Section */}
      <VsHero
        competitorName="Tableau"
        competitorLogo="/images/integrations/tableau.png"
        subtitle="Move beyond complex data visualization. While Tableau requires months of training to create charts, Datapad's AI creates actionable campaigns and strategies in seconds."
        ctaText="Start Your AI Analytics"
      />

      {/* Comparison Table */}
      <VsComparisonTable
        competitorName="Tableau"
        competitorTagline="Enterprise data visualization platform"
        competitorDescription="Complex visualization tool requiring extensive training and technical expertise"
        competitorLogo="/images/integrations/tableau.png"
        features={TABLEAU_FEATURES}
        title="Datapad delivers AI-powered business intelligence, Tableau offers complex data visualization."
      />

      {/* Trusted By Section */}
      <MainLogos />

      {/* Testimonials */}
      <DatapadCasestudies />

      {/* Tableau-specific FAQ */}
      <Faq2 heading="Tableau vs Datapad: Common Questions" items={FAQ_ITEMS} />

      {/* CTA Section */}
      <Cta18 />
    </>
  );
}
