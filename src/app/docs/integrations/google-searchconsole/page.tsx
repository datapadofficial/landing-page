import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  ArrowRight, 
  CheckCircle,
  AlertCircle,
  TrendingUp,
  BarChart3,
  Target,
  Globe
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Google Search Console Integration",
  description: "Connect Google Search Console to Datapad for comprehensive SEO performance analysis and search optimization insights.",
};

export default function GoogleSearchConsoleIntegrationPage() {
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
              src="/images/integrations/google-searchconsole.png" 
              alt="Google Search Console logo"
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
            />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Google Search Console Integration</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Connect your Google Search Console to analyze SEO performance, search rankings, 
          and get AI-powered insights for organic search optimization.
        </p>
      </div>

      {/* Overview */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">What You'll Get</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <Search className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Search Performance</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Track clicks, impressions, CTR, and average position for your search queries.
            </p>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Ranking Analysis</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Monitor keyword rankings, search visibility, and organic traffic trends.
            </p>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <Target className="h-4 w-4 text-primary" />
              <h4 className="font-medium">SEO Opportunities</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Identify content optimization opportunities and technical SEO issues.
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Key Metrics Tracked</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Search Performance</h3>
            <div className="p-4 rounded-lg border bg-muted/20">
              <ul className="text-sm space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Total clicks and impressions
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Click-through rates (CTR)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Average search position
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Query performance data
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Page-level search metrics
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Technical SEO</h3>
            <div className="p-4 rounded-lg border bg-muted/20">
              <ul className="text-sm space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Indexing status and coverage
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Core Web Vitals metrics
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Mobile usability issues
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Security and manual actions
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Sitemap submission status
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Connection Steps */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">How to Connect Google Search Console</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium">
                1
              </div>
              <div>
                <h4 className="font-medium mb-2">Verify Your Website</h4>
                <p className="text-sm text-muted-foreground">
                  Ensure your website is verified in Google Search Console.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium">
                2
              </div>
              <div>
                <h4 className="font-medium mb-2">Grant Datapad Access</h4>
                <p className="text-sm text-muted-foreground">
                  Use OAuth to securely connect your Search Console account to Datapad.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium">
                3
              </div>
              <div>
                <h4 className="font-medium mb-2">Start Analysis</h4>
                <p className="text-sm text-muted-foreground">
                  Begin analyzing your SEO performance with AI-powered insights.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-4 rounded-lg border bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
              <h4 className="font-medium mb-2 text-blue-700 dark:text-blue-300">Prerequisites</h4>
              <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                <li>• Verified website in Search Console</li>
                <li>• Google account with access permissions</li>
                <li>• Website with some search traffic</li>
                <li>• Search Console data history</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg border bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800">
              <h4 className="font-medium mb-2 text-amber-700 dark:text-amber-300">Data Sync</h4>
              <ul className="text-sm text-amber-600 dark:text-amber-400 space-y-1">
                <li>• Historical data: Up to 16 months</li>
                <li>• Sync frequency: Daily</li>
                <li>• Data delay: 1-3 days</li>
                <li>• Query limit: Google API limits apply</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI Insights */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">AI-Powered SEO Insights</h2>
        <div className="space-y-6">
          <div className="p-6 rounded-lg border bg-muted/20">
            <h3 className="text-lg font-medium mb-4">Example AI Queries</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border bg-background">
                <div className="text-sm text-muted-foreground mb-2">Ask Datapad:</div>
                <div className="font-medium mb-2">"Which keywords have the highest potential for ranking improvements?"</div>
                <div className="text-xs text-muted-foreground">Identifies optimization opportunities based on position and CTR</div>
              </div>
              <div className="p-4 rounded-lg border bg-background">
                <div className="text-sm text-muted-foreground mb-2">Ask Datapad:</div>
                <div className="font-medium mb-2">"Compare organic search performance with Google Ads traffic"</div>
                <div className="text-xs text-muted-foreground">Cross-platform search marketing analysis</div>
              </div>
              <div className="p-4 rounded-lg border bg-background">
                <div className="text-sm text-muted-foreground mb-2">Ask Datapad:</div>
                <div className="font-medium mb-2">"What pages are losing search visibility this month?"</div>
                <div className="text-xs text-muted-foreground">Identifies content that needs attention</div>
              </div>
              <div className="p-4 rounded-lg border bg-background">
                <div className="text-sm text-muted-foreground mb-2">Ask Datapad:</div>
                <div className="font-medium mb-2">"Analyze seasonal trends in organic search traffic"</div>
                <div className="text-xs text-muted-foreground">Seasonal SEO performance patterns and forecasting</div>
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
              Use AI chat to ask questions about your SEO performance
            </p>
          </Link>
          <Link href="/docs/features/dashboards" className="p-4 rounded-lg border hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Create Dashboards</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Build custom SEO performance dashboards
            </p>
          </Link>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t">
        <Link href="/docs/integrations/google-analytics">
          <Button variant="outline" className="gap-2">
            <ArrowRight className="h-4 w-4 rotate-180" />
            Google Analytics
          </Button>
        </Link>
        <Link href="/docs/integrations/mixpanel">
          <Button className="gap-2">
            Mixpanel
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
