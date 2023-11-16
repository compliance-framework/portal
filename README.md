# Compliance Framework UI

[![Main](https://github.com/compliance-framework/portal/actions/workflows/main.yml/badge.svg)](https://github.com/compliance-framework/portal/actions/workflows/main.yml)

# Quickstart

1. Make sure pnpm is installed `npm i -g pnpm`
2. `cd` to project
3. Install dependencies `pnpm i`
4. Make sure the configuration service is running.
5. Run dev command `pnpm dev`
6. It will show you what to open in terminal.

# Services

Services should be auto-generated from locally running swagger using `pnpm gen`

**Do not update (will be overwritten):**

- ./src/services/configuration-service

# Config

Configuration is done via vite env variables. See [here](https://vitejs.dev/guide/env-and-mode.html) for how these work.
