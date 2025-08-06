# Datapad Landing Page - Modern Next.js 15 Project Plan

## 🎯 Project Overview

Building a modern, high-performance landing page for Datapad using the latest Next.js 15 with cutting-edge best practices from 2024/2025.

## 🚀 Technology Stack

### Core Framework

- **Next.js 15** (Latest version with App Router)
- **React 19** (Latest with concurrent features)
- **TypeScript** (Latest for type safety)

### UI & Design System

- **shadcn/ui v2** (Latest component library)
- **Tailwind CSS v4** (No config needed - inline theming)
- **shadcn blocks** for rapid page generation
- **Lucide React** for icons
- **next-themes** for dark mode support

### Content & Blog System

- **MDX with @next/mdx** (Native Next.js 15 support)
- **@mdx-js/react** for component integration
- **gray-matter** for frontmatter parsing
- **remark-gfm** for GitHub flavored markdown
- **rehype-slug** and **rehype-autolink-headings** for SEO

### SEO & Performance

- **Next.js 15 Partial Prerendering (PPR)** - Revolutionary performance
- **Server Components by default** - Better SEO
- **Dynamic metadata generation**
- **Automatic sitemap generation**
- **Built-in SEO optimizations**

### Development Tools

- **Biome** (Modern alternative to ESLint/Prettier)
- **Husky** for git hooks
- **TypeScript strict mode**
- **Path aliases** (@/ for src)

## 📁 Project Structure (Based on Current Datapad Website)

```
landing-page/
├── app/                          # Next.js 15 App Router
│   ├── (marketing)/             # Route groups for marketing pages
│   │   ├── page.tsx             # Home/Landing page
│   │   ├── features/            # Features page
│   │   ├── pricing/             # Pricing page
│   │   ├── careers/             # Careers page
│   │   └── contact/             # Contact page
│   ├── blog/                    # MDX Blog system
│   │   ├── page.tsx             # Blog index
│   │   └── [slug]/              # Dynamic blog posts
│   ├── legal/                   # Legal pages
│   │   ├── privacy-policy/      # Privacy policy
│   │   ├── terms-of-service/    # Terms of service
│   │   └── data-security/       # Data security
│   ├── kitchen-sink/            # Component showcase
│   │   └── page.tsx
│   ├── login/                   # Login page
│   ├── globals.css              # Global styles with Tailwind v4
│   ├── layout.tsx               # Root layout
│   └── sitemap.ts               # Dynamic sitemap
├── components/
│   ├── ui/                      # shadcn/ui components
│   ├── blocks/                  # shadcn blocks
│   ├── marketing/               # Marketing-specific components
│   │   ├── hero/                # Hero sections
│   │   ├── features/            # Feature sections
│   │   ├── pricing/             # Pricing components
│   │   ├── testimonials/        # Customer testimonials
│   │   ├── cta/                 # Call-to-action sections
│   │   └── footer/              # Footer components
│   ├── blog/                    # Blog components
│   ├── navigation/              # Navigation components
│   └── kitchen-sink/            # Component showcase
├── content/
│   └── posts/                   # MDX blog posts
├── lib/
│   ├── utils.ts                 # Utility functions
│   ├── blog.ts                  # Blog utilities
│   └── constants.ts             # Site constants & Datapad branding
├── public/                      # Static assets
│   ├── images/                  # Image assets
│   ├── icons/                   # Icon assets
│   └── logos/                   # Logo assets
├── components.json              # shadcn/ui config
├── next.config.ts               # Next.js 15 config
├── tailwind.config.ts           # Tailwind v4 config
├── tsconfig.json                # TypeScript config
├── biome.json                   # Biome config
└── package.json                 # Dependencies
```

## 🎨 Key Features

### 1. Modern Next.js 15 Setup

- **Partial Prerendering (PPR)** for lightning-fast performance
- **Server Components** by default for better SEO
- **App Router** with route groups for organization
- **React 19** concurrent features
- **TypeScript** strict mode

### 2. Advanced shadcn/ui Integration

- **Latest shadcn/ui v2** components
- **shadcn blocks** for rapid page building
- **Custom theme system** with CSS variables
- **Dark mode** with next-themes
- **Kitchen sink** component showcase

### 3. Powerful MDX Blog System

- **Native @next/mdx** integration
- **Server-side rendering** for SEO
- **Frontmatter** support for metadata
- **Dynamic routing** for blog posts
- **Syntax highlighting** for code blocks
- **GitHub flavored markdown**

### 4. SEO & Performance Optimization

- **Next.js 15 PPR** for Core Web Vitals
- **Dynamic metadata** generation
- **Automatic sitemap** generation
- **Server Components** for faster indexing
- **Structured data** for rich snippets

### 5. Developer Experience

- **Biome** for fast linting/formatting
- **TypeScript** strict mode
- **Path aliases** for clean imports
- **Git hooks** with Husky
- **Hot module replacement**

## 📋 Implementation Steps

### Phase 1: Foundation Setup

1. Initialize Next.js 15 project with App Router
2. Configure TypeScript and path aliases
3. Setup Biome for linting/formatting
4. Configure git repository for Datapad account

### Phase 2: UI System

1. Install and configure shadcn/ui v2
2. Setup Tailwind CSS v4 with inline theming
3. Implement dark mode with next-themes
4. Create base layout and navigation

### Phase 3: Content System

1. Configure MDX with @next/mdx
2. Create blog post structure
3. Implement dynamic routing for posts
4. Add frontmatter parsing and metadata

### Phase 4: Component Showcase

1. Create kitchen sink page
2. Showcase all shadcn/ui components
3. Add interactive examples
4. Document usage patterns

### Phase 5: Landing Pages

1. Implement shadcn blocks
2. Create marketing sections
3. Build responsive layouts
4. Optimize for conversion

### Phase 6: SEO & Performance

1. Configure PPR for static/dynamic content
2. Implement dynamic metadata
3. Generate automatic sitemaps
4. Optimize Core Web Vitals

### Phase 7: Production Ready

1. Configure deployment settings
2. Setup environment variables
3. Implement error boundaries
4. Add analytics tracking

## 🔧 Key Configuration Files

### next.config.ts (Next.js 15)

```typescript
import createMDX from "@next/mdx";

const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  experimental: {
    ppr: true, // Partial Prerendering
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
```

### Tailwind CSS v4 (No config needed)

Using inline theming in globals.css with CSS variables

### shadcn/ui Configuration

- Latest v2 components
- Custom theme with CSS variables
- Dark mode support
- Responsive design system

## 🎯 Success Metrics

### Performance

- **Lighthouse Score**: 100/100/100/100
- **Core Web Vitals**: Green across all metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s

### SEO

- **Google PageSpeed**: 95+ score
- **Search Console**: No indexing issues
- **Meta tags**: Complete and optimized
- **Structured data**: Implemented

### Developer Experience

- **TypeScript**: 100% type coverage
- **Build time**: < 30 seconds
- **Hot reload**: < 1 second
- **Linting**: Zero errors/warnings

## 🚀 Next Steps

1. Initialize the project with create-next-app@latest
2. Configure all dependencies and tools
3. Implement the foundation components
4. Build out the content system
5. Create the component showcase
6. Optimize for production

## 🌐 Current Datapad Website Analysis

Based on inspection of www.datapad.io, the current site structure includes:

### **Main Navigation Pages:**

- **Home** - Hero section with "100% Autonomous AI Data Analyst" messaging
- **Features** - Product capabilities and benefits
- **Pricing** - 3-tier pricing (Free, Basic $16, Pro $40)
- **Blog** - Content marketing with analytics/data topics
- **Careers** - Job opportunities
- **Login** - User authentication

### **Key Content Sections:**

- **Hero Section** - "100% Autonomous AI Data Analyst" with CTA buttons
- **Product Demo** - Interactive chat interface showcase
- **Features Grid** - Chat with data, automate reporting, cross-source blending
- **Customer Testimonials** - Social proof from users
- **Pricing Table** - Clear comparison of plans
- **FAQ Section** - Common questions and answers
- **Footer** - Links to legal pages, comparisons, popular articles

### **Legal Pages:**

- Privacy Policy
- Terms of Service
- Data Security
- Google API Services Usage Disclosure

### **Content Marketing:**

- Extensive blog with data analytics topics
- Comparison pages (vs competitors)
- Popular articles about KPIs, dashboards, analytics
- Alternative comparison pages

### **Visual Design Elements:**

- Modern gradient backgrounds
- Clean typography
- Interactive elements
- Mobile-responsive design
- Professional color scheme (blues, whites)
- Clear CTAs ("Get Started Free", "Book Demo")

### **Key Messaging:**

- "100% Autonomous AI Data Analyst"
- "No more frustrating waits in critical meetings"
- "Get instant answers anywhere, anytime"
- Focus on democratizing data and enabling business teams

This analysis will guide our replication and modernization using Next.js 15, shadcn/ui, and the latest web technologies.

---

This plan leverages the absolute latest 2024/2025 best practices for Next.js 15, ensuring a modern, performant, and SEO-optimized landing page for Datapad.
