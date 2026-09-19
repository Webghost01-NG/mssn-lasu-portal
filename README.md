# 🏛️ MSSN LASU Next-Gen Web Portal

[![CI Quality Gate](https://github.com/Webghost01-NG/mssn-lasu-portal/actions/workflows/ci.yml/badge.svg)](https://github.com/Webghost01-NG/mssn-lasu-portal/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-emerald.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-14.2-black.svg)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC.svg)](https://tailwindcss.com/)

The official unified digital home for the **Muslim Students' Society of Nigeria, Lagos State University (MSSN LASU)**. Serving over 12,000 Muslim students across **Ojo Main Campus, Epe Campus, and Ikeja Campus (LASUCOM)**.

---

## 🎨 Design Philosophy & Benchmark

Inspired by the editorial elegance and craftsmanship of **[DesignX Community](https://designx.community/)**, adapted to a distinguished academic Islamic context:
- **Palette**: Organic Forest Green (`#153C2E`), Warm Linen Cream (`#FBF9F4`, `#F5F2EA`), and Sahara Gold (`#D97706`).
- **Typography**: Editorial Serif (`Fraunces`) for dignified titles, clean Sans (`Plus Jakarta Sans`) for interface reading, and Monospace (`JetBrains Mono`) for transaction hashes and serial numbers.
- **Micro-Interactions**: Three Doors (`01`, `02`, `03`) entry cards, infinite marquee ticker for all 11 faculties, and live multi-campus Salah countdown ribbon.

---

## 🚀 Core Features

1. **The Academic Vault**: Instant client-side search and inline PDF preview for past questions and class notes across all 11 faculties.
2. **Automated Dues & Verifiable Digital ID**: Paystack-powered automated dues checkout that generates a cryptographic QR-verifiable digital student membership card.
3. **Multi-Campus Salah & Spiritual Engine**: Real-time prayer calculation tailored to Ojo, Epe, and Ikeja GPS coordinates with live Adhan countdown.
4. **Sisters' Directorate & Counseling Desk**: Specialized sister's portal and anonymous counseling ticketing desk with encrypted routing to Da'wah scholars.

---

## 👥 The Engineering Team

| Role | Team Member | Focus Area |
| :--- | :--- | :--- |
| **Team Lead & Architect** | **W3BGHOST** (`@Webghost01-NG`) | System Architecture, Design System Tokens, CI/CD, Code Reviews & Cloudflare Security |
| **Software Developer** | **NureniJamiu** | Next.js Frontend, Supabase Database, Paystack Webhooks & Digital ID QR Engine |
| **No-Code Developer** | **cre8hive27-ship-it** | Headless CMS, Exco Directory, Make.com Automations & Communication Pipelines |

---

## 🛡️ Repository Rules & Workflow

To maintain the highest code quality, we strictly enforce GitHub branch protection on the `main` branch:

1. **No Direct Pushes:** All work must be completed on feature branches (e.g., `feat/`, `fix/`).
2. **Pull Requests Mandatory:** Developers must open a Pull Request to merge into `main`.
3. **Lead Approval Required:** Every PR requires at least **1 approving review** from the Team Lead (**W3BGHOST**) before merging.
4. **CI/CD Quality Gate:** The `Lint, Typecheck & Build` automated pipeline must pass successfully.
5. **Team Badges:** Co-authorship trailers are automatically integrated to ensure all collaborating developers get official contribution credit!

---

## 🛠️ Getting Started

### Prerequisites
- Node.js 18.17+ or 20+
- npm 9+

### Installation & Run

```bash
# Clone repository
git clone https://github.com/Webghost01-NG/mssn-lasu-portal.git
cd mssn-lasu-portal

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to view the live portal.

---

## 📋 Project Roadmap

Sprint tracking, assignments, and blocker dependencies are managed directly on the [GitHub Issues Dashboard](https://github.com/Webghost01-NG/mssn-lasu-portal/issues).

---

*Lead Architect: **W3BGHOST** (MSSN LASU Web Team Lead)*
