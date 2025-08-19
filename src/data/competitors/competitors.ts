import { Competitor } from "@/types/competitor";
import {
  Database,
  MessageSquare,
  BarChart3,
  Users,
  Calendar,
  TrendingUp,
  Zap,
  Brain,
  Search,
} from "lucide-react";

export const competitors: Competitor[] = [
  {
    id: "julius-ai",
    name: "Julius",
    logo: "/images/julius-logo.png",
    tagline: "AI data science tool",
    description: "Limited to in-chat results targeted towards data scientists",
    badgeText: "Limited Time 50% Student Discount",
    subtitle:
      "No more wasting time on analyzing Excels, CSVs. Get instant answers anywhere, anytime.",
    faqItems: [
      {
        question: "How is Datapad different from Julius?",
        answer:
          "While Julius focuses on chat-based data analysis, Datapad is a comprehensive analytics suite. We connect to 50+ data sources, create automated reports, build dashboards, and generate actionable campaigns - not just chat responses.",
      },
      {
        question: "Can Datapad connect to databases like Julius?",
        answer:
          "Yes, and much more! Datapad connects to all major databases (SQL, BigQuery, Snowflake, etc.) plus 50+ marketing, sales, and business tools. Julius is limited to file uploads and basic integrations.",
      },
      {
        question: "Does Datapad support team collaboration?",
        answer:
          "Absolutely! Datapad offers team workspaces, role management, shared dashboards, and collaborative reporting. Julius is primarily designed for individual use.",
      },
      {
        question: "Can I automate reporting with Datapad?",
        answer:
          "Yes! Datapad creates automated, scheduled reports with AI-powered insights. Julius requires manual interaction for each analysis.",
      },
      {
        question: "What about data visualization?",
        answer:
          "Datapad generates beautiful, interactive dashboards and shareable reports. Julius provides basic charts within chat conversations only.",
      },
      {
        question: "Is Datapad suitable for non-technical users?",
        answer:
          "Definitely! While Julius targets data scientists, Datapad is built for business users. Ask questions in natural language and get business-ready insights and campaigns.",
      },
    ],
    features: [
      {
        feature: "Chat with your data",
        icon: MessageSquare,
        datapad: {
          available: true,
          description:
            "Natural language queries with instant answers and visualizations",
        },
        competitor: {
          available: true,
          description: "Basic chat interface for data analysis",
        },
      },
      {
        feature: "CSV, sheets data analysis",
        icon: Database,
        datapad: {
          available: true,
          description:
            "Advanced analysis with AI insights and automated reporting",
        },
        competitor: {
          available: true,
          description: "File upload and basic statistical analysis",
        },
      },
      {
        feature: "Connect to databases",
        icon: Database,
        datapad: {
          available: true,
          description:
            "All major databases: SQL, BigQuery, Snowflake, PostgreSQL, etc.",
        },
        competitor: {
          available: false,
          description: "No direct database connections available",
        },
      },
      {
        feature: "50+ integrations",
        icon: BarChart3,
        datapad: {
          available: true,
          description:
            "Marketing, sales, social, and business tool integrations",
        },
        competitor: {
          available: false,
          description: "Limited to file uploads and basic APIs",
        },
      },
      {
        feature: "Automated reporting",
        icon: Calendar,
        datapad: {
          available: true,
          description: "Scheduled AI-powered reports and alerts",
        },
        competitor: {
          available: false,
          description: "Manual analysis required for each query",
        },
      },
      {
        feature: "Interactive dashboards",
        icon: BarChart3,
        datapad: {
          available: true,
          description: "Beautiful, shareable dashboards and reports",
        },
        competitor: {
          available: false,
          description: "Chat-only results, no persistent dashboards",
        },
      },
      {
        feature: "Team collaboration",
        icon: Users,
        datapad: {
          available: true,
          description: "Workspaces, role management, and shared insights",
        },
        competitor: {
          available: false,
          description: "Individual use only, no team features",
        },
      },
      {
        feature: "Anomaly detection",
        icon: TrendingUp,
        datapad: {
          available: true,
          description: "Proactive AI-powered alerts and trend detection",
        },
        competitor: {
          available: false,
          description: "No automated monitoring capabilities",
        },
      },
    ],
    metadata: {
      title: "Datapad vs Julius AI - Compare AI Analytics Platforms",
      description:
        "Compare Datapad and Julius AI. See why teams choose Datapad's comprehensive AI analytics over Julius's limited chat-based analysis. Get actionable insights, not just conversations.",
      openGraph: {
        title: "Datapad vs Julius AI",
        description:
          "Compare Datapad and Julius AI. See why teams choose Datapad's comprehensive AI analytics over limited chat tools.",
        type: "website",
      },
    },
  },
  {
    id: "tableau",
    name: "Tableau",
    logo: "/images/integrations/tableau.png",
    tagline: "Enterprise data visualization platform",
    description:
      "Complex visualization tool requiring extensive training and technical expertise",
    subtitle:
      "Move beyond complex data visualization. While Tableau requires months of training to create charts, Datapad's AI creates actionable campaigns and strategies in seconds.",
    ctaText: "Start Your AI Analytics",
    faqItems: [
      {
        question: "How is Datapad different from Tableau?",
        answer:
          "While Tableau focuses on data visualization and requires technical expertise, Datapad is an AI-first analytics platform that creates actionable campaigns and strategies. Tableau shows you beautiful charts, Datapad tells you what actions to take.",
      },
      {
        question: "Do I need technical skills for Datapad vs Tableau?",
        answer:
          "Datapad requires no technical skills - just ask questions in natural language. Tableau requires extensive training, understanding of data modeling, calculated fields, and complex visualization techniques.",
      },
      {
        question: "Can Datapad replace our Tableau setup?",
        answer:
          "Yes! Datapad connects to the same data sources as Tableau but adds AI-powered insights, automated campaign generation, and natural language queries that Tableau lacks. Plus, it's much easier to use.",
      },
      {
        question: "What about advanced visualizations?",
        answer:
          "Datapad automatically generates the right visualizations for your data and questions. While Tableau offers more manual control over chart types, Datapad's AI chooses optimal visualizations and focuses on actionable insights.",
      },
      {
        question: "How does pricing compare?",
        answer:
          "Datapad's transparent pricing often costs significantly less than Tableau when you factor in licensing, training, and implementation costs. Plus you get AI insights and campaign generation that Tableau doesn't offer.",
      },
      {
        question: "Can Datapad handle enterprise-scale data?",
        answer:
          "Absolutely! Datapad connects to enterprise databases, data warehouses, and cloud platforms just like Tableau, but with AI-powered analysis that scales automatically without complex setup.",
      },
    ],
    features: [
      {
        feature: "Natural language queries",
        icon: MessageSquare,
        datapad: {
          available: true,
          description:
            "Advanced AI understands business context and generates insights automatically",
        },
        competitor: {
          available: true,
          description:
            "Basic Ask Data feature with limited natural language understanding",
        },
      },
      {
        feature: "Data source connections",
        icon: Database,
        datapad: {
          available: true,
          description: "50+ integrations with one-click setup",
        },
        competitor: {
          available: true,
          description:
            "Extensive connectors but complex setup and data preparation required",
        },
      },
      {
        feature: "AI-powered insights",
        icon: Brain,
        datapad: {
          available: true,
          description:
            "Proactive AI analyst that discovers trends and generates recommendations",
        },
        competitor: {
          available: false,
          description:
            "Manual analysis required, no AI-powered insight generation",
        },
      },
      {
        feature: "Campaign generation",
        icon: TrendingUp,
        datapad: {
          available: true,
          description:
            "Creates actionable marketing campaigns and business strategies from data",
        },
        competitor: {
          available: false,
          description:
            "Visualization only, no actionable campaign recommendations",
        },
      },
      {
        feature: "Easy dashboard creation",
        icon: BarChart3,
        datapad: {
          available: true,
          description:
            "AI generates dashboards automatically from natural language questions",
        },
        competitor: {
          available: true,
          description:
            "Powerful but complex dashboard building requiring extensive training",
        },
      },
      {
        feature: "Team collaboration",
        icon: Users,
        datapad: {
          available: true,
          description:
            "Built-in team workspaces with instant sharing and commenting",
        },
        competitor: {
          available: true,
          description:
            "Collaboration available but requires Tableau Server/Cloud licensing",
        },
      },
      {
        feature: "Automated reporting",
        icon: Calendar,
        datapad: {
          available: true,
          description:
            "AI-powered scheduled reports with insights and action items",
        },
        competitor: {
          available: true,
          description: "Basic report scheduling without AI-generated insights",
        },
      },
      {
        feature: "No-code setup",
        icon: Zap,
        datapad: {
          available: true,
          description:
            "Connect and start analyzing in minutes with natural language",
        },
        competitor: {
          available: false,
          description:
            "Requires extensive training, data modeling, and technical expertise",
        },
      },
      {
        feature: "Real-time alerts",
        icon: TrendingUp,
        datapad: {
          available: true,
          description:
            "Proactive anomaly detection with automated business recommendations",
        },
        competitor: {
          available: true,
          description:
            "Basic alerting available but requires manual threshold setup",
        },
      },
    ],
    metadata: {
      title:
        "Datapad vs Tableau - AI Analytics vs Traditional Data Visualization",
      description:
        "Compare Datapad and Tableau. See why teams choose Datapad's AI-powered analytics over Tableau's complex visualization tools. Get actionable campaigns, not just charts.",
      openGraph: {
        title: "Datapad vs Tableau",
        description:
          "Compare Datapad and Tableau. AI-powered analytics vs traditional data visualization.",
        type: "website",
      },
    },
  },
  {
    id: "powerbi",
    name: "Power BI",
    logo: "https://framerusercontent.com/images/yr68YzOuPmqYczRHbw8ZgNlV8dg.png?scale-down-to=512", // Placeholder - needs actual Power BI logo
    tagline: "Microsoft's business intelligence platform",
    description: "Traditional BI tool focused on visualization and reporting",
    subtitle:
      "Move beyond traditional BI dashboards. While Power BI shows you charts, Datapad creates the campaigns and strategies that drive real business results.",
    ctaText: "Start Your AI Analytics",
    faqItems: [
      {
        question: "How is Datapad different from Power BI?",
        answer:
          "While Power BI focuses on data visualization and reporting, Datapad is an AI-first analytics platform that creates actionable campaigns and strategies. Power BI shows you what happened, Datapad tells you what to do next.",
      },
      {
        question: "Do I need technical skills for Datapad vs Power BI?",
        answer:
          "Datapad requires no technical skills - just ask questions in natural language. Power BI requires knowledge of DAX, data modeling, and complex setup procedures.",
      },
      {
        question: "Can Datapad replace our Power BI setup?",
        answer:
          "Yes! Datapad connects to the same data sources as Power BI but adds AI-powered insights, automated reporting, and actionable campaign generation that Power BI lacks.",
      },
      {
        question: "What about data governance and enterprise features?",
        answer:
          "Datapad offers enterprise-grade security and governance while being much easier to use than Power BI's complex permission systems and row-level security setup.",
      },
      {
        question: "How does pricing compare?",
        answer:
          "Datapad's transparent pricing often costs less than Power BI Premium when you factor in setup time, training, and ongoing maintenance. Plus you get AI insights that Power BI doesn't offer.",
      },
    ],
    features: [
      {
        feature: "Natural language queries",
        icon: MessageSquare,
        datapad: {
          available: true,
          description:
            "Advanced AI understands business context and generates insights",
        },
        competitor: {
          available: true,
          description: "Basic Q&A feature with limited understanding",
        },
      },
      {
        feature: "Data source connections",
        icon: Database,
        datapad: {
          available: true,
          description: "50+ integrations with one-click setup",
        },
        competitor: {
          available: true,
          description: "Many connectors but complex setup required",
        },
      },
      {
        feature: "Automated insights",
        icon: Zap,
        datapad: {
          available: true,
          description: "AI automatically discovers trends and anomalies",
        },
        competitor: {
          available: false,
          description: "Manual analysis required, no proactive insights",
        },
      },
      {
        feature: "Campaign generation",
        icon: TrendingUp,
        datapad: {
          available: true,
          description: "Creates actionable marketing and business campaigns",
        },
        competitor: {
          available: false,
          description: "Shows charts only, no actionable recommendations",
        },
      },
      {
        feature: "Easy dashboard creation",
        icon: BarChart3,
        datapad: {
          available: true,
          description:
            "AI generates dashboards automatically from your questions",
        },
        competitor: {
          available: true,
          description: "Manual dashboard building with steep learning curve",
        },
      },
      {
        feature: "Real-time collaboration",
        icon: Users,
        datapad: {
          available: true,
          description: "Built-in team workspaces and instant sharing",
        },
        competitor: {
          available: true,
          description: "Complex workspace setup and licensing required",
        },
      },
      {
        feature: "Scheduled reporting",
        icon: Calendar,
        datapad: {
          available: true,
          description: "AI-powered reports with insights and recommendations",
        },
        competitor: {
          available: true,
          description: "Basic report scheduling without AI insights",
        },
      },
      {
        feature: "No-code setup",
        icon: Zap,
        datapad: {
          available: true,
          description: "Connect and start analyzing in minutes",
        },
        competitor: {
          available: false,
          description: "Requires IT setup, DAX knowledge, and data modeling",
        },
      },
    ],
    metadata: {
      title: "Datapad vs Power BI - Compare AI Analytics vs Traditional BI",
      description:
        "Compare Datapad and Microsoft Power BI. See why teams choose Datapad's AI-powered analytics over traditional BI tools. Get actionable campaigns, not just charts.",
      openGraph: {
        title: "Datapad vs Power BI",
        description:
          "Compare Datapad and Microsoft Power BI. AI-powered analytics vs traditional business intelligence.",
        type: "website",
      },
    },
  },
  {
    id: "sisense",
    name: "Sisense",
    logo: "/images/datapad-logo.svg", // Placeholder - needs actual Sisense logo
    tagline: "AI-driven analytics platform",
    description:
      "Traditional BI platform requiring complex data modeling and technical setup",
    subtitle:
      "Move beyond complex BI platforms. While Sisense requires technical teams to build ElastiCubes and model data, Datapad's AI creates actionable campaigns and strategies instantly.",
    ctaText: "Start Your AI Analytics",
    faqItems: [
      {
        question: "How is Datapad different from Sisense?",
        answer:
          "While Sisense focuses on complex data modeling and traditional BI dashboards, Datapad is an AI-first platform that creates actionable campaigns and strategies. Sisense shows you what happened, Datapad creates what you should do next.",
      },
      {
        question: "Do I need technical expertise for Datapad vs Sisense?",
        answer:
          "Datapad requires no technical skills - just natural language questions. Sisense requires data modeling expertise, ElastiCube management, and complex setup procedures that typically need IT involvement.",
      },
      {
        question: "Can Datapad replace our Sisense implementation?",
        answer:
          "Yes! Datapad connects to the same data sources as Sisense but eliminates the need for complex data cubes and modeling. Plus, you get AI-powered insights and campaign generation that Sisense doesn't offer.",
      },
      {
        question: "What about handling large datasets?",
        answer:
          "Datapad handles enterprise-scale data efficiently through cloud-native architecture, while Sisense relies on ElastiCubes that require ongoing maintenance and optimization. Datapad's AI also automatically optimizes queries.",
      },
      {
        question: "How does the implementation time compare?",
        answer:
          "Datapad can be set up in minutes with one-click integrations. Sisense typically requires weeks or months for proper ElastiCube setup, data modeling, and dashboard creation.",
      },
      {
        question: "What about total cost of ownership?",
        answer:
          "Datapad's transparent pricing is often significantly lower than Sisense when you factor in implementation costs, ongoing maintenance, training, and the need for technical resources to manage ElastiCubes.",
      },
    ],
    features: [
      {
        feature: "Natural language queries",
        icon: MessageSquare,
        datapad: {
          available: true,
          description:
            "Advanced conversational AI that understands business context and generates insights",
        },
        competitor: {
          available: true,
          description:
            "Basic natural language interface with limited understanding",
        },
      },
      {
        feature: "Data source connections",
        icon: Database,
        datapad: {
          available: true,
          description:
            "50+ integrations with automated setup and data blending",
        },
        competitor: {
          available: true,
          description:
            "Many connectors but requires complex ElastiCube modeling and setup",
        },
      },
      {
        feature: "AI-powered insights",
        icon: Brain,
        datapad: {
          available: true,
          description:
            "Proactive AI analyst that discovers trends and generates business recommendations",
        },
        competitor: {
          available: true,
          description:
            "Basic AI features but requires manual analysis and interpretation",
        },
      },
      {
        feature: "Campaign generation",
        icon: TrendingUp,
        datapad: {
          available: true,
          description:
            "Creates actionable marketing campaigns and business strategies from data",
        },
        competitor: {
          available: false,
          description:
            "Dashboard and reporting focus only, no actionable campaign creation",
        },
      },
      {
        feature: "Easy dashboard creation",
        icon: BarChart3,
        datapad: {
          available: true,
          description:
            "AI automatically generates dashboards from natural language questions",
        },
        competitor: {
          available: true,
          description:
            "Powerful dashboards but require ElastiCube setup and technical knowledge",
        },
      },
      {
        feature: "Team collaboration",
        icon: Users,
        datapad: {
          available: true,
          description:
            "Built-in team workspaces with instant sharing and collaborative analysis",
        },
        competitor: {
          available: true,
          description:
            "Collaboration features available but complex permission management required",
        },
      },
      {
        feature: "Automated reporting",
        icon: Calendar,
        datapad: {
          available: true,
          description:
            "AI-powered scheduled reports with insights and actionable recommendations",
        },
        competitor: {
          available: true,
          description:
            "Scheduled reporting available but without AI-generated insights",
        },
      },
      {
        feature: "No-code setup",
        icon: Zap,
        datapad: {
          available: true,
          description:
            "Connect and start analyzing immediately with natural language",
        },
        competitor: {
          available: false,
          description:
            "Requires ElastiCube modeling, data preparation, and technical setup",
        },
      },
      {
        feature: "Real-time monitoring",
        icon: TrendingUp,
        datapad: {
          available: true,
          description:
            "Proactive anomaly detection with automated business recommendations",
        },
        competitor: {
          available: true,
          description:
            "Real-time capabilities but require manual threshold setup and monitoring",
        },
      },
    ],
    metadata: {
      title: "Datapad vs Sisense - AI Analytics vs Traditional BI Platform",
      description:
        "Compare Datapad and Sisense. See why teams choose Datapad's AI-powered campaign generation over Sisense's complex BI platform. Get actionable strategies, not just dashboards.",
      openGraph: {
        title: "Datapad vs Sisense",
        description:
          "Compare Datapad and Sisense. AI-powered analytics vs traditional business intelligence platform.",
        type: "website",
      },
    },
  },
  {
    id: "thoughtspot",
    name: "ThoughtSpot",
    logo: "/images/datapad-logo.svg", // Placeholder - needs actual ThoughtSpot logo
    tagline: "Search-driven analytics platform",
    description:
      "Reactive search-based analytics requiring users to know what questions to ask",
    subtitle:
      "Move beyond reactive search analytics. While ThoughtSpot waits for you to ask the right questions, Datapad's AI proactively discovers insights and creates actionable business strategies.",
    ctaText: "Start Your AI Analytics",
    faqItems: [
      {
        question: "How is Datapad different from ThoughtSpot?",
        answer:
          "While ThoughtSpot focuses on search-driven analytics and requires you to know what to search for, Datapad proactively analyzes your data and creates actionable campaigns. ThoughtSpot helps you find answers, Datapad tells you what actions to take.",
      },
      {
        question: "Do I need to know what questions to ask?",
        answer:
          "With Datapad, no! Our AI proactively discovers insights and generates recommendations. ThoughtSpot requires you to know what to search for and how to phrase your questions correctly.",
      },
      {
        question: "Can Datapad replace our ThoughtSpot setup?",
        answer:
          "Yes! Datapad connects to the same enterprise data sources as ThoughtSpot but adds proactive AI analysis, automated campaign generation, and actionable recommendations that ThoughtSpot's search approach lacks.",
      },
      {
        question: "What about data governance and security?",
        answer:
          "Datapad offers enterprise-grade security and governance while being much more proactive than ThoughtSpot's reactive search model. You get insights automatically without needing to search.",
      },
      {
        question: "How does the user experience compare?",
        answer:
          "Datapad's conversational AI is more intuitive than ThoughtSpot's search interface. Instead of learning search syntax, you simply ask questions naturally and get comprehensive insights with action plans.",
      },
      {
        question: "Can Datapad handle complex enterprise data?",
        answer:
          "Absolutely! Datapad works with the same enterprise data sources as ThoughtSpot but adds AI-powered analysis that proactively monitors your business and generates actionable insights automatically.",
      },
    ],
    features: [
      {
        feature: "Search-driven analytics",
        icon: Search,
        datapad: {
          available: true,
          description:
            "Natural language queries plus proactive AI insights and recommendations",
        },
        competitor: {
          available: true,
          description:
            "Search-based queries requiring knowledge of search syntax and data structure",
        },
      },
      {
        feature: "Enterprise data connections",
        icon: Database,
        datapad: {
          available: true,
          description:
            "50+ integrations with automated setup and data blending",
        },
        competitor: {
          available: true,
          description:
            "Enterprise connectors but complex setup and data modeling required",
        },
      },
      {
        feature: "Proactive insights",
        icon: Brain,
        datapad: {
          available: true,
          description:
            "AI automatically discovers trends, anomalies, and business opportunities",
        },
        competitor: {
          available: false,
          description: "Reactive search only - you must know what to look for",
        },
      },
      {
        feature: "Campaign generation",
        icon: TrendingUp,
        datapad: {
          available: true,
          description:
            "Creates actionable marketing campaigns and business strategies from insights",
        },
        competitor: {
          available: false,
          description:
            "Search results only, no actionable campaign recommendations",
        },
      },
      {
        feature: "Automated dashboards",
        icon: BarChart3,
        datapad: {
          available: true,
          description:
            "AI generates relevant dashboards based on your business context",
        },
        competitor: {
          available: true,
          description: "Manual dashboard creation from search results",
        },
      },
      {
        feature: "Team collaboration",
        icon: Users,
        datapad: {
          available: true,
          description:
            "Built-in workspaces with shared insights and collaborative analysis",
        },
        competitor: {
          available: true,
          description:
            "Collaboration features available but focused on sharing search results",
        },
      },
      {
        feature: "Automated reporting",
        icon: Calendar,
        datapad: {
          available: true,
          description:
            "AI-powered scheduled reports with insights and action recommendations",
        },
        competitor: {
          available: true,
          description:
            "Scheduled reports based on saved searches without AI insights",
        },
      },
      {
        feature: "No learning curve",
        icon: Zap,
        datapad: {
          available: true,
          description:
            "Conversational AI that understands business context naturally",
        },
        competitor: {
          available: false,
          description:
            "Requires learning search syntax and understanding data relationships",
        },
      },
      {
        feature: "Anomaly detection",
        icon: TrendingUp,
        datapad: {
          available: true,
          description:
            "Proactive monitoring with automated alerts and business recommendations",
        },
        competitor: {
          available: true,
          description:
            "Basic alerting available but requires manual setup and monitoring",
        },
      },
    ],
    metadata: {
      title: "Datapad vs ThoughtSpot - AI Analytics vs Search-Driven Analytics",
      description:
        "Compare Datapad and ThoughtSpot. See why teams choose Datapad's AI-powered campaign generation over ThoughtSpot's search-only approach. Get actionable strategies, not just search results.",
      openGraph: {
        title: "Datapad vs ThoughtSpot",
        description:
          "Compare Datapad and ThoughtSpot. AI-powered analytics vs search-driven business intelligence.",
        type: "website",
      },
    },
  },
];
