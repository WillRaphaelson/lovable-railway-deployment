# Lovable apps on Railway: deployment examples

Two small, purpose-built examples for the Railway Lovable deployment guide. These are not exports from a Lovable workspace and do not demonstrate a live Lovable-to-GitHub sync. The server app uses Lovable's published build configuration package; the static app models older React + Vite projects.

## Apps

- `apps/server`: TanStack Start, Lovable Vite configuration, Nitro Node server. The home route calls a server function and renders a request-time timestamp. `/launch-checklist` exercises a nested route.
- `apps/static`: React + Vite with no custom start script. Railpack detects the static output. `/launch-checklist` exercises the SPA fallback.
- `.railway/railway.ts`: Railway IaC defining both independent services and their repository root directories.

## Local server example

Use Node.js 22 and npm. From `apps/server`, run `npm ci`, `npm run build`, and `npm run check`. Run `HOST=0.0.0.0 PORT=3000 npm start`, then open localhost on port 3000. The server start script is `node .output/server/index.mjs`.

## Static example

From `apps/static`, run `npm ci`, `npm run build`, and `npm run check`. On Railway, use `/apps/static` as the root directory and allow Railpack to detect static serving. Do not use a Vite development server as your production start command.

## Railway

Deploy your own Lovable app from its own GitHub repository. For these samples, import this repository twice into a dedicated project and set the service roots to `/apps/server` and `/apps/static`, or use the included IaC with `railway config plan` and `railway config apply` after linking a new project. Set `HOST=0.0.0.0` for the server service. Railway supplies `PORT`. Generate a public domain for each service.

`RELEASE_LABEL` demonstrates server runtime configuration. `VITE_RELEASE_LABEL` demonstrates browser configuration embedded during the static build. Both are non-secret sample text; no credentials are required. A template deployment creates both samples, so it runs two services. Stop the sample services after experimenting if you no longer need them.

These samples do not provision a database, authentication, storage, or external backend. Configure and test those separately in your own app. Never put privileged credentials in browser variables.

## Verification scope

Build, type, public route, request-time server execution, static asset, template deployment, and shutdown evidence is maintained with the article. Live Lovable sync, user login, database authorization, and migration are not implemented by these samples.
