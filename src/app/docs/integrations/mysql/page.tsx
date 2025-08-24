import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Database, 
  ArrowRight, 
  CheckCircle,
  AlertCircle,
  BarChart3,
  Shield,
  Zap,
  Code,
  Lock
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "MySQL Integration",
  description: "Connect MySQL to Datapad for advanced relational database analysis and AI-powered SQL query insights.",
};

export default function MySQLIntegrationPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="bg-muted/50">
            Database Integration
          </Badge>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm border">
            <Image 
              src="/images/integrations/mysql.png" 
              alt="MySQL logo"
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
            />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">MySQL Integration</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Connect your MySQL database to Datapad and leverage AI-powered analytics for relational data, 
          performance optimization, and advanced SQL query insights.
        </p>
      </div>

      {/* Overview */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">What You'll Get</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <Database className="h-4 w-4 text-primary" />
              <h4 className="font-medium">SQL Analytics</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Generate complex SQL queries using natural language and analyze relational data.
            </p>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Performance Insights</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Monitor query performance, identify bottlenecks, and optimize database operations.
            </p>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <BarChart3 className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Data Visualization</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Create charts and dashboards directly from your MySQL tables and views.
            </p>
          </div>
        </div>
      </section>

      {/* Connection Steps */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">How to Connect MySQL</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium">
                1
              </div>
              <div>
                <h4 className="font-medium mb-2">Prepare Database Access</h4>
                <p className="text-sm text-muted-foreground">
                  Ensure you have a MySQL user with appropriate read permissions for your database.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium">
                2
              </div>
              <div>
                <h4 className="font-medium mb-2">Configure Network Access</h4>
                <p className="text-sm text-muted-foreground">
                  Whitelist Datapad's IP addresses or set up secure connection tunneling.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium">
                3
              </div>
              <div>
                <h4 className="font-medium mb-2">Add Connection in Datapad</h4>
                <p className="text-sm text-muted-foreground">
                  Enter your MySQL connection details and test the connection.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-4 rounded-lg border bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
              <h4 className="font-medium mb-2 text-blue-700 dark:text-blue-300">Connection Details</h4>
              <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                <li>• Host/Server address</li>
                <li>• Port (default: 3306)</li>
                <li>• Database name</li>
                <li>• Username and password</li>
                <li>• SSL configuration (recommended)</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg border bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
              <h4 className="font-medium mb-2 text-green-700 dark:text-green-300">Security</h4>
              <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                <li>• Read-only access recommended</li>
                <li>• SSL/TLS encryption supported</li>
                <li>• IP whitelisting available</li>
                <li>• SSH tunnel support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">AI-Powered MySQL Analysis</h2>
        <div className="space-y-6">
          <div className="p-6 rounded-lg border bg-muted/20">
            <h3 className="text-lg font-medium mb-4">Example AI Queries</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border bg-background">
                <div className="text-sm text-muted-foreground mb-2">Ask Datapad:</div>
                <div className="font-medium mb-2">"Show me the top 10 customers by total order value this year"</div>
                <div className="text-xs text-muted-foreground">Generates optimized SQL joins and aggregations</div>
              </div>
              <div className="p-4 rounded-lg border bg-background">
                <div className="text-sm text-muted-foreground mb-2">Ask Datapad:</div>
                <div className="font-medium mb-2">"Analyze sales trends by product category over the last 12 months"</div>
                <div className="text-xs text-muted-foreground">Creates time-series analysis with grouping</div>
              </div>
              <div className="p-4 rounded-lg border bg-background">
                <div className="text-sm text-muted-foreground mb-2">Ask Datapad:</div>
                <div className="font-medium mb-2">"Find all inactive users who haven't logged in for 90 days"</div>
                <div className="text-xs text-muted-foreground">Intelligent date filtering and user analysis</div>
              </div>
              <div className="p-4 rounded-lg border bg-background">
                <div className="text-sm text-muted-foreground mb-2">Ask Datapad:</div>
                <div className="font-medium mb-2">"Compare this month's revenue with the same month last year"</div>
                <div className="text-xs text-muted-foreground">Year-over-year comparison with date functions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Features */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Supported MySQL Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Query Capabilities</h3>
            <div className="p-4 rounded-lg border bg-muted/20">
              <ul className="text-sm space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Complex JOINs and subqueries
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Aggregations and window functions
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Date/time analysis
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  String and JSON functions
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Performance optimization
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">MySQL Versions</h3>
            <div className="p-4 rounded-lg border bg-muted/20">
              <ul className="text-sm space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  MySQL 5.7 and above
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  MySQL 8.0 (full support)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Amazon RDS for MySQL
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Google Cloud SQL
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Azure Database for MySQL
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">MySQL Connection Best Practices</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 rounded-lg border border-green-200 bg-green-50 dark:bg-green-950/20 dark:border-green-800">
            <h4 className="font-medium mb-3 text-green-700 dark:text-green-300">Security Best Practices</h4>
            <ul className="text-sm text-green-600 dark:text-green-400 space-y-2">
              <li>• Create a dedicated read-only user for Datapad</li>
              <li>• Use SSL/TLS encryption for connections</li>
              <li>• Implement IP whitelisting when possible</li>
              <li>• Regularly rotate database credentials</li>
              <li>• Monitor connection logs for anomalies</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg border border-blue-200 bg-blue-50 dark:bg-blue-950/20 dark:border-blue-800">
            <h4 className="font-medium mb-3 text-blue-700 dark:text-blue-300">Performance Tips</h4>
            <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-2">
              <li>• Ensure proper indexing on frequently queried columns</li>
              <li>• Use connection pooling for high-traffic databases</li>
              <li>• Consider read replicas for analytics workloads</li>
              <li>• Optimize query performance with EXPLAIN</li>
              <li>• Monitor database resource usage</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Troubleshooting</h2>
        <div className="space-y-4">
          <div className="p-4 rounded-lg border border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="h-4 w-4 text-amber-500" />
              <h4 className="font-medium text-amber-700 dark:text-amber-300">Common Issues</h4>
            </div>
            <ul className="text-sm text-amber-600 dark:text-amber-400 space-y-1">
              <li>• <strong>Connection timeout:</strong> Check firewall settings and network connectivity</li>
              <li>• <strong>Access denied:</strong> Verify username, password, and user permissions</li>
              <li>• <strong>SSL errors:</strong> Ensure SSL certificates are properly configured</li>
              <li>• <strong>Slow queries:</strong> Check database performance and indexing</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Next Steps</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/docs/features/ai-chat" className="p-4 rounded-lg border hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-2 mb-2">
              <Code className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Start Querying</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Use AI to generate SQL queries and analyze your MySQL data
            </p>
          </Link>
          <Link href="/docs/features/dashboards" className="p-4 rounded-lg border hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-2 mb-2">
              <BarChart3 className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Create Dashboards</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Build custom dashboards from your MySQL data
            </p>
          </Link>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t">
        <Link href="/docs/integrations/mongodb">
          <Button variant="outline" className="gap-2">
            <ArrowRight className="h-4 w-4 rotate-180" />
            MongoDB
          </Button>
        </Link>
        <Link href="/docs/integrations/mssql">
          <Button className="gap-2">
            Microsoft SQL Server
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
