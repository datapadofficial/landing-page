import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  ArrowRight, 
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Users,
  Target,
  Zap
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Mixpanel Integration",
  description: "Connect Mixpanel to Datapad for advanced product analytics and user behavior insights with AI-powered analysis.",
};

export default function MixpanelIntegrationPage() {
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
              src="/images/integrations/mixpanel.png" 
              alt="Mixpanel logo"
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
            />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Mixpanel Integration</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Connect your Mixpanel account to analyze product analytics, user behavior, 
          and get AI-powered insights for feature adoption and user journey optimization.
        </p>
      </div>

      {/* Overview */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">What You'll Get</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <Users className="h-4 w-4 text-primary" />
              <h4 className="font-medium">User Journey Analysis</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Track user paths, conversion funnels, and retention cohorts with advanced segmentation.
            </p>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <BarChart3 className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Event Analytics</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Analyze custom events, feature usage, and product engagement patterns.
            </p>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <Target className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Cohort Insights</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Understand user retention, churn patterns, and lifetime value metrics.
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Key Metrics Tracked</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">User Behavior</h3>
            <div className="p-4 rounded-lg border bg-muted/20">
              <ul className="text-sm space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Custom event tracking
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  User property analysis
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Funnel conversion rates
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Retention cohorts
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Session duration
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Product Analytics</h3>
            <div className="p-4 rounded-lg border bg-muted/20">
              <ul className="text-sm space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Feature adoption rates
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  A/B testing results
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  User segmentation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Revenue attribution
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Engagement scoring
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI Insights */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">AI-Powered Product Analytics</h2>
        <div className="space-y-6">
          <div className="p-6 rounded-lg border bg-muted/20">
            <h3 className="text-lg font-medium mb-4">Example AI Queries</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border bg-background">
                <div className="text-sm text-muted-foreground mb-2">Ask Datapad:</div>
                <div className="font-medium mb-2">"Which features correlate with higher user retention?"</div>
                <div className="text-xs text-muted-foreground">Analyzes feature usage patterns and retention correlation</div>
              </div>
              <div className="p-4 rounded-lg border bg-background">
                <div className="text-sm text-muted-foreground mb-2">Ask Datapad:</div>
                <div className="font-medium mb-2">"Compare user behavior between mobile and web platforms"</div>
                <div className="text-xs text-muted-foreground">Cross-platform user journey analysis</div>
              </div>
              <div className="p-4 rounded-lg border bg-background">
                <div className="text-sm text-muted-foreground mb-2">Ask Datapad:</div>
                <div className="font-medium mb-2">"Identify users most likely to churn this month"</div>
                <div className="text-xs text-muted-foreground">Predictive churn analysis based on behavior patterns</div>
              </div>
              <div className="p-4 rounded-lg border bg-background">
                <div className="text-sm text-muted-foreground mb-2">Ask Datapad:</div>
                <div className="font-medium mb-2">"What's the optimal user onboarding flow for new signups?"</div>
                <div className="text-xs text-muted-foreground">Onboarding funnel optimization insights</div>
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
              Use AI chat to ask questions about your product analytics
            </p>
          </Link>
          <Link href="/docs/features/dashboards" className="p-4 rounded-lg border hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Create Dashboards</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Build custom product analytics dashboards
            </p>
          </Link>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t">
        <Link href="/docs/integrations/google-searchconsole">
          <Button variant="outline" className="gap-2">
            <ArrowRight className="h-4 w-4 rotate-180" />
            Google Search Console
          </Button>
        </Link>
        <Link href="/docs/integrations/metabase">
          <Button className="gap-2">
            Metabase
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
