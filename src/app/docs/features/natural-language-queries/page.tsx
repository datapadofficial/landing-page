import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  MessageSquare, 
  Zap,
  Brain,  
  BarChart3,
  TrendingUp,
  Search,
  Code,
  Info
} from "lucide-react";
import Link from "next/link";
import { DocSection } from "@/components/docs/doc-section";
import { FeatureGrid } from "@/components/docs/feature-grid";

export const metadata: Metadata = {
  title: "Natural Language Queries - Ask Questions in Plain English",
  description: "Query your data using natural language instead of SQL. Ask business questions and get instant answers with charts and insights.",
};

const features = [
  {
    icon: MessageSquare,
    title: "Plain English Queries",
    description: "Ask questions about your data using everyday business language - no technical syntax or SQL knowledge required."
  },
  {
    icon: Brain,
    title: "Context Understanding",
    description: "AI understands business context, relationships, and intent to provide accurate and relevant results."
  },
  {
    icon: BarChart3,
    title: "Instant Visualizations",
    description: "Get charts, tables, and insights automatically generated based on your questions and data patterns."
  }
];

const queryExamples = [
  {
    category: "Business Performance",
    queries: [
      "What was our revenue last month compared to the same month last year?",
      "Show me the top 10 customers by total purchase value",
      "Which products have the highest profit margins?",
      "How is our customer acquisition cost trending over time?"
    ]
  },
  {
    category: "Marketing Analytics",
    queries: [
      "What's the conversion rate for each traffic source this quarter?",
      "Compare the performance of Facebook ads vs Google ads",
      "Which marketing campaigns generated the most leads?",
      "Show me the customer journey from first touch to purchase"
    ]
  },
  {
    category: "Operational Insights",
    queries: [
      "What's causing the spike in customer support tickets?",
      "Which team members are performing above average?",
      "How does seasonality affect our sales patterns?",
      "What's the correlation between price and customer satisfaction?"
    ]
  }
];

const queryTypes = [
  {
    type: "Descriptive Queries",
    description: "Understand what happened in your data",
    icon: BarChart3,
    color: "text-blue-500",
    bgColor: "bg-blue-100 dark:bg-blue-900/20",
    examples: [
      "What's our total revenue this quarter?",
      "How many new customers did we acquire last month?",
      "Show me our top selling products"
    ]
  },
  {
    type: "Comparative Queries",
    description: "Compare different segments, periods, or categories",
    icon: TrendingUp,
    color: "text-green-500",
    bgColor: "bg-green-100 dark:bg-green-900/20",
    examples: [
      "How does this month compare to last month?",
      "Compare conversion rates by traffic source",
      "Show desktop vs mobile performance"
    ]
  },
  {
    type: "Analytical Queries",
    description: "Discover patterns, trends, and correlations",
    icon: Brain,
    color: "text-purple-500",
    bgColor: "bg-purple-100 dark:bg-purple-900/20",
    examples: [
      "What factors correlate with customer churn?",
      "Show me the trend in customer satisfaction",
      "Identify anomalies in our sales data"
    ]
  },
  {
    type: "Predictive Queries",
    description: "Forecast future trends and outcomes",
    icon: TrendingUp,
    color: "text-orange-500",
    bgColor: "bg-orange-100 dark:bg-orange-900/20",
    examples: [
      "Forecast next quarter's revenue based on current trends",
      "What's the predicted lifetime value of new customers?",
      "When will we likely reach our sales target?"
    ]
  }
];

const languageFeatures = [
  {
    feature: "Business Terminology",
    description: "Uses industry-specific terms and business metrics",
    examples: [
      "LTV (Lifetime Value)",
      "CAC (Customer Acquisition Cost)", 
      "ROAS (Return on Ad Spend)",
      "Churn rate and retention"
    ]
  },
  {
    feature: "Time Intelligence",
    description: "Understands dates, periods, and time comparisons",
    examples: [
      "Last month vs this month",
      "Year-over-year growth",
      "Quarter-to-date performance",
      "Seasonal patterns"
    ]
  },
  {
    feature: "Contextual Relationships",
    description: "Understands data relationships and dependencies",
    examples: [
      "Customer lifetime journey",
      "Attribution and conversion paths",
      "Product category hierarchies",
      "Geographic segments"
    ]
  }
];

export default function NaturalLanguageQueriesPage() {
  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/docs" className="hover:text-foreground">Docs</Link>
          <span>/</span>
          <Link href="/docs/features" className="hover:text-foreground">Features</Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
            <MessageSquare className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Natural Language Queries</h1>
            <p className="text-xl text-muted-foreground">
              Ask questions in plain English and get instant data insights
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Badge variant="secondary" className="gap-1">
            <MessageSquare className="h-3 w-3" />
            Plain English
          </Badge>
          <Badge variant="secondary" className="gap-1">
            <Brain className="h-3 w-3" />
            Context Aware
          </Badge>
          <Badge variant="secondary" className="gap-1">
            <Zap className="h-3 w-3" />
            Instant Results
          </Badge>
        </div>
      </div>

      <DocSection title="What You'll Get">
        <FeatureGrid features={features} />
      </DocSection>

      {/* How It Works */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">How Natural Language Queries Work</h2>
        <p className="text-muted-foreground">
          Transform business questions into data insights without learning SQL or technical syntax.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
              <span className="text-primary font-bold">1</span>
            </div>
            <h3 className="font-semibold">Ask Your Question</h3>
            <p className="text-sm text-muted-foreground">
              Type your business question using natural, everyday language
            </p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
              <span className="text-primary font-bold">2</span>
            </div>
            <h3 className="font-semibold">AI Interprets Intent</h3>
            <p className="text-sm text-muted-foreground">
              Advanced AI understands context, relationships, and business logic
            </p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
              <span className="text-primary font-bold">3</span>
            </div>
            <h3 className="font-semibold">Generates Analysis</h3>
            <p className="text-sm text-muted-foreground">
              Automatically creates queries and analyzes your data
            </p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
              <span className="text-primary font-bold">4</span>
          </div>
            <h3 className="font-semibold">Delivers Insights</h3>
            <p className="text-sm text-muted-foreground">
              Returns answers with charts, explanations, and recommendations
            </p>
          </div>
        </div>
          </div>

      <Separator />

      {/* Query Examples */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Example Natural Language Queries</h2>
            <p className="text-muted-foreground">
          See how business questions translate into powerful data insights:
        </p>
        
        <div className="space-y-6">
          {queryExamples.map((category, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.queries.map((query, queryIndex) => (
                    <div key={queryIndex} className="p-3 bg-muted/50 rounded-lg">
                      <p className="text-sm font-medium">"{query}"</p>
              </div>
                  ))}
              </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-muted/50 p-4 rounded-lg">
          <h4 className="font-medium mb-2">💬 Natural Language Tips</h4>
          <ul className="text-sm text-muted-foreground space-y-1 ml-4">
            <li>• Use business terms and metrics your team understands</li>
            <li>• Be specific about time periods and comparisons</li>
            <li>• Ask follow-up questions to drill deeper into insights</li>
            <li>• Don't worry about perfect grammar - AI understands intent</li>
            </ul>
          </div>
        </div>

      <Separator />

      {/* Query Types */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Types of Natural Language Queries</h2>
        <p className="text-muted-foreground">
          From basic questions to complex analysis, natural language queries handle every level of data investigation.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {queryTypes.map((type) => (
            <Card key={type.type} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-10 h-10 ${type.bgColor} rounded-lg flex items-center justify-center`}>
                    <type.icon className={`h-5 w-5 ${type.color}`} />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{type.type}</CardTitle>
                    <CardDescription className="text-sm">{type.description}</CardDescription>
            </div>
          </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {type.examples.map((example, index) => (
                    <div key={index} className="p-2 bg-muted/30 rounded text-sm">
                      "{example}"
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
            </div>
          </div>

      <Separator />

      {/* Language Features */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Advanced Language Understanding</h2>
        <p className="text-muted-foreground">
          Sophisticated AI capabilities that make natural language queries powerful and accurate.
        </p>
        
        <div className="space-y-6">
          {languageFeatures.map((feature, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{feature.feature}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                  {feature.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="p-3 bg-muted/30 rounded-lg text-center">
                      <span className="text-sm font-medium">{example}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
            </div>
          </div>

      <Separator />

      {/* Behind the Scenes */}
          <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Behind the Scenes</h2>
        <Card className="bg-gradient-to-r from-primary/5 to-indigo-500/5 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5" />
              Natural Language Processing Engine
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Datapad's NLP engine combines deep learning models with business context understanding to translate natural language 
              into precise data queries. The system learns from your data schema and business terminology to provide increasingly accurate results.
            </p>
          </CardContent>
        </Card>
      </div>

      <Separator />

      {/* Advanced Features */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Advanced Query Features</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Search className="h-5 w-5 text-blue-500" />
                Smart Suggestions
              </CardTitle>
              <CardDescription>
                Get query suggestions based on your data and previous questions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-xs text-muted-foreground">• Context-aware suggestions</div>
                <div className="text-xs text-muted-foreground">• Popular query templates</div>
                <div className="text-xs text-muted-foreground">• Auto-complete assistance</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Code className="h-5 w-5 text-green-500" />
                Query Translation
              </CardTitle>
              <CardDescription>
                See the SQL queries generated from your natural language
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-xs text-muted-foreground">• Generated SQL visibility</div>
                <div className="text-xs text-muted-foreground">• Query optimization tips</div>
                <div className="text-xs text-muted-foreground">• Learning opportunity</div>
            </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <MessageSquare className="h-5 w-5 text-purple-500" />
                Conversational Flow
              </CardTitle>
              <CardDescription>
                Ask follow-up questions and refine your analysis naturally
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-xs text-muted-foreground">• Context retention</div>
                <div className="text-xs text-muted-foreground">• Follow-up questions</div>
                <div className="text-xs text-muted-foreground">• Drill-down analysis</div>
          </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Separator />

      {/* Best Practices */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Natural Language Query Best Practices</h2>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Info className="h-5 w-5 text-blue-500" />
              Writing Effective Queries
            </CardTitle>
          </CardHeader>
          <CardContent>
          <div className="space-y-4">
                  <div>
                <h4 className="font-medium mb-2">Be specific about what you want</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <p className="text-sm text-green-800 dark:text-green-200">✓ "Show me monthly revenue for the last 6 months"</p>
                  </div>
                  <div className="p-3 bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded-lg">
                    <p className="text-sm text-orange-800 dark:text-orange-200">✗ "Show me some revenue data"</p>
                  </div>
            </div>
          </div>
              
              <Separator />
              
                  <div>
                <h4 className="font-medium mb-2">Include time periods and comparisons</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <p className="text-sm text-green-800 dark:text-green-200">✓ "Compare this quarter's performance to last quarter"</p>
                  </div>
                  <div className="p-3 bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded-lg">
                    <p className="text-sm text-orange-800 dark:text-orange-200">✗ "How are we performing?"</p>
          </div>
        </div>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-medium mb-2">Use business terminology</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <p className="text-sm text-green-800 dark:text-green-200">✓ "What's our customer acquisition cost from Google Ads?"</p>
              </div>
                  <div className="p-3 bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded-lg">
                    <p className="text-sm text-orange-800 dark:text-orange-200">✗ "Calculate some metrics from the ads table"</p>
            </div>
          </div>
              </div>
            </div>
          </CardContent>
        </Card>
        </div>

      {/* Getting Started */}
      <Card className="bg-gradient-to-r from-primary/5 to-indigo-500/5 border-primary/20">
        <CardHeader>
          <CardTitle>Ready to ask questions in plain English?</CardTitle>
          <CardDescription>
            Connect your data sources and start getting insights with natural language queries.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="https://app.datapad.io/chat">
                Try Natural Language Queries
              </Link>
          </Button>
            <Button asChild variant="outline">
              <Link href="/docs/get-started/quickstart">
                Quickstart Guide
        </Link>
          </Button>
            <Button asChild variant="outline">
              <Link href="/docs/guides/effective-queries">
                Query Writing Guide
        </Link>
            </Button>
      </div>
        </CardContent>
      </Card>
      
    </div>
  );
}