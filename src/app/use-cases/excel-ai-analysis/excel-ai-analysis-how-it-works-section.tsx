import React from "react";

type Step = {
  title: string;
  description: string;
};

const ExcelAIAnalysisHowItWorksSection = ({
  title = <h3>How It Works</h3>,
  description,
  steps,
}: {
  title?: React.ReactNode;
  description: string;
  steps: Step[];
}) => {
  return (
    <section className="py-8 sm:py-32 px-4">
      <div className="container">
        <div className="mx-auto flex max-w-3xl flex-col justify-center gap-7 text-center">
          {title}
          <p className="text-lg text-muted-foreground">{description}</p>
        </div>
        <div className="mx-auto mt-14 flex w-full max-w-4xl flex-col gap-8">
          {steps.map((step, index) => {
            const isFirst = index === 0;
            const isLast = index === steps.length - 1;
            const stepNumber = index + 1;

            return (
              <div
                key={index}
                className="flex w-full flex-col items-center justify-center gap-6"
              >
                <div className="mx-auto flex w-full max-w-3xl gap-4">
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
                        className={`h-10 sm:h-20 w-[3px] shrink-0 ${
                          isFirst
                            ? "bg-linear-to-b from-transparent to-primary"
                            : "bg-primary"
                        } opacity-70`}
                      />
                    )}
                    {isLast && <span className="h-10 sm:h-20 shrink-0"></span>}
                  </div>
                  <div className="flex flex-1 flex-col justify-center gap-5 text-center min-[960px]:text-left">
                    <h3 className="text-xl min-[960px]:text-2xl">{step.title}</h3>
                    <p className="text-sm text-muted-foreground min-[960px]:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { ExcelAIAnalysisHowItWorksSection };
