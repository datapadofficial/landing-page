import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Database, 
  ArrowRight, 
  CheckCircle,
  Shield,
  BarChart3,
  Zap,
  Code
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Microsoft SQL Server Integration",
  description: "Connect Microsoft SQL Server to Datapad for enterprise-grade database analytics and AI-powered insights.",
};

export default function MSSQLIntegrationPage() {
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
              src="/images/integrations/mssql.png" 
              alt="Microsoft SQL Server logo"
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
            />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Microsoft SQL Server Integration</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Connect your Microsoft SQL Server database to Datapad and leverage AI-powered analytics for enterprise data, 
          complex queries, and advanced business intelligence insights.
        </p>
      </div>

      {/* Overview */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">What You'll Get</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <Database className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Enterprise SQL Analytics</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Generate complex T-SQL queries using natural language and analyze enterprise data at scale.
            </p>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Enterprise Security</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Connect securely with integrated Windows authentication and enterprise-grade security features.
            </p>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="h-4 w-4 text-primary" />
              <h4 className="font-medium">High Performance</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Optimize query performance with intelligent indexing suggestions and execution plan analysis.
            </p>
          </div>
        </div>
      </section>

      {/* Supported Features */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">SQL Server Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">T-SQL Capabilities</h3>
            <div className="p-4 rounded-lg border bg-muted/20">
              <ul className="text-sm space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Advanced T-SQL query generation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Stored procedure execution
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Window functions and CTEs
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  JSON and XML data handling
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Temporal tables analysis
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Enterprise Features</h3>
            <div className="p-4 rounded-lg border bg-muted/20">
              <ul className="text-sm space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  SQL Server 2016+ support
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Azure SQL Database compatibility
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Always Encrypted support
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Row-level security integration
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Columnstore index optimization
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI Insights */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">AI-Powered SQL Server Analysis</h2>
        <div className="space-y-6">
          <div className="p-6 rounded-lg border bg-muted/20">
            <h3 className="text-lg font-medium mb-4">Example AI Queries</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border bg-background">
                <div className="text-sm text-muted-foreground mb-2">Ask Datapad:</div>
                <div className="font-medium mb-2">"Find customers with orders above average in the last quarter"</div>
                <div className="text-xs text-muted-foreground">Generates optimized T-SQL with window functions and date filtering</div>
              </div>
              <div className="p-4 rounded-lg border bg-background">
                <div className="text-sm text-muted-foreground mb-2">Ask Datapad:</div>
                <div className="font-medium mb-2">"Analyze sales performance by region using pivot tables"</div>
                <div className="text-xs text-muted-foreground">Creates T-SQL PIVOT queries for cross-tabulation analysis</div>
              </div>
              <div className="p-4 rounded-lg border bg-background">
                <div className="text-sm text-muted-foreground mb-2">Ask Datapad:</div>
                <div className="font-medium mb-2">"Show running totals and percentage changes for monthly revenue"</div>
                <div className="text-xs text-muted-foreground">Uses advanced window functions for running calculations</div>
              </div>
              <div className="p-4 rounded-lg border bg-background">
                <div className="text-sm text-muted-foreground mb-2">Ask Datapad:</div>
                <div className="font-medium mb-2">"Identify duplicate customer records across multiple tables"</div>
                <div className="text-xs text-muted-foreground">Complex data quality analysis with CTEs and ranking</div>
              </div>
            </div>
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
              Use AI to generate T-SQL queries for your SQL Server data
            </p>
          </Link>
          <Link href="/docs/features/dashboards" className="p-4 rounded-lg border hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-2 mb-2">
              <BarChart3 className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Create Dashboards</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Build enterprise dashboards from your SQL Server data
            </p>
          </Link>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t">
        <Link href="/docs/integrations/mysql">
          <Button variant="outline" className="gap-2">
            <ArrowRight className="h-4 w-4 rotate-180" />
            MySQL
          </Button>
        </Link>
        <Link href="/docs/integrations/google-bigquery">
          <Button className="gap-2">
            Google BigQuery
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
