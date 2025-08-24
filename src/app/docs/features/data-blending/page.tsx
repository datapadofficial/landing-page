import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Layers, 
  ArrowRight, 
  CheckCircle,
  Database,
  Zap,
  BarChart3,
  Brain,
  TrendingUp,
  Users,
  Target
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Data Blending - Unified Analytics",
  description: "Combine data from multiple sources seamlessly with Datapad's intelligent data blending and correlation capabilities.",
};

export default function DataBlendingFeaturePage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="bg-muted/50">
            Feature
          </Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Data Blending</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Seamlessly combine data from multiple sources to create unified insights. 
          Break down data silos and discover cross-platform patterns with AI-powered data correlation and analysis.
        </p>
      </div>

      {/* Overview */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Intelligent Data Unification</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <Layers className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Multi-Source Integration</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Combine data from databases, APIs, files, and cloud services in a single analysis.
            </p>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <Brain className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Intelligent Matching</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              AI automatically identifies relationships and common fields across different data sources.
            </p>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Real-Time Correlation</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Discover hidden patterns and correlations between data from different platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Data Blending Capabilities</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Smart Data Joining</h3>
            <div className="p-4 rounded-lg border bg-muted/20">
              <ul className="text-sm space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Automatic field mapping and schema alignment
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Fuzzy matching for similar field names
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Intelligent join type recommendations
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Data type conversion and standardization
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Conflict resolution for duplicate data
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Advanced Analysis</h3>
            <div className="p-4 rounded-lg border bg-muted/20">
              <ul className="text-sm space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Cross-platform trend analysis
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Statistical correlation discovery
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Anomaly detection across sources
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Unified reporting and visualization
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Predictive modeling with combined data
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Common Data Blending Scenarios</h2>
        <div className="space-y-6">
          <div className="p-6 rounded-lg border bg-muted/20">
            <h3 className="text-lg font-medium mb-4">Marketing Attribution</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">Data Sources</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Google Ads campaign data</li>
                  <li>• Facebook Ads performance metrics</li>
                  <li>• Google Analytics website traffic</li>
                  <li>• CRM sales conversion data</li>
                  <li>• Email marketing engagement</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Blended Insights</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Multi-touch attribution modeling</li>
                  <li>• Cross-channel ROI analysis</li>
                  <li>• Customer journey mapping</li>
                  <li>• Budget optimization recommendations</li>
                  <li>• Campaign performance correlation</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg border bg-muted/20">
            <h3 className="text-lg font-medium mb-4">E-commerce Intelligence</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">Data Sources</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Shopify sales and inventory data</li>
                  <li>• Stripe payment transactions</li>
                  <li>• Customer support tickets</li>
                  <li>• Social media engagement</li>
                  <li>• Email marketing campaigns</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Blended Insights</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Customer lifetime value analysis</li>
                  <li>• Product performance correlation</li>
                  <li>• Support impact on retention</li>
                  <li>• Marketing influence on sales</li>
                  <li>• Inventory optimization insights</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg border bg-muted/20">
            <h3 className="text-lg font-medium mb-4">SaaS Product Analytics</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">Data Sources</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Mixpanel user behavior events</li>
                  <li>• Database user and subscription data</li>
                  <li>• Customer support interactions</li>
                  <li>• Feature usage analytics</li>
                  <li>• Billing and payment information</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Blended Insights</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Feature adoption vs. retention correlation</li>
                  <li>• Support ticket impact on churn</li>
                  <li>• Usage patterns by subscription tier</li>
                  <li>• Onboarding effectiveness analysis</li>
                  <li>• Revenue impact of feature usage</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI-Powered Queries */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">AI-Powered Data Blending Queries</h2>
        <div className="space-y-6">
          <div className="p-6 rounded-lg border bg-muted/20">
            <h3 className="text-lg font-medium mb-4">Natural Language Data Blending</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border bg-background">
                <div className="text-sm text-muted-foreground mb-2">Ask Datapad:</div>
                <div className="font-medium mb-2">"Compare Google Ads spending with actual sales revenue"</div>
                <div className="text-xs text-muted-foreground">Automatically joins advertising costs with sales data for ROI analysis</div>
              </div>
              <div className="p-4 rounded-lg border bg-background">
                <div className="text-sm text-muted-foreground mb-2">Ask Datapad:</div>
                <div className="font-medium mb-2">"How does website traffic correlate with social media engagement?"</div>
                <div className="text-xs text-muted-foreground">Blends Google Analytics and social platform data for correlation analysis</div>
              </div>
              <div className="p-4 rounded-lg border bg-background">
                <div className="text-sm text-muted-foreground mb-2">Ask Datapad:</div>
                <div className="font-medium mb-2">"Which customers have high support tickets but low product usage?"</div>
                <div className="text-xs text-muted-foreground">Joins customer support data with product analytics for insights</div>
              </div>
              <div className="p-4 rounded-lg border bg-background">
                <div className="text-sm text-muted-foreground mb-2">Ask Datapad:</div>
                <div className="font-medium mb-2">"Create a unified view of customer journey from ads to purchase"</div>
                <div className="text-xs text-muted-foreground">Blends advertising, analytics, and sales data for complete funnel view</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Data Blending Best Practices</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 rounded-lg border border-green-200 bg-green-50 dark:bg-green-950/20 dark:border-green-800">
            <h4 className="font-medium mb-3 text-green-700 dark:text-green-300">Data Quality</h4>
            <ul className="text-sm text-green-600 dark:text-green-400 space-y-2">
              <li>• Ensure consistent date formats across sources</li>
              <li>• Standardize customer identifiers</li>
              <li>• Validate data quality before blending</li>
              <li>• Handle missing values appropriately</li>
              <li>• Document data source relationships</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg border border-blue-200 bg-blue-50 dark:bg-blue-950/20 dark:border-blue-800">
            <h4 className="font-medium mb-3 text-blue-700 dark:text-blue-300">Performance Optimization</h4>
            <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-2">
              <li>• Use appropriate join types for your analysis</li>
              <li>• Limit data to relevant time periods</li>
              <li>• Optimize source queries before blending</li>
              <li>• Cache frequently used blended datasets</li>
              <li>• Monitor blend performance and resource usage</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Getting Started with Data Blending</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium">
                1
              </div>
              <div>
                <h4 className="font-medium mb-2">Connect Your Data Sources</h4>
                <p className="text-sm text-muted-foreground">
                  Ensure all relevant data sources are connected to Datapad.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium">
                2
              </div>
              <div>
                <h4 className="font-medium mb-2">Identify Common Fields</h4>
                <p className="text-sm text-muted-foreground">
                  Look for common identifiers like customer IDs, dates, or email addresses.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium">
                3
              </div>
              <div>
                <h4 className="font-medium mb-2">Ask Cross-Source Questions</h4>
                <p className="text-sm text-muted-foreground">
                  Use natural language to query across multiple data sources simultaneously.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-4 rounded-lg border bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
              <h4 className="font-medium mb-2 text-blue-700 dark:text-blue-300">Quick Start Tips</h4>
              <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                <li>• Start with two related data sources</li>
                <li>• Use clear, descriptive field names</li>
                <li>• Verify results with known data points</li>
                <li>• Save successful blends for reuse</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg border bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800">
              <h4 className="font-medium mb-2 text-amber-700 dark:text-amber-300">Common Challenges</h4>
              <ul className="text-sm text-amber-600 dark:text-amber-400 space-y-1">
                <li>• Mismatched data types or formats</li>
                <li>• Different granularity levels</li>
                <li>• Time zone and date inconsistencies</li>
                <li>• Duplicate or conflicting records</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Next Steps</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/docs/features/ai-chat" className="p-4 rounded-lg border hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-2 mb-2">
              <Brain className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Try AI Chat</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Start asking cross-source questions with natural language
            </p>
          </Link>
          <Link href="/docs/integrations" className="p-4 rounded-lg border hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-2 mb-2">
              <Database className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Connect Data Sources</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Set up multiple integrations to enable data blending
            </p>
          </Link>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t">
        <Link href="/docs/features/shareable-reports">
          <Button variant="outline" className="gap-2">
            <ArrowRight className="h-4 w-4 rotate-180" />
            Shareable Reports
          </Button>
        </Link>
        <Link href="/docs/features/multi-model-ai">
          <Button className="gap-2">
            Multi-Model AI
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
