import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  MessageSquare, 
  Bot, 
  CheckCircle, 
  ArrowRight, 
  ExternalLink, 
  Lightbulb, 
  Clock,
  BarChart3,
  Code,
  Mic,
  PlayCircle,
  Copy,
  TrendingUp,
  Users,
  Target,
  Zap
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Chat - Natural Language Data Analysis",
  description: "Learn how to use Datapad's AI chat feature to analyze your data using natural language queries and get instant insights.",
};

const chatCapabilities = [
  {
    title: "Natural Language Understanding",
    description: "Ask questions in plain English, just like talking to a human analyst",
    icon: MessageSquare,
    examples: [
      "Show me last month's revenue",
      "What's trending up in our metrics?",
      "Compare this quarter to last quarter"
    ]
  },
  {
    title: "Intelligent Follow-ups",
    description: "AI remembers context and can answer follow-up questions naturally",
    icon: Bot,
    examples: [
      "Break that down by channel",
      "What caused the spike in May?",
      "Show me the same data for mobile users"
    ]
  },
  {
    title: "Statistical Analysis",
    description: "Get sophisticated statistical insights without technical knowledge",
    icon: BarChart3,
    examples: [
      "Calculate the correlation between ad spend and revenue",
      "Show me the trend analysis with confidence intervals",
      "What's the statistical significance of this change?"
    ]
  },
  {
    title: "Code Generation",
    description: "AI automatically generates SQL and Python code to answer your questions",
    icon: Code,
    examples: [
      "CREATE SELECT statements for complex queries",
      "Python scripts for advanced calculations",
      "Data transformation pipelines"
    ]
  }
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
      "What are our top performing products?",
      "Show me our key metrics summary"
    ]
  },
  {
    category: "Comparative Analysis", 
    description: "Compare different time periods, segments, or categories",
    color: "text-green-500",
    bgColor: "bg-green-100 dark:bg-green-900/20",
    examples: [
      "How does this month compare to last month?",
      "Compare conversion rates by traffic source",
      "Show mobile vs desktop performance",
      "Compare customer segments by value"
    ]
  },
  {
    category: "Trend Analysis",
    description: "Identify patterns and trends over time",
    color: "text-purple-500",
    bgColor: "bg-purple-100 dark:bg-purple-900/20",
    examples: [
      "Show me the revenue trend for the last 6 months",
      "Is our customer churn rate improving?",
      "What's the growth trajectory of our key metrics?",
      "Identify any seasonal patterns in our data"
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
      "Which factors correlate with customer churn?",
      "What's driving the increase in our metrics?"
    ]
  }
];

const bestPractices = [
  {
    title: "Be Specific with Time Periods",
    description: "Include specific dates or time ranges for clearer results",
    good: "Show me revenue for the last 30 days",
    bad: "Show me recent revenue"
  },
  {
    title: "Specify the Metrics You Want",
    description: "Name the exact metrics you're interested in",
    good: "What's the conversion rate from our Google Ads campaigns?",
    bad: "How are our ads doing?"
  },
  {
    title: "Ask for Comparisons",
    description: "Compare different periods, segments, or categories for better insights",
    good: "Compare mobile vs desktop conversion rates this month",
    bad: "Show me conversion rates"
  },
  {
    title: "Request Context and Insights",
    description: "Ask the AI to explain what the data means",
    good: "Show me revenue trends and explain what's driving the changes",
    bad: "Show me revenue"
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
              Analyze your data using natural language - just ask questions and get instant insights
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

      {/* Quick Start */}
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PlayCircle className="h-5 w-5 text-primary" />
            Quick Start
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1">
              <p className="text-sm text-muted-foreground mb-3">
                Connect your data source and start asking questions immediately. No SQL knowledge required.
              </p>
              <ul className="space-y-1 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Natural language understanding</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Context-aware follow-ups</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Professional visualizations</span>
                </li>
              </ul>
            </div>
            <Button asChild size="lg" className="gap-2">
              <Link href="https://app.datapad.io/chat">
                <ExternalLink className="h-4 w-4" />
                Try AI Chat
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* How It Works */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">How AI Chat Works</h2>
        
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

      {/* Chat Capabilities */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">What You Can Do</h2>
        <p className="text-muted-foreground">
          Datapad's AI chat understands natural language and can perform sophisticated data analysis tasks.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {chatCapabilities.map((capability) => (
            <Card key={capability.title} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <capability.icon className="h-5 w-5 text-primary" />
                  </div>
                  {capability.title}
                </CardTitle>
                <CardDescription>{capability.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Examples:</h4>
                  <ul className="space-y-1">
                    {capability.examples.map((example, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 shrink-0" />
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator />

      {/* Query Types */}
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
                <div className="space-y-3">
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

      {/* Best Practices */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Best Practices for Effective Queries</h2>
        <p className="text-muted-foreground">
          Follow these tips to get the most accurate and useful insights from AI chat.
        </p>
        
        <div className="space-y-4">
          {bestPractices.map((practice, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Lightbulb className="h-5 w-5 text-yellow-500" />
                  {practice.title}
                </CardTitle>
                <CardDescription>{practice.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Good Example
                    </h4>
                    <div className="p-3 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
                      <p className="text-sm text-green-800 dark:text-green-200">"{practice.good}"</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm flex items-center gap-2">
                      <Target className="h-4 w-4 text-orange-500" />
                      Could Be Better
                    </h4>
                    <div className="p-3 bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded-lg">
                      <p className="text-sm text-orange-800 dark:text-orange-200">"{practice.bad}"</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator />

      {/* Advanced Features */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Advanced AI Chat Features</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Mic className="h-5 w-5 text-purple-500" />
                Voice Mode
              </CardTitle>
              <CardDescription>
                Speak your questions and hear responses with voice interaction
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link href="/docs/features/voice-mode">
                  Learn More
                </Link>
              </Button>
            </CardContent>
          </Card>

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
                <Users className="h-5 w-5 text-green-500" />
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
