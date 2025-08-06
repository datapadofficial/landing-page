import { Button } from "@/components/ui/button";

interface Integration {
  id: string;
  icon: React.ReactNode;
}

interface Hero32Props {
  heading?: string;
  description?: string;
  button?: {
    text: string;
    url: string;
  };
  integrations?: Integration[][];
}

const Hero32 = ({
  heading = "Connect Everything",
  description = "Datapad seamlessly integrates with 200+ tools and platforms you already use. No complex setup, no data silos—just instant insights from all your business data in one unified dashboard.",
  button = {
    text: "View All Integrations",
    url: "#integrations",
  },
  integrations = [
    [
      {
        id: "google-analytics",
        icon: (
          <img
            alt="Google Analytics"
            src="/images/integrations/google-analytics.png"
            className="h-full w-full object-contain"
          />
        ),
      },
      {
        id: "google-ads",
        icon: (
          <img
            alt="Google Ads"
            src="/images/integrations/google-ads.png"
            className="h-full w-full object-contain"
          />
        ),
      },
      {
        id: "facebook-ads",
        icon: (
          <img
            alt="Facebook Ads"
            src="/images/integrations/facebook-ads.png"
            className="h-full w-full object-contain"
          />
        ),
      },
      {
        id: "linkedin-ads",
        icon: (
          <img
            alt="LinkedIn Ads"
            src="/images/integrations/linkedin-ads.png"
            className="h-full w-full object-contain"
          />
        ),
      },
      {
        id: "stripe",
        icon: (
          <img
            alt="Stripe"
            src="/images/integrations/stripe.png"
            className="h-full w-full object-contain"
          />
        ),
      },
    ],
    [
      {
        id: "salesforce",
        icon: (
          <img
            alt="Salesforce"
            src="/images/integrations/salesforce.png"
            className="h-full w-full object-contain"
          />
        ),
      },
      {
        id: "hubspot",
        icon: (
          <img
            alt="HubSpot"
            src="/images/integrations/hubspot.png"
            className="h-full w-full object-contain"
          />
        ),
      },
      {
        id: "shopify",
        icon: (
          <img
            alt="Shopify"
            src="/images/integrations/shopify.png"
            className="h-full w-full object-contain"
          />
        ),
      },
      {
        id: "mixpanel",
        icon: (
          <img
            alt="Mixpanel"
            src="/images/integrations/mixpanel.png"
            className="h-full w-full object-contain"
          />
        ),
      },
      {
        id: "intercom",
        icon: (
          <img
            alt="Intercom"
            src="/images/integrations/intercom.png"
            className="h-full w-full object-contain"
          />
        ),
      },
    ],
    [
      {
        id: "google-bigquery",
        icon: (
          <img
            alt="Google BigQuery"
            src="/images/integrations/google-bigquery.png"
            className="h-full w-full object-contain"
          />
        ),
      },
      {
        id: "snowflake",
        icon: (
          <img
            alt="Snowflake"
            src="/images/integrations/snowflake.png"
            className="h-full w-full object-contain"
          />
        ),
      },
      {
        id: "postgres",
        icon: (
          <img
            alt="PostgreSQL"
            src="/images/integrations/postgres.png"
            className="h-full w-full object-contain"
          />
        ),
      },
      {
        id: "google-sheets",
        icon: (
          <img
            alt="Google Sheets"
            src="/images/integrations/google-sheets.png"
            className="h-full w-full object-contain"
          />
        ),
      },
      {
        id: "zapier",
        icon: (
          <img
            alt="Zapier"
            src="/images/integrations/zapier.png"
            className="h-full w-full object-contain"
          />
        ),
      },
    ],
  ],
}: Hero32Props) => {
  return (
    <section className="relative overflow-hidden w-full">
      <div className="absolute inset-x-0 top-0 flex h-full w-full items-center justify-center opacity-100">
        <img
          alt="background"
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/square-alt-grid.svg"
          className="opacity-30 dark:opacity-60 dark:invert [mask-image:radial-gradient(60%_60%_at_center,white,transparent)]"
        />
      </div>
      <div className="relative">
        <div className="md:-space-x-26 container relative flex flex-col items-start md:flex-row md:items-center">
          <div className="bg-background z-20 -mx-4 w-full shrink-0 px-4 pt-32 md:w-1/2 md:bg-transparent md:pb-32">
            <div className="flex flex-col items-start text-left">
              <div className="max-w-sm">
                <h1 className="my-6 text-pretty text-heading-1 text-gradient">
                  {heading}
                </h1>
                <p className="text-muted-foreground">{description}</p>
                <Button asChild size="lg" className="mt-10">
                  <a href={button.url}>{button.text}</a>
                </Button>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-16 pb-8 pt-12 md:py-32">
              {integrations.map((line, i) => (
                <div key={i} className="gap-x-22 odd:-translate-x-22 flex">
                  {line.map((integration) => (
                    <div
                      key={integration.id}
                      className="size-16 border-border/30 bg-card/40 backdrop-blur-sm rounded-xl border shadow-sm dark:shadow-none"
                    >
                      <div className="bg-muted/5 dark:bg-muted/3 h-full w-full p-4">
                        {integration.icon}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero32 };
