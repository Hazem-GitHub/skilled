# Skilled

Skilled is a TanStack Start application for discovering, publishing, and operating reusable agentic skills. It is built as a registry for procedural agent capabilities, with authentication, analytics, and a Firebase Data Connect backed skill catalog.

The app currently focuses on the public registry experience: loading recently created skills from Data Connect, rendering them as installable skill cards, and capturing key product events through PostHog.

## Screenshot

![Skilled app screenshot](/image.png)

## Features

- Public landing page for the Skilled registry
- Recently created skills loaded through a TanStack Start server function
- Skill cards with author metadata, tags, usage details, stats, and copyable install commands
- Clerk-powered sign-in and sign-up routes
- Firebase Data Connect schema for users and skills
- Generated Data Connect SDK under `src/dataconnect-generated`
- PostHog analytics for auth, hero CTA, card open, install command copy, and clipboard error events
- TanStack Router, TanStack Query, and TanStack Devtools integration
- Tailwind CSS styling with Biome for linting and formatting

## Tech Stack

- [TanStack Start](https://tanstack.com/start) for the full-stack React app
- [TanStack Router](https://tanstack.com/router) for file-based routing
- [TanStack Query](https://tanstack.com/query) for data coordination
- [React 19](https://react.dev/) with the React Compiler
- [Firebase Data Connect](https://firebase.google.com/docs/data-connect) for the registry database layer
- [Clerk](https://clerk.com/) for authentication
- [PostHog](https://posthog.com/) for product analytics
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Biome](https://biomejs.dev/) for linting and formatting
- [Vitest](https://vitest.dev/) for tests

## Project Structure

```text
.
├── dataconnect/                  # Firebase Data Connect schema and connector operations
│   ├── schema/schema.gql          # User and Skill tables
│   └── connectors/queries.gql     # Public skill query
├── public/                        # Web manifest, icons, and static files
├── src/
│   ├── components/                # Navbar, SkillCard, visual components
│   ├── dataconnect-generated/     # Generated Firebase Data Connect SDK
│   ├── integrations/              # TanStack Query and devtools integrations
│   ├── lib/                       # Firebase client and local utilities
│   ├── routes/                    # TanStack Router file routes
│   ├── start.ts                   # TanStack Start entry
│   └── styles.css                 # Global app styles
├── vite.config.ts                 # Vite, TanStack Start, Tailwind, PostHog proxy
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 22 or newer
- npm
- A Clerk application
- A Firebase project with Data Connect configured
- Optional: a PostHog project for analytics

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a local environment file:

```bash
cp .env.example .env.local
```

Then set the values required by the app:

```bash
# Clerk
VITE_CLERK_PUBLISHABLE_KEY=pk_test_...

# Firebase
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_APP_ID=...

# PostHog, optional but recommended
VITE_PUBLIC_POSTHOG_PROJECT_TOKEN=phc_...
VITE_PUBLIC_POSTHOG_HOST=https://us.posthog.com
```

`VITE_CLERK_PUBLISHABLE_KEY` is listed in `.env.example`. The Firebase variables are read by `src/lib/firebase.ts`, and the PostHog variables are read by `src/routes/__root.tsx` and `src/utils/posthog-server.ts`.

### Run Locally

```bash
npm run dev
```

The dev server runs on [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
npm run build
npm run preview
```

## Data Model

Skilled uses Firebase Data Connect with two core tables:

- `User`: keyed by `clerkId`, with email, username, and avatar metadata
- `Skill`: a reusable agentic skill with title, description, category, tags, install command, prompt configuration, usage example, counters, author, and creation timestamp

The public `GetSkills` query searches across title, description, category, and tags, then returns skills ordered by creation date. The home route calls this query from a TanStack Start server function and renders the result as skill cards.

## Authentication

Authentication is handled by Clerk through `@clerk/tanstack-react-start`.

Current routes:

- `/sign-in/*`
- `/sign-up/*`

The root layout wraps the app in `ClerkProvider`, and the navbar switches between auth links and the Clerk user menu based on signed-in state.

## Analytics

PostHog is wired through `PostHogProvider` in the root route. In development, analytics requests are proxied through Vite using `/ingest` routes to avoid CORS issues.

Instrumented events include:

- `browse_registry_clicked`
- `publish_skill_clicked`
- `skill_install_command_copied`
- `skill_card_opened`
- `sign_in_link_clicked`
- `sign_up_link_clicked`

Server-side PostHog support is prepared in `src/utils/posthog-server.ts` for future server event capture.

## Available Scripts

```bash
npm run dev       # Start the local development server on port 3000
npm run build     # Build the production app
npm run preview   # Preview the production build locally
npm run test      # Run Vitest once
npm run lint      # Run Biome linting
npm run format    # Format files with Biome
npm run check     # Run Biome checks
```

## Development Notes

- Routes are file-based and live in `src/routes`.
- The generated route tree is stored in `src/routeTree.gen.ts`.
- Data Connect generated code lives in `src/dataconnect-generated`; regenerate it when schema or connector operations change.
- The current home page links to future registry actions such as browsing and publishing skills. Add the corresponding routes under `src/routes` as those workflows are implemented.
- `posthog-setup-report.md` documents the analytics integration that has already been applied.

## Contributing

1. Create a feature branch.
2. Install dependencies with `npm install`.
3. Add or update routes, components, schema, or generated data code as needed.
4. Run `npm run check` and `npm run test` before opening a pull request.
5. Keep environment-specific secrets in local `.env*` files only.
