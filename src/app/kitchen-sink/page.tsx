"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import { useState } from "react";
import {
  Copy,
  Code,
  Zap,
  MessageCircle,
  TrendingUp,
  Users,
  DollarSign,
  FileText,
  HelpCircle,
  Navigation,
  Layout,
} from "lucide-react";

// Import all block components
import { MainHero } from "@/components/main-hero";
import { Hero223 } from "@/components/hero223";
import { HeroBlock } from "@/components/blocks/hero-block";
import { FeatureBlock } from "@/components/blocks/feature-block";
import { Feature166 } from "@/components/feature166";
import { Stats12 } from "@/components/stats12";
import { Pricing32 } from "@/components/pricing32";
import { Blog14 } from "@/components/blog14";
import { Content3 } from "@/components/content3";
import { Faq2 } from "@/components/faq2";
import { Logos } from "@/components/logos";
import { MainNavigation } from "@/components/main-navigation";
import { Footer } from "@/components/footer";
import { OrbitingIntegrations } from "@/components/creatives/orbiting-integrations";

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
};

interface BlockConfig {
  name: string;
  description: string;
  path: string;
  props: Record<string, any>; // eslint-disable-line @typescript-eslint/no-explicit-any
}

const renderBlockComponent = (block: BlockConfig) => {
  switch (block.name) {
    case "MainHero":
      return <MainHero {...block.props} />;
    case "Hero223":
      return <Hero223 />;
    case "HeroBlock":
      return <HeroBlock {...(block.props as any)} />; // eslint-disable-line @typescript-eslint/no-explicit-any
    case "FeatureBlock":
      return <FeatureBlock {...(block.props as any)} />; // eslint-disable-line @typescript-eslint/no-explicit-any
    case "Feature166":
      return <Feature166 />;
    case "Stats12":
      return <Stats12 />;
    case "Pricing32":
      return <Pricing32 />;
    case "Blog14":
      return <Blog14 />;
    case "Content3":
      return <Content3 />;
    case "Faq2":
      return <Faq2 />;
    case "MainNavigation":
      return <MainNavigation />;
    case "Footer":
      return <Footer />;
    case "Logos":
      return <Logos />;
    case "OrbitingIntegrations":
      return <OrbitingIntegrations />;
    default:
      return null;
  }
};

const blockCategories = [
  {
    id: "hero",
    title: "Hero Sections",
    icon: <Layout className="h-5 w-5" />,
    description:
      "Landing page hero sections with various layouts and animations",
    blocks: [
      {
        name: "MainHero",
        description:
          "Main hero with animated background, ticker text, and CTA buttons",
        path: "@/components/main-hero",
        props: {},
      },
      {
        name: "Hero223",
        description:
          "Alternative hero with line shadow text and animated boxes",
        path: "@/components/hero223",
        props: {},
      },
      {
        name: "HeroBlock",
        description:
          "Configurable hero block with badge, title, and trusted by section",
        path: "@/components/blocks/hero-block",
        props: {
          badge: "New Release",
          title: "Transform Your Data Into",
          subtitle: "Winning Strategies",
          description:
            "Connect your data sources, let our AI analyze your business patterns, then generate winning strategies with 1-click.",
          primaryCTA: { text: "Get Started", href: "#" },
          secondaryCTA: { text: "Watch Demo", href: "#" },
          trustedBy: ["Microsoft", "Google", "Apple", "Meta"],
        },
      },
    ],
  },
  {
    id: "features",
    title: "Feature Sections",
    icon: <Zap className="h-5 w-5" />,
    description: "Showcase product features and capabilities",
    blocks: [
      {
        name: "FeatureBlock",
        description: "Grid layout for features with icons and descriptions",
        path: "@/components/blocks/feature-block",
        props: {
          title: "Powerful Features",
          description:
            "Everything you need to analyze and optimize your business",
          features: [
            {
              icon: MessageCircle,
              title: "AI Chat Analysis",
              description:
                "Ask questions in natural language and get insights from your data",
            },
            {
              icon: TrendingUp,
              title: "Predictive Analytics",
              description:
                "Forecast trends and identify opportunities before your competitors",
            },
            {
              icon: Zap,
              title: "Real-time Automation",
              description:
                "Automate reports and alerts based on your business metrics",
            },
          ],
        },
      },
      {
        name: "Feature166",
        description: "Complex feature showcase with interactive mockups",
        path: "@/components/feature166",
        props: {},
      },
    ],
  },
  {
    id: "stats",
    title: "Statistics & Metrics",
    icon: <TrendingUp className="h-5 w-5" />,
    description: "Display metrics, statistics, and KPIs",
    blocks: [
      {
        name: "Stats12",
        description:
          "Animated statistics with toggle between monthly/yearly view",
        path: "@/components/stats12",
        props: {},
      },
    ],
  },
  {
    id: "pricing",
    title: "Pricing Tables",
    icon: <DollarSign className="h-5 w-5" />,
    description: "Pricing plans and subscription tables",
    blocks: [
      {
        name: "Pricing32",
        description:
          "Complete pricing table with monthly/yearly toggle and feature lists",
        path: "@/components/pricing32",
        props: {},
      },
    ],
  },
  {
    id: "content",
    title: "Content Sections",
    icon: <FileText className="h-5 w-5" />,
    description: "Blog posts, articles, and content layouts",
    blocks: [
      {
        name: "Blog14",
        description: "Blog listing with featured post and grid layout",
        path: "@/components/blog14",
        props: {},
      },
      {
        name: "Content3",
        description: "Long-form content with table of contents and navigation",
        path: "@/components/content3",
        props: {},
      },
    ],
  },
  {
    id: "support",
    title: "Support & FAQ",
    icon: <HelpCircle className="h-5 w-5" />,
    description: "FAQ sections and support content",
    blocks: [
      {
        name: "Faq2",
        description: "Simple FAQ section with questions and answers",
        path: "@/components/faq2",
        props: {},
      },
    ],
  },
  {
    id: "navigation",
    title: "Navigation & Layout",
    icon: <Navigation className="h-5 w-5" />,
    description: "Headers, footers, and navigation components",
    blocks: [
      {
        name: "MainNavigation",
        description: "Complete navigation with dropdowns and mobile menu",
        path: "@/components/main-navigation",
        props: {},
      },
      {
        name: "Footer",
        description: "Footer with logo, links, and company information",
        path: "@/components/footer",
        props: {},
      },
    ],
  },
  {
    id: "social-proof",
    title: "Social Proof",
    icon: <Users className="h-5 w-5" />,
    description: "Logos, testimonials, and trust indicators",
    blocks: [
      {
        name: "Logos",
        description: "Animated marquee of company logos",
        path: "@/components/logos",
        props: {},
      },
      {
        name: "OrbitingIntegrations",
        description: "Animated orbiting integration logos",
        path: "@/components/creatives/orbiting-integrations",
        props: {},
      },
    ],
  },
];

export default function KitchenSinkPage() {
  const [activeCategory, setActiveCategory] = useState("hero");
  const [copiedComponent, setCopiedComponent] = useState<string | null>(null);

  const handleCopyImport = (path: string, name: string) => {
    const importStatement = `import { ${name} } from "${path}";`;
    copyToClipboard(importStatement);
    setCopiedComponent(name);
    setTimeout(() => setCopiedComponent(null), 2000);
  };

  const handleCopySystemPrompt = () => {
    const systemPrompt = `# Datapad Landing Page Component Library

You are building a landing page using these available block components. Each component is production-ready and follows our design system.

## Available Block Components:

${blockCategories
  .map(
    (category) => `
### ${category.title}
${category.description}

${category.blocks
  .map(
    (block) => `
- **${block.name}**: ${block.description}
  - Import: \`import { ${block.name} } from "${block.path}";\`
  - Usage: \`<${block.name} ${
      Object.keys(block.props).length > 0 ? "..." : ""
    }/>\`
`
  )
  .join("")}
`
  )
  .join("")}

## Usage Guidelines:

1. Always import components from their exact paths shown above
2. Most components accept props for customization - check the component file for available props
3. Components are responsive and work in both light/dark themes
4. Use these blocks as building blocks for landing pages
5. Components follow our design system and work well together

## Example Landing Page Structure:
\`\`\`tsx
import { MainNavigation } from "@/components/main-navigation";
import { MainHero } from "@/components/main-hero";
import { Feature166 } from "@/components/feature166";
import { Stats12 } from "@/components/stats12";
import { Pricing32 } from "@/components/pricing32";
import { Footer } from "@/components/footer";

export default function LandingPage() {
  return (
    <>
      <MainNavigation />
      <MainHero />
      <Feature166 />
      <Stats12 />
      <Pricing32 />
      <Footer />
    </>
  );
}
\`\`\`

When building pages, combine these blocks to create compelling landing pages that drive conversions.`;

    copyToClipboard(systemPrompt);
    setCopiedComponent("system-prompt");
    setTimeout(() => setCopiedComponent(null), 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">
                Block Component Library
              </h1>
              <p className="text-sm text-muted-foreground">
                Production-ready blocks for building landing pages
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                onClick={handleCopySystemPrompt}
                variant="outline"
                size="sm"
                className="gap-2"
              >
                <Code className="h-4 w-4" />
                {copiedComponent === "system-prompt"
                  ? "Copied!"
                  : "Copy System Prompt"}
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64 shrink-0">
            <div className="sticky top-24 space-y-2">
              <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">
                Categories
              </h3>
              {blockCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors text-left ${
                    activeCategory === category.id
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  }`}
                >
                  {category.icon}
                  <div>
                    <div className="font-medium">{category.title}</div>
                    <div
                      className={`text-xs ${
                        activeCategory === category.id
                          ? "text-primary-foreground/70"
                          : "text-muted-foreground"
                      }`}
                    >
                      {category.blocks.length} block
                      {category.blocks.length !== 1 ? "s" : ""}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-8">
            {blockCategories
              .filter((category) => category.id === activeCategory)
              .map((category) => (
                <div key={category.id}>
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold mb-2">
                      {category.title}
                    </h2>
                    <p className="text-muted-foreground">
                      {category.description}
                    </p>
                  </div>

                  <div className="space-y-12">
                    {category.blocks.map((block) => (
                      <Card key={block.name} className="overflow-hidden">
                        <CardHeader className="border-b bg-muted/50">
                          <div className="flex items-center justify-between">
                            <div>
                              <CardTitle className="flex items-center gap-2">
                                <Code className="h-5 w-5" />
                                {block.name}
                              </CardTitle>
                              <CardDescription className="mt-1">
                                {block.description}
                              </CardDescription>
                            </div>
                            <div className="flex gap-2">
                              <Button
                                onClick={() =>
                                  handleCopyImport(block.path, block.name)
                                }
                                variant="outline"
                                size="sm"
                                className="gap-2"
                              >
                                <Copy className="h-4 w-4" />
                                {copiedComponent === block.name
                                  ? "Copied!"
                                  : "Copy Import"}
                              </Button>
                            </div>
                          </div>
                          <div className="mt-3 p-3 bg-muted rounded-md">
                            <code className="text-sm">
                              import &#123; {block.name} &#125; from "
                              {block.path}";
                            </code>
                          </div>
                        </CardHeader>
                        <CardContent className="p-0">
                          <div
                            className="bg-background transform scale-50 origin-top-left overflow-hidden"
                            style={{ height: "50%", width: "200%" }}
                          >
                            {renderBlockComponent(block)}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
