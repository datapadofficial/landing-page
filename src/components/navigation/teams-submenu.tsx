import { Building } from "lucide-react";
import { DynamicIcon, IconName } from "lucide-react/dynamic";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { getTeamsByPriority } from "@/lib/team-utils";

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
            return (
              <TeamLink
                key={team.slug}
                title={team.name}
                description={team.description}
                icon={
                  <DynamicIcon
                    name={team.icon as IconName}
                    className="size-5 shrink-0"
                  />
                }
                url={`/teams/${team.slug}`}
                color={team.color}
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
  color?: string;
}

const TeamLink = ({ title, description, icon, url, color }: TeamLinkProps) => {
  return (
    <NavigationMenuLink
      className="hover:bg-muted hover:text-accent-foreground flex select-none flex-row gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors"
      href={url}
    >
      {icon && (
        <div
          className="text-foreground"
          style={color ? { color: `var(--${color})` } : {}}
        >
          {icon}
        </div>
      )}
      <div>
        <div className="text-sm font-semibold">{title}</div>
        <p className="text-muted-foreground text-sm leading-snug">
          {description}
        </p>
      </div>
    </NavigationMenuLink>
  );
};

export { TeamsSubmenu };
