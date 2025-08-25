import type { Metadata } from "next";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  
  CheckCircle, 
  
  
  Shield, 
  Clock,
  Users,
  AlertCircle,
  Copy,
  Target,
  Activity
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { DocSection } from "@/components/docs/doc-section";
import { FeatureGrid } from "@/components/docs/feature-grid";

export const metadata: Metadata = {
  title: "Mixpanel Integration",
  description: "Connect Mixpanel to Datapad for advanced product analytics and user behavior insights with AI-powered analysis.",
};

export default function MixpanelIntegrationPage() {
  const features = [
    {
      icon: Activity,
      title: "Event Analytics",
      description: "Track user actions, feature usage, and product interactions with detailed event-based analysis."
    },
    {
      icon: Users,
      title: "User Journey Analysis", 
      description: "Understand user behavior patterns, retention, and conversion funnels across your product."
    },
    {
      icon: Target,
      title: "Cohort & Segmentation",
      description: "Analyze user segments, cohort behavior, and feature adoption to optimize product strategy."
    }
  ];

const exampleQueries = [
  "What's my user retention rate for the last 30 days?",
  "Which features correlate with higher user retention?",
  "Show me conversion funnel performance",
  "What's my most popular feature this month?",
  "How does mobile vs web user behavior compare?",
  "Which user segments have the highest lifetime value?",
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
              src="/images/integrations/mixpanel.png"
              alt="Mixpanel logo"
              width={48}
              height={48}
              className="w-12 h-12 object-contain"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Mixpanel</h1>
            <p className="text-xl text-muted-foreground">
              Analyze your product analytics and user behavior using natural language
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Badge variant="secondary" className="gap-1">
            <Activity className="h-3 w-3" />
            Product Analytics
          </Badge>
          <Badge variant="secondary" className="gap-1">
            <Clock className="h-3 w-3" />
            2 min setup
          </Badge>
          <Badge variant="secondary" className="gap-1">
            <Shield className="h-3 w-3" />
            API Key
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
                  <p className="font-medium">Mixpanel Account</p>
                  <p className="text-sm text-muted-foreground">
                    You need an active Mixpanel account with project data
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <p className="font-medium">Admin Access</p>
                  <p className="text-sm text-muted-foreground">
                    You must have admin or owner permissions to generate service account credentials
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <p className="font-medium">Event Data</p>
                  <p className="text-sm text-muted-foreground">
                    Your Mixpanel project should have historical event data to analyze
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
                <p className="text-muted-foreground">- Find "Mixpanel" in the list of data sources.</p>
                {/* Screenshot of integrations page */}
                <div className="rounded-lg overflow-hidden border">
                  <Image
                    src="/images/docs/mixpanel-connect.png"
                    alt="Mixpanel integration in Datapad - Navigate to integrations and click Connect"
                    width={800}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                
                <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                  <Copy className="h-4 w-4 text-muted-foreground" />
                  <code className="text-sm">Workspace → Data → Add New Source → Mixpanel</code>
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
            <h3 className="text-xl font-semibold">Generate Service Account</h3>
          </div>
          
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  - In your Mixpanel project, go to Settings → Service Accounts and create a new service account with appropriate permissions.
                </p>
                
                <Alert>
                  <Shield className="h-4 w-4" />
                  <AlertDescription>
                    Create a service account with read-only permissions for security. Datapad only needs access to query your data.
                  </AlertDescription>
                </Alert>
                
                {/* Screenshot of service account creation */}
                <div className="rounded-lg overflow-hidden border">
                  <Image
                    src="/images/docs/mixpanel-service-account.png"
                    alt="Create Mixpanel service account for Datapad integration"
                    width={800}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium">Required Permissions:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Read access to project data</li>
                    <li>• Access to events and user profiles</li>
                    <li>• Permission to query funnels and cohorts</li>
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
            <h3 className="text-xl font-semibold">Connect to Datapad</h3>
          </div>
          
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  - Copy your Mixpanel project credentials and paste them into Datapad.
                </p>
                
                {/* Screenshot of credential input */}
                <div className="rounded-lg overflow-hidden border">
                  <Image
                    src="/images/docs/mixpanel-credentials.png"
                    alt="Enter Mixpanel credentials in Datapad"
                    width={800}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">💡 Pro Tip</h4>
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    You can connect multiple Mixpanel projects. Start with your main product project and add more later as needed.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Separator />

      {/* Example Queries */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Example Queries</h2>
        <p className="text-muted-foreground">
          Here are some example questions you can ask once your Mixpanel data is connected:
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
            <li>• Ask about user behavior ("how do users progress through onboarding")</li>
            <li>• Request cohort analysis ("show retention by signup month")</li>
            <li>• Compare user segments ("how do power users differ from casual users")</li>
            <li>• Analyze feature usage ("which features drive the most engagement")</li>
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
                  <h4 className="font-medium mb-1">Authentication failed</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    If you're having trouble connecting:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Verify your service account credentials are correct</li>
                    <li>• Check that the service account has the necessary permissions</li>
                    <li>• Ensure your Mixpanel project ID is accurate</li>
                  </ul>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-medium mb-1">Missing event data</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    If some events are not appearing:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Check if events were tracked during the requested time period</li>
                    <li>• Verify event names match exactly (case-sensitive)</li>
                    <li>• Some events may have data retention limits in Mixpanel</li>
                  </ul>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-medium mb-1">Slow query performance</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    If queries are taking too long:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Try limiting your time range for large datasets</li>
                    <li>• Use specific event names rather than broad queries</li>
                    <li>• Consider using sampling for very large cohorts</li>
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