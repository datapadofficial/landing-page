import { Integration } from "@/types/integration";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BarChart3 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface IntegrationHeroProps {
  integration: Integration;
}

export function IntegrationHero({ integration }: IntegrationHeroProps) {
  return (
    <section className="pt-8 sm:pt-16">
      <div className="container relative mx-auto px-4 text-center flex w-full flex-col items-center justify-center overflow-hidden pb-8 sm:pb-4">
        <div className="bg-background pointer-events-none absolute inset-0 z-20 h-full w-full [mask-image:radial-gradient(transparent,white)]" />

        <div className="relative z-30 mx-auto flex flex-col gap-4 sm:gap-6 max-w-7xl">
          {/* Integration Icon */}
          <div className="flex justify-center mb-4">
            <div className="flex size-20 items-center justify-center rounded-2xl border bg-black-3 dark:bg-white-10 drop-shadow-lg">
              <Image
                src={integration.icon}
                alt={integration.name}
                width={40}
                height={40}
                className="rounded"
              />
            </div>
          </div>

          {/* Title */}
          <h1 className="w-full relative text-center mx-auto text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight">
            {integration.headline}
          </h1>

          {/* Description */}
          <p className="text-muted-foreground text-balance text-base sm:text-lg lg:text-xl px-4 sm:px-0 max-w-3xl mx-auto">
            {integration.description}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="relative z-30 flex flex-col sm:flex-row gap-4 items-center justify-center mt-8 w-full sm:w-fit">
          <Link href="https://app.datapad.io" className="w-full">
            <Button size="lg" className="w-full sm:w-auto">
              Connect {integration.name}
            </Button>
          </Link>

          <Link href="https://app.datapad.io" className="w-full">
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
              {integration.secondaryCta ?? "Book a 15m Demo"}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
