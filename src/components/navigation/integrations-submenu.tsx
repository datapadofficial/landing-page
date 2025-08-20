import { Sunset } from "lucide-react";
import Image from "next/image";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { getAllIntegrations } from "@/lib/integration-utils";
import { Integration } from "@/types/integration";

// interface IntegrationsSubmenuProps {
//   className?: string;
// }

const IntegrationsSubmenu = () => {
  // Get featured integrations for the navigation menu
  const allIntegrations = getAllIntegrations(9);

  // Define which integrations to show in the navigation (most popular/important ones)
  const featuredIntegrationIds = [
    "google-analytics",
    "facebook-ads",
    "google-ads",
    "shopify",
    "hubspot",
    "stripe",
    "salesforce",
    "linkedin-ads",
    "tiktok-ads",
    "instagram-business",
    "youtube",
    "mailchimp",
    "klaviyo",
    "activecampaign",
    "google-sheets",
    "airtable",
    "postgres",
    "mysql",
    "snowflake",
    "google-bigquery",
  ];

  const featuredIntegrations = featuredIntegrationIds
    .map((id) => allIntegrations.find((integration) => integration.id === id))
    .filter(
      (integration): integration is Integration => integration !== undefined
    );

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>Integrations</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="w-[500px] gap-2 p-4 md:w-[700px] lg:w-[900px]">
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-2">
            {featuredIntegrations.map((integration) => (
              <IntegrationLink
                key={integration.id}
                title={integration.name}
                description={integration.description}
                iconSrc={integration.icon}
                url={`/integrations/${integration.id}`}
              />
            ))}

            {/* View All Integrations */}
            <div className="col-span-full pt-4 border-t border-border">
              <NavigationMenuLink
                className="hover:bg-muted hover:text-accent-foreground flex select-none flex-row gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors w-full"
                href="/integrations"
              >
                <div className="text-foreground">
                  <Sunset className="size-5 shrink-0" />
                </div>
                <div>
                  <div className="text-sm font-semibold">
                    View All Integrations
                  </div>
                  <p className="text-muted-foreground text-sm leading-snug">
                    Browse all {allIntegrations.length}+ data source connections
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

interface IntegrationLinkProps {
  title: string;
  description: string;
  iconSrc: string;
  url: string;
}

const IntegrationLink = ({
  title,
  description,
  iconSrc,
  url,
}: IntegrationLinkProps) => {
  return (
    <NavigationMenuLink
      className="hover:bg-muted hover:text-accent-foreground flex select-none flex-row gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors"
      href={url}
    >
      <div className="text-foreground">
        <div className="flex-shrink-0 w-5 h-5 relative">
          <Image
            src={iconSrc}
            alt={title}
            width={20}
            height={20}
            className="rounded object-contain"
          />
        </div>
      </div>
      <div className="space-y-1">
        <div className="text-sm font-semibold">{title}</div>
        <p className="text-muted-foreground text-xs leading-snug">
          {description}
        </p>
      </div>
    </NavigationMenuLink>
  );
};

export { IntegrationsSubmenu };
