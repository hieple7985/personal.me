# CLAUDE.md

Personal website built with **Nuxt 3** (Vue 3) static SPA, deployed to Vercel. Uses Nuxt Content for blog, guides, books, ML tools.

**Production**: https://personalme-murex.vercel.app

## Dev Commands

```bash
npm ci                  # Install deps
npm run dev             # Dev at http://localhost:3001
yarn generate           # Static build
yarn deploy             # Build + vercel --prod
```

## Architecture

- `ssr: false`, static SPA, ISR on all routes
- Port 3001, modules: `@nuxt/content`, `@nuxtjs/tailwindcss`
- Content in `content/{blog,guides,books,tools}/` as Markdown
- Search: `queryContent()` with debounce
- Design: Modern Dark — indigo `#6366F1`, zinc-950 bg, Inter font, `darkMode: 'class'`

### Layout

`layouts/default.vue` wraps: `HeaderNav` (sticky, search, dark toggle, mobile menu) → main → `SiteFooter`

### Page Routes

| Route | File | Description |
|-------|------|-------------|
| `/` | `pages/index.vue` | Homepage = CV: bio, experience, projects, skills, connect |
| `/about` | `pages/about.vue` | Redirects to `/` |
| `/blog` | `pages/blog/index.vue`, `blog/[slug].vue` | Blog posts |
| `/guides` | `pages/guides/index.vue`, `guides/[...segments].vue` | Guides |
| `/books` | `pages/books/index.vue` | Books |
| `/tools` | `pages/tools/index.vue` | ML tools |

### Homepage Sections (`pages/index.vue`)

Data-driven arrays in `<script setup>`:
- `experience` — 4 jobs (TDT, BBS, Laboon.org, First Telecom)
- `projects` — 8 projects: BBS ERP, BBQ FoodTech, Trading Platform, Blockchain/Web3, Forex CMS, Bitcoin Payment, Kaggle ML, Manga Reader
- `skills` — ~20 skills (Java, Python, React, etc.)

### Favicon Set

Modern Dark style — indigo "H" on zinc-950 bg:
`favicon.svg`, `.ico`, `-16x16.png`, `-32x32.png`, `-48x48.png`, `apple-touch-icon.png`, `android-chrome-{192,512}x512.png`, `site.webmanifest`

## Deployment

- Vercel CLI (`vercel --yes --prod`)
- Vercel account: `hle`
- Custom domain coming soon
- Firebase removed entirely (was `personal-me-v2.web.app`)
  - Must manually delete Firebase site at https://console.firebase.google.com

## History (this session)

1. Closed 21 stale issues
2. GitHub Pages setup deleted (private repo)
3. Vercel config fixed: framework `nuxtjs`, removed empty arrays
4. Modern Dark redesign across all pages
5. Removed ComingSoon, listed actual content
6. Homepage = CV (avatar from Kaggle, bio, experience, skills, connect)
7. `/about` redirects to `/`, "About" link removed from nav
8. Firebase deleted: plugin, config, deps, deploy script, docs
9. Favicon set generated (SVG + PNGs + ICO + manifest)
10. Projects section added (8 projects from CV/LinkedIn/GitHub)

## Key Patterns

- Always `v-if="data && data.length"` (never `v-if="data.length"`)
- Content queries: `queryContent('/blog').find()`
- In-memory DB connector to avoid `better-sqlite3` issues in CI
