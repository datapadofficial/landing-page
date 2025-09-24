import { Button } from "@/components/ui/button";
import { AttributionLink } from "@/components/attribution-link";
import Image from "next/image";

export function MedicalHero() {
  const integrations = [
    {
      id: "ehr",
      name: "EHR",
      icon: "/images/integrations/manual.png",
    },
    {
      id: "csv",
      name: "CSV",
      icon: "/images/integrations/csv.png",
    },
    {
      id: "postgres",
      name: "Warehouse",
      icon: "/images/integrations/postgres.png",
    },
  ];

  return (
    <section className="pt-8 sm:pt-16">
      <div className="container relative mx-auto flex w-full flex-col items-center justify-center overflow-hidden px-4 pb-8 text-center sm:pb-4">
        <div className="bg-background pointer-events-none absolute inset-0 z-20 h-full w-full [mask-image:radial-gradient(transparent,white)]" />

        <div className="relative z-30 mx-auto flex max-w-7xl flex-col gap-4 sm:gap-6">
          <div className="mb-4 flex items-center justify-center p-2">
            {integrations.map((integration, index) => (
              <div
                key={integration.id}
                className={`flex size-12 items-center justify-center rounded-full border bg-[#f7f7f7] drop-shadow-lg dark:bg-[#18181b] sm:size-16 ${
                  index > 0 ? "-ml-2 sm:-ml-3" : ""
                } ${integration.id === "ehr" ? "scale-110" : ""}`}
                style={{ zIndex: integration.id === "ehr" ? 3 : 1 }}
              >
                <Image
                  src={integration.icon}
                  alt={integration.name}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          <h1 className="relative mx-auto w-full text-balance text-center text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl lg:text-7xl">
            Unite Clinical Data With AI Medical Insights
          </h1>

          <p className="text-balance px-4 text-base text-muted-foreground sm:px-0 sm:text-lg lg:text-xl">
            Launch
            <span className="font-semibold text-primary">
              {" "}
              AI medical data analysis
            </span>
            {" "}
            that blends electronic health records, lab systems, and population
            data into HIPAA-ready dashboards, workflows, and automated
            recommendations for every care team.
          </p>
        </div>

        <div className="relative z-30 mt-8 flex w-full flex-col items-center justify-center gap-4 sm:w-fit sm:flex-row">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <AttributionLink
              buttonLocation="integration-hero-primary"
              searchParams={{ integration: "medical-data" }}
            >
              Try for Free
            </AttributionLink>
          </Button>

          <Button
            asChild
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto"
          >
            <AttributionLink
              buttonLocation="integration-hero-demo"
              searchParams={{ integration: "medical-data" }}
            >
              Book a 15m Demo
            </AttributionLink>
          </Button>
        </div>
      </div>
    </section>
  );
}
