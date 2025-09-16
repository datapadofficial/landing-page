"use client";

import React from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AttributionLink } from "@/components/attribution-link";
import { Brain, ArrowRight, Sparkles, FileSpreadsheet, Zap, BarChart3 } from "lucide-react";

const ExcelAIHero = () => {
  return (
    <section className="pt-8 sm:pt-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container relative mx-auto px-4 text-center flex w-full flex-col items-center justify-center pb-8 sm:pb-16">
        {/* Floating Elements */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="absolute top-20 left-10 hidden lg:block"
        >
          <FileSpreadsheet className="w-8 h-8 text-primary/60" />
        </motion.div>

        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="absolute top-32 right-16 hidden lg:block"
        >
          <BarChart3 className="w-10 h-10 text-blue-500/60" />
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="absolute bottom-32 left-16 hidden lg:block"
        >
          <Brain className="w-9 h-9 text-purple-500/60" />
        </motion.div>

        <div className="relative z-30 mx-auto flex flex-col gap-6 max-w-5xl">
          {/* Badge */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="flex justify-center"
          >
            <Badge variant="outline" className="bg-background/80 backdrop-blur-sm border-primary/20 px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2 text-primary" />
              Excel AI Analyzer
            </Badge>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-foreground via-primary to-blue-600 bg-clip-text text-transparent">
                AI Excel Analysis
              </span>
              <br />
              <span className="text-foreground">
                Made Simple
              </span>
            </h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground"
            >
              <span className="bg-muted/50 px-3 py-1 rounded-full">Excel AI Agent</span>
              <span className="bg-muted/50 px-3 py-1 rounded-full">Excel Analyzer</span>
              <span className="bg-muted/50 px-3 py-1 rounded-full">Excel Analysis AI</span>
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Transform your Excel spreadsheets into powerful business insights with our
            <span className="text-primary font-semibold"> AI Excel analyzer</span>.
            Ask questions in plain English and get instant Excel AI analysis,
            charts, and actionable recommendations.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-8"
          >
            <Button asChild size="lg" className="min-w-48 group">
              <AttributionLink
                href={process.env.NEXT_PUBLIC_APP_URL || "https://app.datapad.io"}
                buttonLocation="excel-ai-hero-primary"
              >
                Start Excel AI Analysis
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </AttributionLink>
            </Button>

            <Button asChild variant="outline" size="lg" className="min-w-48">
              <AttributionLink
                href={process.env.NEXT_PUBLIC_APP_URL || "https://app.datapad.io"}
                buttonLocation="excel-ai-hero-demo"
              >
                Try Excel Analyzer
              </AttributionLink>
            </Button>
          </motion.div>

          {/* Key Benefits */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 max-w-4xl mx-auto"
          >
            <div className="bg-background/50 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-background/80 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <Zap className="w-5 h-5 text-yellow-500" />
                <span className="font-semibold text-sm">Instant Analysis</span>
              </div>
              <p className="text-xs text-muted-foreground">Get Excel AI analysis in seconds, not hours</p>
            </div>

            <div className="bg-background/50 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-background/80 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <Brain className="w-5 h-5 text-purple-500" />
                <span className="font-semibold text-sm">Natural Language</span>
              </div>
              <p className="text-xs text-muted-foreground">Ask questions in plain English, get expert insights</p>
            </div>

            <div className="bg-background/50 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-background/80 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <FileSpreadsheet className="w-5 h-5 text-green-500" />
                <span className="font-semibold text-sm">Excel Native</span>
              </div>
              <p className="text-xs text-muted-foreground">Works with all your existing Excel files</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export { ExcelAIHero };
