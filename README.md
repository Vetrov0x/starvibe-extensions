# StarVibe themes

Official themes for [StarVibe HQ](https://starvibe.app) — format 1 (`*.theme.json`, data only: colors, fonts and named
techniques; no CSS, no URLs). This repository has the `starvibe-theme` topic, so every HQ finds these themes in
**Settings → Themes → Theme catalog → Community**.

| Theme | Based on |
|---|---|
| Neon Tokyo · Неон-Токио | Cyberpunk |
| Ink and paper · Тушь и бумага | Classic |
| Arctic · Арктика | Glass |
| Matrix · Матрица | Cybercore |
| Mono minimal · Моно-минимал | Classic |
| Sea sunset · Закат над морем | Glass |
| Amber terminal · Янтарный терминал | Cybercore |
| Pink brutal · Розовый брутал | Neo-brutalism |

## Publish your own theme

1. In HQ: Settings → Themes → **Save my look as a theme…**, then **Download**.
2. Create a public GitHub repository; put the file at its root as `theme.json`
   (or several files listed in `starvibe-themes.json`: `{"themes": ["themes/a.theme.json", …]}`, up to 20).
3. Start the theme `id` with your GitHub name: `yourname.theme-name`.
4. Add the `starvibe-theme` topic and a license.
5. HQ picks it up at the next catalog update (once a day). It checks the schema (`theme.schema.json`), the id owner
   and AA text contrast; themes that fail are not listed.

Licence: CC0-1.0 (public domain) — use, change and republish freely.
