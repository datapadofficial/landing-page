import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MessageSquare, 
  ArrowRight, 
  Brain,
  Zap,
  Database,
  BarChart3,
  Code,
  Target,
  CheckCircle,
  Lightbulb,
  Search,
  TrendingUp
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Natural Language Queries",
  description: "Ask questions about your data in plain English. No SQL knowledge required - just describe what you want to know and get instant insights.",
};

export default function NaturalLanguageQueriesPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="bg-muted/50">
            Core Feature
          </Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Natural Language Queries</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Ask complex questions about your data using everyday language. 
          No need to learn SQL, Python, or complex query languages - just describe what you want to know.
        </p>
      </div>

      {/* Benefits */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Why Natural Language?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Instant Results</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Get answers in seconds instead of waiting hours for technical teams to write queries.
            </p>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <Brain className="h-4 w-4 text-primary" />
              <h4 className="font-medium">No Technical Skills</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Anyone can ask questions - no SQL, Python, or database knowledge required.
            </p>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <Target className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Business Context</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              AI understands business terminology and context, not just technical database structures.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">How It Works</h2>
        
        {/* Step 1 */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary font-medium text-sm">1</div>
            <h3 className="text-lg font-medium">Ask Your Question</h3>
          </div>
          <div className="ml-10 space-y-3">
            <p className="text-muted-foreground">
              Type or speak your question in natural language, just as you would ask a colleague:
            </p>
            <div className="p-4 rounded-lg border bg-muted/20">
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare className="h-4 w-4 text-primary" />
                <h4 className="font-medium text-sm">Example Questions</h4>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• "What was our revenue last month?"</li>
                <li>• "Show me the top 10 customers by lifetime value"</li>
                <li>• "Which marketing campaigns had the best ROI?"</li>
                <li>• "How many new users signed up this week vs last week?"</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary font-medium text-sm">2</div>
            <h3 className="text-lg font-medium">AI Understanding</h3>
          </div>
          <div className="ml-10 space-y-3">
            <p className="text-muted-foreground">
              The AI analyzes your question and maps it to your data:
            </p>
            <div className="grid md:grid-cols-4 gap-3 text-sm">
              <div className="p-3 rounded border bg-background text-center">
                <Brain className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="font-medium">Intent Recognition</p>
                <p className="text-xs text-muted-foreground">Understands what you're asking</p>
              </div>
              <div className="p-3 rounded border bg-background text-center">
                <Database className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="font-medium">Data Mapping</p>
                <p className="text-xs text-muted-foreground">Finds relevant tables & fields</p>
              </div>
              <div className="p-3 rounded border bg-background text-center">
                <Code className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="font-medium">Query Generation</p>
                <p className="text-xs text-muted-foreground">Creates optimized SQL/code</p>
              </div>
              <div className="p-3 rounded border bg-background text-center">
                <BarChart3 className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="font-medium">Visualization</p>
                <p className="text-xs text-muted-foreground">Presents results clearly</p>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary font-medium text-sm">3</div>
            <h3 className="text-lg font-medium">Get Insights</h3>
          </div>
          <div className="ml-10 space-y-2">
            <p className="text-muted-foreground">
              Receive comprehensive answers with data, visualizations, and insights:
            </p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Accurate numerical results</li>
              <li>• Relevant charts and graphs</li>
              <li>• Context and explanations</li>
              <li>• Follow-up question suggestions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Query Types */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Types of Questions You Can Ask</h2>
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Metrics & KPIs */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Metrics & KPIs
            </h3>
            <div className="p-4 rounded-lg border bg-muted/20">
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• "What's our monthly recurring revenue?"</li>
                <li>• "Show me customer acquisition cost by channel"</li>
                <li>• "What's the average order value this quarter?"</li>
                <li>• "How has our conversion rate changed over time?"</li>
                <li>• "What's our customer lifetime value?"</li>
              </ul>
            </div>
          </div>

          {/* Comparisons */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              Comparisons
            </h3>
            <div className="p-4 rounded-lg border bg-muted/20">
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• "Compare this month's sales to last month"</li>
                <li>• "Which product category performs best?"</li>
                <li>• "Show me year-over-year growth by region"</li>
                <li>• "Compare marketing channel effectiveness"</li>
                <li>• "Which sales rep has the highest close rate?"</li>
              </ul>
            </div>
          </div>

          {/* Trends & Patterns */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium flex items-center gap-2">
              <Search className="h-5 w-5 text-primary" />
              Trends & Patterns
            </h3>
            <div className="p-4 rounded-lg border bg-muted/20">
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• "Show me user growth over the last 6 months"</li>
                <li>• "What's our peak traffic day and time?"</li>
                <li>• "How does seasonality affect our sales?"</li>
                <li>• "What's the trend in customer support tickets?"</li>
                <li>• "Show me churn rate patterns by cohort"</li>
              </ul>
            </div>
          </div>

          {/* Segmentation */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Segmentation
            </h3>
            <div className="p-4 rounded-lg border bg-muted/20">
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• "Break down revenue by customer segment"</li>
                <li>• "Show me user behavior by age group"</li>
                <li>• "Which geographic regions are most profitable?"</li>
                <li>• "Analyze performance by device type"</li>
                <li>• "Group customers by purchase frequency"</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Capabilities */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Advanced AI Capabilities</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Context Understanding</h3>
            <div className="p-4 rounded-lg border bg-muted/20">
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 mt-0.5 text-green-500" />
                  <div>
                    <strong>Business Terminology:</strong> Understands industry-specific terms and metrics
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 mt-0.5 text-green-500" />
                  <div>
                    <strong>Time Context:</strong> Interprets "last month," "this quarter," "year-to-date" correctly
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 mt-0.5 text-green-500" />
                  <div>
                    <strong>Implicit Filters:</strong> Applies logical filters based on context
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Follow-up Conversations</h3>
            <div className="p-4 rounded-lg border bg-muted/20">
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-start gap-2">
                  <Lightbulb className="h-4 w-4 mt-0.5 text-primary" />
                  <div>
                    <strong>Suggested Questions:</strong> AI recommends relevant follow-up queries
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Lightbulb className="h-4 w-4 mt-0.5 text-primary" />
                  <div>
                    <strong>Conversational Flow:</strong> Maintains context across multiple questions
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Lightbulb className="h-4 w-4 mt-0.5 text-primary" />
                  <div>
                    <strong>Drill-down Analysis:</strong> Easily explore deeper into interesting findings
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Query Examples by Industry */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Industry-Specific Examples</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-2">E-commerce</h4>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• "Show me cart abandonment rate by traffic source"</li>
              <li>• "Which products have the highest return rate?"</li>
              <li>• "What's our average shipping time by region?"</li>
              <li>• "How does discount percentage affect conversion?"</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-2">SaaS</h4>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• "What's our monthly churn rate by plan type?"</li>
              <li>• "Show me feature adoption over time"</li>
              <li>• "Which onboarding steps have the highest drop-off?"</li>
              <li>• "Compare trial-to-paid conversion by source"</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-2">Marketing Agency</h4>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• "Which clients have the best campaign ROI?"</li>
              <li>• "Show me team utilization by project type"</li>
              <li>• "What's our average project profitability?"</li>
              <li>• "Compare performance across advertising platforms"</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-2">Finance</h4>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• "Show me cash flow by month for the last year"</li>
              <li>• "What's our accounts receivable aging?"</li>
              <li>• "Compare budget vs actual by department"</li>
              <li>• "Which expense categories are growing fastest?"</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-2">Healthcare</h4>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• "Show me patient satisfaction scores by provider"</li>
              <li>• "What's our average appointment wait time?"</li>
              <li>• "Compare treatment outcomes by location"</li>
              <li>• "How has readmission rate changed over time?"</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-2">Manufacturing</h4>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• "Show me production efficiency by line"</li>
              <li>• "What's our defect rate trend over time?"</li>
              <li>• "Compare inventory turnover by product"</li>
              <li>• "Which suppliers have the best delivery times?"</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Tips for Better Results</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-3">Be Specific</h4>
            <div className="space-y-2 text-sm">
              <div className="grid grid-cols-2 gap-2">
                <div className="text-red-600">❌ "Show sales"</div>
                <div className="text-green-600">✅ "Show monthly sales for Q4 2024"</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-red-600">❌ "Customer data"</div>
                <div className="text-green-600">✅ "Top 20 customers by lifetime value"</div>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-3">Use Business Terms</h4>
            <div className="space-y-2 text-sm">
              <div className="grid grid-cols-2 gap-2">
                <div className="text-red-600">❌ "SELECT * FROM orders"</div>
                <div className="text-green-600">✅ "Show me all orders from last week"</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-red-600">❌ "JOIN users ON orders.user_id"</div>
                <div className="text-green-600">✅ "Revenue per customer this month"</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t">
        <Link href="/docs/features/dashboards">
          <Button variant="outline" className="gap-2">
            <ArrowRight className="h-4 w-4 rotate-180" />
            AI Dashboards
          </Button>
        </Link>
        <Link href="/docs/features/text-to-sql-python">
          <Button className="gap-2">
            Text-to-SQL & Python
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
