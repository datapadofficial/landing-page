import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  CheckCircle, 
  TrendingUp,
  DollarSign,
  Target,
  Users,
  Heart,
  MessageCircle,
  Share2
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Facebook Ads Integration",
  description: "Connect Facebook Ads to Datapad for comprehensive social media advertising analytics and AI-powered optimization insights.",
};

export default function FacebookAdsIntegrationPage() {
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
              src="/images/integrations/facebook-ads.png" 
              alt="Facebook Ads logo"
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
            />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Facebook Ads Integration</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Connect your Facebook Ads account to analyze campaign performance, audience insights, 
          and get AI-powered recommendations for better social media advertising ROI.
        </p>
      </div>

      {/* Overview */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">What You'll Get</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Campaign Analytics</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Track reach, impressions, CTR, CPC, and conversion metrics across all Facebook and Instagram campaigns.
            </p>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <Users className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Audience Insights</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Analyze demographics, interests, behaviors, and custom audience performance in detail.
            </p>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="h-4 w-4 text-primary" />
              <h4 className="font-medium">ROI Optimization</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Optimize ROAS, CPA, and budget allocation across campaigns and ad sets.
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
              Facebook Business Manager account with active ad accounts
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Admin access to the Facebook ad accounts you want to connect
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Facebook Pixel installed on your website (for conversion tracking)
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Two-factor authentication enabled on Facebook account (recommended)
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
            <h3 className="text-lg font-medium">Access Integration Settings</h3>
          </div>
          <div className="ml-10 space-y-2">
            <p className="text-muted-foreground">In your Datapad workspace:</p>
            <ol className="text-sm text-muted-foreground space-y-1">
              <li>1. Navigate to Settings → Integrations</li>
              <li>2. Locate "Facebook Ads" in the Advertising section</li>
              <li>3. Click "Connect Account"</li>
            </ol>
          </div>
        </div>

        {/* Step 2 */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary font-medium text-sm">2</div>
            <h3 className="text-lg font-medium">Facebook Authorization</h3>
          </div>
          <div className="ml-10 space-y-3">
            <p className="text-muted-foreground">Complete the Facebook OAuth process:</p>
            <div className="p-3 rounded border bg-background">
              <ol className="text-sm space-y-1">
                <li>1. Log in to your Facebook account</li>
                <li>2. Review the permissions requested by Datapad</li>
                <li>3. Select the ad accounts you want to connect</li>
                <li>4. Grant access to read advertising insights</li>
              </ol>
            </div>
            <div className="p-3 rounded border border-blue-200 bg-blue-50 dark:bg-blue-950/20 dark:border-blue-800">
              <p className="text-sm text-blue-700 dark:text-blue-300">
                💡 <strong>Permissions:</strong> Datapad requests read-only access to ads insights. We cannot create, modify, or delete your campaigns.
              </p>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary font-medium text-sm">3</div>
            <h3 className="text-lg font-medium">Configure Data Sync</h3>
          </div>
          <div className="ml-10 space-y-3">
            <p className="text-muted-foreground">Choose your data sync preferences:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-3 rounded border bg-background">
                <h4 className="font-medium text-sm mb-2">Account & Campaign Selection</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Select specific ad accounts</li>
                  <li>• Include Facebook and Instagram campaigns</li>
                  <li>• Choose historical data period (max: 37 months)</li>
                </ul>
              </div>
              <div className="p-3 rounded border bg-background">
                <h4 className="font-medium text-sm mb-2">Update Frequency</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Real-time: Every 30 minutes</li>
                  <li>• Hourly: For detailed reporting</li>
                  <li>• Daily: For basic analytics</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary font-medium text-sm">4</div>
            <h3 className="text-lg font-medium">Initial Data Import</h3>
          </div>
          <div className="ml-10 space-y-2">
            <p className="text-muted-foreground">Data sync duration depends on account size:</p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Small accounts (1-5 campaigns): 3-5 minutes</li>
              <li>• Medium accounts (5-50 campaigns): 10-20 minutes</li>
              <li>• Large accounts (50+ campaigns): 20-45 minutes</li>
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
                <li>• Reach & Frequency</li>
                <li>• Impressions & CPM</li>
                <li>• Clicks & CTR</li>
                <li>• Cost per Click (CPC)</li>
                <li>• Video Views & View Rate</li>
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
                <li>• Attribution Windows</li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Engagement Metrics</h3>
            <div className="p-4 rounded-lg border bg-muted/20">
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Post Engagement Rate</li>
                <li>• Likes, Comments, Shares</li>
                <li>• Video Engagement</li>
                <li>• Page Likes & Follows</li>
                <li>• Social Actions</li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Audience Insights</h3>
            <div className="p-4 rounded-lg border bg-muted/20">
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Demographics (Age, Gender)</li>
                <li>• Location Performance</li>
                <li>• Device & Platform Breakdown</li>
                <li>• Custom Audience Performance</li>
                <li>• Lookalike Audience Effectiveness</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Example Queries */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Example AI Queries</h2>
        <p className="text-muted-foreground">
          Ask these types of questions to get insights from your Facebook Ads data:
        </p>
        <div className="space-y-3">
          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-2">Performance Analysis</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• "Which age group has the highest conversion rate?"</li>
              <li>• "Compare Instagram vs Facebook campaign performance"</li>
              <li>• "What's our average ROAS by campaign objective?"</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-2">Audience Optimization</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• "Which custom audiences perform best?"</li>
              <li>• "Show me lookalike audience effectiveness"</li>
              <li>• "What interests have the lowest CPA?"</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-2">Creative Performance</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• "Which ad formats have the highest engagement?"</li>
              <li>• "Compare video vs image ad performance"</li>
              <li>• "Show me creative fatigue patterns"</li>
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
                <strong>Missing ad accounts:</strong> Ensure you have admin access and the accounts are active in Business Manager.
              </div>
              <div>
                <strong>Incomplete data:</strong> Facebook Ads API may have delays up to 48 hours for some attribution metrics.
              </div>
              <div>
                <strong>Permission errors:</strong> Re-authorize if you've changed roles or if account access has been modified.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t">
        <Link href="/docs/integrations/google-ads">
          <Button variant="outline" className="gap-2">
            <ArrowRight className="h-4 w-4 rotate-180" />
            Google Ads Integration
          </Button>
        </Link>
        <Link href="/docs/integrations/mongodb">
          <Button className="gap-2">
            MongoDB Integration
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
