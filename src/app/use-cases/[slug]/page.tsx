import { notFound } from "next/navigation";
import { Metadata } from "next";
import { DatapadCasestudies } from "@/components/datapad-casestudies";
import { Faq } from "@/components/faq";
import { MainCTA } from "@/components/main-cta";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AttributionLink } from "@/components/attribution-link";
import { Upload, MessageSquare, BarChart3, FileSpreadsheet, Zap, Brain, ArrowRight, CheckCircle } from "lucide-react";

interface UseCasePageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Supported use case slugs
const SUPPORTED_USE_CASES = {
  "excel-ai": {
    title: "Excel AI Analysis - Turn Spreadsheets into Business Intelligence | Datapad",
    description: "Transform your Excel files into powerful business insights with AI. Upload spreadsheets, ask questions in natural language, and get instant analysis, charts, and recommendations.",
    keywords: [
      "excel analysis",
      "excel ai analysis",
      "ai excel analysis",
      "excel pivot table",
      "excel data analysis",
      "spreadsheet analysis",
      "excel ai assistant",
      "excel automation",
      "excel insights",
      "excel reporting",
      "excel dashboard",
      "excel business intelligence",
      "excel ai tools",
      "excel data visualization",
      "excel analytics",
      "spreadsheet ai",
      "excel ai chat",
      "excel data mining",
      "excel predictive analysis",
      "excel ai reports"
    ],
    openGraph: {
      title: "Excel AI Analysis - Turn Spreadsheets into Business Intelligence | Datapad",
      description: "Transform your Excel files into powerful business insights with AI. Upload spreadsheets, ask questions in natural language, and get instant analysis, charts, and recommendations.",
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

const STEPS = [
  {
    icon: Upload,
    title: "Upload Your Excel Files",
    description: "Drag and drop your Excel spreadsheets (.xlsx, .xls) or CSV files. Support for multiple sheets, large datasets, and complex formulas.",
    details: "Instant upload with automatic data type detection and column recognition."
  },
  {
    icon: MessageSquare,
    title: "Ask Questions in Natural Language",
    description: "Chat with your data like you would with a human analyst. Ask complex questions about trends, correlations, and insights.",
    details: "Examples: 'What are my top-selling products?', 'Show me sales growth by region', 'Identify unusual patterns in my data'"
  },
  {
    icon: BarChart3,
    title: "Get Instant Analysis & Export",
    description: "Receive AI-generated charts, pivot tables, and insights. Export results as PDFs, images, or new Excel files.",
    details: "Automated chart generation, trend analysis, predictive insights, and actionable recommendations."
  }
];

const FEATURES = [
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Advanced machine learning algorithms analyze patterns, trends, and correlations in your Excel data."
  },
  {
    icon: Zap,
    title: "Instant Insights",
    description: "Get answers to complex questions in seconds, not hours or days of manual analysis."
  },
  {
    icon: FileSpreadsheet,
    title: "Excel Native",
    description: "Works seamlessly with your existing Excel files, formulas, and data structures."
  },
  {
    icon: CheckCircle,
    title: "No Technical Skills Required",
    description: "Simply upload and ask questions - our AI handles all the complex data processing."
  }
];

const FAQ_ITEMS = [
  {
    question: "What types of Excel files can I upload?",
    answer: "You can upload Excel files (.xlsx, .xls), CSV files, and Google Sheets. We support multiple worksheets, large datasets (up to millions of rows), and complex formulas. The AI automatically detects data types and column structures."
  },
  {
    question: "How does the Excel AI analysis work?",
    answer: "Our AI data analyst reads your Excel data, understands the context and relationships between columns, and can answer questions about trends, patterns, correlations, and insights. It can create charts, perform statistical analysis, and generate reports automatically."
  },
  {
    question: "Can I ask questions about multiple Excel files at once?",
    answer: "Yes! You can upload multiple Excel files and ask questions that span across all your data. The AI can correlate information between different spreadsheets and provide unified insights across your entire dataset."
  },
  {
    question: "What kind of questions can I ask my Excel data?",
    answer: "You can ask any business question: sales trends, customer analysis, financial forecasting, inventory optimization, marketing performance, and more. Use natural language like 'Show me my best-selling products last quarter' or 'What are my biggest cost drivers?'"
  },
  {
    question: "Can I export the analysis results?",
    answer: "Absolutely! Export your AI-generated insights as PDF reports, Excel files with new analysis sheets, chart images, or CSV data. You can also schedule automated reports to be generated and delivered regularly."
  },
  {
    question: "Is my Excel data secure?",
    answer: "Yes, data security is our top priority. Your Excel files are encrypted in transit and at rest. We follow industry-standard security practices and never share your data with third parties. You maintain full control over your data at all times."
  },
  {
    question: "Do I need Excel expertise to use this?",
    answer: "No technical skills required! Simply upload your Excel file and start asking questions in plain English. Our AI handles all the complex data processing, statistical analysis, and visualization automatically."
  },
  {
    question: "What if my Excel file has complex formulas or macros?",
    answer: "Our AI can work with complex Excel files including formulas, pivot tables, and macros. It understands the relationships in your data and can analyze the results of your calculations to provide deeper insights."
  }
];

export default async function UseCasePage({ params }: UseCasePageProps) {
  const { slug } = await params;

  if (!SUPPORTED_USE_CASES[slug as keyof typeof SUPPORTED_USE_CASES]) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      
      <section className="pt-16 sm:pt-24 pb-16">
        <div className="container">
          <div className="mx-auto text-center max-w-4xl">
            <Badge variant="outline" className="bg-background mb-6">
              <Brain className="w-4 h-4 mr-2" />
              Excel AI Analysis
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Turn Excel Spreadsheets into
              <span className="text-primary block">Business Intelligence</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Upload your Excel files, ask questions in natural language, and get instant AI-powered analysis,
              charts, and actionable insights. No more manual pivot tables or complex formulas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild size="lg">
                <AttributionLink
                  href={process.env.NEXT_PUBLIC_APP_URL || "https://app.datapad.io"}
                  buttonLocation="excel-ai-hero-primary"
                >
                  Analyze Your Excel Data
                  <ArrowRight className="ml-2 h-4 w-4" />
                </AttributionLink>
              </Button>
              <Button asChild variant="outline" size="lg">
                <AttributionLink
                  href={process.env.NEXT_PUBLIC_APP_URL || "https://app.datapad.io"}
                  buttonLocation="excel-ai-hero-demo"
                >
                  Book a Demo
                </AttributionLink>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">3 Steps</div>
                <div className="text-sm text-muted-foreground">To Excel Analysis</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">Instant</div>
                <div className="text-sm text-muted-foreground">AI Insights</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">No Code</div>
                <div className="text-sm text-muted-foreground">Required</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How Excel AI Analysis Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Transform your Excel spreadsheets into powerful business intelligence in just 3 simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {STEPS.map((step, index) => (
              <Card key={index} className="text-center relative">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <CardTitle className="text-xl mb-2">{step.title}</CardTitle>
                  <CardDescription className="text-base">
                    {step.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{step.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Excel AI Analysis?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Advanced AI capabilities that go beyond traditional Excel analysis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {FEATURES.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg mb-2">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Can You Analyze?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ask questions about any aspect of your business data
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Sales & Revenue Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• "What are my top-selling products?"</li>
                  <li>• "Show me sales trends by region"</li>
                  <li>• "Which customers have the highest lifetime value?"</li>
                  <li>• "Predict next month's revenue"</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Financial Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• "What are my biggest cost drivers?"</li>
                  <li>• "Analyze profit margins by category"</li>
                  <li>• "Identify unusual expense patterns"</li>
                  <li>• "Forecast cash flow for next quarter"</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Marketing Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• "Which marketing channels perform best?"</li>
                  <li>• "Calculate customer acquisition cost"</li>
                  <li>• "Analyze campaign ROI by source"</li>
                  <li>• "Identify optimal budget allocation"</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Operational Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• "What are my inventory turnover rates?"</li>
                  <li>• "Identify supply chain bottlenecks"</li>
                  <li>• "Analyze employee productivity metrics"</li>
                  <li>• "Optimize resource allocation"</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <DatapadCasestudies />

      {/* FAQ Section */}
      <Faq
        heading="Excel AI Analysis: Frequently Asked Questions"
        items={FAQ_ITEMS}
      />

      {/* CTA Section */}
      <MainCTA />
    </>
  );
}