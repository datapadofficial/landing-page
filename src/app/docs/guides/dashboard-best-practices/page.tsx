import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  ArrowRight, 
  CheckCircle,
  XCircle,
  Eye,
  Users,
  Clock,
  Palette,
  Filter,
  TrendingUp,
  Lightbulb,
  Target,
  RefreshCw
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Dashboard Best Practices",
  description: "Learn how to design effective dashboards that drive action and provide clear insights for your team and stakeholders.",
};

export default function DashboardBestPracticesPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="bg-muted/50">
            Guide
          </Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Dashboard Best Practices</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Create dashboards that inform, inspire action, and drive business results. 
          Learn proven design principles and strategies for effective data visualization.
        </p>
      </div>

      {/* Core Principles */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Core Design Principles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <Target className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Purpose-Driven</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Every dashboard should answer specific business questions and drive decisions.
            </p>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <Eye className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Scannable</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Key insights should be visible within 5 seconds of viewing the dashboard.
            </p>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <Users className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Audience-Focused</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Design for your specific audience's needs, expertise level, and priorities.
            </p>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <RefreshCw className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Actionable</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Provide insights that lead to concrete actions and business improvements.
            </p>
          </div>
        </div>
      </section>

      {/* Dashboard Structure */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Optimal Dashboard Structure</h2>
        
        {/* Visual Hierarchy */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Visual Hierarchy</h3>
          <div className="p-6 rounded-lg border bg-muted/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-full h-24 bg-primary/20 rounded border-2 border-primary/40 mb-2 flex items-center justify-center">
                  <span className="text-sm font-medium text-primary">Top Metrics</span>
                </div>
                <p className="text-sm text-muted-foreground">Most important KPIs at the top</p>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-muted rounded border mb-2 flex items-center justify-center">
                  <span className="text-sm text-muted-foreground">Supporting Charts</span>
                </div>
                <p className="text-sm text-muted-foreground">Context and trends in the middle</p>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-muted/50 rounded border mb-2 flex items-center justify-center">
                  <span className="text-sm text-muted-foreground">Detailed Data</span>
                </div>
                <p className="text-sm text-muted-foreground">Drill-down details at the bottom</p>
              </div>
            </div>
          </div>
        </div>

        {/* Layout Guidelines */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Layout Guidelines</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 rounded-lg border bg-muted/20">
              <h4 className="font-medium mb-3 flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Do This
              </h4>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Place critical metrics in the top-left corner</li>
                <li>• Use consistent spacing and alignment</li>
                <li>• Group related information together</li>
                <li>• Leave white space for visual breathing room</li>
                <li>• Follow a logical reading flow (left-to-right, top-to-bottom)</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg border bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800">
              <h4 className="font-medium mb-3 flex items-center gap-2">
                <XCircle className="h-4 w-4 text-red-500" />
                Avoid This
              </h4>
              <ul className="text-sm text-red-600 dark:text-red-400 space-y-2">
                <li>• Cramming too much information on one screen</li>
                <li>• Inconsistent chart sizes and spacing</li>
                <li>• Random placement without logical flow</li>
                <li>• Overwhelming users with too many colors</li>
                <li>• Hiding important metrics below the fold</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Choosing the Right Visualizations */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Choosing the Right Visualizations</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          
          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-2">📊 Line Charts</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Best for showing trends over time
            </p>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Revenue growth over months</li>
              <li>• Website traffic trends</li>
              <li>• Performance comparisons over time</li>
            </ul>
          </div>

          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-2">📊 Bar Charts</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Perfect for comparing categories
            </p>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Sales by product category</li>
              <li>• Performance by sales rep</li>
              <li>• Revenue by geographic region</li>
            </ul>
          </div>

          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-2">🔢 KPI Cards</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Highlight single important metrics
            </p>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Total revenue</li>
              <li>• Conversion rate</li>
              <li>• Customer count</li>
            </ul>
          </div>

          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-2">🥧 Pie Charts</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Show parts of a whole (use sparingly)
            </p>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Market share distribution</li>
              <li>• Budget allocation</li>
              <li>• Traffic source breakdown</li>
            </ul>
          </div>

          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-2">📋 Tables</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Display detailed data for analysis
            </p>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Top customer details</li>
              <li>• Campaign performance data</li>
              <li>• Product inventory levels</li>
            </ul>
          </div>

          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-2">🎯 Gauges</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Show progress toward goals
            </p>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Sales target progress</li>
              <li>• Performance indicators</li>
              <li>• Completion percentages</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Dashboard Types */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Dashboard Types & Best Practices</h2>
        <div className="space-y-6">
          
          {/* Executive Dashboard */}
          <div className="p-6 rounded-lg border bg-muted/20">
            <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Executive Dashboard
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">Purpose</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  High-level overview for leadership decision-making
                </p>
                <h4 className="font-medium mb-2">Key Elements</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• 3-5 critical KPIs prominently displayed</li>
                  <li>• Period-over-period comparisons</li>
                  <li>• Goal vs actual performance</li>
                  <li>• Exception alerts and anomalies</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Design Tips</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Use large, clear numbers</li>
                  <li>• Minimize clutter and detail</li>
                  <li>• Include trend indicators</li>
                  <li>• Update frequency: Daily or weekly</li>
                  <li>• Mobile-friendly design</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Operational Dashboard */}
          <div className="p-6 rounded-lg border bg-muted/20">
            <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Operational Dashboard
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">Purpose</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Real-time monitoring for day-to-day operations
                </p>
                <h4 className="font-medium mb-2">Key Elements</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Real-time or near real-time data</li>
                  <li>• Status indicators and alerts</li>
                  <li>• Process performance metrics</li>
                  <li>• Resource utilization tracking</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Design Tips</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Use color coding for status</li>
                  <li>• Include drill-down capabilities</li>
                  <li>• Auto-refresh functionality</li>
                  <li>• Clear alert notifications</li>
                  <li>• Quick action buttons</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Analytical Dashboard */}
          <div className="p-6 rounded-lg border bg-muted/20">
            <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              Analytical Dashboard
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">Purpose</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Deep-dive analysis for specialists and analysts
                </p>
                <h4 className="font-medium mb-2">Key Elements</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Multiple data views and perspectives</li>
                  <li>• Interactive filters and controls</li>
                  <li>• Detailed breakdowns and segmentation</li>
                  <li>• Historical trend analysis</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Design Tips</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Include multiple chart types</li>
                  <li>• Enable data export options</li>
                  <li>• Provide comparison tools</li>
                  <li>• Support custom date ranges</li>
                  <li>• Include statistical insights</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Color and Design Guidelines */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Color & Design Guidelines</h2>
        <div className="grid md:grid-cols-2 gap-6">
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium flex items-center gap-2">
              <Palette className="h-5 w-5 text-primary" />
              Color Strategy
            </h3>
            <div className="p-4 rounded-lg border bg-muted/20">
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 mt-0.5 text-green-500" />
                  <div>
                    <strong>Use color purposefully:</strong> Green for positive, red for negative, blue for neutral
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 mt-0.5 text-green-500" />
                  <div>
                    <strong>Maintain consistency:</strong> Same colors for same metrics across dashboards
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 mt-0.5 text-green-500" />
                  <div>
                    <strong>Consider accessibility:</strong> Ensure sufficient contrast and colorblind-friendly palettes
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 mt-0.5 text-green-500" />
                  <div>
                    <strong>Limit color palette:</strong> Use 3-5 colors maximum to avoid overwhelming users
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium flex items-center gap-2">
              <Eye className="h-5 w-5 text-primary" />
              Typography & Spacing
            </h3>
            <div className="p-4 rounded-lg border bg-muted/20">
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 mt-0.5 text-green-500" />
                  <div>
                    <strong>Clear hierarchy:</strong> Use font sizes to establish importance
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 mt-0.5 text-green-500" />
                  <div>
                    <strong>Readable fonts:</strong> Choose clean, professional typefaces
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 mt-0.5 text-green-500" />
                  <div>
                    <strong>Consistent spacing:</strong> Use grid systems for alignment
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 mt-0.5 text-green-500" />
                  <div>
                    <strong>White space:</strong> Don't fill every pixel—let content breathe
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Performance & Usability */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Performance & Usability</h2>
        <div className="grid md:grid-cols-2 gap-6">
          
          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-3">Loading Performance</h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Optimize for &lt;3 second load times</li>
              <li>• Show loading indicators for slow queries</li>
              <li>• Cache frequently accessed data</li>
              <li>• Use progressive loading for large datasets</li>
              <li>• Consider data aggregation for speed</li>
            </ul>
          </div>

          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-3">User Experience</h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Include helpful tooltips and explanations</li>
              <li>• Provide context for unusual numbers</li>
              <li>• Enable easy filtering and drilling down</li>
              <li>• Support keyboard navigation</li>
              <li>• Test on mobile devices</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testing & Iteration */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Testing & Continuous Improvement</h2>
        <div className="p-6 rounded-lg border bg-muted/20">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-3">Testing Checklist</h4>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Can users find key insights in &lt;30 seconds?
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Are chart types appropriate for data types?
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Is the dashboard actionable for its audience?
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Does it work well on different screen sizes?
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Are colors and fonts accessible?
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Improvement Process</h4>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Gather user feedback regularly</li>
                <li>• Track dashboard usage analytics</li>
                <li>• Monitor which metrics drive actions</li>
                <li>• A/B test different layouts</li>
                <li>• Update based on business changes</li>
                <li>• Archive unused dashboards</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Quick Tips for Success</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          
          <div className="p-4 rounded-lg border border-blue-200 bg-blue-50 dark:bg-blue-950/20 dark:border-blue-800">
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb className="h-4 w-4 text-blue-500" />
              <h4 className="font-medium text-blue-700 dark:text-blue-300">Start Simple</h4>
            </div>
            <p className="text-sm text-blue-600 dark:text-blue-400">
              Begin with 3-5 key metrics. You can always add complexity later.
            </p>
          </div>

          <div className="p-4 rounded-lg border border-green-200 bg-green-50 dark:bg-green-950/20 dark:border-green-800">
            <div className="flex items-center gap-2 mb-2">
              <Users className="h-4 w-4 text-green-500" />
              <h4 className="font-medium text-green-700 dark:text-green-300">Know Your Audience</h4>
            </div>
            <p className="text-sm text-green-600 dark:text-green-400">
              Design for specific user needs, not general requirements.
            </p>
          </div>

          <div className="p-4 rounded-lg border border-purple-200 bg-purple-50 dark:bg-purple-950/20 dark:border-purple-800">
            <div className="flex items-center gap-2 mb-2">
              <Target className="h-4 w-4 text-purple-500" />
              <h4 className="font-medium text-purple-700 dark:text-purple-300">Focus on Actions</h4>
            </div>
            <p className="text-sm text-purple-600 dark:text-purple-400">
              Every metric should lead to a potential business decision.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t">
        <Link href="/docs/guides/effective-queries">
          <Button variant="outline" className="gap-2">
            <ArrowRight className="h-4 w-4 rotate-180" />
            Writing Effective Queries
          </Button>
        </Link>
        <Link href="/docs/guides/data-security">
          <Button className="gap-2">
            Data Security
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
