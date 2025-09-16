import { notFound } from "next/navigation";
import { Metadata } from "next";
import { DatapadCasestudies } from "@/components/datapad-casestudies";
import { Faq } from "@/components/faq";
import { MainCTA } from "@/components/main-cta";
import { Button } from "@/components/ui/button";
import { AttributionLink } from "@/components/attribution-link";
import { ExcelAIHero } from "@/components/ui/excel-ai-hero";
import { AppPreview } from "@/components/creatives/app-preview";
import { MainLogos } from "@/components/main-logos";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { FeatureGrid } from "@/components/features/feature-grid";
import dynamic from "next/dynamic";

// Only lazy load components with heavy visualizations
const ExcelAIDataAgentSection = dynamic(
  () =>
    import("@/components/ui/excel-ai-data-agent").then((mod) => ({
      default: mod.ExcelAIDataAgentSection,
    })),
  {
    ssr: true, // Keep SSR for SEO
    loading: () => (
      <div className="h-96 animate-pulse bg-muted/50 rounded-lg" />
    ),
  }
);

interface UseCasePageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Supported use case slugs
const SUPPORTED_USE_CASES = {
  "excel-ai": {
    title: "AI Excel Analysis | Excel AI Agent | Excel Analyzer Tool | Datapad",
    description: "Transform Excel spreadsheets into business intelligence with AI. Ask questions in plain English, get instant Excel AI analysis, charts, and actionable insights. Excel AI analyzer tool.",
    keywords: [
      "ai excel analysis",
      "excel analysis",
      "excel ai agent",
      "excel ai analyzer",
      "excel analyzer",
      "excel analysis ai",
      "excel ai assistant",
      "excel ai tool",
      "excel ai chatbot",
      "excel ai chat",
      "excel ai analysis tool",
      "excel ai insights",
      "excel ai reporting",
      "excel ai dashboard",
      "excel ai automation",
      "excel ai data analysis",
      "excel ai analytics",
      "excel ai business intelligence",
      "excel ai natural language",
      "excel ai query",
      "excel ai questions",
      "excel ai answers",
      "excel ai visualization",
      "excel ai charts",
      "excel ai reports",
      "excel ai pivot tables",
      "excel ai data mining",
      "excel ai predictive analysis",
      "excel ai forecasting",
      "excel ai recommendations",
      "excel ai suggestions",
      "excel ai insights",
      "excel ai intelligence",
      "excel ai decision making",
      "excel ai data exploration",
      "excel ai data discovery"
    ],
    openGraph: {
      title: "AI Excel Analysis | Excel AI Agent | Excel Analyzer Tool | Datapad",
      description: "Transform Excel spreadsheets into business intelligence with AI. Ask questions in plain English, get instant Excel AI analysis, charts, and actionable insights. Excel AI analyzer tool.",
      type: "website"
    }
  }
};

export async function generateMetadata({
  params,
}: UseCasePageProps): Promise<Metadata> {
  const { slug } = await params;
  const useCase = SUPPORTED_USE_CASES[slug as keyof typeof SUPPORTED_USE_CASES];

  if (!useCase) {
    return {
      title: "Use Case Not Found - Datapad",
      description: "The requested use case could not be found.",
    };
  }

  const siteUrl = "https://datapad.io";
  const pageUrl = `${siteUrl}/use-cases/${slug}`;

  return {
    title: useCase.title,
    description: useCase.description,
    keywords: useCase.keywords.join(", "),
    openGraph: {
      title: useCase.openGraph.title,
      description: useCase.openGraph.description,
      url: pageUrl,
      siteName: "Datapad",
      type: useCase.openGraph.type as "website",
      images: [
        {
          url: `${siteUrl}/images/datapad-logo.svg`,
          width: 1200,
          height: 630,
          alt: `${useCase.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@datapad",
      title: useCase.openGraph.title,
      description: useCase.openGraph.description,
      images: [`${siteUrl}/images/datapad-logo.svg`],
    },
    alternates: {
      canonical: pageUrl,
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(SUPPORTED_USE_CASES).map((slug) => ({
    slug,
  }));
}

const FAQ_ITEMS = [
  {
    question: "What is an Excel AI analyzer?",
    answer: "An Excel AI analyzer is an intelligent tool that uses artificial intelligence to analyze your Excel spreadsheets. Our Excel AI agent can understand natural language questions, perform complex data analysis, and provide actionable insights from your Excel data automatically."
  },
  {
    question: "How does Excel AI analysis work?",
    answer: "Our Excel AI agent reads your Excel files, understands the data structure and relationships, and allows you to ask questions in plain English. The Excel AI analyzer then performs sophisticated analysis to deliver insights, charts, and recommendations instantly."
  },
  {
    question: "Can I use natural language with Excel AI?",
    answer: "Yes! Our Excel AI agent is designed for natural language interaction. Simply ask questions like 'What are my top-selling products?' or 'Show me sales trends by region' and get instant Excel AI analysis in plain English responses."
  },
  {
    question: "What Excel files does the Excel AI analyzer support?",
    answer: "Our Excel AI agent supports all major Excel file formats including .xlsx, .xls, CSV files, and Google Sheets. It can handle multiple worksheets, large datasets with millions of rows, complex formulas, pivot tables, and macros."
  },
  {
    question: "How fast is Excel AI analysis?",
    answer: "Get instant Excel AI analysis results in seconds! Unlike traditional Excel analysis that can take hours or days, our Excel AI agent processes your data and provides insights, charts, and recommendations immediately after you ask questions."
  },
  {
    question: "Can Excel AI create charts and visualizations?",
    answer: "Absolutely! Our Excel AI analyzer automatically generates charts, graphs, and visualizations based on your questions. It creates pivot tables, trend analysis, and custom reports that would normally require hours of manual Excel work."
  },
  {
    question: "Is the Excel AI agent secure?",
    answer: "Yes, security is our top priority. Your Excel files are encrypted during transit and storage. Our Excel AI agent processes your data securely and never shares it with third parties. You maintain full control over your data at all times."
  },
  {
    question: "Do I need Excel skills to use Excel AI analysis?",
    answer: "No Excel expertise required! Our Excel AI agent is designed for everyone. Simply upload your files and ask questions in plain English. The Excel AI analyzer handles all the complex data processing, statistical analysis, and visualization automatically."
  },
  {
    question: "Can Excel AI handle large datasets?",
    answer: "Yes! Our Excel AI analyzer can process large datasets with millions of rows efficiently. It automatically optimizes performance and can handle complex Excel files with multiple sheets, formulas, and data relationships."
  },
  {
    question: "What kind of insights can Excel AI provide?",
    answer: "Our Excel AI agent provides comprehensive business intelligence including trend analysis, predictive insights, correlation discovery, anomaly detection, forecasting, and actionable recommendations based on your Excel data patterns."
  }
];

export default async function UseCasePage({ params }: UseCasePageProps) {
  const { slug } = await params;

  if (!SUPPORTED_USE_CASES[slug as keyof typeof SUPPORTED_USE_CASES]) {
    notFound();
  }

  return (
    <main className="flex flex-col max-w-7xl items-center mx-auto">
      {/* Hero Section - Excel AI Optimized */}
      <ExcelAIHero />

      {/* App Preview Section */}
      <AppPreview />

      {/* Logos Section */}
      <MainLogos />

      {/* How It Works Section - Using existing component */}
      <HowItWorksSection
        title={
          <h3 className="text-3xl font-bold">
            Excel AI Analyzer in <span className="text-primary">3 Simple Steps</span>
          </h3>
        }
        description="Transform your Excel spreadsheets into business intelligence with our Excel AI agent"
        steps={[
          {
            title: "Upload Your Excel Files",
            description: "Drag and drop your Excel spreadsheets (.xlsx, .xls) or CSV files. Our Excel AI analyzer supports multiple sheets, large datasets, and complex formulas.",
            icon: "upload"
          },
          {
            title: "Ask Questions in Plain English",
            description: "Chat with your data using natural language. Ask complex questions about trends, correlations, and insights. Our Excel AI agent understands plain English queries.",
            icon: "message-square"
          },
          {
            title: "Get Instant Excel AI Analysis",
            description: "Receive AI-generated charts, pivot tables, and actionable insights. Export your Excel AI analysis results as PDFs, images, or enhanced Excel files.",
            icon: "bar-chart-3"
          }
        ]}
      />

      {/* Excel AI Data Agent Section */}
      <ExcelAIDataAgentSection />

      {/* Feature Grid - Using existing component */}
      <FeatureGrid />

      {/* Case Studies */}
      <DatapadCasestudies />

      {/* FAQ Section */}
      <Faq
        heading="Excel AI Analyzer: Frequently Asked Questions"
        items={FAQ_ITEMS}
      />

      {/* CTA Section */}
      <MainCTA />
    </main>
  );
}