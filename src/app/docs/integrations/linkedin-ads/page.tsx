import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  ArrowRight, 
  CheckCircle,
  AlertCircle,
  DollarSign,
  Users,
  Target,
  BarChart3,
  ExternalLink
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "LinkedIn Ads Integration",
  description: "Connect LinkedIn Ads to Datapad for professional B2B advertising analytics and lead generation insights.",
};

export default function LinkedInAdsIntegrationPage() {
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
              src="/images/integrations/linkedin-ads.png" 
              alt="LinkedIn Ads logo"
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
            />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">LinkedIn Ads Integration</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Connect your LinkedIn Ads account to analyze B2B campaign performance, lead quality, 
          and get AI-powered insights for professional targeting and networking strategies.
        </p>
      </div>

      {/* Overview */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">What You'll Get</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-4 w-4 text-primary" />
              <h4 className="font-medium">B2B Campaign Analytics</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Track professional audience engagement, lead generation, and conversion metrics.
            </p>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <Users className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Audience Insights</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Analyze professional demographics, job titles, companies, and industries.
            </p>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <Target className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Lead Quality Analysis</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Evaluate lead scoring, conversion paths, and ROI from professional networks.
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Key Metrics Tracked</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Campaign Performance</h3>
            <div className="p-4 rounded-lg border bg-muted/20">
              <ul className="text-sm space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Impressions and reach
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Click-through rates (CTR)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Cost per click (CPC)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Lead generation forms
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Conversion tracking
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Professional Analytics</h3>
            <div className="p-4 rounded-lg border bg-muted/20">
              <ul className="text-sm space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Job function targeting
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Company size metrics
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Industry performance
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Seniority level analysis
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Geographic targeting
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Connection Steps */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">How to Connect LinkedIn Ads</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium">
                1
              </div>
              <div>
                <h4 className="font-medium mb-2">Access LinkedIn Campaign Manager</h4>
                <p className="text-sm text-muted-foreground">
                  Log in to your LinkedIn Campaign Manager account and ensure you have admin access.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium">
                2
              </div>
              <div>
                <h4 className="font-medium mb-2">Generate API Access</h4>
                <p className="text-sm text-muted-foreground">
                  Create a LinkedIn Marketing Developer Platform application and get your API credentials.
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
                  Add your LinkedIn Ads credentials in Datapad and authorize the connection.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-4 rounded-lg border bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
              <h4 className="font-medium mb-2 text-blue-700 dark:text-blue-300">Prerequisites</h4>
              <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                <li>• Active LinkedIn Campaign Manager account</li>
                <li>• Admin access to ad accounts</li>
                <li>• LinkedIn Marketing Developer Platform access</li>
                <li>• Active advertising campaigns</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg border bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800">
              <h4 className="font-medium mb-2 text-amber-700 dark:text-amber-300">Data Sync</h4>
              <ul className="text-sm text-amber-600 dark:text-amber-400 space-y-1">
                <li>• Historical data: Up to 24 months</li>
                <li>• Sync frequency: Every 6 hours</li>
                <li>• Data delay: 24-48 hours</li>
                <li>• Attribution window: 1-90 days</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI Insights */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">AI-Powered LinkedIn Ads Insights</h2>
        <div className="space-y-6">
          <div className="p-6 rounded-lg border bg-muted/20">
            <h3 className="text-lg font-medium mb-4">Example AI Queries</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border bg-background">
                <div className="text-sm text-muted-foreground mb-2">Ask Datapad:</div>
                <div className="font-medium mb-2">"Which job functions have the highest conversion rates for our B2B campaigns?"</div>
                <div className="text-xs text-muted-foreground">Analyzes lead quality by professional targeting criteria</div>
              </div>
              <div className="p-4 rounded-lg border bg-background">
                <div className="text-sm text-muted-foreground mb-2">Ask Datapad:</div>
                <div className="font-medium mb-2">"Compare LinkedIn Ads ROI with other B2B advertising channels"</div>
                <div className="text-xs text-muted-foreground">Cross-platform B2B advertising performance analysis</div>
              </div>
              <div className="p-4 rounded-lg border bg-background">
                <div className="text-sm text-muted-foreground mb-2">Ask Datapad:</div>
                <div className="font-medium mb-2">"What company sizes generate the most qualified leads?"</div>
                <div className="text-xs text-muted-foreground">Optimizes targeting based on firmographic data</div>
              </div>
              <div className="p-4 rounded-lg border bg-background">
                <div className="text-sm text-muted-foreground mb-2">Ask Datapad:</div>
                <div className="font-medium mb-2">"Analyze LinkedIn campaign performance by industry verticals"</div>
                <div className="text-xs text-muted-foreground">Industry-specific campaign optimization insights</div>
              </div>
            </div>
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
              <li>• <strong>API permissions:</strong> Ensure your LinkedIn app has Marketing API access</li>
              <li>• <strong>Data delays:</strong> LinkedIn Ads data may have 24-48 hour delays</li>
              <li>• <strong>Campaign access:</strong> Verify you have access to all ad accounts you want to sync</li>
              <li>• <strong>Attribution windows:</strong> Check attribution settings for accurate conversion tracking</li>
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
              Use AI chat to ask questions about your LinkedIn Ads performance
            </p>
          </Link>
          <Link href="/docs/features/dashboards" className="p-4 rounded-lg border hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Create Dashboards</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Build custom B2B advertising dashboards and reports
            </p>
          </Link>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t">
        <Link href="/docs/integrations/facebook-ads">
          <Button variant="outline" className="gap-2">
            <ArrowRight className="h-4 w-4 rotate-180" />
            Facebook Ads
          </Button>
        </Link>
        <Link href="/docs/integrations/tiktok-ads">
          <Button className="gap-2">
            TikTok Ads
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
