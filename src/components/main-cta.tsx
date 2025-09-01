"use client";

import { Play } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { AttributionLink } from "@/components/attribution-link";
import { BOOKING_LINK } from "@/lib/constants";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const MainCTA = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-8 sm:py-32 px-4 sm:px-0 container overflow-hidden w-full bg-black-3 ">
      <div className="relative mx-auto flex max-w-7xl w-full flex-col justify-between gap-6 overflow-hidden rounded-xl border md:flex-row bg-black-3 dark:bg-white-3 xl:min-h-[400px]">
        <div className="max-w-xl self-center p-6 md:p-12">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Ready to Turn Your Data Into Action?
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Join thousands of teams who've replaced expensive data analysts with
            Datapad's AI. Get actionable insights and ready-to-deploy campaigns
            in seconds, not weeks.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button asChild>
              <AttributionLink buttonLocation="main-cta-primary">
                Start Free Trial
              </AttributionLink>
            </Button>
            <Button asChild variant="outline">
              <AttributionLink
                href={BOOKING_LINK}
                buttonLocation="main-cta-demo"
              >
                Book a Demo
                <Play className="ml-2" />
              </AttributionLink>
            </Button>
          </div>
        </div>
        {mounted && (
          <div className="relative ml-6 max-h-96 md:mt-8 md:ml-0">
            <Image
              src={
                theme === "dark" ? "/images/hero-1.png" : "/images/hero-2.png"
              }
              alt="Datapad AI Analytics Dashboard"
              width={600}
              height={400}
              className="z-10 aspect-video h-full w-full rounded-tl-xl border-t border-l object-cover pt-3.5 pl-3.5 backdrop-blur-sm"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export { MainCTA };
