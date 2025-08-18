import {
  Book,
  TrendingUp,
  DollarSign,
  ShoppingCart,
  Search,
  Users,
  Calculator,
  ArrowRight,
  Package,
  Truck,
} from "lucide-react";
import Link from "next/link";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { getWorkflowsByTeam } from "@/lib/workflows";

const WorkflowsSubmenu = () => {
  // Get real workflows by team
  const marketingWorkflows = getWorkflowsByTeam("marketing").slice(0, 3);
  const salesWorkflows = getWorkflowsByTeam("sales").slice(0, 3);
  const ecommerceWorkflows = getWorkflowsByTeam("retail-ecommerce").slice(0, 3);
  const seoWorkflows = getWorkflowsByTeam("content-seo").slice(0, 3);
  const agencyWorkflows = getWorkflowsByTeam("agency").slice(0, 3);
  const financeWorkflows = getWorkflowsByTeam("finance").slice(0, 3);
  const socialMediaWorkflows = getWorkflowsByTeam("social-media").slice(0, 3);
  const productWorkflows = getWorkflowsByTeam("product-management").slice(0, 3);
  const growthWorkflows = getWorkflowsByTeam("growth").slice(0, 3);
  const supplyChainWorkflows = getWorkflowsByTeam("supply-chain").slice(0, 3);
  const crmWorkflows = getWorkflowsByTeam("crm").slice(0, 3);

  const categories = [
    {
      title: "Marketing",
      description: "Campaign performance and ROI analysis",
      icon: <TrendingUp className="size-5 shrink-0" />,
      url: "/teams/marketing",
      color: "chart-blue",
      workflows: marketingWorkflows.map((w) => ({
        title: w.title,
        url: `/workflows/${w.slug}`,
        difficulty: w.difficulty,
        estimatedTime: w.estimatedTime,
      })),
    },
    {
      title: "Sales",
      description: "Sales performance and pipeline tracking",
      icon: <DollarSign className="size-5 shrink-0" />,
      url: "/teams/sales",
      color: "chart-green",
      workflows: salesWorkflows.map((w) => ({
        title: w.title,
        url: `/workflows/${w.slug}`,
        difficulty: w.difficulty,
        estimatedTime: w.estimatedTime,
      })),
    },
    {
      title: "E-commerce",
      description: "Online store performance and optimization",
      icon: <ShoppingCart className="size-5 shrink-0" />,
      url: "/teams/retail-ecommerce",
      color: "chart-orange",
      workflows: ecommerceWorkflows.map((w) => ({
        title: w.title,
        url: `/workflows/${w.slug}`,
        difficulty: w.difficulty,
        estimatedTime: w.estimatedTime,
      })),
    },
    {
      title: "Content & SEO",
      description: "Content performance and search optimization",
      icon: <Search className="size-5 shrink-0" />,
      url: "/teams/content-seo",
      color: "chart-purple",
      workflows: seoWorkflows.map((w) => ({
        title: w.title,
        url: `/workflows/${w.slug}`,
        difficulty: w.difficulty,
        estimatedTime: w.estimatedTime,
      })),
    },
    {
      title: "Agency",
      description: "Multi-client reporting and management",
      icon: <Users className="size-5 shrink-0" />,
      url: "/teams/agency",
      color: "chart-red",
      workflows: agencyWorkflows.map((w) => ({
        title: w.title,
        url: `/workflows/${w.slug}`,
        difficulty: w.difficulty,
        estimatedTime: w.estimatedTime,
      })),
    },
    {
      title: "Finance",
      description: "Financial performance and cash flow analysis",
      icon: <Calculator className="size-5 shrink-0" />,
      url: "/teams/finance",
      color: "chart-yellow",
      workflows: financeWorkflows.map((w) => ({
        title: w.title,
        url: `/workflows/${w.slug}`,
        difficulty: w.difficulty,
        estimatedTime: w.estimatedTime,
      })),
    },
    {
      title: "Social Media",
      description: "Social media performance and engagement analysis",
      icon: <Users className="size-5 shrink-0" />,
      url: "/teams/social-media",
      color: "chart-orange",
      workflows: socialMediaWorkflows.map((w) => ({
        title: w.title,
        url: `/workflows/${w.slug}`,
        difficulty: w.difficulty,
        estimatedTime: w.estimatedTime,
      })),
    },
    {
      title: "Product Management",
      description: "Product usage and feature adoption analytics",
      icon: <Package className="size-5 shrink-0" />,
      url: "/teams/product-management",
      color: "chart-yellow",
      workflows: productWorkflows.map((w) => ({
        title: w.title,
        url: `/workflows/${w.slug}`,
        difficulty: w.difficulty,
        estimatedTime: w.estimatedTime,
      })),
    },
    {
      title: "Growth",
      description: "Customer acquisition and retention analytics",
      icon: <TrendingUp className="size-5 shrink-0" />,
      url: "/teams/growth",
      color: "chart-purple",
      workflows: growthWorkflows.map((w) => ({
        title: w.title,
        url: `/workflows/${w.slug}`,
        difficulty: w.difficulty,
        estimatedTime: w.estimatedTime,
      })),
    },
    {
      title: "Supply Chain",
      description: "Inventory and logistics optimization",
      icon: <Truck className="size-5 shrink-0" />,
      url: "/teams/supply-chain",
      color: "chart-orange",
      workflows: supplyChainWorkflows.map((w) => ({
        title: w.title,
        url: `/workflows/${w.slug}`,
        difficulty: w.difficulty,
        estimatedTime: w.estimatedTime,
      })),
    },
    {
      title: "CRM",
      description: "Customer relationship and sales pipeline analytics",
      icon: <Users className="size-5 shrink-0" />,
      url: "/teams/crm",
      color: "chart-blue",
      workflows: crmWorkflows.map((w) => ({
        title: w.title,
        url: `/workflows/${w.slug}`,
        difficulty: w.difficulty,
        estimatedTime: w.estimatedTime,
      })),
    },
  ];

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>Workflows</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="w-[900px] gap-4 p-6 md:w-[1000px] lg:w-[1200px]">
          <div className="grid grid-cols-4 gap-4">
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
            <div className="col-span-4 pt-4 border-t border-border">
              <NavigationMenuLink
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
              </NavigationMenuLink>
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
              <NavigationMenuLink
                key={workflow.title}
                className="hover:bg-muted/50 hover:text-accent-foreground flex select-none items-start rounded-md p-1 leading-none no-underline outline-none transition-colors"
                href={workflow.url}
              >
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-medium truncate">
                    {workflow.title}
                  </div>
                </div>
              </NavigationMenuLink>
            ))}

            {/* View All as last sub-item */}
            <NavigationMenuLink
              className="hover:bg-muted/50 hover:text-accent-foreground flex select-none items-start rounded-md p-1 leading-none no-underline outline-none transition-colors"
              href={url}
            >
              <div className="min-w-0 flex-1">
                <div className="text-xs font-medium truncate flex items-center gap-1">
                  View All {title}
                  <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            </NavigationMenuLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export { WorkflowsSubmenu };
