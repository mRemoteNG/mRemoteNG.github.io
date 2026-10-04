# mRemoteNG Website

The source for [mremoteng.org](https://mremoteng.org), built with SvelteKit and deployed as a static site to GitHub Pages.

## Requirements

- Node.js 26 or newer
- npm

## Developing

Install the locked dependencies and start the development server:

```bash
npm ci
npm run dev
```

## Validating

Run diagnostics and create the static production output in `build/`:

```bash
npm run check
npm run build
```

Preview the production build locally with `npm run preview`.

Set `BASE_PATH` when validating a deployment under a subpath:

```powershell
$env:BASE_PATH = '/example'
npm run build
```

## Deployment

The workflow in `.github/workflows/deploy.yml` validates, builds, and deploys the site from the `svelteKit` branch. It also handles `nightly-release` repository dispatch events and updates `src/lib/config/nightly.json` before deploying.
