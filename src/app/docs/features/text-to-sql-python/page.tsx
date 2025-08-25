import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Code2, 
  Database,
  Brain,
  Copy,
  Eye,
  Play,
  Download,
  FileText,
  Terminal,
  Info
} from "lucide-react";
import Link from "next/link";
import { DocSection } from "@/components/docs/doc-section";
import { FeatureGrid } from "@/components/docs/feature-grid";

export const metadata: Metadata = {
  title: "Text-to-SQL & Python Code Generation",
  description: "Convert natural language questions into executable SQL queries and Python code. Learn from generated code and run advanced analytics.",
};

const features = [
  {
    icon: Database,
    title: "Optimized SQL Generation",
    description: "Generate efficient SQL queries from natural language questions with proper syntax for any database system."
  },
  {
    icon: Code2,
    title: "Advanced Python Analytics",
    description: "Create sophisticated Python scripts for statistical analysis, data visualization, and machine learning tasks."
  },
  {
    icon: Brain,
    title: "Code Explanation & Learning",
    description: "Understand how the generated code works with detailed explanations and educational comments."
  }
];

const exampleQueries = [
  "Show me the top 10 customers by revenue this month",
  "Calculate the correlation between ad spend and conversions",
  "Create a cohort analysis for user retention",
  "Generate a forecast for next quarter's sales",
  "Find anomalies in our daily transaction data",
  "Build a customer segmentation model using RFM analysis"
];

const codeExamples = [
  {
    type: "SQL Query",
    question: "What's our monthly revenue growth rate?",
    code: `SELECT 
  EXTRACT(YEAR FROM order_date) as year,
  EXTRACT(MONTH FROM order_date) as month,
  SUM(total_amount) as monthly_revenue,
  LAG(SUM(total_amount)) OVER (ORDER BY year, month) as prev_month_revenue,
  ROUND(
    (SUM(total_amount) - LAG(SUM(total_amount)) OVER (ORDER BY year, month)) 
    / LAG(SUM(total_amount)) OVER (ORDER BY year, month) * 100, 2
  ) as growth_rate_percent
FROM orders 
WHERE order_date >= CURRENT_DATE - INTERVAL '12 months'
GROUP BY year, month
ORDER BY year, month;`
  },
  {
    type: "Python Analysis",
    question: "Perform customer segmentation analysis",
    code: `import pandas as pd
import numpy as np
from sklearn.cluster import KMeans
import matplotlib.pyplot as plt

# RFM Analysis for Customer Segmentation
def calculate_rfm(df):
    current_date = df['order_date'].max()
    
    rfm = df.groupby('customer_id').agg({
        'order_date': lambda x: (current_date - x.max()).days,  # Recency
        'order_id': 'count',  # Frequency
        'total_amount': 'sum'  # Monetary
    }).rename(columns={
        'order_date': 'Recency',
        'order_id': 'Frequency', 
        'total_amount': 'Monetary'
    })
    
    # Apply K-means clustering
    kmeans = KMeans(n_clusters=4, random_state=42)
    rfm['Segment'] = kmeans.fit_predict(rfm[['Recency', 'Frequency', 'Monetary']])
    
    return rfm

# Execute analysis
customer_segments = calculate_rfm(orders_df)
print(customer_segments.groupby('Segment').mean())`
  }
];

const capabilities = [
  {
    category: "SQL Generation",
    description: "Create optimized database queries",
    icon: Database,
    color: "text-blue-500",
    bgColor: "bg-blue-100 dark:bg-blue-900/20",
    features: [
      "Multi-database compatibility (PostgreSQL, MySQL, SQL Server, etc.)",
      "Complex joins and subqueries",
      "Window functions and CTEs",
      "Performance-optimized queries"
    ]
  },
  {
    category: "Python Analytics",
    description: "Advanced data analysis and visualization",
    icon: Code2,
    color: "text-green-500",
    bgColor: "bg-green-100 dark:bg-green-900/20",
    features: [
      "Statistical analysis with pandas/numpy",
      "Data visualization with matplotlib/plotly",
      "Machine learning with scikit-learn",
      "Time series analysis and forecasting"
    ]
  },
  {
    category: "Code Learning",
    description: "Educational features for skill development",
    icon: Brain,
    color: "text-purple-500",
    bgColor: "bg-purple-100 dark:bg-purple-900/20",
    features: [
      "Step-by-step code explanations",
      "Inline comments and documentation",
      "Best practice recommendations",
      "Performance optimization tips"
    ]
  }
];

export default function TextToSQLPythonPage() {
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
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
            <Code2 className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Text-to-SQL & Python</h1>
            <p className="text-xl text-muted-foreground">
              Convert natural language into executable code and advanced analytics
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Badge variant="secondary" className="gap-1">
            <Database className="h-3 w-3" />
            SQL Generation
          </Badge>
          <Badge variant="secondary" className="gap-1">
            <Code2 className="h-3 w-3" />
            Python Analytics
          </Badge>
          <Badge variant="secondary" className="gap-1">
            <Brain className="h-3 w-3" />
            Code Learning
          </Badge>
        </div>
      </div>

      <DocSection title="What You'll Get">
        <FeatureGrid features={features} />
      </DocSection>

      {/* How It Works */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">How Code Generation Works</h2>
        <p className="text-muted-foreground">
          Transform your questions into executable code in four simple steps.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
              <span className="text-primary font-bold">1</span>
          </div>
            <h3 className="font-semibold">Ask Your Question</h3>
            <p className="text-sm text-muted-foreground">
              Describe what analysis you want to perform in plain English
                </p>
              </div>
          
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
              <span className="text-primary font-bold">2</span>
            </div>
            <h3 className="font-semibold">AI Generates Code</h3>
            <p className="text-sm text-muted-foreground">
              Smart AI creates optimized SQL queries or Python scripts
            </p>
        </div>

          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
              <span className="text-primary font-bold">3</span>
          </div>
            <h3 className="font-semibold">Review & Learn</h3>
            <p className="text-sm text-muted-foreground">
              See the generated code with explanations and comments
            </p>
              </div>
          
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
              <span className="text-primary font-bold">4</span>
            </div>
            <h3 className="font-semibold">Execute & Export</h3>
            <p className="text-sm text-muted-foreground">
              Run the code directly or export for use in your environment
            </p>
          </div>
        </div>
      </div>

      <Separator />

      {/* Example Queries */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Example Code Generation Requests</h2>
        <p className="text-muted-foreground">
          Here are some example questions that generate SQL queries and Python code:
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
          <h4 className="font-medium mb-2">💻 Code Generation Tips</h4>
          <ul className="text-sm text-muted-foreground space-y-1 ml-4">
            <li>• Be specific about the analysis you want to perform</li>
            <li>• Mention the type of output you prefer (SQL query, Python script, visualization)</li>
            <li>• Include any specific libraries or methods you want to use</li>
            <li>• Ask for code explanations to learn while you analyze</li>
              </ul>
            </div>
          </div>

      <Separator />

      {/* Code Examples */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Generated Code Examples</h2>
        <p className="text-muted-foreground">
          See examples of SQL queries and Python code generated from natural language questions.
        </p>
        
        <div className="space-y-6">
          {codeExamples.map((example, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg flex items-center gap-2">
                      {example.type === 'SQL Query' ? (
                        <Database className="h-5 w-5 text-blue-500" />
                      ) : (
                        <Code2 className="h-5 w-5 text-green-500" />
                      )}
                      {example.type}
                    </CardTitle>
                    <CardDescription className="mt-1">
                      Question: "{example.question}"
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Copy className="h-3 w-3" />
                      Copy
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Play className="h-3 w-3" />
                      Run
                    </Button>
            </div>
          </div>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <pre className="text-sm text-muted-foreground">
                    <code>{example.code}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator />

      {/* Capabilities */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Code Generation Capabilities</h2>
        <p className="text-muted-foreground">
          From simple queries to advanced analytics, here's what our AI can generate for you.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilities.map((capability) => (
            <Card key={capability.category} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-10 h-10 ${capability.bgColor} rounded-lg flex items-center justify-center`}>
                    <capability.icon className={`h-5 w-5 ${capability.color}`} />
                  </div>
            <div>
                    <CardTitle className="text-lg">{capability.category}</CardTitle>
                    <CardDescription className="text-sm">{capability.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  {capability.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator />

      {/* Behind the Scenes */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Behind the Scenes</h2>
        <Card className="bg-gradient-to-r from-primary/5 to-blue-500/5 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code2 className="h-5 w-5" />
              AI Code Generation Engine
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Our AI understands your data schema, query intent, and best practices to generate optimized, executable code. 
              The system learns from millions of code examples and continuously improves to provide better results.
            </p>
          </CardContent>
        </Card>
      </div>

      <Separator />

      {/* Advanced Features */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Advanced Code Features</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Eye className="h-5 w-5 text-blue-500" />
                Code Explanation
              </CardTitle>
              <CardDescription>
                Understand every line of generated code with detailed explanations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-3 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  "This query uses a window function to calculate the previous month's revenue for comparison..."
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Download className="h-5 w-5 text-green-500" />
                Export Options
              </CardTitle>
              <CardDescription>
                Download code as files or copy to your development environment
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button variant="outline" size="sm" className="w-full gap-2">
                  <FileText className="h-3 w-3" />
                  Export .sql
                </Button>
                <Button variant="outline" size="sm" className="w-full gap-2">
                  <FileText className="h-3 w-3" />
                  Export .py
                </Button>
            </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Terminal className="h-5 w-5 text-purple-500" />
                Direct Execution
              </CardTitle>
              <CardDescription>
                Run generated code directly within Datapad environment
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" size="sm" className="w-full gap-2">
                <Play className="h-3 w-3" />
                Execute Code
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Separator />

      {/* Best Practices */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Code Generation Best Practices</h2>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Info className="h-5 w-5 text-blue-500" />
              Getting Better Code Results
            </CardTitle>
          </CardHeader>
          <CardContent>
          <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Be specific about your analysis goals</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <p className="text-sm text-green-800 dark:text-green-200">✓ "Calculate monthly cohort retention rates for users acquired in the last 6 months"</p>
            </div>
                  <div className="p-3 bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded-lg">
                    <p className="text-sm text-orange-800 dark:text-orange-200">✗ "Show me user retention"</p>
            </div>
          </div>
        </div>

              <Separator />
              
            <div>
                <h4 className="font-medium mb-2">Specify the type of code you want</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <p className="text-sm text-green-800 dark:text-green-200">✓ "Generate a Python script using pandas to analyze customer segments"</p>
              </div>
                  <div className="p-3 bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded-lg">
                    <p className="text-sm text-orange-800 dark:text-orange-200">✗ "Analyze customer data"</p>
            </div>
          </div>
        </div>
              
              <Separator />
              
              <div>
                <h4 className="font-medium mb-2">Ask for explanations to learn</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <p className="text-sm text-green-800 dark:text-green-200">✓ "Generate the SQL query and explain how the window functions work"</p>
          </div>
                  <div className="p-3 bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded-lg">
                    <p className="text-sm text-orange-800 dark:text-orange-200">✗ Just requesting code without explanations</p>
          </div>
        </div>
          </div>
        </div>
          </CardContent>
        </Card>
      </div>

      {/* Getting Started */}
      <Card className="bg-gradient-to-r from-primary/5 to-blue-500/5 border-primary/20">
        <CardHeader>
          <CardTitle>Ready to generate code from natural language?</CardTitle>
          <CardDescription>
            Connect your data sources and start asking questions to generate SQL and Python code.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="https://app.datapad.io/chat">
                Try Code Generation
              </Link>
          </Button>
            <Button asChild variant="outline">
              <Link href="/docs/get-started/quickstart">
                Quickstart Guide
        </Link>
          </Button>
            <Button asChild variant="outline">
              <Link href="/docs/guides/effective-queries">
                Query Writing Tips
        </Link>
            </Button>
      </div>
        </CardContent>
      </Card>
      
    </div>
  );
}