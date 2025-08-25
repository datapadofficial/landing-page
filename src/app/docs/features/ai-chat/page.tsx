import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  MessageSquare, 
  Bot, 
  Clock,
  Code,
  Zap,
  BarChart3,
  TrendingUp,
  Users,  
  Lightbulb
} from "lucide-react";
import Link from "next/link";
import { DocSection } from "@/components/docs/doc-section";
import { FeatureGrid } from "@/components/docs/feature-grid";

export const metadata: Metadata = {
  title: "AI Chat - Natural Language Data Analysis",
  description: "Talk to your data like you're talking to a human analyst. Get instant insights with charts and visualizations using natural language queries.",
};

const features = [
  {
    icon: MessageSquare,
    title: "Natural Language Understanding",
    description: "Ask questions in plain English, just like talking to a human analyst. No SQL or technical knowledge required."
  },
  {
    icon: BarChart3,
    title: "Instant Visualizations",
    description: "Get professional charts, tables, and insights automatically generated from your questions in seconds."
  },
  {
    icon: Bot,
    title: "Context-Aware Conversations",
    description: "AI remembers your conversation history and can answer follow-up questions with full context understanding."
  }
];

const exampleQueries = [
  "Show me last month's revenue compared to the previous month",
  "What's the conversion rate by traffic source this quarter?",
  "Which products have the highest profit margin?",
  "How is our customer acquisition cost trending?",
  "Compare mobile vs desktop performance this week",
  "What caused the spike in sales on March 15th?"
];

const queryTypes = [
  {
    category: "Descriptive Analysis",
    description: "Understand what happened in your data",
    color: "text-blue-500",
    bgColor: "bg-blue-100 dark:bg-blue-900/20",
    examples: [
      "What's our total revenue this month?",
      "How many new customers did we acquire?",
      "Show me our key metrics summary"
    ]
  },
  {
    category: "Comparative Analysis", 
    description: "Compare different time periods or segments",
    color: "text-green-500",
    bgColor: "bg-green-100 dark:bg-green-900/20",
    examples: [
      "How does this month compare to last month?",
      "Compare conversion rates by traffic source",
      "Show mobile vs desktop performance"
    ]
  },
  {
    category: "Trend Analysis",
    description: "Identify patterns and trends over time",
    color: "text-purple-500",
    bgColor: "bg-purple-100 dark:bg-purple-900/20",
    examples: [
      "Show revenue trend for the last 6 months",
      "Is our customer churn rate improving?",
      "Identify seasonal patterns in our data"
    ]
  },
  {
    category: "Diagnostic Analysis",
    description: "Understand why something happened",
    color: "text-orange-500",
    bgColor: "bg-orange-100 dark:bg-orange-900/20",
    examples: [
      "What caused the revenue dip in March?",
      "Why did our conversion rate change?",
      "Which factors correlate with customer churn?"
    ]
  }
];

export default function AIChatPage() {
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
          <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center">
            <MessageSquare className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight">AI Chat</h1>
            <p className="text-xl text-muted-foreground">
              Talk to your data like you're talking to a human analyst
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Badge variant="secondary" className="gap-1">
            <Bot className="h-3 w-3" />
            AI-Powered
          </Badge>
          <Badge variant="secondary" className="gap-1">
            <Clock className="h-3 w-3" />
            Instant Results
          </Badge>
          <Badge variant="secondary" className="gap-1">
            <Zap className="h-3 w-3" />
            No Code Required
          </Badge>
        </div>
      </div>

      <DocSection title="What You'll Get">
        <FeatureGrid features={features} />
      </DocSection>

      {/* How It Works */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">How AI Chat Works</h2>
        <p className="text-muted-foreground">
          Experience the power of conversational data analysis in four simple steps.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
              <span className="text-primary font-bold">1</span>
            </div>
            <h3 className="font-semibold">Ask Your Question</h3>
            <p className="text-sm text-muted-foreground">
              Type your question in plain English, just like talking to a colleague
            </p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
              <span className="text-primary font-bold">2</span>
            </div>
            <h3 className="font-semibold">AI Understands</h3>
            <p className="text-sm text-muted-foreground">
              Our AI analyzes your question and understands the context and intent
            </p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
              <span className="text-primary font-bold">3</span>
            </div>
            <h3 className="font-semibold">Data Analysis</h3>
            <p className="text-sm text-muted-foreground">
              AI generates queries, analyzes your data, and performs calculations
            </p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
              <span className="text-primary font-bold">4</span>
            </div>
            <h3 className="font-semibold">Get Insights</h3>
            <p className="text-sm text-muted-foreground">
              Receive answers with charts, tables, and explanations
            </p>
          </div>
        </div>
      </div>

      <Separator />

      {/* Example Queries */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Example Questions</h2>
        <p className="text-muted-foreground">
          Here are some example questions you can ask once your data is connected:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {exampleQueries.map((query, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer group">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-medium mt-0.5">
                    {index + 1}
                  </div>
                  <p className="text-sm font-medium group-hover:text-primary transition-colors">
                    "{query}"
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-muted/50 p-4 rounded-lg">
          <h4 className="font-medium mb-2">💬 Natural Language Tips</h4>
          <ul className="text-sm text-muted-foreground space-y-1 ml-4">
            <li>• Be specific about time periods ("last 30 days", "this month vs last month")</li>
            <li>• Include context about what you want to analyze ("revenue", "conversion rate")</li>
            <li>• Ask for comparisons to get more insights ("compare X vs Y")</li>
            <li>• Request explanations ("explain what's driving the changes")</li>
          </ul>
        </div>
      </div>

      <Separator />

      {/* Types of Questions */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Types of Questions You Can Ask</h2>
        <p className="text-muted-foreground">
          From simple data lookups to complex statistical analysis, here are the types of questions AI chat can handle.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {queryTypes.map((type) => (
            <Card key={type.category} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-10 h-10 ${type.bgColor} rounded-lg flex items-center justify-center`}>
                    <TrendingUp className={`h-5 w-5 ${type.color}`} />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{type.category}</CardTitle>
                    <CardDescription className="text-sm">{type.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {type.examples.map((example, index) => (
                    <div key={index} className="p-3 bg-muted/50 rounded-lg">
                      <p className="text-sm font-medium">"{example}"</p>
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
        <Card className="bg-gradient-to-r from-primary/5 to-blue-500/5 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              AI-Powered Analysis Engine
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Datapad automatically converts your natural language questions into optimized SQL queries and Python code. 
              You can always view the generated code to learn and verify the results.
            </p>
          </CardContent>
        </Card>
      </div>

      <Separator />

      {/* Advanced Features */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Advanced AI Chat Features</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Code className="h-5 w-5 text-blue-500" />
                View Generated Code
              </CardTitle>
              <CardDescription>
                See the SQL and Python code AI generates for your questions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link href="/docs/features/text-to-sql-python">
                  Learn More
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <BarChart3 className="h-5 w-5 text-green-500" />
                Create Dashboards
              </CardTitle>
              <CardDescription>
                Turn your chat insights into permanent dashboards automatically
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link href="/docs/features/dashboards">
                  Learn More
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Users className="h-5 w-5 text-purple-500" />
                Team Collaboration
              </CardTitle>
              <CardDescription>
                Share chat conversations and insights with your team
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link href="/docs/guides/team-collaboration">
                  Learn More
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Separator />

      {/* Troubleshooting */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Tips for Better Results</h2>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Lightbulb className="h-5 w-5 text-yellow-500" />
              Best Practices
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-1">Be specific with time periods</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <p className="text-sm text-green-800 dark:text-green-200">✓ "Show me revenue for the last 30 days"</p>
                  </div>
                  <div className="p-3 bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded-lg">
                    <p className="text-sm text-orange-800 dark:text-orange-200">✗ "Show me recent revenue"</p>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-medium mb-1">Include the metrics you want</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <p className="text-sm text-green-800 dark:text-green-200">✓ "What's the conversion rate from our Google Ads campaigns?"</p>
                  </div>
                  <div className="p-3 bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded-lg">
                    <p className="text-sm text-orange-800 dark:text-orange-200">✗ "How are our ads doing?"</p>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-medium mb-1">Ask for comparisons</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <p className="text-sm text-green-800 dark:text-green-200">✓ "Compare mobile vs desktop conversion rates this month"</p>
                  </div>
                  <div className="p-3 bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded-lg">
                    <p className="text-sm text-orange-800 dark:text-orange-200">✗ "Show me conversion rates"</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Getting Started */}
      <Card className="bg-gradient-to-r from-primary/5 to-red-500/5 border-primary/20">
        <CardHeader>
          <CardTitle>Ready to start chatting with your data?</CardTitle>
          <CardDescription>
            Connect your data source and ask your first question in minutes.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="https://app.datapad.io/chat">
                Try AI Chat Now
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/docs/get-started/quickstart">
                Quickstart Guide
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/docs/guides/effective-queries">
                Query Writing Tips
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
      
    </div>
  );
}