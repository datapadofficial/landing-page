"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { ExternalLink } from "lucide-react";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="flex-1 ml-80">
      <main className="py-8 px-8">
        <div className="max-w-4xl mx-auto">
          {children}
          
          {/* Help Section */}
          <div className="mt-12">
            <Card className="bg-gradient-to-r from-primary/5 to-blue-500/5 border-primary/20">
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
                <CardDescription>
                  Our team is here to help you set up your integrations successfully
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  <Button asChild variant="outline">
                    <Link href="mailto:hello@datapad.io?subject=Integration Help">
                      Contact Support
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="https://calendly.com/cem-ruso/datapad-initial-call-15m" target="_blank" className="gap-2">
                      Book Database Setup Call <ExternalLink className="h-3 w-3" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/docs/guides/data-security">
                      Security Guide
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
