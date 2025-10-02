# Oil R Us — Landing Site (Next.js + TypeScript + Tailwind)

This repository contains a small Next.js (pages router) landing site for "Oil R Us" — a fragrance and essential oils storefront. The frontend lives in `next-app/` and is built with TypeScript and Tailwind CSS.

## What this app is

- A static/SSR-ready marketing site for a fragrance/oil store.
- Sections include: Hero, Products grid, What We Offer, Why Choose, Testimonials, Map/Hours (Open in Google Maps), and Footer.
- Static assets are stored under `next-app/public/images`.

## File layout (important)

- `next-app/` — the Next.js application (project root for Vercel)
  - `public/` — images and static assets
  - `src/` — React pages and components
  - `package.json` — project scripts
- `.github/workflows/ci.yml` — GitHub Actions workflow to build & lint the project

## Quick start (local)

Prerequisites: Node.js 18+ and npm

From the repository root:

```powershell
cd C:\Users\chuch\Downloads\Oilsrus-clean\next-app
# install deps
cmd /c "npm install"
# build
cmd /c "npm run build"
# run development server
cmd /c "npm run dev"
```

Notes:
- Use the `cmd /c` wrapper on Windows PowerShell if your environment blocks `npm.ps1` scripts due to ExecutionPolicy.

## Build & CI

- `npm run build` compiles and checks types. The repository contains a GitHub Actions workflow (`.github/workflows/ci.yml`) which runs the same steps on each push.

## Vercel deployment (recommended)

1. Import the GitHub repository into Vercel.
2. Set Project Root to `next-app`.
3. Add environment variables (if any), for example:
   - `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY` — Google Maps Embed API key (optional; the site uses an "Open in Google Maps" link by default).
4. Deploy.

If you prefer CLI:

```powershell
# from repo root
cmd /c "vercel --prod --confirm --cwd next-app"
```

## Troubleshooting

- If build fails with missing types (e.g., `Cannot find type definition file for 'node'`), run `npm install` in the repository root to ensure dev dependencies and type packages are installed.
- If you see errors about `react-leaflet` or `leaflet`, the project removes the Leaflet prototype by default; ensure `src/components/MapLeaflet.tsx` is deleted if you don't intend to install those packages.
- If PowerShell disallows running `npm` scripts, either use `cmd /c "npm run ..."` or temporarily set execution policy:

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned -Force
```

## Notes for maintainers

- Keep `.gitignore` up-to-date: ignore `.next/`, `node_modules/`, `.vercel/`, and `.env*` files.
- For large binary files, use Git LFS or avoid committing them.

---

If you'd like, I can also add a short `CONTRIBUTING.md` and `ISSUE_TEMPLATE.md`, or wire up a Vercel environment configuration for you.
# Oil R Us - Fragrance Oils Starter

Minimal Next.js + TypeScript starter configured for Tailwind CSS. Intended as a simple landing page for fragrance oils and curated blends.

Getting started

1. Install dependencies

```powershell
cd next-app
npm install
```

2. Run dev server

```powershell
npm run dev
```

3. Build and run production

```powershell
npm run build; npm run start
```

Tailwind

Tailwind is preconfigured. After installing dependencies the PostCSS/Tailwind plugins will process `styles/globals.css`.

Contact form

There is a placeholder API route at `pages/api/contact.ts`. You can either:
- Forward requests to Formspree (client-side) or
- Implement server-side email sending (SMTP/SendGrid) in the API route.

Deploy

Deploy to Vercel by connecting the repository. Next.js is supported out of the box.

Hero image

The Hero uses `attached_assets/generated_images/Premium_oil_bottles_hero_image_2d94a600.png` directly via imported asset. Product images are pulled from `attached_assets/generated_images/` as well.
