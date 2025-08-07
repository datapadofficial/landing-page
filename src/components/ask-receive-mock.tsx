"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Search, Target, Lightbulb, FileText } from "lucide-react";

interface AskReceiveMockProps {
  className?: string;
}

export function AskReceiveMock({ className }: AskReceiveMockProps) {
  const [animationPhase, setAnimationPhase] = useState(0);
  const [typingText, setTypingText] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  const [showResults, setShowResults] = useState(false);

  // Animation phases: 0=typing, 1=zoom-out, 2=processing, 3=results, 4=reset

  const userQuestion =
    "Which marketing channels are driving the highest ROI this quarter?";

  const processingSteps = [
    {
      name: "Analyzing Performance Data",
      icon: Search,
      status: "processing",
    },
    {
      name: "Identifying Waste & Opportunities",
      icon: Target,
      status: "processing",
    },
    {
      name: "Strategizing Budget Reallocation",
      icon: Lightbulb,
      status: "processing",
    },
    {
      name: "Creating Campaign Assets",
      icon: FileText,
      status: "processing",
    },
  ];

  const resultsSummary = `🎯 **READY-TO-DEPLOY CAMPAIGN OPTIMIZATIONS**

📋 **COPY-PASTE ACTIONS:**
• Pause 3 LinkedIn campaigns (saving $1,800/month)
• Scale Google Ads budget to $15,450 (+25%)
• Add 12 negative keywords to Facebook Ads

🚀 **CAMPAIGN ASSETS CREATED:**
• Google Ads: 47 winning keywords ready to import
• Facebook: 5 new ad creatives based on top performers  
• Email sequence: 7 follow-up templates for leads

💰 **BUDGET REALLOCATION PLAN:**
• Move $2,400 from LinkedIn → Google Ads
• Increase Facebook testing budget by $800
• Reserve $1,200 for Q1 expansion

**PROJECTED IMPACT:** +$8,400/month, 127% lead quality lift`;

  useEffect(() => {
    const sequence = async () => {
      // Phase 0: Start typing the question
      if (animationPhase === 0) {
        let index = 0;
        const typeQuestion = setInterval(() => {
          if (index <= userQuestion.length) {
            setTypingText(userQuestion.slice(0, index));
            index++;
          } else {
            clearInterval(typeQuestion);
            setTimeout(() => setAnimationPhase(1), 1000);
          }
        }, 30);
      }

      // Phase 1: Zoom out transition (handled by CSS)
      else if (animationPhase === 1) {
        setTimeout(() => setAnimationPhase(2), 800);
      }

      // Phase 2: Processing steps
      else if (animationPhase === 2) {
        if (currentStep < processingSteps.length) {
          setTimeout(() => setCurrentStep((prev) => prev + 1), 800);
        } else {
          setTimeout(() => setAnimationPhase(3), 500);
        }
      }

      // Phase 3: Show results
      else if (animationPhase === 3) {
        setShowResults(true);
        let index = 0;
        const typeResults = setInterval(() => {
          if (index <= resultsSummary.length) {
            setTypingText(resultsSummary.slice(0, index));
            index++;
          } else {
            clearInterval(typeResults);
            setTimeout(() => setAnimationPhase(4), 3000);
          }
        }, 25);
      }

      // Phase 4: Reset
      else if (animationPhase === 4) {
        setAnimationPhase(0);
        setCurrentStep(0);
        setShowResults(false);
        setTypingText("");
      }
    };

    const timer = setTimeout(sequence, 100);
    return () => clearTimeout(timer);
  }, [
    animationPhase,
    currentStep,
    userQuestion,
    resultsSummary,
    processingSteps.length,
  ]);

  return (
    <div
      className={cn(
        "w-full h-full p-2 flex flex-col relative overflow-hidden",
        className
      )}
    >
      {/* Phase 0: Typing in search bar (zoomed in) */}
      {animationPhase === 0 && (
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center transition-all duration-700 ease-out",
            "scale-150 translate-y-[-20%]"
          )}
        >
          <div className="w-full max-w-md mx-4">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-3 shadow-sm">
              <div className="flex items-center gap-2">
                <Search
                  size={14}
                  className="text-gray-600 dark:text-gray-400"
                />
                <div className="flex-1">
                  <div className="text-xs text-gray-700 dark:text-gray-300">
                    {typingText}
                    <span className="animate-pulse text-primary">|</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Phase 1+: Full interface (zoomed out) */}
      <div
        className={cn(
          "absolute inset-2 flex flex-col transition-all duration-700 ease-out",
          animationPhase >= 1
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-75 translate-y-4"
        )}
      >
        {/* Chat Messages */}
        <div className="flex-1 space-y-3 mb-4">
          {/* User Message */}
          <div className="flex justify-end">
            <div className="max-w-[80%] bg-primary text-primary-foreground rounded-2xl px-3 py-2 shadow-sm">
              <div className="text-xs leading-relaxed">{userQuestion}</div>
            </div>
          </div>

          {/* AI Agent Response */}
          <div className="flex justify-start">
            <div className="max-w-[85%] border border-gray-200 dark:border-gray-700 rounded-2xl px-3 py-2 shadow-sm">
              <div className="text-xs text-gray-700 dark:text-gray-300 mb-2">
                Let me analyze your marketing data to find the best performing
                channels...
              </div>

              {/* Typing indicator when processing */}
              {animationPhase >= 2 && !showResults && (
                <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                  <div className="flex space-x-1">
                    <div
                      className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    ></div>
                    <div
                      className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    ></div>
                    <div
                      className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    ></div>
                  </div>
                  <span className="text-xs ml-2">
                    {
                      processingSteps[
                        Math.min(currentStep, processingSteps.length - 1)
                      ]?.name
                    }
                  </span>
                </div>
              )}

              {/* Results */}
              {showResults && (
                <div className="border-t border-gray-200 dark:border-gray-700 pt-2 mt-2">
                  <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-pre-wrap leading-relaxed">
                    {typingText}
                    {animationPhase === 3 &&
                      typingText.length < resultsSummary.length && (
                        <span className="animate-pulse text-primary">|</span>
                      )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Chat Footer */}
        {showResults && (
          <div className="flex justify-center">
            <div className="text-xs text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 rounded-full px-3 py-1">
              ✓ Analysis complete • ROI: +$42K/year
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
