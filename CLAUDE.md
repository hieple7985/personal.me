# CLAUDE.md

Professional portfolio website built with **Nuxt 3** (Vue 3) static generation, deployed to **GitHub Pages**.

**Production**: https://hieple7985.github.io/personal.me/

## Dev Commands

```bash
npm install             # Install deps
npm run dev             # Dev at http://localhost:3000
npm run generate        # Static build (.output/public)
npm run test            # Run Vitest
```

## Architecture

- `ssr: false`, static generation (preset: `github-pages`)
- Modules: `@nuxt/content`, `@nuxtjs/tailwindcss`
- Theme: **Digital Archive** (Minimalist, 20yr Veteran persona)
- Fonts: **Archivo** (Heading) & **Space Grotesk** (Body)
- Content: `content/{blog,guides,books,tools}/` as Markdown
- Code Highlighting: **Shiki** (github-light / github-dark)

## Deployment

- **GitHub Pages**: Automated via `.github/workflows/gh-pages.yml`
- **Cleanup**: Vercel and Firebase configurations have been removed.
- **Mandate**: For root domain access, the repo MUST be named `hieple7985.github.io`.

## History (this session)

1. **Integrated Kanban Code**: Agent-optimized task management established.
2. **Digital Archive Redesign**: Transformed portfolio into a professional, statement-driven veteran archive.
3. **Avatar Update**: Replaced anime style with real person photo (w-32, high-res).
4. **Testing Setup**: Integrated Vitest and Nuxt Test Utils.
5. **Vercel/Firebase Removal**: Deleted `vercel.json`, deploy scripts, and old GitHub workflows.
7. **Navigation Polish**: 44px touch targets, mobile menu transitions, and active states.
8. **AutoSkills Integration**: Installed 13 curated AI skills for Nuxt, Vue, and testing in `.agents/skills`.

## Key Patterns

- **Agent Workflow**: ALWAYS use `git worktree` for tasks.
- **Expert References**: Consult `.agents/skills/` for framework-specific best practices before major changes.
- **UI/UX**: Follow `ui-ux-pro-max` guidelines (Accessibility first).
- **Nuxt**: Use `v-if="data && data.length"` for collection rendering.
