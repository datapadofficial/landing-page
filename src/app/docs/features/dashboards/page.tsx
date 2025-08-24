import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  ArrowRight, 
  Zap, 
  Brain,
  PieChart,
  TrendingUp,
  Clock,
  Users,
  Share2,
  Palette,
  Filter,
  RefreshCw
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "AI-Generated Dashboards",
  description: "Create intelligent dashboards with natural language. Let AI design, build, and optimize dashboards tailored to your business needs.",
};

export default function DashboardsFeaturePage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="bg-muted/50">
            Core Feature
          </Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">AI-Generated Dashboards</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Stop building dashboards manually. Describe what you want to track in plain English, 
          and let Datapad's AI create intelligent, optimized dashboards in seconds.
        </p>
      </div>

      {/* Hero Benefits */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Why AI-Generated Dashboards?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Instant Creation</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Generate complex dashboards in 15-30 seconds instead of hours or days of manual work.
            </p>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <Brain className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Smart Design</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              AI selects optimal chart types, layouts, and metrics based on your data and intent.
            </p>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <RefreshCw className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Auto-Optimization</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Dashboards continuously improve based on usage patterns and data changes.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">How It Works</h2>
        
        {/* Step 1 */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary font-medium text-sm">1</div>
            <h3 className="text-lg font-medium">Describe Your Needs</h3>
          </div>
          <div className="ml-10 space-y-3">
            <p className="text-muted-foreground">
              Tell the AI what you want to track using natural language:
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="p-3 rounded border bg-background">
                <p className="text-sm font-medium mb-1">Marketing Dashboard</p>
                <p className="text-xs text-muted-foreground">
                  "Show me our marketing performance including traffic sources, conversion rates, and campaign ROI"
                </p>
              </div>
              <div className="p-3 rounded border bg-background">
                <p className="text-sm font-medium mb-1">Sales Dashboard</p>
                <p className="text-xs text-muted-foreground">
                  "Create a sales dashboard with revenue trends, pipeline status, and team performance"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary font-medium text-sm">2</div>
            <h3 className="text-lg font-medium">AI Analyzes & Designs</h3>
          </div>
          <div className="ml-10 space-y-3">
            <p className="text-muted-foreground">
              The AI examines your data and creates an optimal dashboard structure:
            </p>
            <div className="grid md:grid-cols-4 gap-3 text-sm">
              <div className="p-3 rounded border bg-muted/20 text-center">
                <BarChart3 className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="font-medium">Selects Metrics</p>
                <p className="text-xs text-muted-foreground">Key KPIs & data points</p>
              </div>
              <div className="p-3 rounded border bg-muted/20 text-center">
                <PieChart className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="font-medium">Chooses Charts</p>
                <p className="text-xs text-muted-foreground">Optimal visualizations</p>
              </div>
              <div className="p-3 rounded border bg-muted/20 text-center">
                <Palette className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="font-medium">Designs Layout</p>
                <p className="text-xs text-muted-foreground">Logical arrangement</p>
              </div>
              <div className="p-3 rounded border bg-muted/20 text-center">
                <Filter className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="font-medium">Adds Filters</p>
                <p className="text-xs text-muted-foreground">Relevant controls</p>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary font-medium text-sm">3</div>
            <h3 className="text-lg font-medium">Review & Refine</h3>
          </div>
          <div className="ml-10 space-y-2">
            <p className="text-muted-foreground">
              Preview your dashboard and make adjustments using natural language:
            </p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• "Add a table showing top products by revenue"</li>
              <li>• "Change the line chart to show monthly instead of daily data"</li>
              <li>• "Include a comparison to last year's performance"</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Dashboard Types */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Popular Dashboard Types</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-2">Executive Dashboard</h4>
            <p className="text-sm text-muted-foreground mb-3">
              High-level KPIs and trends for leadership teams.
            </p>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Revenue & growth metrics</li>
              <li>• Customer acquisition trends</li>
              <li>• Operational efficiency indicators</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-2">Marketing Performance</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Campaign effectiveness and channel analysis.
            </p>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Campaign ROI & ROAS</li>
              <li>• Traffic source attribution</li>
              <li>• Conversion funnel analysis</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-2">Sales Analytics</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Pipeline management and team performance.
            </p>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Sales pipeline status</li>
              <li>• Rep performance comparison</li>
              <li>• Deal win/loss analysis</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-2">Product Analytics</h4>
            <p className="text-sm text-muted-foreground mb-3">
              User engagement and feature adoption.
            </p>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• User engagement metrics</li>
              <li>• Feature usage patterns</li>
              <li>• Retention & churn analysis</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-2">Financial Dashboard</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Revenue, costs, and profitability tracking.
            </p>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• P&L statements</li>
              <li>• Cash flow analysis</li>
              <li>• Budget vs actual comparison</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-2">Operational Metrics</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Day-to-day operations and efficiency.
            </p>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Process efficiency metrics</li>
              <li>• Resource utilization</li>
              <li>• Quality & performance indicators</li>
            </ul>
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">AI Intelligence Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Smart Recommendations</h3>
            <div className="p-4 rounded-lg border bg-muted/20">
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-start gap-2">
                  <TrendingUp className="h-4 w-4 mt-0.5 text-primary" />
                  <div>
                    <strong>Metric Suggestions:</strong> AI recommends relevant KPIs based on your industry and data
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <BarChart3 className="h-4 w-4 mt-0.5 text-primary" />
                  <div>
                    <strong>Chart Type Selection:</strong> Automatically chooses the best visualization for each metric
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="h-4 w-4 mt-0.5 text-primary" />
                  <div>
                    <strong>Time Range Optimization:</strong> Suggests ideal date ranges and comparison periods
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Dynamic Updates</h3>
            <div className="p-4 rounded-lg border bg-muted/20">
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-start gap-2">
                  <RefreshCw className="h-4 w-4 mt-0.5 text-primary" />
                  <div>
                    <strong>Real-time Data:</strong> Dashboards update automatically as new data arrives
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Brain className="h-4 w-4 mt-0.5 text-primary" />
                  <div>
                    <strong>Anomaly Detection:</strong> AI highlights unusual patterns and outliers
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Users className="h-4 w-4 mt-0.5 text-primary" />
                  <div>
                    <strong>Usage Learning:</strong> Adapts layout based on which metrics you view most
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Example Requests */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Example Dashboard Requests</h2>
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg border bg-muted/20">
              <h4 className="font-medium mb-2">E-commerce Performance</h4>
              <p className="text-sm text-muted-foreground mb-2">
                "Create a dashboard showing our online store performance including daily sales, top products, customer acquisition costs, and conversion rates by traffic source."
              </p>
              <div className="text-xs text-muted-foreground">
                <strong>AI generates:</strong> Revenue charts, product rankings, CAC trends, funnel analysis
              </div>
            </div>
            <div className="p-4 rounded-lg border bg-muted/20">
              <h4 className="font-medium mb-2">SaaS Metrics</h4>
              <p className="text-sm text-muted-foreground mb-2">
                "Build a SaaS dashboard with MRR growth, churn rates, customer lifetime value, and feature adoption metrics."
              </p>
              <div className="text-xs text-muted-foreground">
                <strong>AI generates:</strong> MRR trends, cohort analysis, CLV calculations, usage heatmaps
              </div>
            </div>
            <div className="p-4 rounded-lg border bg-muted/20">
              <h4 className="font-medium mb-2">Content Marketing</h4>
              <p className="text-sm text-muted-foreground mb-2">
                "Show me content performance including blog traffic, social engagement, lead generation, and SEO rankings."
              </p>
              <div className="text-xs text-muted-foreground">
                <strong>AI generates:</strong> Traffic analytics, engagement metrics, conversion attribution, ranking trends
              </div>
            </div>
            <div className="p-4 rounded-lg border bg-muted/20">
              <h4 className="font-medium mb-2">Customer Support</h4>
              <p className="text-sm text-muted-foreground mb-2">
                "Create a support dashboard tracking ticket volume, response times, customer satisfaction, and agent performance."
              </p>
              <div className="text-xs text-muted-foreground">
                <strong>AI generates:</strong> Ticket analytics, SLA tracking, CSAT scores, agent leaderboards
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sharing & Collaboration */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Sharing & Collaboration</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <Share2 className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Team Sharing</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Share dashboards with team members, set permissions, and enable real-time collaboration.
            </p>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Scheduled Reports</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Automatically generate and send dashboard reports on daily, weekly, or monthly schedules.
            </p>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <Users className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Public Links</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Create public dashboard links for stakeholders, clients, or board members with controlled access.
            </p>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Get Started with AI Dashboards</h2>
        <div className="p-6 rounded-lg border bg-muted/20">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-3">Quick Start Steps</h4>
              <ol className="text-sm text-muted-foreground space-y-2">
                <li>1. Connect your data sources</li>
                <li>2. Click "Create New Dashboard"</li>
                <li>3. Describe what you want to track</li>
                <li>4. Review and refine the AI-generated dashboard</li>
                <li>5. Share with your team</li>
              </ol>
            </div>
            <div>
              <h4 className="font-medium mb-3">Best Practices</h4>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Be specific about your goals and audience</li>
                <li>• Start with 5-8 key metrics, add more later</li>
                <li>• Use natural language, avoid technical jargon</li>
                <li>• Iterate and refine based on team feedback</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t">
        <Link href="/docs/features">
          <Button variant="outline" className="gap-2">
            <ArrowRight className="h-4 w-4 rotate-180" />
            All Features
          </Button>
        </Link>
        <Link href="/docs/features/natural-language-queries">
          <Button className="gap-2">
            Natural Language Queries
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
