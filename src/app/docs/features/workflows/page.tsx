import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Workflow, 
  ArrowRight, 
  Clock,
  Zap,
  Mail,
  Bell,
  BarChart3,
  Database,
  Users,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Calendar,
  Filter,
  RefreshCw
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Automated Workflows",
  description: "Set up intelligent automation workflows that monitor your data, detect changes, and take actions automatically. Never miss important business insights again.",
};

export default function WorkflowsFeaturePage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="bg-muted/50">
            Core Feature
          </Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Automated Workflows</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Create intelligent automation workflows that continuously monitor your data, 
          detect important changes, and notify your team automatically. Stay ahead of trends and issues.
        </p>
      </div>

      {/* Benefits */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Why Automated Workflows?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Always Monitoring</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              24/7 automated monitoring of your key metrics and business indicators.
            </p>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Instant Alerts</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Get notified immediately when important changes or anomalies are detected.
            </p>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <Users className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Team Coordination</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Automatically share insights and reports with the right team members.
            </p>
          </div>
        </div>
      </section>

      {/* Workflow Types */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Types of Workflows</h2>
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Monitoring Workflows */}
          <div className="p-6 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <AlertTriangle className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Monitoring & Alerts</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Watch key metrics and get alerted when thresholds are exceeded or patterns change.
            </p>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Revenue drops or spikes
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Traffic anomalies
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Conversion rate changes
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Inventory levels
              </li>
            </ul>
          </div>

          {/* Reporting Workflows */}
          <div className="p-6 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <BarChart3 className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Scheduled Reporting</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Automatically generate and distribute reports to stakeholders on a schedule.
            </p>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Daily/weekly/monthly reports
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Executive dashboards
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Performance summaries
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                KPI tracking
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">How Workflows Work</h2>
        
        {/* Step 1 */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary font-medium text-sm">1</div>
            <h3 className="text-lg font-medium">Define Your Trigger</h3>
          </div>
          <div className="ml-10 space-y-3">
            <p className="text-muted-foreground">
              Set up what should trigger your workflow:
            </p>
            <div className="grid md:grid-cols-3 gap-3 text-sm">
              <div className="p-3 rounded border bg-background">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="h-4 w-4 text-primary" />
                  <strong>Schedule-based</strong>
                </div>
                <p className="text-xs text-muted-foreground">
                  Daily at 9 AM, weekly on Monday, monthly reports
                </p>
              </div>
              <div className="p-3 rounded border bg-background">
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  <strong>Threshold-based</strong>
                </div>
                <p className="text-xs text-muted-foreground">
                  When revenue drops 20%, conversion rate changes
                </p>
              </div>
              <div className="p-3 rounded border bg-background">
                <div className="flex items-center gap-2 mb-1">
                  <Database className="h-4 w-4 text-primary" />
                  <strong>Data-based</strong>
                </div>
                <p className="text-xs text-muted-foreground">
                  When new data arrives, specific conditions met
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary font-medium text-sm">2</div>
            <h3 className="text-lg font-medium">Configure Actions</h3>
          </div>
          <div className="ml-10 space-y-3">
            <p className="text-muted-foreground">
              Choose what should happen when the trigger activates:
            </p>
            <div className="grid md:grid-cols-4 gap-3 text-sm">
              <div className="p-3 rounded border bg-background text-center">
                <Mail className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="font-medium">Send Email</p>
                <p className="text-xs text-muted-foreground">Reports, alerts</p>
              </div>
              <div className="p-3 rounded border bg-background text-center">
                <Bell className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="font-medium">Push Notification</p>
                <p className="text-xs text-muted-foreground">Instant alerts</p>
              </div>
              <div className="p-3 rounded border bg-background text-center">
                <BarChart3 className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="font-medium">Generate Report</p>
                <p className="text-xs text-muted-foreground">Dashboards, summaries</p>
              </div>
              <div className="p-3 rounded border bg-background text-center">
                <Workflow className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="font-medium">Trigger Workflow</p>
                <p className="text-xs text-muted-foreground">Chain actions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary font-medium text-sm">3</div>
            <h3 className="text-lg font-medium">Monitor & Optimize</h3>
          </div>
          <div className="ml-10 space-y-2">
            <p className="text-muted-foreground">
              Track workflow performance and make improvements:
            </p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• View execution history and success rates</li>
              <li>• Adjust triggers based on results</li>
              <li>• Fine-tune alert thresholds</li>
              <li>• Monitor delivery and engagement metrics</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Popular Workflow Examples */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Popular Workflow Examples</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          
          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-2">Daily Sales Report</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Send yesterday's sales summary to the leadership team every morning.
            </p>
            <div className="text-xs text-muted-foreground space-y-1">
              <div><strong>Trigger:</strong> Daily at 8:00 AM</div>
              <div><strong>Action:</strong> Email report with revenue, orders, top products</div>
              <div><strong>Recipients:</strong> Sales team, executives</div>
            </div>
          </div>

          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-2">Conversion Rate Alert</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Get notified when website conversion rate drops below 2%.
            </p>
            <div className="text-xs text-muted-foreground space-y-1">
              <div><strong>Trigger:</strong> Conversion rate &lt; 2%</div>
              <div><strong>Action:</strong> Instant Slack notification</div>
              <div><strong>Recipients:</strong> Marketing team</div>
            </div>
          </div>

          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-2">Weekly Performance Summary</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Comprehensive weekly business review sent every Monday.
            </p>
            <div className="text-xs text-muted-foreground space-y-1">
              <div><strong>Trigger:</strong> Monday at 9:00 AM</div>
              <div><strong>Action:</strong> Generate dashboard PDF</div>
              <div><strong>Recipients:</strong> All stakeholders</div>
            </div>
          </div>

          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-2">Inventory Low Stock Alert</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Alert when product inventory falls below reorder points.
            </p>
            <div className="text-xs text-muted-foreground space-y-1">
              <div><strong>Trigger:</strong> Stock level &lt; threshold</div>
              <div><strong>Action:</strong> Email + push notification</div>
              <div><strong>Recipients:</strong> Operations team</div>
            </div>
          </div>

          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-2">Customer Churn Risk</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Identify customers at risk of churning based on usage patterns.
            </p>
            <div className="text-xs text-muted-foreground space-y-1">
              <div><strong>Trigger:</strong> ML model prediction</div>
              <div><strong>Action:</strong> Add to CRM task list</div>
              <div><strong>Recipients:</strong> Customer success team</div>
            </div>
          </div>

          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-2">Campaign Performance Digest</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Daily summary of advertising campaign performance across all channels.
            </p>
            <div className="text-xs text-muted-foreground space-y-1">
              <div><strong>Trigger:</strong> Daily at 10:00 AM</div>
              <div><strong>Action:</strong> Multi-channel report</div>
              <div><strong>Recipients:</strong> Marketing managers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Advanced Workflow Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Smart Conditions</h3>
            <div className="p-4 rounded-lg border bg-muted/20">
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-start gap-2">
                  <Filter className="h-4 w-4 mt-0.5 text-primary" />
                  <div>
                    <strong>Multi-condition logic:</strong> Combine multiple triggers with AND/OR logic
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <TrendingUp className="h-4 w-4 mt-0.5 text-primary" />
                  <div>
                    <strong>Trend analysis:</strong> Detect patterns and rate of change
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Calendar className="h-4 w-4 mt-0.5 text-primary" />
                  <div>
                    <strong>Time-based conditions:</strong> Business hours, weekends, holidays
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Intelligent Actions</h3>
            <div className="p-4 rounded-lg border bg-muted/20">
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-start gap-2">
                  <RefreshCw className="h-4 w-4 mt-0.5 text-primary" />
                  <div>
                    <strong>Adaptive frequency:</strong> Adjust alert frequency based on urgency
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Users className="h-4 w-4 mt-0.5 text-primary" />
                  <div>
                    <strong>Smart routing:</strong> Send alerts to the right people based on context
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <BarChart3 className="h-4 w-4 mt-0.5 text-primary" />
                  <div>
                    <strong>Dynamic content:</strong> Personalize messages based on recipient role
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Setup Process */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Setting Up Your First Workflow</h2>
        <div className="p-6 rounded-lg border bg-muted/20">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-3">Quick Setup Steps</h4>
              <ol className="text-sm text-muted-foreground space-y-2">
                <li>1. Go to Workflows in your Datapad workspace</li>
                <li>2. Click "Create New Workflow"</li>
                <li>3. Choose a template or start from scratch</li>
                <li>4. Configure trigger conditions</li>
                <li>5. Set up actions and recipients</li>
                <li>6. Test and activate</li>
              </ol>
            </div>
            <div>
              <h4 className="font-medium mb-3">Best Practices</h4>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Start with simple workflows and add complexity</li>
                <li>• Test with a small group before full rollout</li>
                <li>• Set appropriate alert thresholds to avoid noise</li>
                <li>• Document workflow purposes for team clarity</li>
                <li>• Review and optimize regularly based on feedback</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Integration & Delivery */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Delivery Options</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <Mail className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Email</h4>
            </div>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Rich HTML reports</li>
              <li>• PDF attachments</li>
              <li>• Custom templates</li>
              <li>• Multiple recipients</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <Bell className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Push Notifications</h4>
            </div>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Instant mobile alerts</li>
              <li>• Browser notifications</li>
              <li>• Priority levels</li>
              <li>• Do not disturb settings</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <Users className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Team Integrations</h4>
            </div>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Slack channels</li>
              <li>• Microsoft Teams</li>
              <li>• Discord servers</li>
              <li>• Custom webhooks</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t">
        <Link href="/docs/features/text-to-sql-python">
          <Button variant="outline" className="gap-2">
            <ArrowRight className="h-4 w-4 rotate-180" />
            Text-to-SQL & Python
          </Button>
        </Link>
        <Link href="/docs/features">
          <Button className="gap-2">
            All Features
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
