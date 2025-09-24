import { MainHero } from "@/components/main-hero";
// import { AppVideoPreview } from "@/components/creatives/app-video-preview";
import { AppPreview } from "@/components/creatives/app-preview";
import { MainLogos } from "@/components/main-logos";
import { WorkflowsSection } from "@/components/workflows-section";
import { FeatureGrid } from "@/components/features/feature-grid";
import { Faq } from "@/components/faq";
import { PricingSection } from "@/components/pricing-section";

import dynamic from "next/dynamic";
import { IntegrationsSection } from "@/components/integrations/integrations-section";
import { SocialMediaTestimonials } from "@/components/social-media-testimonials";
import UseCaseGrid from "@/components/use-case-grid";

// Only lazy load components with heavy charts/visualizations
const AIDataAgentSection = dynamic(
  () =>
    import("@/components/ai-data-agent").then((mod) => ({
      default: mod.AIDataAgentSection,
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
    <main className="flex flex-col max-w-7xl items-center mx-auto">
      {/* Hero Section */}
      <MainHero />

      {/* Video Preview Section */}
      {/* <AppVideoPreview
        videoUrl={
          "https://framerusercontent.com/assets/s6inNxqh5m9k41CDacUiLwBUGVc.mp4"
        }
      /> */}
      <AppPreview videoURL="/videos/features/homepage_video.mp4" />

      {/* Logos section */}
      <MainLogos />

      {/* Data Agent Section */}
      <AIDataAgentSection />

      <UseCaseGrid />
      {/* Workflows Section */}
      <WorkflowsSection />

      {/* Key Features Section */}
      <FeatureGrid />

      {/* Case Studies Section */}
      {/* <DatapadCasestudies /> */}

      {/* Integrations Section */}
      <IntegrationsSection />

      {/* Testimonials Section */}
      <SocialMediaTestimonials />

      {/* Pricing Section */}
      <PricingSection />

      {/* FAQ Section */}
      <Faq />
    </main>
  );
}
