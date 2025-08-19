"use client";

import { Feature } from "@/types/feature";
import { ArrowRight } from "lucide-react";

interface FeatureUseCasesProps {
  feature: Feature;
}

const FeatureUseCases = ({ feature }: FeatureUseCasesProps) => {
  return (
    <section className="py-16 sm:py-24 lg:py-32">
      <div className="container">
        <div className="mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-4">
              Perfect For
            </h2>
            <p className="text-muted-foreground text-lg">
              Common use cases where {feature.title.toLowerCase()} delivers
              exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {feature.useCases.map((useCase, index) => (
              <div
                key={index}
                className="border bg-black-3 dark:bg-white-3 rounded-2xl p-6 flex items-center gap-4 group hover:shadow-lg transition-all duration-300"
              >
                <div
                  className="flex size-10 items-center justify-center rounded-xl border bg-background dark:bg-white-10 flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    color: `var(--${feature.color})`,
                    borderColor: `var(--${feature.color})20`,
                    backgroundColor: `var(--${feature.color})10`,
                  }}
                >
                  <ArrowRight className="size-5" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-lg leading-relaxed group-hover:text-foreground/90 transition-colors">
                    {useCase}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { FeatureUseCases };
