import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  BarChart3,  
  Clock,
  Zap,
  Brain,
  PieChart,
  TrendingUp,
  Share2,
  Palette,
  Filter,
  RefreshCw,
  Info
} from "lucide-react";
import Link from "next/link";
import { DocSection } from "@/components/docs/doc-section";
import { FeatureGrid } from "@/components/docs/feature-grid";

export const metadata: Metadata = {
  title: "AI-Generated Dashboards",
  description: "Create intelligent dashboards with natural language. Let AI design, build, and optimize dashboards tailored to your business needs.",
};

const features = [
  {
    icon: Zap,
    title: "Instant Creation",
    description: "Generate complex dashboards in 15-30 seconds instead of hours or days of manual work."
  },
  {
    icon: Brain,
    title: "Smart Design",
    description: "AI selects optimal chart types, layouts, and metrics based on your data and business intent."
  },
  {
    icon: RefreshCw,
    title: "Auto-Optimization",
    description: "Dashboards continuously improve based on usage patterns and data changes."
  }
];

const exampleRequests = [
  "Create a marketing dashboard showing campaign ROI and traffic sources",
  "Build a sales dashboard with revenue trends and team performance",
  "Show me an e-commerce dashboard with conversion rates and top products",
  "Generate an executive dashboard with key business metrics",
  "Create a customer analytics dashboard with retention and LTV",
  "Build a financial dashboard tracking revenue, costs, and profitability"
];

const dashboardTypes = [
  {
    title: "Executive Dashboard",
    description: "High-level KPIs and trends for leadership teams",
    metrics: ["Revenue & growth metrics", "Customer acquisition trends", "Operational efficiency indicators"]
  },
  {
    title: "Marketing Performance",
    description: "Campaign effectiveness and channel analysis",
    metrics: ["Campaign ROI & ROAS", "Traffic source attribution", "Conversion funnel analysis"]
  },
  {
    title: "Sales Analytics",
    description: "Pipeline management and team performance",
    metrics: ["Sales pipeline status", "Rep performance comparison", "Deal win/loss analysis"]
  },
  {
    title: "Product Analytics",
    description: "User engagement and feature adoption",
    metrics: ["User engagement metrics", "Feature usage patterns", "Retention & churn analysis"]
  },
  {
    title: "Financial Dashboard",
    description: "Revenue, costs, and profitability tracking",
    metrics: ["P&L statements", "Cash flow analysis", "Budget vs actual comparison"]
  },
  {
    title: "Operational Metrics",
    description: "Day-to-day operations and efficiency",
    metrics: ["Process efficiency metrics", "Resource utilization", "Quality & performance indicators"]
  }
];

export default function DashboardsPage() {
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
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
            <BarChart3 className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight">AI-Generated Dashboards</h1>
            <p className="text-xl text-muted-foreground">
              Create intelligent dashboards with natural language in seconds
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Badge variant="secondary" className="gap-1">
            <Brain className="h-3 w-3" />
            AI-Powered
          </Badge>
          <Badge variant="secondary" className="gap-1">
            <Clock className="h-3 w-3" />
            Instant Generation
          </Badge>
          <Badge variant="secondary" className="gap-1">
            <RefreshCw className="h-3 w-3" />
            Auto-Optimized
          </Badge>
        </div>
      </div>

      <DocSection title="What You'll Get">
        <FeatureGrid features={features} />
      </DocSection>

      {/* How It Works */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">How It Works</h2>
        <p className="text-muted-foreground">
          Create professional dashboards in three simple steps using natural language.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-semibold text-sm">
                1
              </div>
              <h3 className="text-xl font-semibold">Describe Your Needs</h3>
            </div>
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-3">
                  Tell the AI what you want to track using natural language:
                </p>
                <div className="p-3 bg-muted/50 rounded-lg">
                  <p className="text-sm font-medium">"Show me our marketing performance including traffic sources, conversion rates, and campaign ROI"</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-semibold text-sm">
                2
              </div>
              <h3 className="text-xl font-semibold">AI Analyzes & Designs</h3>
            </div>
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-3">
                  The AI examines your data and creates an optimal dashboard structure:
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="p-2 bg-muted/30 rounded text-center">
                    <BarChart3 className="h-4 w-4 mx-auto mb-1 text-primary" />
                    <p className="text-xs">Selects Metrics</p>
                  </div>
                  <div className="p-2 bg-muted/30 rounded text-center">
                    <PieChart className="h-4 w-4 mx-auto mb-1 text-primary" />
                    <p className="text-xs">Chooses Charts</p>
                  </div>
                  <div className="p-2 bg-muted/30 rounded text-center">
                    <Palette className="h-4 w-4 mx-auto mb-1 text-primary" />
                    <p className="text-xs">Designs Layout</p>
                  </div>
                  <div className="p-2 bg-muted/30 rounded text-center">
                    <Filter className="h-4 w-4 mx-auto mb-1 text-primary" />
                    <p className="text-xs">Adds Filters</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-semibold text-sm">
                3
              </div>
              <h3 className="text-xl font-semibold">Review & Refine</h3>
            </div>
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-3">
                  Preview your dashboard and make adjustments using natural language:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• "Add a table showing top products by revenue"</li>
                  <li>• "Change to monthly instead of daily data"</li>
                  <li>• "Include comparison to last year"</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Separator />

      {/* Example Requests */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Example Dashboard Requests</h2>
        <p className="text-muted-foreground">
          Here are some example requests you can make to create dashboards:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {exampleRequests.map((request, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer group">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-medium mt-0.5">
                    {index + 1}
                  </div>
                  <p className="text-sm font-medium group-hover:text-primary transition-colors">
                    "{request}"
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-muted/50 p-4 rounded-lg">
          <h4 className="font-medium mb-2">💡 Dashboard Creation Tips</h4>
          <ul className="text-sm text-muted-foreground space-y-1 ml-4">
            <li>• Be specific about your goals and audience (executive, sales team, marketing)</li>
            <li>• Start with 5-8 key metrics, you can add more later</li>
            <li>• Use business terms that align with your industry</li>
            <li>• Ask for specific chart types if you have a preference</li>
          </ul>
        </div>
      </div>

      <Separator />

      {/* Dashboard Types */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Popular Dashboard Types</h2>
        <p className="text-muted-foreground">
          Explore the most common dashboard types businesses create with Datapad.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {dashboardTypes.map((type) => (
            <Card key={type.title} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{type.title}</CardTitle>
                <CardDescription>{type.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {type.metrics.map((metric, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                      <span>{metric}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator />

      {/* Behind the Scenes */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Behind the Scenes</h2>
        <Card className="bg-gradient-to-r from-primary/5 to-green-500/5 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5" />
              AI Dashboard Intelligence
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Datapad's AI analyzes your data structure, understands business context, and automatically selects the best metrics, chart types, and layouts. 
              The system continuously learns from usage patterns to optimize dashboard performance.
            </p>
          </CardContent>
        </Card>
      </div>

      <Separator />

      {/* Advanced Features */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Advanced Dashboard Features</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Share2 className="h-5 w-5 text-blue-500" />
                Team Sharing
              </CardTitle>
              <CardDescription>
                Share dashboards with team members and set permissions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link href="/docs/features/shareable-reports">
                  Learn More
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <RefreshCw className="h-5 w-5 text-green-500" />
                Real-time Updates
              </CardTitle>
              <CardDescription>
                Dashboards automatically update as new data arrives
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link href="/docs/integrations">
                  Connect Data Sources
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <TrendingUp className="h-5 w-5 text-purple-500" />
                Smart Insights
              </CardTitle>
              <CardDescription>
                AI highlights anomalies and important trends automatically
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link href="/docs/features/ai-chat">
                  AI Analytics
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Separator />

      {/* Best Practices */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Dashboard Best Practices</h2>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Info className="h-5 w-5 text-blue-500" />
              Tips for Effective Dashboards
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Start with clear objectives</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Define what decisions the dashboard should help you make
                </p>
                <div className="p-3 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <p className="text-sm text-green-800 dark:text-green-200">✓ "Create a dashboard to track our marketing campaign performance and optimize budget allocation"</p>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-medium mb-2">Keep it focused</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Limit to 5-8 key metrics per dashboard to avoid information overload
                </p>
                <div className="p-3 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <p className="text-sm text-green-800 dark:text-green-200">✓ Focus on metrics that directly impact your specific goals</p>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-medium mb-2">Use natural language descriptions</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Describe your needs in business terms, not technical jargon
                </p>
                <div className="p-3 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <p className="text-sm text-green-800 dark:text-green-200">✓ "Show me which marketing channels bring the most valuable customers"</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Getting Started */}
      <Card className="bg-gradient-to-r from-primary/5 to-green-500/5 border-primary/20">
        <CardHeader>
          <CardTitle>Ready to create your first AI dashboard?</CardTitle>
          <CardDescription>
            Connect your data sources and describe what you want to track in natural language.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="https://app.datapad.io/dashboards">
                Create Dashboard Now
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/docs/get-started/quickstart">
                Quickstart Guide
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/docs/guides/dashboard-best-practices">
                Best Practices
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
      
    </div>
  );
}