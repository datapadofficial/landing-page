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
