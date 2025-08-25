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
  Users,
  AlertCircle,
  Copy,
  Target,
  Briefcase,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { DocSection } from "@/components/docs/doc-section";
import { FeatureGrid } from "@/components/docs/feature-grid";

export const metadata: Metadata = {
  title: "LinkedIn Social Integration",
  description: "Connect LinkedIn to Datapad for professional content analytics and B2B social media insights using natural language queries.",
};

export default function LinkedInSocialIntegrationPage() {
  const features = [
    {
      icon: Briefcase,
      title: "Professional Content Analytics",
      description: "Track post engagement, impressions, and reach for your professional content and company updates."
    },
    {
      icon: Users,
      title: "Audience Insights", 
      description: "Analyze your professional network demographics, industry breakdown, and follower growth patterns."
    },
    {
      icon: MessageSquare,
      title: "Engagement Analysis",
      description: "Monitor likes, comments, shares, and click-through rates to optimize your LinkedIn content strategy."
    }
  ];

const exampleQueries = [
  "What's my post engagement rate for the last 30 days?",
  "Which content types get the most professional engagement?",
  "Show me follower growth by industry",
  "What's my most popular LinkedIn post this month?",
  "How does video vs text post performance compare?",
  "Which days of the week get the best engagement?",
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
              src="/images/integrations/linkedin-social.png"
              alt="LinkedIn logo"
              width={48}
              height={48}
              className="w-12 h-12 object-contain"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight">LinkedIn</h1>
            <p className="text-xl text-muted-foreground">
              Analyze your professional content performance and network insights using natural language
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Badge variant="secondary" className="gap-1">
            <Briefcase className="h-3 w-3" />
            Professional Social
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
                  <p className="font-medium">LinkedIn Personal or Company Page</p>
                  <p className="text-sm text-muted-foreground">
                    You need an active LinkedIn profile or company page with content history
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <p className="font-medium">Content Publishing History</p>
                  <p className="text-sm text-muted-foreground">
                    Your LinkedIn account should have posted content to analyze engagement metrics
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <p className="font-medium">LinkedIn Developer Access</p>
                  <p className="text-sm text-muted-foreground">
                    Access to LinkedIn's Marketing Developer Platform for API integration
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
                <p className="text-muted-foreground">- Find "LinkedIn" in the list of data sources.</p>
                {/* Screenshot of integrations page */}
                <div className="rounded-lg overflow-hidden border">
                  <Image
                    src="/images/docs/lsocial-connect.png"
                    alt="LinkedIn Social integration in Datapad - Navigate to integrations and click Connect"
                    width={800}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                
                <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                  <Copy className="h-4 w-4 text-muted-foreground" />
                  <code className="text-sm">Workspace → Data → Add New Source → LinkedIn</code>
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
            <h3 className="text-xl font-semibold">Authenticate with LinkedIn</h3>
          </div>
          
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  - Click "Connect LinkedIn" and you'll be redirected to LinkedIn's OAuth flow. You will be asked to grant access to Datapad. Accept it.
                </p>
                
                <Alert>
                  <Shield className="h-4 w-4" />
                  <AlertDescription>
                    Datapad uses OAuth 2.0 for secure authentication. We only request read-only access to your LinkedIn content and analytics data.
                  </AlertDescription>
                </Alert>
                
                {/* Screenshot of OAuth consent screen */}
                <div className="rounded-lg overflow-hidden border">
                  <Image
                    src="/images/docs/lsocial-oauth.png"
                    alt="LinkedIn OAuth consent screen for LinkedIn Social integration"
                    width={800}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium">Permissions Requested:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Read access to your LinkedIn profile and posts</li>
                    <li>• View engagement metrics and analytics data</li>
                    <li>• Access to follower demographics and insights</li>
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
            <h3 className="text-xl font-semibold">Select Profile to Connect</h3>
          </div>
          
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  - Choose which LinkedIn profile or company page you want to connect to Datapad.
                </p>
                
                {/* Screenshot of profile selection */}
                <div className="rounded-lg overflow-hidden border">
                  <Image
                    src="/images/docs/lsocial-account-select.png"
                    alt="Select LinkedIn profile or company page to connect to Datapad"
                    width={800}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">💡 Pro Tip</h4>
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    You can connect both your personal profile and company pages. Start with your most active profile to get the richest analytics data.
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
          Once connected, you can analyze all your LinkedIn social media data using natural language queries.
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
                  <span className="text-sm font-medium">Organic Followers</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">Paid Followers</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">Total Organic Followers (Lifetime)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">Total Paid Followers (Lifetime)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">Total Page Views</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">Desktop Page Views</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">Mobile Page Views</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">Overview Tab Page Views</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">Careers Page Views</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">Jobs Page Views</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">Life At Page Views</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">Unique Page Views</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">Custom Button Clicks</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">Post Impressions</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">Unique Impressions</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">Clicks</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">Likes</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">Comments</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">Shares</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">Engagement Rate</span>
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
                  <span className="text-sm font-medium">Date</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">Organization Id</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">Time Granularity</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">Share URN</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">UGC Post URN</span>
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
          Here are some example questions you can ask once your LinkedIn data is connected:
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
            <li>• Ask about professional content performance ("which posts get the most engagement")</li>
            <li>• Request network insights ("how is my follower base growing")</li>
            <li>• Compare content types ("video vs article performance")</li>
            <li>• Analyze timing ("best days and times to post for my audience")</li>
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
                  <h4 className="font-medium mb-1">Limited analytics access</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    If you're having trouble accessing analytics:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• LinkedIn's analytics API has usage limits for individual profiles</li>
                    <li>• Company page analytics require admin access to the page</li>
                    <li>• Some metrics require a minimum content history</li>
                  </ul>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-medium mb-1">Missing recent posts</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    If recent content is not appearing:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• LinkedIn analytics may have delays of 24-48 hours</li>
                    <li>• Check that posts are public and not restricted</li>
                    <li>• Verify the connected profile has posting permissions</li>
                  </ul>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-medium mb-1">API rate limiting</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    If data is loading slowly:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• LinkedIn has strict API rate limits for social data</li>
                    <li>• Initial sync may take longer for profiles with extensive content history</li>
                    <li>• Consider upgrading to LinkedIn's premium API access if available</li>
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
