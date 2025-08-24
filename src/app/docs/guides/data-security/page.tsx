import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  ArrowRight, 
  Lock,
  Key,
  Eye,
  Database,
  CheckCircle,
  AlertTriangle,
  Globe,
  Users,
  FileText,
  Zap
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Data Security & Privacy",
  description: "Understanding how Datapad protects your data with enterprise-grade security measures, encryption, and privacy controls.",
};

export default function DataSecurityGuidePage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="bg-muted/50">
            Guide
          </Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Data Security & Privacy</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Your data security is our top priority. Learn how Datapad protects your information 
          with enterprise-grade security measures, encryption, and comprehensive privacy controls.
        </p>
      </div>

      {/* Security Overview */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Security Commitment</h2>
        <div className="p-6 rounded-lg border bg-muted/20">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-medium mb-2">Zero Trust Architecture</h4>
              <p className="text-sm text-muted-foreground">
                Every request is verified and authenticated before accessing any data.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Lock className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-medium mb-2">End-to-End Encryption</h4>
              <p className="text-sm text-muted-foreground">
                Data is encrypted in transit and at rest using industry-standard protocols.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-medium mb-2">Read-Only Access</h4>
              <p className="text-sm text-muted-foreground">
                Datapad only reads your data. We never modify, delete, or write to your systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Protection */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">How We Protect Your Data</h2>
        <div className="space-y-6">
          
          {/* Encryption */}
          <div className="p-6 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Lock className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Encryption Standards</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3">Data in Transit</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    TLS 1.3 encryption for all API connections
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Certificate pinning for secure communications
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Perfect Forward Secrecy (PFS) protocols
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Regular security certificate updates
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3">Data at Rest</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    AES-256 encryption for stored data
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Encrypted database backups
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Key rotation and management
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Hardware Security Module (HSM) protection
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Access Control */}
          <div className="p-6 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Key className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Access Control</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3">Authentication</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    OAuth 2.0 and OpenID Connect protocols
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Multi-factor authentication (MFA) support
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Single Sign-On (SSO) integration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Session management and timeout controls
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3">Authorization</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Role-based access control (RBAC)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Principle of least privilege
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Granular permission controls
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Regular access reviews and audits
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Compliance & Certifications</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          
          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-2 flex items-center gap-2">
              <Globe className="h-4 w-4 text-primary" />
              GDPR Compliance
            </h4>
            <p className="text-sm text-muted-foreground mb-2">
              Full compliance with European data protection regulations
            </p>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Data processing transparency</li>
              <li>• Right to erasure ("right to be forgotten")</li>
              <li>• Data portability and access rights</li>
              <li>• Privacy by design principles</li>
            </ul>
          </div>

          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-2 flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" />
              SOC 2 Type II
            </h4>
            <p className="text-sm text-muted-foreground mb-2">
              Independent audit of security and availability controls
            </p>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Security control effectiveness</li>
              <li>• Availability and uptime guarantees</li>
              <li>• Processing integrity verification</li>
              <li>• Confidentiality protection measures</li>
            </ul>
          </div>

          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-2 flex items-center gap-2">
              <FileText className="h-4 w-4 text-primary" />
              CCPA Compliance
            </h4>
            <p className="text-sm text-muted-foreground mb-2">
              California Consumer Privacy Act compliance
            </p>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Consumer rights to know and delete</li>
              <li>• Opt-out of data sale (not applicable)</li>
              <li>• Non-discrimination policies</li>
              <li>• Data processing disclosures</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Data Handling */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Data Handling Practices</h2>
        <div className="grid md:grid-cols-2 gap-6">
          
          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-3 flex items-center gap-2">
              <Database className="h-4 w-4 text-primary" />
              Data Collection
            </h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 text-green-500" />
                <div>
                  <strong>Minimal data collection:</strong> We only access data necessary for analysis
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 text-green-500" />
                <div>
                  <strong>Read-only access:</strong> No modification or deletion of your source data
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 text-green-500" />
                <div>
                  <strong>Explicit consent:</strong> Clear authorization for each data source
                </div>
              </li>
            </ul>
          </div>

          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-3 flex items-center gap-2">
              <Zap className="h-4 w-4 text-primary" />
              Data Processing
            </h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 text-green-500" />
                <div>
                  <strong>Secure processing:</strong> All operations in encrypted environments
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 text-green-500" />
                <div>
                  <strong>Data isolation:</strong> Your data is never mixed with other customers
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 text-green-500" />
                <div>
                  <strong>Purpose limitation:</strong> Data used only for agreed analysis purposes
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* User Controls */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Your Privacy Controls</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          
          <div className="p-4 rounded-lg border bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
            <h4 className="font-medium mb-2 text-blue-700 dark:text-blue-300">Data Access Control</h4>
            <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
              <li>• Granular connection permissions</li>
              <li>• Selective data source access</li>
              <li>• Time-limited access tokens</li>
              <li>• Revoke access anytime</li>
            </ul>
          </div>

          <div className="p-4 rounded-lg border bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
            <h4 className="font-medium mb-2 text-green-700 dark:text-green-300">Data Retention</h4>
            <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
              <li>• Configurable retention periods</li>
              <li>• Automatic data expiration</li>
              <li>• Manual data deletion</li>
              <li>• Export before deletion</li>
            </ul>
          </div>

          <div className="p-4 rounded-lg border bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800">
            <h4 className="font-medium mb-2 text-purple-700 dark:text-purple-300">Transparency</h4>
            <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
              <li>• Data access logs</li>
              <li>• Processing activity records</li>
              <li>• Clear privacy policies</li>
              <li>• Regular security updates</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Security Monitoring */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Continuous Security Monitoring</h2>
        <div className="p-6 rounded-lg border bg-muted/20">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-3">24/7 Monitoring</h4>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Real-time threat detection</li>
                <li>• Automated incident response</li>
                <li>• Security event logging and analysis</li>
                <li>• Regular penetration testing</li>
                <li>• Vulnerability scanning and patching</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Incident Response</h4>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Documented response procedures</li>
                <li>• Immediate containment protocols</li>
                <li>• Stakeholder notification processes</li>
                <li>• Forensic analysis capabilities</li>
                <li>• Recovery and remediation plans</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Security Best Practices for Users</h2>
        <div className="grid md:grid-cols-2 gap-6">
          
          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-3">Account Security</h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-500" />
                Enable two-factor authentication (2FA)
              </li>
              <li className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-500" />
                Use strong, unique passwords
              </li>
              <li className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-500" />
                Regularly review connected integrations
              </li>
              <li className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-500" />
                Monitor account access logs
              </li>
            </ul>
          </div>

          <div className="p-4 rounded-lg border bg-muted/20">
            <h4 className="font-medium mb-3">Data Source Security</h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-500" />
                Limit Datapad to minimum required permissions
              </li>
              <li className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-500" />
                Regularly audit connected accounts
              </li>
              <li className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-500" />
                Revoke access for unused integrations
              </li>
              <li className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-500" />
                Keep your source systems up to date
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Security Questions & Reporting</h2>
        <div className="p-6 rounded-lg border bg-muted/20">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-3">Security Inquiries</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Have questions about our security practices or need additional documentation?
              </p>
              <p className="text-sm">
                Email: <strong>security@datapad.io</strong>
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-3">Vulnerability Reporting</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Found a security vulnerability? We appreciate responsible disclosure.
              </p>
              <p className="text-sm">
                Email: <strong>security@datapad.io</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t">
        <Link href="/docs/guides/dashboard-best-practices">
          <Button variant="outline" className="gap-2">
            <ArrowRight className="h-4 w-4 rotate-180" />
            Dashboard Best Practices
          </Button>
        </Link>
        <Link href="/docs/guides/team-collaboration">
          <Button className="gap-2">
            Team Collaboration
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
