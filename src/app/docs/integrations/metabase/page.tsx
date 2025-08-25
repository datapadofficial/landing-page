import type { Metadata } from "next";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  
  CheckCircle, 
  
  
  Shield, 
  Clock,
  AlertCircle,
  Copy,
  Database,
  Brain,
  Share2
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { DocSection } from "@/components/docs/doc-section";
import { FeatureGrid } from "@/components/docs/feature-grid";

export const metadata: Metadata = {
  title: "Metabase Integration",
  description: "Connect Metabase to Datapad for enhanced business intelligence analytics and cross-platform data insights.",
};

export default function MetabaseIntegrationPage() {
  const features = [
    {
      icon: Database,
      title: "BI Data Integration",
      description: "Access your Metabase dashboards, queries, and datasets with seamless data integration capabilities."
    },
    {
      icon: Brain,
      title: "AI-Enhanced Analytics", 
      description: "Combine Metabase insights with Datapad's AI to get deeper analysis and automated recommendations."
    },
    {
      icon: Share2,
      title: "Cross-Platform Insights",
      description: "Merge Metabase data with other sources for comprehensive business intelligence and reporting."
    }
  ];

const exampleQueries = [
  "What insights are available from my Metabase dashboards?",
  "Summarize key trends from our existing BI reports",
  "Show me performance data from connected databases",
  "Which Metabase queries show the most significant changes?",
  "How does our data compare across different time periods?",
  "Create a unified view combining Metabase with other data sources?",
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
              src="/images/integrations/metabase.png"
              alt="Metabase logo"
              width={48}
              height={48}
              className="w-12 h-12 object-contain"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Metabase</h1>
            <p className="text-xl text-muted-foreground">
              Analyze your business intelligence data and existing dashboards using natural language
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Badge variant="secondary" className="gap-1">
            <Database className="h-3 w-3" />
            Business Intelligence
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
                  <p className="font-medium">Metabase Instance</p>
                  <p className="text-sm text-muted-foreground">
                    You need access to a Metabase instance (cloud or self-hosted) with existing dashboards
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <p className="font-medium">Admin Access</p>
                  <p className="text-sm text-muted-foreground">
                    You must have admin permissions to generate API keys in Metabase
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <p className="font-medium">Existing Content</p>
                  <p className="text-sm text-muted-foreground">
                    Your Metabase instance should have dashboards, questions, or models to analyze
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
                <p className="text-muted-foreground">- Find "Metabase" in the list of data sources.</p>
                {/* Screenshot of integrations page */}
                <div className="rounded-lg overflow-hidden border">
                  <Image
                    src="/images/docs/metabase-connect.png"
                    alt="Metabase integration in Datapad - Navigate to integrations and click Connect"
                    width={800}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                
                <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                  <Copy className="h-4 w-4 text-muted-foreground" />
                  <code className="text-sm">Workspace → Data → Add New Source → Metabase</code>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>


        <Separator />

        {/* Step 2 */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-semibold text-sm">
              2
            </div>
            <h3 className="text-xl font-semibold">Connect to Datapad</h3>
          </div>
          
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  - You need to enter your Metabase server URL and API key in Datapad to establish the connection.
                </p>
                
                {/* Screenshot of connection setup */}
                <div className="rounded-lg overflow-hidden border">
                  <Image
                    src="/images/docs/metabase-auth.png"
                    alt="Generate Metabase API key for Datapad integration"
                    width={800}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium">Required Information:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Metabase server URL (e.g., https://your-metabase.com)</li>
                    <li>• API key with create and read permissions</li>
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
            <h3 className="text-xl font-semibold">Generate API Key</h3>
          </div>
          
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  - In your Metabase admin panel, go to Settings → Admin settings → Authentication and create a new API key.
                </p>
                
                <Alert>
                  <Shield className="h-4 w-4" />
                  <AlertDescription>
                    Generate an API key with appropriate permissions. Datapad only needs read access to dashboards and questions.
                  </AlertDescription>
                </Alert>
                
                {/* Screenshot of API key generation */}
                <div className="rounded-lg overflow-hidden border">
                  <Image
                    src="/images/docs/metabase-api-key.png"
                    alt="Generate Metabase API key for Datapad integration"
                    width={800}
                    height={400}
                    className="w-full h-auto"
                  />
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
            <h3 className="text-xl font-semibold">How to find the URL</h3>
          </div>
          
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  - In your Metabase panel, go to the URL bar and copy the URL.
                </p>
                
                {/* Screenshot of connection setup */}
                <div className="rounded-lg overflow-hidden border">
                  <Image
                    src="/images/docs/metabase-url.png"
                    alt="Enter Metabase connection details in Datapad"
                    width={800}
                    height={400}
                    className="w-full h-auto"
                  />
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
          Here are some example questions you can ask once your Metabase data is connected:
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
            <li>• Reference your existing dashboards ("insights from sales dashboard")</li>
            <li>• Ask about specific questions/queries ("results from customer analysis query")</li>
            <li>• Request cross-dashboard analysis ("compare metrics across different dashboards")</li>
            <li>• Combine with other data sources ("merge Metabase data with Google Analytics")</li>
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
                  <h4 className="font-medium mb-1">Connection failed</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    If you're unable to connect to Metabase:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Verify your Metabase server URL is correct and accessible</li>
                    <li>• Check that your API key has the necessary permissions</li>
                    <li>• Ensure your Metabase instance allows API access</li>
                  </ul>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-medium mb-1">Missing dashboards or questions</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    If some content is not appearing:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Check that the content is published and not archived</li>
                    <li>• Verify your API key has access to the specific collections</li>
                    <li>• Ensure the dashboards have been created and contain data</li>
                  </ul>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-medium mb-1">Slow data loading</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    If data is loading slowly:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Large dashboards may take time to sync initially</li>
                    <li>• Consider optimizing complex queries in Metabase first</li>
                    <li>• Check your Metabase server performance and capacity</li>
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