import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Database, 
  ArrowRight, 
  CheckCircle, 
  Code,
  BarChart3,
  Shield,
  Zap,
  Globe,
  Lock
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "MongoDB Integration",
  description: "Connect MongoDB to Datapad for advanced NoSQL data analysis and AI-powered insights from your document-based collections.",
};

export default function MongoDBIntegrationPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="bg-muted/50">
            Database Integration
          </Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">MongoDB Integration</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Connect your MongoDB database to Datapad and leverage AI-powered analytics for NoSQL data, 
          document analysis, and complex aggregation insights.
        </p>
      </div>

      {/* Overview */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">What You'll Get</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <BarChart3 className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Document Analytics</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Analyze document structures, field distributions, and data patterns across collections.
            </p>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <Code className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Aggregation Pipeline</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              AI-generated MongoDB aggregation pipelines from natural language queries.
            </p>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Performance Insights</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Query performance analysis, index recommendations, and optimization suggestions.
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
              MongoDB instance (Atlas, self-hosted, or cloud provider)
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Database user with read access to collections you want to analyze
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Network access configured (whitelist Datapad IPs if needed)
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              MongoDB version 4.0 or higher (recommended: 5.0+)
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
            <h3 className="text-lg font-medium">Prepare MongoDB Connection</h3>
          </div>
          <div className="ml-10 space-y-3">
            <p className="text-muted-foreground">Set up a dedicated user for Datapad with appropriate permissions:</p>
            <div className="p-3 rounded border bg-background">
              <h4 className="font-medium text-sm mb-2">MongoDB User Setup</h4>
              <pre className="text-xs text-muted-foreground bg-muted p-2 rounded overflow-x-auto">
{`// Create read-only user for Datapad
use admin
db.createUser({
  user: "datapad_reader",
  pwd: "your_secure_password",
  roles: [
    { role: "read", db: "your_database" },
    { role: "read", db: "admin" }
  ]
})`}
              </pre>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary font-medium text-sm">2</div>
            <h3 className="text-lg font-medium">Configure Network Access</h3>
          </div>
          <div className="ml-10 space-y-3">
            <p className="text-muted-foreground">Ensure Datapad can reach your MongoDB instance:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-3 rounded border bg-background">
                <h4 className="font-medium text-sm mb-2">MongoDB Atlas</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Add Datapad IPs to whitelist</li>
                  <li>• Enable authentication</li>
                  <li>• Copy connection string</li>
                </ul>
              </div>
              <div className="p-3 rounded border bg-background">
                <h4 className="font-medium text-sm mb-2">Self-hosted</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Configure firewall rules</li>
                  <li>• Enable SSL/TLS (recommended)</li>
                  <li>• Verify port accessibility</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary font-medium text-sm">3</div>
            <h3 className="text-lg font-medium">Add Integration in Datapad</h3>
          </div>
          <div className="ml-10 space-y-3">
            <p className="text-muted-foreground">Connect your MongoDB instance:</p>
            <div className="p-3 rounded border bg-background">
              <ol className="text-sm space-y-1">
                <li>1. Go to Settings → Integrations in Datapad</li>
                <li>2. Find "MongoDB" in the Databases section</li>
                <li>3. Click "Connect Database"</li>
                <li>4. Enter connection details (host, port, database, credentials)</li>
                <li>5. Test connection and select collections to sync</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary font-medium text-sm">4</div>
            <h3 className="text-lg font-medium">Schema Discovery & Sync</h3>
          </div>
          <div className="ml-10 space-y-2">
            <p className="text-muted-foreground">Datapad will analyze your MongoDB collections:</p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Discovers document schemas and field types</li>
              <li>• Analyzes data distributions and patterns</li>
              <li>• Creates optimized indexes for common queries</li>
              <li>• Initial sync: 5-30 minutes depending on data size</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Connection Details */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Connection Configuration</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Connection String Format</h3>
            <div className="p-4 rounded-lg border bg-muted/20">
              <div className="space-y-3 text-sm">
                <div>
                  <strong>Standard:</strong>
                  <code className="block text-xs bg-muted p-2 rounded mt-1">
                    mongodb://username:password@host:port/database
                  </code>
                </div>
                <div>
                  <strong>Atlas:</strong>
                  <code className="block text-xs bg-muted p-2 rounded mt-1">
                    mongodb+srv://username:password@cluster.mongodb.net/database
                  </code>
                </div>
                <div>
                  <strong>Replica Set:</strong>
                  <code className="block text-xs bg-muted p-2 rounded mt-1">
                    mongodb://user:pass@host1,host2,host3/db?replicaSet=rs0
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Security Options</h3>
            <div className="p-4 rounded-lg border bg-muted/20">
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-center gap-2">
                  <Shield className="h-3 w-3 text-green-500" />
                  SSL/TLS encryption support
                </li>
                <li className="flex items-center gap-2">
                  <Lock className="h-3 w-3 text-green-500" />
                  Authentication mechanisms (SCRAM, X.509)
                </li>
                <li className="flex items-center gap-2">
                  <Globe className="h-3 w-3 text-green-500" />
                  IP whitelist configuration
                </li>
                <li className="flex items-center gap-2">
                  <Database className="h-3 w-3 text-green-500" />
                  Read-only access enforcement
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">AI-Powered MongoDB Analysis</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-2">Natural Language to Aggregation</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Convert plain English queries into MongoDB aggregation pipelines:
            </p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• "Show me average order value by customer segment"</li>
              <li>• "Find the most popular products last month"</li>
              <li>• "Group users by registration date and activity level"</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-2">Schema Analysis</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Automatically analyze document structures:
            </p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Field type distribution and consistency</li>
              <li>• Missing field patterns</li>
              <li>• Nested document complexity analysis</li>
              <li>• Array field statistics</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Example Queries */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Example AI Queries</h2>
        <p className="text-muted-foreground">
          Ask these types of questions to analyze your MongoDB data:
        </p>
        <div className="space-y-3">
          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-2">Document Analysis</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• "How many documents are missing the 'email' field?"</li>
              <li>• "What's the average array length for 'tags' field?"</li>
              <li>• "Show me documents with nested objects deeper than 3 levels"</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-2">Performance Optimization</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• "Which queries are taking the longest to execute?"</li>
              <li>• "Recommend indexes for better performance"</li>
              <li>• "Show me collections with high write/read ratios"</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-2">Business Intelligence</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• "Calculate monthly revenue from orders collection"</li>
              <li>• "Show user engagement trends from events data"</li>
              <li>• "Find correlation between user attributes and purchases"</li>
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
                <strong>Connection timeout:</strong> Check firewall settings and ensure MongoDB is accessible from Datapad's IP addresses.
              </div>
              <div>
                <strong>Authentication failed:</strong> Verify username, password, and database permissions. Ensure user has read access to target collections.
              </div>
              <div>
                <strong>Slow schema discovery:</strong> Large collections may take time to analyze. Consider creating indexes on frequently queried fields.
              </div>
              <div>
                <strong>Missing collections:</strong> Ensure the user has read permissions on all databases and collections you want to analyze.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t">
        <Link href="/docs/integrations/facebook-ads">
          <Button variant="outline" className="gap-2">
            <ArrowRight className="h-4 w-4 rotate-180" />
            Facebook Ads Integration
          </Button>
        </Link>
        <Link href="/docs/integrations">
          <Button className="gap-2">
            All Integrations
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
