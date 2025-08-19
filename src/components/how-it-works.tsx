import Image from "next/image";
import { icons } from "lucide-react";

type HowItWorksItem = {
  title: string;
  description: string;
  icon?: keyof typeof icons;
  color?: string;
  image?: string;
};

const HowItWorksSection = ({
  data,
  title = <h1>Launch with Assurance</h1>,
  description = "Simplify your workflow with our tools that provide clear insights, minimizing the complexity of managing intricate deployment data.",
}: {
  title: React.ReactNode;
  description: string;
  data: HowItWorksItem[];
}) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto flex max-w-3xl flex-col justify-center gap-7 md:text-center">
          {title}
          <p className="text-sm text-muted-foreground md:text-base">
            {description}
          </p>
        </div>
        <div className="mx-auto mt-14 flex max-w-5xl flex-col gap-4 lg:px-16">
          {data.map((item, index) => {
            const isFirst = index === 0;
            const isLast = index === data.length - 1;
            const IconComponent = item.icon ? icons[item.icon] : null;

            return (
              <div
                key={index}
                className="flex flex-col items-center justify-between min-[960px]:flex-row min-[960px]:gap-10"
              >
                <div className="flex gap-4 min-[960px]:max-w-md">
                  <div className="flex flex-col items-center justify-between gap-1">
                    {!isFirst && (
                      <span className="h-20 w-[3px] shrink-0 bg-linear-to-b from-transparent to-primary opacity-70"></span>
                    )}
                    {isFirst && <span className="h-20 shrink-0"></span>}

                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full border bg-muted/50 font-mono text-lg">
                      {index + 1}
                    </span>

                    {!isLast && (
                      <span className="h-20 w-[3px] shrink-0 bg-primary opacity-70"></span>
                    )}
                    {index > 0 && index < data.length - 1 && (
                      <div className="relative">
                        <span className="absolute -top-8 mx-auto h-8 w-[3px] shrink-0 bg-primary opacity-70"></span>
                        <span className="absolute -bottom-8 mx-auto h-8 w-[3px] shrink-0 bg-primary opacity-70"></span>
                      </div>
                    )}
                    {isLast && (
                      <span className="h-20 w-[3px] shrink-0 bg-linear-to-t from-transparent to-primary opacity-70"></span>
                    )}
                  </div>
                  <div className="flex flex-col justify-center gap-5 px-0 min-[960px]:gap-6 min-[960px]:px-4 min-[960px]:py-4">
                    <h3 className="text-xl min-[960px]:text-2xl">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground min-[960px]:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Right side content - Image or Icon */}
                <div className="z-10 aspect-video w-full rounded-xl border min-[960px]:max-h-56 min-[960px]:w-auto flex items-center justify-center">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="aspect-video w-full rounded-xl border object-cover min-[960px]:max-h-56 min-[960px]:w-auto"
                      width={400}
                      height={225}
                    />
                  ) : IconComponent ? (
                    <IconComponent
                      size={120}
                      style={{ color: item.color || "#6366f1" }}
                      className="text-primary"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full w-full bg-muted rounded-xl">
                      <span className="text-muted-foreground">
                        No visual provided
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { HowItWorksSection };
