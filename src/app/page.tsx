import { MainHero } from "@/components/main-hero";
// import { AppVideoPreview } from "@/components/creatives/app-video-preview";
import { AppPreview } from "@/components/creatives/app-preview";
import { MainLogos } from "@/components/main-logos";
import { WorkflowsSection } from "@/components/workflows-section";
import { FeatureGrid } from "@/components/features/feature-grid";
import { Faq2 } from "@/components/faq2";
import { Pricing32 } from "@/components/pricing32";
import { DatapadCasestudies } from "@/components/datapad-casestudies";

import dynamic from "next/dynamic";
import { Feature250 } from "@/components/feature250";

// Only lazy load components with heavy charts/visualizations
const HomeDataAgent = dynamic(
  () =>
    import("@/components/home-data-agent").then((mod) => ({
      default: mod.HomeDataAgent,
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
      {/* <AppVideoPreview
        videoUrl={
          "https://framerusercontent.com/assets/s6inNxqh5m9k41CDacUiLwBUGVc.mp4"
        }
      /> */}
      <AppPreview />

      {/* Logos section */}
      <MainLogos />

      {/* Data Agent Section */}
      <HomeDataAgent />

      {/* Workflows Section */}
      <WorkflowsSection />

      {/* Key Features Section */}
      <FeatureGrid />

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
