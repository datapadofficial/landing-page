import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  PlayCircle, 
  Database, 
  MessageSquare, 
  BarChart3, 
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Zap,
  Clock,
  Target
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Quickstart Guide",
  description: "Get up and running with Datapad in just 5 minutes. Connect your data, ask questions, and create your first dashboard.",
};

export default function QuickstartPage() {
  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/docs" className="hover:text-foreground">Docs</Link>
          <span>/</span>
          <Link href="/docs/get-started" className="hover:text-foreground">Get Started</Link>
        </div>
        <div className="flex items-center gap-3">
          <h1 className="text-4xl font-bold tracking-tight">Quickstart Guide</h1>
          <Badge variant="secondary" className="gap-1">
            <Clock className="h-3 w-3" />
            5 min
          </Badge>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Get up and running with Datapad in just 5 minutes. Connect your first data source, 
          ask questions using natural language, and create your first dashboard.
        </p>
      </div>

      {/* What You'll Learn */}
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            What you'll accomplish
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Connect your first data source</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Ask your first question in natural language</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Generate your first dashboard automatically</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Share insights with your team</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Prerequisites */}
      <div className="space-y-4">
        <h2 id="prerequisites" className="text-2xl font-semibold">Prerequisites</h2>
        <p className="text-muted-foreground">
          Before you begin, make sure you have:
        </p>
        <ul className="space-y-2 text-muted-foreground ml-6">
          <li>• A Datapad account (<Link href="https://app.datapad.io/signup" className="text-primary hover:underline">sign up here</Link>)</li>
          <li>• Access to at least one data source (database, spreadsheet, or marketing tool)</li>
          <li>• Basic understanding of your business metrics</li>
        </ul>
      </div>

      <Separator />

      {/* Step 1: Connect Your Data */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-semibold text-sm">
            1
          </div>
          <h2 className="text-2xl font-semibold">Connect Your First Data Source</h2>
        </div>
        
        <p className="text-muted-foreground">
          Start by connecting your most important data source. This could be your database, 
          Google Analytics, or any of our 50+ supported integrations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mb-2">
                <Database className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle className="text-lg">Database</CardTitle>
              <CardDescription>PostgreSQL, MySQL, MongoDB</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link href="/docs/integrations/postgresql">Connect Database</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mb-2">
                <BarChart3 className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <CardTitle className="text-lg">Analytics</CardTitle>
              <CardDescription>Google Analytics, Mixpanel</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link href="/docs/integrations/google-analytics">Connect Analytics</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mb-2">
                <Zap className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <CardTitle className="text-lg">Marketing</CardTitle>
              <CardDescription>Google Ads, Facebook Ads</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link href="/docs/integrations/google-ads">Connect Ads</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="bg-muted/50 p-4 rounded-lg">
          <h4 className="font-medium mb-2">💡 Pro Tip</h4>
          <p className="text-sm text-muted-foreground">
            Start with your most reliable data source that has historical data. 
            This will give you the best experience for your first analysis.
          </p>
        </div>
      </div>

      <Separator />

      {/* Step 2: Ask Your First Question */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-semibold text-sm">
            2
          </div>
          <h2 className="text-2xl font-semibold">Ask Your First Question</h2>
        </div>
        
        <p className="text-muted-foreground">
          Once your data is connected, navigate to the AI Chat and ask a question in plain English. 
          Datapad will understand your question and generate the appropriate analysis.
        </p>

        <Card className="bg-gradient-to-r from-primary/5 to-purple-500/5 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Example Questions to Try
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-medium text-sm">For E-commerce:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="p-2 bg-background rounded border">"Show me my top selling products this month"</li>
                  <li className="p-2 bg-background rounded border">"What's my conversion rate trend?"</li>
                  <li className="p-2 bg-background rounded border">"Which marketing channel drives the most revenue?"</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-medium text-sm">For SaaS:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="p-2 bg-background rounded border">"What's my monthly recurring revenue growth?"</li>
                  <li className="p-2 bg-background rounded border">"Show me user engagement metrics"</li>
                  <li className="p-2 bg-background rounded border">"What's my churn rate by customer segment?"</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="bg-muted/50 p-4 rounded-lg">
          <h4 className="font-medium mb-2">📝 Writing Good Questions</h4>
          <p className="text-sm text-muted-foreground mb-2">
            The more specific your question, the better the answer. Include:
          </p>
          <ul className="text-sm text-muted-foreground space-y-1 ml-4">
            <li>• Time periods ("this month", "last 30 days")</li>
            <li>• Specific metrics you care about</li>
            <li>• Comparisons ("compared to last month")</li>
          </ul>
        </div>
      </div>

      <Separator />

      {/* Step 3: Generate Your Dashboard */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-semibold text-sm">
            3
          </div>
          <h2 className="text-2xl font-semibold">Generate Your First Dashboard</h2>
        </div>
        
        <p className="text-muted-foreground">
          After getting insights from your questions, you can ask Datapad to create a dashboard 
          that automatically includes the most relevant metrics for your business.
        </p>

        <Card>
          <CardHeader>
            <CardTitle>Dashboard Generation Examples</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 border rounded-lg">
                <p className="font-medium text-sm mb-1">Simple Request:</p>
                <p className="text-sm text-muted-foreground">"Create a dashboard for my e-commerce performance"</p>
              </div>
              <div className="p-3 border rounded-lg">
                <p className="font-medium text-sm mb-1">Specific Request:</p>
                <p className="text-sm text-muted-foreground">"Build a marketing dashboard showing ad spend, conversions, and ROAS for the last 3 months"</p>
              </div>
              <div className="p-3 border rounded-lg">
                <p className="font-medium text-sm mb-1">Executive Request:</p>
                <p className="text-sm text-muted-foreground">"Create an executive dashboard with our key business metrics and trends"</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Placeholder for dashboard image */}
        <div className="bg-muted/30 border-2 border-dashed border-muted-foreground/20 rounded-lg p-8 text-center">
          <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
          <p className="text-muted-foreground">Dashboard Preview</p>
          <p className="text-sm text-muted-foreground mt-1">Your generated dashboard will appear here</p>
        </div>
      </div>

      <Separator />

      {/* Step 4: Share and Collaborate */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-semibold text-sm">
            4
          </div>
          <h2 className="text-2xl font-semibold">Share Your Insights</h2>
        </div>
        
        <p className="text-muted-foreground">
          Once you have your insights and dashboards, you can easily share them with your team 
          through various channels.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Share Options</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Public shareable links</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Email reports (PDF/HTML)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Slack integration</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Embed in websites</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Team Collaboration</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Invite team members</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Comment on insights</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Shared workspaces</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Role-based permissions</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <Separator />

      {/* Next Steps */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">🎉 Congratulations!</h2>
        <p className="text-muted-foreground">
          You've successfully set up Datapad and created your first insights. Here's what to explore next:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Database className="h-5 w-5 text-blue-500" />
                More Integrations
              </CardTitle>
              <CardDescription>
                Connect additional data sources to get a complete view
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" size="sm" className="w-full gap-2">
                <Link href="/docs/integrations">
                  Browse Integrations <ArrowRight className="h-3 w-3" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Zap className="h-5 w-5 text-purple-500" />
                AI Workflows
              </CardTitle>
              <CardDescription>
                Use pre-built workflows for common business tasks
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" size="sm" className="w-full gap-2">
                <Link href="/docs/features/workflows">
                  Explore Workflows <ArrowRight className="h-3 w-3" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-green-500" />
                Advanced Queries
              </CardTitle>
              <CardDescription>
                Learn to write more effective natural language queries
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" size="sm" className="w-full gap-2">
                <Link href="/docs/guides/effective-queries">
                  Learn More <ArrowRight className="h-3 w-3" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Help Section */}
      <Card className="bg-gradient-to-r from-primary/5 to-blue-500/5 border-primary/20">
        <CardHeader>
          <CardTitle>Need Help?</CardTitle>
          <CardDescription>
            Our team is here to help you get the most out of Datapad
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="outline" size="sm">
              <Link href="mailto:support@datapad.io">Contact Support</Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link href="https://calendly.com/datapad/demo" target="_blank" className="gap-2">
                Book a Demo <ExternalLink className="h-3 w-3" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link href="/docs/guides">Browse Guides</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
