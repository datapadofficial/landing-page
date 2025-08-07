import { MainHero } from "@/components/main-hero";
import { Hero32 } from "@/components/hero32";
import { AppPreview } from "@/components/app-preview";
import { Feature166 } from "@/components/feature166";
import { HowItWorks } from "@/components/feature242";
import { Faq2 } from "@/components/faq2";
import { Logos } from "@/components/logos";
import { Pricing20 } from "@/components/pricing20";
import { Pricing32 } from "@/components/pricing32";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <MainHero />

      {/* App Preview Section */}
      <AppPreview />

      {/* Logos section */}
      <Logos />

      {/* Features Bento Section */}
      <Feature166 />

      {/* How it works Section */}
      <HowItWorks />

      {/* Pricing Section */}
      <Pricing32 />

      {/* Integrations Section */}
      <Hero32 />

      {/* FAQ Section */}
      <Faq2 />
    </>
  );
}
