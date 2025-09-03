import { ReactNode } from "react";
import { FeaturesOverviewDoc } from "@/types/features-overview";

interface FeaturesOverviewContentProps {
  doc: FeaturesOverviewDoc;
  children: ReactNode; // This will be the rendered MDX content
}

export function FeaturesOverviewContent({ doc, children }: FeaturesOverviewContentProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-16 sm:pt-24 pb-8">
        <div className="container relative mx-auto px-4 text-center flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="relative z-30 mx-auto flex flex-col gap-4 sm:gap-6 max-w-4xl">
            <h1 className="w-full relative text-center mx-auto text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
              {doc.title}
            </h1>

            <p className="text-muted-foreground text-balance text-base sm:text-lg lg:text-xl px-4 sm:px-0 max-w-3xl mx-auto">
              {doc.description}
            </p>
          </div>
        </div>
      </section>

      {/* MDX Content */}
      <div className="w-full">
        {children}
      </div>
    </>
  );
}
