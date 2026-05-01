# BananaTophat

The marketing site for BananaTophat — an AI company building research, applied
systems, and infrastructure end-to-end.

Live at **[bananatophat.com](https://bananatophat.com)** (once DNS is updated —
see `DEPLOYMENT.md`).

## Stack
- React 18 + Vite + TypeScript
- Tailwind CSS 3
- Hosted on GitHub Pages (`gh-pages` branch)
- Custom domain: `bananatophat.com`

## Local development
```bash
npm install
npm run dev    # http://localhost:5173
npm run build  # production bundle into dist/
```

## Deploy
```bash
GITHUB_TOKEN=ghp_xxx npm run deploy
```
This builds the site and pushes `dist/` to the `gh-pages` branch, which GitHub
Pages serves at `bananatophat.com`.

## Layout
- `src/components/` — section components (Navbar, Hero, Pillars, Approach, …)
- `public/` — static assets (favicon, logos, robots.txt, sitemap.xml, CNAME)
- `scripts/deploy.sh` — local deploy to gh-pages branch

## Contact
contact@bananatophat.com
