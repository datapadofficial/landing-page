import type { Metadata } from "next";
import { DocsNavigation } from "@/components/docs/docs-navigation";
import { DocsLayout } from "@/components/docs/docs-layout";

export const metadata: Metadata = {
  title: {
    default: "Documentation - Datapad",
    template: "%s | Datapad Docs",
  },
  description:
    "Complete documentation for Datapad - your 100% autonomous AI data analyst. Learn how to connect integrations, create reports, and get the most out of your data.",
  keywords: [
    "Datapad documentation",
    "AI data analyst guide",
    "data integration tutorial",
    "business intelligence docs",
    "natural language analytics",
  ],
};

export default function DocsRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-background">
      <DocsNavigation />
      <DocsLayout>{children}</DocsLayout>
    </div>
  );
}
