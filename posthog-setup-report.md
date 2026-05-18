<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the Skilled registry project (TanStack Start + Clerk auth). The following changes were made:

- **`src/routes/__root.tsx`** — Added `PostHogProvider` from `@posthog/react` wrapping the entire app with reverse proxy config (`api_host: "/ingest"`), exception capture enabled, and debug mode in dev.
- **`vite.config.ts`** — Added PostHog reverse proxy rules for `/ingest`, `/ingest/static`, and `/ingest/array` to route analytics traffic through the local dev server, improving reliability and avoiding CORS.
- **`src/utils/posthog-server.ts`** — Created a singleton `posthog-node` client (`getPostHogClient()`) for future server-side event capture, following the same env variable pattern.
- **`src/routes/index.tsx`** — Added `usePostHog` hook with `browse_registry_clicked` and `publish_skill_clicked` captures on the hero CTA links.
- **`src/components/SkillCard.tsx`** — Added `usePostHog` hook with `skill_install_command_copied` (including skill metadata) and `skill_card_opened` captures; also added `captureException` in the clipboard error handler.
- **`src/components/Navbar.tsx`** — Added `usePostHog` hook with `sign_in_link_clicked` and `sign_up_link_clicked` captures on auth nav links.
- **`.env`** — Set `VITE_PUBLIC_POSTHOG_PROJECT_TOKEN` and `VITE_PUBLIC_POSTHOG_HOST` (`.gitignore`-protected).

## Events instrumented

| Event | Description | File |
|---|---|---|
| `browse_registry_clicked` | User clicked "Browse Registry" hero CTA | `src/routes/index.tsx` |
| `publish_skill_clicked` | User clicked "Publish Skill" hero CTA | `src/routes/index.tsx` |
| `skill_install_command_copied` | User copied an install command from a skill card | `src/components/SkillCard.tsx` |
| `skill_card_opened` | User clicked "Open" on a skill card | `src/components/SkillCard.tsx` |
| `sign_in_link_clicked` | User clicked Sign In in the navbar | `src/components/Navbar.tsx` |
| `sign_up_link_clicked` | User clicked Sign Up in the navbar | `src/components/Navbar.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics dashboard](/dashboard/1599108)
- [Auth CTA Clicks (Sign In & Sign Up)](/insights/WtfijVx2) — Daily trend of sign-in and sign-up link clicks
- [Hero CTA Clicks (Browse vs Publish)](/insights/C3b8FAWE) — Browse Registry vs Publish Skill intent split
- [Skill Install Commands Copied](/insights/yyXgYTDy) — Key engagement signal: copying install commands
- [Skill Card Opens](/insights/DPKOSL1C) — Browsing depth: how often users open skill details
- [Auth Conversion Funnel (Sign Up → Sign In)](/insights/qgxND4Si) — Auth flow effectiveness funnel

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
