"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Terminal, AnimatedSpan } from "@/components/magicui/terminal";

interface CodePrecisionMockProps {
  className?: string;
}

export function CodePrecisionMock({ className }: CodePrecisionMockProps) {
  const [currentCodeBlock, setCurrentCodeBlock] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  const codeBlocks = [
    {
      language: "SQL",
      code: `-- Analyzing Google Ads performance by keyword
SELECT 
  keyword,
  SUM(cost) as total_cost,
  SUM(conversions) as total_conversions,
  AVG(cpc) as avg_cpc,
  (SUM(conversions) / SUM(clicks)) * 100 as cvr
FROM google_ads_performance 
WHERE date >= DATE_SUB(CURRENT_DATE(), INTERVAL 30 DAY)
GROUP BY keyword
HAVING total_cost > 1000
ORDER BY total_cost DESC;`,
    },
    {
      language: "Python",
      code: `# Identifying waste and opportunities
import pandas as pd
import numpy as np

# Load and analyze keyword performance
df = query_results.copy()
df['cost_per_conversion'] = df['total_cost'] / df['total_conversions']

# Find high-waste keywords (high cost, low CVR)
waste_keywords = df[
    (df['total_cost'] > 500) & 
    (df['cvr'] < 1.5)
].sort_values('total_cost', ascending=False)

print(f"💰 Wasting $\{waste_keywords['total_cost'].sum():,.0f\}/month")
print(f"🎯 Found \{len(waste_keywords)\} problem keywords")`,
    },
    {
      language: "Output",
      code: `💰 Wasting $3,247/month
🎯 Found 8 problem keywords

TOP WASTE KEYWORDS:
❌ "digital marketing agency" - $127 CPC, 0.8% CVR
❌ "online advertising company" - $89 CPC, 1.2% CVR  
❌ "marketing consultants" - $156 CPC, 0.6% CVR

WINNERS TO SCALE:
✅ "data analytics platform" - $2.14 CPC, 4.2% CVR
✅ "business intelligence tool" - $2.69 CPC, 3.8% CVR

COPY-PASTE READY ACTIONS:
📋 Negative Keywords: marketing agency, consultants, cheap
📋 Bid Increases: +35% on "data analytics platform"
📋 New Ad Copy: "Turn Data Into Revenue - Get Insights That Drive Growth"

PROJECTED IMPACT:
💰 Monthly Savings: $3,247
📈 Lead Quality Lift: +127%`,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isRunning) {
        setIsRunning(true);
        setCurrentCodeBlock(0);
        setShowResults(false);
      } else if (currentCodeBlock < codeBlocks.length - 1) {
        setCurrentCodeBlock((prev) => prev + 1);
      } else if (currentCodeBlock === codeBlocks.length - 1 && !showResults) {
        setTimeout(() => {
          setShowResults(true);
        }, 1000);
      } else if (showResults) {
        // Reset after showing results
        setTimeout(() => {
          setShowResults(false);
          setIsRunning(false);
          setCurrentCodeBlock(0);
        }, 8000);
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [currentCodeBlock, isRunning, showResults, codeBlocks.length]);

  return (
    <div
      className={cn(
        "w-full h-full p-2 flex flex-col relative overflow-hidden",
        className
      )}
    >
      {/* Header with Language Indicator */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="text-xs font-medium text-gray-600 dark:text-gray-400">
            Code-Level Analysis
          </div>
          {isRunning && (
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-chart-blue rounded-full animate-pulse" />
              <span className="text-xs text-chart-blue dark:text-chart-blue font-medium">
                {codeBlocks[currentCodeBlock]?.language}
              </span>
            </div>
          )}
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-400">
          SQL + Python Analysis
        </div>
      </div>

      {/* Main Terminal */}
      <div className="flex-1">
        <Terminal className="w-full h-full max-h-none max-w-none bg-gray-900 dark:bg-black border-gray-700 [&_code]:text-[10px] [&_code]:leading-tight">
          {isRunning && (
            <div className="text-chart-green font-mono !text-xs">
              {codeBlocks[currentCodeBlock]?.code
                .split("\n")
                .map((line, index) => (
                  <AnimatedSpan key={index} delay={index * 50}>
                    {codeBlocks[currentCodeBlock]?.language === "SQL" ? (
                      line.startsWith("--") ? (
                        <span className="text-gray-500">{line}</span>
                      ) : line.match(
                          /^(SELECT|FROM|WHERE|GROUP BY|HAVING|ORDER BY)/i
                        ) ? (
                        <span className="text-chart-blue font-semibold">
                          {line}
                        </span>
                      ) : line.includes("SUM(") ||
                        line.includes("AVG(") ||
                        line.includes("DATE_SUB") ? (
                        <span className="text-chart-purple">{line}</span>
                      ) : (
                        <span className="text-gray-300">{line}</span>
                      )
                    ) : codeBlocks[currentCodeBlock]?.language === "Python" ? (
                      line.startsWith("#") ? (
                        <span className="text-gray-500">{line}</span>
                      ) : line.includes("import ") ? (
                        <span className="text-chart-orange">{line}</span>
                      ) : line.includes("def ") || line.includes("print(") ? (
                        <span className="text-chart-blue">{line}</span>
                      ) : line.includes("df[") ||
                        line.includes("query_results") ? (
                        <span className="text-chart-purple">{line}</span>
                      ) : (
                        <span className="text-gray-300">{line}</span>
                      )
                    ) : codeBlocks[currentCodeBlock]?.language === "Output" ? (
                      line.startsWith("💰") || line.startsWith("🎯") ? (
                        <span className="text-chart-yellow font-semibold">
                          {line}
                        </span>
                      ) : line.startsWith("❌") ? (
                        <span className="text-chart-red">{line}</span>
                      ) : line.startsWith("✅") ? (
                        <span className="text-chart-green">{line}</span>
                      ) : line.startsWith("📋") ? (
                        <span className="text-chart-blue">{line}</span>
                      ) : line.includes("TOP WASTE") ||
                        line.includes("WINNERS") ||
                        line.includes("COPY-PASTE") ||
                        line.includes("PROJECTED") ? (
                        <span className="text-chart-blue font-semibold">
                          {line}
                        </span>
                      ) : line.includes("$") ? (
                        <span className="text-chart-yellow">{line}</span>
                      ) : (
                        <span className="text-gray-300">{line}</span>
                      )
                    ) : (
                      <span className="text-gray-300">{line}</span>
                    )}
                  </AnimatedSpan>
                ))}
            </div>
          )}
        </Terminal>
      </div>

      {/* Bottom Status Bar */}
      <div className="mt-2 flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
        <span>
          {currentCodeBlock === codeBlocks.length - 1 && showResults
            ? "✓ Ready to copy & implement"
            : `Executing ${
                codeBlocks[currentCodeBlock]?.language || "code"
              }...`}
        </span>
        <span className="text-primary">ROI: +$42K/year</span>
      </div>
    </div>
  );
}
