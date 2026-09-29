# Jeevan Kumar — Personal Portfolio

> **Aspiring AI Engineer | Python Developer | Web Development & Generative AI Enthusiast**  
> 1st-Year B.Tech Student

A minimal, elegant, professional personal portfolio website designed for a first-year undergraduate technology student.

---

## Folder Structure

```text
portfolio/
│
├── index.html          # Semantic HTML5 markup with all portfolio sections
├── style.css           # Clean CSS3 design system with CSS custom properties
├── script.js           # Lightweight vanilla JS for mobile menu & project modals
├── assets/
│   ├── images/
│   │   └── profile-photo.jpg   # Place your personal photo here
│   └── icons/                  # Optional custom SVG/favicon icons
└── README.md           # Documentation, customization & deployment guide
```

---

## How to Customize

### 1. Adding Your Real Email
Open `index.html` (and `src/data/portfolioData.ts` if using React):
- Search for `your-email@example.com`.
- Replace with your real email address (e.g. `yourname@gmail.com`).

### 2. Replacing the Profile Photo Placeholder
- Save your portrait image as `profile-photo.jpg`.
- Place it inside `assets/images/profile-photo.jpg`.
- In `index.html`, locate the `.profile-placeholder-box` in the hero section and replace the SVG with:
  ```html
  <img src="assets/images/profile-photo.jpg" alt="Jeevan Kumar" style="width:108px;height:108px;border-radius:12px;object-fit:cover;">
  ```

### 3. Adding Future Projects
In `index.html`, inside `<div class="projects-grid">`, copy and paste a `<article class="project-card">` block:
```html
<article class="project-card">
  <div>
    <div class="project-type-tag">Your Project Type</div>
    <h3 class="project-title">Your Project Name</h3>
    <p class="project-description">
      Describe the problem solved, concepts practiced, and tools used.
    </p>
    <div class="project-tags">
      <span class="tech-tag">Python · Gemini API · React</span>
    </div>
  </div>
  <div class="project-actions">
    <button class="btn-project-view" data-project="your-project-id">View Project &rarr;</button>
    <a href="https://github.com/jeevankumar110-lgtmand" target="_blank" rel="noopener noreferrer" class="btn-project-github">GitHub</a>
  </div>
</article>
```
In `script.js`, add your project details into the `projectData` object for the popup modal.

---

## Deployment Instructions

### Method 1: GitHub Pages (Free & Instant)
1. Push this `portfolio` folder to your GitHub repository `https://github.com/jeevankumar110-lgtm/GEN-ai-engineering`.
2. Go to your repository on GitHub.
3. Click on **Settings** &rarr; **Pages** (under Code and automation).
4. Under **Build and deployment** &rarr; **Branch**:
   - Select `main` branch.
   - Select `/ (root)` or `/portfolio` folder.
   - Click **Save**.
5. Wait 1-2 minutes; your portfolio will be live at:
   `https://jeevankumar110-lgtm.github.io/GEN-ai-engineering/`

### Method 2: Vercel Deployment
1. Go to [vercel.com](https://vercel.com) and import your GitHub repository.
2. In Project Settings:
   - **Framework Preset**: Vite (if deploying the full React app) OR Other (if deploying static HTML).
   - If deploying with Vite, ensure `.npmrc` with `legacy-peer-deps=true` is present in the repository root (already included to avoid dependency installation errors).
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
3. Click **Deploy**.
