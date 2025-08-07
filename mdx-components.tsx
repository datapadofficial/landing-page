import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Let prose-optimized styles handle most components, only override when necessary

    // Custom list item component for special bullet types
    li: ({ children, ...props }) => <li {...props}>{children}</li>,

    // Helper components for special bullet types
    FeatureItem: ({ children }) => <li data-type="feature">{children}</li>,
    StepItem: ({ children }) => <li data-type="step">{children}</li>,
    TipItem: ({ children }) => <li data-type="tip">{children}</li>,
    WarningItem: ({ children }) => <li data-type="warning">{children}</li>,
    SuccessItem: ({ children }) => <li data-type="success">{children}</li>,
    InfoItem: ({ children }) => <li data-type="info">{children}</li>,
    RocketItem: ({ children }) => <li data-type="rocket">{children}</li>,
    ChartItem: ({ children }) => <li data-type="chart">{children}</li>,

    ...components,
  };
}
