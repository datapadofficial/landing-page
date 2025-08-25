import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Database, 
  BarChart3, 
  Building, 
  TrendingUp, 
  Search as SearchIcon,
  ArrowRight,
  Star,
  Share2
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Integrations",
  description: "Connect 50+ data sources including databases, marketing tools, CRMs, and analytics platforms to Datapad.",
};

const integrationCategories = [
  {
    name: "Analytics",
    icon: BarChart3,
    color: "text-blue-500",
    bgColor: "bg-blue-100 dark:bg-blue-900/20",
    integrations: [
      { name: "Google Analytics", href: "/docs/integrations/google-analytics", popular: true, logo: "/images/integrations/google-analytics.png" },
      { name: "Google Search Console", href: "/docs/integrations/google-searchconsole", logo: "/images/integrations/google-searchconsole.png" },
      { name: "Mixpanel", href: "/docs/integrations/mixpanel", logo: "/images/integrations/mixpanel.png" },
      { name: "Metabase", href: "/docs/integrations/metabase", logo: "/images/integrations/metabase.png" },
    ]
  },
  {
    name: "Social Media",
    icon: Share2,
    color: "text-cyan-500",
    bgColor: "bg-cyan-100 dark:bg-cyan-900/20",
    integrations: [
      { name: "Google My Business", href: "/docs/integrations/google-mybusiness", logo: "/images/integrations/google-mybusiness.png" },
      { name: "LinkedIn", href: "/docs/integrations/linkedin-social", logo: "/images/integrations/linkedin-social.png" },
      { name: "Instagram Business", href: "/docs/integrations/instagram-business", logo: "/images/integrations/instagram-business.png" },
      { name: "Facebook Page", href: "/docs/integrations/facebook", logo: "/images/integrations/facebook.png" },
    ]
  },
  {
    name: "Databases",
    icon: Database,
    color: "text-green-500",
    bgColor: "bg-green-100 dark:bg-green-900/20",
    integrations: [
      { name: "PostgreSQL", href: "/docs/integrations/postgresql", popular: true, logo: "/images/integrations/postgres.png" },
      { name: "MongoDB", href: "/docs/integrations/mongodb", logo: "/images/integrations/mongodb.png" },
      { name: "MySQL", href: "/docs/integrations/mysql", logo: "/images/integrations/mysql.png" },
      { name: "Microsoft SQL Server", href: "/docs/integrations/mssql", logo: "/images/integrations/mssql.png" },
      { name: "Google BigQuery", href: "/docs/integrations/google-bigquery", logo: "/images/integrations/google-bigquery.png" },
    ]
  },
  {
    name: "Advertising",
    icon: TrendingUp,
    color: "text-purple-500",
    bgColor: "bg-purple-100 dark:bg-purple-900/20",
    integrations: [
      { name: "Google Ads", href: "/docs/integrations/google-ads", popular: true, logo: "/images/integrations/google-ads.png" },
      { name: "Facebook Ads", href: "/docs/integrations/facebook-ads", popular: true, logo: "/images/integrations/facebook-ads.png" },
      { name: "LinkedIn Ads", href: "/docs/integrations/linkedin-ads", logo: "/images/integrations/linkedin-ads.png" },
      { name: "TikTok Ads", href: "/docs/integrations/tiktok-ads", logo: "/images/integrations/tiktok-ads.png" },
    ]
  },

  {
    name: "E-commerce",
    icon: Building,
    color: "text-pink-500",
    bgColor: "bg-pink-100 dark:bg-pink-900/20",
    integrations: [
      { name: "Shopify", href: "/docs/integrations/shopify", popular: true, logo: "/images/integrations/shopify.png" },
      { name: "Stripe", href: "/docs/integrations/stripe", logo: "/images/integrations/stripe.png" },
    ]
  }
];

const popularIntegrations = [
  { 
    name: "Google Analytics", 
    description: "Analyze website traffic and user behavior", 
    href: "/docs/integrations/google-analytics",
    category: "Analytics",
    icon: "/images/integrations/google-analytics.png"
  },
  { 
    name: "PostgreSQL", 
    description: "Query your database using natural language", 
    href: "/docs/integrations/postgresql",
    category: "Database",
    icon: "/images/integrations/postgres.png"
  },
  { 
    name: "Google Ads", 
    description: "Optimize your advertising campaigns", 
    href: "/docs/integrations/google-ads",
    category: "Advertising",
    icon: "/images/integrations/google-ads.png"
  },
  { 
    name: "Shopify", 
    description: "Analyze your e-commerce performance", 
    href: "/docs/integrations/shopify",
    category: "E-commerce",
    icon: "/images/integrations/shopify.png"
  },
];

export default function IntegrationsPage() {
  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/docs" className="hover:text-foreground">Docs</Link>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Integrations</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Connect 50+ data sources including databases, marketing tools, CRMs, and analytics platforms. 
          Get started with secure, one-click connections that sync your data in real-time.
        </p>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input 
          placeholder="Search integrations..." 
          className="pl-10"
        />
      </div>

      {/* Popular Integrations */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-semibold">Popular Integrations</h2>
          <Star className="h-5 w-5 text-yellow-500" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {popularIntegrations.map((integration) => (
            <Link
              key={integration.name}
              href={integration.href}
              className="group p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white rounded flex items-center justify-center border shadow-sm overflow-hidden">
                    {integration.icon ? (
                      <Image 
                        src={integration.icon} 
                        alt={`${integration.name} logo`}
                        width={20}
                        height={20}
                        className="w-5 h-5 object-contain"
                      />
                    ) : (
                      <div className="w-4 h-4 bg-gradient-to-br from-primary/20 to-primary/40 rounded" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium group-hover:text-primary transition-colors">
                      {integration.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {integration.description}
                    </p>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* All Integrations by Category */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">All Integrations</h2>
        
        {integrationCategories.map((category) => (
          <Card key={category.name}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className={`w-10 h-10 ${category.bgColor} rounded-lg flex items-center justify-center`}>
                  <category.icon className={`h-5 w-5 ${category.color}`} />
                </div>
                {category.name}
                <Badge variant="outline" className="ml-auto">
                  {category.integrations.length} integrations
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {category.integrations.map((integration) => (
                  <Link
                    key={integration.name}
                    href={integration.href}
                    className="group flex items-center justify-between p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-muted rounded flex items-center justify-center overflow-hidden">
                        {integration.logo ? (
                          <Image 
                            src={integration.logo} 
                            alt={`${integration.name} logo`}
                            width={20}
                            height={20}
                            className="w-5 h-5 object-contain"
                          />
                        ) : (
                          <div className="w-5 h-5 bg-gradient-to-br from-primary/20 to-primary/40 rounded" />
                        )}
                      </div>
                      <span className="font-medium text-sm">{integration.name}</span>
                      {integration.popular && (
                        <Star className="h-3 w-3 text-yellow-500" />
                      )}
                    </div>
                    <ArrowRight className="h-3 w-3 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Integration Request */}
      <Card className="bg-gradient-to-r from-primary/5 to-blue-500/5 border-primary/20">
        <CardHeader>
          <CardTitle>Don't see your integration?</CardTitle>
          <CardDescription>
            We're constantly adding new integrations. Let us know what you need and we'll prioritize it.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="mailto:hello@datapad.io?subject=Integration Request">
                Request Integration
              </Link>
            </Button>

          </div>
        </CardContent>
      </Card>

      {/* Getting Started */}
      <Card>
        <CardHeader>
          <CardTitle>Getting Started with Integrations</CardTitle>
          <CardDescription>
            Learn how to connect your data sources and get the most out of your integrations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <h4 className="font-medium">1. Choose Integration</h4>
              <p className="text-sm text-muted-foreground">
                Select from our extensive list of supported platforms
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">2. Secure Connection</h4>
              <p className="text-sm text-muted-foreground">
                Connect using OAuth or API keys with enterprise-grade security
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">3. Start Analyzing</h4>
              <p className="text-sm text-muted-foreground">
                Begin asking questions and generating insights immediately
              </p>
            </div>
          </div>
          <div className="mt-6">
            <Button asChild className="gap-2">
              <Link href="/docs/get-started/quickstart">
                <ArrowRight className="h-4 w-4" />
                Start with Quickstart Guide
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
