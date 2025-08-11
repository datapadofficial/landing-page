import { Sunset } from "lucide-react";
import Image from "next/image";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface IntegrationsSubmenuProps {
  className?: string;
}

const IntegrationsSubmenu = ({ className }: IntegrationsSubmenuProps) => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>Integrations</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="grid w-[500px] gap-2 p-4 md:w-[700px] md:grid-cols-3 lg:w-[800px] lg:grid-cols-4">
          <IntegrationLink
            title="Google Analytics"
            description="Web analytics and user behavior tracking"
            iconSrc="/images/integrations/google-analytics.png"
            url="/integrations/google-analytics"
          />
          <IntegrationLink
            title="Facebook Ads"
            description="Social media advertising performance"
            iconSrc="/images/integrations/facebook-ads.png"
            url="/integrations/facebook-ads"
          />
          <IntegrationLink
            title="Google Ads"
            description="Search, display, and video campaigns"
            iconSrc="/images/integrations/google-ads.png"
            url="/integrations/google-ads"
          />
          <IntegrationLink
            title="Shopify"
            description="E-commerce platform data integration"
            iconSrc="/images/integrations/shopify.png"
            url="/integrations/shopify"
          />
          <IntegrationLink
            title="HubSpot"
            description="CRM and marketing automation platform"
            iconSrc="/images/integrations/hubspot.png"
            url="/integrations/hubspot"
          />
          <IntegrationLink
            title="Stripe"
            description="Payment processing and financial data"
            iconSrc="/images/integrations/stripe.png"
            url="/integrations/stripe"
          />
          <IntegrationLink
            title="Salesforce"
            description="Leading CRM platform"
            iconSrc="/images/integrations/salesforce.png"
            url="/integrations/salesforce"
          />
          <IntegrationLink
            title="LinkedIn Ads"
            description="B2B advertising platform"
            iconSrc="/images/integrations/linkedin-ads.png"
            url="/integrations/linkedin-ads"
          />
          <IntegrationLink
            title="TikTok Ads"
            description="Video-first marketing campaigns"
            iconSrc="/images/integrations/tiktok-ads.png"
            url="/integrations/tiktok-ads"
          />
          <IntegrationLink
            title="Instagram Business"
            description="Visual content marketing platform"
            iconSrc="/images/integrations/instagram-business.png"
            url="/integrations/instagram-business"
          />
          <IntegrationLink
            title="YouTube"
            description="Video content and advertising platform"
            iconSrc="/images/integrations/youtube.png"
            url="/integrations/youtube"
          />
          <IntegrationLink
            title="Mailchimp"
            description="Email marketing automation"
            iconSrc="/images/integrations/mailchimp.png"
            url="/integrations/mailchimp"
          />
          <IntegrationLink
            title="Klaviyo"
            description="Advanced email and SMS marketing"
            iconSrc="/images/integrations/klaviyo.png"
            url="/integrations/klaviyo"
          />
          <IntegrationLink
            title="ActiveCampaign"
            description="Customer experience automation"
            iconSrc="/images/integrations/activecampaign.png"
            url="/integrations/activecampaign"
          />
          <IntegrationLink
            title="Google Sheets"
            description="Spreadsheet data integration"
            iconSrc="/images/integrations/google-sheets.png"
            url="/integrations/google-sheets"
          />
          <IntegrationLink
            title="Airtable"
            description="Flexible database platform"
            iconSrc="/images/integrations/airtable.png"
            url="/integrations/airtable"
          />
          <IntegrationLink
            title="PostgreSQL"
            description="Advanced open source database"
            iconSrc="/images/integrations/postgres.png"
            url="/integrations/postgresql"
          />
          <IntegrationLink
            title="MySQL"
            description="Popular relational database"
            iconSrc="/images/integrations/mysql.png"
            url="/integrations/mysql"
          />
          <IntegrationLink
            title="Snowflake"
            description="Cloud data platform"
            iconSrc="/images/integrations/snowflake.png"
            url="/integrations/snowflake"
          />
          <IntegrationLink
            title="BigQuery"
            description="Google's data warehouse solution"
            iconSrc="/images/integrations/google-bigquery.png"
            url="/integrations/bigquery"
          />

          {/* View All Integrations */}
          <a
            className="hover:bg-muted hover:text-accent-foreground flex select-none flex-row gap-3 rounded-md p-2.5 leading-none no-underline outline-none transition-colors"
            href="/integrations"
          >
            <div className="text-foreground">
              <Sunset className="size-5 shrink-0" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-sm font-semibold truncate">
                View All Integrations
              </div>
              <p className="text-muted-foreground text-xs leading-snug line-clamp-2">
                Browse all 50+ data source connections
              </p>
            </div>
          </a>
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
    <a
      className="hover:bg-muted hover:text-accent-foreground flex select-none flex-row gap-3 rounded-md p-2.5 leading-none no-underline outline-none transition-colors"
      href={url}
    >
      <div className="text-foreground">
        <div className="flex-shrink-0 w-6 h-6 relative">
          <Image
            src={iconSrc}
            alt={title}
            width={24}
            height={24}
            className="rounded object-contain"
          />
        </div>
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-sm font-semibold truncate">{title}</div>
        <p className="text-muted-foreground text-xs leading-snug line-clamp-2">
          {description}
        </p>
      </div>
    </a>
  );
};

export { IntegrationsSubmenu };
