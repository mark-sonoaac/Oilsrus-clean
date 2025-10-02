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
