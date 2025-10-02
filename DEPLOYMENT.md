# Deployment Guide

This repository contains two applications:

> **Note**: Updated for clean deployment without MapLeaflet component.  
> **Status**: Repository verified with next-app directory included.

1. **Next.js App** (`next-app/`) - Ready for Vercel deployment ✅
2. **Full-stack Vite + Express App** (root) - Better suited for platforms like Railway, Render, or Heroku

## Vercel Deployment (Recommended)

The repository is configured to deploy the **Next.js application** to Vercel.

### Automatic Deployment

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the `vercel.json` configuration
3. The Next.js app will be built and deployed from the `next-app/` directory

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from the repository root
vercel --prod
```

### Configuration Files

- `vercel.json` - Main deployment configuration
- `.vercelignore` - Files to exclude from deployment
- `next-app/package.json` - Next.js dependencies and scripts
- `next-app/.eslintrc.json` - ESLint configuration

## Alternative: Full-stack App Deployment

If you prefer to deploy the full-stack Vite + Express application instead:

### Railway/Render/Heroku

1. Remove or rename `vercel.json`
2. Use the root `package.json` build scripts:
   - `npm run build` - Builds both client and server
   - `npm start` - Starts the production server
3. Set environment variable: `NODE_ENV=production`
4. Expose port from `process.env.PORT` (default: 5000)

## Environment Variables

For production deployment, you may need to set:

- `NODE_ENV=production`
- Any API keys or database URLs used by your application

## Troubleshooting

### Common Issues

1. **Build fails**: Check that all dependencies are listed in `next-app/package.json`
2. **Images not loading**: Ensure images are in `next-app/public/images/`
3. **API routes fail**: Check that API routes are in `next-app/pages/api/`

### Vercel-specific Issues

- Ensure your repository is connected to the correct Vercel project
- Check build logs in the Vercel dashboard
- Verify that the `rootDirectory` is set to `next-app` in `vercel.json`
