# Standardized Documentation Components

This directory contains reusable components for creating consistent documentation pages across the Datapad docs site.

## Components Overview

### Core Layout Components

- **`DocHeader`** - Standardized page header with badge, title, description, and optional icon
- **`DocSection`** - Consistent section wrapper with title 
- **`DocNavigation`** - Footer navigation between pages

### Content Components

- **`FeatureGrid`** - Grid of feature cards with icons, titles, and descriptions
- **`MetricsGrid`** - Grid displaying categorized metrics lists
- **`ConnectionSteps`** - Step-by-step connection instructions with warnings
- **`PrerequisitesSection`** - Requirements checklist section
- **`AIQueriesSection`** - Example AI queries organized by category
- **`TroubleshootingSection`** - Common issues and solutions
- **`FeatureCapabilities`** - Feature capabilities with examples
- **`QuickStartCard`** - Call-to-action card for getting started
- **`HowItWorks`** - Numbered steps explanation

## Usage Examples

### Integration Page Template

```tsx
import { DocHeader } from "@/components/docs/doc-header";
import { DocSection } from "@/components/docs/doc-section";
import { FeatureGrid } from "@/components/docs/feature-grid";
import { PrerequisitesSection } from "@/components/docs/prerequisites-section";
import { ConnectionSteps } from "@/components/docs/connection-steps";
import { MetricsGrid } from "@/components/docs/metrics-grid";
import { AIQueriesSection } from "@/components/docs/ai-queries-section";
import { TroubleshootingSection } from "@/components/docs/troubleshooting-section";
import { DocNavigation } from "@/components/docs/doc-navigation";

export default function IntegrationPage() {
  const features = [
    {
      icon: IconComponent,
      title: "Feature Title",
      description: "Feature description"
    }
  ];

  const requirements = [
    "Requirement 1",
    "Requirement 2"
  ];

  // ... other data structures

  return (
    <div className="space-y-12">
      <DocHeader
        badge={{ text: "Integration Type" }}
        title="Integration Name"
        description="Integration description"
        icon={<IconComponent />}
      />

      <DocSection title="What You'll Get">
        <FeatureGrid features={features} />
      </DocSection>

      <PrerequisitesSection requirements={requirements} />

      <DocSection title="Connection Steps">
        <ConnectionSteps steps={connectionSteps} />
      </DocSection>

      <DocSection title="Available Metrics">
        <MetricsGrid categories={metricsCategories} />
      </DocSection>

      <AIQueriesSection categories={aiQueryCategories} />

      <TroubleshootingSection items={troubleshootingItems} />

      <DocNavigation
        previousPage={{ href: "/previous", title: "Previous Page" }}
        nextPage={{ href: "/next", title: "Next Page" }}
      />
    </div>
  );
}
```

### Feature Page Template

```tsx
import { DocHeader } from "@/components/docs/doc-header";
import { DocSection } from "@/components/docs/doc-section";
import { FeatureGrid } from "@/components/docs/feature-grid";
import { FeatureCapabilities } from "@/components/docs/feature-capabilities";
import { QuickStartCard } from "@/components/docs/quick-start-card";
import { HowItWorks } from "@/components/docs/how-it-works";

export default function FeaturePage() {
  // ... data structures

  return (
    <div className="space-y-12">
      <DocHeader
        badge={{ text: "Core Feature" }}
        title="Feature Name"
        description="Feature description"
      />

      <QuickStartCard
        features={["Feature 1", "Feature 2"]}
        ctaHref="/app"
      />

      <HowItWorks steps={steps} />

      <FeatureCapabilities capabilities={capabilities} />

      <DocNavigation
        previousPage={{ href: "/previous", title: "Previous Page" }}
        nextPage={{ href: "/next", title: "Next Page" }}
      />
    </div>
  );
}
```

## Design Principles

1. **Consistency** - All pages use the same components and structure
2. **Reusability** - Components are configurable for different use cases
3. **Maintainability** - Easy to update styles and behavior across all docs
4. **Accessibility** - Components follow accessibility best practices
5. **Performance** - Optimized for fast loading and rendering

## File Structure

```
src/components/docs/
├── README.md                     # This documentation
├── doc-header.tsx                # Page header
├── doc-section.tsx               # Section wrapper
├── doc-navigation.tsx            # Footer navigation
├── feature-grid.tsx              # Feature cards grid
├── metrics-grid.tsx              # Metrics display grid
├── connection-steps.tsx          # Step-by-step instructions
├── prerequisites-section.tsx     # Requirements checklist
├── ai-queries-section.tsx        # AI query examples
├── troubleshooting-section.tsx   # Common issues
├── feature-capabilities.tsx      # Feature capabilities
├── quick-start-card.tsx          # CTA card
├── how-it-works.tsx              # Process steps
├── docs-layout.tsx               # Layout wrapper
└── docs-navigation.tsx           # Sidebar navigation
```

## Updating Documentation

To ensure consistency across all documentation:

1. Use the standardized components instead of custom markup
2. Follow the established data structure patterns
3. Maintain consistent section ordering
4. Use the same styling patterns and spacing
5. Include proper navigation between related pages

This approach ensures that all documentation pages have a consistent look, feel, and user experience while being easy to maintain and update.
