# Ritik Sharma — Portfolio

> A premium, award-worthy developer portfolio built with React 18, Vite 5, Tailwind CSS v3, and Framer Motion 11.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🛠️ Tech Stack

- **React 18** — UI framework
- **Vite 5** — Build tool & dev server
- **Tailwind CSS v3** — Utility-first styling
- **Framer Motion 11** — Animations
- **React Hook Form + Zod** — Form handling & validation
- **Lucide React** — Icons
- **React Helmet Async** — SEO meta tags

## 📂 Structure

```
src/
├── components/
│   ├── layout/     — Navbar, Footer, ScrollProgress, MobileMenu
│   ├── sections/   — Hero, About, Skills, Projects, Achievements, CPStats, Contact
│   └── ui/         — Reusable UI components
├── hooks/          — Custom React hooks
├── utils/
│   ├── constants/  — Data files (projects, skills, etc.)
│   └── animations.js
└── index.css       — Global styles & CSS variables
```

## 📝 Customization

- **Profile photo**: Replace `public/profile.jpg`
- **Resume**: Replace `public/resume.pdf`
- **Project images**: Replace files in `public/projects/`
- **OG image**: Replace `public/og-image.jpg` (1200×630)
- **Content**: Edit files in `src/utils/constants/`

## 📦 Deployment

Build and deploy the `dist/` folder to any static host:

```bash
npm run build
```

Works with Vercel, Netlify, GitHub Pages, etc.

---

Built with ❤️ by Ritik Sharma
