# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm start` — run the dev server (Create React App).
- `npm run build` — production build into `build/`.
- `npm test` — Jest watcher (react-scripts). Run a single test with `npm test -- --testPathPattern=<file>` or `-t "<test name>"`.
- `npm run deploy` — runs `predeploy` (build) then `gh-pages -d build` to publish to the `gh-pages` branch.

There is no separate lint script; ESLint runs via `react-scripts` (config `react-app`, `react-app/jest` in `package.json`). TypeScript uses `strict: true` (`tsconfig.json`).

## Architecture

This is a Create React App (TypeScript) static site that renders a game-development portfolio entirely from a single data file. There is no backend — the deployed artifact is static HTML/JS hosted on GitHub Pages.

**Content is data-driven.** `src/data.ts` exports `PersonalInfo: AboutMeData` and `games: Game[]`. The shapes (and the enums `Platform`, `GameEngine`, `MediaType`, `LinkImageSource`) live in `src/types.ts`. Adding/editing portfolio content means editing `src/data.ts` — no component changes are needed for new games. Image and CV paths in `data.ts` reference files under `public/` (e.g. `public/images/games/<game>/...`, `public/files/<cv>.pdf`).

**Routing.** `src/App.tsx` wraps the app in `HashRouter` (paired with `"homepage": "./"` in `package.json` so it works under the GitHub Pages subpath). Three routes: `/` → `MainPage` (renders the `games` array via the `Game` component), `/about-me` → `AboutMe` (consumes `PersonalInfo`), `/contact` → `ContactPage`. `SelfSummary` and `Footer` render outside the `<Routes>`, so they appear on every page.

**Contact form is a WhatsApp deep link.** `ContactPage` does not POST anywhere — it builds a `https://wa.me/<number>?text=...` URL using `process.env.REACT_APP_WA_NUMBER` and opens it. The WhatsApp number must be set in a root `.env` file as `REACT_APP_WA_NUMBER=+<countrycode><number>`. `src/config.ts` also references `REACT_APP_SERVER_URL`, but no live server integration is currently wired up.

**Styling.** Uses `styled-components`. Shared layout primitives `Column` and `Row` live in `src/Styles/StyledComponents.ts`; global styles in `src/Styles/index.css`. Components define their own styled wrappers inline. Responsive breakpoints use `@media (max-width: 768px)` consistently.

**Meta tags.** `src/MetaTags.tsx` (via `react-helmet-async`) sets `<title>`/OG tags from `PersonalInfo`, so updating `data.ts` also updates social previews.

## Deployment notes

- `homepage: "./"` plus `HashRouter` is what makes routing work on GitHub Pages without server-side rewrites — do not switch to `BrowserRouter` without also configuring Pages routing.
- `npm run deploy` publishes to the `gh-pages` branch of the current remote; the user controls which branch GitHub Pages serves under **Settings → Pages**.
