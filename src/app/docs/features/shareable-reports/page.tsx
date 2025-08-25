import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Share2, 
  CheckCircle, 
  Users,
  Download,
  Calendar,
  Lock,
  Eye,
  FileText,
  Globe,
  Info
} from "lucide-react";
import Link from "next/link";
import { DocSection } from "@/components/docs/doc-section";
import { FeatureGrid } from "@/components/docs/feature-grid";

export const metadata: Metadata = {
  title: "Shareable Reports & Dashboards",
  description: "Generate and share professional reports and dashboards with stakeholders instantly. Control access and automate distribution.",
};

const features = [
  {
    icon: Share2,
    title: "Instant Sharing",
    description: "Share reports and dashboards with team members, clients, or stakeholders with a single click."
  },
  {
    icon: Lock,
    title: "Access Control",
    description: "Set permissions, password protection, and expiration dates to control who can view your data."
  },
  {
    icon: Calendar,
    title: "Automated Distribution",
    description: "Schedule reports to be automatically generated and sent on daily, weekly, or monthly intervals."
  }
];

const sharingMethods = [
  "Generate secure shareable links with optional passwords",
  "Export as PDF reports with professional formatting",
  "Email reports directly to stakeholders with custom messages",
  "Embed dashboards in websites or internal portals",
  "Schedule automated report delivery on custom intervals",
  "Create presentation-ready formats for meetings"
];

const reportTypes = [
  {
    title: "Executive Summaries",
    description: "High-level KPI reports for leadership and stakeholders",
    icon: Users,
    color: "text-blue-500",
    bgColor: "bg-blue-100 dark:bg-blue-900/20",
    features: [
      "Key metrics and trends overview",
      "Performance against goals",
      "Strategic recommendations",
      "Visual executive dashboards"
    ]
  },
  {
    title: "Operational Reports",
    description: "Detailed analytics for day-to-day business operations",
    icon: FileText,
    color: "text-green-500",
    bgColor: "bg-green-100 dark:bg-green-900/20",
    features: [
      "Detailed performance metrics",
      "Operational efficiency tracking",
      "Process optimization insights",
      "Team performance analysis"
    ]
  },
  {
    title: "Client Reports",
    description: "Professional reports for external stakeholders",
    icon: Globe,
    color: "text-purple-500",
    bgColor: "bg-purple-100 dark:bg-purple-900/20",
    features: [
      "White-labeled branding",
      "Client-specific insights",
      "Campaign performance data",
      "ROI and value demonstration"
    ]
  }
];

const accessLevels = [
  {
    level: "Public Access",
    description: "Anyone with the link can view",
    icon: Globe,
    settings: ["No password required", "View-only access", "Optional expiration date"]
  },
  {
    level: "Password Protected",
    description: "Requires password to access",
    icon: Lock,
    settings: ["Custom password", "View or comment permissions", "Access logging"]
  },
  {
    level: "Team Members Only",
    description: "Restricted to organization members",
    icon: Users,
    settings: ["Organization authentication", "Role-based permissions", "Full collaboration"]
  }
];

export default function ShareableReportsPage() {
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
          <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
            <Share2 className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Shareable Reports</h1>
            <p className="text-xl text-muted-foreground">
              Generate and share professional reports with stakeholders instantly
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Badge variant="secondary" className="gap-1">
            <Share2 className="h-3 w-3" />
            Instant Sharing
          </Badge>
          <Badge variant="secondary" className="gap-1">
            <Lock className="h-3 w-3" />
            Access Control
          </Badge>
          <Badge variant="secondary" className="gap-1">
            <Calendar className="h-3 w-3" />
            Automated
          </Badge>
        </div>
      </div>

      <DocSection title="What You'll Get">
        <FeatureGrid features={features} />
      </DocSection>

      {/* How It Works */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">How Report Sharing Works</h2>
        <p className="text-muted-foreground">
          Create, customize, and share professional reports in four simple steps.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
              <span className="text-primary font-bold">1</span>
            </div>
            <h3 className="font-semibold">Create Report</h3>
            <p className="text-sm text-muted-foreground">
              Generate dashboards or specific reports from your data analysis
            </p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
              <span className="text-primary font-bold">2</span>
            </div>
            <h3 className="font-semibold">Customize Format</h3>
            <p className="text-sm text-muted-foreground">
              Choose layout, branding, and include custom messaging
            </p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
              <span className="text-primary font-bold">3</span>
            </div>
            <h3 className="font-semibold">Set Permissions</h3>
            <p className="text-sm text-muted-foreground">
              Configure access levels, passwords, and expiration dates
            </p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
              <span className="text-primary font-bold">4</span>
            </div>
            <h3 className="font-semibold">Share & Track</h3>
            <p className="text-sm text-muted-foreground">
              Distribute via link, email, or schedule automatic delivery
            </p>
          </div>
        </div>
      </div>

      <Separator />

      {/* Sharing Methods */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Sharing Options</h2>
        <p className="text-muted-foreground">
          Multiple ways to share your reports and dashboards with different audiences:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sharingMethods.map((method, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer group">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-medium mt-0.5">
                    {index + 1}
                  </div>
                  <p className="text-sm font-medium group-hover:text-primary transition-colors">
                    {method}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-muted/50 p-4 rounded-lg">
          <h4 className="font-medium mb-2">📊 Report Sharing Tips</h4>
          <ul className="text-sm text-muted-foreground space-y-1 ml-4">
            <li>• Add context and commentary to help stakeholders understand insights</li>
            <li>• Use appropriate access controls for sensitive business data</li>
            <li>• Set up automated reports for regular stakeholder updates</li>
            <li>• Include actionable recommendations in executive summaries</li>
          </ul>
        </div>
      </div>

      <Separator />

      {/* Report Types */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Types of Shareable Reports</h2>
        <p className="text-muted-foreground">
          Create different report formats tailored to your audience and use case.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reportTypes.map((type) => (
            <Card key={type.title} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-10 h-10 ${type.bgColor} rounded-lg flex items-center justify-center`}>
                    <type.icon className={`h-5 w-5 ${type.color}`} />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{type.title}</CardTitle>
                    <CardDescription className="text-sm">{type.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  {type.features.map((feature, index) => (
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

      {/* Access Control */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Access Control & Security</h2>
        <p className="text-muted-foreground">
          Protect your data with granular access controls and security settings.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {accessLevels.map((access) => (
            <Card key={access.level} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <access.icon className="h-5 w-5 text-primary" />
                  {access.level}
                </CardTitle>
                <CardDescription>{access.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  {access.settings.map((setting, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>{setting}</span>
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
        <Card className="bg-gradient-to-r from-primary/5 to-cyan-500/5 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Share2 className="h-5 w-5" />
              Professional Report Engine
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Datapad automatically formats your data insights into professional reports with consistent branding, clear visualizations, and contextual explanations. 
              Reports are optimized for different devices and can be customized to match your organization's style.
            </p>
          </CardContent>
        </Card>
      </div>

      <Separator />

      {/* Advanced Features */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Advanced Sharing Features</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Calendar className="h-5 w-5 text-blue-500" />
                Automated Scheduling
              </CardTitle>
              <CardDescription>
                Set up recurring reports sent automatically to stakeholders
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-xs text-muted-foreground">• Daily, weekly, monthly schedules</div>
                <div className="text-xs text-muted-foreground">• Custom time zones</div>
                <div className="text-xs text-muted-foreground">• Holiday skip options</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Eye className="h-5 w-5 text-green-500" />
                View Analytics
              </CardTitle>
              <CardDescription>
                Track who has viewed your reports and when
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-xs text-muted-foreground">• View counts and timestamps</div>
                <div className="text-xs text-muted-foreground">• User engagement metrics</div>
                <div className="text-xs text-muted-foreground">• Access logs and history</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Download className="h-5 w-5 text-purple-500" />
                Export Options
              </CardTitle>
              <CardDescription>
                Multiple export formats for different use cases
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-xs text-muted-foreground">• PDF reports</div>
                <div className="text-xs text-muted-foreground">• PowerPoint presentations</div>
                <div className="text-xs text-muted-foreground">• CSV data exports</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Separator />

      {/* Best Practices */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Report Sharing Best Practices</h2>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Info className="h-5 w-5 text-blue-500" />
              Creating Effective Shared Reports
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Know your audience</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Tailor content and detail level to your stakeholders' needs and expertise
                </p>
                <div className="p-3 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <p className="text-sm text-green-800 dark:text-green-200">✓ Executive summaries for leadership, detailed analytics for operations teams</p>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-medium mb-2">Include context and insights</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Don't just show data - explain what it means and what actions to take
                </p>
                <div className="p-3 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <p className="text-sm text-green-800 dark:text-green-200">✓ Add commentary, recommendations, and next steps to your reports</p>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-medium mb-2">Set appropriate security</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Use access controls that match the sensitivity of your data
                </p>
                <div className="p-3 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <p className="text-sm text-green-800 dark:text-green-200">✓ Password protect sensitive reports, set expiration dates for temporary access</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Getting Started */}
      <Card className="bg-gradient-to-r from-primary/5 to-cyan-500/5 border-primary/20">
        <CardHeader>
          <CardTitle>Ready to share your data insights?</CardTitle>
          <CardDescription>
            Create professional reports and share them securely with your team and stakeholders.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="https://app.datapad.io/reports">
                Create Report
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/docs/get-started/quickstart">
                Quickstart Guide
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/docs/guides/team-collaboration">
                Team Collaboration
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
      
    </div>
  );
}