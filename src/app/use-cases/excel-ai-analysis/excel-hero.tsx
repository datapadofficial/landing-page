import { Button } from "@/components/ui/button";
import { AttributionLink } from "@/components/attribution-link";
import Image from "next/image";

export function ExcelHero() {
  const integrations = [
    {
      id: "csv",
      name: "CSV",
      icon: "/images/integrations/csv.png",
    },
    {
      id: "excel",
      name: "Excel",
      icon: "/images/integrations/excel.png",
    },
    {
      id: "google-sheets",
      name: "Sheets",
      icon: "/images/integrations/google-sheets.png",
    },
  ];
  return (
    <section className="pt-8 sm:pt-16">
      <div className="container relative mx-auto px-4 text-center flex w-full flex-col items-center justify-center overflow-hidden pb-8 sm:pb-4">
        <div className="bg-background pointer-events-none absolute inset-0 z-20 h-full w-full [mask-image:radial-gradient(transparent,white)]" />

        <div className="relative z-30 mx-auto flex flex-col gap-4 sm:gap-6 max-w-7xl">
          {/* Integration Icons */}
          <div className="flex justify-center items-center mb-4 p-2">
            {integrations.map((integration, index) => (
              <div
                key={integration.id}
                className={`flex size-12 sm:size-16 items-center justify-center rounded-full border bg-[#f7f7f7] dark:bg-[#18181b] drop-shadow-lg ${
                  index > 0 ? "-ml-2 sm:-ml-3" : ""
                } ${integration.id === "excel" ? "scale-110" : ""}`}
                style={{ zIndex: integration.id === "excel" ? 3 : 1 }}
              >
                <Image
                  src={integration.icon}
                  alt={integration.name}
                  width={32}
                  height={32}
                  className="rounded object-contain"
                />
              </div>
            ))}
          </div>

          {/* Title */}
          <h1 className="w-full relative text-center mx-auto text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight">
            Still Working on That Excel File?
          </h1>

          {/* Description */}
          <p className="text-muted-foreground text-balance text-base sm:text-lg lg:text-xl px-4 sm:px-0 max-w-3xl mx-auto">
            Transform your Excel spreadsheets into powerful business insights
            with our
            <span className="text-primary font-semibold">
              {" "}
              AI Excel analyzer
            </span>
            . Ask questions in plain English and get instant Excel AI analysis,
            charts, and actionable recommendations.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="relative z-30 flex flex-col sm:flex-row gap-4 items-center justify-center mt-8 w-full sm:w-fit">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <AttributionLink
              buttonLocation="integration-hero-primary"
              searchParams={{ integration: "excel" }}
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
              searchParams={{ integration: "excel" }}
            >
              Book a 15m Demo
            </AttributionLink>
          </Button>
        </div>
      </div>
    </section>
  );
}
