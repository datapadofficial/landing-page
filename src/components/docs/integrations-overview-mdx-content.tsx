import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { 
  IntegrationSearch, 
  PopularIntegrations, 
  IntegrationCategories, 
  IntegrationRequest, 
  GettingStartedSteps, 
  GetStartedButton 
} from "@/components/docs/integrations-mdx-components";

interface IntegrationsOverviewMDXContentProps {
  content: string;
}

const components = {
  // Custom components for integrations overview
  IntegrationSearch,
  PopularIntegrations,
  IntegrationCategories,
  IntegrationRequest,
  GettingStartedSteps,
  GetStartedButton,
  
  // Standard HTML elements with proper styling
  h1: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="text-4xl font-bold tracking-tight mb-4" {...props}>{children}</h1>
  ),
  h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-2xl font-semibold mb-4 mt-8" {...props}>{children}</h2>
  ),
  h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-xl font-semibold mb-3 mt-6" {...props}>{children}</h3>
  ),
  h4: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4 className="text-lg font-semibold mb-2 mt-4" {...props}>{children}</h4>
  ),
  h5: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h5 className="text-base font-semibold mb-2 mt-4" {...props}>{children}</h5>
  ),
  h6: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h6 className="text-sm font-semibold mb-2 mt-4" {...props}>{children}</h6>
  ),
  p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-xl text-muted-foreground max-w-3xl mb-4" {...props}>{children}</p>
  ),
  strong: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => <strong {...props}>{children}</strong>,
  em: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => <em {...props}>{children}</em>,
  ul: ({ children, ...props }: React.HTMLAttributes<HTMLUListElement>) => <ul {...props}>{children}</ul>,
  ol: ({ children, ...props }: React.HTMLAttributes<HTMLOListElement>) => <ol {...props}>{children}</ol>,
  li: ({ children, ...props }: React.HTMLAttributes<HTMLLIElement>) => <li {...props}>{children}</li>,
  a: ({ children, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => <a {...props}>{children}</a>,
  blockquote: ({ children, ...props }: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote {...props}>{children}</blockquote>
  ),
  code: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => <code {...props}>{children}</code>,
  pre: ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) => <pre {...props}>{children}</pre>,
  div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div {...props}>{children}</div>,
  svg: ({ children, ...props }: React.SVGAttributes<SVGSVGElement>) => <svg {...props}>{children}</svg>,
  path: ({ ...props }: React.SVGAttributes<SVGPathElement>) => <path {...props} />,
};

export function IntegrationsOverviewMDXContent({ content }: IntegrationsOverviewMDXContentProps) {
  return (
    <div itemProp="articleBody">
      <MDXRemote source={content} components={components} />
    </div>
  );
}
