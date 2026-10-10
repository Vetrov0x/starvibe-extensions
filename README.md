# StarVibe extensions

Official themes and plugins for [StarVibe HQ](https://starvibe.app) — format 1 (`*.theme.json`, data only: colors, fonts and named
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

## Plugins

| Plugin | Adds |
|---|---|
| [Text stats](plugins/text-stats) · Статистика текста | `/Page stats` (words, characters, reading time), `/Today's date` |

A plugin is a folder with `manifest.json` (format 1) and `main.js`. The code runs in a Worker inside a sandboxed frame:
no network, no access to the page or your data beyond the permissions in the manifest (`page:read`, `pages:read`), which
the space owner sees before installing. A `/` command returns Markdown, and HQ inserts it (undo with Ctrl+Z).

```js
starvibe.slash('today', (ctx) => new Date().toLocaleDateString(ctx.lang));
starvibe.slash('stats', async () => { const p = await starvibe.page.read(); return `> 📏 ${p.markdown.length} chars`; });
```

### Publish your own plugin

1. Create a public GitHub repository with `manifest.json` and `main.js` at its root
   (or several folders listed in `starvibe-plugins.json`: `{"plugins": ["plugins/a", …]}`, up to 20).
2. Start the plugin `id` with your GitHub name: `yourname.plugin-name`; set `"format": 1`.
3. Add the `starvibe-plugin` topic and a license.
4. HQ lists it in **Settings → Plugins → Third-party → Community catalog** after the next daily update. The code is pinned
   to the commit HQ fetched: there are no silent updates.

Or install without GitHub: **Install from file…** takes a `{ "manifest": {…}, "main": "…" }` JSON file.

## Licence

Themes: CC0-1.0 (public domain, `LICENSE`). Plugins: MIT (`plugins/LICENSE`).
