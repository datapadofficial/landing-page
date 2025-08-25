import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Workflow,  
  Zap,
  Bell,
  BarChart3,  
  TrendingUp,
  Calendar,  
  Target,
  Copy,
  Info,
  Users
} from "lucide-react";
import Link from "next/link";
import { DocSection } from "@/components/docs/doc-section";
import { FeatureGrid } from "@/components/docs/feature-grid";

export const metadata: Metadata = {
  title: "AI Workflows - 50+ Ready-to-Use Templates",
  description: "50+ ready-to-use AI workflows that create actionable deliverables from your data. Get copy-paste ready campaigns and data-driven strategies.",
};

const features = [
  {
    icon: Copy,
    title: "Copy-Paste Ready Campaigns",
    description: "Get implementation-ready marketing campaigns, SEO strategies, and optimization plans generated from your actual data."
  },
  {
    icon: Target,
    title: "Data-Driven Strategies",
    description: "AI analyzes your performance data to create personalized strategies and actionable recommendations."
  },
  {
    icon: Zap,
    title: "Automated Monitoring",
    description: "Set up intelligent workflows that continuously monitor your data and alert you to important changes."
  }
];

const workflowExamples = [
  "Generate SEO-optimized blog post based on my website data",
  "Create Facebook Ads optimization to-do list from campaign performance",
  "Build weekly executive summary combining all data sources",
  "Generate customer LTV analysis and retention strategies",
  "Create anomaly detection alerts for key business metrics",
  "Build automated competitor analysis reports"
];

const workflowCategories = [
  {
    title: "Marketing Automation",
    description: "Campaign optimization and content generation",
    icon: TrendingUp,
    color: "text-blue-500",
    bgColor: "bg-blue-100 dark:bg-blue-900/20",
    workflows: [
      "SEO-optimized content generation from website analytics",
      "Ad campaign optimization recommendations",
      "Social media strategy based on engagement data",
      "Email marketing personalization workflows"
    ]
  },
  {
    title: "Business Intelligence",
    description: "Automated reporting and analysis",
    icon: BarChart3,
    color: "text-green-500",
    bgColor: "bg-green-100 dark:bg-green-900/20",
    workflows: [
      "Weekly executive dashboards with insights",
      "Customer behavior analysis reports",
      "Revenue attribution and forecasting",
      "Operational efficiency monitoring"
    ]
  },
  {
    title: "Monitoring & Alerts",
    description: "Real-time data monitoring and notifications",
    icon: Bell,
    color: "text-orange-500",
    bgColor: "bg-orange-100 dark:bg-orange-900/20",
    workflows: [
      "Anomaly detection for key metrics",
      "Performance threshold alerts",
      "Competitive monitoring updates",
      "Customer health score notifications"
    ]
  },
  {
    title: "Strategy & Planning",
    description: "Data-driven strategic recommendations",
    icon: Target,
    color: "text-purple-500",
    bgColor: "bg-purple-100 dark:bg-purple-900/20",
    workflows: [
      "Market opportunity analysis",
      "Customer segmentation strategies",
      "Product roadmap prioritization",
      "Budget allocation optimization"
    ]
  }
];

const deliverables = [
  {
    title: "SEO Content Strategy",
    description: "Data-driven blog posts and content plans ready to publish",
    example: "Based on your Google Analytics and Search Console data, generate SEO-optimized articles targeting your highest-opportunity keywords"
  },
  {
    title: "Ad Optimization Plans",
    description: "Specific action items to improve campaign performance",
    example: "Analyze Facebook Ads performance and create a prioritized to-do list with budget reallocation recommendations"
  },
  {
    title: "Executive Reports",
    description: "Professional summaries combining all your data sources",
    example: "Weekly executive dashboard showing KPIs, trends, and strategic recommendations from all connected platforms"
  },
  {
    title: "Customer Analysis",
    description: "LTV calculations and retention strategies",
    example: "Customer lifetime value analysis with specific retention tactics based on behavioral data"
  }
];

export default function WorkflowsPage() {
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
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center">
            <Workflow className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight">AI Workflows</h1>
            <p className="text-xl text-muted-foreground">
              50+ ready-to-use workflows that create actionable deliverables from your data
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Badge variant="secondary" className="gap-1">
            <Copy className="h-3 w-3" />
            Implementation Ready
          </Badge>
          <Badge variant="secondary" className="gap-1">
            <Zap className="h-3 w-3" />
            Automated
          </Badge>
          <Badge variant="secondary" className="gap-1">
            <Target className="h-3 w-3" />
            Data-Driven
          </Badge>
        </div>
      </div>

      <DocSection title="What You'll Get">
        <FeatureGrid features={features} />
      </DocSection>

      {/* How It Works */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">How AI Workflows Work</h2>
        <p className="text-muted-foreground">
          Transform your data into actionable business deliverables in three simple steps.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-semibold text-sm">
                1
          </div>
              <h3 className="text-xl font-semibold">Choose Workflow</h3>
                </div>
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-3">
                  Select from 50+ pre-built workflows or create custom ones:
                </p>
                <div className="p-3 bg-muted/50 rounded-lg">
                  <p className="text-sm font-medium">"Generate SEO content strategy from website analytics"</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-semibold text-sm">
                2
              </div>
              <h3 className="text-xl font-semibold">AI Analyzes Data</h3>
                </div>
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-3">
                  AI processes your data and generates insights:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span>Analyzes performance metrics</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span>Identifies optimization opportunities</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span>Creates actionable recommendations</span>
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
              <h3 className="text-xl font-semibold">Get Deliverables</h3>
            </div>
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-3">
                  Receive implementation-ready outputs:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span>Copy-paste ready content</span>
              </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span>Actionable to-do lists</span>
              </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span>Strategic recommendations</span>
              </div>
            </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Separator />

      {/* Example Workflows */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Example Workflow Requests</h2>
        <p className="text-muted-foreground">
          Here are some example workflows you can run with your connected data:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {workflowExamples.map((workflow, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer group">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-medium mt-0.5">
                    {index + 1}
          </div>
                  <p className="text-sm font-medium group-hover:text-primary transition-colors">
                    "{workflow}"
                  </p>
          </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-muted/50 p-4 rounded-lg">
          <h4 className="font-medium mb-2">🎯 Workflow Tips</h4>
          <ul className="text-sm text-muted-foreground space-y-1 ml-4">
            <li>• Be specific about the deliverable you want (blog post, to-do list, strategy)</li>
            <li>• Mention your data sources if you want to focus on specific platforms</li>
            <li>• Specify the target audience or use case for better results</li>
            <li>• Set up recurring workflows for ongoing monitoring and optimization</li>
          </ul>
            </div>
          </div>

      <Separator />

      {/* Workflow Categories */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Workflow Categories</h2>
        <p className="text-muted-foreground">
          Explore workflows organized by business function and use case.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {workflowCategories.map((category) => (
            <Card key={category.title} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-10 h-10 ${category.bgColor} rounded-lg flex items-center justify-center`}>
                    <category.icon className={`h-5 w-5 ${category.color}`} />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                    <CardDescription className="text-sm">{category.description}</CardDescription>
            </div>
          </div>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  {category.workflows.map((workflow, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 shrink-0" />
                      <span>{workflow}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
            </div>
          </div>

      <Separator />

      {/* Deliverable Examples */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">What You Get: Real Deliverables</h2>
        <p className="text-muted-foreground">
          Unlike generic AI tools that give advice, Datapad creates actual implementation-ready deliverables.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {deliverables.map((deliverable) => (
            <Card key={deliverable.title} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{deliverable.title}</CardTitle>
                <CardDescription>{deliverable.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="p-3 bg-muted/50 rounded-lg">
                  <p className="text-sm font-medium text-muted-foreground italic">
                    "{deliverable.example}"
                  </p>
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
        <Card className="bg-gradient-to-r from-primary/5 to-purple-500/5 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Workflow className="h-5 w-5" />
              AI Workflow Engine
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Datapad's workflow engine combines your real data with industry best practices and AI intelligence to generate actionable deliverables. 
              Each workflow is designed by experts and continuously improved based on results.
            </p>
          </CardContent>
        </Card>
            </div>

      <Separator />

      {/* Advanced Features */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Advanced Workflow Features</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Calendar className="h-5 w-5 text-blue-500" />
                Scheduled Workflows
              </CardTitle>
              <CardDescription>
                Run workflows automatically on daily, weekly, or monthly schedules
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link href="https://app.datapad.io/workflows">
                  Set Up Automation
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Bell className="h-5 w-5 text-orange-500" />
                Smart Alerts
              </CardTitle>
              <CardDescription>
                Get notified when important changes are detected in your data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link href="https://app.datapad.io/alerts">
                  Configure Alerts
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
                Share workflow results and collaborate on implementation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link href="/docs/guides/team-collaboration">
                  Team Features
                </Link>
              </Button>
            </CardContent>
          </Card>
            </div>
          </div>

      <Separator />

      {/* Best Practices */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Workflow Best Practices</h2>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Info className="h-5 w-5 text-blue-500" />
              Maximizing Workflow Value
            </CardTitle>
          </CardHeader>
          <CardContent>
          <div className="space-y-4">
                  <div>
                <h4 className="font-medium mb-2">Start with high-impact workflows</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Begin with workflows that directly impact your key business metrics
                </p>
                <div className="p-3 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <p className="text-sm text-green-800 dark:text-green-200">✓ Focus on workflows that generate revenue, reduce costs, or improve efficiency</p>
                  </div>
                  </div>
              
              <Separator />
              
                  <div>
                <h4 className="font-medium mb-2">Connect comprehensive data sources</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  More data sources lead to better insights and recommendations
                </p>
                <div className="p-3 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <p className="text-sm text-green-800 dark:text-green-200">✓ Connect marketing, sales, analytics, and operational data for complete insights</p>
            </div>
          </div>
              
              <Separator />

            <div>
                <h4 className="font-medium mb-2">Set up recurring workflows</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Automate regular analysis and monitoring for ongoing optimization
                </p>
                <div className="p-3 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <p className="text-sm text-green-800 dark:text-green-200">✓ Schedule weekly reports, monthly strategy reviews, and daily monitoring alerts</p>
          </div>
        </div>
            </div>
          </CardContent>
        </Card>
        </div>

      {/* Getting Started */}
      <Card className="bg-gradient-to-r from-primary/5 to-purple-500/5 border-primary/20">
        <CardHeader>
          <CardTitle>Ready to automate your data analysis?</CardTitle>
          <CardDescription>
            Connect your data sources and choose from 50+ ready-to-use workflows.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="https://app.datapad.io/workflows">
                Browse Workflows
              </Link>
          </Button>
            <Button asChild variant="outline">
              <Link href="/docs/get-started/quickstart">
                Quickstart Guide
        </Link>
          </Button>
            <Button asChild variant="outline">
              <Link href="/docs/integrations">
                Connect Data Sources
        </Link>
            </Button>
      </div>
        </CardContent>
      </Card>
      
    </div>
  );
}