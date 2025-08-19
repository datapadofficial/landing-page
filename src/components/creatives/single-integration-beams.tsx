"use client";

import React, { forwardRef, useRef } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { Integration } from "@/types/integration";
import { AnimatedLogo } from "@/components/navigation/aimated-logo/animated-logo";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white dark:bg-dark-900 p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

interface SingleIntegrationBeamsProps {
  integration: Integration;
  className?: string;
}

export function SingleIntegrationBeams({
  integration,
  className,
}: SingleIntegrationBeamsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "relative flex w-full h-full max-w-[500px] items-center justify-center overflow-hidden p-10",
        className
      )}
      ref={containerRef}
    >
      <div className="flex size-full flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row justify-between">
          <Circle ref={div1Ref} className="w-16 h-16">
            <div className="flex items-center justify-center w-6 h-6">
              <Image
                src={integration.icon}
                alt={integration.name}
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
          </Circle>
          <Circle ref={div2Ref} className="w-16 h-16">
            <AnimatedLogo isActive={false} size="medium" className="w-6 h-6" />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div2Ref}
        startYOffset={20}
        endYOffset={20}
        curvature={-60}
        pathWidth={3}
      />

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div2Ref}
        startYOffset={-20}
        endYOffset={-20}
        curvature={60}
        pathWidth={3}
        reverse
      />
    </div>
  );
}
