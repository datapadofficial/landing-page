import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  ArrowRight, 
  Share2,
  Crown,
  Eye,
  Edit,
  Clock,
  MessageSquare,
  Bell,
  Shield,
  CheckCircle,
  UserPlus,
  Settings
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Team Collaboration",
  description: "Learn how to effectively collaborate with your team using Datapad's sharing, permissions, and workflow features.",
};

export default function TeamCollaborationGuidePage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="bg-muted/50">
            Guide
          </Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Team Collaboration</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Maximize your team's productivity with Datapad's collaboration features. 
          Share insights, manage permissions, and keep everyone aligned with data-driven decisions.
        </p>
      </div>

      {/* Collaboration Features */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Collaboration Features Overview</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <Share2 className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Dashboard Sharing</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Share dashboards with team members, clients, or stakeholders with controlled access.
            </p>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <Crown className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Role-Based Permissions</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Control who can view, edit, or manage different aspects of your workspace.
            </p>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Scheduled Reports</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Automatically deliver insights to team members on daily, weekly, or monthly schedules.
            </p>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <MessageSquare className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Comments & Annotations</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Add context and discussions directly to dashboards and reports.
            </p>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <Bell className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Smart Notifications</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Keep teams informed about important changes and anomalies in real-time.
            </p>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Secure Access</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Enterprise-grade security with SSO, 2FA, and audit logs for team access.
            </p>
          </div>
        </div>
      </section>

      {/* User Roles */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">User Roles & Permissions</h2>
        <div className="space-y-6">
          
          {/* Owner */}
          <div className="p-6 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Crown className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Workspace Owner</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3">Full Access Permissions</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Manage all integrations and data sources
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Create, edit, and delete all dashboards
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Invite and manage team members
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Configure billing and subscription settings
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3">Administrative Control</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Set workspace policies and security settings
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Access audit logs and usage analytics
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Transfer ownership and manage roles
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Export data and manage retention policies
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Admin */}
          <div className="p-6 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                <Settings className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold">Administrator</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3">Content Management</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Create and manage dashboards and reports
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Set up automated workflows and alerts
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Manage data connections (with approval)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Share content with external stakeholders
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3">Team Management</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Invite team members (Editor/Viewer roles)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Manage permissions for shared content
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Access team usage statistics
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Configure notification settings
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Editor */}
          <div className="p-6 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                <Edit className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold">Editor</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3">Content Creation</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Create and edit their own dashboards
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Use natural language queries and AI features
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Generate reports and exports
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Add comments and annotations
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3">Collaboration</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Share dashboards with team members
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Access shared content (based on permissions)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Create and schedule personal reports
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    View workspace activity and notifications
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Viewer */}
          <div className="p-6 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                <Eye className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold">Viewer</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3">Read-Only Access</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    View shared dashboards and reports
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Access filtered and scoped data views
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Export reports (if permitted)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Receive scheduled reports and notifications
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3">Limited Interaction</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Add comments to shared content
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Use interactive filters on dashboards
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Subscribe to alerts and updates
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Access mobile and offline content
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sharing Best Practices */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Sharing Best Practices</h2>
        <div className="grid md:grid-cols-2 gap-6">
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Internal Team Sharing</h3>
            <div className="p-4 rounded-lg border bg-muted/20">
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 mt-0.5 text-green-500" />
                  <div>
                    <strong>Create role-specific dashboards:</strong> Design different views for executives, managers, and analysts
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 mt-0.5 text-green-500" />
                  <div>
                    <strong>Use descriptive names:</strong> Clear titles help team members find relevant content quickly
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 mt-0.5 text-green-500" />
                  <div>
                    <strong>Set up team folders:</strong> Organize shared content by department or project
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 mt-0.5 text-green-500" />
                  <div>
                    <strong>Schedule regular updates:</strong> Automate weekly/monthly reports for consistent communication
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">External Stakeholder Sharing</h3>
            <div className="p-4 rounded-lg border bg-muted/20">
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 mt-0.5 text-green-500" />
                  <div>
                    <strong>Create client-specific views:</strong> Filter data to show only relevant metrics for each stakeholder
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 mt-0.5 text-green-500" />
                  <div>
                    <strong>Use public links sparingly:</strong> Prefer invited access with authentication for sensitive data
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 mt-0.5 text-green-500" />
                  <div>
                    <strong>Set expiration dates:</strong> Time-limit external access for security and relevance
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 mt-0.5 text-green-500" />
                  <div>
                    <strong>Include context:</strong> Add explanations and annotations for external viewers
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Management */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Team Workflow Management</h2>
        <div className="space-y-6">
          
          {/* Daily Workflows */}
          <div className="p-6 rounded-lg border bg-muted/20">
            <h3 className="text-lg font-medium mb-4">Daily Operations</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 rounded border bg-background">
                <h4 className="font-medium mb-2 text-blue-600 dark:text-blue-400">Morning Standup</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Automated overnight reports</li>
                  <li>• Key metric alerts</li>
                  <li>• Team performance summaries</li>
                  <li>• Priority action items</li>
                </ul>
              </div>
              <div className="p-4 rounded border bg-background">
                <h4 className="font-medium mb-2 text-green-600 dark:text-green-400">Mid-Day Check-ins</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Real-time dashboard reviews</li>
                  <li>• Progress toward daily goals</li>
                  <li>• Anomaly notifications</li>
                  <li>• Quick course corrections</li>
                </ul>
              </div>
              <div className="p-4 rounded border bg-background">
                <h4 className="font-medium mb-2 text-purple-600 dark:text-purple-400">End-of-Day Wrap-up</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Daily performance summaries</li>
                  <li>• Achievement notifications</li>
                  <li>• Next-day preparation alerts</li>
                  <li>• Team collaboration updates</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Weekly & Monthly */}
          <div className="p-6 rounded-lg border bg-muted/20">
            <h3 className="text-lg font-medium mb-4">Periodic Reviews</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3">Weekly Team Reviews</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Comprehensive performance dashboards</li>
                  <li>• Goal progress tracking and analysis</li>
                  <li>• Cross-team collaboration insights</li>
                  <li>• Upcoming week planning data</li>
                  <li>• Success stories and challenges</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3">Monthly Strategic Sessions</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Executive-level KPI summaries</li>
                  <li>• Trend analysis and forecasting</li>
                  <li>• Competitive benchmarking data</li>
                  <li>• Resource allocation insights</li>
                  <li>• Strategic decision support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Communication Integration */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Communication & Integration</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          
          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-2">Slack Integration</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Get notifications and share insights directly in your team channels
            </p>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Automated alert notifications</li>
              <li>• Dashboard sharing in channels</li>
              <li>• Daily/weekly report summaries</li>
              <li>• Interactive chart previews</li>
            </ul>
          </div>

          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-2">Microsoft Teams</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Seamless integration with your Microsoft 365 workflow
            </p>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Teams channel notifications</li>
              <li>• Meeting dashboard integration</li>
              <li>• SharePoint report sharing</li>
              <li>• Calendar-based reporting</li>
            </ul>
          </div>

          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-2">Email Reports</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Professional email reports with rich formatting and attachments
            </p>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• HTML-formatted summaries</li>
              <li>• PDF dashboard exports</li>
              <li>• CSV data attachments</li>
              <li>• Custom email templates</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Getting Started with Team Collaboration</h2>
        <div className="p-6 rounded-lg border bg-muted/20">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-3">Quick Setup Steps</h4>
              <ol className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-center gap-2">
                  <UserPlus className="h-4 w-4 text-primary" />
                  Invite team members to your workspace
                </li>
                <li className="flex items-center gap-2">
                  <Crown className="h-4 w-4 text-primary" />
                  Assign appropriate roles and permissions
                </li>
                <li className="flex items-center gap-2">
                  <Share2 className="h-4 w-4 text-primary" />
                  Create and share your first dashboard
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  Set up automated reports and notifications
                </li>
                <li className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-primary" />
                  Configure team communication preferences
                </li>
              </ol>
            </div>
            <div>
              <h4 className="font-medium mb-3">Success Tips</h4>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Start with a pilot team or department</li>
                <li>• Establish clear naming conventions</li>
                <li>• Create documentation for dashboard usage</li>
                <li>• Schedule regular training sessions</li>
                <li>• Gather feedback and iterate on workflows</li>
                <li>• Celebrate data-driven wins as a team</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t">
        <Link href="/docs/guides/data-security">
          <Button variant="outline" className="gap-2">
            <ArrowRight className="h-4 w-4 rotate-180" />
            Data Security
          </Button>
        </Link>
        <Link href="/docs/features">
          <Button className="gap-2">
            Explore Features
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
