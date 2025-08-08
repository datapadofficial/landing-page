import { Play } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

const Cta18 = () => {
  return (
    <section className="py-32">
      <div className="container overflow-hidden">
        <div className="relative mx-auto flex max-w-7xl flex-col justify-between gap-6 overflow-hidden rounded-xl border bg-muted/50 md:flex-row">
          <div className="max-w-xl self-center p-6 md:p-12">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Ready to Turn Your Data Into Action?
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Join thousands of teams who've replaced expensive data analysts
              with Datapad's AI. Get actionable insights and ready-to-deploy
              campaigns in seconds, not weeks.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button>Start Free Trial</Button>
              <Button variant="outline">
                Book a Demo
                <Play className="ml-2" />
              </Button>
            </div>
          </div>
          <div className="relative ml-6 max-h-96 md:mt-8 md:ml-0">
            <Image
              src="/images/block-3.svg"
              alt="Decorative element"
              width={192}
              height={192}
              className="absolute -bottom-12 left-4 h-48 -translate-x-1/2 -rotate-[120deg]"
            />
            <Image
              src="/images/hero-2.png"
              alt="Datapad AI Analytics Dashboard"
              width={600}
              height={400}
              className="z-10 aspect-video h-full w-full rounded-tl-xl border-t border-l object-cover pt-3.5 pl-3.5 backdrop-blur-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta18 };
