import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Share2,
  ArrowRight,
  CheckCircle,
  Settings,
  Eye,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Create Your First Dashboard",
  description: "Step-by-step guide to creating your first AI-generated dashboard in Datapad.",
};

export default function FirstDashboardPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="bg-muted/50">
            Getting Started
          </Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Create Your First Dashboard</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Learn how to create your first AI-generated dashboard in Datapad using natural language. 
          No technical knowledge required - just describe what you want to see.
        </p>
      </div>

      {/* Prerequisites */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Before You Start</h2>
        <div className="p-4 rounded-lg border bg-muted/20">
          <h3 className="font-medium mb-3">Prerequisites</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Datapad account created and verified
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              At least one data source connected (recommended: Google Analytics or Google Ads)
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Basic understanding of your business metrics
            </li>
          </ul>
        </div>
      </section>

      {/* Step 1 */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10 text-primary font-medium text-sm">
            1
          </div>
          <h2 className="text-2xl font-semibold">Access the Dashboard Creator</h2>
        </div>
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Navigate to your Datapad workspace and start the dashboard creation process.
          </p>
          <div className="p-4 rounded-lg border bg-muted/20">
            <ol className="space-y-2 text-sm">
              <li>1. Log into your Datapad workspace</li>
              <li>2. Click on "Create New" in the sidebar</li>
              <li>3. Select "Dashboard" from the options</li>
              <li>4. Choose "AI-Generated Dashboard" (recommended for beginners)</li>
            </ol>
          </div>
          <div className="p-4 rounded-lg border border-blue-200 bg-blue-50 dark:bg-blue-950/20 dark:border-blue-800">
            <p className="text-sm text-blue-700 dark:text-blue-300">
              💡 <strong>Tip:</strong> You can also use the quick command "Create dashboard" in the AI chat to start immediately.
            </p>
          </div>
        </div>
      </section>

      {/* Step 2 */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10 text-primary font-medium text-sm">
            2
          </div>
          <h2 className="text-2xl font-semibold">Describe Your Dashboard</h2>
        </div>
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Use natural language to describe what you want to track. Be as specific or general as you'd like.
          </p>
          <div className="space-y-4">
            <div className="p-4 rounded-lg border bg-muted/20">
              <h4 className="font-medium mb-2">Example Descriptions</h4>
              <div className="space-y-3 text-sm">
                <div className="p-3 rounded border bg-background">
                  <strong>Marketing Overview:</strong> "Show me our marketing performance this month including traffic sources, conversion rates, and ROI from all advertising campaigns."
                </div>
                <div className="p-3 rounded border bg-background">
                  <strong>E-commerce Sales:</strong> "Create a dashboard for our online store showing daily revenue, top products, customer acquisition cost, and conversion funnel."
                </div>
                <div className="p-3 rounded border bg-background">
                  <strong>Website Analytics:</strong> "I want to see our website performance including page views, bounce rate, top pages, and user demographics."
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 3 */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10 text-primary font-medium text-sm">
            3
          </div>
          <h2 className="text-2xl font-semibold">AI Dashboard Generation</h2>
        </div>
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Watch as Datapad's AI analyzes your request and automatically creates a tailored dashboard.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg border bg-muted/20">
              <h4 className="font-medium mb-2">What Happens Next</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• AI analyzes your connected data sources</li>
                <li>• Identifies relevant metrics for your request</li>
                <li>• Selects appropriate visualization types</li>
                <li>• Creates an optimized layout</li>
                <li>• Adds contextual insights and explanations</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg border bg-muted/20">
              <h4 className="font-medium mb-2">Generation Time</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Dashboard creation typically takes 15-30 seconds depending on:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Number of connected data sources</li>
                <li>• Complexity of the request</li>
                <li>• Amount of historical data</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Step 4 */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10 text-primary font-medium text-sm">
            4
          </div>
          <h2 className="text-2xl font-semibold">Review and Customize</h2>
        </div>
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Once your dashboard is generated, you can review the metrics and make adjustments as needed.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg border bg-muted/20">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="h-4 w-4 text-primary" />
                <h4 className="font-medium">Review Metrics</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Check that all important metrics are included and properly visualized.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-muted/20">
              <div className="flex items-center gap-2 mb-2">
                <Settings className="h-4 w-4 text-primary" />
                <h4 className="font-medium">Make Adjustments</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Ask the AI to modify charts, add metrics, or change the layout using natural language.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-muted/20">
              <div className="flex items-center gap-2 mb-2">
                <Share2 className="h-4 w-4 text-primary" />
                <h4 className="font-medium">Save & Share</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Save your dashboard and share it with team members or stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customization Examples */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Common Customizations</h2>
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Here are some common ways to refine your dashboard after the initial generation:
          </p>
          <div className="space-y-3">
            <div className="p-4 rounded-lg border bg-muted/20">
              <h4 className="font-medium mb-2">Adding More Metrics</h4>
              <p className="text-sm text-muted-foreground mb-2">Example requests:</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• "Add customer lifetime value to this dashboard"</li>
                <li>• "Include a chart showing monthly recurring revenue"</li>
                <li>• "Show me the conversion rate by traffic source"</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg border bg-muted/20">
              <h4 className="font-medium mb-2">Changing Visualizations</h4>
              <p className="text-sm text-muted-foreground mb-2">Example requests:</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• "Change the revenue chart to a line chart"</li>
                <li>• "Make the conversion rate a gauge instead of a number"</li>
                <li>• "Show the top products as a horizontal bar chart"</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg border bg-muted/20">
              <h4 className="font-medium mb-2">Adjusting Time Ranges</h4>
              <p className="text-sm text-muted-foreground mb-2">Example requests:</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• "Show data for the last 90 days instead of 30"</li>
                <li>• "Add a year-over-year comparison"</li>
                <li>• "Include last quarter's performance"</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Dashboard Best Practices</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-2">Keep It Focused</h4>
            <p className="text-sm text-muted-foreground">
              Start with 5-8 key metrics rather than trying to show everything. You can always add more later.
            </p>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-2">Use Clear Titles</h4>
            <p className="text-sm text-muted-foreground">
              Give your dashboard a descriptive name that clearly indicates its purpose and audience.
            </p>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-2">Set Update Frequency</h4>
            <p className="text-sm text-muted-foreground">
              Configure automatic updates based on how often your data changes and how frequently you need insights.
            </p>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-2">Add Context</h4>
            <p className="text-sm text-muted-foreground">
              Include brief descriptions for complex metrics to help viewers understand what they're seeing.
            </p>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Next Steps</h2>
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Congratulations! You've created your first dashboard. Here's what to explore next:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/docs/features/workflows" className="p-4 rounded-lg border bg-muted/20 hover:bg-muted/30 transition-colors">
              <h4 className="font-medium mb-2">Set Up Automated Workflows</h4>
              <p className="text-sm text-muted-foreground">
                Create automated reports and alerts based on your dashboard metrics.
              </p>
            </Link>
            <Link href="/docs/features/shareable-reports" className="p-4 rounded-lg border bg-muted/20 hover:bg-muted/30 transition-colors">
              <h4 className="font-medium mb-2">Share Your Dashboard</h4>
              <p className="text-sm text-muted-foreground">
                Learn how to share dashboards with team members and create scheduled reports.
              </p>
            </Link>
            <Link href="/docs/integrations" className="p-4 rounded-lg border bg-muted/20 hover:bg-muted/30 transition-colors">
              <h4 className="font-medium mb-2">Connect More Data Sources</h4>
              <p className="text-sm text-muted-foreground">
                Add more integrations to get a complete view of your business performance.
              </p>
            </Link>
            <Link href="/docs/guides/dashboard-best-practices" className="p-4 rounded-lg border bg-muted/20 hover:bg-muted/30 transition-colors">
              <h4 className="font-medium mb-2">Dashboard Best Practices</h4>
              <p className="text-sm text-muted-foreground">
                Learn advanced techniques for creating effective business dashboards.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t">
        <Link href="/docs/get-started/concepts">
          <Button variant="outline" className="gap-2">
            <ArrowRight className="h-4 w-4 rotate-180" />
            Core Concepts
          </Button>
        </Link>
        <Link href="/docs/integrations">
          <Button className="gap-2">
            Explore Integrations
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
