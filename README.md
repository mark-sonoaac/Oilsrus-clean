# Oilsrus

This repository contains the frontend (Next.js) and server code for the Oils R Us storefront.

Repository layout
- `next-app/` — Next.js frontend (set this as Vercel's Project Root)
- `server/` — Example server code and routes
- `client/` — Experimental static client files
- `attached_assets/` — Images and helper files (large images kept here)

Deployment notes
- On Vercel, set Project Root to `next-app` during import.
- Ensure environment variables (for example `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY`) are set in Vercel's dashboard.

I removed node_modules and build artifacts from the repository; these are generated during `npm install` and build.
