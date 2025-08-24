"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  BookOpen,
  ChevronDown,
  ChevronRight,
  Database,
  Search,
  Mail,
  Zap,
  Command
} from "lucide-react";
import { AnimatedLogo } from "@/components/navigation/aimated-logo/animated-logo";
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";

interface NavItem {
  title: string;
  href?: string;
  icon?: React.ComponentType<{ className?: string }>;
  badge?: string;
  items?: NavItem[];
}

const navigation: NavItem[] = [
  {
    title: "Getting Started",
    icon: BookOpen,
    items: [
      { title: "Introduction", href: "/docs" },
      { title: "Quickstart Guide", href: "/docs/get-started/quickstart" },
      { title: "Core Concepts", href: "/docs/get-started/concepts" },
      { title: "First Dashboard", href: "/docs/get-started/first-dashboard" },
    ],
  },
  {
    title: "Integrations",
    icon: Database,
    items: [
      { title: "Overview", href: "/docs/integrations" },
      {
        title: "Advertising",
        items: [
          { title: "Google Ads", href: "/docs/integrations/google-ads" },
          { title: "Facebook Ads", href: "/docs/integrations/facebook-ads" },
          { title: "LinkedIn Ads", href: "/docs/integrations/linkedin-ads" },
          { title: "TikTok Ads", href: "/docs/integrations/tiktok-ads" },
        ],
      },
      {
        title: "Analytics",
        items: [
          { title: "Google Analytics", href: "/docs/integrations/google-analytics" },
          { title: "Google Search Console", href: "/docs/integrations/google-searchconsole" },
          { title: "Mixpanel", href: "/docs/integrations/mixpanel" },
          { title: "Metabase", href: "/docs/integrations/metabase" },
        ],
      },
      {
        title: "Databases",
        items: [
          { title: "PostgreSQL", href: "/docs/integrations/postgresql" },
          { title: "MongoDB", href: "/docs/integrations/mongodb" },
          { title: "MySQL", href: "/docs/integrations/mysql" },
          { title: "Microsoft SQL Server", href: "/docs/integrations/mssql" },
          { title: "Google BigQuery", href: "/docs/integrations/google-bigquery" },
        ],
      },

      {
        title: "E-commerce",
        items: [
          { title: "Shopify", href: "/docs/integrations/shopify" },
          { title: "Stripe", href: "/docs/integrations/stripe" },
        ],
      },
    ],
  },
  {
    title: "Features",
    icon: Zap,
    items: [
      { title: "Overview", href: "/docs/features" },
      { title: "AI Chat", href: "/docs/features/ai-chat" },
      { title: "Dashboards", href: "/docs/features/dashboards" },
      { title: "Workflows", href: "/docs/features/workflows" },
      { title: "Natural Language Queries", href: "/docs/features/natural-language-queries" },
      { title: "Text-to-SQL & Python", href: "/docs/features/text-to-sql-python" },
      { title: "Voice Mode", href: "/docs/features/voice-mode" },
      { title: "Shareable Reports", href: "/docs/features/shareable-reports" },
      { title: "Data Blending", href: "/docs/features/data-blending" },
      { title: "Multi-Model AI", href: "/docs/features/multi-model-ai" },
    ],
  },
  {
    title: "Guides",
    icon: BookOpen,
    items: [
      { title: "Writing Effective Queries", href: "/docs/guides/effective-queries" },
      { title: "Dashboard Best Practices", href: "/docs/guides/dashboard-best-practices" },
      { title: "Data Security", href: "/docs/guides/data-security" },
      { title: "Team Collaboration", href: "/docs/guides/team-collaboration" },
    ],
  },
];

function NavigationItem({ item, level = 0 }: { item: NavItem; level?: number }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(
    item.items ? item.items.some(subItem => 
      subItem.href === pathname || 
      (subItem.items && subItem.items.some(nestedItem => nestedItem.href === pathname))
    ) : false
  );

  const hasItems = item.items && item.items.length > 0;
  const isActive = item.href === pathname;
  
  if (hasItems) {
    return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <Button
            variant="ghost"
            className={cn(
              "w-full justify-start gap-2 h-auto py-1.5 px-3 font-normal text-sm hover:bg-muted/50",
              level > 0 && "ml-4 text-muted-foreground"
            )}
          >
            {item.icon && <item.icon className="h-4 w-4 shrink-0" />}
            <span className="truncate">{item.title}</span>
            {item.badge && (
              <Badge variant="secondary" className="ml-auto text-xs">
                {item.badge}
              </Badge>
            )}
            {isOpen ? (
              <ChevronDown className="h-3 w-3 ml-auto shrink-0" />
            ) : (
              <ChevronRight className="h-3 w-3 ml-auto shrink-0" />
            )}
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-1">
          {item.items?.map((subItem) => (
            <NavigationItem 
              key={subItem.title} 
              item={subItem} 
              level={level + 1} 
            />
          ))}
        </CollapsibleContent>
      </Collapsible>
    );
  }

  return (
    <Button
      asChild
      variant="ghost"
      className={cn(
        "w-full justify-start gap-2 h-auto py-1.5 px-3 font-normal text-sm hover:bg-muted/50",
        level > 0 && "ml-4",
        level > 1 && "ml-8 text-muted-foreground",
        isActive && "bg-muted text-foreground font-medium"
      )}
    >
      <Link href={item.href!}>
        {item.icon && <item.icon className="h-4 w-4 shrink-0" />}
        <span className="truncate">{item.title}</span>
        {item.badge && (
          <Badge variant="secondary" className="ml-auto text-xs">
            {item.badge}
          </Badge>
        )}
      </Link>
    </Button>
  );
}

export function DocsNavigation() {
  const [searchValue, setSearchValue] = useState("");

  // Flatten all navigation items for search
  const allNavItems = useMemo(() => {
    const flattenItems = (items: NavItem[], parentTitle?: string): Array<NavItem & { fullPath: string }> => {
      const result: Array<NavItem & { fullPath: string }> = [];
      items.forEach(item => {
        if (item.href) {
          result.push({
            ...item,
            fullPath: parentTitle ? `${parentTitle} > ${item.title}` : item.title
          });
        }
        if (item.items) {
          result.push(...flattenItems(item.items, item.title));
        }
      });
      return result;
    };
    return flattenItems(navigation);
  }, []);

  // Filter navigation items based on search
  const filteredNavItems = useMemo(() => {
    if (!searchValue.trim()) return null;
    
    return allNavItems.filter(item =>
      item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.fullPath.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [searchValue, allNavItems]);

  return (
    <aside className="fixed left-0 top-0 w-80 h-screen border-r border-border bg-background flex flex-col">
      {/* Header with Brand and Theme Toggle */}
      <div className="flex items-center justify-between p-6 border-b border-border">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <AnimatedLogo isActive={false} className="w-5 h-5" />
          <span className="text-xl font-medium tracking-tight font-poppins">
            datapad
          </span>
        </Link>
        <AnimatedThemeToggler className="p-2 hover:bg-muted rounded-md transition-colors" />
      </div>

      {/* Search */}
      <div className="p-6 border-b border-border">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Command className="absolute right-3 top-1/2 transform -translate-y-1/2 h-3 w-3 text-muted-foreground" />
          <Input
            placeholder="Search..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="pl-10 pr-8 bg-muted/50 border-muted-foreground/20 focus:border-primary"
          />
        </div>
      </div>

      {/* Navigation Content */}
      <ScrollArea className="flex-1 px-6">
        <div className="space-y-1 py-4">
          {filteredNavItems ? (
            // Show search results
            filteredNavItems.length > 0 ? (
              <>
                <div className="text-xs text-muted-foreground mb-3 px-3">
                  {filteredNavItems.length} result{filteredNavItems.length !== 1 ? 's' : ''} found
                </div>
                {filteredNavItems.map((item) => (
                  <Button
                    key={item.href}
                    asChild
                    variant="ghost"
                    className="w-full justify-start gap-2 h-auto py-1.5 px-3 font-normal text-sm hover:bg-muted/50"
                    onClick={() => setSearchValue("")}
                  >
                    <Link href={item.href!}>
                      {item.icon && <item.icon className="h-4 w-4 shrink-0" />}
                      <div className="flex flex-col items-start">
                        <span className="truncate">{item.title}</span>
                        <span className="text-xs text-muted-foreground truncate">{item.fullPath}</span>
                      </div>
                    </Link>
                  </Button>
                ))}
              </>
            ) : (
              <div className="text-sm text-muted-foreground px-3 py-8 text-center">
                No results found for "{searchValue}"
              </div>
            )
          ) : (
            // Show normal navigation
            navigation.map((item) => (
              <NavigationItem key={item.title} item={item} />
            ))
          )}
        </div>
      </ScrollArea>

      {/* Support Link */}
      <div className="p-6 border-t border-border">
        <Button
          asChild
          variant="ghost"
          className="w-full justify-start gap-2 h-auto py-2 px-3 font-normal text-sm hover:bg-muted/50"
        >
          <Link href="mailto:hello@datapad.io">
            <Mail className="h-4 w-4 shrink-0" />
            <span>Support</span>
          </Link>
        </Button>
      </div>
    </aside>
  );
}
