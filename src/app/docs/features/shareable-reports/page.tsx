import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Share2, 
  ArrowRight, 
  CheckCircle,
  Users,
  Mail,
  Download,
  Shield,
  Calendar,
  Eye,
  Link as LinkIcon
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Shareable Reports - Collaborate with Data",
  description: "Create, customize, and share professional reports with your team and stakeholders using Datapad's advanced sharing features.",
};

export default function ShareableReportsFeaturePage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="bg-muted/50">
            Feature
          </Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Shareable Reports</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Create professional, interactive reports and share them securely with your team, clients, 
          and stakeholders. Control access, track engagement, and keep everyone aligned with data-driven insights.
        </p>
      </div>

      {/* Overview */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Professional Report Sharing</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <Share2 className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Flexible Sharing Options</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Share via email, direct links, or embed reports in presentations and documents.
            </p>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Access Control</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Control who can view, comment, or edit reports with granular permission settings.
            </p>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Automated Distribution</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Schedule automatic report delivery to stakeholders on daily, weekly, or monthly basis.
            </p>
          </div>
        </div>
      </section>

      {/* Sharing Features */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Sharing & Collaboration Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Sharing Methods</h3>
            <div className="p-4 rounded-lg border bg-muted/20">
              <ul className="text-sm space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Public and private link sharing
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Email distribution with attachments
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Embedded iframes for websites
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  PDF and PowerPoint exports
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Slack and Teams integration
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Access & Security</h3>
            <div className="p-4 rounded-lg border bg-muted/20">
              <ul className="text-sm space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Password protection
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Expiration date controls
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Domain restrictions
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  View-only and edit permissions
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Download restrictions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Report Types */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Report Types & Formats</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg border bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
            <div className="flex items-center gap-2 mb-2">
              <Eye className="h-4 w-4 text-blue-500" />
              <h4 className="font-medium text-blue-700 dark:text-blue-300">Interactive Dashboards</h4>
            </div>
            <p className="text-sm text-blue-600 dark:text-blue-400">
              Live, interactive reports with real-time data updates and filtering capabilities.
            </p>
          </div>
          <div className="p-4 rounded-lg border bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
            <div className="flex items-center gap-2 mb-2">
              <Download className="h-4 w-4 text-green-500" />
              <h4 className="font-medium text-green-700 dark:text-green-300">Static Reports</h4>
            </div>
            <p className="text-sm text-green-600 dark:text-green-400">
              Fixed-point-in-time reports as PDF, PowerPoint, or image formats for presentations.
            </p>
          </div>
          <div className="p-4 rounded-lg border bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="h-4 w-4 text-purple-500" />
              <h4 className="font-medium text-purple-700 dark:text-purple-300">Scheduled Reports</h4>
            </div>
            <p className="text-sm text-purple-600 dark:text-purple-400">
              Automated reports delivered on schedule with the latest data snapshots.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Perfect For</h2>
        <div className="space-y-6">
          <div className="p-6 rounded-lg border bg-muted/20">
            <h3 className="text-lg font-medium mb-4">Executive Reporting</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">Board Presentations</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Monthly/quarterly business reviews</li>
                  <li>• KPI performance summaries</li>
                  <li>• Strategic decision support</li>
                  <li>• Investor relations materials</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Executive Dashboards</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Real-time business metrics</li>
                  <li>• Goal tracking and progress</li>
                  <li>• Department performance</li>
                  <li>• Competitive analysis</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg border bg-muted/20">
            <h3 className="text-lg font-medium mb-4">Client & Stakeholder Communication</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">Client Reports</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Campaign performance updates</li>
                  <li>• ROI and conversion metrics</li>
                  <li>• Custom branded reports</li>
                  <li>• Monthly service summaries</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Partner Sharing</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Vendor performance metrics</li>
                  <li>• Collaboration insights</li>
                  <li>• Joint business reviews</li>
                  <li>• Supply chain analytics</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Sharing Best Practices</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 rounded-lg border border-green-200 bg-green-50 dark:bg-green-950/20 dark:border-green-800">
            <h4 className="font-medium mb-3 text-green-700 dark:text-green-300">Security Guidelines</h4>
            <ul className="text-sm text-green-600 dark:text-green-400 space-y-2">
              <li>• Use password protection for sensitive data</li>
              <li>• Set appropriate expiration dates</li>
              <li>• Regularly review access permissions</li>
              <li>• Restrict downloads when necessary</li>
              <li>• Monitor report engagement metrics</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg border border-blue-200 bg-blue-50 dark:bg-blue-950/20 dark:border-blue-800">
            <h4 className="font-medium mb-3 text-blue-700 dark:text-blue-300">Design Tips</h4>
            <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-2">
              <li>• Include context and explanations</li>
              <li>• Use consistent branding</li>
              <li>• Optimize for mobile viewing</li>
              <li>• Add interactive filters for exploration</li>
              <li>• Provide data source information</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Setup Guide */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Creating Your First Shareable Report</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium">
                1
              </div>
              <div>
                <h4 className="font-medium mb-2">Create Your Report</h4>
                <p className="text-sm text-muted-foreground">
                  Build your dashboard or analysis using Datapad's reporting tools.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium">
                2
              </div>
              <div>
                <h4 className="font-medium mb-2">Configure Sharing Settings</h4>
                <p className="text-sm text-muted-foreground">
                  Set permissions, access controls, and sharing preferences.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium">
                3
              </div>
              <div>
                <h4 className="font-medium mb-2">Share with Stakeholders</h4>
                <p className="text-sm text-muted-foreground">
                  Distribute via your preferred method and track engagement.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-4 rounded-lg border bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
              <h4 className="font-medium mb-2 text-blue-700 dark:text-blue-300">Sharing Options</h4>
              <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                <li>• Public links (anyone with link)</li>
                <li>• Private links (specific recipients)</li>
                <li>• Email delivery with attachments</li>
                <li>• Embedded widgets for websites</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg border bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800">
              <h4 className="font-medium mb-2 text-amber-700 dark:text-amber-300">Pro Tips</h4>
              <ul className="text-sm text-amber-600 dark:text-amber-400 space-y-1">
                <li>• Test reports before sharing</li>
                <li>• Include contact information</li>
                <li>• Set up automated schedules</li>
                <li>• Track view analytics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Next Steps</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/docs/features/dashboards" className="p-4 rounded-lg border hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-2 mb-2">
              <Eye className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Create Dashboards</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Build interactive dashboards to share with your team
            </p>
          </Link>
          <Link href="/docs/guides/team-collaboration" className="p-4 rounded-lg border hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-2 mb-2">
              <Users className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Team Collaboration</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Learn about team permissions and collaboration features
            </p>
          </Link>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t">
        <Link href="/docs/features/voice-mode">
          <Button variant="outline" className="gap-2">
            <ArrowRight className="h-4 w-4 rotate-180" />
            Voice Mode
          </Button>
        </Link>
        <Link href="/docs/features/data-blending">
          <Button className="gap-2">
            Data Blending
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
