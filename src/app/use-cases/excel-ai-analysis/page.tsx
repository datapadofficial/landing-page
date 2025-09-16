import { Metadata } from "next";
import { DatapadCasestudies } from "@/components/datapad-casestudies";
import { Faq } from "@/components/faq";
import { MainCTA } from "@/components/main-cta";
import { AppPreview } from "@/components/creatives/app-preview";
import { MainLogos } from "@/components/main-logos";
import { FeatureGrid } from "@/components/features/feature-grid";
import { ExcelHero } from "./excel-hero";
import UseCaseGrid from "@/components/use-case-grid";

export const metadata: Metadata = {
  title: "AI Excel Analysis | Excel AI Agent | Excel Analyzer Tool | Datapad",
  description:
    "Transform Excel spreadsheets into business intelligence with AI. Ask questions in plain English, get instant Excel AI analysis, charts, and actionable insights. Excel AI analyzer tool.",
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
    "excel ai data discovery",
  ].join(", "),
  openGraph: {
    title: "AI Excel Analysis | Excel AI Agent | Excel Analyzer Tool | Datapad",
    description:
      "Transform Excel spreadsheets into business intelligence with AI. Ask questions in plain English, get instant Excel AI analysis, charts, and actionable insights. Excel AI analyzer tool.",
    url: "https://datapad.io/use-cases/excel-ai-analysis",
    siteName: "Datapad",
    type: "website",
    images: [
      {
        url: "https://datapad.io/images/datapad-logo.svg",
        width: 1200,
        height: 630,
        alt: "AI Excel Analysis | Excel AI Agent | Excel Analyzer Tool | Datapad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@datapad",
    title: "AI Excel Analysis | Excel AI Agent | Excel Analyzer Tool | Datapad",
    description:
      "Transform Excel spreadsheets into business intelligence with AI. Ask questions in plain English, get instant Excel AI analysis, charts, and actionable insights. Excel AI analyzer tool.",
    images: ["https://datapad.io/images/datapad-logo.svg"],
  },
  alternates: {
    canonical: "https://datapad.io/use-cases/excel-ai-analysis",
  },
};

const FAQ_ITEMS = [
  {
    question: "What is an Excel AI analyzer?",
    answer:
      "An Excel AI analyzer is an intelligent tool that uses artificial intelligence to analyze your Excel spreadsheets. Our Excel AI agent can understand natural language questions, perform complex data analysis, and provide actionable insights from your Excel data automatically.",
  },
  {
    question: "How does Excel AI analysis work?",
    answer:
      "Our Excel AI agent reads your Excel files, understands the data structure and relationships, and allows you to ask questions in plain English. The Excel AI analyzer then performs sophisticated analysis to deliver insights, charts, and recommendations instantly.",
  },
  {
    question: "Can I use natural language with Excel AI?",
    answer:
      "Yes! Our Excel AI agent is designed for natural language interaction. Simply ask questions like 'What are my top-selling products?' or 'Show me sales trends by region' and get instant Excel AI analysis in plain English responses.",
  },
  {
    question: "What Excel files does the Excel AI analyzer support?",
    answer:
      "Our Excel AI agent supports all major Excel file formats including .xlsx, .xls, CSV files, and Google Sheets. It can handle multiple worksheets, large datasets with millions of rows, complex formulas, pivot tables, and macros.",
  },
  {
    question: "How fast is Excel AI analysis?",
    answer:
      "Get instant Excel AI analysis results in seconds! Unlike traditional Excel analysis that can take hours or days, our Excel AI agent processes your data and provides insights, charts, and recommendations immediately after you ask questions.",
  },
  {
    question: "Can Excel AI create charts and visualizations?",
    answer:
      "Absolutely! Our Excel AI analyzer automatically generates charts, graphs, and visualizations based on your questions. It creates pivot tables, trend analysis, and custom reports that would normally require hours of manual Excel work.",
  },
  {
    question: "Is the Excel AI agent secure?",
    answer:
      "Yes, security is our top priority. Your Excel files are encrypted during transit and storage. Our Excel AI agent processes your data securely and never shares it with third parties. You maintain full control over your data at all times.",
  },
  {
    question: "Do I need Excel skills to use Excel AI analysis?",
    answer:
      "No Excel expertise required! Our Excel AI agent is designed for everyone. Simply upload your files and ask questions in plain English. The Excel AI analyzer handles all the complex data processing, statistical analysis, and visualization automatically.",
  },
  {
    question: "Can Excel AI handle large datasets?",
    answer:
      "Yes! Our Excel AI analyzer can process large datasets with millions of rows efficiently. It automatically optimizes performance and can handle complex Excel files with multiple sheets, formulas, and data relationships.",
  },
  {
    question: "What kind of insights can Excel AI provide?",
    answer:
      "Our Excel AI agent provides comprehensive business intelligence including trend analysis, predictive insights, correlation discovery, anomaly detection, forecasting, and actionable recommendations based on your Excel data patterns.",
  },
];

export default function ExcelAIAnalysisPage() {
  return (
    <main className="flex flex-col max-w-7xl items-center mx-auto">
      {/* Hero Section */}
      <ExcelHero />

      {/* App Preview Section */}
      <AppPreview
        videoURL="/videos/features/excel-ai-analysis.mp4"
        seekPoints={[
          {
            start: 0,
            end: 3,
            title: "1. Upload Your File",
          },
          {
            start: 3,
            end: 15,
            title: "2. Ask a Question",
          },
          {
            start: 15,
            end: 20,
            title: "3. Get Insights",
          },
        ]}
      />

      {/* Logos Section */}
      <MainLogos />

      {/* Use Case Cards */}
      <div className="mt-8 px-2 py-8 sm:py-10">
        <UseCaseGrid />
      </div>

      {/* Feature Grid - Using existing component */}
      <FeatureGrid itemCount={6} />

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
