# East Bridge Solutions — Website

Corporate landing page for East Bridge Solutions, a China–Israel strategic advisory and execution firm.

## Tech Stack

- [Astro](https://astro.build) v5 — static site generator (zero client JavaScript)
- Bilingual: English (`/en/`) + Simplified Chinese (`/zh/`)
- Sitemap: `@astrojs/sitemap`
- Fonts: Playfair Display, Inter (Latin) + Noto Serif SC, Noto Sans SC (Chinese)
- Deployed on Netlify

## Getting Started

**Install dependencies:**
```bash
npm install
```

**Run dev server:**
```bash
npm run dev
```
Then open [http://localhost:4321/en/](http://localhost:4321/en/)

**Build for production:**
```bash
npm run build
```
Output is written to `dist/`.

**Preview production build:**
```bash
npm run preview
```

## Project Structure

```
src/
├── i18n/
│   ├── en.ts        ← English copy (source of truth)
│   ├── zh.ts        ← Chinese copy
│   └── utils.ts     ← useTranslations() helper
├── layouts/
│   └── BaseLayout.astro
├── components/
│   ├── Header.astro
│   ├── Footer.astro
│   ├── Hero.astro
│   ├── About.astro
│   ├── HowWeSupport.astro
│   ├── Experience.astro
│   ├── WhoWeWorkWith.astro
│   └── Contact.astro
├── styles/
│   └── global.css
└── pages/
    ├── index.astro      ← Redirects to /en/
    ├── en/index.astro
    └── zh/index.astro
```

## Updating Copy

All page copy lives in `src/i18n/en.ts` (English) and `src/i18n/zh.ts` (Chinese).

Edit those files, then rebuild. TypeScript will alert you if the Chinese file is missing any key from the English file.

## Customising

| What | Where |
|------|-------|
| Contact email | `src/i18n/en.ts` and `src/i18n/zh.ts` → `contact.email` |
| Site domain (currently `eastbridge.solutions`) | `astro.config.mjs` → `site` |
| Colors | `src/styles/global.css` → `:root` variables |
| Fonts | `src/layouts/BaseLayout.astro` → Google Fonts link |

## Deployment

The site is configured for Netlify via `netlify.toml`.

1. Push to your main branch
2. Connect the repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

Root URL (`/`) redirects to `/en/` via a Netlify CDN redirect rule.
