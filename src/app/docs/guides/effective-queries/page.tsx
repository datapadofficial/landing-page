import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MessageSquare, 
  ArrowRight, 
  CheckCircle,
  XCircle,
  Lightbulb,
  Target,
  Calendar,
  Filter,
  BarChart3,
  TrendingUp,
  Users,
  Clock
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Writing Effective Queries",
  description: "Learn how to ask better questions and get more accurate insights from your data using natural language queries in Datapad.",
};

export default function EffectiveQueriesGuidePage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="bg-muted/50">
            Guide
          </Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Writing Effective Queries</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Master the art of asking the right questions. Learn how to craft natural language queries 
          that get you accurate, actionable insights from your data every time.
        </p>
      </div>

      {/* Key Principles */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Key Principles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <Target className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Be Specific</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Clearly define what metrics, time periods, and filters you want.
            </p>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Include Time Context</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Always specify time periods to get relevant, comparable data.
            </p>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <MessageSquare className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Use Business Language</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Speak in terms your team understands, not technical jargon.
            </p>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <Filter className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Define Your Scope</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Specify segments, channels, or categories you want to analyze.
            </p>
          </div>
        </div>
      </section>

      {/* Query Structure */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Effective Query Structure</h2>
        <div className="space-y-6">
          
          {/* What + When + Where */}
          <div className="p-6 rounded-lg border bg-muted/20">
            <h3 className="text-lg font-medium mb-4">The What + When + Where Formula</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 rounded border bg-background">
                <h4 className="font-medium text-primary mb-2">WHAT (Metric)</h4>
                <p className="text-sm text-muted-foreground">
                  Clearly state what you want to measure
                </p>
                <ul className="text-xs text-muted-foreground mt-2 space-y-1">
                  <li>• Revenue, sales, conversions</li>
                  <li>• Customer count, retention rate</li>
                  <li>• Traffic, engagement, clicks</li>
                </ul>
              </div>
              <div className="p-4 rounded border bg-background">
                <h4 className="font-medium text-primary mb-2">WHEN (Time Period)</h4>
                <p className="text-sm text-muted-foreground">
                  Specify the time frame for analysis
                </p>
                <ul className="text-xs text-muted-foreground mt-2 space-y-1">
                  <li>• "Last month", "This quarter"</li>
                  <li>• "Year over year", "Week over week"</li>
                  <li>• Specific dates: "January 2024"</li>
                </ul>
              </div>
              <div className="p-4 rounded border bg-background">
                <h4 className="font-medium text-primary mb-2">WHERE (Segment)</h4>
                <p className="text-sm text-muted-foreground">
                  Define filters and segments
                </p>
                <ul className="text-xs text-muted-foreground mt-2 space-y-1">
                  <li>• By channel, campaign, product</li>
                  <li>• By region, customer type</li>
                  <li>• By device, traffic source</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-4 p-4 bg-primary/5 rounded border">
              <h4 className="font-medium mb-2">Example:</h4>
              <p className="text-sm">
                <span className="text-primary font-medium">"Show me revenue"</span> (WHAT) 
                <span className="text-primary font-medium"> "for last month"</span> (WHEN) 
                <span className="text-primary font-medium"> "broken down by marketing channel"</span> (WHERE)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Good vs Bad Examples */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Good vs. Bad Query Examples</h2>
        
        <div className="space-y-6">
          
          {/* Revenue Queries */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Revenue Analysis</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border border-red-200 bg-red-50 dark:bg-red-950/20 dark:border-red-800">
                <div className="flex items-center gap-2 mb-2">
                  <XCircle className="h-4 w-4 text-red-500" />
                  <h4 className="font-medium text-red-700 dark:text-red-300">Too Vague</h4>
                </div>
                <p className="text-sm text-red-600 dark:text-red-400 mb-2">"Show sales"</p>
                <p className="text-xs text-muted-foreground">
                  Missing time period and context. Which sales? When? How grouped?
                </p>
              </div>
              <div className="p-4 rounded-lg border border-green-200 bg-green-50 dark:bg-green-950/20 dark:border-green-800">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <h4 className="font-medium text-green-700 dark:text-green-300">Clear & Specific</h4>
                </div>
                <p className="text-sm text-green-600 dark:text-green-400 mb-2">"Show monthly sales revenue for Q4 2024, broken down by product category"</p>
                <p className="text-xs text-muted-foreground">
                  Clear metric, specific time period, useful segmentation.
                </p>
              </div>
            </div>
          </div>

          {/* Customer Queries */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Customer Analysis</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border border-red-200 bg-red-50 dark:bg-red-950/20 dark:border-red-800">
                <div className="flex items-center gap-2 mb-2">
                  <XCircle className="h-4 w-4 text-red-500" />
                  <h4 className="font-medium text-red-700 dark:text-red-300">Unclear Intent</h4>
                </div>
                <p className="text-sm text-red-600 dark:text-red-400 mb-2">"Customer data"</p>
                <p className="text-xs text-muted-foreground">
                  What about customers? Count? Value? Behavior?
                </p>
              </div>
              <div className="p-4 rounded-lg border border-green-200 bg-green-50 dark:bg-green-950/20 dark:border-green-800">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <h4 className="font-medium text-green-700 dark:text-green-300">Action-Oriented</h4>
                </div>
                <p className="text-sm text-green-600 dark:text-green-400 mb-2">"List the top 20 customers by lifetime value, showing their first purchase date and total orders"</p>
                <p className="text-xs text-muted-foreground">
                  Specific output, clear ranking criteria, relevant context.
                </p>
              </div>
            </div>
          </div>

          {/* Marketing Queries */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Marketing Performance</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border border-red-200 bg-red-50 dark:bg-red-950/20 dark:border-red-800">
                <div className="flex items-center gap-2 mb-2">
                  <XCircle className="h-4 w-4 text-red-500" />
                  <h4 className="font-medium text-red-700 dark:text-red-300">Missing Context</h4>
                </div>
                <p className="text-sm text-red-600 dark:text-red-400 mb-2">"How are campaigns doing?"</p>
                <p className="text-xs text-muted-foreground">
                  Which campaigns? What metrics define "doing well"?
                </p>
              </div>
              <div className="p-4 rounded-lg border border-green-200 bg-green-50 dark:bg-green-950/20 dark:border-green-800">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <h4 className="font-medium text-green-700 dark:text-green-300">Measurable Outcome</h4>
                </div>
                <p className="text-sm text-green-600 dark:text-green-400 mb-2">"Compare Google Ads vs Facebook Ads ROAS for the last 30 days, including click-through rates and conversion rates"</p>
                <p className="text-xs text-muted-foreground">
                  Specific channels, clear metrics, defined time frame, comparative analysis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Query Templates */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Query Templates by Use Case</h2>
        <div className="grid md:grid-cols-2 gap-6">
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Performance Analysis
            </h3>
            <div className="p-4 rounded-lg border bg-muted/20">
              <ul className="text-sm space-y-3">
                <li>
                  <strong>Trend Analysis:</strong><br />
                  <span className="text-muted-foreground">"Show [metric] trend over the last [time period], comparing to [previous period]"</span>
                </li>
                <li>
                  <strong>Top Performers:</strong><br />
                  <span className="text-muted-foreground">"List top [N] [items] by [metric] for [time period]"</span>
                </li>
                <li>
                  <strong>Growth Rate:</strong><br />
                  <span className="text-muted-foreground">"Calculate [metric] growth rate from [start date] to [end date]"</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              Comparative Analysis
            </h3>
            <div className="p-4 rounded-lg border bg-muted/20">
              <ul className="text-sm space-y-3">
                <li>
                  <strong>Channel Comparison:</strong><br />
                  <span className="text-muted-foreground">"Compare [metric] across [channels/segments] for [time period]"</span>
                </li>
                <li>
                  <strong>Before vs After:</strong><br />
                  <span className="text-muted-foreground">"Compare [metric] before and after [event/date]"</span>
                </li>
                <li>
                  <strong>Segment Performance:</strong><br />
                  <span className="text-muted-foreground">"Show [metric] breakdown by [segment] for [time period]"</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Customer Insights
            </h3>
            <div className="p-4 rounded-lg border bg-muted/20">
              <ul className="text-sm space-y-3">
                <li>
                  <strong>Customer Value:</strong><br />
                  <span className="text-muted-foreground">"Calculate average [metric] per customer for [segment] in [time period]"</span>
                </li>
                <li>
                  <strong>Retention Analysis:</strong><br />
                  <span className="text-muted-foreground">"Show customer retention rate by [cohort/segment] over [time period]"</span>
                </li>
                <li>
                  <strong>Acquisition Trends:</strong><br />
                  <span className="text-muted-foreground">"Analyze new customer acquisition by [source/channel] for [time period]"</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Time-Based Analysis
            </h3>
            <div className="p-4 rounded-lg border bg-muted/20">
              <ul className="text-sm space-y-3">
                <li>
                  <strong>Seasonal Patterns:</strong><br />
                  <span className="text-muted-foreground">"Show [metric] by [month/quarter] for the last [N] years"</span>
                </li>
                <li>
                  <strong>Day-of-Week Analysis:</strong><br />
                  <span className="text-muted-foreground">"Compare [metric] by day of week for [time period]"</span>
                </li>
                <li>
                  <strong>Hourly Patterns:</strong><br />
                  <span className="text-muted-foreground">"Show [metric] by hour of day for [specific days/period]"</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Tips */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Advanced Query Tips</h2>
        <div className="space-y-4">
          
          <div className="p-4 rounded-lg border border-blue-200 bg-blue-50 dark:bg-blue-950/20 dark:border-blue-800">
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb className="h-4 w-4 text-blue-500" />
              <h4 className="font-medium text-blue-700 dark:text-blue-300">Use Follow-up Questions</h4>
            </div>
            <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">
              Start broad, then drill down based on initial results.
            </p>
            <div className="text-xs text-muted-foreground">
              <strong>Example:</strong> "Show revenue by channel" → "Why did social media revenue drop 20%?" → "Which social campaigns underperformed?"
            </div>
          </div>

          <div className="p-4 rounded-lg border border-purple-200 bg-purple-50 dark:bg-purple-950/20 dark:border-purple-800">
            <div className="flex items-center gap-2 mb-2">
              <Target className="h-4 w-4 text-purple-500" />
              <h4 className="font-medium text-purple-700 dark:text-purple-300">Include Context for Better Analysis</h4>
            </div>
            <p className="text-sm text-purple-600 dark:text-purple-400 mb-2">
              Mention relevant business events, campaigns, or external factors.
            </p>
            <div className="text-xs text-muted-foreground">
              <strong>Example:</strong> "Show website traffic during our Black Friday promotion period (Nov 20-30, 2024)"
            </div>
          </div>

          <div className="p-4 rounded-lg border border-green-200 bg-green-50 dark:bg-green-950/20 dark:border-green-800">
            <div className="flex items-center gap-2 mb-2">
              <BarChart3 className="h-4 w-4 text-green-500" />
              <h4 className="font-medium text-green-700 dark:text-green-300">Request Specific Visualizations</h4>
            </div>
            <p className="text-sm text-green-600 dark:text-green-400 mb-2">
              Tell the AI how you want to see the results.
            </p>
            <div className="text-xs text-muted-foreground">
              <strong>Example:</strong> "Show quarterly revenue growth as a line chart with percentage change annotations"
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Common Mistakes to Avoid</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg border bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800">
            <h4 className="font-medium text-red-700 dark:text-red-300 mb-3">Don't Do This</h4>
            <ul className="text-sm text-red-600 dark:text-red-400 space-y-2">
              <li>• Ask multiple unrelated questions in one query</li>
              <li>• Use technical database terminology</li>
              <li>• Forget to specify time periods</li>
              <li>• Ask for "everything" without focus</li>
              <li>• Use ambiguous terms like "good" or "bad"</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg border bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
            <h4 className="font-medium text-green-700 dark:text-green-300 mb-3">Do This Instead</h4>
            <ul className="text-sm text-green-600 dark:text-green-400 space-y-2">
              <li>• Focus on one main question per query</li>
              <li>• Use business language your team understands</li>
              <li>• Always include relevant time frames</li>
              <li>• Specify the most important 3-5 metrics</li>
              <li>• Define success criteria with numbers</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Quick Reference */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Quick Reference Checklist</h2>
        <div className="p-6 rounded-lg border bg-muted/20">
          <h4 className="font-medium mb-4">Before asking your question, ensure you have:</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Specific metric or outcome defined
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Clear time period specified
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Relevant filters or segments mentioned
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Business context provided when helpful
              </li>
            </ul>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Output format preference (if any)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Comparison benchmark identified
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Single focused question per query
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Business terminology used
              </li>
            </ul>
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
        <Link href="/docs/guides/dashboard-best-practices">
          <Button className="gap-2">
            Dashboard Best Practices
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
