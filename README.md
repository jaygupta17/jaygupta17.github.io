# jaygupta17.github.io

Personal site — static HTML/CSS/JS. No build step, no dependencies, served by GitHub Pages.

- `site/` — the site (deployed via Actions)
- `build/og-card.html` — source for the OG share card (render at 1200×630 → `site/assets/og.png`)

Preview locally:

```sh
python3 -m http.server 4173 --directory site
```
