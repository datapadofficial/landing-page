import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  ArrowRight, 
  CheckCircle,
  AlertCircle,
  Users,
  Target,
  BarChart3,
  Play,
  Heart,
  Share2
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "TikTok Ads Integration",
  description: "Connect TikTok Ads to Datapad for short-form video advertising analytics and Gen Z audience insights.",
};

export default function TikTokAdsIntegrationPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="bg-muted/50">
            Advertising Integration
          </Badge>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm border">
            <Image 
              src="/images/integrations/tiktok-ads.png" 
              alt="TikTok Ads logo"
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
            />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">TikTok Ads Integration</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Connect your TikTok Ads account to analyze short-form video campaign performance, 
          audience engagement, and get AI-powered insights for viral content strategies.
        </p>
      </div>

      {/* Overview */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">What You'll Get</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <Play className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Video Performance</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Track video views, completion rates, and engagement metrics for short-form content.
            </p>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <Users className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Gen Z Analytics</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Understand younger audience behavior, trends, and viral content patterns.
            </p>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Trend Analysis</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Identify trending hashtags, sounds, and content formats driving engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Key Metrics Tracked</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Video Engagement</h3>
            <div className="p-4 rounded-lg border bg-muted/20">
              <ul className="text-sm space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Video views and reach
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  View completion rates
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Likes, shares, comments
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Click-through rates
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Conversion tracking
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Audience Insights</h3>
            <div className="p-4 rounded-lg border bg-muted/20">
              <ul className="text-sm space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Age and gender demographics
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Geographic distribution
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Interest categories
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Device and platform data
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Behavioral patterns
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Connection Steps */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">How to Connect TikTok Ads</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium">
                1
              </div>
              <div>
                <h4 className="font-medium mb-2">Access TikTok Ads Manager</h4>
                <p className="text-sm text-muted-foreground">
                  Log in to your TikTok Ads Manager account and ensure you have admin access.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium">
                2
              </div>
              <div>
                <h4 className="font-medium mb-2">Enable API Access</h4>
                <p className="text-sm text-muted-foreground">
                  Create a TikTok Marketing API application and get your API credentials.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium">
                3
              </div>
              <div>
                <h4 className="font-medium mb-2">Connect to Datapad</h4>
                <p className="text-sm text-muted-foreground">
                  Add your TikTok Ads credentials in Datapad and authorize the connection.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-4 rounded-lg border bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
              <h4 className="font-medium mb-2 text-blue-700 dark:text-blue-300">Prerequisites</h4>
              <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                <li>• Active TikTok Ads Manager account</li>
                <li>• Admin access to ad accounts</li>
                <li>• TikTok Marketing API approval</li>
                <li>• Active video campaigns</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg border bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800">
              <h4 className="font-medium mb-2 text-amber-700 dark:text-amber-300">Data Sync</h4>
              <ul className="text-sm text-amber-600 dark:text-amber-400 space-y-1">
                <li>• Historical data: Up to 12 months</li>
                <li>• Sync frequency: Every 6 hours</li>
                <li>• Data delay: 24-48 hours</li>
                <li>• Attribution window: 1-28 days</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI Insights */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">AI-Powered TikTok Ads Insights</h2>
        <div className="space-y-6">
          <div className="p-6 rounded-lg border bg-muted/20">
            <h3 className="text-lg font-medium mb-4">Example AI Queries</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border bg-background">
                <div className="text-sm text-muted-foreground mb-2">Ask Datapad:</div>
                <div className="font-medium mb-2">"Which video formats have the highest completion rates?"</div>
                <div className="text-xs text-muted-foreground">Analyzes video performance by format and duration</div>
              </div>
              <div className="p-4 rounded-lg border bg-background">
                <div className="text-sm text-muted-foreground mb-2">Ask Datapad:</div>
                <div className="font-medium mb-2">"Compare TikTok Ads engagement with other social platforms"</div>
                <div className="text-xs text-muted-foreground">Cross-platform social media advertising analysis</div>
              </div>
              <div className="p-4 rounded-lg border bg-background">
                <div className="text-sm text-muted-foreground mb-2">Ask Datapad:</div>
                <div className="font-medium mb-2">"What trending hashtags drive the most conversions?"</div>
                <div className="text-xs text-muted-foreground">Trend analysis for viral content optimization</div>
              </div>
              <div className="p-4 rounded-lg border bg-background">
                <div className="text-sm text-muted-foreground mb-2">Ask Datapad:</div>
                <div className="font-medium mb-2">"Analyze Gen Z audience behavior patterns"</div>
                <div className="text-xs text-muted-foreground">Demographic-specific engagement insights</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">TikTok Advertising Best Practices</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-3">Content Strategy</h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Create authentic, native-feeling content</li>
              <li>• Keep videos short and engaging (15-30 seconds)</li>
              <li>• Use trending sounds and hashtags</li>
              <li>• Focus on vertical video format (9:16)</li>
              <li>• Include clear calls-to-action</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-3">Targeting Tips</h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Target younger demographics (Gen Z, Millennials)</li>
              <li>• Use interest-based targeting</li>
              <li>• Leverage lookalike audiences</li>
              <li>• Test different creative variations</li>
              <li>• Monitor trend cycles closely</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Troubleshooting</h2>
        <div className="space-y-4">
          <div className="p-4 rounded-lg border border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="h-4 w-4 text-amber-500" />
              <h4 className="font-medium text-amber-700 dark:text-amber-300">Common Issues</h4>
            </div>
            <ul className="text-sm text-amber-600 dark:text-amber-400 space-y-1">
              <li>• <strong>API approval:</strong> TikTok Marketing API requires approval process</li>
              <li>• <strong>Data delays:</strong> TikTok data may have 24-48 hour delays</li>
              <li>• <strong>Campaign access:</strong> Ensure access to all ad accounts you want to sync</li>
              <li>• <strong>Video metrics:</strong> Some advanced video metrics require minimum spend</li>
            </ul>
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
              Use AI chat to ask questions about your TikTok Ads performance
            </p>
          </Link>
          <Link href="/docs/features/dashboards" className="p-4 rounded-lg border hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Create Dashboards</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Build custom social media advertising dashboards
            </p>
          </Link>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t">
        <Link href="/docs/integrations/linkedin-ads">
          <Button variant="outline" className="gap-2">
            <ArrowRight className="h-4 w-4 rotate-180" />
            LinkedIn Ads
          </Button>
        </Link>
        <Link href="/docs/integrations/google-searchconsole">
          <Button className="gap-2">
            Google Search Console
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
