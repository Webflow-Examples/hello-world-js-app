# CONTEXT — hello-world-js-app

Orientation for contributors to this **Vite Vanilla JS** Hello World example
for [Webflow Cloud](https://developers.webflow.com/webflow-cloud). Keep this
file current when structure or workflows change.

## What this is

A minimal, branded **Hello, world** page built with **Vite + Vanilla JS** (no
framework runtime) and deployed on Cloudflare Workers via Webflow Cloud. This
is the **vanilla** variant (no bindings — UI only).

The page shows a Webflow brand hero, gradient logo, and curated doc cards
pointing at the Webflow Cloud documentation — all rendered with plain
template literals injected into `#app`.

## Stack

- Framework: **None** — Vite + Vanilla JS
- Styling: Tailwind v3 + `wf-*` brand tokens (see `src/style.css`)
- Deploy target: Cloudflare Workers via **Webflow Cloud** (static assets)

## Repo layout

```
index.html
src/
  main.js                    ← page content, DOC_LINKS, render()
  style.css                  ← Tailwind + .wf-* design tokens
vite.config.js
tailwind.config.js
package.json
```

## Running locally

```bash
npm install
npm run dev
```

## Building

```bash
npm run build
```

Build output lands in `dist/`.

## Editing the UI

Everything lives in one file. Keep it that way — the whole point of the
vanilla-JS variant is that a contributor can read it top-to-bottom in a
minute.

- **Page content + template-literal HTML:** `src/main.js`
- **Doc card list:** search for `DOC_LINKS` in `src/main.js`
- **Brand tokens and `.wf-*` styles:** `src/style.css`
- **`<head>` (title, favicon, theme-color):** `index.html`

## Deploying to Webflow Cloud

1. Push this repo to GitHub.
2. In your Webflow Cloud project, connect the repo and pick a mount path
   (e.g. `/my-app`). The app runs under any prefix.
3. Webflow Cloud builds with `npm run build` on deploy.

See [Deployments](https://developers.webflow.com/webflow-cloud/deployments)
and [Environments](https://developers.webflow.com/webflow-cloud/environments).

## Contributing

- Keep the **Webflow brand tone**: blue gradient (`#4353FF` → `#146EF5`), dark
  background, minimal copy. Reuse the existing `.wf-*` CSS tokens.
- This is a Hello World. Do **not** add extra pages, state libraries, or UI
  kits. The vanilla-JS variant should stay tiny.
- Run `npm run build` before opening a PR.
- Keep **cross-app parity**: if you change shared copy or doc links, update
  the sibling `hello-world-*-app[-bindings]` apps too.

## Related docs

- [Webflow Cloud overview](https://developers.webflow.com/webflow-cloud)
- [Getting started](https://developers.webflow.com/webflow-cloud/getting-started)
- [Storing data (SQLite, KV, R2)](https://developers.webflow.com/webflow-cloud/storing-data/overview)
- [Environments](https://developers.webflow.com/webflow-cloud/environments)
- [Deployments](https://developers.webflow.com/webflow-cloud/deployments)
- [Configuration](https://developers.webflow.com/webflow-cloud/environment/configuration)
- [Limits](https://developers.webflow.com/webflow-cloud/limits)
