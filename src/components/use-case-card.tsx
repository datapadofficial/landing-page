import React from "react";
import { cn } from "@/lib/utils";

const DottedDiv = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("relative", className)}>
    <div className="bg-muted absolute -left-[12.5px] top-4 h-[1.5px] w-[110%] md:-left-20" />
    <div className="bg-muted absolute -left-[12.5px] bottom-4 h-[1.5px] w-[110%] md:-left-20" />
    {children}
  </div>
);

interface UseCaseCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
  step?: string;
}

export const UseCaseCard: React.FC<UseCaseCardProps> = ({
  title,
  description,
  children,
  className,
  step,
}) => {
  return (
    <div
      className={cn(
        "bg-black-3 overflow-hidden dark:bg-white-3 border group relative flex h-full min-h-80 sm:min-h-[500px] w-full flex-col justify-between text-ellipsis rounded-2xl sm:rounded-3xl p-4 sm:p-6",
        className
      )}
    >
      <div className="flex flex-col space-y-4">
        {step && (
          <div className="flex items-center justify-between">
            <h4 className="text-primary">{step}</h4>
          </div>
        )}
        <div className="flex w-full flex-col space-y-2">
          <h5 className="transition-all ease-in-out">{title}</h5>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      <div className="mt-6 flex w-full flex-1">{children}</div>
    </div>
  );
};

// Wrapped version with dotted lines
export const UseCaseCardWithDots: React.FC<
  UseCaseCardProps & { wrapperClassName?: string }
> = ({ title, description, children, className, step, wrapperClassName }) => {
  return (
    <DottedDiv
      className={cn("mt-8 w-full px-2 py-8 sm:py-10", wrapperClassName)}
    >
      <UseCaseCard
        title={title}
        description={description}
        step={step}
        className={className}
      >
        {children}
      </UseCaseCard>
    </DottedDiv>
  );
};

export default UseCaseCard;
