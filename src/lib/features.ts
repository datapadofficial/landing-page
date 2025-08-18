export interface Feature {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  color: string;
  benefits: string[];
  useCases: string[];
  ctaText: string;
  ctaUrl: string;
  category: "core" | "integration" | "automation" | "advanced";
  priority: number;
  videoUrl: string;
  // Special redirect URL for features that don't follow the standard /features/[slug] pattern
  redirectUrl?: string;
}

export const features: Feature[] = [
  {
    slug: "ai-data-agent",
    title: "AI Data Agent",
    shortDescription:
      "Talk to your data like a human analyst. Get instant answers with charts and visualizations.",
    longDescription:
      "Transform how you interact with data through natural conversation. Our AI agent understands context, asks clarifying questions, and delivers sophisticated statistical analysis with professional visualizations. No SQL knowledge required - just ask questions in plain English and get expert-level insights instantly.",
    icon: "Bot",
    color: "chart-red",
    benefits: [
      "Natural language data queries",
      "Instant statistical analysis",
      "Professional charts and visualizations",
      "Context-aware responses",
      "No technical skills required",
    ],
    useCases: [
      "Business performance analysis",
      "Marketing campaign optimization",
      "Sales trend identification",
      "Customer behavior insights",
      "Financial reporting",
    ],
    ctaText: "Try AI Agent",
    ctaUrl: "https://app.datapad.io",
    category: "core",
    priority: 1,
    videoUrl:
      "https://framerusercontent.com/assets/s6inNxqh5m9k41CDacUiLwBUGVc.mp4",
  },
  {
    slug: "dashboards",
    title: "Dashboards",
    shortDescription:
      "AI creates custom dashboards tailored to your business needs automatically.",
    longDescription:
      "Skip the manual dashboard building. Our AI analyzes your data sources and business context to automatically generate relevant dashboards with the right metrics, visualizations, and layouts. Get operational insights without the setup time.",
    icon: "BarChart3",
    color: "chart-green",
    benefits: [
      "Automatic dashboard creation",
      "Business-context aware metrics",
      "Professional layouts and design",
      "Real-time data updates",
      "Customizable and shareable",
    ],
    useCases: [
      "Executive reporting",
      "Marketing performance tracking",
      "Sales pipeline monitoring",
      "Customer analytics",
      "Operational KPI tracking",
    ],
    ctaText: "Generate Dashboard",
    ctaUrl: "https://app.datapad.io",
    category: "core",
    priority: 2,
    videoUrl:
      "https://framerusercontent.com/assets/s6inNxqh5m9k41CDacUiLwBUGVc.mp4",
  },
  {
    slug: "text-to-sql-python",
    title: "Text2SQL & Python",
    shortDescription:
      "Convert natural language questions into executable code and database queries.",
    longDescription:
      "Bridge the gap between business questions and technical implementation. Our AI seamlessly converts your natural language questions into optimized SQL queries and Python code, giving you the power of both database expertise and statistical programming without the learning curve.",
    icon: "Code2",
    color: "chart-purple",
    benefits: [
      "Natural language to code conversion",
      "Optimized SQL query generation",
      "Advanced Python analytics",
      "Database expertise automation",
      "Statistical programming made simple",
    ],
    useCases: [
      "Complex data extraction",
      "Advanced statistical modeling",
      "Custom analytics workflows",
      "Data transformation pipelines",
      "Predictive analysis",
    ],
    ctaText: "Try Code Generation",
    ctaUrl: "https://app.datapad.io",
    category: "core",
    priority: 3,
    videoUrl:
      "https://framerusercontent.com/assets/s6inNxqh5m9k41CDacUiLwBUGVc.mp4",
  },
  {
    slug: "integrations",
    title: "50+ Integrations",
    shortDescription:
      "Connect all your data sources: databases, marketing, sales, and social platforms.",
    longDescription:
      "Unify your entire data ecosystem with seamless integrations across marketing, sales, social, and database platforms. No more data silos - get a complete view of your business with drag-and-drop connections to over 50 popular tools and platforms.",
    icon: "Plug",
    color: "chart-yellow",
    benefits: [
      "50+ pre-built connectors",
      "Secure data connections",
      "Real-time synchronization",
      "No-code setup",
      "Enterprise-grade security",
    ],
    useCases: [
      "Marketing attribution analysis",
      "Cross-platform performance tracking",
      "Customer journey mapping",
      "Revenue operations",
      "Comprehensive business intelligence",
    ],
    ctaText: "View Integrations",
    ctaUrl: "https://app.datapad.io",
    category: "integration",
    priority: 4,
    videoUrl:
      "https://framerusercontent.com/assets/s6inNxqh5m9k41CDacUiLwBUGVc.mp4",
  },
  {
    slug: "data-blending",
    title: "Data Blending",
    shortDescription:
      "Combine data from multiple sources for comprehensive cross-platform analysis.",
    longDescription:
      "Break down data silos and get the complete picture. Our intelligent data blending automatically identifies relationships across your different data sources, creating unified datasets that reveal insights impossible to see in isolation.",
    icon: "Layers",
    color: "chart-orange",
    benefits: [
      "Automatic data relationships",
      "Cross-platform insights",
      "Unified data views",
      "Smart data matching",
      "Comprehensive analysis",
    ],
    useCases: [
      "Customer lifetime value analysis",
      "Marketing attribution modeling",
      "Cross-channel performance",
      "Holistic business intelligence",
      "Integrated reporting",
    ],
    ctaText: "Start Blending Data",
    ctaUrl: "https://app.datapad.io",
    category: "core",
    priority: 5,
    videoUrl:
      "https://framerusercontent.com/assets/s6inNxqh5m9k41CDacUiLwBUGVc.mp4",
  },
  {
    slug: "shareable-reports",
    title: "Shareable Reports",
    shortDescription:
      "Generate and share professional reports and dashboards with stakeholders instantly.",
    longDescription:
      "Transform your insights into professional, branded reports that stakeholders actually want to read. Generate comprehensive reports with executive summaries, key insights, and actionable recommendations - all formatted for easy sharing and presentation.",
    icon: "Share",
    color: "chart-blue",
    benefits: [
      "Professional report templates",
      "Branded presentations",
      "Executive summaries",
      "Actionable recommendations",
      "Easy sharing and collaboration",
    ],
    useCases: [
      "Board presentations",
      "Client reporting",
      "Team updates",
      "Performance reviews",
      "Strategic planning",
    ],
    ctaText: "Create Report",
    ctaUrl: "https://app.datapad.io",
    category: "core",
    priority: 6,
    videoUrl:
      "https://framerusercontent.com/assets/s6inNxqh5m9k41CDacUiLwBUGVc.mp4",
  },
  {
    slug: "slack-bot",
    title: "Slack Bot",
    shortDescription:
      "Get data insights and alerts directly in your team's communication hub.",
    longDescription:
      "Bring data insights directly into your team's workflow. Our Slack bot delivers proactive alerts, answers data questions in real-time, and keeps your team informed without leaving their communication hub.",
    icon: "Slack",
    color: "chart-red",
    benefits: [
      "Real-time data alerts",
      "In-channel data queries",
      "Proactive insights",
      "Team collaboration",
      "Workflow integration",
    ],
    useCases: [
      "Daily performance updates",
      "Anomaly detection alerts",
      "Team data queries",
      "Campaign monitoring",
      "KPI tracking",
    ],
    ctaText: "Add to Slack",
    ctaUrl: "https://app.datapad.io",
    category: "integration",
    priority: 7,
    videoUrl:
      "https://framerusercontent.com/assets/s6inNxqh5m9k41CDacUiLwBUGVc.mp4",
  },
  {
    slug: "voice-mode",
    title: "Voice Mode",
    shortDescription:
      "Present data insights through voice interaction with real-time updates.",
    longDescription:
      "Present your data like never before. Voice mode transforms your dashboards into interactive presentations with real-time narration, perfect for meetings, presentations, or hands-free data exploration.",
    icon: "Mic",
    color: "chart-green",
    benefits: [
      "Voice-powered presentations",
      "Real-time narration",
      "Hands-free interaction",
      "Meeting integration",
      "Dynamic storytelling",
    ],
    useCases: [
      "Executive presentations",
      "Team meetings",
      "Client demonstrations",
      "Data storytelling",
      "Accessibility features",
    ],
    ctaText: "Try Voice Mode",
    ctaUrl: "https://app.datapad.io",
    category: "advanced",
    priority: 8,
    videoUrl:
      "https://framerusercontent.com/assets/s6inNxqh5m9k41CDacUiLwBUGVc.mp4",
  },
  {
    slug: "workflows",
    title: "AI Workflows",
    shortDescription:
      "50+ ready-to-use AI workflows that create actionable deliverables from your data - campaigns, strategies, and content ready to deploy.",
    longDescription:
      "Transform your data into actionable business outcomes with AI-powered workflows. Get copy-paste ready marketing campaigns, SEO strategies, ad optimizations, and business plans generated from your actual data. While other tools show you charts, our workflows create what you need to execute and grow your business.",
    icon: "Zap",
    color: "chart-purple",
    benefits: [
      "50+ ready-to-use workflows",
      "Copy-paste ready deliverables",
      "Data-driven campaign generation",
      "Automated content creation",
      "Implementation-ready strategies",
    ],
    useCases: [
      "Marketing campaign generation",
      "SEO content optimization",
      "Ad performance improvement",
      "Business strategy development",
      "Competitive analysis reports",
    ],
    ctaText: "Browse Workflows",
    ctaUrl: "https://app.datapad.io",
    category: "automation",
    priority: 9,
    videoUrl:
      "https://framerusercontent.com/assets/s6inNxqh5m9k41CDacUiLwBUGVc.mp4",
    redirectUrl: "/workflows",
  },
  {
    slug: "multi-model-ai",
    title: "Multi-Model AI",
    shortDescription:
      "Leverage Claude, ChatGPT, and other AI models for optimal results.",
    longDescription:
      "Get the best of all AI worlds. Our platform intelligently routes tasks to the most suitable AI model - whether it's Claude for analysis, GPT for content generation, or specialized models for specific use cases - ensuring optimal results for every query.",
    icon: "Brain",
    color: "chart-yellow",
    benefits: [
      "Best-in-class AI models",
      "Intelligent task routing",
      "Specialized capabilities",
      "Optimal performance",
      "Future-proof architecture",
    ],
    useCases: [
      "Complex analysis tasks",
      "Content generation",
      "Specialized queries",
      "Performance optimization",
      "Advanced AI capabilities",
    ],
    ctaText: "Explore AI Models",
    ctaUrl: "https://app.datapad.io",
    category: "advanced",
    priority: 10,
    videoUrl:
      "https://framerusercontent.com/assets/s6inNxqh5m9k41CDacUiLwBUGVc.mp4",
  },
  {
    slug: "learning-layer",
    title: "Learning Layer",
    shortDescription:
      "Personalized AI that learns from users, data sources, and workspace context.",
    longDescription:
      "Experience AI that gets smarter with every interaction. Our learning layer adapts to your business context, remembers your preferences, and continuously improves its understanding of your data patterns and business needs.",
    icon: "Brain",
    color: "chart-orange",
    benefits: [
      "Personalized AI responses",
      "Context awareness",
      "Continuous learning",
      "Business-specific insights",
      "Adaptive intelligence",
    ],
    useCases: [
      "Personalized recommendations",
      "Context-aware analysis",
      "Custom insights",
      "Workflow optimization",
      "Intelligent automation",
    ],
    ctaText: "Experience Learning AI",
    ctaUrl: "https://app.datapad.io",
    category: "advanced",
    priority: 11,
    videoUrl:
      "https://framerusercontent.com/assets/s6inNxqh5m9k41CDacUiLwBUGVc.mp4",
  },
  {
    slug: "web-access",
    title: "Web Access",
    shortDescription:
      "Real-time web data integration for comprehensive market analysis.",
    longDescription:
      "Enhance your internal data with real-time web intelligence. Access market trends, competitor insights, and external data sources to create comprehensive analysis that goes beyond your internal metrics.",
    icon: "Globe",
    color: "chart-blue",
    benefits: [
      "Real-time web data",
      "Market intelligence",
      "Competitor analysis",
      "External data sources",
      "Comprehensive insights",
    ],
    useCases: [
      "Market research",
      "Competitive analysis",
      "Trend monitoring",
      "External benchmarking",
      "Industry insights",
    ],
    ctaText: "Access Web Data",
    ctaUrl: "https://app.datapad.io",
    category: "advanced",
    priority: 12,
    videoUrl:
      "https://framerusercontent.com/assets/s6inNxqh5m9k41CDacUiLwBUGVc.mp4",
  },
];

export function getFeatureBySlug(slug: string): Feature | undefined {
  return features.find((feature) => feature.slug === slug);
}

export function getAllFeatures(): Feature[] {
  return features.sort((a, b) => a.priority - b.priority);
}

export function getFeaturesByCategory(
  category: Feature["category"]
): Feature[] {
  return features
    .filter((feature) => feature.category === category)
    .sort((a, b) => a.priority - b.priority);
}
