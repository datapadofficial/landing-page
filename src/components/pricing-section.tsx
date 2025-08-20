"use client";
import {
  ArrowRight,
  Code,
  Database,
  FileText,
  LifeBuoy,
  LucideIcon,
  PhoneCall,
  Server,
  Settings2,
  Slack,
  Users,
  Zap,
} from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

interface FeatureItem {
  icon: LucideIcon;
  text: string;
}

interface PricingPlan {
  name: string;
  priceMonthly: string;
  priceYearly: string;
  description: string;
  bestFor: string;
  features?: FeatureItem[];
  mostPopular?: boolean;
  cta: {
    text: string;
    href: string;
  };
}

const PLANS: PricingPlan[] = [
  {
    name: "Free",
    priceMonthly: "$0",
    priceYearly: "$0",
    description: "Get started with AI data analysis",
    bestFor: "Individual users and small teams",
    features: [
      { icon: Users, text: "1 User" },
      { icon: Database, text: "5 Daily Chat Messages" },
      { icon: FileText, text: "1 Saved Report" },
      { icon: LifeBuoy, text: "Community support" },
    ],
    cta: {
      text: "Start Free",
      href: "#",
    },
  },
  {
    name: "Pro",
    mostPopular: true,
    priceMonthly: "$50",
    priceYearly: "$40",
    description: "Advanced AI features for teams",
    bestFor: "Teams that need automation",
    features: [
      { icon: Users, text: "Unlimited Users" },
      { icon: Database, text: "Unlimited Messages" },
      { icon: FileText, text: "Unlimited Reports" },
      { icon: Settings2, text: "Auto-Learning Agent" },
      { icon: Zap, text: "Automations" },
      { icon: Slack, text: "Slack Bot" },
      { icon: PhoneCall, text: "Priority support" },
    ],
    cta: {
      text: "Start Free",
      href: "#",
    },
  },
  {
    name: "Basic",
    priceMonthly: "$20",
    priceYearly: "$16",
    description: "Essential features for growing teams",
    bestFor: "Small teams getting started",
    features: [
      { icon: Users, text: "Unlimited Users" },
      { icon: Database, text: "Unlimited Messages" },
      { icon: FileText, text: "10 Saved Reports" },
      { icon: LifeBuoy, text: "Email support" },
    ],
    cta: {
      text: "Start Free",
      href: "#",
    },
  },
  {
    name: "Enterprise",
    priceMonthly: "Custom",
    priceYearly: "Custom",
    description: "Custom solutions at scale",
    bestFor: "Large enterprises with specific needs",
    features: [
      { icon: Users, text: "Everything in Pro" },
      { icon: Server, text: "Bring Your Own Cloud" },
      { icon: PhoneCall, text: "Dedicated Support" },
      { icon: Code, text: "Custom Services" },
      { icon: Settings2, text: "Advanced Security & Compliance" },
      { icon: Database, text: "Custom Data Retention" },
      { icon: Zap, text: "Priority Feature Requests" },
      { icon: Slack, text: "White-label Options" },
    ],
    cta: {
      text: "Contact Sales",
      href: "#",
    },
  },
];

const PricingSection = ({
  className,
}: {
  showHeadline?: boolean;
  className?: string;
}) => {
  const [checked, setChecked] = useState(true);

  return (
    <section className={cn("py-8 sm:py-32 px-4 sm:px-0", className)}>
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-4 sm:gap-9.5">
          <div className="flex flex-col items-center gap-6 text-center mx-auto">
            <h1 className="mb-4 sm:mb-8">
              Stop paying for insights you can't use
            </h1>
            <p className="text-base sm:text-xl text-muted-foreground mb-4 sm:mb-8 max-w-2xl mx-auto">
              While other tools show you what happened, Datapad creates what
              happens next. Get implementation-ready campaigns, SEO content, and
              optimization strategies—not just charts.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mb-4 sm:mb-8">
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-chart-green"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                ROI in days, not months
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-chart-green"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Replace expensive analysts
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-chart-green"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Copy-paste ready deliverables
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center justify-center gap-4">
              <Label
                htmlFor="plan-duration"
                className={`${
                  !checked ? "text-foreground" : "text-muted-foreground"
                } text-sm`}
              >
                Monthly
              </Label>
              <Switch
                id="plan-duration"
                checked={checked}
                onCheckedChange={setChecked}
              />
              <Label
                htmlFor="plan-duration"
                className={`${
                  checked ? "text-foreground" : "text-muted-foreground"
                } text-sm`}
              >
                Annual
              </Label>
            </div>
            <div className="text-center text-chart-green">
              Save as much as 20% with annual billing
            </div>
          </div>
          <div className="mt-8 grid w-full grid-cols-1 gap-6 lg:grid-cols-6">
            {PLANS.map((plan, index) => (
              <PlanCard
                key={index}
                plan={plan}
                monthly={!checked}
                className={
                  index === PLANS.length - 1 ? "lg:col-span-6" : "lg:col-span-2"
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const PlanCard = ({
  plan,
  monthly,
  className,
}: {
  plan: PricingPlan;
  monthly: boolean;
  className?: string;
}) => {
  const isEnterprise = plan.name === "Enterprise";

  if (isEnterprise) {
    return (
      <div
        className={`relative h-full w-full rounded-xl border-2 px-8 py-8 ${className} border-muted-2 bg-black-3 dark:bg-white-3 shadow-sm`}
      >
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
          {/* Left side - Plan info */}
          <div className="lg:w-1/4 lg:pr-4">
            <div className="text-2xl font-semibold">{plan.name}</div>
            <div className="h-[2.875rem] overflow-hidden mt-2">
              <div
                className={`text-[2.875rem] leading-none font-semibold transition-transform duration-500 ${
                  monthly ? "translate-y-0" : "translate-y-[-3rem]"
                }`}
              >
                <div>{plan.priceMonthly}</div>
                <div>{plan.priceYearly}</div>
              </div>
            </div>
            <div className="text-sm text-muted-2-foreground mt-2">
              <div>{plan.bestFor}</div>
            </div>
            <div className="mt-4 text-lg font-medium text-foreground">
              {plan.description}
            </div>
            <Button
              asChild
              className="w-full lg:w-auto mt-8 min-w-[140px]"
              variant="outline"
              size="lg"
            >
              <a href={plan.cta.href}>
                {plan.cta.text}
                <ArrowRight />
              </a>
            </Button>
          </div>

          {/* Right side - Features in grid */}
          <div className="lg:w-2/3 lg:pl-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
              {plan.features?.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 text-foreground py-1"
                >
                  <feature.icon className="size-5 stroke-1 flex-shrink-0 mt-0.5" />
                  <span className="font-medium text-sm leading-relaxed">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative h-full w-full rounded-xl border px-6 py-6 ${className} ${
        plan?.mostPopular
          ? "border-primary border-2 shadow-lg"
          : "border-muted-2 shadow-sm"
      } bg-black-3 dark:bg-white-3 transition-all duration-200 hover:shadow-md`}
    >
      <div className="text-2xl font-semibold">{plan.name}</div>
      <div className="h-[2.875rem] overflow-hidden">
        <div
          className={`text-[2.875rem] leading-none font-semibold transition-transform duration-500 ${
            monthly ? "translate-y-0" : "translate-y-[-3rem]"
          }`}
        >
          <div>{plan.priceMonthly}</div>
          <div>{plan.priceYearly}</div>
        </div>
      </div>
      <div className="text-xs text-muted-2-foreground mt-1">
        <div>per person / {monthly ? "month" : "year"}</div>
        <div className="mt-1">{plan.bestFor}</div>
      </div>
      <div className="mt-4 mb-6 text-lg font-medium text-foreground">
        {plan.description}
      </div>
      <Button
        asChild
        className="w-full"
        variant={plan.mostPopular ? "default" : "outline"}
        size="lg"
      >
        <a href={plan.cta.href}>
          {plan.cta.text}
          <ArrowRight />
        </a>
      </Button>
      <div className="mt-6 flex flex-col gap-3">
        {plan.features?.map((feature, index) => (
          <div key={index} className="flex items-start gap-3 text-foreground">
            <feature.icon className="size-5 stroke-1 flex-shrink-0 mt-0.5" />
            <span className="text-sm leading-relaxed">{feature.text}</span>
          </div>
        ))}
      </div>
      {plan.mostPopular && (
        <div className="absolute top-0 left-1/2 w-fit -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary px-4 py-1.5 text-xs font-medium text-primary-foreground shadow-md">
          Most popular
        </div>
      )}
    </div>
  );
};

export { PricingSection };
