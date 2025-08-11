import {
  Book,
  TrendingUp,
  DollarSign,
  ShoppingCart,
  Search,
  Users,
  Calculator,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const WorkflowsSubmenu = () => {
  const categories = [
    {
      title: "Marketing",
      description: "Campaign performance and ROI analysis",
      icon: <TrendingUp className="size-5 shrink-0" />,
      url: "/teams/marketing",
      color: "chart-blue",
      workflows: [
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
      ],
    },
    {
      title: "Sales",
      description: "Sales performance and pipeline tracking",
      icon: <DollarSign className="size-5 shrink-0" />,
      url: "/teams/sales",
      color: "chart-green",
      workflows: [
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
      ],
    },
    {
      title: "E-commerce",
      description: "Online store performance and optimization",
      icon: <ShoppingCart className="size-5 shrink-0" />,
      url: "/teams/retail-ecommerce",
      color: "chart-orange",
      workflows: [
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
      ],
    },
    {
      title: "Content & SEO",
      description: "Content performance and search optimization",
      icon: <Search className="size-5 shrink-0" />,
      url: "/teams/content-seo",
      color: "chart-purple",
      workflows: [
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
      ],
    },
    {
      title: "Agency",
      description: "Multi-client reporting and management",
      icon: <Users className="size-5 shrink-0" />,
      url: "/teams/agency",
      color: "chart-red",
      workflows: [
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
      ],
    },
    {
      title: "Finance",
      description: "Financial performance and cash flow analysis",
      icon: <Calculator className="size-5 shrink-0" />,
      url: "/teams/finance",
      color: "chart-yellow",
      workflows: [
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
      ],
    },
  ];

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>Workflows</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="w-[900px] gap-4 p-6 md:w-[1000px] lg:w-[1100px]">
          <div className="grid grid-cols-3 gap-6">
            {categories.map((category) => (
              <WorkflowCategory
                key={category.title}
                title={category.title}
                description={category.description}
                icon={category.icon}
                url={category.url}
                color={category.color}
                workflows={category.workflows}
              />
            ))}

            {/* View All Workflows */}
            <div className="col-span-3 pt-4 border-t border-border">
              <Link
                className="hover:bg-muted hover:text-accent-foreground flex select-none flex-row gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors w-full"
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
              </Link>
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
  color: string;
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
  color,
  workflows,
}: WorkflowCategoryProps) => {
  return (
    <div className="space-y-3">
      {/* Category Header */}
      <div className="flex items-start gap-3">
        {/* Icon on the left */}
        <div
          className="text-foreground pt-0.5"
          style={{ color: `var(--${color})` }}
        >
          {icon}
        </div>

        {/* Content on the right */}
        <div className="flex-1 min-w-0">
          <div className="mb-1">
            <h4 className="font-semibold text-sm">{title}</h4>
          </div>

          <p className="text-xs text-muted-foreground line-clamp-1 mb-3">
            {description}
          </p>

          {/* Workflows List - now aligned with the title */}
          <div className="space-y-1">
            {workflows.slice(0, 3).map((workflow) => (
              <Link
                key={workflow.title}
                className="hover:bg-muted/50 hover:text-accent-foreground flex select-none items-start rounded-md p-1 leading-none no-underline outline-none transition-colors"
                href={workflow.url}
              >
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-medium truncate">
                    {workflow.title}
                  </div>
                </div>
              </Link>
            ))}

            {/* View All as last sub-item */}
            <Link
              className="hover:bg-muted/50 hover:text-accent-foreground flex select-none items-start rounded-md p-1 leading-none no-underline outline-none transition-colors"
              href={url}
            >
              <div className="min-w-0 flex-1">
                <div className="text-xs font-medium truncate flex items-center gap-1">
                  View All {title}
                  <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export { WorkflowsSubmenu };
