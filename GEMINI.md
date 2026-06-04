# Project Instructions (Agent-Optimized)

## Agent Workflow Mandates
This project is optimized for parallel agent execution using **Kanban Code** and **Git Worktrees**. All agents MUST follow this lifecycle:

1. **Task Tracking**: Use `~/.local/bin/kanban` to view and manage task cards.
2. **Isolation**: ALWAYS use `git worktree` to isolate changes for each task.
   - Worktree path: `/Users/hieplt85/.gemini/tmp/personal-me/<task-name>`
3. **UI/UX Standards**: Follow the `ui-ux-pro-max` skill guidelines.
   - Touch targets >= 44px.
   - Support dual-theme (Light/Dark) with smooth transitions.
   - Use SVG icons (not emojis) for structural elements.

## Tooling Context
- **Kanban CLI**: `~/.local/bin/kanban`
- **AutoSkills**: Comprehensive technical guidelines located in `.agents/skills/`.
  - Nuxt, Vue, TypeScript, Tailwind, Vitest, Accessibility, and SEO best practices.
- **Framework**: Nuxt 3 (SSR: false, Static)
- **Styling**: Tailwind CSS
- **Content**: Nuxt Content v3 (Shiki highlighting enabled)

## Reference Architecture
When making technical decisions, consult:
- `.agents/skills/nuxt/SKILL.md`: For Nuxt-specific patterns.
- `.agents/skills/vue-best-practices/SKILL.md`: For Vue 3 Composition API standards.
- `.agents/skills/typescript-advanced-types/SKILL.md`: For type safety improvements.
- `.agents/skills/accessibility/SKILL.md`: For WCAG compliance.

## File Editing Rules
- No multiple `replace` calls on the same file in one turn.
- Always verify changes with `npm run dev` or relevant linting if available.
