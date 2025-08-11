"use client";

import { Feature } from "@/lib/features";
import { Check } from "lucide-react";

interface FeatureBenefitsProps {
  feature: Feature;
}

const FeatureBenefits = ({ feature }: FeatureBenefitsProps) => {
  return (
    <section className="py-16 sm:py-24 lg:py-32">
      <div className="container">
        <div className="mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-4">
              Key Benefits
            </h2>
            <p className="text-muted-foreground text-lg">
              Why {feature.title.toLowerCase()} is essential for your data
              workflow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {feature.benefits.map((benefit, index) => (
              <div
                key={index}
                className="border bg-black-3 dark:bg-white-3 rounded-2xl p-6 flex items-start gap-4"
              >
                <div
                  className="flex size-8 items-center justify-center rounded-lg border bg-background dark:bg-white-10 flex-shrink-0 mt-1"
                  style={{
                    color: `var(--${feature.color})`,
                    borderColor: `var(--${feature.color})20`,
                    backgroundColor: `var(--${feature.color})10`,
                  }}
                >
                  <Check className="size-4" />
                </div>
                <div>
                  <p className="font-medium leading-relaxed">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { FeatureBenefits };
