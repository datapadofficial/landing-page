"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Shuffle, Lightbulb } from "lucide-react";
import Image from "next/image";

interface MockPipelineProps {
  className?: string;
}

export function PipelineMock({ className }: MockPipelineProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  const steps = [
    {
      name: "Fetch from Google Analytics",
      type: "fetch_third_party_data",
      iconType: "image",
      iconSrc: "/images/integrations/google-analytics.png",
    },
    {
      name: "Fetch from Google Ads",
      type: "fetch_third_party_data",
      iconType: "image",
      iconSrc: "/images/integrations/google-ads.png",
    },
    {
      name: "Blend Data",
      type: "code_runner",
      iconType: "lucide",
      icon: Shuffle,
    },
    {
      name: "Generate Insights",
      type: "code_runner",
      iconType: "lucide",
      icon: Lightbulb,
    },
  ];

  const mockData = [
    {
      col1: "Date",
      col2: "Sessions",
      col3: "Ad Spend",
      col4: "Conversion Rate",
    },
    {
      col1: "2025-07-28",
      col2: "12,543",
      col3: "$2,431",
      col4: "3.2%",
    },
    {
      col1: "2025-07-29",
      col2: "13,821",
      col3: "$2,650",
      col4: "3.8%",
    },
    {
      col1: "2025-07-30",
      col2: "11,234",
      col3: "$2,180",
      col4: "2.9%",
    },
    {
      col1: "2025-07-31",
      col2: "14,567",
      col3: "$2,890",
      col4: "4.1%",
    },
    {
      col1: "2025-08-01",
      col2: "15,892",
      col3: "$3,120",
      col4: "4.3%",
    },
    {
      col1: "2025-08-02",
      col2: "13,456",
      col3: "$2,780",
      col4: "3.6%",
    },
    {
      col1: "2025-08-03",
      col2: "16,234",
      col3: "$3,450",
      col4: "4.7%",
    },
    {
      col1: "2025-08-04",
      col2: "12,789",
      col3: "$2,590",
      col4: "3.1%",
    },
    {
      col1: "2025-08-05",
      col2: "14,321",
      col3: "$2,940",
      col4: "3.9%",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isRunning) {
        setIsRunning(true);
        setCurrentStep(0);
        setShowResults(false);
      } else if (currentStep < steps.length - 1) {
        setCurrentStep((prev) => prev + 1);
      } else if (currentStep === steps.length - 1 && !showResults) {
        setTimeout(() => {
          setShowResults(true);
        }, 1000);
      } else if (showResults) {
        // Reset after showing results
        setTimeout(() => {
          setShowResults(false);
          setIsRunning(false);
          setCurrentStep(0);
        }, 3000);
      }
    }, 1200);

    return () => clearInterval(interval);
  }, [currentStep, isRunning, showResults, steps.length]);

  return (
    <div
      className={cn(
        "w-full h-full p-4 flex flex-col relative overflow-hidden",
        className
      )}
    >
      {/* Pipeline Steps */}
      <div
        className={cn(
          "space-y-3 mb-6 relative pl-8 transition-all duration-700 ease-in-out",
          showResults ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0"
        )}
      >
        {steps.map((step, index) => (
          <div key={index} className="relative flex items-center">
            {/* Step Number Badge */}
            <div className="absolute z-20s left-[-36px] opacity-60 text-xs font-medium bg-primary/10 border border-primary/20 rounded-md h-6 w-6 flex items-center justify-center">
              {index + 1}
            </div>

            {/* Step Card */}
            <div
              className={cn(
                "flex flex-col cursor-pointer shadow-sm border rounded-xl group w-full transition-all duration-300 relative",
                index <= currentStep && isRunning
                  ? "border-primary/50 shadow-md shadow-primary/10"
                  : "border-gray-200 dark:border-gray-700",
                "hover:border-gray-300 dark:hover:border-gray-600"
              )}
            >
              {/* Header */}
              <div
                className={cn(
                  "relative group rounded-t-xl justify-between items-center px-3 py-2 flex",
                  index === currentStep &&
                    isRunning &&
                    "bg-gradient-to-r from-primary/10 to-primary/10",
                  index <= currentStep &&
                    isRunning &&
                    !showResults &&
                    "bg-primary/5 dark:bg-primary/10"
                )}
              >
                <div className="flex gap-2 items-center min-w-0">
                  {/* Icon */}
                  {step.iconType === "image" ? (
                    <div
                      className={cn(
                        "w-3.5 h-3.5 rounded-sm bg-primary/10 flex items-center justify-center",
                        index <= currentStep && isRunning && "bg-primary/20"
                      )}
                    >
                      <Image
                        src={step.iconSrc as string}
                        alt={step.name}
                        width={12}
                        height={12}
                        className="flex-shrink-0"
                      />
                    </div>
                  ) : (
                    step.icon && (
                      <step.icon size={14} className="text-primary" />
                    )
                  )}
                  <span
                    className={cn(
                      "font-medium text-sm text-gray-600 dark:text-gray-400 truncate",
                      index <= currentStep &&
                        isRunning &&
                        "text-gray-900 dark:text-white"
                    )}
                  >
                    {step.name}
                  </span>
                </div>

                <div className="flex gap-2">
                  {/* Loading indicator */}
                  {index === currentStep && isRunning && !showResults && (
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
                      <div className="w-3.5 h-3.5 border-2 border-primary border-t-transparent rounded-full animate-spin relative z-10" />
                    </div>
                  )}
                </div>
              </div>

              {/* Step Results Preview */}
              {index <= currentStep && showResults && (
                <div className="p-3 border-t border-gray-100 dark:border-gray-700">
                  <div className="text-xs text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 rounded p-2 border border-gray-200 dark:border-gray-700">
                    {index === 0 ? "Processing data..." : "Data transformed"}
                  </div>
                </div>
              )}
            </div>

            {/* Connector Divider Line */}
            {index < steps.length - 1 && (
              <div className="absolute left-[-24px] top-[30px] w-px h-7 z-10 bg-primary/30" />
            )}
          </div>
        ))}
      </div>

      {/* Data Table Section */}
      <div
        className={cn(
          "absolute inset-x-4 bottom-4 top-4 transition-all duration-700 ease-in-out",
          showResults
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0"
        )}
      >
        <div className="h-full border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-lg">
          {/* Table Header */}
          <div className="grid grid-cols-4 bg-primary/10 border-b border-gray-200 dark:border-gray-700">
            <div className="p-2 text-xs font-medium text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700">
              Date
            </div>
            <div className="p-2 text-xs font-medium text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700">
              Sessions
            </div>
            <div className="p-2 text-xs font-medium text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700">
              Attribution %
            </div>
            <div className="p-2 text-xs font-medium text-gray-700 dark:text-gray-300">
              Conversion %
            </div>
          </div>

          {/* Table Rows */}
          <div className="overflow-auto">
            {mockData.slice(1).map((row, index) => (
              <div
                key={index}
                className="grid grid-cols-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0"
              >
                <div className="p-2 text-xs text-gray-800 dark:text-gray-200 border-r border-gray-200 dark:border-gray-700">
                  {row.col1}
                </div>
                <div className="p-2 text-xs text-gray-800 dark:text-gray-200 border-r border-gray-200 dark:border-gray-700">
                  {row.col2}
                </div>
                <div className="p-2 text-xs text-gray-800 dark:text-gray-200 border-r border-gray-200 dark:border-gray-700">
                  {row.col3}
                </div>
                <div className="p-2 text-xs text-gray-800 dark:text-gray-200">
                  {row.col4}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
