import React, { CSSProperties, ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

export interface ShimmerButtonProps extends ComponentPropsWithoutRef<"button"> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
}

export const ShimmerButton = React.forwardRef<
  HTMLButtonElement,
  ShimmerButtonProps
>(
  (
    {
      shimmerColor = "#ffffff",
      shimmerSize = "0.05em",
      shimmerDuration = "3s",
      borderRadius = "0.5rem", // 8px to match button.tsx
      background = "hsl(var(--primary))",
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        style={
          {
            "--spread": "90deg",
            "--shimmer-color": shimmerColor,
            "--radius": borderRadius,
            "--speed": shimmerDuration,
            "--cut": shimmerSize,
            "--bg": background,
          } as CSSProperties
        }
        className={cn(
          // Base button styles matching primary variant from button.tsx
          "group relative z-0 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-shadow duration-150 ease-out disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          // Primary button styling with shimmer background
          "bg-primary border border-black/5 dark:border-white/5 text-primary-foreground overflow-hidden cursor-pointer",
          // Primary button shadows with hover and active states
          "shadow-[0px_2px_3px_0px_rgba(0,0,0,0.06),0px_1px_1px_0px_rgba(0,0,0,0.08),1px_4px_8px_0px_rgba(0,0,0,0.12),0px_2px_0.4px_0px_rgba(255,255,255,0.12)_inset,0px_-3px_2px_0px_rgba(0,0,0,0.04)_inset]",
          "hover:shadow-[0px_3px_4px_0px_rgba(0,0,0,0.08),0px_2px_2px_0px_rgba(0,0,0,0.1),2px_6px_12px_0px_rgba(0,0,0,0.15),0px_3px_0.6px_0px_rgba(255,255,255,0.15)_inset,0px_-4px_3px_0px_rgba(0,0,0,0.06)_inset]",
          "active:shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)_inset,0px_-1px_1px_0px_rgba(0,0,0,0.08)_inset]",
          // Size large to match hero button
          "h-10 px-6",
          className
        )}
        ref={ref}
        {...props}
      >
        {/* spark container */}
        <div
          className={cn(
            "-z-30 blur-[2px]",
            "absolute inset-0 overflow-visible [container-type:size]"
          )}
        >
          {/* spark */}
          <div className="absolute inset-0 h-[100cqh] animate-shimmer-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
            {/* spark before */}
            <div className="absolute -inset-full w-auto rotate-0 animate-spin-around [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]" />
          </div>
        </div>
        {children}

        {/* masking backdrop */}
        <div
          className={cn(
            "absolute -z-20 inset-[1px] rounded-lg bg-primary pointer-events-none",
            // Apply hover effects to the backdrop as well
            "transition-all duration-150 ease-out",
            "group-hover:shadow-[inset_0_0_20px_rgba(255,255,255,0.1)]"
          )}
        />
      </button>
    );
  }
);

ShimmerButton.displayName = "ShimmerButton";
