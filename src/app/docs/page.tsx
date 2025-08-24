import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BookOpen, 
  Zap, 
  Database, 
  BarChart3, 
  MessageSquare, 
  Workflow,
  ArrowRight,
  Rocket,
  PlayCircle
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Get Started with Datapad",
  description: "Learn how to use Datapad's AI data analyst to transform your business data into actionable insights.",
};

export default function DocsHomePage() {
  return (
    <div className="flex flex-col gap-8">
      {/* Hero Section */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <BookOpen className="h-4 w-4" />
          Documentation
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Welcome to Datapad Docs
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Transform your business data into actionable insights with Datapad's 100% autonomous AI data analyst. 
          Get instant answers, create beautiful dashboards, and generate reports using natural language.
        </p>
        <div className="flex gap-3 mt-4">
          <Button asChild size="lg" className="gap-2">
            <Link href="/docs/get-started/quickstart">
              <PlayCircle className="h-4 w-4" />
              Quickstart Guide
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2">
            <Link href="/docs/integrations">
              <Database className="h-4 w-4" />
              View Integrations
            </Link>
          </Button>
        </div>
      </div>

      {/* Getting Started Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="border-2 border-primary/20 bg-primary/5">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Rocket className="h-5 w-5 text-primary" />
              <CardTitle>Quick Start</CardTitle>
            </div>
            <CardDescription>
              Get up and running with Datapad in just 5 minutes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground mb-4">
              <li>• Connect your first data source</li>
              <li>• Ask your first question</li>
              <li>• Create your first dashboard</li>
            </ul>
            <Button asChild variant="ghost" size="sm" className="w-full gap-2">
              <Link href="/docs/get-started/quickstart">
                Start Now <ArrowRight className="h-3 w-3" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Database className="h-5 w-5 text-blue-500" />
              <CardTitle>Integrations</CardTitle>
            </div>
            <CardDescription>
              Connect 50+ data sources including databases, CRMs, and marketing tools
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground mb-4">
              <li>• Google Ads & Analytics</li>
              <li>• PostgreSQL & MongoDB</li>
              <li>• Shopify, Stripe, HubSpot</li>
            </ul>
            <Button asChild variant="ghost" size="sm" className="w-full gap-2">
              <Link href="/docs/integrations">
                Browse All <ArrowRight className="h-3 w-3" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-green-500" />
              <CardTitle>AI Chat</CardTitle>
            </div>
            <CardDescription>
              Learn how to ask questions and get insights using natural language
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground mb-4">
              <li>• Natural language queries</li>
              <li>• Advanced analysis techniques</li>
              <li>• Best practices & tips</li>
            </ul>
            <Button asChild variant="ghost" size="sm" className="w-full gap-2">
              <Link href="/docs/features/ai-chat">
                Learn More <ArrowRight className="h-3 w-3" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-purple-500" />
              <CardTitle>Dashboards</CardTitle>
            </div>
            <CardDescription>
              Create beautiful, interactive dashboards automatically
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground mb-4">
              <li>• Auto-generated dashboards</li>
              <li>• Custom visualizations</li>
              <li>• Sharing & collaboration</li>
            </ul>
            <Button asChild variant="ghost" size="sm" className="w-full gap-2">
              <Link href="/docs/features/dashboards">
                Get Started <ArrowRight className="h-3 w-3" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Workflow className="h-5 w-5 text-orange-500" />
              <CardTitle>Workflows</CardTitle>
            </div>
            <CardDescription>
              Automate analysis with 50+ ready-to-use AI workflows
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground mb-4">
              <li>• Marketing campaign workflows</li>
              <li>• Sales analysis templates</li>
              <li>• Custom automation</li>
            </ul>
            <Button asChild variant="ghost" size="sm" className="w-full gap-2">
              <Link href="/docs/features/workflows">
                Explore <ArrowRight className="h-3 w-3" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-yellow-500" />
              <CardTitle>Advanced Features</CardTitle>
            </div>
            <CardDescription>
              SQL generation, Python code, voice mode, and more
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground mb-4">
              <li>• Text-to-SQL & Python</li>
              <li>• Voice interactions</li>
              <li>• Multi-model AI</li>
            </ul>
            <Button asChild variant="ghost" size="sm" className="w-full gap-2">
              <Link href="/docs/features">
                Discover <ArrowRight className="h-3 w-3" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Popular Guides */}
      <div className="flex flex-col gap-4 mt-8">
        <h2 className="text-2xl font-semibold">Popular Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link 
            href="/docs/get-started/quickstart" 
            className="group p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium group-hover:text-primary transition-colors">
                  5-Minute Quickstart Guide
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Connect your data and get your first insights
                </p>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
          </Link>

          <Link 
            href="/docs/integrations/google-analytics" 
            className="group p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium group-hover:text-primary transition-colors">
                  Connect Google Analytics
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Analyze your website traffic and user behavior
                </p>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
          </Link>

          <Link 
            href="/docs/features/natural-language-queries" 
            className="group p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium group-hover:text-primary transition-colors">
                  Writing Effective Queries
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Learn how to ask better questions to get better insights
                </p>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
          </Link>

          <Link 
            href="/docs/integrations/postgresql" 
            className="group p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium group-hover:text-primary transition-colors">
                  Connect PostgreSQL Database
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Query your database using natural language
                </p>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
