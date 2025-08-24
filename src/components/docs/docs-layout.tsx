"use client";

import { Button } from "@/components/ui/button";
import { Edit, ExternalLink } from "lucide-react";
import Link from "next/link";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export function DocsLayout({ children }: DocsLayoutProps) {

  // Table of contents could be generated from headings in the content
  const tableOfContents = [
    { title: "Overview", href: "#overview" },
    { title: "Getting Started", href: "#getting-started" },
    { title: "Examples", href: "#examples" },
    { title: "Best Practices", href: "#best-practices" },
  ];

  return (
    <div className="flex-1 ml-80">
      <div className="max-w-6xl mx-auto">
        <div className="flex">
          {/* Main Content */}
          <main className="flex-1 py-8 px-8">
            <div className="max-w-4xl mx-auto">
              {children}
              


              {/* Help Section */}
              <div className="mt-8 p-6 rounded-lg border border-border bg-muted/30">
                <h3 className="font-semibold mb-2">Need help?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Can't find what you're looking for? Our support team is here to help.
                </p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <Link href="mailto:hello@datapad.io">
                      Contact Support
                    </Link>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <Link href="https://github.com/datapad/docs" target="_blank" className="gap-2">
                      <Edit className="h-3 w-3" />
                      Edit this page
                      <ExternalLink className="h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </main>

          {/* Table of Contents - Desktop Only */}
          <aside className="hidden xl:block w-64 shrink-0 py-8 pr-8">
            <div className="sticky top-8">
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-foreground">On this page</h4>
                <nav className="space-y-2">
                  {tableOfContents.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1 border-l-2 border-transparent hover:border-primary pl-3"
                    >
                      {item.title}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
