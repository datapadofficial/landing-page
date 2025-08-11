# Content Management System

A unified system for managing Features, Integrations, Recipes, and Categories with TypeScript configs and template-based pages.

## Architecture Overview

```
📁 Content Types
├── 🎯 Features (existing) - Product features and capabilities
├── 🔌 Integrations - Data source connections (70% template + 30% custom)
├── 📝 Recipes - Analytics templates (90% programmatic)
└── 📂 Categories - Content organization (manual pages with components)

📁 Relationships
├── Categories → Integrations (featured integrations)
├── Categories → Features (featured features)
├── Integrations → Recipes (recipes using integration)
└── Recipes → Integrations (integrations used in recipe)
```

## File Structure

```
src/
├── lib/
│   ├── features.ts          # Existing feature system
│   ├── integrations.ts      # Integration definitions
│   ├── recipes.ts           # Recipe definitions (generated from CSV)
│   └── categories.ts        # Category definitions
├── app/
│   ├── features/[feature]/page.tsx      # Existing feature pages
│   ├── integrations/[slug]/page.tsx     # Integration pages (template + custom)
│   ├── recipes/[slug]/page.tsx          # Recipe pages (90% programmatic)
│   └── categories/[category]/page.tsx   # Category pages (manual)
├── components/
│   ├── templates/
│   │   ├── integration-page-template.tsx
│   │   └── recipe-page-template.tsx
│   ├── integrations/
│   │   └── [integration-id]/page.tsx    # Custom integration pages
│   └── category/
│       ├── category-hero.tsx
│       ├── category-integrations.tsx
│       ├── category-features.tsx
│       ├── category-recipes.tsx
│       └── category-cta.tsx
└── scripts/
    ├── parse-recipes-csv.ts     # Generate recipes from CSV
    ├── create-recipe.ts         # Quick recipe creation
    └── create-integration.ts    # Quick integration creation
```

## Usage Guide

### 1. Managing Recipes

#### From CSV (Bulk Import)

```bash
# Parse existing CSV to TypeScript
npm run parse:recipes
```

#### Quick Creation

```bash
# Create a new recipe
npm run create:recipe "TikTok Ads Performance Analysis" --category=marketing --integrations=tiktok-ads,google-analytics

# Creates:
# - Entry in src/lib/recipes.ts
# - Accessible at /recipes/tiktok-ads-performance-analysis
```

#### Manual Addition

Edit `src/lib/recipes.ts` and add to the recipes array:

```typescript
{
  id: "RCP-100",
  slug: "custom-analysis",
  title: "Custom Analysis Recipe",
  description: "Analyze custom metrics...",
  category: "marketing",
  integrations: ["facebook-ads", "google-analytics"],
  difficulty: "intermediate",
  estimatedTime: "15 minutes",
  prompt: "How is my custom analysis performing?",
  mockData: "custom_analysis_mock.csv"
}
```

### 2. Managing Integrations

#### Quick Creation

```bash
# Create basic integration
npm run create:integration twitter-ads --category=advertising

# Create with custom page
npm run create:integration shopify-plus --category=ecommerce --custom-page
```

#### Custom Integration Pages (30% custom content)

For integrations needing custom components:

1. Create: `src/components/integrations/[integration-id]/page.tsx`
2. Export default component that uses `IntegrationPageTemplate`
3. Add custom content via `customContent` prop

Example:

```typescript
export default function FacebookAdsPage({ integration, recipes }) {
  return (
    <IntegrationPageTemplate
      integration={integration}
      recipes={recipes}
      customContent={
        <>
          <CustomROICalculator />
          <CustomBestPractices />
        </>
      }
    />
  );
}
```

### 3. Managing Categories

Categories are manually created pages using reusable components:

```typescript
// src/app/categories/[category]/page.tsx
export default function CategoryPage() {
  return (
    <>
      <CategoryHero category={category} customContent={<CustomHero />} />
      <CategoryIntegrations category={category} integrations={integrations} />
      <CategoryFeatures category={category} features={features} />
      <CategoryRecipes category={category} recipes={recipes} />
      <CategoryCTA category={category} customContent={<CustomCTA />} />
    </>
  );
}
```

### 4. Managing Features

Features use the existing system in `src/lib/features.ts`. No changes needed.

## URL Structure

```
/features                        # Feature listing page (existing)
/features/[feature]              # Individual feature pages (existing)
/integrations                    # Integration listing page
/integrations/[slug]             # Individual integration pages
/recipes                         # Recipe listing page
/recipes/[slug]                  # Individual recipe pages
/categories                      # Category listing page
/categories/[category]           # Individual category pages
```

## Page Types & Customization

### Recipe Pages (90% Programmatic)

- **Template**: `RecipePageTemplate` handles all standard recipes
- **Custom**: Rare, create `src/components/recipes/[slug]/page.tsx` if needed
- **Content**: Driven by data in `src/lib/recipes.ts`

### Integration Pages (70% Template + 30% Custom)

- **Template**: `IntegrationPageTemplate` handles standard layout
- **Custom**: Create `src/components/integrations/[id]/page.tsx` for custom content
- **SEO Content**: Markdown strings in integration config
- **Custom Components**: Added via `customContent` prop

### Category Pages (Manual with Components)

- **Structure**: Manually created pages using reusable components
- **Components**: `CategoryHero`, `CategoryIntegrations`, etc.
- **Flexibility**: Full control over layout and custom sections

### Feature Pages (50% Custom)

- **Existing**: Uses current feature system
- **Custom**: Many have custom pages in feature directories

## Development Workflow

### Adding New Recipe

```bash
npm run create:recipe "New Recipe Name" --category=marketing --integrations=facebook-ads,google-ads
```

### Adding New Integration

```bash
# Basic integration
npm run create:integration new-platform --category=advertising

# With custom page
npm run create:integration new-platform --category=advertising --custom-page
```

### Adding New Category

1. Add category to `src/lib/categories.ts`
2. Create `src/app/categories/[category]/page.tsx`
3. Use category components for consistent structure

### Bulk Recipe Import

1. Update `content/csv/recipes.csv`
2. Run `npm run parse:recipes`
3. Review generated `src/lib/recipes.ts`

## SEO & Performance

- **Static Generation**: All pages use `generateStaticParams`
- **SEO Metadata**: Comprehensive meta tags and Open Graph
- **Performance**: Template-based approach reduces bundle size
- **Caching**: React cache functions prevent re-reading files

## Key Benefits

1. **Speed**: Vibe-code new content in seconds
2. **Consistency**: Template system ensures uniform experience
3. **Flexibility**: Custom overrides when needed
4. **SEO**: Built-in SEO optimization
5. **Scale**: Easy to add hundreds of recipes/integrations
6. **Maintainability**: TypeScript configs vs scattered files

## Examples

- **Recipe Listing**: `/recipes` (main recipes page)
- **Individual Recipe**: `/recipes/cross-channel-marketing-roi-analysis`
- **Integration Listing**: `/integrations` (main integrations page)
- **Individual Integration**: `/integrations/facebook-ads` (custom page)
- **Individual Integration**: `/integrations/google-analytics` (template)
- **Category Listing**: `/categories` (main categories page)
- **Individual Category**: `/categories/marketing` (manual with components)
- **Feature**: `/features/ai-data-agent` (existing system)
