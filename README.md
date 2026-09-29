# Jeevan Kumar — Personal Portfolio

[![Vercel Deployment](https://img.shields.io/badge/Vercel-Deployed-black?logo=vercel)](https://vercel.com)
[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-blue?logo=github)](https://pages.github.com)

> **Aspiring AI Engineer | Python Developer | Web Development & Generative AI Enthusiast**  
> 1st-Year B.Tech Student

A modern, clean, minimal, and responsive personal portfolio created for **Jeevan Kumar**, presenting technical foundations honestly as a first-year college student preparing for a career in AI engineering.

---

## 🚀 Resolving Vercel Build & Dependency Errors

If you encountered `Installing dependencies...` errors when deploying on Vercel:
1. **The Root Cause**: React 19 + modern peer dependencies can cause strict npm resolution conflicts on Vercel's build machines during `npm install`.
2. **The Fix Applied**:
   - Added `/.npmrc` with `legacy-peer-deps=true` and `engine-strict=false`.
   - Added `/vercel.json` with explicit `framework: "vite"`, `buildCommand: "npm run build"`, and `outputDirectory: "dist"`.
3. **Vercel Project Settings**:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install --legacy-peer-deps`

---

## 📁 Repository Structure

This repository provides both an active modern web app and a standalone zero-dependency version:

```text
/
├── .npmrc                  # Solves Vercel npm peer dependency resolution
├── vercel.json             # Vercel Vite build & output directory configuration
├── index.html              # Vite React entry point
├── package.json            # Scripts & dependencies
├── src/                    # Full React + TypeScript + Tailwind implementation
│   ├── App.tsx             # Main portfolio layout with active scroll tracking
│   ├── types/index.ts      # TypeScript interfaces
│   ├── data/portfolioData.ts # Data source (projects, skills, social links)
│   └── components/         # Modular accessible components
│       ├── Navbar.tsx      # Sticky 3-zone navigation bar + mobile hamburger
│       ├── Hero.tsx        # Hero with profile-photo placeholder & code snippet
│       ├── About.tsx       # About Me & Currently Exploring card
│       ├── Skills.tsx      # Categorized skills (Beginner/Learning/Exploring)
│       ├── Projects.tsx    # 3 authentic beginner projects + modal viewer
│       ├── Hackathons.tsx  # Transparent hackathons & ideathons section
│       ├── LearningJourney.tsx # 5-stage timeline
│       ├── CurrentFocus.tsx# What I'm Currently Learning
│       ├── FutureGoals.tsx # Where I'm Heading (future roadmap)
│       ├── Contact.tsx     # Clean contact form & social links
│       └── Footer.tsx      # Minimalist footer
│
└── portfolio/              # Standalone Pure HTML5 / CSS3 / Vanilla JS bundle
    ├── index.html          # Ready for zero-dependency static deployment
    ├── style.css           # Clean CSS variables & responsive layout
    ├── script.js           # Modal & navigation script
    └── README.md           # Standalone deployment guide
```

---

## 🛠️ How to Customize

### 1. Replace Email Placeholder
In `src/data/portfolioData.ts` (or `portfolio/index.html`):
- Find `your-email@example.com` and replace it with your email.

### 2. Replace Profile Photo Placeholder
- Save your personal photo as `profile-photo.jpg` in `/assets/images/` or `/public/`.
- In `Hero.tsx`, replace the `.profile-placeholder-box` with your `<img>` tag.

### 3. Social Links
The verified links are already pre-configured:
- GitHub: [https://github.com/jeevankumar110-lgtmand](https://github.com/jeevankumar110-lgtmand)
- LinkedIn: [https://www.linkedin.com/in/jeevan-undefined-16373943b/](https://www.linkedin.com/in/jeevan-undefined-16373943b/)

---

## 🌐 Deployment to GitHub Pages

If you want to host on GitHub Pages for free:
1. Commit and push the repository to GitHub.
2. Go to **Settings** > **Pages**.
3. Under **Source**, choose **GitHub Actions** (for Vite) OR choose **Deploy from a branch** and select `/portfolio` folder.
4. Your site is immediately live with HTTPS!
