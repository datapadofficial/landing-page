import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Database, 
  CheckCircle, 
  
  
  Shield, 
  Clock,
  Code,
  Lock,
  AlertCircle,
  Copy,
  Info
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { DocSection } from "@/components/docs/doc-section";
import { FeatureGrid } from "@/components/docs/feature-grid";

export const metadata: Metadata = {
  title: "PostgreSQL Integration",
  description: "Connect your PostgreSQL database to Datapad and query your data using natural language instead of SQL.",
};

const features = [
  {
    icon: Database,
    title: "Natural Language Queries",
    description: "Ask questions in plain English instead of writing SQL queries to get insights from your PostgreSQL data."
  },
  {
    icon: Shield,
    title: "Secure Connections",
    description: "SSL encryption and read-only access ensure your database remains secure while providing real-time data access."
  },
  {
    icon: Code,
    title: "AI-Powered SQL Generation",
    description: "Advanced AI automatically converts your questions into optimized SQL queries that you can view and learn from."
  }
];

const exampleQueries = [
  "Show me the top 10 customers by revenue this month",
  "What's the average order value by customer segment?",
  "How many new users signed up each day this week?",
  "Which products have the highest profit margin?",
  "Show me monthly revenue growth for the last year",
  "What's our customer retention rate by cohort?",
];

const connectionMethods = [
  {
    title: "Database Connection Form",
    description: "Connect directly using your database credentials",
    icon: Database,
    security: "SSL encryption",
  },
  {
    title: "Connection String",
    description: "Use a PostgreSQL connection string",
    icon: Code,
    security: "SSL encryption",
  },
  {
    title: "SSH Tunnel",
    description: "Connect through an SSH tunnel for extra security",
    icon: Shield,
    security: "Maximum security",
  },
];

export default function PostgreSQLIntegrationPage() {
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
              src="/images/integrations/postgres.png"
              alt="PostgreSQL logo"
              width={48}
              height={48}
              className="w-12 h-12 object-contain"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight">PostgreSQL</h1>
            <p className="text-xl text-muted-foreground">
              Query your PostgreSQL database using natural language instead of SQL
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Badge variant="secondary" className="gap-1">
            <Database className="h-3 w-3" />
            Database
          </Badge>
          <Badge variant="secondary" className="gap-1">
            <Clock className="h-3 w-3" />
            5 min setup
          </Badge>
          <Badge variant="secondary" className="gap-1">
            <Shield className="h-3 w-3" />
            SSL Encrypted
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
                  <p className="font-medium">PostgreSQL Database</p>
                  <p className="text-sm text-muted-foreground">
                    A running PostgreSQL instance (version 9.5 or higher) with your data
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <p className="font-medium">Database Credentials</p>
                  <p className="text-sm text-muted-foreground">
                    Host, port, database name, username, and password with read access
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <p className="font-medium">Network Access</p>
                  <p className="text-sm text-muted-foreground">
                    Database should be accessible from the internet or through VPN/SSH tunnel
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <p className="font-medium">SSL Certificate</p>
                  <p className="text-sm text-muted-foreground">
                    SSL encryption for secure data transmission
                  </p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Separator />

      {/* Connection Methods */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Connection Methods</h2>
        <p className="text-muted-foreground">
          Choose the connection method that best fits your security requirements and infrastructure setup.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {connectionMethods.map((method) => (
            <Card key={method.title} className={`hover:shadow-md transition-shadow`}>
              <CardHeader className="text-center">
                <div className={`mx-auto w-12 h-12 rounded-lg flex items-center justify-center mb-2 bg-muted`}>
                  <method.icon className={`h-6 w-6 text-muted-foreground`} />
                </div>
                <CardTitle className="text-lg text-center">
                  {method.title}
                </CardTitle>
                <CardDescription className="text-center">{method.description}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex items-center justify-center gap-2 text-sm">
                  <Shield className="h-4 w-4 text-green-500" />
                  <span className="text-muted-foreground">{method.security}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator />

      {/* Connection Guide */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Connection Guide</h2>
        
        {/* Step 1: Connect in Datapad */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-semibold text-sm">
              1
            </div>
            <h3 className="text-xl font-semibold">Access PostgreSQL Integration</h3>
          </div>
          
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Navigate to Integrations in Datapad and select PostgreSQL:
                </p>
                
                <div className="rounded-lg overflow-hidden border">
                  <Image
                    src="/images/docs/psql-connect.png"
                    alt="PostgreSQL connect screen on Datapad UI"
                    width={800}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Step 2: Fill Connection String */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-semibold text-sm">
              2
            </div>
            <h3 className="text-xl font-semibold">Fill Connection String</h3>
          </div>
          
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Enter your PostgreSQL database connection string:
                </p>
                
                <div className="rounded-lg overflow-hidden border">
                  <Image
                    src="/images/docs/psql-cs.png"
                    alt="PostgreSQL connection form in Datapad"
                    width={800}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">Required Fields:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                      <li>• Connection Name</li>
                      <li>• Connection String</li>
                      <li>• Database Schema</li>
                    </ul>
                  </div>
                </div>
                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertDescription>
                    The PostgreSQL connection string format is: postgresql://USERNAME:PASSWORD@HOST:PORT/DATABASE_NAME
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Step 3: Fill Connection Form */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-semibold text-sm">
              3
            </div>
            <h3 className="text-xl font-semibold">Fill Connection Details</h3>
          </div>
          
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Enter your PostgreSQL database connection details:
                </p>
                
                <div className="rounded-lg overflow-hidden border">
                  <Image
                    src="/images/docs/psql-form.png"
                    alt="PostgreSQL connection form in Datapad"
                    width={800}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">Required Fields:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                      <li>• Database Host</li>
                      <li>• Port (default: 5432)</li>
                      <li>• Database Name</li>
                      <li>• Username</li>
                      <li>• Password</li>
                      <li>• SSL Mode</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Create Read-Only User */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <h3 className="text-xl font-semibold">Create Read-Only User (Recommended)</h3>
          </div>
          
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  For security, create a dedicated user with read-only permissions:
                </p>
                
                <div className="bg-muted p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-sm">SQL Commands</h4>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Copy className="h-3 w-3" />
                      Copy
                    </Button>
                  </div>
                  <pre className="text-sm text-muted-foreground overflow-x-auto">
{`-- Create a new user for Datapad
CREATE USER datapad_readonly WITH PASSWORD 'secure_password';

-- Grant connect permission to the database
GRANT CONNECT ON DATABASE your_database TO datapad_readonly;

-- Grant usage on schema (usually 'public')
GRANT USAGE ON SCHEMA public TO datapad_readonly;

-- Grant select permissions on all tables
GRANT SELECT ON ALL TABLES IN SCHEMA public TO datapad_readonly;

-- Grant permissions on future tables
ALTER DEFAULT PRIVILEGES IN SCHEMA public 
GRANT SELECT ON TABLES TO datapad_readonly;`}
                  </pre>
                </div>
                
                <Alert>
                  <Lock className="h-4 w-4" />
                  <AlertDescription>
                    Replace your_database with your actual database name and choose a strong password for the datapad_readonly user.
                  </AlertDescription>
                </Alert>
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
          Here are some example questions you can ask once your PostgreSQL data is connected:
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
            <li>• Include table names when possible ("orders table", "users table")</li>
            <li>• Ask for comparisons to get more insights ("compare X vs Y")</li>
            <li>• Use business terms that align with your data schema</li>
          </ul>
        </div>
      </div>

      <Separator />

      {/* Behind the Scenes */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Behind the Scenes</h2>
        <Card className="bg-gradient-to-r from-primary/5 to-blue-500/5 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              AI-Powered SQL Generation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Datapad automatically converts your natural language questions into optimized SQL queries. 
              You can always view the generated SQL to learn and verify the results.
            </p>
          </CardContent>
        </Card>
      </div>

      <Separator />

      {/* Troubleshooting */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Troubleshooting</h2>
        
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
                <h4 className="font-medium mb-1">Connection timeout</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  If the connection times out:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Check firewall settings and whitelist Datapad IPs</li>
                  <li>• Verify the host and port are correct</li>
                  <li>• Ensure PostgreSQL is accepting connections</li>
                  <li>• Test connectivity from your network</li>
                </ul>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-medium mb-1">Authentication failed</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  If authentication fails:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Verify username and password are correct</li>
                  <li>• Check if the user has access to the database</li>
                  <li>• Ensure pg_hba.conf allows connections from Datapad</li>
                </ul>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-medium mb-1">SSL connection issues</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  If SSL connection fails:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Verify SSL is enabled on your PostgreSQL server</li>
                  <li>• Check if you have valid SSL certificates</li>
                  <li>• Try different SSL modes (require, prefer, disable)</li>
                  <li>• Contact support for help with certificate issues</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
    </div>
  );
}
