# Next Portfolio Boilerplate

A modern portfolio starter built with Next.js, React, and TypeScript.

## Tech Stack

- Next.js (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- next-themes
- Lucide icons
- ESLint + Prettier
- Husky + lint-staged

## Local Development

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open http://localhost:3000.

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run typecheck
npm run format
npm run format:check
```

## Project Structure

```text
src/
	app/
		layout.tsx
		page.tsx
		globals.css
	components/
		section.tsx
		theme-provider.tsx
		theme-toggle.tsx
	lib/
		site.ts
		utils.ts
```

## Customize Your Portfolio

- Update personal content in `src/lib/site.ts`.
- Update metadata in `src/app/layout.tsx`.
- Extend sections/components in `src/components`.
