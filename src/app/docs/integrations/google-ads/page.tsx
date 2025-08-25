import type { Metadata } from "next";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  BarChart3,
  CheckCircle, 
  Shield, 
  Clock,
  AlertCircle,
  Copy,
  TrendingUp,
  Target,
  DollarSign
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { DocSection } from "@/components/docs/doc-section";
import { FeatureGrid } from "@/components/docs/feature-grid";

export const metadata: Metadata = {
  title: "Google Ads Integration",
  description: "Connect Google Ads to Datapad and analyze your advertising performance with AI-powered insights.",
};

export default function GoogleAdsIntegrationPage() {
  const features = [
    {
      icon: TrendingUp,
      title: "Performance Insights",
      description: "Track impressions, clicks, CTR, conversions, and cost metrics across all campaigns."
    },
    {
      icon: DollarSign,
      title: "ROI Analysis", 
      description: "Analyze return on ad spend (ROAS), cost per acquisition (CPA), and budget efficiency."
    },
    {
      icon: Target,
      title: "Audience Insights",
      description: "Understand demographics, interests, and behavior patterns of your best-performing audiences."
    }
  ];

const exampleQueries = [
  "What's my best performing campaign last month?",
  "Which keywords have the highest ROAS?",
  "Show me conversion rates by device type",
  "What's my average cost per acquisition by campaign?",
  "How does mobile vs desktop ad performance compare?",
  "Which audiences have the lowest CPA?",
];




  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/docs" className="hover:text-foreground">Docs</Link>
          <span>/</span>
          <Link href="/docs/integrations" className="hover:text-foreground">Integrations</Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center border shadow-sm">
            <Image
              src="/images/integrations/google-ads.png"
              alt="Google Ads logo"
              width={48}
              height={48}
              className="w-12 h-12 object-contain"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Google Ads</h1>
            <p className="text-xl text-muted-foreground">
              Analyze your advertising performance and campaign data using natural language
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Badge variant="secondary" className="gap-1">
            <Target className="h-3 w-3" />
            Advertising
          </Badge>
          <Badge variant="secondary" className="gap-1">
            <Clock className="h-3 w-3" />
            2 min setup
          </Badge>
          <Badge variant="secondary" className="gap-1">
            <Shield className="h-3 w-3" />
            OAuth 2.0
          </Badge>
        </div>
      </div>

      <DocSection title="What You'll Get">
        <FeatureGrid features={features} />
      </DocSection>

      {/* Prerequisites */}
      <div className="space-y-4">
        <h2 id="prerequisites" className="text-2xl font-semibold">Prerequisites</h2>
        <Card>
          <CardContent className="pt-6">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <p className="font-medium">Google Ads Account</p>
                  <p className="text-sm text-muted-foreground">
                    You need an active Google Ads account with running campaigns
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <p className="font-medium">Admin Access</p>
                  <p className="text-sm text-muted-foreground">
                    You must have admin or standard access to the Google Ads account
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <p className="font-medium">Campaign Data</p>
                  <p className="text-sm text-muted-foreground">
                    Your Google Ads account should have historical campaign data to analyze
                  </p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Separator />

      {/* Step-by-Step Connection Guide */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Connection Guide</h2>
        
        {/* Step 1 */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-semibold text-sm">
              1
            </div>
            <h3 className="text-xl font-semibold">Navigate to Integrations</h3>
          </div>
          
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  - In your Datapad workspace, click on the "Data" tab from the left sidebar. 
                </p>
                <p className="text-muted-foreground">- Then click on the "Add New Source" button</p>
                <p className="text-muted-foreground">- Find "Google Ads" in the list of data sources.</p>
                {/* Screenshot of integrations page */}
                <div className="rounded-lg overflow-hidden border">
                  <Image
                    src="/images/docs/gads-connect.png"
                    alt="Google Ads integration in Datapad - Navigate to integrations and click Connect"
                    width={800}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                
                <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                  <Copy className="h-4 w-4 text-muted-foreground" />
                  <code className="text-sm">Workspace → Data → Add New Source → Google Ads</code>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Step 2 */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-semibold text-sm">
              2
            </div>
            <h3 className="text-xl font-semibold">Authenticate with Google</h3>
          </div>
          
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  - Click "Connect Google Ads" and you'll be redirected to Google's OAuth flow. You will be asked to grant access to Datapad. Accept it.
                </p>
                
                <Alert>
                  <Shield className="h-4 w-4" />
                  <AlertDescription>
                    Datapad uses OAuth 2.0 for secure authentication. We only request read-only access to your Google Ads data.
                  </AlertDescription>
                </Alert>
                
                {/* Screenshot of OAuth consent screen */}
                <div className="rounded-lg overflow-hidden border">
                  <Image
                    src="/images/docs/gads-oauth.png"
                    alt="Google OAuth consent screen for Google Ads integration"
                    width={800}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium">Permissions Requested:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Read access to Google Ads campaign data</li>
                    <li>• View your Google Ads account information</li>
                    <li>• Access to performance metrics and reports</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Step 3 */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-semibold text-sm">
              3
            </div>
            <h3 className="text-xl font-semibold">Select Account to Connect</h3>
          </div>
          
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  - Choose which Google Ads account you want to connect to Datapad.
                </p>
                
                {/* Screenshot of account selection */}
                <div className="rounded-lg overflow-hidden border">
                  <Image
                    src="/images/docs/gads-account-select.png"
                    alt="Select Google Ads accounts to connect to Datapad"
                    width={800}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">💡 Pro Tip</h4>
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    You can connect multiple Google Ads accounts. If you're unsure, start with your main advertising account - you can always add more later.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Separator />

      {/* Available Metrics & Dimensions */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Available Metrics & Dimensions</h2>
        <p className="text-muted-foreground">
          Once connected, you can analyze all your Google Ads data using natural language queries.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Metrics Card */}
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Metrics
              </CardTitle>
              <CardDescription>
                Performance measurements you can analyze
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">Clicks</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">Conversions</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">Conversions Value</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">Engagements</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">Impressions</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">CTR</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">CPM</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">CPC</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">Cost</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Dimensions Card */}
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Target className="h-5 w-5" />
                Dimensions
              </CardTitle>
              <CardDescription>
                Ways to segment and filter your data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">Budget</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">Campaign Group</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">Campaign Id</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">Campaign Name</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">Campaign Status</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">Ad Group Name</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">Ad Group Status</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">Ad Name</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">Device</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">Date</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">Search Keywords</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">Bidding Strategy</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <Separator />

      {/* Example Queries */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Example Queries</h2>
        <p className="text-muted-foreground">
          Here are some example questions you can ask once your Google Ads data is connected:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {exampleQueries.map((query, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer group">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-medium mt-0.5">
                    {index + 1}
                  </div>
                  <p className="text-sm font-medium group-hover:text-primary transition-colors">
                    "{query}"
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-muted/50 p-4 rounded-lg">
          <h4 className="font-medium mb-2">💬 Natural Language Tips</h4>
          <ul className="text-sm text-muted-foreground space-y-1 ml-4">
            <li>• Be specific about time periods ("last 30 days", "this month vs last month")</li>
            <li>• Ask for comparisons ("how does mobile ads compare to desktop")</li>
            <li>• Request specific metrics ("show ROAS by campaign")</li>
            <li>• Ask for optimization insights ("which keywords should I bid higher on")</li>
          </ul>
        </div>
      </div>

      <Separator />

      {/* Troubleshooting */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Troubleshooting</h2>
        
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <AlertCircle className="h-5 w-5 text-orange-500" />
                Common Issues
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-1">Can't see all ad accounts</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    If you don't see all your Google Ads accounts:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Ensure you have admin or standard access to all accounts you want to connect</li>
                    <li>• Check that the accounts are active and not suspended</li>
                    <li>• Verify you're signed in with the correct Google account</li>
                  </ul>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-medium mb-1">Missing recent data</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    If recent campaign data is not showing:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Google Ads API has a 3-hour delay for most metrics</li>
                    <li>• Wait a few hours for the most recent data to appear</li>
                    <li>• Check if campaigns were active during the requested time period</li>
                  </ul>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-medium mb-1">Connection failed</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    If the connection is failing:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Try disconnecting and reconnecting the integration</li>
                    <li>• Ensure your Google account has 2FA enabled</li>
                    <li>• Clear your browser cache and try again</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
