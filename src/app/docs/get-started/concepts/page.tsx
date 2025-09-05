import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Database, 
  Brain, 
  MessageSquare, 
  BarChart3, 
  Workflow, 
  ArrowRight,
  Zap,
  Shield
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Core Concepts",
  description: "Understand the fundamental concepts behind Datapad's AI-powered data analysis platform.",
};

export default function ConceptsPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="bg-muted/50">
            Getting Started
          </Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Core Concepts</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Understanding these fundamental concepts will help you get the most out of Datapad's AI-powered data analysis platform.
        </p>
      </div>

      {/* AI Data Analyst */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <Brain className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-semibold">AI Data Analyst</h2>
        </div>
        <div className="space-y-4">
          <p className="text-muted-foreground">
            At the heart of Datapad is an autonomous AI data analyst that understands your business context and can perform complex analysis without manual intervention.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg border bg-muted/20">
              <h4 className="font-medium mb-2">Natural Language Processing</h4>
              <p className="text-sm text-muted-foreground">
                Ask questions in plain English. The AI understands business terminology and context.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-muted/20">
              <h4 className="font-medium mb-2">Contextual Understanding</h4>
              <p className="text-sm text-muted-foreground">
                The AI learns your business metrics, goals, and patterns to provide relevant insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Sources */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <Database className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-semibold">Data Sources & Integrations</h2>
        </div>
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Connect all your data sources to create a unified view of your business performance.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg border bg-muted/20">
              <h4 className="font-medium mb-2">Marketing Platforms</h4>
              <p className="text-sm text-muted-foreground">
                Google Ads, Facebook Ads, LinkedIn Ads, and more
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-muted/20">
              <h4 className="font-medium mb-2">Analytics Tools</h4>
              <p className="text-sm text-muted-foreground">
                Google Analytics, Search Console, Mixpanel
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-muted/20">
              <h4 className="font-medium mb-2">Databases</h4>
              <p className="text-sm text-muted-foreground">
                PostgreSQL, MongoDB, MySQL, BigQuery
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboards */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <BarChart3 className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-semibold">AI-Generated Dashboards</h2>
        </div>
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Instead of building dashboards manually, describe what you want to track and let AI create optimized dashboards for you.
          </p>
          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-2">Smart Dashboard Creation</h4>
            <p className="text-sm text-muted-foreground mb-3">
              "Show me our marketing performance this quarter" becomes a comprehensive dashboard with key metrics, trends, and insights.
            </p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Automatically selects relevant metrics</li>
              <li>• Applies appropriate visualization types</li>
              <li>• Includes contextual insights and recommendations</li>
              <li>• Updates in real-time as data changes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Workflows */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <Workflow className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-semibold">Automated Workflows</h2>
        </div>
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Set up automated data analysis workflows that run on schedules and notify you of important changes.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg border bg-muted/20">
              <h4 className="font-medium mb-2">Anomaly Detection</h4>
              <p className="text-sm text-muted-foreground">
                Automatically detect unusual patterns in your data and get alerts when metrics deviate from expected ranges.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-muted/20">
              <h4 className="font-medium mb-2">Scheduled Reports</h4>
              <p className="text-sm text-muted-foreground">
                Generate and share reports automatically on daily, weekly, or monthly schedules.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Security */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <Shield className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-semibold">Data Security & Privacy</h2>
        </div>
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Your data security is our top priority. All data is encrypted in transit and at rest, with enterprise-grade security measures.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg border bg-muted/20">
              <h4 className="font-medium mb-2">Secure Connections</h4>
              <p className="text-sm text-muted-foreground">
                All API connections use OAuth 2.0 and secure tokens. We never store your raw credentials.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-muted/20">
              <h4 className="font-medium mb-2">Data Isolation</h4>
              <p className="text-sm text-muted-foreground">
                Your data is isolated and encrypted. We comply with GDPR, SOC 2, and other security standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Natural Language Queries */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <MessageSquare className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-semibold">Natural Language Queries</h2>
        </div>
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Ask complex questions about your data using natural language. No need to learn SQL or complex query languages.
          </p>
          <div className="space-y-3">
            <div className="p-4 rounded-lg border bg-muted/20">
              <h4 className="font-medium mb-2">Example Queries</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• "What was our customer acquisition cost last month?"</li>
                <li>• "Show me conversion rates by traffic source"</li>
                <li>• "Which campaigns had the highest ROAS this quarter?"</li>
                <li>• "Compare this month's revenue to the same period last year"</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Model AI */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <Zap className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-semibold">Multi-Model AI Approach</h2>
        </div>
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Datapad leverages multiple AI models (Claude, GPT-4, specialized models) to provide the best analysis for each specific task.
          </p>
          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-2">Intelligent Model Selection</h4>
            <p className="text-sm text-muted-foreground">
              The system automatically chooses the most appropriate AI model based on the type of analysis, data complexity, and required output format.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t">
        <Link href="/docs/get-started/quickstart">
          <Button variant="outline" className="gap-2">
            <ArrowRight className="h-4 w-4 rotate-180" />
            Quickstart Guide
          </Button>
        </Link>
        <Link href="/docs/get-started/first-dashboard">
          <Button className="gap-2">
            First Dashboard
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
