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
  Eye,
  Target,
  ThumbsUp,
  MessageSquare,
  Share2,
  Video
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { DocSection } from "@/components/docs/doc-section";
import { FeatureGrid } from "@/components/docs/feature-grid";

export const metadata: Metadata = {
  title: "Facebook Page Integration",
  description: "Connect Facebook Page to Datapad for comprehensive social media analytics and audience engagement insights using natural language queries.",
};

export default function FacebookIntegrationPage() {
  const features = [
    {
      icon: ThumbsUp,
      title: "Page Performance Analytics",
      description: "Track post reach, engagement, page likes, and follower growth across all your Facebook page content."
    },
    {
      icon: Users,
      title: "Audience Demographics", 
      description: "Analyze your page followers' age, gender, location, and interests to optimize content strategy."
    },
    {
      icon: Video,
      title: "Content Optimization",
      description: "Monitor video views, photo engagement, and link clicks to understand what content resonates most."
    }
  ];

const exampleQueries = [
  "What's my Facebook page engagement rate this month?",
  "Which posts had the highest reach last week?",
  "Show me follower demographics by age and location",
  "How do video posts perform vs photo posts?",
  "What time do my followers engage most with content?",
  "Which content gets the most shares and comments?",
];

const availableMetrics = [
  { name: "Page Likes", description: "Total page likes and new likes over time" },
  { name: "Post Reach", description: "Number of unique people who saw your posts" },
  { name: "Engagement Rate", description: "Likes, comments, shares, and clicks as percentage of reach" },
  { name: "Video Views", description: "Video play counts and view duration" },
  { name: "Page Views", description: "How many people viewed your page" },
  { name: "Fan Demographics", description: "Age, gender, and location of your page followers" },
  { name: "Content Performance", description: "Performance by post type and content format" },
  { name: "Optimal Timing", description: "Best times to post based on audience activity" },
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
              src="/images/integrations/facebook.png"
              alt="Facebook Page logo"
              width={48}
              height={48}
              className="w-12 h-12 object-contain"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Facebook Page</h1>
            <p className="text-xl text-muted-foreground">
              Analyze your Facebook page performance and audience engagement using natural language
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Badge variant="secondary" className="gap-1">
            <ThumbsUp className="h-3 w-3" />
            Social Media
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
                  <p className="font-medium">Facebook Business Page</p>
                  <p className="text-sm text-muted-foreground">
                    You need a Facebook Business Page (not personal profile) with published content
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <p className="font-medium">Page Admin Access</p>
                  <p className="text-sm text-muted-foreground">
                    You must have Admin or Editor permissions on the Facebook Page
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <p className="font-medium">Content Publishing History</p>
                  <p className="text-sm text-muted-foreground">
                    Your page should have a history of published posts to analyze engagement trends
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
                <p className="text-muted-foreground">- Find "Facebook Page" in the list of data sources.</p>
                {/* Screenshot of integrations page */}
                <div className="rounded-lg overflow-hidden border">
                  <Image
                    src="/images/docs/fb-connect.png"
                    alt="Facebook Page integration in Datapad - Navigate to integrations and click Connect"
                    width={800}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                
                <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                  <Copy className="h-4 w-4 text-muted-foreground" />
                  <code className="text-sm">Workspace → Data → Add New Source → Facebook Page</code>
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
            <h3 className="text-xl font-semibold">Authenticate with Facebook</h3>
          </div>
          
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  - Click "Connect Facebook Page" and you'll be redirected to Facebook's OAuth flow. You will be asked to grant access to Datapad. Accept it.
                </p>
                
                <Alert>
                  <Shield className="h-4 w-4" />
                  <AlertDescription>
                    Datapad uses OAuth 2.0 for secure authentication. We only request read-only access to your Facebook Page insights and analytics.
                  </AlertDescription>
                </Alert>
                
                {/* Screenshot of OAuth consent screen */}
                <div className="rounded-lg overflow-hidden border">
                  <Image
                    src="/images/docs/fb-oauth.png"
                    alt="Facebook OAuth consent screen for Facebook Page integration"
                    width={800}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium">Permissions Requested:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Read access to Facebook Page insights and analytics</li>
                    <li>• View page posts and basic page information</li>
                    <li>• Access to audience demographics and engagement metrics</li>
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
            <h3 className="text-xl font-semibold">Select Facebook Page</h3>
          </div>
          
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  - Choose which Facebook Page you want to connect to Datapad.
                </p>
                
                {/* Screenshot of page selection */}
                <div className="rounded-lg overflow-hidden border">
                  <Image
                    src="/images/docs/fb-account-select.png"
                    alt="Select Facebook Page to connect to Datapad"
                    width={800}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">💡 Pro Tip</h4>
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    You can connect multiple Facebook Pages. Start with your main business page that has the most active audience and content.
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
          Once connected, you can analyze all your Facebook Page data using natural language queries.
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
                  <span className="text-sm font-medium">Fan Count (Total Likes)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">Followers Count</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">Total Historical Check-Ins</span>
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
                  <span className="text-sm font-medium">Page Name</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">About</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">Category</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">Website</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">Page Link</span>
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
          Here are some example questions you can ask once your Facebook Page data is connected:
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
            <li>• Ask about content performance ("which posts get the most engagement")</li>
            <li>• Request audience insights ("what demographics follow my page")</li>
            <li>• Compare content types ("video vs photo post performance")</li>
            <li>• Analyze timing ("when do my followers engage most with content")</li>
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
                  <h4 className="font-medium mb-1">Page not showing up</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    If your Facebook Page doesn't appear in the list:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Verify you have Admin or Editor access to the page</li>
                    <li>• Check that the page is published and not in draft mode</li>
                    <li>• Ensure you're signed in with the correct Facebook account</li>
                  </ul>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-medium mb-1">Limited insights data</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    If some analytics are not available:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Facebook requires a minimum number of page likes for detailed insights</li>
                    <li>• Some metrics may have delays of up to 48 hours</li>
                    <li>• Demographic data requires sufficient audience size</li>
                  </ul>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-medium mb-1">Data synchronization issues</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    If data is not syncing properly:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Facebook has API rate limits that may cause delays</li>
                    <li>• Try disconnecting and reconnecting the integration</li>
                    <li>• Check if your page permissions have changed recently</li>
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
