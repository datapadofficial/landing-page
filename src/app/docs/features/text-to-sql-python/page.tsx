import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Code, 
  ArrowRight, 
  Database,
  Brain,
  Zap,
  FileCode,
  BarChart3,
  Cog,
  CheckCircle,
  Terminal,
  Play,
  Copy
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Text-to-SQL & Python Code Generation",
  description: "Convert natural language into executable SQL queries and Python code. No coding experience required - just describe what you want to accomplish.",
};

export default function TextToSQLPythonPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="bg-muted/50">
            Core Feature
          </Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Text-to-SQL & Python</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Transform natural language into executable SQL queries and Python code. 
          Get powerful data analysis capabilities without writing a single line of code yourself.
        </p>
      </div>

      {/* Overview */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Two Powerful Capabilities</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Database className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Text-to-SQL</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Convert plain English questions into optimized SQL queries that run against your databases.
            </p>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Complex multi-table joins
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Advanced aggregations & calculations
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Date/time filtering & grouping
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Window functions & CTEs
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <FileCode className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Text-to-Python</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Generate Python code for advanced data analysis, machine learning, and custom calculations.
            </p>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Statistical analysis & modeling
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Data transformations & cleaning
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Custom visualizations
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Machine learning predictions
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">How Code Generation Works</h2>
        
        {/* Step 1 */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary font-medium text-sm">1</div>
            <h3 className="text-lg font-medium">Describe Your Analysis</h3>
          </div>
          <div className="ml-10 space-y-3">
            <p className="text-muted-foreground">
              Explain what you want to analyze or calculate in natural language:
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="p-3 rounded border bg-background">
                <h4 className="font-medium text-sm mb-1">SQL Example</h4>
                <p className="text-xs text-muted-foreground">
                  "Calculate monthly recurring revenue by customer segment for the last 12 months"
                </p>
              </div>
              <div className="p-3 rounded border bg-background">
                <h4 className="font-medium text-sm mb-1">Python Example</h4>
                <p className="text-xs text-muted-foreground">
                  "Perform customer lifetime value prediction using regression analysis on purchase history"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary font-medium text-sm">2</div>
            <h3 className="text-lg font-medium">AI Analyzes & Generates</h3>
          </div>
          <div className="ml-10 space-y-3">
            <p className="text-muted-foreground">
              The AI understands your request and generates optimized code:
            </p>
            <div className="grid md:grid-cols-4 gap-3 text-sm">
              <div className="p-3 rounded border bg-background text-center">
                <Brain className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="font-medium">Intent Analysis</p>
                <p className="text-xs text-muted-foreground">Understands the goal</p>
              </div>
              <div className="p-3 rounded border bg-background text-center">
                <Database className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="font-medium">Schema Mapping</p>
                <p className="text-xs text-muted-foreground">Maps to your data</p>
              </div>
              <div className="p-3 rounded border bg-background text-center">
                <Code className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="font-medium">Code Generation</p>
                <p className="text-xs text-muted-foreground">Creates optimized code</p>
              </div>
              <div className="p-3 rounded border bg-background text-center">
                <Play className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="font-medium">Execution</p>
                <p className="text-xs text-muted-foreground">Runs & shows results</p>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary font-medium text-sm">3</div>
            <h3 className="text-lg font-medium">Review & Execute</h3>
          </div>
          <div className="ml-10 space-y-2">
            <p className="text-muted-foreground">
              See the generated code, understand what it does, and run it safely:
            </p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• View the generated SQL or Python code</li>
              <li>• See explanations of complex logic</li>
              <li>• Modify or ask for adjustments if needed</li>
              <li>• Execute with full data validation and safety checks</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SQL Capabilities */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">SQL Generation Capabilities</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Data Retrieval</h3>
            <div className="p-4 rounded-lg border bg-muted/20">
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Complex filtering and WHERE clauses</li>
                <li>• Multi-table JOINs (INNER, LEFT, RIGHT, FULL)</li>
                <li>• Subqueries and nested queries</li>
                <li>• UNION and INTERSECT operations</li>
                <li>• Date range filtering and time-based queries</li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Aggregations & Analytics</h3>
            <div className="p-4 rounded-lg border bg-muted/20">
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• GROUP BY with HAVING clauses</li>
                <li>• Window functions (ROW_NUMBER, RANK, LAG/LEAD)</li>
                <li>• Statistical functions (PERCENTILE, STDDEV)</li>
                <li>• Running totals and moving averages</li>
                <li>• Cohort analysis and retention queries</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="p-4 rounded-lg border bg-muted/20">
          <h4 className="font-medium mb-2">Example SQL Generation</h4>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Input:</strong> "Show me the top 10 customers by revenue, including their first purchase date and total order count"
              </p>
              <div className="bg-background rounded p-3 text-xs font-mono">
                <pre className="text-muted-foreground">
{`SELECT 
    c.customer_id,
    c.name,
    SUM(o.total_amount) as total_revenue,
    MIN(o.order_date) as first_purchase_date,
    COUNT(o.order_id) as total_orders
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
GROUP BY c.customer_id, c.name
ORDER BY total_revenue DESC
LIMIT 10;`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Python Capabilities */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Python Code Generation</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Data Analysis</h3>
            <div className="p-4 rounded-lg border bg-muted/20">
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Statistical analysis with scipy/numpy</li>
                <li>• Data cleaning and preprocessing</li>
                <li>• Time series analysis and forecasting</li>
                <li>• Correlation and regression analysis</li>
                <li>• A/B testing and hypothesis testing</li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Machine Learning</h3>
            <div className="p-4 rounded-lg border bg-muted/20">
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Customer segmentation (clustering)</li>
                <li>• Predictive modeling (regression, classification)</li>
                <li>• Anomaly detection algorithms</li>
                <li>• Recommendation systems</li>
                <li>• Feature engineering and selection</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-lg border bg-muted/20">
          <h4 className="font-medium mb-2">Example Python Generation</h4>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Input:</strong> "Create a customer segmentation model based on purchase behavior and calculate lifetime value for each segment"
              </p>
              <div className="bg-background rounded p-3 text-xs font-mono">
                <pre className="text-muted-foreground">
{`import pandas as pd
import numpy as np
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler

# Load and prepare customer data
df = load_customer_data()
features = ['recency', 'frequency', 'monetary_value']
X = df[features]

# Scale features for clustering
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Perform K-means clustering
kmeans = KMeans(n_clusters=4, random_state=42)
df['segment'] = kmeans.fit_predict(X_scaled)

# Calculate CLV by segment
clv_by_segment = df.groupby('segment').agg({
    'monetary_value': 'mean',
    'frequency': 'mean',
    'customer_id': 'count'
}).round(2)

print("Customer Lifetime Value by Segment:")
print(clv_by_segment)`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Common Use Cases</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-2">Business Reporting</h4>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Monthly revenue reports by product line</li>
              <li>• Customer acquisition cost analysis</li>
              <li>• Sales team performance metrics</li>
              <li>• Inventory turnover calculations</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-2">Customer Analytics</h4>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Customer lifetime value modeling</li>
              <li>• Churn prediction algorithms</li>
              <li>• RFM analysis and segmentation</li>
              <li>• Purchase behavior patterns</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-2">Marketing Analysis</h4>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Campaign ROI calculations</li>
              <li>• Attribution modeling</li>
              <li>• A/B test statistical analysis</li>
              <li>• Channel performance optimization</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-2">Financial Analysis</h4>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Cash flow forecasting</li>
              <li>• Budget vs actual variance analysis</li>
              <li>• Profitability by business unit</li>
              <li>• Financial ratio calculations</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-2">Operations</h4>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Supply chain optimization</li>
              <li>• Quality control statistics</li>
              <li>• Resource utilization analysis</li>
              <li>• Performance benchmarking</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-2">Product Analytics</h4>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Feature adoption tracking</li>
              <li>• User engagement scoring</li>
              <li>• Product usage patterns</li>
              <li>• Retention cohort analysis</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Safety & Security */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Safety & Security</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-3">Code Validation</h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Syntax validation before execution
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Performance optimization checks
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Resource usage monitoring
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Timeout protection for long queries
              </li>
            </ul>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-3">Data Protection</h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Read-only database connections
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Sandboxed Python execution environment
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Data access permission enforcement
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Audit logging of all code execution
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Getting Started</h2>
        <div className="p-6 rounded-lg border bg-muted/20">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-3">Tips for Success</h4>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Be specific about what you want to calculate</li>
                <li>• Mention relevant time periods and filters</li>
                <li>• Describe the output format you prefer</li>
                <li>• Use business terminology rather than technical jargon</li>
                <li>• Start simple and build complexity gradually</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Example Requests</h4>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• "Calculate customer acquisition cost by marketing channel"</li>
                <li>• "Create a cohort retention analysis for the last 6 months"</li>
                <li>• "Build a predictive model for customer churn"</li>
                <li>• "Analyze sales trends with seasonal adjustments"</li>
                <li>• "Generate a funnel analysis from website events"</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t">
        <Link href="/docs/features/natural-language-queries">
          <Button variant="outline" className="gap-2">
            <ArrowRight className="h-4 w-4 rotate-180" />
            Natural Language Queries
          </Button>
        </Link>
        <Link href="/docs/features/workflows">
          <Button className="gap-2">
            Workflows
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
