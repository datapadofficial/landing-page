"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-shadow duration-150 ease-out disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-slate-blue-600 border border-black/5 dark:border-white/5 text-primary-foreground font-semibold shadow-[0px_2px_3px_0px_rgba(0,0,0,0.06),0px_1px_1px_0px_rgba(0,0,0,0.08),1px_4px_8px_0px_rgba(0,0,0,0.12),0px_2px_0.4px_0px_rgba(255,255,255,0.12)_inset,0px_-3px_2px_0px_rgba(0,0,0,0.04)_inset] hover:shadow-[0px_3px_4px_0px_rgba(0,0,0,0.08),0px_2px_2px_0px_rgba(0,0,0,0.1),2px_6px_12px_0px_rgba(0,0,0,0.15),0px_3px_0.6px_0px_rgba(255,255,255,0.15)_inset,0px_-4px_3px_0px_rgba(0,0,0,0.06)_inset] active:shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)_inset,0px_-1px_1px_0px_rgba(0,0,0,0.08)_inset]",
        destructive:
          "bg-chart-red border border-black/5 dark:border-white/5 text-white font-semibold shadow-[0px_2px_3px_0px_rgba(0,0,0,0.06),0px_1px_1px_0px_rgba(0,0,0,0.08),1px_4px_8px_0px_rgba(0,0,0,0.12),0px_2px_0.4px_0px_rgba(255,255,255,0.12)_inset,0px_-3px_2px_0px_rgba(0,0,0,0.04)_inset] hover:shadow-[0px_3px_4px_0px_rgba(0,0,0,0.08),0px_2px_2px_0px_rgba(0,0,0,0.1),2px_6px_12px_0px_rgba(0,0,0,0.15),0px_3px_0.6px_0px_rgba(255,255,255,0.15)_inset,0px_-4px_3px_0px_rgba(0,0,0,0.06)_inset] active:shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)_inset,0px_-1px_1px_0px_rgba(0,0,0,0.08)_inset]",
        outline:
          "border border-black/5 dark:border-white/5 bg-white dark:bg-dark-900 dark:text-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.04),0px_0.5px_0.5px_0px_rgba(0,0,0,0.06),0px_2px_4px_0px_rgba(0,0,0,0.08),0px_1px_0.2px_0px_rgba(255,255,255,0.08)_inset,0px_-1px_1px_0px_rgba(0,0,0,0.02)_inset] hover:bg-gray-50 hover:shadow-[0px_2px_3px_0px_rgba(0,0,0,0.06),0px_1px_1px_0px_rgba(0,0,0,0.08),0px_3px_6px_0px_rgba(0,0,0,0.1),0px_1.5px_0.3px_0px_rgba(255,255,255,0.1)_inset,0px_-2px_1.5px_0px_rgba(0,0,0,0.03)_inset] hover:dark:bg-white/[0.03] active:bg-gray-100 active:shadow-[0px_0.5px_1px_0px_rgba(0,0,0,0.08)_inset,0px_-0.5px_0.5px_0px_rgba(0,0,0,0.06)_inset] dark:active:bg-white/[0.05]",
        secondary:
          "border border-black/5 dark:border-white/5 bg-white dark:bg-dark-900 dark:text-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.04),0px_0.5px_0.5px_0px_rgba(0,0,0,0.06),0px_2px_4px_0px_rgba(0,0,0,0.08),0px_1px_0.2px_0px_rgba(255,255,255,0.08)_inset,0px_-1px_1px_0px_rgba(0,0,0,0.02)_inset] hover:bg-gray-50 hover:shadow-[0px_2px_3px_0px_rgba(0,0,0,0.06),0px_1px_1px_0px_rgba(0,0,0,0.08),0px_3px_6px_0px_rgba(0,0,0,0.1),0px_1.5px_0.3px_0px_rgba(255,255,255,0.1)_inset,0px_-2px_1.5px_0px_rgba(0,0,0,0.03)_inset] hover:dark:bg-white/[0.03] active:bg-gray-100 active:shadow-[0px_0.5px_1px_0px_rgba(0,0,0,0.08)_inset,0px_-0.5px_0.5px_0px_rgba(0,0,0,0.06)_inset] dark:active:bg-white/[0.05]",
        ghost:
          "hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-white/[0.05] dark:hover:text-white",
        link: "text-chart-blue underline-offset-4 hover:underline dark:text-chart-blue",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
