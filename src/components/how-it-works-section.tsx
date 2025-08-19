import Image from "next/image";
import React from "react";
import { DynamicIcon, IconName } from "lucide-react/dynamic";
import { cn } from "@/lib/utils";

interface HowItWorksStep {
  title: string;
  description: string;
  image?: string;
  icon?: string;
  color?: string;
}

const HowItWorksSection = ({
  steps,
  title = <h3>How It Works</h3>,
  description = "Get started in three simple steps and see immediate results.",
}: {
  title: React.ReactNode;
  description: string;
  steps: HowItWorksStep[];
}) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto flex max-w-3xl flex-col justify-center gap-7 md:text-center">
          {title}
          <p className="text-lg text-muted-foreground">{description}</p>
        </div>
        <div className="mx-auto mt-14 flex max-w-5xl flex-col gap-4 lg:px-16">
          {steps.map((step, index) => {
            const isFirst = index === 0;
            const isLast = index === steps.length - 1;
            const stepNumber = index + 1;

            return (
              <div
                key={index}
                className="flex flex-col items-center justify-between min-[960px]:flex-row min-[960px]:gap-10"
              >
                <div className="flex gap-4 min-[960px]:max-w-md">
                  <div
                    className={`flex flex-col items-center justify-between gap-1 ${
                      !isFirst && !isLast ? "relative" : ""
                    }`}
                  >
                    {!isFirst && (
                      <span
                        className={`h-20 w-[3px] shrink-0 ${
                          isLast
                            ? "bg-linear-to-t from-transparent to-primary"
                            : "bg-primary"
                        } opacity-70 ${
                          !isLast ? "absolute -top-8 mx-auto h-8" : ""
                        }`}
                      />
                    )}
                    {isFirst && <span className="h-20 shrink-0"></span>}

                    {!isFirst && !isLast && (
                      <>
                        <span className="absolute -bottom-8 mx-auto h-8 w-[3px] shrink-0 bg-primary opacity-70"></span>
                        <span className="h-20 w-[3px] shrink-0 bg-primary opacity-70"></span>
                      </>
                    )}

                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full border bg-muted/50 font-mono text-lg">
                      {stepNumber}
                    </span>

                    {!isLast && (
                      <span
                        className={`h-20 w-[3px] shrink-0 ${
                          isFirst
                            ? "bg-linear-to-b from-transparent to-primary"
                            : "bg-primary"
                        } opacity-70`}
                      />
                    )}
                    {isLast && <span className="h-20 shrink-0"></span>}
                  </div>
                  <div className="flex flex-col justify-center gap-5 px-0 min-[960px]:gap-6 min-[960px]:px-4 min-[960px]:py-4">
                    <h3 className="text-xl min-[960px]:text-2xl">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground min-[960px]:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
                {step.image ? (
                  <Image
                    src={step.image}
                    alt={step.title}
                    className="z-10 aspect-video w-full rounded-xl border object-cover min-[960px]:max-h-56 min-[960px]:w-auto"
                  />
                ) : step.icon ? (
                  <div
                    className={cn(
                      "z-10 flex aspect-video w-full items-center justify-center rounded-xl border border-input bg-muted/10 min-[960px]:max-h-56 min-[960px]:w-auto min-[960px]:min-w-72",
                      `bg-black-5 dark:bg-white-5`
                    )}
                  >
                    <DynamicIcon
                      name={step.icon as IconName}
                      className={cn("h-12 w-12", `text-${step.color}`)}
                      strokeWidth={1.5}
                    />
                  </div>
                ) : (
                  <Image
                    src={`https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-${stepNumber}.svg`}
                    alt={step.title}
                    className="z-10 aspect-video w-full rounded-xl border object-cover min-[960px]:max-h-56 min-[960px]:w-auto"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { HowItWorksSection };
