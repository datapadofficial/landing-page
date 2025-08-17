"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface KpiBarAnimationMockProps {
  className?: string;
}

// Enhanced BarChart component with colored borders and better styling
const BarChart = ({
  value,
  label,
  borderColor,
  fillColor,
  animationCycle,
  delay = 0,
}: {
  value: number;
  label: string;
  borderColor: string;
  fillColor: string;
  animationCycle: number;
  delay?: number;
}) => {
  return (
    <div className="group relative h-full w-full">
      {/* Static container */}
      <div className="relative h-full w-full overflow-hidden rounded-xl border-2 border-border/20 bg-white-5 shadow">
        {/* Animated colored bar - entire thing animates up */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: `${value}%` }}
          transition={{ duration: 1.2, type: "spring", damping: 25, delay }}
          className={cn(
            "absolute bottom-0 w-full rounded-lg border-2 shadow",
            borderColor,
            fillColor
          )}
        >
          {/* Value display - inside the animated bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: value > 15 && animationCycle > 0 ? 1 : 0,
              y: value > 15 && animationCycle > 0 ? 0 : 10,
            }}
            transition={{ duration: 0.4, delay: delay + 0.8 }}
            className="absolute top-2 left-1/2 -translate-x-1/2"
          >
            <div className="rounded px-1.5 py-0.5">
              <span className="text-xs font-medium text-foreground">
                {value}%
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Label */}
      <p className="mt-2 text-center text-xs text-muted-foreground">{label}</p>
    </div>
  );
};

export function KpiBarAnimationMock({ className }: KpiBarAnimationMockProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [animationCycle, setAnimationCycle] = useState(0);

  const kpiData = [
    {
      label: "ROI",
      delay: 0.5,
      borderColor: "border-chart-green",
      fillColor: "bg-chart-green/30",
    },
    {
      label: "Revenue",
      delay: 1.0,
      borderColor: "border-chart-purple",
      fillColor: "bg-chart-purple/30",
    },
    {
      label: "Leads",
      delay: 1.5,
      borderColor: "border-chart-orange",
      fillColor: "bg-chart-orange/30",
    },
    {
      label: "CVR",
      delay: 2.0,
      borderColor: "border-chart-red",
      fillColor: "bg-chart-red/30",
    },
  ];

  // Animate values based on cycle
  const [animatedValues, setAnimatedValues] = useState(kpiData.map(() => 0));

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);
        setAnimationCycle(0);

        // Start continuous animation loop
        let animationTimeout: NodeJS.Timeout;

        const startAnimationLoop = () => {
          setAnimationCycle(1);
          animationTimeout = setTimeout(() => {
            setAnimationCycle(0);
            setTimeout(startAnimationLoop, 1000); // Wait 1s before restarting
          }, 4000); // Show animation for 4s
        };

        // Start first animation after 500ms
        const initialTimeout = setTimeout(startAnimationLoop, 500);

        return () => {
          clearTimeout(initialTimeout);
          clearTimeout(animationTimeout);
        };
      } else {
        setIsVisible(false);
        setAnimationCycle(0);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
      rootMargin: "50px",
    });

    const element = document.getElementById("kpi-bar-animation-mock");
    if (element) {
      observer.observe(element);
    }

    return () => observer?.disconnect();
  }, []);

  useEffect(() => {
    if (animationCycle > 0) {
      // Animate each bar in sequence with alternating heights
      const targetValues = [90, 65, 85, 70]; // Alternating high-low-high-low pattern

      targetValues.forEach((targetValue, index) => {
        setTimeout(() => {
          setAnimatedValues((prev) => {
            const newValues = [...prev];
            newValues[index] = targetValue;
            return newValues;
          });
        }, index * 400); // Stagger the animations
      });
    } else {
      setAnimatedValues([0, 0, 0, 0]);
    }
  }, [animationCycle]);

  return (
    <div
      id="kpi-bar-animation-mock"
      className={cn(
        "w-full h-full flex items-center justify-center p-4",
        className
      )}
    >
      <div className="relative w-full max-w-sm">
        {/* KPI Bars Grid - Larger bars */}
        <div className="relative flex h-48 items-end justify-center gap-4">
          {kpiData.map((kpi, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
                type: "spring",
                damping: 20,
              }}
              className="h-full w-16"
            >
              <BarChart
                value={animatedValues[index]}
                label={kpi.label}
                borderColor={kpi.borderColor}
                fillColor={kpi.fillColor}
                animationCycle={animationCycle}
                delay={kpi.delay}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
