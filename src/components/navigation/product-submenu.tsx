import { LayoutGrid } from "lucide-react";
import { DynamicIcon, IconName } from "lucide-react/dynamic";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { getAllFeatures } from "@/lib/feature-utils";

interface ProductSubmenuProps {
  className?: string;
}

const ProductSubmenu = ({}: ProductSubmenuProps) => {
  const features = getAllFeatures();
  // Get first 11 features for the submenu, plus "View All Features" link
  const featuresForMenu = features.slice(0, 11);

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>Product</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="grid w-[600px] gap-3 p-4 md:w-[800px] md:grid-cols-2 lg:w-[900px] lg:grid-cols-4">
          {featuresForMenu.map((feature) => {
            return (
              <ProductFeatureLink
                key={feature.slug}
                title={feature.title}
                description={feature.shortDescription}
                icon={
                  <DynamicIcon
                    name={feature.icon as IconName}
                    className="size-5 shrink-0"
                  />
                }
                url={feature.redirectUrl || `/features/${feature.slug}`}
                color={feature.color}
              />
            );
          })}
          <ProductFeatureLink
            title="View All Features"
            description="Explore all AI-powered features in detail"
            icon={<LayoutGrid className="size-5 shrink-0" />}
            url="/features"
            color="chart-red"
          />
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

interface ProductFeatureLinkProps {
  title: string;
  description: string;
  icon: React.ReactNode | null;
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
    <NavigationMenuLink
      className="hover:bg-muted hover:text-accent-foreground flex select-none flex-row gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors"
      href={url}
    >
      {icon && (
        <div className="text-foreground" style={{ color: `var(--${color})` }}>
          {icon}
        </div>
      )}
      <div className="space-y-1">
        <div className="text-sm font-semibold">{title}</div>
        <p className="text-muted-foreground text-xs leading-snug">
          {description}
        </p>
      </div>
    </NavigationMenuLink>
  );
};

export { ProductSubmenu };
