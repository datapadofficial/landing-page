"use client";

import { Book, Menu, Sunset, Trees, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatedLogo } from "@/components/navigation/aimated-logo/animated-logo";
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";

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

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  auth?: {
    login: {
      title: string;
      url: string;
    };
    signup: {
      title: string;
      url: string;
    };
  };
}

const MainNavigation = ({
  logo = {
    url: "/",
    src: "/logo.png",
    alt: "logo",
    title: "datapad",
  },
  menu = [
    { title: "Home", url: "/" },
    {
      title: "Product",
      url: "/features",
      items: [
        {
          title: "AI Data Agent",
          description: "Talk to your data like a human analyst",
          icon: <Zap className="size-5 shrink-0" />,
          url: "/features/ai-data-agent",
        },
        {
          title: "Generative Dashboards",
          description: "AI creates custom dashboards automatically",
          icon: <Book className="size-5 shrink-0" />,
          url: "/features/generative-dashboards",
        },
        {
          title: "Text2SQL & Python",
          description: "Convert natural language to executable code",
          icon: <Trees className="size-5 shrink-0" />,
          url: "/features/text-to-sql-python",
        },
        {
          title: "View All Features",
          description: "Explore all AI-powered features",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "/features",
        },
      ],
    },
    {
      title: "Workflows",
      url: "/workflows",
      items: [
        {
          title: "Marketing Analytics",
          description: "Campaign performance and ROI analysis workflows",
          icon: <Zap className="size-5 shrink-0" />,
          url: "/teams/marketing",
        },
        {
          title: "Sales Analytics",
          description: "Sales performance and pipeline tracking workflows",
          icon: <Trees className="size-5 shrink-0" />,
          url: "/teams/sales",
        },
        {
          title: "E-commerce Analytics",
          description: "Online store performance and optimization workflows",
          icon: <Book className="size-5 shrink-0" />,
          url: "/teams/retail-ecommerce",
        },
        {
          title: "Browse All Workflows",
          description: "View all 50+ ready-to-use analytics workflows",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "/workflows",
        },
      ],
    },
    {
      title: "Integrations",
      url: "/integrations",
      items: [
        {
          title: "Google Analytics",
          description: "Web analytics and user behavior tracking",
          icon: <Book className="size-5 shrink-0" />,
          url: "/integrations/google-analytics",
        },
        {
          title: "Facebook Ads",
          description: "Social media advertising performance",
          icon: <Zap className="size-5 shrink-0" />,
          url: "/integrations/facebook-ads",
        },
        {
          title: "Shopify",
          description: "E-commerce platform data integration",
          icon: <Trees className="size-5 shrink-0" />,
          url: "/integrations/shopify",
        },
        {
          title: "View All Integrations",
          description: "Browse all 50+ data source connections",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "/integrations",
        },
      ],
    },
    {
      title: "Teams",
      url: "/teams",
      items: [
        {
          title: "Marketing",
          description: "Campaign performance and ROI analysis",
          icon: <Zap className="size-5 shrink-0" />,
          url: "/teams/marketing",
        },
        {
          title: "Sales",
          description: "Sales performance and pipeline tracking",
          icon: <Trees className="size-5 shrink-0" />,
          url: "/teams/sales",
        },
        {
          title: "E-commerce",
          description: "Online store performance and optimization",
          icon: <Book className="size-5 shrink-0" />,
          url: "/teams/retail-ecommerce",
        },
        {
          title: "Finance",
          description: "Financial performance and cash flow analysis",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "/teams/finance",
        },
        {
          title: "View All Teams",
          description: "Browse solutions for all business teams",
          icon: <Book className="size-5 shrink-0" />,
          url: "/teams",
        },
      ],
    },
    {
      title: "Pricing",
      url: "/pricing",
    },
    {
      title: "Blog",
      url: "/blog",
    },
  ],
  auth = {
    login: { title: "Sign In", url: "https://app.datapad.io" },
    signup: { title: "Sign up", url: "https://app.datapad.io" },
  },
}: Navbar1Props) => {
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
            <a href={logo.url} className="flex w-fit items-center gap-2">
              <AnimatedLogo isActive={false} className="w-5 h-5" />
              <span className="text-xl font-medium tracking-tight font-poppins">
                {logo.title}
              </span>
            </a>
          </div>
          <div className="flex items-center">
            <NavigationMenu>
              <NavigationMenuList>
                {menu.map((item) => renderMenuItem(item))}
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
              <a href={auth.login.url}>{auth.login.title}</a>
            </Button>
            <Button asChild size="sm">
              <a href={auth.signup.url}>{auth.signup.title}</a>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href={logo.url} className="flex items-center gap-2">
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
                        href={logo.url}
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
                      {menu.map((item) => renderMobileMenuItem(item))}
                    </Accordion>

                    <div className="flex flex-col gap-3">
                      <Button asChild variant="outline">
                        <a href={auth.login.url}>{auth.login.title}</a>
                      </Button>
                      <Button asChild>
                        <a href={auth.signup.url}>{auth.signup.title}</a>
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

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] place-items-center">
            {item.items.map((subItem) => (
              <SubMenuLink key={subItem.title} item={subItem} />
            ))}
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className="bg-background hover:bg-muted hover:text-accent-foreground group inline-flex h-8 w-max items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition-colors"
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a key={item.title} href={item.url} className="text-md font-semibold">
      {item.title}
    </a>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <a
      className="hover:bg-muted hover:text-accent-foreground flex select-none flex-row gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors"
      href={item.url}
    >
      <div className="text-foreground">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-muted-foreground text-sm leading-snug">
            {item.description}
          </p>
        )}
      </div>
    </a>
  );
};

export { MainNavigation };
