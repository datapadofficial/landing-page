import { MainHero } from "@/components/main-hero";
import { AppVideoPreview } from "@/components/creatives/app-video-preview";
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

      {/* Video Preview Section */}
      <AppVideoPreview
        videoUrl={
          "https://framerusercontent.com/assets/s6inNxqh5m9k41CDacUiLwBUGVc.mp4"
        }
      />

      {/* App Preview Section */}
      {/* <AppPreview /> */}

      {/* Logos section */}
      <Logos5 />

      {/* Data Agent Section */}
      <Feature166 />

      {/* Workflows Section */}
      <Feature242 />

      {/* Key Features Section */}
      <Feature128 />

      {/* Case Studies Section */}
      <DatapadCasestudies />

      {/* Integrations Section */}
      <Feature250 />

      {/* Pricing Section */}
      <Pricing32 />

      {/* FAQ Section */}
      <Faq2 />
    </>
  );
}
