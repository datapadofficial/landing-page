import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import {
  FeaturesHero,
  FeaturesGrid,
  FeaturesComparison,
  FeaturesCTA,
} from "./features-mdx-components";
import remarkGfm from "remark-gfm";

interface FeaturesOverviewMDXContentProps {
  content: string;
}

export function FeaturesOverviewMDXContent({
  content,
}: FeaturesOverviewMDXContentProps) {
  const components = {
    // Standard HTML elements with explicit typing
    h1: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h1 className="text-4xl font-bold tracking-tight mb-6" {...props}>
        {children}
      </h1>
    ),
    h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h2 className="text-3xl font-semibold tracking-tight mb-4" {...props}>
        {children}
      </h2>
    ),
    h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h3 className="text-2xl font-semibold mb-3" {...props}>
        {children}
      </h3>
    ),
    p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
      <p
        className="text-lg text-muted-foreground mb-4 leading-relaxed"
        {...props}
      >
        {children}
      </p>
    ),

    // Custom components for features overview page
    FeaturesHero,
    FeaturesGrid,
    FeaturesComparison,
    FeaturesCTA,
  };

  return (
    <MDXRemote
      source={content}
      components={components}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [],
        },
      }}
    />
  );
}
