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
  const [dataUpdateCycle, setDataUpdateCycle] = useState(0);

  // Animation sequence: 0=start, 1=metrics, 2=charts, 3=data updates
  const totalSteps = 3;

  // Dynamic metrics that change to show data updating
  const metricsData = [
    {
      impressions: "688,405",
      clicks: "3,390",
      position: "~29",
      ctr: "4.9%",
      changes: ["+12.3%", "+8.7%", "-15.2%", "+2.1%"],
    },
    {
      impressions: "712,890",
      clicks: "3,567",
      position: "~26",
      ctr: "5.1%",
      changes: ["+15.8%", "+13.2%", "-18.7%", "+4.3%"],
    },
    {
      impressions: "645,230",
      clicks: "3,123",
      position: "~31",
      ctr: "4.7%",
      changes: ["+8.9%", "+5.4%", "-12.1%", "-1.2%"],
    },
  ];

  const currentMetrics = metricsData[dataUpdateCycle % metricsData.length];

  // Chart data that updates to show progression
  const chartDataSets = [
    {
      clicks: [
        { day: "28", clicks: 387 },
        { day: "29", clicks: 593 },
        { day: "30", clicks: 136 },
        { day: "31", clicks: 452 },
        { day: "01", clicks: 689 },
        { day: "02", clicks: 234 },
        { day: "03", clicks: 567 },
      ],
      impressions: [
        { day: "28", impressions: 71900 },
        { day: "29", impressions: 48800 },
        { day: "30", impressions: 24600 },
        { day: "31", impressions: 65300 },
        { day: "01", impressions: 89200 },
        { day: "02", impressions: 34500 },
        { day: "03", impressions: 76800 },
      ],
    },
    {
      clicks: [
        { day: "28", clicks: 892 },
        { day: "29", clicks: 234 },
        { day: "30", clicks: 756 },
        { day: "31", clicks: 123 },
        { day: "01", clicks: 445 },
        { day: "02", clicks: 834 },
        { day: "03", clicks: 298 },
      ],
      impressions: [
        { day: "28", impressions: 45200 },
        { day: "29", impressions: 89700 },
        { day: "30", impressions: 62100 },
        { day: "31", impressions: 23800 },
        { day: "01", impressions: 78900 },
        { day: "02", impressions: 94500 },
        { day: "03", impressions: 41300 },
      ],
    },
    {
      clicks: [
        { day: "28", clicks: 156 },
        { day: "29", clicks: 789 },
        { day: "30", clicks: 423 },
        { day: "31", clicks: 667 },
        { day: "01", clicks: 234 },
        { day: "02", clicks: 891 },
        { day: "03", clicks: 512 },
      ],
      impressions: [
        { day: "28", impressions: 67800 },
        { day: "29", impressions: 33200 },
        { day: "30", impressions: 85600 },
        { day: "31", impressions: 49100 },
        { day: "01", impressions: 72400 },
        { day: "02", impressions: 28900 },
        { day: "03", impressions: 91300 },
      ],
    },
  ];

  const currentChartData =
    chartDataSets[dataUpdateCycle % chartDataSets.length];

  const chartConfig = {
    clicks: {
      label: "Clicks",
      color: "var(--chart-red)",
    },
    impressions: {
      label: "Impressions",
      color: "var(--chart-green)",
    },
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let dataInterval: NodeJS.Timeout;

    // Only run animations when component is visible
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        // Start animation immediately
        setIsRunning(true);
        setAnimationStep(0);

        interval = setInterval(() => {
          setAnimationStep((prev) => {
            if (prev < totalSteps - 1) {
              return prev + 1;
            } else {
              // Start data update cycle after initial sequence
              clearInterval(interval);
              // Start continuous data updates every 3 seconds
              dataInterval = setInterval(() => {
                setDataUpdateCycle((cycle) => cycle + 1);
              }, 3000);

              return prev;
            }
          });
        }, 1200);
      } else {
        clearInterval(interval);
        if (dataInterval) {
          clearInterval(dataInterval);
        }
        setIsRunning(false);
        setAnimationStep(0);
        setDataUpdateCycle(0);
      }
    };

    // Create intersection observer
    const intersectionObserver = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
      rootMargin: "50px",
    });

    // Find the component element and observe it
    const element = document.getElementById("dashboard-mock");
    if (element) {
      intersectionObserver.observe(element);
    }

    return () => {
      clearInterval(interval);
      if (dataInterval) {
        clearInterval(dataInterval);
      }
      intersectionObserver?.disconnect();
    };
  }, []);

  return (
    <div
      id="dashboard-mock"
      className={cn(
        "w-full h-full  p-0 flex flex-col relative overflow-hidden",
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
            value: currentMetrics.impressions,
            change: currentMetrics.changes[0],
          },
          {
            icon: Users,
            label: "Total Clicks",
            value: currentMetrics.clicks,
            change: currentMetrics.changes[1],
          },
          {
            icon: BarChart3,
            label: "Avg Position",
            value: currentMetrics.position,
            change: currentMetrics.changes[2],
          },
          {
            icon: DollarSign,
            label: "Click-Through Rate",
            value: currentMetrics.ctr,
            change: currentMetrics.changes[3],
          },
        ].map((metric, index) => (
          <div
            key={index}
            className={cn(
              "border border-gray-200 dark:border-gray-700 rounded-xl p-2 shadow-sm transition-all duration-700 ease-out",
              animationStep >= 1 && isRunning
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95"
            )}
            style={{
              transitionDelay: `${index * 100}ms`,
            }}
          >
            <div className="flex items-center justify-between mb-1">
              <metric.icon size={12} className="text-primary" />
              <span className="text-xs font-medium text-primary bg-primary/10 px-1 py-0.5 rounded text-[10px] transition-all duration-700">
                {metric.change}
              </span>
            </div>
            <div className="text-sm font-bold text-gray-900 dark:text-white mb-0.5 transition-all duration-700">
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
        <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-3 shadow-sm flex flex-col">
          <div className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-2">
            Daily Click Performance
          </div>
          <div className="h-16 mb-2">
            <ChartContainer config={chartConfig}>
              <BarChart data={currentChartData.clicks}>
                <XAxis
                  dataKey="day"
                  tick={{ fontSize: 10, fill: "#6b7280" }}
                  axisLine={{ stroke: "#6b7280", strokeWidth: 1 }}
                  tickLine={{ stroke: "#6b7280", strokeWidth: 1 }}
                />
                <YAxis
                  tick={{ fontSize: 10, fill: "#6b7280" }}
                  axisLine={{ stroke: "#6b7280", strokeWidth: 1 }}
                  tickLine={{ stroke: "#6b7280", strokeWidth: 1 }}
                  width={30}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar
                  dataKey="clicks"
                  fill="var(--color-clicks)"
                  radius={[2, 2, 0, 0]}
                  animationDuration={800}
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
        <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-3 shadow-sm flex flex-col">
          <div className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-2">
            Daily Impression Performance
          </div>
          <div className="h-16 mb-2">
            <ChartContainer config={chartConfig}>
              <LineChart data={currentChartData.impressions}>
                <XAxis
                  dataKey="day"
                  tick={{ fontSize: 10, fill: "#6b7280" }}
                  axisLine={{ stroke: "#6b7280", strokeWidth: 1 }}
                  tickLine={{ stroke: "#6b7280", strokeWidth: 1 }}
                />
                <YAxis
                  tick={{ fontSize: 10, fill: "#6b7280" }}
                  axisLine={{ stroke: "#6b7280", strokeWidth: 1 }}
                  tickLine={{ stroke: "#6b7280", strokeWidth: 1 }}
                  width={40}
                />
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
                  animationDuration={800}
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
