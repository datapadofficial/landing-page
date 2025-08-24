import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  ArrowRight, 
  CheckCircle,
  Database,
  Users,
  Share2,
  TrendingUp
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Metabase Integration",
  description: "Connect Metabase to Datapad for enhanced business intelligence analytics and cross-platform data insights.",
};

export default function MetabaseIntegrationPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="bg-muted/50">
            Analytics Integration
          </Badge>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm border">
            <Image 
              src="/images/integrations/metabase.png" 
              alt="Metabase logo"
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
            />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Metabase Integration</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Connect your Metabase instance to Datapad and enhance your business intelligence with AI-powered insights, 
          advanced analytics, and seamless data exploration capabilities.
        </p>
      </div>

      {/* Overview */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">What You'll Get</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <BarChart3 className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Enhanced Analytics</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Combine Metabase's business intelligence with Datapad's AI-powered analysis capabilities.
            </p>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <Database className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Data Source Access</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Access all your Metabase-connected data sources through Datapad's natural language interface.
            </p>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <Share2 className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Cross-Platform Insights</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Create unified dashboards combining Metabase data with other sources in Datapad.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Key Benefits</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">AI-Enhanced BI</h3>
            <div className="p-4 rounded-lg border bg-muted/20">
              <ul className="text-sm space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Natural language queries on Metabase data
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Automated insight generation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Advanced statistical analysis
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Predictive analytics capabilities
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Integration Features</h3>
            <div className="p-4 rounded-lg border bg-muted/20">
              <ul className="text-sm space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Direct API connection to Metabase
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Access to existing dashboards
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Question and card import
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  User permission synchronization
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI Insights */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">AI-Powered Metabase Analysis</h2>
        <div className="space-y-6">
          <div className="p-6 rounded-lg border bg-muted/20">
            <h3 className="text-lg font-medium mb-4">Example AI Queries</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border bg-background">
                <div className="text-sm text-muted-foreground mb-2">Ask Datapad:</div>
                <div className="font-medium mb-2">"Summarize insights from our existing Metabase dashboards"</div>
                <div className="text-xs text-muted-foreground">Analyzes all connected Metabase visualizations for key insights</div>
              </div>
              <div className="p-4 rounded-lg border bg-background">
                <div className="text-sm text-muted-foreground mb-2">Ask Datapad:</div>
                <div className="font-medium mb-2">"Compare performance across different Metabase data sources"</div>
                <div className="text-xs text-muted-foreground">Cross-database analysis and correlation insights</div>
              </div>
              <div className="p-4 rounded-lg border bg-background">
                <div className="text-sm text-muted-foreground mb-2">Ask Datapad:</div>
                <div className="font-medium mb-2">"What trends are emerging in our Metabase question results?"</div>
                <div className="text-xs text-muted-foreground">Automated trend detection across existing queries</div>
              </div>
              <div className="p-4 rounded-lg border bg-background">
                <div className="text-sm text-muted-foreground mb-2">Ask Datapad:</div>
                <div className="font-medium mb-2">"Create a unified view combining Metabase data with Google Analytics"</div>
                <div className="text-xs text-muted-foreground">Multi-platform data blending and analysis</div>
              </div>
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
              <BarChart3 className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Start Analyzing</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Use AI chat to explore your Metabase data with natural language
            </p>
          </Link>
          <Link href="/docs/features/data-blending" className="p-4 rounded-lg border hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Blend Data Sources</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Combine Metabase data with other sources for unified insights
            </p>
          </Link>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t">
        <Link href="/docs/integrations/mixpanel">
          <Button variant="outline" className="gap-2">
            <ArrowRight className="h-4 w-4 rotate-180" />
            Mixpanel
          </Button>
        </Link>
        <Link href="/docs/integrations/postgresql">
          <Button className="gap-2">
            PostgreSQL
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
