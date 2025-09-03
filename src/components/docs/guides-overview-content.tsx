"use client";

import { ReactNode } from "react";
import { GuidesOverviewDoc } from "@/types/guide-doc";

interface GuidesOverviewContentProps {
  doc: GuidesOverviewDoc;
  children: ReactNode; // This will be the rendered MDX content
}

export function GuidesOverviewContent({ doc, children }: GuidesOverviewContentProps) {
  return (
    <section className="py-8 sm:py-32 px-4 sm:px-0">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col gap-4 mb-8">
          <h1 className="text-4xl font-bold tracking-tight">
            {doc.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            {doc.description}
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-none">
          <div className="mdx-content">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
