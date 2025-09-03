import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Bot, 
  BarChart3, 
  Workflow, 
  MessageSquare, 
  Code2,
  Mic,
  Share,
  Layers,
  Brain,
  Globe,
  Plug,
  ArrowRight,
  PlayCircle,
  Star,
  Zap
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Features",
  description: "Explore all Datapad features including AI chat, dashboards, workflows, and advanced analytics capabilities.",
};

const coreFeatures = [
  {
    title: "AI Data Agent",
    description: "Talk to your data like a human analyst. Get instant answers with charts and visualizations.",
    icon: Bot,
    href: "/docs/features/ai-chat",
    color: "text-red-500",
    bgColor: "bg-red-100 dark:bg-red-900/20",
    popular: true,
    capabilities: ["Natural language queries", "Instant statistical analysis", "Professional visualizations"]
  },
  {
    title: "Generative Dashboards", 
    description: "AI creates custom dashboards tailored to your business needs automatically.",
    icon: BarChart3,
    href: "/docs/features/dashboards",
    color: "text-green-500",
    bgColor: "bg-green-100 dark:bg-green-900/20",
    popular: true,
    capabilities: ["Auto-generated layouts", "Business-context aware", "Real-time updates"]
  },
  {
    title: "AI Workflows",
    description: "50+ ready-to-use AI workflows that create actionable deliverables from your data.",
    icon: Workflow,
    href: "/docs/features/workflows",
    color: "text-purple-500", 
    bgColor: "bg-purple-100 dark:bg-purple-900/20",
    popular: true,
    capabilities: ["Copy-paste ready campaigns", "Data-driven strategies", "Implementation ready"]
  },
  {
    title: "Text-to-SQL & Python",
    description: "Convert natural language questions into executable code and database queries.",
    icon: Code2,
    href: "/docs/features/text-to-sql-python",
    color: "text-blue-500",
    bgColor: "bg-blue-100 dark:bg-blue-900/20",
    capabilities: ["Optimized SQL generation", "Advanced Python analytics", "Code expertise automation"]
  }
];

const advancedFeatures = [
  {
    title: "Voice Mode",
    description: "Present data insights through voice interaction with real-time updates.",
    icon: Mic,
    href: "/docs/features/voice-mode",
    color: "text-emerald-500",
    bgColor: "bg-emerald-100 dark:bg-emerald-900/20",
    category: "Advanced"
  },
  {
    title: "Data Blending",
    description: "Combine data from multiple sources for comprehensive cross-platform analysis.",
    icon: Layers,
    href: "/docs/features/data-blending",
    color: "text-orange-500",
    bgColor: "bg-orange-100 dark:bg-orange-900/20",
    category: "Core"
  },
  {
    title: "Multi-Model AI",
    description: "Leverage Claude, ChatGPT, and other AI models for optimal results.",
    icon: Brain,
    href: "/docs/features/multi-model-ai", 
    color: "text-yellow-500",
    bgColor: "bg-yellow-100 dark:bg-yellow-900/20",
    category: "Advanced"
  },
  {
    title: "Web Access",
    description: "Real-time web data integration for comprehensive market analysis.",
    icon: Globe,
    href: "/docs/features/web-access",
    color: "text-indigo-500",
    bgColor: "bg-indigo-100 dark:bg-indigo-900/20",
    category: "Advanced"
  },
  {
    title: "50+ Integrations",
    description: "Connect all your data sources: databases, marketing, sales, and social platforms.",
    icon: Plug,
    href: "/docs/integrations",
    color: "text-pink-500",
    bgColor: "bg-pink-100 dark:bg-pink-900/20",
    category: "Integration"
  }
];

export default function FeaturesPage() {
  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/docs" className="hover:text-foreground">Docs</Link>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Features</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Discover all of Datapad's powerful features designed to transform how you interact with data. 
          From natural language queries to automated workflows, explore everything you can do with your AI data analyst.
        </p>
      </div>

      {/* Quick Start */}
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PlayCircle className="h-5 w-5 text-primary" />
            New to Datapad?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1">
              <p className="text-sm text-muted-foreground mb-3">
                Start with our quickstart guide to learn the basics, then explore advanced features as you grow more comfortable with the platform.
              </p>
            </div>
            <Button asChild size="lg" className="gap-2">
              <Link href="/docs/get-started/quickstart">
                <PlayCircle className="h-4 w-4" />
                Start with Quickstart
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Core Features */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-semibold">Core Features</h2>
          <Star className="h-5 w-5 text-yellow-500" />
        </div>
        <p className="text-muted-foreground">
          The essential features that make Datapad your autonomous AI data analyst.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coreFeatures.map((feature) => (
            <Card key={feature.title} className="hover:shadow-lg transition-all duration-200 group cursor-pointer border-2 hover:border-primary/50">
              <Link href={feature.href}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-3`}>
                      <feature.icon className={`h-6 w-6 ${feature.color}`} />
                    </div>
                    {feature.popular && (
                      <Badge variant="secondary" className="gap-1 text-xs">
                        <Star className="h-3 w-3 text-yellow-500" />
                        Popular
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="space-y-2">
                      {feature.capabilities.map((capability) => (
                        <div key={capability} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                          <span>{capability}</span>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Learn More <ArrowRight className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>

      {/* All Features */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">All Features</h2>
        <p className="text-muted-foreground">
          Explore the complete range of Datapad's capabilities organized by category.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {advancedFeatures.map((feature) => (
            <Card key={feature.title} className="hover:shadow-md transition-shadow group cursor-pointer">
              <Link href={feature.href}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className={`w-10 h-10 ${feature.bgColor} rounded-lg flex items-center justify-center`}>
                      <feature.icon className={`h-5 w-5 ${feature.color}`} />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {feature.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button variant="ghost" size="sm" className="w-full gap-2 group-hover:bg-muted transition-colors">
                    Learn More <ArrowRight className="h-3 w-3" />
                  </Button>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>

      {/* Feature Categories */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Browse by Category</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="hover:shadow-md transition-shadow group cursor-pointer">
            <Link href="/docs/features/ai-chat">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center mb-2">
                  <MessageSquare className="h-6 w-6 text-red-500" />
                </div>
                <CardTitle className="text-lg">AI & Chat</CardTitle>
                <CardDescription>Natural language interaction</CardDescription>
              </CardHeader>
            </Link>
          </Card>

          <Card className="hover:shadow-md transition-shadow group cursor-pointer">
            <Link href="/docs/features/dashboards">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mb-2">
                  <BarChart3 className="h-6 w-6 text-green-500" />
                </div>
                <CardTitle className="text-lg">Analytics</CardTitle>
                <CardDescription>Dashboards and reports</CardDescription>
              </CardHeader>
            </Link>
          </Card>

          <Card className="hover:shadow-md transition-shadow group cursor-pointer">
            <Link href="/docs/features/workflows">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mb-2">
                  <Zap className="h-6 w-6 text-purple-500" />
                </div>
                <CardTitle className="text-lg">Automation</CardTitle>
                <CardDescription>Workflows and processes</CardDescription>
              </CardHeader>
            </Link>
          </Card>

          <Card className="hover:shadow-md transition-shadow group cursor-pointer">
            <Link href="/docs/integrations">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mb-2">
                  <Plug className="h-6 w-6 text-blue-500" />
                </div>
                <CardTitle className="text-lg">Integrations</CardTitle>
                <CardDescription>Connect your data</CardDescription>
              </CardHeader>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
}
