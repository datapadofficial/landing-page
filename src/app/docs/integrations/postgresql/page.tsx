import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Database, 
  CheckCircle, 
  ArrowRight, 
  ExternalLink, 
  Shield, 
  Clock,
  Code,
  Lock,
  Server,
  AlertCircle,
  PlayCircle,
  Copy,
  Key,
  Globe
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PostgreSQL Integration",
  description: "Connect your PostgreSQL database to Datapad and query your data using natural language instead of SQL.",
};

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
    title: "Direct Connection",
    description: "Connect directly using your database credentials",
    icon: Database,
    recommended: true,
    security: "SSL encryption required",
  },
  {
    title: "Connection String",
    description: "Use a PostgreSQL connection string",
    icon: Code,
    recommended: false,
    security: "SSL encryption optional",
  },
  {
    title: "SSH Tunnel",
    description: "Connect through an SSH tunnel for extra security",
    icon: Shield,
    recommended: true,
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
          <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
            <Database className="h-8 w-8 text-white" />
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
            10 min setup
          </Badge>
          <Badge variant="secondary" className="gap-1">
            <Shield className="h-3 w-3" />
            SSL Encrypted
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
                Connect your PostgreSQL database and start querying with natural language in minutes.
              </p>
              <ul className="space-y-1 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Secure SSL connection</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>No SQL knowledge required</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Real-time data access</span>
                </li>
              </ul>
            </div>
            <Button asChild size="lg" className="gap-2">
              <Link href="https://app.datapad.io/integrations/postgresql">
                <ExternalLink className="h-4 w-4" />
                Connect Database
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
                  <p className="font-medium">SSL Certificate (Recommended)</p>
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
            <Card key={method.title} className={`hover:shadow-md transition-shadow ${method.recommended ? 'border-primary/50 bg-primary/5' : ''}`}>
              <CardHeader className="text-center">
                <div className={`mx-auto w-12 h-12 rounded-lg flex items-center justify-center mb-2 ${method.recommended ? 'bg-primary/20' : 'bg-muted'}`}>
                  <method.icon className={`h-6 w-6 ${method.recommended ? 'text-primary' : 'text-muted-foreground'}`} />
                </div>
                <CardTitle className="text-lg flex items-center gap-2">
                  {method.title}
                  {method.recommended && (
                    <Badge variant="secondary" className="text-xs">Recommended</Badge>
                  )}
                </CardTitle>
                <CardDescription>{method.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="h-4 w-4 text-green-500" />
                    <span className="text-muted-foreground">{method.security}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
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
            <h3 className="text-xl font-semibold">Gather Database Information</h3>
          </div>
          
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Collect the following information from your PostgreSQL database:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <h4 className="font-medium text-sm mb-1">Host & Port</h4>
                      <p className="text-xs text-muted-foreground">e.g., localhost:5432 or db.example.com:5432</p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <h4 className="font-medium text-sm mb-1">Database Name</h4>
                      <p className="text-xs text-muted-foreground">The specific database to connect to</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <h4 className="font-medium text-sm mb-1">Username & Password</h4>
                      <p className="text-xs text-muted-foreground">Credentials with read access to your data</p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <h4 className="font-medium text-sm mb-1">SSL Settings</h4>
                      <p className="text-xs text-muted-foreground">SSL mode and certificate if required</p>
                    </div>
                  </div>
                </div>
                
                <Alert>
                  <Lock className="h-4 w-4" />
                  <AlertDescription>
                    For security, we recommend creating a dedicated read-only user for Datapad rather than using your admin credentials.
                  </AlertDescription>
                </Alert>
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
                
                <div className="bg-yellow-50 dark:bg-yellow-950/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
                  <h4 className="font-medium text-yellow-900 dark:text-yellow-100 mb-2">⚡ Quick Setup</h4>
                  <p className="text-sm text-yellow-800 dark:text-yellow-200">
                    Replace <code>your_database</code> with your actual database name and choose a strong password for the datapad_readonly user.
                  </p>
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
            <h3 className="text-xl font-semibold">Connect in Datapad</h3>
          </div>
          
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Navigate to Integrations in Datapad and select PostgreSQL:
                </p>
                
                {/* Placeholder for connection form screenshot */}
                <div className="bg-muted/30 border-2 border-dashed border-muted-foreground/20 rounded-lg p-8 text-center">
                  <Database className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Screenshot: PostgreSQL connection form</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">Connection Form Fields:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                      <li>• Database Host</li>
                      <li>• Port (default: 5432)</li>
                      <li>• Database Name</li>
                      <li>• Username</li>
                      <li>• Password</li>
                      <li>• SSL Mode</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Advanced Options:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                      <li>• Connection Timeout</li>
                      <li>• Schema Selection</li>
                      <li>• SSH Tunnel Settings</li>
                      <li>• Custom Connection String</li>
                    </ul>
                  </div>
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
            <h3 className="text-xl font-semibold">Test & Verify Connection</h3>
          </div>
          
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Datapad will test the connection and verify access to your database:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Connection Tests
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-6">
                      <li>• Network connectivity</li>
                      <li>• Authentication verification</li>
                      <li>• SSL certificate validation</li>
                      <li>• Schema access confirmation</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium flex items-center gap-2">
                      <Database className="h-4 w-4 text-blue-500" />
                      Schema Discovery
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-6">
                      <li>• Table and view detection</li>
                      <li>• Column type mapping</li>
                      <li>• Relationship discovery</li>
                      <li>• Sample data analysis</li>
                    </ul>
                  </div>
                </div>
                
                <Button asChild className="gap-2">
                  <Link href="/docs/get-started/quickstart#step-2">
                    <ArrowRight className="h-4 w-4" />
                    Start Querying Your Data
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Separator />

      {/* Example Queries */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Example Natural Language Queries</h2>
        <p className="text-muted-foreground">
          Once connected, you can ask questions about your data without writing SQL:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {exampleQueries.map((query, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer group">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-medium mt-0.5">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium group-hover:text-primary transition-colors mb-2">
                      "{query}"
                    </p>
                    <p className="text-xs text-muted-foreground">
                      AI will generate and execute the SQL automatically
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Card className="bg-gradient-to-r from-primary/5 to-blue-500/5 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              Behind the Scenes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Datapad automatically converts your natural language questions into optimized SQL queries. 
              You can always view the generated SQL to learn and verify the results.
            </p>
            <Button asChild variant="outline" size="sm">
              <Link href="/docs/features/text-to-sql-python">
                Learn More About Text-to-SQL
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <Separator />

      {/* Security & Best Practices */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Security & Best Practices</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Shield className="h-5 w-5 text-green-500" />
                Security Measures
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>SSL/TLS encryption in transit</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Read-only database access</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Encrypted credential storage</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>IP whitelisting support</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>SOC 2 Type II compliance</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Server className="h-5 w-5 text-blue-500" />
                Best Practices
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Use dedicated read-only user</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Enable SSL encryption</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Regularly rotate credentials</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Monitor connection logs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Test with staging data first</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
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
                  <li>• Try connecting with the same credentials using psql</li>
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

      {/* Support */}
      <Card className="bg-gradient-to-r from-primary/5 to-blue-500/5 border-primary/20">
        <CardHeader>
          <CardTitle>Need Help?</CardTitle>
          <CardDescription>
            Our team is here to help you connect your PostgreSQL database successfully
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="outline">
              <Link href="mailto:support@datapad.io?subject=PostgreSQL Integration Help">
                Contact Support
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="https://calendly.com/datapad/database-setup" target="_blank" className="gap-2">
                Book Database Setup Call <ExternalLink className="h-3 w-3" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/docs/guides/data-security">
                Security Guide
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
