# ianadelman.dev

Personal portfolio site. Next.js 16 (App Router) + TypeScript + Tailwind v4, deployed on Vercel.

## Develop

```bash
npm run dev      # http://localhost:3000
npm run build
npm run lint
```

## Deploy

```bash
vercel           # preview
vercel --prod    # production
```

## Structure

- `src/app/page.tsx` — landing page
- `src/app/layout.tsx` — root layout, fonts, metadata
- `src/app/globals.css` — Tailwind entrypoint + theme tokens
