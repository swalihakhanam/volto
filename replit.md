# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

### Volto Control LLP Website (`/`)
- **Path**: `artifacts/volto-control/`
- **Type**: React + Vite (presentation-first, no backend)
- **Description**: Full premium B2B industrial website for Volto Control LLP — electrical panel manufacturer and automation solutions company
- **Design**: Inspired by https://pravix-v3.vercel.app/ — dark navy hero with glass morphism navbar, smooth scroll animations, Syne + DM Sans typography
- **Sections**: Hero, About (with timeline), Products (manufacturing + supply tabs), Automation, Clients/Partners, Exports (world map), Quality (animated checklist), Contact (form), Footer
- **Colors**: Navy #0A1628, Blue #1565C0, Cyan #00BCD4, Green #1DB954 (CTA), white/light gray backgrounds
- **Fonts**: Syne (headings), DM Sans (body), JetBrains Mono (stats/numbers)

### API Server (`/api`)
- **Path**: `artifacts/api-server/`
- **Type**: Express 5 REST API

### Canvas / Mockup Sandbox (`/__mockup`)
- **Path**: `artifacts/mockup-sandbox/`

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
