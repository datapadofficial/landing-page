"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { MainLogos } from "@/components/main-logos";
import { Faq } from "@/components/faq";
import { 
  Shield, 
  Lock, 
  Key, 
  Database,  
  UserCheck,
  Clock,
  AlertTriangle,
  ChevronRight,
  EarthLock,
  Star
} from "lucide-react";
import { AttributionLink } from "@/components/attribution-link";
import Image from "next/image";
import { TestimonialWall, type Testimonial } from "@/components/ui/testimonial-wall";

const securityTestimonials: Testimonial[] = [
  {
    name: "Noa K",
    role: "PhD Candidate",
    company: "Research Institute",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
    content: "I like that Datapad deletes the data—my sensitive research stays secure."
  },
  {
    name: "Dr. Sarah Chen",
    role: "Data Scientist",
    company: "Healthcare Corp",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    content: "The SOC 2 compliance gives me confidence that our patient data is protected with the highest standards."
  },
  {
    name: "Michael Rodriguez",
    role: "CISO",
    company: "FinTech Solutions",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
    content: "RBAC controls and encryption at rest and in transit—exactly what we need for financial data analysis."
  },
  {
    name: "Prof. Amanda Davis",
    role: "Dean of Data Science",
    company: "Stanford University",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
    content: "Student data privacy is paramount. Datapad's ephemeral processing ensures our research remains confidential while enabling powerful insights."
  },
  {
    name: "Carlos Martinez",
    role: "Head of Analytics",
    company: "Verizon",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
    content: "Handling telecom data requires strict security. The TX-RAMP certification gives us confidence in regulatory compliance."
  },
  {
    name: "Rachel Kim",
    role: "CTO",
    company: "EduTech Startup",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-6.webp",
    content: "As a startup, we can't afford security breaches. Datapad's built-in security lets us focus on growth, not compliance headaches."
  },
  {
    name: "Dr. James Wilson",
    role: "Research Director",
    company: "Pharma Labs",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
    content: "Ephemeral processing means our proprietary drug research data never stays on their servers. Perfect for our compliance needs."
  },
  {
    name: "Alex Zhang",
    role: "Game Analytics Lead",
    company: "Supercell",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    content: "Player data protection is critical in gaming. The automatic data deletion after processing keeps us GDPR compliant effortlessly."
  },
  {
    name: "Dr. Priya Patel",
    role: "VP of Research",
    company: "MIT",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
    content: "Academic research demands the highest data integrity. The role-based access controls ensure only authorized researchers can access sensitive datasets."
  },
  {
    name: "Hassan Al-Rashid",
    role: "Security Architect",
    company: "Emirates Telecom",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
    content: "Telecom data is highly regulated. Datapad's SOC 2 Type II compliance and encryption standards exceed our security requirements."
  },
  {
    name: "Sophie Laurent",
    role: "Founder & CEO",
    company: "AI Startup",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
    content: "As a founder, I sleep better knowing our customer data is never used for AI training. Complete data isolation is a game-changer."
  },
  {
    name: "Kevin O'Brien",
    role: "Data Privacy Officer",
    company: "King Digital Entertainment",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-6.webp",
    content: "Mobile gaming generates massive user data. The vulnerability reporting process and transparent security practices build player trust."
  },
  {
    name: "Dr. Maria Santos",
    role: "Registrar",
    company: "University of São Paulo",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
    content: "Student records require maximum protection. The 30-day data deletion guarantee gives us confidence in our privacy commitments."
  },
  {
    name: "Thomas Anderson",
    role: "Chief Data Officer",
    company: "Deutsche Telekom",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    content: "European data regulations are strict. Datapad's GDPR compliance approach shows they understand the nuances of international privacy law."
  },
  {
    name: "Lisa Park",
    role: "Security Engineer",
    company: "Series A Startup",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
    content: "The vulnerability reporting process is transparent and responsive. They take security seriously without the enterprise overhead."
  },
  {
    name: "David Kim",
    role: "Analytics Director",
    company: "Riot Games",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
    content: "Gaming analytics involves personal player data. The encryption at rest and in transit gives us confidence in data protection."
  }
];

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
              Your data is safe
              <br />
              <span className="text-primary">with Datapad</span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-muted-foreground max-w-3xl mx-auto">
              Customer trust and data security are at the forefront of what we do. We follow industry 
              security standards to ensure your data is always secure.
            </p>

            <h3 className="text-2xl mt-10">Enterprise-grade security</h3>
            <div className="mt-5 mb-10 flex items-center justify-center gap-x-10">
              <div className="flex items-center justify-center ">
              <span className="inline-flex items-center -space-x-4 mr-4">
                <Avatar className="size-10 border">
                  <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp" alt="User 1" />
                </Avatar>
                <Avatar className="size-10 border">
                  <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp" alt="User 2" />
                </Avatar>
                <Avatar className="size-10 border">
                  <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp" alt="User 3" />
                </Avatar>
                <Avatar className="size-10 border">
                  <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp" alt="User 4" />
                </Avatar>
              </span>
              </div>
              <div className="flex items-center justify-center gap-x-1">
              <Star className="w-10 h-10 fill-yellow-400 text-yellow-400" />
              <Star className="w-10 h-10 fill-yellow-400 text-yellow-400" />
              <Star className="w-10 h-10 fill-yellow-400 text-yellow-400" />
              <Star className="w-10 h-10 fill-yellow-400 text-yellow-400" />
              <Star className="w-10 h-10 fill-yellow-400 text-yellow-400" />
              </div>
            </div>

            <div className="mt-15 flex items-center justify-center gap-x-6">
              <Button asChild size="lg">
                <AttributionLink buttonLocation="security-hero-signup">
                  Get started for free
                  <ChevronRight className="ml-2 h-4 w-4" />
                </AttributionLink>
              </Button>
              <Button asChild variant="outline" size="lg">
                <AttributionLink href="/data-security" buttonLocation="security-hero-learn-more">
                  Learn more
                  <ChevronRight className="ml-2 h-4 w-4" />
                </AttributionLink>
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
                <Image 
                  src="/images/security/tx_ramp.png" 
                  alt="TX-RAMP Certification" 
                  width={256}
                  height={256}
                  className="w-64 h-64 object-contain"
                />
              </div>
              <p className="font-medium text-foreground">TX-Ramp</p>
              <div className="mt-2 flex justify-center">
                <Badge variant="secondary" className="bg-blue-100 text-blue-700 font-medium">
                  Compliant
                </Badge>
              </div>
            </div>
            <div className="text-center">
              <div className="relative w-64 h-64 flex items-center justify-center mx-auto mb-4">
                <Image 
                  src="/images/security/soc.png" 
                  alt="SOC 2 Type 2 Certification" 
                  width={192}
                  height={192}
                  className="w-48 h-48 object-contain"
                />
              </div>
              <p className="font-medium text-foreground">SOC 2</p>
              <div className="mt-2 flex justify-center">
                <Badge variant="secondary" className="bg-blue-100 text-blue-700 font-medium">
                  Compliant
                </Badge>
              </div>
            </div>
            <div className="text-center">
              <div className="relative w-64 h-64 flex items-center justify-center mx-auto mb-4">
                <Image 
                  src="/images/security/gdpr.png" 
                  alt="GDPR Compliance" 
                  width={160}
                  height={160}
                  className="w-40 h-40 object-contain"
                />
              </div>
              <p className="font-medium text-foreground">GDPR</p>
              <div className="mt-2 flex justify-center">
                <Badge variant="secondary" className="bg-blue-100 text-blue-700 font-medium">
                  Compliant
                </Badge>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
                <AttributionLink href="/data-security" buttonLocation="security-hero-learn-more">
                  Learn more
                  <ChevronRight className="ml-2 h-4 w-4" />
                </AttributionLink>
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
                  We do not store any data
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
      <TestimonialWall
        title="Trusted by security-conscious professionals"
        subtitle="See what data privacy experts say about our security measures"
        testimonials={securityTestimonials}
        className="bg-muted/50"
      />

      {/* Security Actions */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-2 hover:border-primary/20 transition-colors duration-200">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <AlertTriangle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Find a vulnerability in Datapad?
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Please report it here.
                    </p>
                  </div>
                </div>
                <Button asChild className="w-full" size="lg">
                  <a href="mailto:hello@datapad.io?subject=Security Vulnerability Report&body=Please describe the vulnerability you found:">
                    Report
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary/20 transition-colors duration-200">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Learn about our security measures
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      See details about Datapad security and compliance
                    </p>
                  </div>
                </div>
                <Button asChild className="w-full" size="lg">
                  <AttributionLink href="/data-security" buttonLocation="security-actions-learn-more">
                    Learn more
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </AttributionLink>
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