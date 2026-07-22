# BrainWeb.ai — Landing Site

**Live site:** [https://brainwebai.vercel.app/](https://brainwebai.vercel.app/)

This repository contains the marketing and landing website for **BrainWeb.ai**, a multi-agent AI workspace that ships as a native desktop app for Windows, macOS, and Linux (FastAPI backend and Next.js frontend, packaged with Electron). The site introduces the product, explains how it works, and provides platform-specific downloads of the desktop app.

> This repository covers the public-facing landing page only. The core product — backend, in-app frontend, and desktop shell — is maintained in a separate repository: [BrainWeb.ai](https://github.com/masterharry9889/BrainWeb.ai).

## Overview

- **Hero** — animated 3D hero visual built with Three.js, `@react-three/fiber`, and `@react-three/drei`
- **Features** — auto-rotating carousel highlighting core product capabilities (multi-agent orchestration, native desktop app, Python backend, Next.js performance, cross-platform support, open-source foundation)
- **How It Works** — a three-step overview: install the app, connect your models, work in your workspace
- **Download** — OS-aware download section that detects Windows, macOS, or Linux from the user agent and links to the matching installer
- **Navbar / Footer** — site navigation, GitHub link, and download call-to-action

## Tech Stack

| Layer | Stack |
|---|---|
| Framework | Next.js 16 (App Router), React 19, TypeScript |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion |
| 3D | Three.js, `@react-three/fiber`, `@react-three/drei` |
| Icons | `lucide-react` |
| Deployment | Vercel |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout, metadata
│   ├── page.tsx          # Landing page composition
│   └── globals.css
├── components/
│   ├── 3d/
│   │   └── HeroModel.tsx     # Animated 3D hero visual
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── HowItWorks.tsx
│   │   └── Download.tsx      # OS-detecting download links
│   └── ui/
│       └── CustomCursor.tsx
└── public/
    └── downloads/         # Platform installers referenced by Download.tsx
```

## Deployment

The site is deployed on [Vercel](https://vercel.com) at [https://brainwebai.vercel.app/](https://brainwebai.vercel.app/). Pushes to the default branch redeploy automatically.

## Related Repositories

- [BrainWeb.ai](https://github.com/masterharry9889/BrainWeb.ai) — the core product: FastAPI backend, in-app Next.js frontend, and Electron desktop app
