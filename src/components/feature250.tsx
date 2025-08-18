"use client";

import { Zap } from "lucide-react";
import Image from "next/image";
import React, { useRef } from "react";

import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { AnimatedLogo } from "@/components/navigation/aimated-logo/animated-logo";

const Feature250 = () => {
  return (
    <section className="py-32 w-full flex items-center justify-center max-w-6xl mx-auto">
      <div className="container">
        <h1 className="mx-auto -mb-12 max-w-3xl text-center text-4xl font-medium tracking-tighter md:text-6xl lg:mb-5 lg:text-7xl">
          Connect Everything
        </h1>
        <p className="text-muted-foreground mx-auto mb-4 max-w-2xl text-center md:text-xl">
          Datapad seamlessly integrates with 200+ tools and platforms you
          already use. No complex setup, no data silos—just instant insights
          from all your business data in one unified dashboard.
        </p>
        <AnimatedBeamIllustration />
      </div>
    </section>
  );
};

export { Feature250 };

const REVERSE = false;

function AnimatedBeamIllustration() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);
  return (
    <div
      className="relative flex w-full items-center justify-center overflow-hidden p-10"
      ref={containerRef}
    >
      <div className="flex w-full flex-col items-center justify-between gap-10 lg:flex-row">
        <div className="h-100 relative z-10 flex w-full items-center justify-center rounded-3xl lg:w-0">
          <div
            ref={div1Ref}
            className="size-18 bg-background absolute left-0 top-40 z-10 flex -translate-y-1/2 items-center justify-center rounded-full p-1 lg:left-0 lg:top-1/2"
          >
            <div className="border-border bg-background flex size-10 items-center justify-center rounded-lg border p-[5px]">
              <Image
                alt="Google Analytics"
                src="/images/integrations/google-analytics.png"
                width={20}
                height={20}
                className="h-6 w-6 object-contain"
              />
            </div>
          </div>
          <div
            ref={div2Ref}
            className="size-18 bg-background absolute right-0 top-40 z-10 flex -translate-y-1/2 items-center justify-center rounded-full p-1 lg:left-20 lg:top-20"
          >
            <div className="border-border bg-background flex size-10 items-center justify-center rounded-lg border p-[5px]">
              <Image
                alt="Stripe"
                src="/images/integrations/stripe.png"
                width={20}
                height={20}
                className="h-6 w-6 object-contain"
              />
            </div>
          </div>
          <div
            ref={div3Ref}
            className="size-18 bg-background absolute bottom-0 left-6 z-10 flex -translate-y-1/2 items-center justify-center rounded-full p-1 lg:bottom-2 lg:left-20"
          >
            <div className="border-border bg-background flex size-10 items-center justify-center rounded-lg border p-[5px]">
              <Image
                alt="HubSpot"
                src="/images/integrations/hubspot.png"
                width={20}
                height={20}
                className="h-6 w-6 object-contain"
              />
            </div>
          </div>
          <div
            ref={div4Ref}
            className="size-18 bg-background lg:left-50 absolute bottom-0 right-6 z-10 flex -translate-y-1/2 items-center justify-center rounded-full p-1 lg:top-0"
          >
            <div className="border-border bg-background flex size-10 items-center justify-center rounded-lg border p-[5px]">
              <Image
                alt="Shopify"
                src="/images/integrations/shopify.png"
                width={20}
                height={20}
                className="h-6 w-6 object-contain"
              />
            </div>
          </div>
          <div
            ref={div5Ref}
            className="size-18 bg-background lg:top-100 lg:left-50 absolute top-20 z-10 flex -translate-y-1/2 items-center justify-center rounded-full p-1"
          >
            <div className="border-border bg-background flex size-10 items-center justify-center rounded-lg border p-[5px]">
              <Image
                alt="Google Ads"
                src="/images/integrations/google-ads.png"
                width={20}
                height={20}
                className="h-6 w-6 object-contain"
              />
            </div>
          </div>
        </div>
        <div
          ref={div6Ref}
          className="bg-muted lg:size-42 z-10 flex size-32 items-center justify-center rounded-3xl border"
        >
          <AnimatedLogo isActive={false} className="lg:scale-[150%]" />
        </div>
        <div
          ref={div7Ref}
          className="size-15 bg-muted z-10 mt-40 flex items-center justify-center rounded-xl border lg:mt-0"
        >
          <Zap fill="currentColor" />
        </div>
      </div>

      <div className="block lg:hidden">
        <AnimatedBeam
          duration={3}
          endYOffset={-60}
          endXOffset={-10}
          curvature={10}
          reverse={REVERSE}
          containerRef={containerRef}
          fromRef={div1Ref}
          toRef={div6Ref}
        />
        <AnimatedBeam
          duration={3}
          endYOffset={-60}
          endXOffset={10}
          curvature={10}
          containerRef={containerRef}
          fromRef={div2Ref}
          toRef={div6Ref}
          reverse={REVERSE}
        />
        <AnimatedBeam
          duration={3}
          containerRef={containerRef}
          fromRef={div3Ref}
          toRef={div6Ref}
          reverse={REVERSE}
        />
        <AnimatedBeam
          duration={3}
          containerRef={containerRef}
          fromRef={div4Ref}
          toRef={div6Ref}
          reverse={REVERSE}
        />

        <AnimatedBeam
          duration={3}
          containerRef={containerRef}
          fromRef={div5Ref}
          toRef={div7Ref}
          reverse={REVERSE}
        />
        <AnimatedBeam
          duration={3}
          containerRef={containerRef}
          fromRef={div6Ref}
          toRef={div7Ref}
          reverse={REVERSE}
        />
      </div>

      <div className="hidden lg:block">
        <AnimatedBeam
          duration={3}
          containerRef={containerRef}
          fromRef={div1Ref}
          toRef={div6Ref}
          reverse={REVERSE}
        />
        <AnimatedBeam
          endYOffset={-30}
          endXOffset={60}
          duration={3}
          curvature={-140}
          containerRef={containerRef}
          fromRef={div2Ref}
          toRef={div6Ref}
          reverse={REVERSE}
        />
        <AnimatedBeam
          duration={3}
          endYOffset={30}
          curvature={140}
          containerRef={containerRef}
          fromRef={div3Ref}
          toRef={div6Ref}
          reverse={REVERSE}
        />
        <AnimatedBeam
          duration={3}
          endYOffset={-30}
          endXOffset={-60}
          curvature={-180}
          containerRef={containerRef}
          fromRef={div4Ref}
          toRef={div6Ref}
          reverse={REVERSE}
        />

        <AnimatedBeam
          duration={3}
          endXOffset={-60}
          endYOffset={30}
          curvature={180}
          containerRef={containerRef}
          fromRef={div5Ref}
          toRef={div6Ref}
          reverse={REVERSE}
        />
        <AnimatedBeam
          duration={3}
          containerRef={containerRef}
          fromRef={div6Ref}
          toRef={div7Ref}
          reverse={REVERSE}
        />
      </div>
    </div>
  );
}
