# Google Tag Manager Integration

Google Tag Manager (GTM) has been successfully integrated into your Next.js 15 project using the optimal `@next/third-parties` package.

## Setup Complete ✅

1. **Package Installed**: `@next/third-parties` package added
2. **Environment Variable**: `.env.local` created with GTM ID placeholder
3. **Layout Updated**: `GoogleTagManager` component added to root layout
4. **Build Tested**: Project builds successfully with GTM integration

## Configuration

### 1. Set Your GTM ID

Open `.env.local` and replace the placeholder with your actual GTM ID:

```bash
# Replace GTM-XXXXXXXXX with your actual GTM ID from Google Tag Manager
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXXXX
```

### 2. How It Works

- **Production Only**: GTM only loads in production environment (`NODE_ENV === 'production'`)
- **Environment-Based**: Uses environment variable for GTM ID
- **Optimized Loading**: Uses Next.js's optimized third-party loading strategy
- **TypeScript Support**: Full TypeScript support included

## Getting Your GTM ID

1. Go to [Google Tag Manager](https://tagmanager.google.com/)
2. Create a new container or select existing one
3. Your GTM ID will be in the format: `GTM-XXXXXXX`
4. Copy this ID to your `.env.local` file

## Testing GTM Integration

### Development Testing
```bash
# GTM won't load in development by design
npm run dev
```

### Production Testing
```bash
# Build and start in production mode
npm run build
npm start
```

Then check:
1. **Browser DevTools**: Look for GTM script tags in the `<head>`
2. **Network Tab**: Check for requests to `googletagmanager.com`
3. **GTM Preview Mode**: Use GTM's built-in preview mode for testing

### Verification Script
You can add this to your browser console to verify GTM is loaded:

```javascript
// Check if GTM dataLayer exists
if (typeof window !== 'undefined' && window.dataLayer) {
  console.log('✅ GTM dataLayer found:', window.dataLayer);
} else {
  console.log('❌ GTM dataLayer not found');
}

// Check for GTM script
const gtmScript = document.querySelector('script[src*="googletagmanager.com"]');
if (gtmScript) {
  console.log('✅ GTM script found:', gtmScript.src);
} else {
  console.log('❌ GTM script not found');
}
```

## Adding Custom Events

You can track custom events by pushing to the dataLayer:

```typescript
// Example: Track button click
const trackButtonClick = (buttonName: string) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'button_click',
      button_name: buttonName,
    });
  }
};
```

## Environment Variables

The integration supports different environments:

- **Development**: GTM is disabled (for faster development)
- **Production**: GTM loads normally
- **Preview/Staging**: GTM loads if `NEXT_PUBLIC_GTM_ID` is set

## Security Notes

- Environment variables starting with `NEXT_PUBLIC_` are exposed to the browser
- Only use this prefix for non-sensitive data like GTM IDs
- GTM IDs are safe to expose publicly

## Troubleshooting

### GTM Not Loading
1. Check `.env.local` has correct GTM ID
2. Ensure you're testing in production mode
3. Verify GTM container is published in GTM dashboard

### Console Errors
1. Check GTM container configuration
2. Ensure tags are properly configured in GTM
3. Check for ad blockers that might block GTM

## Next Steps

1. Set up your tags in the GTM dashboard
2. Configure triggers and variables as needed
3. Test your implementation using GTM Preview mode
4. Publish your container when ready

## Support

For GTM-specific questions, refer to:
- [Google Tag Manager Help](https://support.google.com/tagmanager)
- [Next.js Third Parties Documentation](https://nextjs.org/docs/app/building-your-application/optimizing/third-party-libraries)
