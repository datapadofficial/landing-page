"use client";

import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { GuidesOverviewMDXComponents } from "./guides-mdx-components";

interface GuidesOverviewMDXContentProps {
  content: string;
}

export function GuidesOverviewMDXContent({ content }: GuidesOverviewMDXContentProps) {
  const components = GuidesOverviewMDXComponents();

  return (
    <div className="mdx-content">
      <MDXRemote source={content} components={components} />
    </div>
  );
}
