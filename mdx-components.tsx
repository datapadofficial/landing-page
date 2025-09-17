import React from "react";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Basic HTML elements
    h1: ({ children, ...props }) => <h1 {...props}>{children}</h1>,
    h2: ({ children, ...props }) => <h2 {...props}>{children}</h2>,
    h3: ({ children, ...props }) => <h3 {...props}>{children}</h3>,
    h4: ({ children, ...props }) => <h4 {...props}>{children}</h4>,
    h5: ({ children, ...props }) => <h5 {...props}>{children}</h5>,
    h6: ({ children, ...props }) => <h6 {...props}>{children}</h6>,
    p: ({ children, ...props }) => <p {...props}>{children}</p>,
    strong: ({ children, ...props }) => <strong {...props}>{children}</strong>,
    em: ({ children, ...props }) => <em {...props}>{children}</em>,
    ul: ({ children, ...props }) => <ul {...props}>{children}</ul>,
    ol: ({ children, ...props }) => <ol {...props}>{children}</ol>,
    li: ({ children, ...props }) => <li {...props}>{children}</li>,
    a: ({ children, ...props }) => <a {...props}>{children}</a>,
    blockquote: ({ children, ...props }) => (
      <blockquote {...props}>{children}</blockquote>
    ),
    code: ({ children, ...props }) => <code {...props}>{children}</code>,
    pre: ({ children, ...props }) => <pre {...props}>{children}</pre>,
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
    svg: ({ children, ...props }) => <svg {...props}>{children}</svg>,
    path: ({ ...props }) => <path {...props} />,

    // Table elements for markdown table support
    table: ({ children, ...props }) => (
      <div className="overflow-x-auto my-6">
        <table
          className="min-w-full border-collapse border border-gray-300 dark:border-gray-600"
          {...props}
        >
          {children}
        </table>
      </div>
    ),
    thead: ({ children, ...props }) => (
      <thead className="bg-gray-50 dark:bg-gray-800" {...props}>
        {children}
      </thead>
    ),
    tbody: ({ children, ...props }) => <tbody {...props}>{children}</tbody>,
    tr: ({ children, ...props }) => <tr {...props}>{children}</tr>,
    th: ({ children, ...props }) => (
      <th
        className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left font-semibold bg-gray-100 dark:bg-gray-700"
        {...props}
      >
        {children}
      </th>
    ),
    td: ({ children, ...props }) => (
      <td
        className="border border-gray-300 dark:border-gray-600 px-4 py-2"
        {...props}
      >
        {children}
      </td>
    ),

    // Helper components for special bullet types
    FeatureItem: ({ children }) => <li data-type="feature">{children}</li>,
    StepItem: ({ children, title }) => (
      <div className="step-item mb-4 pb-4 rounded-lg border bg-muted/20 text-center justify-center">
        {title && (
          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">
            {title}
          </h4>
        )}
        <div>{children}</div>
      </div>
    ),
    TipItem: ({ children }) => <li data-type="tip">{children}</li>,
    WarningItem: ({ children }) => <li data-type="warning">{children}</li>,
    SuccessItem: ({ children }) => <li data-type="success">{children}</li>,
    RocketItem: ({ children }) => <li data-type="rocket">{children}</li>,
    ChartItem: ({ children }) => <li data-type="chart">{children}</li>,

    // Guide-specific components
    FeatureGrid: ({ children }) => (
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
        {React.Children.map(children, (child, index) => (
          <React.Fragment key={index}>{child}</React.Fragment>
        ))}
      </div>
    ),
    FeatureCard: ({ icon, title, description }) => (
      <div className="p-4 rounded-lg border bg-muted/20">
        <div className="flex items-center gap-2 mb-2">
          <div className="h-4 w-4 text-primary" />
          <h4 className="font-medium">{title}</h4>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    ),

    ...components,
  };
}
