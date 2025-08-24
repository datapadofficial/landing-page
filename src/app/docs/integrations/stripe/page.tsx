import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  CreditCard, 
  ArrowRight, 
  CheckCircle,
  TrendingUp,
  Users,
  DollarSign,
  BarChart3,
  Shield
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Stripe Integration",
  description: "Connect Stripe to Datapad for comprehensive payment analytics, revenue insights, and customer financial behavior analysis.",
};

export default function StripeIntegrationPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="bg-muted/50">
            E-commerce Integration
          </Badge>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm border">
            <Image 
              src="/images/integrations/stripe.png" 
              alt="Stripe logo"
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
            />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Stripe Integration</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Connect your Stripe account to analyze payment data, revenue trends, 
          and get AI-powered insights for financial performance and customer payment behavior.
        </p>
      </div>

      {/* Overview */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">What You'll Get</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Revenue Analytics</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Track payments, refunds, chargebacks, and overall revenue performance with detailed breakdowns.
            </p>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <Users className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Customer Insights</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Analyze customer payment patterns, subscription behavior, and lifetime value metrics.
            </p>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Risk Analysis</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Monitor fraud patterns, dispute rates, and payment failure analysis for risk management.
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Key Metrics Tracked</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Payment Analytics</h3>
            <div className="p-4 rounded-lg border bg-muted/20">
              <ul className="text-sm space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Transaction volumes and amounts
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Payment success and failure rates
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Refund and chargeback analysis
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Payment method performance
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Geographic payment distribution
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Business Metrics</h3>
            <div className="p-4 rounded-lg border bg-muted/20">
              <ul className="text-sm space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Monthly recurring revenue (MRR)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Customer lifetime value (CLV)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Subscription churn rates
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Average transaction values
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Revenue growth trends
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI Insights */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">AI-Powered Stripe Analytics</h2>
        <div className="space-y-6">
          <div className="p-6 rounded-lg border bg-muted/20">
            <h3 className="text-lg font-medium mb-4">Example AI Queries</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border bg-background">
                <div className="text-sm text-muted-foreground mb-2">Ask Datapad:</div>
                <div className="font-medium mb-2">"Which payment methods have the highest success rates?"</div>
                <div className="text-xs text-muted-foreground">Analyzes payment method performance and optimization opportunities</div>
              </div>
              <div className="p-4 rounded-lg border bg-background">
                <div className="text-sm text-muted-foreground mb-2">Ask Datapad:</div>
                <div className="font-medium mb-2">"Predict next month's subscription churn based on payment patterns"</div>
                <div className="text-xs text-muted-foreground">Uses payment behavior to predict customer retention risks</div>
              </div>
              <div className="p-4 rounded-lg border bg-background">
                <div className="text-sm text-muted-foreground mb-2">Ask Datapad:</div>
                <div className="font-medium mb-2">"Analyze the impact of failed payments on revenue"</div>
                <div className="text-xs text-muted-foreground">Correlates payment failures with revenue loss and recovery</div>
              </div>
              <div className="p-4 rounded-lg border bg-background">
                <div className="text-sm text-muted-foreground mb-2">Ask Datapad:</div>
                <div className="font-medium mb-2">"Identify high-risk transactions for fraud prevention"</div>
                <div className="text-xs text-muted-foreground">Pattern analysis for fraud detection and risk scoring</div>
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
            <h4 className="font-medium mb-2 text-blue-700 dark:text-blue-300">SaaS Businesses</h4>
            <p className="text-sm text-blue-600 dark:text-blue-400">
              Track subscription metrics, MRR, churn, and customer payment lifecycle analysis.
            </p>
          </div>
          <div className="p-4 rounded-lg border bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
            <h4 className="font-medium mb-2 text-green-700 dark:text-green-300">E-commerce Stores</h4>
            <p className="text-sm text-green-600 dark:text-green-400">
              Analyze transaction patterns, payment method preferences, and revenue optimization.
            </p>
          </div>
          <div className="p-4 rounded-lg border bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800">
            <h4 className="font-medium mb-2 text-purple-700 dark:text-purple-300">Financial Services</h4>
            <p className="text-sm text-purple-600 dark:text-purple-400">
              Monitor payment flows, fraud patterns, and financial risk management metrics.
            </p>
          </div>
        </div>
      </section>

      {/* Integration Benefits */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Integration Benefits</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 rounded-lg border border-green-200 bg-green-50 dark:bg-green-950/20 dark:border-green-800">
            <h4 className="font-medium mb-3 text-green-700 dark:text-green-300">Revenue Optimization</h4>
            <ul className="text-sm text-green-600 dark:text-green-400 space-y-2">
              <li>• Identify revenue recovery opportunities</li>
              <li>• Optimize payment method mix</li>
              <li>• Reduce payment failure rates</li>
              <li>• Improve subscription retention</li>
              <li>• Maximize customer lifetime value</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg border border-blue-200 bg-blue-50 dark:bg-blue-950/20 dark:border-blue-800">
            <h4 className="font-medium mb-3 text-blue-700 dark:text-blue-300">Risk Management</h4>
            <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-2">
              <li>• Early fraud detection and prevention</li>
              <li>• Chargeback trend analysis</li>
              <li>• Payment risk scoring</li>
              <li>• Compliance monitoring</li>
              <li>• Financial forecasting accuracy</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Connection Setup */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Connecting Stripe to Datapad</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium">
                1
              </div>
              <div>
                <h4 className="font-medium mb-2">Create API Keys</h4>
                <p className="text-sm text-muted-foreground">
                  Generate restricted API keys in your Stripe dashboard with read-only permissions.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium">
                2
              </div>
              <div>
                <h4 className="font-medium mb-2">Configure Webhooks</h4>
                <p className="text-sm text-muted-foreground">
                  Set up webhooks for real-time data synchronization and event tracking.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium">
                3
              </div>
              <div>
                <h4 className="font-medium mb-2">Connect to Datapad</h4>
                <p className="text-sm text-muted-foreground">
                  Add your Stripe credentials in Datapad and start analyzing your payment data.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-4 rounded-lg border bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
              <h4 className="font-medium mb-2 text-blue-700 dark:text-blue-300">Security Best Practices</h4>
              <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                <li>• Use restricted API keys with minimal permissions</li>
                <li>• Enable webhook signature verification</li>
                <li>• Regularly rotate API credentials</li>
                <li>• Monitor API usage and access logs</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg border bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
              <h4 className="font-medium mb-2 text-green-700 dark:text-green-300">Data Sync</h4>
              <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                <li>• Historical data: Up to 1 year</li>
                <li>• Real-time webhook updates</li>
                <li>• Incremental daily syncs</li>
                <li>• Automatic data validation</li>
              </ul>
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
              <BarChart3 className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Start Analyzing</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Use AI chat to ask questions about your Stripe payment data
            </p>
          </Link>
          <Link href="/docs/features/dashboards" className="p-4 rounded-lg border hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Create Dashboards</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Build comprehensive payment and revenue dashboards
            </p>
          </Link>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t">
        <Link href="/docs/integrations/shopify">
          <Button variant="outline" className="gap-2">
            <ArrowRight className="h-4 w-4 rotate-180" />
            Shopify
          </Button>
        </Link>
        <Link href="/docs/features/ai-chat">
          <Button className="gap-2">
            Start Analyzing
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
