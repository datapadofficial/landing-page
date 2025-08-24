"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MainLogos } from "@/components/main-logos";
import { Faq } from "@/components/faq";
import { 
  Shield, 
  Lock, 
  Key, 
  Database, 
  Eye, 
  UserCheck,
  Clock,
  Globe,
  AlertTriangle,
  ChevronRight,
  EarthLock
} from "lucide-react";

const securityFAQs = [
  {
    question: "Where can I access your security certifications for audit purposes?",
    answer: "All our security certifications including SOC 2 Type II and TX-RAMP are available upon request. Please contact our team at hello@datapad.io for access to certification documents and audit reports."
  },
  {
    question: "Is my data stored?",
    answer: "We use ephemeral processing for your data analysis. Your processed data is securely deleted as soon as it's not needed. Your uploaded files are encrypted and retained so you can revisit or build on them later, but we never store your raw analytical data permanently."
  },
  {
    question: "Where is my data processed and stored?",
    answer: "Your data is processed in secure cloud infrastructure with data centers located in the United States. All data is encrypted in transit and at rest, and we maintain strict access controls to ensure your information remains secure."
  },
  {
    question: "Who can access my data?",
    answer: "Access to your data is strictly controlled through role-based access control (RBAC). Only authorized personnel with legitimate business needs can access your data, and all access is logged and monitored. We never share your data with third parties."
  },
  {
    question: "Does Datapad train models on my data?",
    answer: "No, absolutely not. We never use your data to train AI models. Your data stays private and isolated. No information is shared between customers, and everything remains confidential to your organization."
  },
  {
    question: "Can I delete all traces of my data?",
    answer: "Yes, you have full control over your data. You can request complete deletion of all your data at any time. We will remove all traces of your information from our systems within 30 days of your request, except where required by law."
  },
  {
    question: "How can I report a vulnerability in Datapad AI?",
    answer: "If you discover a security vulnerability, please report it immediately to our security team at security@datapad.io. We take all security reports seriously and will respond within 24 hours with next steps."
  }
];

export function SecurityPageContent() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 bg-background">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1>
              Secure data handling
              <br />
              <span className="text-primary">without sacrifice</span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-muted-foreground max-w-3xl mx-auto">
              Customer trust and data security are at the forefront of what we do. We follow industry 
              security standards to ensure your data is always secure.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg">
                Get started for free
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Learn more
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section - Using MainLogos component */}
      <MainLogos title={
        <h6 className="text-center">
          Used by individuals and teams at
          <br className="max-md:hidden" />
          <span className="text-muted-foreground">
            leading organizations worldwide.
          </span>
        </h6>
      } />

      {/* Compliance & Certifications */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2>
              Compliance & certifications
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
              Datapad is compliant with industry-leading standards including SOC 2 Type II and TX-RAMP, and is actively progressing toward GDPR compliance. All certifications are continuously monitored by our security team.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="relative w-64 h-64 flex items-center justify-center mx-auto mb-4">
                <img 
                  src="/images/security/tx_ramp.png" 
                  alt="TX-RAMP Certification" 
                  className="w-64 h-64 object-contain"
                />
              </div>
              <p className="font-medium text-foreground">TX-Ramp</p>
            </div>
            <div className="text-center">
              <div className="relative w-64 h-64 flex items-center justify-center mx-auto mb-4">
                <img 
                  src="/images/security/soc.png" 
                  alt="SOC 2 Type 2 Certification" 
                  className="w-48 h-48 object-contain"
                />
              </div>
              <p className="font-medium text-foreground">SOC 2 Type 2</p>
            </div>
            <div className="text-center">
              <div className="relative w-64 h-64 flex items-center justify-center mx-auto mb-4">
                <img 
                  src="/images/security/gdpr.png" 
                  alt="GDPR Compliance" 
                  className="w-40 h-40 object-contain"
                />
              </div>
              <p className="font-medium text-foreground">GDPR</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Learn more
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* How we protect your information */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2>
              How we protect your information
            </h2>
          </div>
          
          <div className="space-y-24">
            {/* First section: text-image */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3>
                  We only store your encrypted credentials, not the actual data
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We only store encrypted connection credentials to your data sources. Your actual data never 
                  leaves your systems - we connect securely and process everything in real-time without storing 
                  your sensitive information.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative w-64 h-64 bg-muted rounded-lg flex items-center justify-center">
                  <div className="w-32 h-32 bg-card rounded-full border-2 border-border flex items-center justify-center">
                    <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center">
                      <EarthLock className="w-10 h-10 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second section: image-text */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 flex justify-center">
                <div className="relative w-64 h-64 bg-muted rounded-lg flex items-center justify-center">
                  <div className="w-32 h-32 bg-card rounded-full border-2 border-border flex items-center justify-center">
                    <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center">
                      <Database className="w-10 h-10 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3>
                  We never use your data to train AI
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Your data stays private. No information is shared between customers. Everything remains 
                  isolated, keeping your business information confidential.
                </p>
              </div>
            </div>

            {/* Third section: text-image */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3>
                  Data is encrypted in-transit and at-rest
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Your information is encrypted when it's moving between systems and even when it's just 
                  sitting on our servers. This stops anyone from accessing or altering it without permission.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative w-64 h-64 bg-muted rounded-lg flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="w-20 h-20 bg-muted-foreground/20 rounded-lg flex items-center justify-center">
                      <Database className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <div className="w-20 h-20 bg-muted-foreground/20 rounded-lg flex items-center justify-center">
                      <Database className="w-8 h-8 text-muted-foreground" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-card rounded-full border-2 border-border flex items-center justify-center w-32 h-32 mx-auto my-auto">
                    <Lock className="w-16 h-16 text-primary" />
                  </div>
                </div>
              </div>
            </div>

            {/* Fourth section: image-text */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 flex justify-center">
                <div className="w-64 h-64 bg-muted rounded-lg flex items-center justify-center gap-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/20 rounded-lg flex items-center justify-center mb-2">
                      <Clock className="w-10 h-10 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">Ephemeral<br/>Processing</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/20 rounded-lg flex items-center justify-center mb-2">
                      <Shield className="w-10 h-10 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">Durable<br/>Security</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3>
                  Ephemeral processing, durable security
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We securely delete your processed data as soon as it's not needed. Short-term storage reduces 
                  risks and helps keep you compliant with data regulations. Your uploaded files are encrypted 
                  and retained so you can revisit or build on them later.
                </p>
              </div>
            </div>

            {/* Fifth section: text-image */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3>
                  Roles based access control (RBAC)
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Access is tightly controlled. Only the right people get access, reducing internal risks 
                  and ensuring accountability.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative w-64 h-64 bg-muted rounded-lg flex items-center justify-center">
                  <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center">
                    <Key className="w-16 h-16 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-card rounded-full border-2 border-border flex items-center justify-center">
                    <UserCheck className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <div className="absolute -bottom-4 left-8 w-12 h-12 bg-card rounded-full border-2 border-border flex items-center justify-center">
                    <UserCheck className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <div className="absolute -bottom-4 right-8 w-12 h-12 bg-card rounded-full border-2 border-border flex items-center justify-center">
                    <UserCheck className="w-6 h-6 text-muted-foreground" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl font-medium text-foreground">
            "I like that Datapad deletes the data—my sensitive research stays secure."
          </blockquote>
          <div className="mt-6">
            <p className="font-semibold text-foreground">Noa K</p>
            <p className="text-muted-foreground">PhD Candidate</p>
          </div>
        </div>
      </section>

      {/* Security Actions */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">
                    Find a vulnerability in Datapad?
                  </h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Please report it here.
                </p>
                <Button>
                  Report
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">
                    Learn about our security measures
                  </h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  See details about Datapad security and compliance
                </p>
                <Button>
                  Learn more
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section - Using existing Faq component */}
      <div className="bg-background items-center justify-center flex">
        <Faq 
            heading="Frequently asked questions"
            items={securityFAQs}
        />
       </div>
      {/* Contact Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2>
            Still have questions?
          </h2>
          <p className="text-muted-foreground mb-8">
            Reach out to our team any time, or check out our FAQs.
          </p>
          <Button variant="outline">
            <a href="mailto:hello@datapad.io">Get in touch</a>
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}