import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Layers, 
  CheckCircle, 
  Database,
  BarChart3,
  TrendingUp,
  Shuffle,
  Link as LinkIcon,
  Merge,
  Target,
  Brain,
  Info
} from "lucide-react";
import Link from "next/link";
import { DocSection } from "@/components/docs/doc-section";
import { FeatureGrid } from "@/components/docs/feature-grid";

export const metadata: Metadata = {
  title: "Data Blending - Cross-Platform Analysis",
  description: "Combine data from multiple sources for comprehensive cross-platform analysis. Unify your data silos into actionable insights.",
};

const features = [
  {
    icon: Merge,
    title: "Multi-Source Integration",
    description: "Seamlessly combine data from databases, marketing platforms, sales tools, and social media into unified datasets."
  },
  {
    icon: Brain,
    title: "Smart Matching",
    description: "AI automatically identifies common fields and relationships between different data sources for accurate blending."
  },
  {
    icon: TrendingUp,
    title: "Cross-Platform Insights",
    description: "Discover insights that only emerge when analyzing multiple data sources together, revealing hidden correlations."
  }
];

const blendingExamples = [
  "Combine Google Ads and Salesforce data to track lead-to-customer journey",
  "Blend social media engagement with website analytics for complete funnel view",
  "Merge email marketing data with e-commerce sales for campaign attribution",
  "Combine customer support tickets with product usage for satisfaction analysis",
  "Blend financial data with operational metrics for profitability insights",
  "Merge survey responses with behavioral data for customer sentiment analysis"
];

const dataSourceTypes = [
  {
    category: "Marketing Platforms",
    description: "Advertising and marketing automation tools",
    icon: Target,
    color: "text-blue-500",
    bgColor: "bg-blue-100 dark:bg-blue-900/20",
    sources: [
      "Google Ads & Analytics",
      "Facebook & Instagram Ads",
      "LinkedIn Advertising",
      "Email marketing platforms",
      "Marketing automation tools"
    ]
  },
  {
    category: "Sales & CRM",
    description: "Customer relationship and sales data",
    icon: TrendingUp,
    color: "text-green-500",
    bgColor: "bg-green-100 dark:bg-green-900/20",
    sources: [
      "Salesforce CRM",
      "HubSpot",
      "Pipeline management tools",
      "Customer success platforms",
      "Sales analytics tools"
    ]
  },
  {
    category: "Databases & Analytics",
    description: "Core business and operational data",
    icon: Database,
    color: "text-purple-500",
    bgColor: "bg-purple-100 dark:bg-purple-900/20",
    sources: [
      "PostgreSQL, MySQL, SQL Server",
      "Google BigQuery, Snowflake",
      "Business intelligence tools",
      "Data warehouses",
      "Custom databases"
    ]
  },
  {
    category: "Social & Web",
    description: "Social media and web analytics data",
    icon: BarChart3,
    color: "text-orange-500",
    bgColor: "bg-orange-100 dark:bg-orange-900/20",
    sources: [
      "Social media platforms",
      "Web analytics tools",
      "SEO and content platforms",
      "Customer feedback tools",
      "Survey platforms"
    ]
  }
];

const blendingProcesses = [
  {
    step: "Automatic Field Mapping",
    description: "AI identifies matching fields across data sources",
    details: [
      "Customer ID matching across platforms",
      "Date/time synchronization",
      "Common dimension alignment",
      "Data type harmonization"
    ]
  },
  {
    step: "Data Normalization",
    description: "Standardize formats and units for accurate analysis",
    details: [
      "Currency and unit conversions",
      "Date format standardization",
      "Text field normalization",
      "Missing data handling"
    ]
  },
  {
    step: "Relationship Discovery",
    description: "Find connections and correlations between datasets",
    details: [
      "Customer journey mapping",
      "Attribution modeling",
      "Cross-platform funnel analysis",
      "Correlation identification"
    ]
  }
];

export default function DataBlendingPage() {
  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/docs" className="hover:text-foreground">Docs</Link>
          <span>/</span>
          <Link href="/docs/features" className="hover:text-foreground">Features</Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
            <Layers className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Data Blending</h1>
            <p className="text-xl text-muted-foreground">
              Combine data from multiple sources for comprehensive analysis
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Badge variant="secondary" className="gap-1">
            <Merge className="h-3 w-3" />
            Multi-Source
          </Badge>
          <Badge variant="secondary" className="gap-1">
            <Brain className="h-3 w-3" />
            Smart Matching
          </Badge>
          <Badge variant="secondary" className="gap-1">
            <TrendingUp className="h-3 w-3" />
            Cross-Platform
          </Badge>
        </div>
      </div>

      <DocSection title="What You'll Get">
        <FeatureGrid features={features} />
      </DocSection>

      {/* How It Works */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">How Data Blending Works</h2>
        <p className="text-muted-foreground">
          Automatically combine and analyze data from multiple sources in four intelligent steps.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
              <span className="text-primary font-bold">1</span>
            </div>
            <h3 className="font-semibold">Connect Sources</h3>
            <p className="text-sm text-muted-foreground">
              Link your marketing, sales, analytics, and database platforms
            </p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
              <span className="text-primary font-bold">2</span>
            </div>
            <h3 className="font-semibold">Smart Matching</h3>
            <p className="text-sm text-muted-foreground">
              AI identifies common fields and relationships between datasets
            </p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
              <span className="text-primary font-bold">3</span>
            </div>
            <h3 className="font-semibold">Data Unification</h3>
            <p className="text-sm text-muted-foreground">
              Normalize and blend data into a unified, queryable dataset
            </p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
              <span className="text-primary font-bold">4</span>
            </div>
            <h3 className="font-semibold">Cross-Platform Analysis</h3>
            <p className="text-sm text-muted-foreground">
              Ask questions and get insights across all your connected data
            </p>
          </div>
        </div>
      </div>

      <Separator />

      {/* Blending Examples */}
        <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Data Blending Examples</h2>
        <p className="text-muted-foreground">
          See how combining multiple data sources reveals insights impossible to find in silos:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {blendingExamples.map((example, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer group">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-medium mt-0.5">
                    {index + 1}
              </div>
                  <p className="text-sm font-medium group-hover:text-primary transition-colors">
                    {example}
                  </p>
              </div>
              </CardContent>
            </Card>
          ))}
          </div>

        <div className="bg-muted/50 p-4 rounded-lg">
          <h4 className="font-medium mb-2">🔗 Data Blending Tips</h4>
          <ul className="text-sm text-muted-foreground space-y-1 ml-4">
            <li>• Connect complementary data sources that share common identifiers</li>
            <li>• Ensure consistent date ranges across all data sources for accurate analysis</li>
            <li>• Start with simple blends before moving to complex multi-source analysis</li>
            <li>• Use blended data to create comprehensive customer journey maps</li>
                </ul>
              </div>
            </div>

      <Separator />

      {/* Data Source Types */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Supported Data Sources</h2>
        <p className="text-muted-foreground">
          Blend data from across your entire technology stack for complete business insights.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dataSourceTypes.map((type) => (
            <Card key={type.category} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-10 h-10 ${type.bgColor} rounded-lg flex items-center justify-center`}>
                    <type.icon className={`h-5 w-5 ${type.color}`} />
              </div>
              <div>
                    <CardTitle className="text-lg">{type.category}</CardTitle>
                    <CardDescription className="text-sm">{type.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  {type.sources.map((source, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 shrink-0" />
                      <span>{source}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator />

      {/* Blending Process */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Intelligent Blending Process</h2>
        <p className="text-muted-foreground">
          Advanced AI handles the complexity of combining disparate data sources automatically.
        </p>
        
        <div className="space-y-6">
          {blendingProcesses.map((process, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-semibold text-sm">
                    {index + 1}
                  </div>
                  {process.step}
                </CardTitle>
                <CardDescription>{process.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {process.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-muted-foreground">{detail}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator />

      {/* Behind the Scenes */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Behind the Scenes</h2>
        <Card className="bg-gradient-to-r from-primary/5 to-orange-500/5 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Layers className="h-5 w-5" />
              AI Data Blending Engine
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Datapad's data blending engine uses machine learning to automatically identify relationships between data sources, 
              handle schema differences, and create unified datasets that preserve data integrity while enabling cross-platform analysis.
            </p>
          </CardContent>
        </Card>
              </div>

      <Separator />

      {/* Advanced Features */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Advanced Blending Features</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Shuffle className="h-5 w-5 text-blue-500" />
                Real-time Sync
              </CardTitle>
              <CardDescription>
                Data blends update automatically as source data changes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-xs text-muted-foreground">• Live data synchronization</div>
                <div className="text-xs text-muted-foreground">• Incremental updates</div>
                <div className="text-xs text-muted-foreground">• Change notifications</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <LinkIcon className="h-5 w-5 text-green-500" />
                Custom Relationships
              </CardTitle>
              <CardDescription>
                Define custom joins and relationships between data sources
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-xs text-muted-foreground">• Custom field mapping</div>
                <div className="text-xs text-muted-foreground">• Complex join conditions</div>
                <div className="text-xs text-muted-foreground">• Calculated relationships</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <BarChart3 className="h-5 w-5 text-purple-500" />
                Attribution Modeling
              </CardTitle>
              <CardDescription>
                Track customer journeys across multiple touchpoints
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-xs text-muted-foreground">• Multi-touch attribution</div>
                <div className="text-xs text-muted-foreground">• Customer journey mapping</div>
                <div className="text-xs text-muted-foreground">• Conversion path analysis</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Separator />

      {/* Best Practices */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Data Blending Best Practices</h2>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Info className="h-5 w-5 text-blue-500" />
              Successful Data Blending
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Start with clear objectives</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Define what insights you want to discover before blending data
                </p>
                <div className="p-3 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <p className="text-sm text-green-800 dark:text-green-200">✓ "Track the complete customer journey from first ad click to purchase and support"</p>
            </div>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-medium mb-2">Ensure data quality</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Clean and consistent data across sources improves blending accuracy
                </p>
                <div className="p-3 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <p className="text-sm text-green-800 dark:text-green-200">✓ Standardize customer IDs, date formats, and naming conventions</p>
            </div>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-medium mb-2">Validate blended results</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Cross-check blended data against individual sources for accuracy
                </p>
                <div className="p-3 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <p className="text-sm text-green-800 dark:text-green-200">✓ Compare totals and key metrics before and after blending</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        </div>

      {/* Getting Started */}
      <Card className="bg-gradient-to-r from-primary/5 to-orange-500/5 border-primary/20">
        <CardHeader>
          <CardTitle>Ready to blend your data sources?</CardTitle>
          <CardDescription>
            Connect multiple platforms and discover insights that emerge from cross-platform analysis.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="https://app.datapad.io/blending">
                Start Data Blending
          </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/docs/integrations">
                Connect Data Sources
          </Link>
          </Button>
            <Button asChild variant="outline">
              <Link href="/docs/get-started/quickstart">
                Quickstart Guide
        </Link>
          </Button>
      </div>
        </CardContent>
      </Card>
      
    </div>
  );
}