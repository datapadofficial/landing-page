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
  Key,
  Info,
  Cloud
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { DocSection } from "@/components/docs/doc-section";
import { FeatureGrid } from "@/components/docs/feature-grid";

export const metadata: Metadata = {
  title: "Snowflake Integration",
  description: "Connect your Snowflake data warehouse to Datapad and query your data using natural language instead of SQL.",
};

const features = [
  {
    icon: Cloud,
    title: "Cloud Data Warehouse Queries",
    description: "Ask questions in plain English to analyze your cloud data warehouse without writing complex Snowflake SQL."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Multi-factor authentication, role-based access control, and encrypted connections ensure maximum data security."
  },
  {
    icon: Code,
    title: "AI-Powered Snowflake SQL Generation",
    description: "Advanced AI automatically converts your questions into optimized Snowflake SQL queries with proper syntax and functions."
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
    title: "Username & Password",
    description: "Connect using your Snowflake credentials",
    icon: Database,
    security: "Standard authentication",
  },
  {
    title: "Key Pair Authentication",
    description: "Use RSA key pair for enhanced security",
    icon: Key,
    security: "Enhanced security",
  },
  {
    title: "OAuth Integration",
    description: "Single sign-on with OAuth 2.0",
    icon: Shield,
    security: "Maximum security",
  },
];

export default function SnowflakeIntegrationPage() {
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
              src="/images/integrations/snowflake.png"
              alt="Snowflake logo"
              width={48}
              height={48}
              className="w-12 h-12 object-contain"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Snowflake</h1>
            <p className="text-xl text-muted-foreground">
              Query your Snowflake data warehouse using natural language instead of SQL
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Badge variant="secondary" className="gap-1">
            <Cloud className="h-3 w-3" />
            Data Warehouse
          </Badge>
          <Badge variant="secondary" className="gap-1">
            <Clock className="h-3 w-3" />
            5 min setup
          </Badge>
          <Badge variant="secondary" className="gap-1">
            <Shield className="h-3 w-3" />
            Enterprise Security
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
                  <p className="font-medium">Snowflake Account</p>
                  <p className="text-sm text-muted-foreground">
                    An active Snowflake account with access to your data warehouse
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <p className="font-medium">Connection Details</p>
                  <p className="text-sm text-muted-foreground">
                    Account URL, username, password, warehouse, database, and schema information
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <p className="font-medium">User Permissions</p>
                  <p className="text-sm text-muted-foreground">
                    User account with read access to the required databases and schemas
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <p className="font-medium">Warehouse Access</p>
                  <p className="text-sm text-muted-foreground">
                    Access to a Snowflake warehouse for query execution
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
        
        {/* Step 1: Access Snowflake Integration */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-semibold text-sm">
              1
            </div>
            <h3 className="text-xl font-semibold">Access Snowflake Integration</h3>
          </div>
          
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Navigate to Integrations in Datapad and select Snowflake:
                </p>
                
                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertDescription>
                    Navigate to the Integrations section in Datapad and select Snowflake from the available database options.
                  </AlertDescription>
                </Alert>
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
                  Enter your Snowflake connection string:
                </p>
                
                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertDescription>
                    Use the connection string option to quickly connect using your Snowflake account details.
                  </AlertDescription>
                </Alert>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">Required Fields:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                      <li>• Connection Name</li>
                      <li>• Connection String</li>
                      <li>• Default Schema</li>
                    </ul>
                  </div>
                </div>
                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertDescription>
                    Snowflake connection string format: snowflake://USERNAME:PASSWORD@ACCOUNT.snowflakecomputing.com/?warehouse=WAREHOUSE&database=DATABASE&schema=SCHEMA
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
                  Enter your Snowflake connection details:
                </p>
                
                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertDescription>
                    Fill in the connection form with your Snowflake account details including warehouse, database, and schema information.
                  </AlertDescription>
                </Alert>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">Required Fields:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                      <li>• Account URL</li>
                      <li>• Username</li>
                      <li>• Password</li>
                      <li>• Warehouse</li>
                      <li>• Database</li>
                      <li>• Schema</li>
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
                    <h4 className="font-medium text-sm">Snowflake SQL Commands</h4>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Copy className="h-3 w-3" />
                      Copy
                    </Button>
                  </div>
                  <pre className="text-sm text-muted-foreground overflow-x-auto">
{`-- Create a new user for Datapad
CREATE USER datapad_readonly 
  PASSWORD='SecurePassword123!' 
  DEFAULT_WAREHOUSE='YOUR_WAREHOUSE'
  DEFAULT_DATABASE='YOUR_DATABASE'
  DEFAULT_SCHEMA='YOUR_SCHEMA';

-- Create a read-only role
CREATE ROLE datapad_read_role;

-- Grant usage on warehouse, database, and schema
GRANT USAGE ON WAREHOUSE YOUR_WAREHOUSE TO ROLE datapad_read_role;
GRANT USAGE ON DATABASE YOUR_DATABASE TO ROLE datapad_read_role;
GRANT USAGE ON SCHEMA YOUR_DATABASE.YOUR_SCHEMA TO ROLE datapad_read_role;

-- Grant select on all tables in schema
GRANT SELECT ON ALL TABLES IN SCHEMA YOUR_DATABASE.YOUR_SCHEMA TO ROLE datapad_read_role;

-- Grant select on future tables (optional)
GRANT SELECT ON FUTURE TABLES IN SCHEMA YOUR_DATABASE.YOUR_SCHEMA TO ROLE datapad_read_role;

-- Assign role to user
GRANT ROLE datapad_read_role TO USER datapad_readonly;`}
                  </pre>
                </div>
                
                <Alert>
                  <Lock className="h-4 w-4" />
                  <AlertDescription>
                    Replace YOUR_WAREHOUSE, YOUR_DATABASE, and YOUR_SCHEMA with your actual names and choose a strong password.
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
          Here are some example questions you can ask once your Snowflake data is connected:
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
              AI-Powered Snowflake SQL Generation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Datapad automatically converts your natural language questions into optimized Snowflake SQL queries. 
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
                  <li>• Verify your account URL is correct</li>
                  <li>• Check if your Snowflake account is active</li>
                  <li>• Ensure network connectivity to Snowflake</li>
                  <li>• Check firewall settings if using private connectivity</li>
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
                  <li>• Check if MFA is required for your account</li>
                  <li>• Ensure the user is not locked or suspended</li>
                  <li>• Try logging in to Snowflake web interface first</li>
                </ul>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-medium mb-1">Warehouse or database access issues</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  If you can't access warehouse or database:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Verify the warehouse name is correct and running</li>
                  <li>• Check if you have USAGE privileges on the warehouse</li>
                  <li>• Ensure the database and schema names are correct</li>
                  <li>• Contact your Snowflake admin for access permissions</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
    </div>
  );
}
