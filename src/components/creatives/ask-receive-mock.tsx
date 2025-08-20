"use client";

import { useState, useEffect, useMemo } from "react";
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
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayedMessages, setDisplayedMessages] = useState<string[]>([]);

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

  const resultMessages = useMemo(
    () => [
      "🎯 **Analysis Complete!** I found significant optimization opportunities across your marketing channels.",

      "📋 **Immediate Actions (Copy & Paste Ready):**\n• Pause 3 LinkedIn campaigns (saving $1,800/month)\n• Scale Google Ads budget to $15,450 (+25%)\n• Add 12 negative keywords to Facebook Ads",

      "🚀 **Campaign Assets Created:**\n• Google Ads: 47 winning keywords ready to import\n• Facebook: 5 new ad creatives based on top performers\n• Email sequence: 7 follow-up templates for leads",

      "💰 **Budget Reallocation Plan:**\n• Move $2,400 from LinkedIn → Google Ads\n• Increase Facebook testing budget by $800\n• Reserve $1,200 for Q1 expansion",

      "**🎉 PROJECTED IMPACT:** +$8,400/month revenue, 127% lead quality lift",
    ],
    []
  );

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

      // Phase 3: Show results (multiple messages)
      else if (animationPhase === 3) {
        setShowResults(true);

        if (currentMessageIndex < resultMessages.length) {
          const currentMessage = resultMessages[currentMessageIndex];
          let index = 0;
          setTypingText("");

          const typeMessage = setInterval(() => {
            if (index <= currentMessage.length) {
              setTypingText(currentMessage.slice(0, index));
              index++;
            } else {
              clearInterval(typeMessage);
              // Add completed message to displayed messages
              setDisplayedMessages((prev) => [...prev, currentMessage]);
              setCurrentMessageIndex((prev) => prev + 1);
              setTypingText("");

              // If all messages are done, reset after delay
              if (currentMessageIndex >= resultMessages.length - 1) {
                setTimeout(() => setAnimationPhase(4), 2000);
              } else {
                // Small delay between messages
                setTimeout(() => {}, 800);
              }
            }
          }, 20);
        }
      }

      // Phase 4: Reset
      else if (animationPhase === 4) {
        setAnimationPhase(0);
        setCurrentStep(0);
        setShowResults(false);
        setTypingText("");
        setCurrentMessageIndex(0);
        setDisplayedMessages([]);
      }
    };

    const timer = setTimeout(sequence, 100);
    return () => clearTimeout(timer);
  }, [
    animationPhase,
    currentStep,
    currentMessageIndex,
    userQuestion,
    resultMessages,
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
            <div className="border border-input bg-white dark:bg-dark-900 rounded-lg p-3 shadow-sm">
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
            <div className="max-w-[80%] bg-primary text-primary-foreground rounded-2xl px-3 py-2 shadow-md">
              <div className="text-xs leading-relaxed">{userQuestion}</div>
            </div>
          </div>

          {/* AI Agent Initial Response */}
          <div className="flex justify-start">
            <div className="max-w-[85%] border border-input bg-white dark:bg-dark-900 rounded-2xl px-3 py-2 shadow-sm">
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
            </div>
          </div>

          {/* AI Agent Result Messages */}
          {showResults &&
            displayedMessages.map((message, index) => (
              <div key={index} className="flex justify-start">
                <div className="max-w-[85%] border border-input bg-white dark:bg-dark-900 rounded-2xl px-3 py-2 shadow-sm">
                  <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-pre-wrap leading-relaxed">
                    {message}
                  </div>
                </div>
              </div>
            ))}

          {/* Currently Typing Message */}
          {showResults && typingText && (
            <div className="flex justify-start">
              <div className="max-w-[85%] border border-input bg-white dark:bg-dark-900 rounded-2xl px-3 py-2 shadow-sm">
                <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-pre-wrap leading-relaxed">
                  {typingText}
                  <span className="animate-pulse text-primary">|</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Chat Footer */}
        {showResults && currentMessageIndex >= resultMessages.length && (
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
