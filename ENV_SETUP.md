# Environment Variable Setup for APP_URL

## Overview

This project now uses the `NEXT_PUBLIC_APP_URL` environment variable to control where signup/signin buttons redirect to. This allows you to:

- Point to `localhost:3000` during development
- Point to `https://app.datapad.io` in production

## Setup Instructions

### 1. Create Environment Files

Create a `.env.local` file in the project root:

```bash
# .env.local
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 2. Production Deployment

For production environments, set:

```bash
NEXT_PUBLIC_APP_URL=https://app.datapad.io
```

### 3. Vercel Deployment

In your Vercel dashboard, add the environment variable:

- Key: `NEXT_PUBLIC_APP_URL`
- Value: `https://app.datapad.io`

### 4. Other Deployment Platforms

Set the environment variable according to your platform's documentation.

## How It Works

- The `AttributionLink` component now uses `process.env.NEXT_PUBLIC_APP_URL` as its default `href`
- The `buildSignupUrl` function in `marketing-attribution.ts` also uses this environment variable
- All signup/signin buttons throughout the site will automatically use the correct URL based on the environment

## Components Updated

The following components have been updated to use `AttributionLink` with proper attribution tracking:

- `src/components/main-hero.tsx`
- `src/components/main-navigation.tsx`
- `src/components/team/team-hero.tsx`
- `src/components/team/team-cta.tsx`
- `src/components/integrations/integration-connection.tsx`
- `src/components/integrations/integration-hero.tsx`
- `src/components/features/feature-hero.tsx`
- `src/components/ui/workflow-card.tsx`
- `src/app/workflows/page.tsx`

## Fallback

If the environment variable is not set, it will fallback to `https://app.datapad.io` to ensure the site continues to work.
