import { Hero7 } from "@/components/hero7";
import { Hero32 } from "@/components/hero32";
import { AppPreview } from "@/components/app-preview";
import { Marquee } from "@/components/magicui/marquee";
import { Feature166 } from "@/components/feature166";
import { Feature95 } from "@/components/feature95";
import { Faq2 } from "@/components/faq2";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero7 />

      <AppPreview />

      {/* Trusted by section */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground mb-8">
            Trusted by the world's most innovative teams
          </p>
          <Marquee pauseOnHover className="[--duration:20s]" />
        </div>
      </section>

      {/* Features Bento Section */}
      <Feature166 />

      {/* How it works Section */}
      <Feature95 />

      {/* Integrations Section */}
      <Hero32 />

      {/* FAQ Section */}
      <Faq2 />
    </>
  );
}
