"use client";

import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatedLogo } from "@/components/navigation/aimated-logo/animated-logo";
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";
import { ProductSubmenu } from "@/components/navigation/product-submenu";
import { getAllFeatures } from "@/lib/feature-utils";

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
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { AttributionLink } from "@/components/attribution-link";

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
            <Link href="/" className="flex w-fit items-center gap-2">
              <AnimatedLogo isActive={false} className="w-5 h-5" />
              <span className="text-xl font-medium tracking-tight font-poppins">
                datapad
              </span>
            </Link>
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
                {/* <WorkflowsSubmenu /> */}

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

                {/* Docs */}
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/docs"
                    className="bg-background hover:bg-muted hover:text-accent-foreground group inline-flex h-8 w-max items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition-colors"
                  >
                    Docs
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Security */}
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/security"
                    className="bg-background hover:bg-muted hover:text-accent-foreground group inline-flex h-8 w-max items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition-colors"
                  >
                    Security
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
              <AttributionLink buttonLocation="header-signin">
                Sign In
              </AttributionLink>
            </Button>
            <Button asChild size="sm">
              <AttributionLink buttonLocation="header-signup">
                Sign up
              </AttributionLink>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <AnimatedLogo isActive={false} className="w-5 h-5" />
            </Link>
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
                      <Link
                        href="/"
                        className="flex items-center gap-2 font-medium text-lg"
                      >
                        Menu
                      </Link>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-6 p-4">
                    <Accordion
                      type="single"
                      collapsible
                      className="flex w-full flex-col gap-4"
                    >
                      {/* Home */}
                      <Link href="/" className="text-md font-semibold">
                        Home
                      </Link>

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
                      <Link href="/pricing" className="text-md font-semibold">
                        Pricing
                      </Link>

                      {/* Blog */}
                      <Link href="/blog" className="text-md font-semibold">
                        Blog
                      </Link>

                      {/* Docs */}
                      <Link href="/docs" className="text-md font-semibold">
                        Docs
                      </Link>

                      {/* Security */}
                      <Link href="/security" className="text-md font-semibold">
                        Security
                      </Link>
                    </Accordion>

                    <div className="flex flex-col gap-3">
                      <Button asChild variant="outline">
                        <AttributionLink buttonLocation="mobile-signin">
                          Sign In
                        </AttributionLink>
                      </Button>
                      <Button asChild>
                        <AttributionLink buttonLocation="mobile-signup">
                          Sign up
                        </AttributionLink>
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
const MobileProductMenu = () => {
  const features = getAllFeatures();
  // Get first 11 features for the mobile menu, plus "View All Features" link
  const featuresForMenu = features.slice(0, 11);

  return (
    <div className="flex flex-col gap-2">
      {featuresForMenu.map((feature) => (
        <Link
          key={feature.slug}
          href={feature.redirectUrl || `/features/${feature.slug}`}
          className="text-sm hover:text-accent-foreground"
        >
          {feature.title}
        </Link>
      ))}
      <Link
        href="/features"
        className="text-sm hover:text-accent-foreground font-medium"
      >
        View All Features
      </Link>
    </div>
  );
};

const MobileWorkflowsMenu = () => (
  <div className="flex flex-col gap-2">
    <Link
      href="/teams/marketing"
      className="text-sm hover:text-accent-foreground font-medium"
    >
      Marketing
    </Link>
    <Link
      href="/teams/sales"
      className="text-sm hover:text-accent-foreground font-medium"
    >
      Sales
    </Link>
    <Link
      href="/teams/retail-ecommerce"
      className="text-sm hover:text-accent-foreground font-medium"
    >
      E-commerce
    </Link>
    <Link
      href="/teams/content-seo"
      className="text-sm hover:text-accent-foreground font-medium"
    >
      Content & SEO
    </Link>
    <Link
      href="/teams/agency"
      className="text-sm hover:text-accent-foreground font-medium"
    >
      Agency
    </Link>
    <Link
      href="/teams/finance"
      className="text-sm hover:text-accent-foreground font-medium"
    >
      Finance
    </Link>
    <Link
      href="/workflows"
      className="text-sm hover:text-accent-foreground font-medium"
    >
      Browse All Workflows
    </Link>
  </div>
);

const MobileIntegrationsMenu = () => (
  <div className="flex flex-col gap-2">
    <Link
      href="/integrations/google-analytics"
      className="text-sm hover:text-accent-foreground"
    >
      Google Analytics
    </Link>
    <Link
      href="/integrations/facebook-ads"
      className="text-sm hover:text-accent-foreground"
    >
      Facebook Ads
    </Link>
    <Link
      href="/integrations/google-ads"
      className="text-sm hover:text-accent-foreground"
    >
      Google Ads
    </Link>
    <Link
      href="/integrations/shopify"
      className="text-sm hover:text-accent-foreground"
    >
      Shopify
    </Link>
    <Link
      href="/integrations/hubspot"
      className="text-sm hover:text-accent-foreground"
    >
      HubSpot
    </Link>
    <Link
      href="/integrations/stripe"
      className="text-sm hover:text-accent-foreground"
    >
      Stripe
    </Link>
    <Link
      href="/integrations/salesforce"
      className="text-sm hover:text-accent-foreground"
    >
      Salesforce
    </Link>
    <Link
      href="/integrations/linkedin-ads"
      className="text-sm hover:text-accent-foreground"
    >
      LinkedIn Ads
    </Link>
    <Link
      href="/integrations"
      className="text-sm hover:text-accent-foreground font-medium"
    >
      View All Integrations
    </Link>
  </div>
);

const MobileTeamsMenu = () => (
  <div className="flex flex-col gap-2">
    <Link
      href="/teams/marketing"
      className="text-sm hover:text-accent-foreground"
    >
      Marketing
    </Link>
    <Link href="/teams/sales" className="text-sm hover:text-accent-foreground">
      Sales
    </Link>
    <Link
      href="/teams/retail-ecommerce"
      className="text-sm hover:text-accent-foreground"
    >
      E-commerce
    </Link>
    <Link
      href="/teams/finance"
      className="text-sm hover:text-accent-foreground"
    >
      Finance
    </Link>
    <Link
      href="/teams/content-seo"
      className="text-sm hover:text-accent-foreground"
    >
      Content & SEO
    </Link>
    <Link href="/teams/agency" className="text-sm hover:text-accent-foreground">
      Agency
    </Link>
    <Link
      href="/teams"
      className="text-sm hover:text-accent-foreground font-medium"
    >
      View All Teams
    </Link>
  </div>
);

export { MainNavigation };
