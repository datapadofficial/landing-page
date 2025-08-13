"use client";

import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Users, Target } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface KpiGrowthMockProps {
  className?: string;
}

const kpiData = [
  {
    id: "roi",
    label: "ROI",
    icon: TrendingUp,
    color: "bg-chart-green",
    initialValue: 125,
    targetValue: 287,
    suffix: "%",
    delay: 0.5,
  },
  {
    id: "revenue",
    label: "Revenue",
    icon: DollarSign,
    color: "bg-chart-purple",
    initialValue: 45,
    targetValue: 89,
    suffix: "K",
    prefix: "$",
    delay: 1.0,
  },
  {
    id: "leads",
    label: "Leads",
    icon: Users,
    color: "bg-chart-orange",
    initialValue: 230,
    targetValue: 456,
    suffix: "",
    delay: 1.5,
  },
  {
    id: "conversion",
    label: "CVR",
    icon: Target,
    color: "bg-chart-red",
    initialValue: 2.1,
    targetValue: 4.8,
    suffix: "%",
    delay: 2.0,
  },
];

export function KpiGrowthMock({ className }: KpiGrowthMockProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [animationCycle, setAnimationCycle] = useState(0);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Reset animation cycle when coming into view
        setAnimationCycle(0);

        // Start continuous animation cycles
        const interval = setInterval(() => {
          setAnimationCycle((prev) => (prev + 1) % 3);
        }, 4000);

        return () => clearInterval(interval);
      } else {
        setIsVisible(false);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
      rootMargin: "50px",
    });

    const element = document.getElementById("kpi-growth-mock");
    if (element) {
      observer.observe(element);
    }

    return () => observer?.disconnect();
  }, []);

  return (
    <div
      id="kpi-growth-mock"
      className={cn(
        "w-full h-full flex items-center justify-center p-4",
        className
      )}
    >
      {/* Recipe Click Trigger */}
      <div className="relative w-full max-w-sm">
        {/* Recipe Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{ duration: 0.5, type: "spring", damping: 15 }}
          className="mb-6 flex justify-center"
        >
          <div className="border border-border/40 bg-background/50 rounded-xl px-4 py-2 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-chart-green rounded-full animate-pulse" />
              <span className="text-sm font-medium">
                Cross-Channel ROI Recipe
              </span>
            </div>
          </div>
        </motion.div>

        {/* KPI Grid */}
        <div className="grid grid-cols-2 gap-3">
          {kpiData.map((kpi, index) => {
            const Icon = kpi.icon;
            const currentValue = isVisible
              ? kpi.initialValue +
                (kpi.targetValue - kpi.initialValue) *
                  Math.min(1, animationCycle * 0.5)
              : kpi.initialValue;

            // Calculate bar height percentage (0-100)
            const maxValue = Math.max(...kpiData.map((k) => k.targetValue));
            const barHeight = (currentValue / maxValue) * 100;

            return (
              <motion.div
                key={kpi.id}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{
                  duration: 0.6,
                  delay: kpi.delay,
                  type: "spring",
                  damping: 15,
                }}
                className="relative"
              >
                {/* KPI Card */}
                <div className="border border-border/30 bg-background/30 rounded-xl p-3 backdrop-blur-sm">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-2">
                    <Icon size={14} className="text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">
                      {kpi.label}
                    </span>
                  </div>

                  {/* Value */}
                  <div className="text-lg font-bold mb-2">
                    <motion.span
                      animate={{
                        scale:
                          isVisible && animationCycle > 0 ? [1, 1.1, 1] : 1,
                      }}
                      transition={{
                        duration: 0.3,
                        delay: kpi.delay + 0.5,
                      }}
                    >
                      {kpi.prefix || ""}
                      {currentValue.toFixed(
                        kpi.suffix === "%" && currentValue < 10 ? 1 : 0
                      )}
                      {kpi.suffix}
                    </motion.span>
                  </div>

                  {/* Mini Bar Chart */}
                  <div className="relative h-1 bg-border/20 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={
                        isVisible
                          ? { width: `${Math.min(100, barHeight)}%` }
                          : { width: "0%" }
                      }
                      transition={{
                        duration: 1.2,
                        delay: kpi.delay + 0.3,
                        type: "spring",
                        damping: 20,
                      }}
                      className={cn("h-full rounded-full", kpi.color)}
                    />
                  </div>
                </div>

                {/* Growth Arrow */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={
                    isVisible && animationCycle > 0
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0 }
                  }
                  transition={{
                    duration: 0.3,
                    delay: kpi.delay + 0.7,
                    type: "spring",
                    damping: 15,
                  }}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-chart-green rounded-full flex items-center justify-center"
                >
                  <TrendingUp size={12} className="text-white" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Magic Sparkles */}
        {isVisible && animationCycle > 0 && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  x: [0, (Math.random() - 0.5) * 100],
                  y: [0, (Math.random() - 0.5) * 100],
                }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.1,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
                className="absolute top-1/2 left-1/2 w-1 h-1 bg-chart-yellow rounded-full"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
