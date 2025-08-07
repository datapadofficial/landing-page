# Mock Component Creation Guide

## Standardized Prompt for New Mock Components

Use this exact prompt when requesting a new mock component:

---

**Create a new mock component called `[ComponentName]Mock` that demonstrates [specific functionality/feature] with the following requirements:**

### Core Requirements

1. **Component Structure**:

   - Export as named export: `export function [ComponentName]Mock({ className }: { className?: string })`
   - Use `"use client"` directive at the top
   - Accept `className` prop and apply it with `cn()` utility

2. **Animation System**:

   - Use `useState` and `useEffect` hooks for animation state management
   - Implement a continuous loop animation that resets automatically
   - Use `setInterval` with cleanup in `useEffect`
   - Include multiple animation phases/steps (minimum 3-4 phases)
   - Use `setTimeout` for phase transitions and delays

3. **Visual Design Consistency**:

   - Use semantic color system: `text-primary`, `bg-primary/10`, `border-gray-200 dark:border-gray-700`
   - Apply consistent border radius: `rounded-xl`, `rounded-lg`
   - Use shadow system: `shadow-sm`, `shadow-md`
   - Implement proper dark mode support with `dark:` variants
   - Use `text-xs` for small text, `text-sm` for medium text
   - Apply proper spacing: `p-2`, `p-3`, `p-4`, `gap-2`, `gap-3`

4. **Animation Patterns**:

   - Use `transition-all duration-700 ease-in-out` for smooth transitions
   - Implement `opacity-0/100`, `translate-y-4/0`, `scale-95/100` for enter/exit animations
   - Add `animate-pulse` for loading indicators
   - Use staggered animations with `transitionDelay` for multiple elements
   - Include `animate-bounce` for attention-grabbing elements

5. **Layout Structure**:

   - Use flexbox: `flex flex-col`, `justify-between`, `items-center`
   - Apply responsive design with appropriate aspect ratios
   - Use `relative` and `absolute` positioning for overlays
   - Implement `overflow-hidden` where needed
   - Use proper grid layouts when showing data: `grid grid-cols-X`

6. **Content Requirements**:
   - Use realistic business data and metrics
   - Include proper loading states and transitions
   - Show clear value propositions and ROI metrics
   - Use emojis sparingly but effectively for visual hierarchy
   - Include copy-paste ready elements where appropriate

### Animation Timing Standards

- **Phase Duration**: 1200ms between major phases
- **Transition Duration**: 700ms for smooth transitions
- **Typing Speed**: 25-50ms per character for text animations
- **Stagger Delay**: 100-150ms between elements
- **Reset Delay**: 3000-8000ms before loop restart

### Color Palette Standards

- **Primary Actions**: `text-primary`, `bg-primary/10`, `border-primary/20`
- **Success States**: `text-green-400`, `bg-green-50 dark:bg-green-900/20`
- **Warning/Attention**: `text-yellow-400`, `bg-yellow-50 dark:bg-yellow-900/20`
- **Error States**: `text-red-400`, `bg-red-50 dark:bg-red-900/20`
- **Neutral Content**: `text-gray-600 dark:text-gray-400`, `border-gray-200 dark:border-gray-700`
- **Code/Terminal**: `bg-gray-900 dark:bg-black`, `text-green-400` for output

### Typography Standards

- **Headers**: Use semantic HTML tags (h4 for section titles)
- **Body Text**: `text-xs` to `text-sm` for mock content
- **Monospace**: Use for code, data, and terminal output
- **Font Weights**: `font-medium` for emphasis, `font-bold` for metrics

### Required Imports

```typescript
"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
// Add specific icon imports from "lucide-react" as needed
// Add specific UI component imports as needed
```

---

## Pre-Creation Questions

Before creating the mock, please confirm:

1. **Primary Function**: What specific business process or feature should this mock demonstrate?

2. **Data Type**: What kind of data/metrics should be displayed? (e.g., analytics, financial, operational, marketing)

3. **Animation Focus**: What should be the main animated element? (e.g., data processing, real-time updates, step-by-step workflow)

4. **Visual Style**: Should this follow any specific patterns from the existing mocks?

   - **Pipeline-style**: Step-by-step workflow with connectors
   - **Dashboard-style**: Metrics cards with charts
   - **Terminal-style**: Code execution with syntax highlighting
   - **Chat-style**: Conversational interface with typing indicators

5. **Key Metrics**: What business value/ROI should be highlighted in the mock?

6. **Integration Elements**: Should it show connections to specific tools/platforms?

---

## Quality Checklist

Before delivery, ensure the mock includes:

- [ ] Continuous looping animation that resets automatically
- [ ] Proper TypeScript interfaces and prop types
- [ ] Responsive design that works at different container sizes
- [ ] Dark mode support for all visual elements
- [ ] Realistic business data and metrics
- [ ] Clear visual hierarchy and information architecture
- [ ] Smooth transitions and professional animations
- [ ] Proper cleanup of intervals/timeouts in useEffect
- [ ] Semantic HTML structure
- [ ] Accessible color contrast ratios
- [ ] Loading states and transition animations
- [ ] Business value/ROI indicators

---

## Example Usage

```typescript
// In the feature component:
<div className="mt-8 aspect-[1.5] lg:aspect-[2.4] relative overflow-hidden rounded-lg">
  <NewMock className="w-full h-full" />
</div>
```

This standardized approach ensures all mocks maintain visual consistency, smooth animations, and professional presentation quality.
