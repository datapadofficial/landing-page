import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  BarChart3, 
  CheckCircle, 
  ArrowRight, 
  ExternalLink, 
  Shield, 
  Clock,
  Users,
  MousePointer,
  TrendingUp,
  Globe,
  AlertCircle,
  PlayCircle,
  Copy,
  Eye,
  Target,
  DollarSign,
  ShoppingBag,
  Package
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { DocSection } from "@/components/docs/doc-section";
import { FeatureGrid } from "@/components/docs/feature-grid";

export const metadata: Metadata = {
  title: "Shopify Integration",
  description: "Connect Shopify to Datapad for comprehensive e-commerce analytics, sales insights, and customer behavior analysis.",
};

export default function ShopifyIntegrationPage() {
  const features = [
    {
      icon: DollarSign,
      title: "Sales Analytics",
      description: "Track revenue, orders, average order value, and conversion rates across all sales channels."
    },
    {
      icon: Users,
      title: "Customer Insights",
      description: "Analyze customer lifetime value, purchase patterns, and segmentation data for better targeting."
    },
    {
      icon: ShoppingBag,
      title: "Product Performance",
      description: "Monitor inventory, product sales, category performance, and pricing optimization opportunities."
    }
  ];

const exampleQueries = [
  "What's my total revenue for the last 30 days?",
  "Which products have the highest profit margins?",
  "Show me customer lifetime value by segment",
  "What's my average order value this month vs last month?",
  "Which products are causing high cart abandonment?",
  "How do mobile vs desktop sales compare?",
];

const availableMetrics = [
  { name: "Orders", description: "Order volume, value, and status tracking" },
  { name: "Revenue", description: "Total sales, revenue trends, and growth metrics" },
  { name: "Products", description: "Product performance, inventory, and pricing data" },
  { name: "Customers", description: "Customer data, segmentation, and behavior" },
  { name: "Conversion Rate", description: "E-commerce conversion and funnel metrics" },
  { name: "Cart Analysis", description: "Shopping cart and abandonment data" },
  { name: "Inventory", description: "Stock levels, turnover, and availability" },
  { name: "Geography", description: "Sales performance by location and region" },
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
              src="/images/integrations/shopify.png"
              alt="Shopify logo"
              width={48}
              height={48}
              className="w-12 h-12 object-contain"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Shopify</h1>
            <p className="text-xl text-muted-foreground">
              Analyze your e-commerce performance and sales data using natural language
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Badge variant="secondary" className="gap-1">
            <ShoppingBag className="h-3 w-3" />
            E-commerce
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
                  <p className="font-medium">Shopify Store</p>
                  <p className="text-sm text-muted-foreground">
                    You need an active Shopify store with sales and customer data
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <p className="font-medium">Store Owner Access</p>
                  <p className="text-sm text-muted-foreground">
                    You must have store owner or staff permissions to generate API credentials
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <p className="font-medium">Transaction History</p>
                  <p className="text-sm text-muted-foreground">
                    Your store should have historical order and customer data to analyze
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
                <p className="text-muted-foreground">- Find "Shopify" in the list of data sources.</p>
                {/* Screenshot of integrations page */}
                <div className="rounded-lg overflow-hidden border">
                  <Image
                    src="/images/docs/shopify-connect.png"
                    alt="Shopify integration in Datapad - Navigate to integrations and click Connect"
                    width={800}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                
                <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                  <Copy className="h-4 w-4 text-muted-foreground" />
                  <code className="text-sm">Workspace → Data → Add New Source → Shopify</code>
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
            <h3 className="text-xl font-semibold">Generate API Credentials</h3>
          </div>
          
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  - In your Shopify admin, go to Apps → Develop apps → Create app and generate a private app with API access.
                </p>
                
                <Alert>
                  <Shield className="h-4 w-4" />
                  <AlertDescription>
                    Create a private app with read-only API permissions. Datapad only needs access to read your store data.
                  </AlertDescription>
                </Alert>
                
                {/* Screenshot of API creation */}
                <div className="rounded-lg overflow-hidden border">
                  <Image
                    src="/images/docs/shopify-api-setup.png"
                    alt="Create Shopify private app for Datapad integration"
                    width={800}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium">Required API Permissions:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Read access to orders and transactions</li>
                    <li>• Read access to customers and customer groups</li>
                    <li>• Read access to products and inventory</li>
                    <li>• Read access to analytics and reports</li>
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
                  - Copy your Shopify store URL and API credentials and enter them into Datapad.
                </p>
                
                {/* Screenshot of credential input */}
                <div className="rounded-lg overflow-hidden border">
                  <Image
                    src="/images/docs/shopify-credentials.png"
                    alt="Enter Shopify credentials in Datapad"
                    width={800}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">💡 Pro Tip</h4>
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    You can connect multiple Shopify stores. This is useful if you manage multiple brands or have separate stores for different markets.
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
          Here are some example questions you can ask once your Shopify data is connected:
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
            <li>• Ask about sales performance ("how are my top products performing")</li>
            <li>• Request customer insights ("which customers have the highest lifetime value")</li>
            <li>• Compare time periods ("this month vs last month revenue")</li>
            <li>• Analyze inventory ("which products are running low on stock")</li>
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
                  <h4 className="font-medium mb-1">API authentication failed</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    If you're having trouble connecting:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Verify your store URL is correct (e.g., your-store.myshopify.com)</li>
                    <li>• Check that your API credentials have the necessary permissions</li>
                    <li>• Ensure your private app is installed and active</li>
                  </ul>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-medium mb-1">Missing order data</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    If some orders are not appearing:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Check if orders were processed during the requested time period</li>
                    <li>• Verify that orders are not in draft or abandoned status</li>
                    <li>• Some data may have sync delays of a few minutes</li>
                  </ul>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-medium mb-1">Rate limit errors</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    If you're experiencing rate limiting:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Shopify has API rate limits - large stores may take longer to sync</li>
                    <li>• Initial sync of large stores can take several hours</li>
                    <li>• Try syncing smaller date ranges for better performance</li>
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