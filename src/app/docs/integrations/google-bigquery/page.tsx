import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Database, 
  ArrowRight, 
  CheckCircle,
  Cloud,
  BarChart3,
  Zap,
  Shield
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Google BigQuery Integration",
  description: "Connect Google BigQuery to Datapad for cloud-scale data analytics and AI-powered insights on petabyte-scale datasets.",
};

export default function GoogleBigQueryIntegrationPage() {
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
              src="/images/integrations/google-bigquery.png" 
              alt="Google BigQuery logo"
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
            />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Google BigQuery Integration</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Connect your Google BigQuery data warehouse to Datapad and leverage AI-powered analytics for 
          petabyte-scale data analysis, complex aggregations, and enterprise-grade insights.
        </p>
      </div>

      {/* Overview */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">What You'll Get</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <Cloud className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Cloud-Scale Analytics</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Analyze massive datasets with BigQuery's serverless, highly scalable data warehouse.
            </p>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="h-4 w-4 text-primary" />
              <h4 className="font-medium">High Performance</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Execute complex queries on terabytes of data in seconds with BigQuery's columnar storage.
            </p>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Enterprise Security</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Benefit from Google Cloud's enterprise-grade security and compliance features.
            </p>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">BigQuery Analytics Capabilities</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Advanced SQL Features</h3>
            <div className="p-4 rounded-lg border bg-muted/20">
              <ul className="text-sm space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Standard SQL with extensions
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Array and struct data types
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Window functions and analytics
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Geographic and JSON functions
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Machine learning with BQML
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
                  Petabyte-scale data processing
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Real-time streaming analytics
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Data sharing and federation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Column-level security
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Cost optimization features
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI-Powered Analysis */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">AI-Powered BigQuery Analysis</h2>
        <div className="space-y-6">
          <div className="p-6 rounded-lg border bg-muted/20">
            <h3 className="text-lg font-medium mb-4">Example AI Queries</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border bg-background">
                <div className="text-sm text-muted-foreground mb-2">Ask Datapad:</div>
                <div className="font-medium mb-2">"Analyze user behavior patterns across our entire dataset"</div>
                <div className="text-xs text-muted-foreground">Leverages BigQuery's scale to process billions of events</div>
              </div>
              <div className="p-4 rounded-lg border bg-background">
                <div className="text-sm text-muted-foreground mb-2">Ask Datapad:</div>
                <div className="font-medium mb-2">"Create a machine learning model to predict customer churn"</div>
                <div className="text-xs text-muted-foreground">Uses BigQuery ML for in-database machine learning</div>
              </div>
              <div className="p-4 rounded-lg border bg-background">
                <div className="text-sm text-muted-foreground mb-2">Ask Datapad:</div>
                <div className="font-medium mb-2">"Analyze geographic patterns in our sales data"</div>
                <div className="text-xs text-muted-foreground">Utilizes BigQuery's geographic functions for spatial analysis</div>
              </div>
              <div className="p-4 rounded-lg border bg-background">
                <div className="text-sm text-muted-foreground mb-2">Ask Datapad:</div>
                <div className="font-medium mb-2">"Process real-time streaming data for fraud detection"</div>
                <div className="text-xs text-muted-foreground">Combines streaming analytics with AI for real-time insights</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Perfect For</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg border bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
            <h4 className="font-medium mb-2 text-blue-700 dark:text-blue-300">Data Warehousing</h4>
            <p className="text-sm text-blue-600 dark:text-blue-400">
              Central repository for all your business data with near-infinite scale and performance.
            </p>
          </div>
          <div className="p-4 rounded-lg border bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
            <h4 className="font-medium mb-2 text-green-700 dark:text-green-300">Real-Time Analytics</h4>
            <p className="text-sm text-green-600 dark:text-green-400">
              Process streaming data for immediate insights and real-time decision making.
            </p>
          </div>
          <div className="p-4 rounded-lg border bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800">
            <h4 className="font-medium mb-2 text-purple-700 dark:text-purple-300">Machine Learning</h4>
            <p className="text-sm text-purple-600 dark:text-purple-400">
              Build and deploy ML models directly in BigQuery without moving data.
            </p>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Next Steps</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/docs/features/ai-chat" className="p-4 rounded-lg border hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-2 mb-2">
              <Database className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Start Querying</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Use AI to generate SQL queries for your BigQuery datasets
            </p>
          </Link>
          <Link href="/docs/features/dashboards" className="p-4 rounded-lg border hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-2 mb-2">
              <BarChart3 className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Create Dashboards</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Build enterprise dashboards from your BigQuery data
            </p>
          </Link>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t">
        <Link href="/docs/integrations/mssql">
          <Button variant="outline" className="gap-2">
            <ArrowRight className="h-4 w-4 rotate-180" />
            Microsoft SQL Server
          </Button>
        </Link>
        <Link href="/docs/integrations/shopify">
          <Button className="gap-2">
            Shopify
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
