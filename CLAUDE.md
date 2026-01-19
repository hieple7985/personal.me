# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal website built with **Nuxt 3** (Vue 3) as a static SPA, deployed to Firebase Hosting and Vercel. Uses Firebase for backend services (Auth, Firestore, Storage) and Nuxt Content for managing blog posts, guides, books, and ML tools content.

**Production URL**: https://personal-me-v2.web.app/

## Development Commands

```bash
# Install dependencies
yarn install

# Start dev server (http://localhost:3000)
yarn dev --open

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
- **Static target**: For Firebase Hosting deployment
- **ISR enabled**: All routes use Incremental Static Regeneration
- **Base URL**: Set to `/personal.me/` in production for GitHub Pages compatibility
- **Modules**: `@nuxt/content`, `@nuxtjs/tailwindcss`

### Firebase Integration

Firebase services are initialized in `plugins/firebase.client.ts` and provided globally via Nuxt's plugin system:

```ts
const { $auth, $firestore, $storage } = useNuxtApp()
```

The plugin soft-fails in development if environment variables are missing (logs warning instead of crashing). Environment variables are defined in `runtimeConfig.public` and read from `.env`:
- `FIREBASE_API_KEY`
- `FIREBASE_AUTH_DOMAIN`
- `FIREBASE_PROJECT_ID`
- `FIREBASE_STORAGE_BUCKET`
- `FIREBASE_MESSAGING_SENDER_ID`
- `FIREBASE_APP_ID`

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

### Firebase Hosting
Alternative deployment to Firebase Hosting (configured in `firebase.json`):
```bash
firebase deploy --only hosting
```

## Important Notes

- The site uses **GitHub Pages base path** (`/personal.me/`) in production
- Content database uses in-memory connector to avoid native `better-sqlite3` issues in CI
- All client-side plugins use `.client.ts` suffix to ensure they only run in the browser
- Search functionality is client-side and queries the Nuxt Content database
