import { MainHero } from "@/components/main-hero";
import { AppPreview } from "@/components/creatives/app-preview";
import { Logos5 } from "@/components/logos5";
import { Feature242 } from "@/components/feature242";
import { Feature128 } from "@/components/feature128";
import { Faq2 } from "@/components/faq2";
import { Pricing32 } from "@/components/pricing32";
import { DatapadCasestudies } from "@/components/datapad-casestudies";

import dynamic from "next/dynamic";
import { Feature250 } from "@/components/feature250";

// Only lazy load components with heavy charts/visualizations
const Feature166 = dynamic(
  () =>
    import("@/components/feature166").then((mod) => ({
      default: mod.Feature166,
    })),
  {
    ssr: true, // Keep SSR for SEO
    loading: () => (
      <div className="h-96 animate-pulse bg-muted/50 rounded-lg" />
    ),
  }
);

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <MainHero />

      {/* App Preview Section */}
      <AppPreview />

      {/* Logos section */}
      <Logos5 />

      {/* How it works Section */}
      <Feature242 />

      {/* Key Features Section */}
      <Feature128 />

      {/* Features Bento Section */}
      <Feature166 />

      {/* Case Studies Section */}
      <DatapadCasestudies />

      {/* Pricing Section */}
      <Pricing32 />

      {/* Integrations Section */}
      <Feature250 />

      {/* FAQ Section */}
      <Faq2 />
    </>
  );
}
