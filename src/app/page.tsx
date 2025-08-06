import { Hero7 } from "@/components/hero7";
import { Hero32 } from "@/components/hero32";
import { AppPreview } from "@/components/app-preview";
import { Marquee } from "@/components/magicui/marquee";
import { Feature166 } from "@/components/feature166";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero7
        heading="Better AI Outputs With Data-Backed Workflows"
        description="Generalistic AI is to shallow to meet your competitive business demands. Datapad analyses your existing data before takin any action; leading to 5x better results on ROI on average."
        button={{
          text: "Get Started Free",
          url: "#",
        }}
      />

      <AppPreview />

      {/* Trusted by section */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground mb-8">
            Trusted by the world's most innovative teams
          </p>
          <Marquee pauseOnHover className="[--duration:20s]">
            {[
              "TechCorp",
              "DataFlow Inc",
              "Analytics Pro",
              "CloudFirst",
              "InnovateLabs",
              "ScaleUp Solutions",
              "NextGen Analytics",
              "DataDriven Co",
            ].map((company) => (
              <div
                key={company}
                className="mx-8 text-lg font-semibold text-muted-foreground hover:text-foreground transition-colors"
              >
                {company}
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      {/* Features Bento Section */}
      <Feature166 />

      {/* Integrations Section */}
      <Hero32 />
    </>
  );
}
