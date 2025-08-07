"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { TrendingUp, BarChart3, Users, DollarSign } from "lucide-react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, LineChart, Line } from "recharts";

interface DashboardMockProps {
  className?: string;
}

export function DashboardMock({ className }: DashboardMockProps) {
  const [animationStep, setAnimationStep] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Animation sequence: 0=start, 1=metrics, 2=charts, 3=complete
  const totalSteps = 3;

  // Chart data
  const clickData = [
    { day: "28", clicks: 387 },
    { day: "29", clicks: 593 },
    { day: "30", clicks: 136 },
    { day: "31", clicks: 452 },
    { day: "01", clicks: 689 },
    { day: "02", clicks: 234 },
    { day: "03", clicks: 567 },
  ];

  const impressionData = [
    { day: "28", impressions: 71900 },
    { day: "29", impressions: 48800 },
    { day: "30", impressions: 24600 },
    { day: "31", impressions: 65300 },
    { day: "01", impressions: 89200 },
    { day: "02", impressions: 34500 },
    { day: "03", impressions: 76800 },
  ];

  const chartConfig = {
    clicks: {
      label: "Clicks",
      color: "#FF6B8B", // chart-red
    },
    impressions: {
      label: "Impressions",
      color: "#4ECDC4", // chart-green
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isRunning) {
        setIsRunning(true);
        setAnimationStep(0);
      } else if (animationStep < totalSteps - 1) {
        setAnimationStep((prev) => prev + 1);
      } else {
        // Reset after showing complete dashboard
        setTimeout(() => {
          setIsRunning(false);
          setAnimationStep(0);
        }, 3000);
      }
    }, 1200);

    return () => clearInterval(interval);
  }, [animationStep, isRunning]);

  return (
    <div
      className={cn(
        "w-full h-full bg-white dark:bg-gray-950 p-4 flex flex-col relative overflow-hidden",
        className
      )}
    >
      {/* Key Metrics Grid */}
      <div
        className={cn(
          "grid grid-cols-4 gap-2 mb-4 transition-all duration-700 ease-in-out",
          animationStep >= 1 && isRunning
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        )}
      >
        {[
          {
            icon: TrendingUp,
            label: "Total Impressions",
            value: "688,405",
            change: "+12.3%",
          },
          {
            icon: Users,
            label: "Total Clicks",
            value: "3,390",
            change: "+8.7%",
          },
          {
            icon: BarChart3,
            label: "Avg Position",
            value: "~29",
            change: "-15.2%",
          },
          {
            icon: DollarSign,
            label: "Click-Through Rate",
            value: "4.9%",
            change: "+2.1%",
          },
        ].map((metric, index) => (
          <div
            key={index}
            className={cn(
              "border border-gray-200 dark:border-gray-700 rounded-xl p-2 bg-white dark:bg-gray-950 shadow-sm transition-all duration-500 ease-out",
              animationStep >= 1 && isRunning
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95"
            )}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center justify-between mb-1">
              <metric.icon size={12} className="text-primary" />
              <span className="text-xs font-medium text-primary bg-primary/10 px-1 py-0.5 rounded text-[10px]">
                {metric.change}
              </span>
            </div>
            <div className="text-sm font-bold text-gray-900 dark:text-white mb-0.5">
              {metric.value}
            </div>
            <div className="text-[10px] text-gray-600 dark:text-gray-300">
              {metric.label}
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div
        className={cn(
          "flex-1 grid grid-cols-2 gap-3 transition-all duration-700 ease-in-out",
          animationStep >= 2 && isRunning
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        )}
      >
        {/* Daily Click Performance Chart */}
        <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-3 bg-white dark:bg-gray-950 shadow-sm flex flex-col">
          <div className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-2">
            Daily Click Performance
          </div>
          <div className="flex-1 min-h-0">
            <ChartContainer config={chartConfig}>
              <BarChart data={clickData}>
                <XAxis dataKey="day" tick={false} axisLine={false} />
                <YAxis hide />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar
                  dataKey="clicks"
                  fill="var(--color-clicks)"
                  radius={[2, 2, 0, 0]}
                  className={cn(
                    "transition-all duration-1000 ease-out",
                    animationStep >= 2 && isRunning
                      ? "opacity-100"
                      : "opacity-0"
                  )}
                />
              </BarChart>
            </ChartContainer>
          </div>
        </div>

        {/* Daily Impression Performance Chart */}
        <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-3 bg-white dark:bg-gray-950 shadow-sm flex flex-col">
          <div className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-2">
            Daily Impression Performance
          </div>
          <div className="flex-1 min-h-0">
            <ChartContainer config={chartConfig}>
              <LineChart data={impressionData}>
                <XAxis dataKey="day" tick={false} axisLine={false} />
                <YAxis hide />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line
                  type="monotone"
                  dataKey="impressions"
                  stroke="var(--color-impressions)"
                  strokeWidth={2}
                  dot={{
                    fill: "var(--color-impressions)",
                    strokeWidth: 2,
                    r: 3,
                  }}
                  className={cn(
                    "transition-all duration-1000 ease-out",
                    animationStep >= 2 && isRunning
                      ? "opacity-100"
                      : "opacity-0"
                  )}
                />
              </LineChart>
            </ChartContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
