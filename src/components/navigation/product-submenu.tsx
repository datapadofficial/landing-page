import {
  Bot,
  BarChart3,
  Code2,
  Plug,
  Layers,
  Share,
  Slack,
  Mic,
  Zap,
  Brain,
  Globe,
  Sunset,
} from "lucide-react";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

// Chart colors from globals.css
const chartColors = [
  "chart-red",
  "chart-green",
  "chart-purple",
  "chart-yellow",
  "chart-orange",
  "chart-blue",
];

interface ProductSubmenuProps {
  className?: string;
}

const ProductSubmenu = ({ className }: ProductSubmenuProps) => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>Product</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="grid w-[600px] gap-3 p-4 md:w-[800px] md:grid-cols-2 lg:w-[900px] lg:grid-cols-5">
          <ProductFeatureLink
            title="AI Data Agent"
            description="Talk to your data like a human analyst. Get instant answers with charts and visualizations."
            icon={<Bot className="size-5 shrink-0" />}
            url="/features/ai-data-agent"
            color={chartColors[0]}
          />
          <ProductFeatureLink
            title="Generative Dashboards"
            description="AI creates custom dashboards tailored to your business needs automatically."
            icon={<BarChart3 className="size-5 shrink-0" />}
            url="/features/generative-dashboards"
            color={chartColors[1]}
          />
          <ProductFeatureLink
            title="Text2SQL & Python"
            description="Convert natural language questions into executable code and database queries."
            icon={<Code2 className="size-5 shrink-0" />}
            url="/features/text-to-sql-python"
            color={chartColors[2]}
          />
          <ProductFeatureLink
            title="50+ Integrations"
            description="Connect all your data sources: databases, marketing, sales, and social platforms."
            icon={<Plug className="size-5 shrink-0" />}
            url="/features/integrations"
            color={chartColors[3]}
          />
          <ProductFeatureLink
            title="Data Blending"
            description="Combine data from multiple sources for comprehensive cross-platform analysis."
            icon={<Layers className="size-5 shrink-0" />}
            url="/features/data-blending"
            color={chartColors[4]}
          />
          <ProductFeatureLink
            title="Shareable Reports"
            description="Generate and share professional reports and dashboards with stakeholders instantly."
            icon={<Share className="size-5 shrink-0" />}
            url="/features/shareable-reports"
            color={chartColors[5]}
          />
          <ProductFeatureLink
            title="Slack Bot"
            description="Get data insights and alerts directly in your team's communication hub."
            icon={<Slack className="size-5 shrink-0" />}
            url="/features/slack-bot"
            color={chartColors[0]}
          />
          <ProductFeatureLink
            title="Voice Mode"
            description="Present data insights through voice interaction with real-time updates."
            icon={<Mic className="size-5 shrink-0" />}
            url="/features/voice-mode"
            color={chartColors[1]}
          />
          <ProductFeatureLink
            title="Automations"
            description="Schedule the AI system to pre-analyze all metrics, data, dashboards and prepare synthesized analysis with alerts."
            icon={<Zap className="size-5 shrink-0" />}
            url="/features/automations"
            color={chartColors[2]}
          />
          <ProductFeatureLink
            title="Multi-Model AI"
            description="Leverage Claude, ChatGPT, and other AI models for optimal results."
            icon={<Brain className="size-5 shrink-0" />}
            url="/features/multi-model-ai"
            color={chartColors[3]}
          />
          <ProductFeatureLink
            title="Learning Layer"
            description="Personalized AI that learns from users, data sources, and workspace context."
            icon={<Brain className="size-5 shrink-0" />}
            url="/features/learning-layer"
            color={chartColors[4]}
          />
          <ProductFeatureLink
            title="Web Access"
            description="Real-time web data integration for comprehensive market analysis."
            icon={<Globe className="size-5 shrink-0" />}
            url="/features/web-access"
            color={chartColors[5]}
          />
          <ProductFeatureLink
            title="View All Features"
            description="Explore all AI-powered features in detail"
            icon={<Sunset className="size-5 shrink-0" />}
            url="/features"
            color={chartColors[0]}
          />
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

interface ProductFeatureLinkProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  url: string;
  color: string;
}

const ProductFeatureLink = ({
  title,
  description,
  icon,
  url,
  color,
}: ProductFeatureLinkProps) => {
  return (
    <a
      className="hover:bg-muted hover:text-accent-foreground flex select-none flex-row gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors"
      href={url}
    >
      <div className="text-foreground" style={{ color: `var(--${color})` }}>
        {icon}
      </div>
      <div>
        <div className="text-sm font-semibold">{title}</div>
        <p className="text-muted-foreground text-sm leading-snug">
          {description}
        </p>
      </div>
    </a>
  );
};

export { ProductSubmenu };
