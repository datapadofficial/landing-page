import {
  TrendingUp,
  DollarSign,
  ShoppingCart,
  Search,
  Users,
  Package,
  Calculator,
  Building,
  Truck,
} from "lucide-react";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { getTeamsByPriority } from "@/lib/teams";

// Icon mapping utility
const iconMap = {
  TrendingUp,
  DollarSign,
  ShoppingCart,
  Search,
  Users,
  Package,
  Calculator,
  Building,
  Truck,
} as const;

type IconName = keyof typeof iconMap;

interface TeamsSubmenuProps {
  className?: string;
}

const TeamsSubmenu = ({}: TeamsSubmenuProps) => {
  // Get the top 6 teams by priority for the submenu
  const featuredTeams = getTeamsByPriority(6);

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>Teams</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-3 lg:w-[800px]">
          {featuredTeams.map((team) => {
            const IconComponent = iconMap[team.icon as IconName];
            return (
              <TeamLink
                key={team.slug}
                title={team.name}
                description={team.description}
                icon={
                  IconComponent ? (
                    <IconComponent className="size-5 shrink-0" />
                  ) : null
                }
                url={`/teams/${team.slug}`}
              />
            );
          })}

          {/* View All Teams */}
          <div className="col-span-2">
            <TeamLink
              title="View All Teams"
              description="Browse solutions for all business teams"
              icon={<Building className="size-5 shrink-0" />}
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
  icon: React.ReactNode | null;
  url: string;
}

const TeamLink = ({ title, description, icon, url }: TeamLinkProps) => {
  return (
    <a
      className="hover:bg-muted hover:text-accent-foreground flex select-none flex-row gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors"
      href={url}
    >
      {icon && <div className="text-foreground">{icon}</div>}
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
