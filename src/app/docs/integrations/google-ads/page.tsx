import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Database, 
  ArrowRight, 
  CheckCircle, 
  ExternalLink,
  Search,
  BarChart3,
  TrendingUp,
  DollarSign,
  Target,
  Users,
  MousePointer
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Google Ads Integration",
  description: "Connect Google Ads to Datapad and analyze your advertising performance with AI-powered insights.",
};

export default function GoogleAdsIntegrationPage() {
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
              src="/images/integrations/google-ads.png" 
              alt="Google Ads logo"
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
            />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Google Ads Integration</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Connect your Google Ads account to Datapad and unlock AI-powered insights for campaign optimization, 
          budget allocation, and performance analysis.
        </p>
      </div>

      {/* Overview */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">What You'll Get</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Performance Insights</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Track impressions, clicks, CTR, conversions, and cost metrics across all campaigns.
            </p>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="h-4 w-4 text-primary" />
              <h4 className="font-medium">ROI Analysis</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Analyze return on ad spend (ROAS), cost per acquisition (CPA), and budget efficiency.
            </p>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <Target className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Audience Insights</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Understand demographics, interests, and behavior patterns of your best-performing audiences.
            </p>
          </div>
        </div>
      </section>

      {/* Prerequisites */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Before You Connect</h2>
        <div className="p-4 rounded-lg border bg-muted/20">
          <h3 className="font-medium mb-3">Requirements</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Active Google Ads account with campaign data
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Admin or Standard access to the Google Ads account
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Google account with 2-factor authentication enabled (recommended)
            </li>
          </ul>
        </div>
      </section>

      {/* Connection Steps */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Connection Steps</h2>
        
        {/* Step 1 */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary font-medium text-sm">1</div>
            <h3 className="text-lg font-medium">Navigate to Integrations</h3>
          </div>
          <div className="ml-10 space-y-2">
            <p className="text-muted-foreground">In your Datapad workspace:</p>
            <ol className="text-sm text-muted-foreground space-y-1">
              <li>1. Go to Settings → Integrations</li>
              <li>2. Find "Google Ads" in the Advertising section</li>
              <li>3. Click "Connect Account"</li>
            </ol>
          </div>
        </div>

        {/* Step 2 */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary font-medium text-sm">2</div>
            <h3 className="text-lg font-medium">Authorize Access</h3>
          </div>
          <div className="ml-10 space-y-3">
            <p className="text-muted-foreground">You'll be redirected to Google to authorize access:</p>
            <div className="p-3 rounded border bg-background">
              <ol className="text-sm space-y-1">
                <li>1. Sign in to your Google account</li>
                <li>2. Select the Google Ads account to connect</li>
                <li>3. Review the permissions requested by Datapad</li>
                <li>4. Click "Allow" to grant access</li>
              </ol>
            </div>
            <div className="p-3 rounded border border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800">
              <p className="text-sm text-amber-700 dark:text-amber-300">
                ⚠️ <strong>Permissions:</strong> Datapad only requests read-only access to your Google Ads data. We cannot modify campaigns or billing settings.
              </p>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary font-medium text-sm">3</div>
            <h3 className="text-lg font-medium">Select Accounts & Data</h3>
          </div>
          <div className="ml-10 space-y-3">
            <p className="text-muted-foreground">Choose which accounts and data to sync:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-3 rounded border bg-background">
                <h4 className="font-medium text-sm mb-2">Account Selection</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Select specific ad accounts</li>
                  <li>• Choose campaign types to include</li>
                  <li>• Set historical data range (recommended: 2 years)</li>
                </ul>
              </div>
              <div className="p-3 rounded border bg-background">
                <h4 className="font-medium text-sm mb-2">Sync Frequency</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Real-time: Every 15 minutes</li>
                  <li>• Hourly: For detailed analysis</li>
                  <li>• Daily: For basic reporting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary font-medium text-sm">4</div>
            <h3 className="text-lg font-medium">Initial Data Sync</h3>
          </div>
          <div className="ml-10 space-y-2">
            <p className="text-muted-foreground">Wait for the initial data synchronization to complete:</p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Small accounts (&lt; 10 campaigns): 2-5 minutes</li>
              <li>• Medium accounts (10-100 campaigns): 5-15 minutes</li>
              <li>• Large accounts (100+ campaigns): 15-30 minutes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Available Metrics */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Available Metrics</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Campaign Performance</h3>
            <div className="p-4 rounded-lg border bg-muted/20">
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Impressions & Impression Share</li>
                <li>• Clicks & Click-through Rate (CTR)</li>
                <li>• Cost per Click (CPC)</li>
                <li>• Quality Score</li>
                <li>• Search Lost IS (Budget & Rank)</li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Conversion Tracking</h3>
            <div className="p-4 rounded-lg border bg-muted/20">
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Conversions & Conversion Rate</li>
                <li>• Cost per Acquisition (CPA)</li>
                <li>• Return on Ad Spend (ROAS)</li>
                <li>• Conversion Value</li>
                <li>• Attribution Models</li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Audience Data</h3>
            <div className="p-4 rounded-lg border bg-muted/20">
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Demographics (Age, Gender)</li>
                <li>• Geographic Performance</li>
                <li>• Device Performance</li>
                <li>• Audience Segments</li>
                <li>• Time of Day Performance</li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Keyword Insights</h3>
            <div className="p-4 rounded-lg border bg-muted/20">
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Search Terms & Keywords</li>
                <li>• Match Types Performance</li>
                <li>• Negative Keywords</li>
                <li>• Keyword Competitiveness</li>
                <li>• Landing Page Performance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI-Powered Insights */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">AI-Powered Insights</h2>
        <p className="text-muted-foreground">
          Once connected, Datapad's AI will automatically analyze your Google Ads data to provide actionable insights:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-2">Optimization Recommendations</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Budget reallocation suggestions</li>
              <li>• Keyword bid optimization</li>
              <li>• Ad copy performance analysis</li>
              <li>• Landing page recommendations</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-2">Anomaly Detection</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Sudden performance drops/spikes</li>
              <li>• Budget overspend alerts</li>
              <li>• Quality score changes</li>
              <li>• Competitive landscape shifts</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Example Queries */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Example AI Queries</h2>
        <p className="text-muted-foreground">
          Ask these types of questions to get insights from your Google Ads data:
        </p>
        <div className="space-y-3">
          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-2">Campaign Performance</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• "Which campaigns had the highest ROAS last month?"</li>
              <li>• "Show me conversion rates by device type"</li>
              <li>• "What's our average cost per acquisition by campaign?"</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-2">Optimization Insights</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• "Which keywords are underperforming?"</li>
              <li>• "Recommend budget changes for better ROI"</li>
              <li>• "Show me audiences with the lowest CPA"</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-2">Competitive Analysis</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• "How is my impression share trending?"</li>
              <li>• "What's my search lost IS due to budget vs rank?"</li>
              <li>• "Show me quality score improvements over time"</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Troubleshooting</h2>
        <div className="space-y-4">
          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-2">Common Issues</h4>
            <div className="space-y-3 text-sm">
              <div>
                <strong>Can't see all ad accounts:</strong> Ensure you have admin or standard access to all accounts you want to connect.
              </div>
              <div>
                <strong>Missing recent data:</strong> Google Ads API has a 3-hour delay for most metrics. Check again later.
              </div>
              <div>
                <strong>Connection failed:</strong> Try disconnecting and reconnecting. Ensure your Google account has 2FA enabled.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t">
        <Link href="/docs/integrations">
          <Button variant="outline" className="gap-2">
            <ArrowRight className="h-4 w-4 rotate-180" />
            All Integrations
          </Button>
        </Link>
        <Link href="/docs/integrations/facebook-ads">
          <Button className="gap-2">
            Facebook Ads Integration
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
