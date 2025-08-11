"use client";

import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatedLogo } from "@/components/navigation/aimated-logo/animated-logo";
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";
import { ProductSubmenu } from "@/components/navigation/product-submenu";
import { WorkflowsSubmenu } from "@/components/navigation/workflows-submenu";
import { IntegrationsSubmenu } from "@/components/navigation/integrations-submenu";
import { TeamsSubmenu } from "@/components/navigation/teams-submenu";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const MainNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={`sticky top-0 z-50 bg-background/80 backdrop-blur-sm py-3 ${
        isScrolled ? "border-b border-border" : ""
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Desktop Menu */}
        <nav className="hidden justify-between lg:flex">
          {/* Logo */}
          <div className="min-w-none lg:min-w-[191px]">
            <a href="/" className="flex w-fit items-center gap-2">
              <AnimatedLogo isActive={false} className="w-5 h-5" />
              <span className="text-xl font-medium tracking-tight font-poppins">
                datapad
              </span>
            </a>
          </div>

          <div className="flex items-center">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Home */}
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/"
                    className="bg-background hover:bg-muted hover:text-accent-foreground group inline-flex h-8 w-max items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition-colors"
                  >
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Product Submenu */}
                <ProductSubmenu />

                {/* Workflows Submenu */}
                <WorkflowsSubmenu />

                {/* Integrations Submenu */}
                <IntegrationsSubmenu />

                {/* Teams Submenu */}
                <TeamsSubmenu />

                {/* Pricing */}
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/pricing"
                    className="bg-background hover:bg-muted hover:text-accent-foreground group inline-flex h-8 w-max items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition-colors"
                  >
                    Pricing
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Blog */}
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/blog"
                    className="bg-background hover:bg-muted hover:text-accent-foreground group inline-flex h-8 w-max items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition-colors"
                  >
                    Blog
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex gap-2 items-center">
            <Button
              asChild
              size="icon"
              variant="ghost"
              className="cursor-pointer"
            >
              <AnimatedThemeToggler className="h-8 w-8" />
            </Button>
            <Button asChild variant="secondary" size="sm">
              <a href="https://app.datapad.io">Sign In</a>
            </Button>
            <Button asChild size="sm">
              <a href="https://app.datapad.io">Sign up</a>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
              <AnimatedLogo isActive={false} className="w-5 h-5" />
            </a>
            <div className="flex gap-2 items-center">
              <Button
                asChild
                size="icon"
                variant="ghost"
                className="cursor-pointer h-9 w-9"
              >
                <AnimatedThemeToggler className="h-9 w-9 flex items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground" />
              </Button>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="size-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle>
                      <a
                        href="/"
                        className="flex items-center gap-2 font-medium text-lg"
                      >
                        Menu
                      </a>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-6 p-4">
                    <Accordion
                      type="single"
                      collapsible
                      className="flex w-full flex-col gap-4"
                    >
                      {/* Home */}
                      <a href="/" className="text-md font-semibold">
                        Home
                      </a>

                      {/* Product */}
                      <AccordionItem value="Product" className="border-b-0">
                        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
                          Product
                        </AccordionTrigger>
                        <AccordionContent className="mt-2">
                          <MobileProductMenu />
                        </AccordionContent>
                      </AccordionItem>

                      {/* Workflows */}
                      <AccordionItem value="Workflows" className="border-b-0">
                        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
                          Workflows
                        </AccordionTrigger>
                        <AccordionContent className="mt-2">
                          <MobileWorkflowsMenu />
                        </AccordionContent>
                      </AccordionItem>

                      {/* Integrations */}
                      <AccordionItem
                        value="Integrations"
                        className="border-b-0"
                      >
                        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
                          Integrations
                        </AccordionTrigger>
                        <AccordionContent className="mt-2">
                          <MobileIntegrationsMenu />
                        </AccordionContent>
                      </AccordionItem>

                      {/* Teams */}
                      <AccordionItem value="Teams" className="border-b-0">
                        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
                          Teams
                        </AccordionTrigger>
                        <AccordionContent className="mt-2">
                          <MobileTeamsMenu />
                        </AccordionContent>
                      </AccordionItem>

                      {/* Pricing */}
                      <a href="/pricing" className="text-md font-semibold">
                        Pricing
                      </a>

                      {/* Blog */}
                      <a href="/blog" className="text-md font-semibold">
                        Blog
                      </a>
                    </Accordion>

                    <div className="flex flex-col gap-3">
                      <Button asChild variant="outline">
                        <a href="https://app.datapad.io">Sign In</a>
                      </Button>
                      <Button asChild>
                        <a href="https://app.datapad.io">Sign up</a>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Mobile menu components (simplified versions of the desktop submenus)
const MobileProductMenu = () => (
  <div className="flex flex-col gap-2">
    <a
      href="/features/ai-data-agent"
      className="text-sm hover:text-accent-foreground"
    >
      AI Data Agent
    </a>
    <a
      href="/features/generative-dashboards"
      className="text-sm hover:text-accent-foreground"
    >
      Generative Dashboards
    </a>
    <a
      href="/features/text-to-sql-python"
      className="text-sm hover:text-accent-foreground"
    >
      Text2SQL & Python
    </a>
    <a
      href="/features/integrations"
      className="text-sm hover:text-accent-foreground"
    >
      50+ Integrations
    </a>
    <a
      href="/features/data-blending"
      className="text-sm hover:text-accent-foreground"
    >
      Data Blending
    </a>
    <a
      href="/features/shareable-reports"
      className="text-sm hover:text-accent-foreground"
    >
      Shareable Reports
    </a>
    <a
      href="/features/slack-bot"
      className="text-sm hover:text-accent-foreground"
    >
      Slack Bot
    </a>
    <a
      href="/features/voice-mode"
      className="text-sm hover:text-accent-foreground"
    >
      Voice Mode
    </a>
    <a
      href="/features/automations"
      className="text-sm hover:text-accent-foreground"
    >
      Automations
    </a>
    <a
      href="/features/multi-model-ai"
      className="text-sm hover:text-accent-foreground"
    >
      Multi-Model AI
    </a>
    <a
      href="/features/learning-layer"
      className="text-sm hover:text-accent-foreground"
    >
      Learning Layer
    </a>
    <a
      href="/features/web-access"
      className="text-sm hover:text-accent-foreground"
    >
      Web Access
    </a>
    <a
      href="/features"
      className="text-sm hover:text-accent-foreground font-medium"
    >
      View All Features
    </a>
  </div>
);

const MobileWorkflowsMenu = () => (
  <div className="flex flex-col gap-2">
    <a
      href="/teams/marketing"
      className="text-sm hover:text-accent-foreground font-medium"
    >
      Marketing
    </a>
    <a
      href="/teams/sales"
      className="text-sm hover:text-accent-foreground font-medium"
    >
      Sales
    </a>
    <a
      href="/teams/retail-ecommerce"
      className="text-sm hover:text-accent-foreground font-medium"
    >
      E-commerce
    </a>
    <a
      href="/teams/content-seo"
      className="text-sm hover:text-accent-foreground font-medium"
    >
      Content & SEO
    </a>
    <a
      href="/teams/agency"
      className="text-sm hover:text-accent-foreground font-medium"
    >
      Agency
    </a>
    <a
      href="/teams/finance"
      className="text-sm hover:text-accent-foreground font-medium"
    >
      Finance
    </a>
    <a
      href="/workflows"
      className="text-sm hover:text-accent-foreground font-medium"
    >
      Browse All Workflows
    </a>
  </div>
);

const MobileIntegrationsMenu = () => (
  <div className="flex flex-col gap-2">
    <a
      href="/integrations/google-analytics"
      className="text-sm hover:text-accent-foreground"
    >
      Google Analytics
    </a>
    <a
      href="/integrations/facebook-ads"
      className="text-sm hover:text-accent-foreground"
    >
      Facebook Ads
    </a>
    <a
      href="/integrations/google-ads"
      className="text-sm hover:text-accent-foreground"
    >
      Google Ads
    </a>
    <a
      href="/integrations/shopify"
      className="text-sm hover:text-accent-foreground"
    >
      Shopify
    </a>
    <a
      href="/integrations/hubspot"
      className="text-sm hover:text-accent-foreground"
    >
      HubSpot
    </a>
    <a
      href="/integrations/stripe"
      className="text-sm hover:text-accent-foreground"
    >
      Stripe
    </a>
    <a
      href="/integrations/salesforce"
      className="text-sm hover:text-accent-foreground"
    >
      Salesforce
    </a>
    <a
      href="/integrations/linkedin-ads"
      className="text-sm hover:text-accent-foreground"
    >
      LinkedIn Ads
    </a>
    <a
      href="/integrations"
      className="text-sm hover:text-accent-foreground font-medium"
    >
      View All Integrations
    </a>
  </div>
);

const MobileTeamsMenu = () => (
  <div className="flex flex-col gap-2">
    <a href="/teams/marketing" className="text-sm hover:text-accent-foreground">
      Marketing
    </a>
    <a href="/teams/sales" className="text-sm hover:text-accent-foreground">
      Sales
    </a>
    <a
      href="/teams/retail-ecommerce"
      className="text-sm hover:text-accent-foreground"
    >
      E-commerce
    </a>
    <a href="/teams/finance" className="text-sm hover:text-accent-foreground">
      Finance
    </a>
    <a
      href="/teams/content-seo"
      className="text-sm hover:text-accent-foreground"
    >
      Content & SEO
    </a>
    <a href="/teams/agency" className="text-sm hover:text-accent-foreground">
      Agency
    </a>
    <a
      href="/teams"
      className="text-sm hover:text-accent-foreground font-medium"
    >
      View All Teams
    </a>
  </div>
);

export { MainNavigation };
