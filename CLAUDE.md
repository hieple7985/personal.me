# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal website built with **Nuxt 3** (Vue 3) as a static SPA, deployed to Vercel. Uses Nuxt Content for managing blog posts, guides, books, and ML tools content.

**Production URL**: https://personal-me-v2.web.app/ (Firebase)
**Vercel**: https://personalme-murex.vercel.app

## Development Commands

```bash
# Install dependencies
npm ci

# Start dev server (http://localhost:3001)
npm run dev
```

# Build for production
yarn build

# Preview production build locally
yarn preview

# Generate static site
yarn generate

# Deploy to Vercel (production)
yarn deploy
# or
npm run deploy:prod
```

## Architecture

### Nuxt Configuration (`nuxt.config.ts`)
- **SSR disabled**: SPA mode (`ssr: false`)
- **Static target**: Static deployment to Vercel
- **ISR enabled**: All routes use Incremental Static Regeneration
- **Dev server**: Port 3001
- **Modules**: `@nuxt/content`, `@nuxtjs/tailwindcss`

### Content Management with @nuxt/content

Content is stored as Markdown files in `content/`:
- `content/blog/` — Blog posts
- `content/guides/` — MLOps guides (supports nested segments via `[...segments].vue`)
- `content/books/` — Book reviews and recommendations
- `content/tools/` — ML tools landscape

Content is rendered using the `<ContentDoc />` component in dynamic route pages. The search functionality (`SearchBox.vue`) queries across all content collections using `queryContent()` with debounced input.

### Styling

- **Tailwind CSS** with `darkMode: 'class'`
- **@tailwindcss/typography** plugin for prose styling
- Custom animations defined in `tailwind.config.ts`
- Dark mode toggle in `HeaderNav.vue` using localStorage and `prefers-color-scheme`

### Layout Structure

All pages use `layouts/default.vue` which wraps content with:
- `HeaderNav` — Sticky navigation with search, dark mode toggle, mobile menu
- Main content area with centered container
- `SiteFooter`

### Page Routes

- `/` — Homepage
- `/about` — About page
- `/blog` — Blog index (`/blog/[slug].vue` for individual posts)
- `/guides` — Guides index (`/guides/[...segments].vue` for nested sections)
- `/books` — Books page
- `/tools` — ML Tools landscape

## Deployment

### Vercel (Primary)
The `deploy` script runs `scripts/deploy.sh` which:
1. Runs `yarn generate` to build the static site
2. Deploys to Vercel production via `npx vercel --prod`

## Important Notes

- Content database uses in-memory connector to avoid native `better-sqlite3` issues in CI
- Search functionality is client-side and queries the Nuxt Content database
- Design: Modern Dark style with indigo accents (#6366F1), zinc-950 background, Inter font
