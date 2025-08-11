import {
  Book,
  Zap,
  TrendingUp,
  DollarSign,
  ShoppingCart,
  Search,
  Users,
  Package,
  Calculator,
  Building,
  Truck,
  ArrowRight,
} from "lucide-react";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface WorkflowsSubmenuProps {
  className?: string;
}

const WorkflowsSubmenu = ({ className }: WorkflowsSubmenuProps) => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>Workflows</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="w-[900px] gap-4 p-6 md:w-[1000px] lg:w-[1100px]">
          <div className="grid grid-cols-2 gap-6">
            {/* Marketing Category */}
            <WorkflowCategory
              title="Marketing"
              description="Campaign performance and ROI analysis"
              icon={<TrendingUp className="size-5 shrink-0" />}
              url="/teams/marketing"
              workflows={[
                {
                  title: "Facebook Ads Performance Analysis",
                  url: "/workflows/facebook-ads-performance-analysis",
                  difficulty: "beginner",
                  estimatedTime: "5 min",
                },
                {
                  title: "Google Ads ROI Optimization",
                  url: "/workflows/google-ads-roi-optimization",
                  difficulty: "intermediate",
                  estimatedTime: "10 min",
                },
                {
                  title: "Marketing Attribution Analysis",
                  url: "/workflows/marketing-attribution-analysis",
                  difficulty: "advanced",
                  estimatedTime: "15 min",
                },
              ]}
            />

            {/* Sales Category */}
            <WorkflowCategory
              title="Sales"
              description="Sales performance and pipeline tracking"
              icon={<DollarSign className="size-5 shrink-0" />}
              url="/teams/sales"
              workflows={[
                {
                  title: "Sales Pipeline Analysis",
                  url: "/workflows/sales-pipeline-analysis",
                  difficulty: "beginner",
                  estimatedTime: "5 min",
                },
                {
                  title: "Lead Conversion Optimization",
                  url: "/workflows/lead-conversion-optimization",
                  difficulty: "intermediate",
                  estimatedTime: "8 min",
                },
                {
                  title: "Sales Forecasting Model",
                  url: "/workflows/sales-forecasting-model",
                  difficulty: "advanced",
                  estimatedTime: "20 min",
                },
              ]}
            />

            {/* E-commerce Category */}
            <WorkflowCategory
              title="E-commerce"
              description="Online store performance and optimization"
              icon={<ShoppingCart className="size-5 shrink-0" />}
              url="/teams/retail-ecommerce"
              workflows={[
                {
                  title: "Shopify Revenue Analysis",
                  url: "/workflows/shopify-revenue-analysis",
                  difficulty: "beginner",
                  estimatedTime: "5 min",
                },
                {
                  title: "Product Performance Tracking",
                  url: "/workflows/product-performance-tracking",
                  difficulty: "intermediate",
                  estimatedTime: "12 min",
                },
                {
                  title: "Customer Lifetime Value",
                  url: "/workflows/customer-lifetime-value",
                  difficulty: "advanced",
                  estimatedTime: "18 min",
                },
              ]}
            />

            {/* Content & SEO Category */}
            <WorkflowCategory
              title="Content & SEO"
              description="Content performance and search optimization"
              icon={<Search className="size-5 shrink-0" />}
              url="/teams/content-seo"
              workflows={[
                {
                  title: "SEO Performance Dashboard",
                  url: "/workflows/seo-performance-dashboard",
                  difficulty: "beginner",
                  estimatedTime: "7 min",
                },
                {
                  title: "Content Engagement Analysis",
                  url: "/workflows/content-engagement-analysis",
                  difficulty: "intermediate",
                  estimatedTime: "10 min",
                },
                {
                  title: "Keyword Ranking Tracker",
                  url: "/workflows/keyword-ranking-tracker",
                  difficulty: "advanced",
                  estimatedTime: "15 min",
                },
              ]}
            />

            {/* Agency Category */}
            <WorkflowCategory
              title="Agency"
              description="Multi-client reporting and management"
              icon={<Users className="size-5 shrink-0" />}
              url="/teams/agency"
              workflows={[
                {
                  title: "Client Performance Dashboard",
                  url: "/workflows/client-performance-dashboard",
                  difficulty: "beginner",
                  estimatedTime: "8 min",
                },
                {
                  title: "Multi-Client ROI Comparison",
                  url: "/workflows/multi-client-roi-comparison",
                  difficulty: "intermediate",
                  estimatedTime: "12 min",
                },
                {
                  title: "Agency Growth Analytics",
                  url: "/workflows/agency-growth-analytics",
                  difficulty: "advanced",
                  estimatedTime: "20 min",
                },
              ]}
            />

            {/* Finance Category */}
            <WorkflowCategory
              title="Finance"
              description="Financial performance and cash flow analysis"
              icon={<Calculator className="size-5 shrink-0" />}
              url="/teams/finance"
              workflows={[
                {
                  title: "Monthly Financial Report",
                  url: "/workflows/monthly-financial-report",
                  difficulty: "beginner",
                  estimatedTime: "10 min",
                },
                {
                  title: "Cash Flow Analysis",
                  url: "/workflows/cash-flow-analysis",
                  difficulty: "intermediate",
                  estimatedTime: "15 min",
                },
                {
                  title: "Budget vs Actual Variance",
                  url: "/workflows/budget-vs-actual-variance",
                  difficulty: "advanced",
                  estimatedTime: "18 min",
                },
              ]}
            />

            {/* View All Workflows */}
            <div className="col-span-2 pt-4 border-t border-border">
              <a
                className="hover:bg-muted hover:text-accent-foreground flex select-none flex-row gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors"
                href="/workflows"
              >
                <div className="text-foreground">
                  <Book className="size-5 shrink-0" />
                </div>
                <div>
                  <div className="text-sm font-semibold">
                    Browse All Workflows
                  </div>
                  <p className="text-muted-foreground text-sm leading-snug">
                    View all 50+ ready-to-use analytics workflows
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

interface WorkflowCategoryProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  url: string;
  workflows: {
    title: string;
    url: string;
    difficulty: string;
    estimatedTime: string;
  }[];
}

const WorkflowCategory = ({
  title,
  description,
  icon,
  url,
  workflows,
}: WorkflowCategoryProps) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "intermediate":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "advanced":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200";
    }
  };

  return (
    <div className="space-y-3">
      {/* Category Header */}
      <div className="flex items-center justify-between">
        <a
          href={url}
          className="flex items-center gap-3 hover:text-accent-foreground transition-colors group"
        >
          <div className="text-foreground">{icon}</div>
          <div>
            <h4 className="font-semibold text-sm group-hover:underline">
              {title}
            </h4>
            <p className="text-xs text-muted-foreground line-clamp-1">
              {description}
            </p>
          </div>
        </a>
        <a
          href={url}
          className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
        >
          View All
          <ArrowRight className="h-3 w-3" />
        </a>
      </div>

      {/* Workflows List */}
      <div className="space-y-1">
        {workflows.slice(0, 3).map((workflow) => (
          <a
            key={workflow.title}
            className="hover:bg-muted/50 hover:text-accent-foreground flex select-none items-start gap-2 rounded-md p-2 leading-none no-underline outline-none transition-colors"
            href={workflow.url}
          >
            <div className="text-muted-foreground mt-0.5">
              <Zap className="size-4 shrink-0" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-xs font-medium truncate">
                {workflow.title}
              </div>
              <div className="flex items-center gap-2 mt-0.5">
                <span
                  className={`text-xs px-1.5 py-0.5 rounded font-medium ${getDifficultyColor(
                    workflow.difficulty
                  )}`}
                >
                  {workflow.difficulty}
                </span>
                <span className="text-xs text-muted-foreground">
                  {workflow.estimatedTime}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export { WorkflowsSubmenu };
