import { Zap, Trees, Book, Sunset } from "lucide-react";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface TeamsSubmenuProps {
  className?: string;
}

const TeamsSubmenu = ({ className }: TeamsSubmenuProps) => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>Teams</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
          <TeamLink
            title="Marketing"
            description="Campaign performance and ROI analysis"
            icon={<Zap className="size-5 shrink-0" />}
            url="/teams/marketing"
          />
          <TeamLink
            title="Sales"
            description="Sales performance and pipeline tracking"
            icon={<Trees className="size-5 shrink-0" />}
            url="/teams/sales"
          />
          <TeamLink
            title="E-commerce"
            description="Online store performance and optimization"
            icon={<Book className="size-5 shrink-0" />}
            url="/teams/retail-ecommerce"
          />
          <TeamLink
            title="Finance"
            description="Financial performance and cash flow analysis"
            icon={<Sunset className="size-5 shrink-0" />}
            url="/teams/finance"
          />
          <TeamLink
            title="Content & SEO"
            description="Content performance and search optimization"
            icon={<Book className="size-5 shrink-0" />}
            url="/teams/content-seo"
          />
          <TeamLink
            title="Agency"
            description="Multi-client reporting and management"
            icon={<Zap className="size-5 shrink-0" />}
            url="/teams/agency"
          />

          {/* View All Teams */}
          <div className="col-span-2">
            <TeamLink
              title="View All Teams"
              description="Browse solutions for all business teams"
              icon={<Book className="size-5 shrink-0" />}
              url="/teams"
            />
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

interface TeamLinkProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  url: string;
}

const TeamLink = ({ title, description, icon, url }: TeamLinkProps) => {
  return (
    <a
      className="hover:bg-muted hover:text-accent-foreground flex select-none flex-row gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors"
      href={url}
    >
      <div className="text-foreground">{icon}</div>
      <div>
        <div className="text-sm font-semibold">{title}</div>
        <p className="text-muted-foreground text-sm leading-snug">
          {description}
        </p>
      </div>
    </a>
  );
};

export { TeamsSubmenu };
