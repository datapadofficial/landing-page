import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  BarChart3, 
  CheckCircle, 
  ArrowRight, 
  ExternalLink, 
  Shield, 
  Clock,
  Users,
  MousePointer,
  TrendingUp,
  Globe,
  AlertCircle,
  PlayCircle,
  Copy,
  Eye
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Google Analytics Integration",
  description: "Connect Google Analytics to Datapad and analyze your website traffic using natural language queries.",
};

const exampleQueries = [
  "What's my website traffic trend for the last 30 days?",
  "Which pages have the highest bounce rate?",
  "Show me conversion rates by traffic source",
  "What's my most popular content this month?",
  "How is my mobile vs desktop traffic performing?",
  "Which countries drive the most revenue?",
];

const availableMetrics = [
  { name: "Sessions", description: "Number of visits to your website" },
  { name: "Page Views", description: "Total number of pages viewed" },
  { name: "Users", description: "Unique visitors to your site" },
  { name: "Bounce Rate", description: "Percentage of single-page sessions" },
  { name: "Conversion Rate", description: "Goal completion rate" },
  { name: "Revenue", description: "E-commerce revenue tracking" },
  { name: "Traffic Sources", description: "Where your visitors come from" },
  { name: "Demographics", description: "Age, gender, and location data" },
];

export default function GoogleAnalyticsIntegrationPage() {
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
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <BarChart3 className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Google Analytics</h1>
            <p className="text-xl text-muted-foreground">
              Analyze your website traffic and user behavior using natural language
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Badge variant="secondary" className="gap-1">
            <Globe className="h-3 w-3" />
            Analytics
          </Badge>
          <Badge variant="secondary" className="gap-1">
            <Clock className="h-3 w-3" />
            5 min setup
          </Badge>
          <Badge variant="secondary" className="gap-1">
            <Shield className="h-3 w-3" />
            OAuth 2.0
          </Badge>
        </div>
      </div>

      {/* Quick Start */}
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PlayCircle className="h-5 w-5 text-primary" />
            Quick Start
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1">
              <p className="text-sm text-muted-foreground mb-3">
                Connect Google Analytics in 3 simple steps and start analyzing your website data immediately.
              </p>
              <ul className="space-y-1 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>OAuth authentication</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Select properties & views</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Start asking questions</span>
                </li>
              </ul>
            </div>
            <Button asChild size="lg" className="gap-2">
              <Link href="https://app.datapad.io/integrations/google-analytics">
                <ExternalLink className="h-4 w-4" />
                Connect Now
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Prerequisites */}
      <div className="space-y-4">
        <h2 id="prerequisites" className="text-2xl font-semibold">Prerequisites</h2>
        <Card>
          <CardContent className="pt-6">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <p className="font-medium">Google Analytics Account</p>
                  <p className="text-sm text-muted-foreground">
                    You need an active Google Analytics account with at least one property set up
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <p className="font-medium">Admin or Edit Access</p>
                  <p className="text-sm text-muted-foreground">
                    You must have at least "Read & Analyze" permissions for the properties you want to connect
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <p className="font-medium">Data Collection</p>
                  <p className="text-sm text-muted-foreground">
                    Your website should have Google Analytics tracking code installed and collecting data
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
                  In your Datapad workspace, go to the Integrations page and find Google Analytics.
                </p>
                
                {/* Placeholder for screenshot */}
                <div className="bg-muted/30 border-2 border-dashed border-muted-foreground/20 rounded-lg p-8 text-center">
                  <BarChart3 className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Screenshot: Integrations page</p>
                </div>
                
                <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                  <Copy className="h-4 w-4 text-muted-foreground" />
                  <code className="text-sm">Workspace → Integrations → Google Analytics</code>
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
                  Click "Connect Google Analytics" and you'll be redirected to Google's OAuth flow.
                </p>
                
                <Alert>
                  <Shield className="h-4 w-4" />
                  <AlertDescription>
                    Datapad uses OAuth 2.0 for secure authentication. We never store your Google credentials and only request the minimum permissions needed to read your Analytics data.
                  </AlertDescription>
                </Alert>
                
                {/* Placeholder for OAuth screenshot */}
                <div className="bg-muted/30 border-2 border-dashed border-muted-foreground/20 rounded-lg p-8 text-center">
                  <Shield className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Screenshot: Google OAuth consent screen</p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium">Permissions Requested:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Read access to Google Analytics reporting data</li>
                    <li>• View your Analytics account and property information</li>
                    <li>• Access to historical and real-time data</li>
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
            <h3 className="text-xl font-semibold">Select Properties & Views</h3>
          </div>
          
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Choose which Google Analytics properties and views you want to connect to Datapad.
                </p>
                
                {/* Placeholder for property selection screenshot */}
                <div className="bg-muted/30 border-2 border-dashed border-muted-foreground/20 rounded-lg p-8 text-center">
                  <Eye className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Screenshot: Property and view selection</p>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">💡 Pro Tip</h4>
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    You can connect multiple properties and views. If you're unsure, start with your main website property - you can always add more later.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Step 4 */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-semibold text-sm">
              4
            </div>
            <h3 className="text-xl font-semibold">Verify Connection</h3>
          </div>
          
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Once connected, Datapad will verify the connection and start syncing your data.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Connection Verified
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Data sync begins immediately and typically completes within 5-10 minutes
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium flex items-center gap-2">
                      <Clock className="h-4 w-4 text-blue-500" />
                      Historical Data
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      We sync up to 2 years of historical data for comprehensive analysis
                    </p>
                  </div>
                </div>
                
                <Button asChild className="gap-2">
                  <Link href="/docs/get-started/quickstart#step-2">
                    <ArrowRight className="h-4 w-4" />
                    Start Asking Questions
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Separator />

      {/* Available Data & Metrics */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Available Data & Metrics</h2>
        <p className="text-muted-foreground">
          Once connected, you can analyze all your Google Analytics data using natural language queries.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {availableMetrics.map((metric) => (
            <Card key={metric.name} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{metric.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{metric.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator />

      {/* Example Queries */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Example Queries</h2>
        <p className="text-muted-foreground">
          Here are some example questions you can ask once your Google Analytics data is connected:
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
            <li>• Ask for comparisons ("how does mobile traffic compare to desktop")</li>
            <li>• Request specific metrics ("show conversion rate by traffic source")</li>
            <li>• Ask for insights ("what are my top performing pages")</li>
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
                  <h4 className="font-medium mb-1">No data appearing</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    If you don't see any data after connecting:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Wait 5-10 minutes for initial sync to complete</li>
                    <li>• Verify your website has the GA tracking code installed</li>
                    <li>• Check that you selected the correct property and view</li>
                    <li>• Ensure your Google Analytics account has data for the selected time period</li>
                  </ul>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-medium mb-1">Permission errors</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    If you're getting permission errors:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Verify you have at least "Read & Analyze" access to the GA property</li>
                    <li>• Contact your GA admin to grant the necessary permissions</li>
                    <li>• Try disconnecting and reconnecting the integration</li>
                  </ul>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-medium mb-1">Data seems incomplete</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    If some data is missing:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Google Analytics data can take 24-48 hours to appear</li>
                    <li>• Some metrics may be filtered out due to GA sampling</li>
                    <li>• Check if there are any filters applied in your GA view</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Support */}
      <Card className="bg-gradient-to-r from-primary/5 to-blue-500/5 border-primary/20">
        <CardHeader>
          <CardTitle>Need Help?</CardTitle>
          <CardDescription>
            Our support team is here to help you get the most out of your Google Analytics integration
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="outline">
              <Link href="mailto:support@datapad.io?subject=Google Analytics Integration Help">
                Contact Support
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="https://calendly.com/datapad/integration-help" target="_blank" className="gap-2">
                Book Integration Call <ExternalLink className="h-3 w-3" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/docs/guides/effective-queries">
                Query Writing Guide
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
