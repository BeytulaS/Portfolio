# beytula.smail — portfolio

Personal portfolio for **Beytula Smail**, a full-stack developer based in Sofia, Bulgaria.

Built with [Nuxt 4](https://nuxt.com), [Nuxt UI](https://ui.nuxt.com), [Nuxt Content](https://content.nuxt.com) and [Motion for Vue](https://motion.dev). All copy and project data live in YAML/Markdown under `content/`, so the pages update without touching components.

## Stack

- Nuxt 4 + Nuxt UI 4 + Tailwind CSS 4
- Nuxt Content for the content layer
- motion-v for entrance and scroll-reveal animations
- Dark-first theme with an emerald accent, light mode included

## Structure

```
content/
  index.yml            # home page: hero, about, experience, education, skills, contact
  projects.yml         # projects page intro + links
  projects/*.yml       # one file per project
app/
  components/landing/  # home page sections
  pages/               # index.vue, projects.vue
  app.config.ts        # profile picture, contact links, theme colors
public/
  portfolio/           # project images
  profile.webp         # portrait
```

## Setup

Install dependencies:

```bash
pnpm install
```

Start the dev server on `http://localhost:3000`:

```bash
pnpm dev
```

## Production

```bash
pnpm build     # build for production
pnpm preview   # preview the production build locally
pnpm lint      # eslint
pnpm typecheck # vue-tsc
```

## Editing content

- **Home page:** `content/index.yml`
- **Projects:** add or edit files in `content/projects/` (title, description, image, url, repo, role, status, tags, date)
- **Contact + social links:** `app/app.config.ts` (`footer.links`, `global.email`)
- **Projects page intro:** `content/projects.yml`

## Deploy

The site is a standard Nuxt app and deploys anywhere Nuxt runs. On Vercel, import the repository and use the default Nuxt preset — no extra configuration needed.

---

Based on the [Nuxt UI portfolio template](https://github.com/nuxt-ui-templates/portfolio) (MIT).
