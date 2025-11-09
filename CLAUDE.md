# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 application for CS Expo 2025 - a two-day event showcase platform featuring project galleries, hall of fame, and event information (CS Expo and Dev Day). The app uses React 19, TypeScript, and includes custom WebGL effects and 3D graphics.

## Key Technologies

- **Framework**: Next.js 15 with App Router and Turbopack
- **Runtime**: React 19.1.0
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui (New York style) + custom components
- **Database**: Supabase (SSR-enabled)
- **Animations**: Framer Motion, GSAP
- **3D Graphics**: Three.js, OGL (for custom WebGL shaders)
- **Package Manager**: pnpm

## Development Commands

```bash
# Start development server (uses Turbopack)
pnpm dev

# Build for production (uses Turbopack)
pnpm build

# Start production server
pnpm start

# Format code
pnpm prettier --write .
```

## Project Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── events/                   # Event pages (expo, devday)
│   │   └── data/                 # Event-specific data (speakers, panelists, boxes)
│   ├── gallery/                  # Photo gallery page
│   │   └── data/                 # Gallery event data
│   ├── hall-of-fame/             # Awards and best projects
│   │   ├── data/                 # Awardee and project data
│   │   ├── types/                # TypeScript types for HOF
│   │   ├── hooks/                # Custom hooks (e.g., pagination)
│   │   └── ui/                   # HOF-specific UI components
│   ├── projects/                 # Project showcase
│   │   ├── [groupdetails]/       # Dynamic route for individual projects
│   │   └── data/                 # Project data
│   ├── layout.tsx                # Root layout with font setup
│   └── page.tsx                  # Homepage
├── components/
│   ├── global/                   # Shared components (nav-bar, footer, Hero, Galaxy, PixelBlast)
│   ├── events/                   # Event-specific components (schedules, carousels, logos)
│   ├── gallery/                  # Gallery components (carousel, grid items)
│   ├── hall-of-fame/             # Hall of Fame components
│   ├── home/                     # Homepage components (hero-section, sponsor-carousel)
│   ├── projects/                 # Project-related components (filters, cards, grids)
│   ├── ui/                       # shadcn/ui components
│   ├── FaultyTerminal.tsx        # Custom WebGL terminal effect (OGL shaders)
│   ├── GlobalLoader.tsx          # App-wide loading component
│   └── TextType.tsx              # Text typing animation component
├── hooks/
│   ├── isUseMobile.ts            # Mobile detection hook
│   └── useTextSync.tsx           # Text animation synchronization context
├── lib/
│   ├── supabase/
│   │   ├── client.ts             # Browser Supabase client
│   │   └── server.ts             # Server-side Supabase client (handles async cookies)
│   └── utils.ts                  # Utility functions (cn for className merging)
└── data/
    └── groups.ts                 # Group/project data
```

## Architecture Patterns

### Next.js App Router
- Uses Next.js 15 App Router with React Server Components
- Dynamic routes for individual projects: `/projects/[groupdetails]`
- Async params handling in dynamic routes (Next.js 15 requirement)

### Data Organization
- Each feature area has its own `/data` directory for static content
- Data files export TypeScript-typed arrays/objects
- Projects use slug-based routing for SEO-friendly URLs

### Supabase Integration
- **Server-side**: Use `createClient` from `@/lib/supabase/server.ts` - requires awaiting `cookies()` before passing to createClient
- **Client-side**: Use `createClient` from `@/lib/supabase/client.ts`
- Environment variables required: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Remote images configured in `next.config.ts` for Supabase storage domain

### Component Architecture
- **Global components**: Shared across all pages (nav-bar, footer, Hero)
- **Feature components**: Scoped to specific sections (events/, gallery/, hall-of-fame/, projects/)
- **Hero component**: Reusable with variants ('expo' | 'devday') and multiple text directions
- **TextSyncProvider**: Context-based animation synchronization for coordinated text effects

### Custom Effects
- **FaultyTerminal**: WebGL-based terminal effect using OGL library with custom shaders
  - Used as background effect on homepage
  - Highly configurable (scanlines, glitch, chromatic aberration, etc.)
- **PixelBlast**, **Galaxy**: Custom visual components for backgrounds

### Styling Conventions
- Tailwind CSS v4 with custom configuration
- Component-specific styles use Tailwind utility classes
- `cn()` utility from `@/lib/utils` for conditional className merging
- Custom fonts: Geist, Geist Mono, Chivo Mono (Google Fonts) + DreamerTM, Monster Racing (local fonts)

### Animation Libraries
- **Framer Motion**: Page transitions and component animations
- **GSAP**: Timeline-based animations
- **Custom**: useTextSync hook for synchronized typing/deleting effects

## Important Implementation Notes

### Async Params (Next.js 15)
When accessing route params in dynamic routes, always await them:
```typescript
export default async function ProjectPage({ params }: ProjectPageProps) {
  const { groupdetails } = await params; // Must await
  // ...
}
```

### Supabase Server Client
The server-side Supabase client requires proper async handling:
```typescript
import { createClient } from '@/lib/supabase/server';
import { cookies } from 'next/headers';

const supabase = await createClient(cookies());
```

### Image Optimization
- Use Next.js `Image` component for all images
- Remote images from Supabase are whitelisted in `next.config.ts`
- Protocol pattern: `https://rwatggvmjanptoxqwdqu.supabase.co/storage/v1/object/public/**`

### shadcn/ui Configuration
- Style: "new-york"
- Uses CSS variables for theming
- Base color: neutral
- Custom registry: `@react-bits` for extended components
- Path aliases configured in both `tsconfig.json` and `components.json`

## Path Aliases

Always use these path aliases (defined in `tsconfig.json`):
- `@/components` → `src/components`
- `@/lib` → `src/lib`
- `@/hooks` → `src/hooks`
- `@/app` → `src/app` (implicitly)
- `@/data` → `src/data`

## Adding New Components

1. **shadcn/ui components**: Run `npx shadcn@latest add <component-name>`
2. **Custom components**: Place in appropriate feature directory under `src/components/`
3. **Global components**: Add to `src/components/global/`
4. **Feature-specific**: Create or use existing feature directories (events/, projects/, etc.)

## Environment Setup

Required environment variables:
```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

## TypeScript Configuration

- Strict mode enabled
- Target: ES2017
- Module resolution: bundler (Turbopack-optimized)
- Path aliases configured for `@/*` imports
