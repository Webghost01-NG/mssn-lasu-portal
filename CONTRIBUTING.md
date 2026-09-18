# MSSN LASU Web Portal — Engineering & Architecture Guide

> **Lead Architect:** Developer X (WEB_GHOST)  
> **Target Audience:** Developer X (Lead), Developer Y (Software Developer), Developer Z (No-Code Developer)

---

## 1. Directory Structure Standard

This repository strictly follows the Next.js 14+ App Router standard:

```
mssn-lasu-portal/
├── app/                      # Next.js App Router (pages, layouts, route handlers)
│   ├── globals.css           # Global typography, color tokens, and CSS variables
│   ├── layout.tsx            # Global layout shell (PrayerRibbon, Navbar, Footer)
│   ├── page.tsx              # The Front Porch (Editorial Homepage)
│   └── api/                  # Serverless Route Handlers (dues, verify, prayer)
├── components/               # Modular UI components
│   ├── Navbar.tsx            # Navigation header with category dots & mobile drawer
│   ├── PrayerRibbon.tsx      # Multi-campus Salah countdown & Hijri ribbon
│   ├── ThreeDoors.tsx        # DesignX-style 01 / 02 / 03 rooms component
│   ├── FacultiesMarquee.tsx  # Infinite faculty ticker
│   └── Footer.tsx            # Editorial footer with campus contacts
├── lib/                      # Shared helper utilities & clients
│   └── utils.ts              # Tailwind class merge (cn)
├── types/                    # Global TypeScript interfaces & schemas
├── public/                   # Static assets (logos, seals, icons)
└── .github/workflows/        # CI/CD pipelines (GitHub Actions)
```

---

## 2. Path Aliases

Always use standard root path aliases instead of relative directory traversal:
- `@/components/*` -> `./components/*`
- `@/lib/*` -> `./lib/*`
- `@/types/*` -> `./types/*`
- `@/app/*` -> `./app/*`

---

## 3. Design Tokens & Visual Fidelity (DesignX Reference)

- **Palette:**
  - Primary Background: Linen Cream (`#FBF9F4`, `#F5F2EA`)
  - Primary Forest: Deep Emerald (`#153C2E`, `#0B241C`)
  - Accent Amber: Sahara Gold (`#D97706`, `#FBBF24`)
  - Semantic Mint: Emerald (`#368f74`, `#10B981`)
- **Typography:**
  - Headlines: `Fraunces` (Editorial Serif, italicized emphasis)
  - Interface & Body: `Plus Jakarta Sans`
  - Badges, Stats & Serial Codes: `JetBrains Mono`

---

## 4. Git & Pull Request Workflow

1. Always check out focused branch per task: `feat/issue-number-short-name`
2. Never commit secrets, `.env`, or API keys.
3. Ensure `npm run build` and `npx tsc --noEmit` pass cleanly before submitting PR.
4. All PRs must reference the corresponding issue (e.g. `Fixes #1`).
