import { MainHero } from "@/components/main-hero";
import { Hero32 } from "@/components/hero32";
import { AppPreview } from "@/components/creatives/app-preview";
import { Feature166 } from "@/components/feature166";
import { Feature242 } from "@/components/feature242";
import { Faq2 } from "@/components/faq2";
import { Logos } from "@/components/logos";
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

      {/* How it works Section */}
      <Feature242 />

      {/* Features Bento Section */}
      <Feature166 />

      {/* Pricing Section */}
      <Pricing32 />

      {/* Integrations Section */}
      <Hero32 />

      {/* FAQ Section */}
      <Faq2 />
    </>
  );
}
