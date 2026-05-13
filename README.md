# 🚀 Lava Landing Page – Modernized with Next.js

**Author:** Joseph Adogeri  
**Version:** 1.0  
**Date:** April 26, 2026  

<div align="center">
  <img src="https://blog.logrocket.com/wp-content/uploads/2021/01/Screen-Shot-2021-01-28-at-10.58.42-AM.png" alt="NextJS Logo" width="400">
</div>

  <!-- Production Infrastructure Badges -->
  [Deployment - Live Web Application](https://jadogeri.github.io/lava_landing_page_nextjs/)  
  [Code Repository - GitHub](https://github.com/jadogeri/lava_landing_page_nextjs)

  ### 🌐 [Interactive Interface Live on GitHub Pages](https://jadogeri.github.io/lava_landing_page_nextjs/)


---

## 📄 Description

This repository presents a fully modernized transformation of the classic **Lava Landing Page** template. Originally authored as a static, multi-file HTML configuration backed by heavy jQuery frameworks, this codebase completely migrates the architecture into a single-page application (SPA) environment built on **Next.js 15 (App Router)**. 

By decoupling presentation layouts into modular React components, replacing broken template asset routing with environment variables, and utilizing automated GitHub Actions pipelines, this website compiles natively into clean, highly optimized static assets deployed straight through GitHub Pages.

## Acknowledgments

This website template was derived from the [Lava Landing Page](https://templatemo.com/tm-540-lava-landing-page) template by [TemplateMo](https://templatemo.com).

---


## 📍 Table of Contents

*   [🛠 Tech Stack Architecture](#-tech-stack-architecture)
*   [📦 Local Environment Setup](#-local-environment-setup)
*   [🤖 Automated Deployment Pipeline](#-automated-deployment-pipeline)
*   [🧠 Post-Mortem Technical Challenges & Breaks](#-post-mortem-technical-challenges--breaks)
*   [📄 Project Directory Layout Map](#-project-directory-layout-map)
*   [📜 Open-Source Licensing](#-open-source-licensing)

---

## 🛠 Tech Stack Architecture

*   **Application Framework:** [Next.js 15](https://nextjs.org) (Utilizing App Router layout structures).
*   **Compilation Execution:** Native Static HTML Exports via Next `output: 'export'` configuration settings.
*   **Interactivity Management:** Functional React Tree Hooks (`useState`, `useEffect`) executing dynamic client-side evaluations to prevent layout conflicts.
*   **Styling & Structure:** Native integration of clean Bootstrap v4 grid columns and custom template asset wrappers.
*   **Automated Continuous Deployment:** GitHub Actions pipeline checking dependencies and publishing to GitHub Pages.

---

## 📦 Local Environment Setup

Initialize your system components and execute local development previews via your primary CLI:

```bash
# 1. Clone your target repository files down locally
git clone github.com
cd lava_landing_page_nextjs

# 2. Step inside the application sub-workspace container
cd lava

# 3. Download the exact required module tracking files
npm install

# 4. Spin up your automated compilation watcher thread
npm run dev
```
👉 *Your localized Next.js staging page will establish an operational listener at: `http://localhost:3000/`*

---

## 🤖 Automated Deployment Pipeline

The workflow logic inside `.github/workflows/deploy.yml` completely automates the tracking of source changes pushed to your repository. It intercepts modifications, dives into your subfolder directory, triggers a static build run, and updates the live GitHub Pages servers:

```yaml
# Inside .github/workflows/deploy.yml
defaults:
  run:
    working-directory: ./lava # Restricts code processes directly to your inner directory

steps:
  - name: Checkout Source Code
    uses: actions/checkout@v4

  - name: Compile and Export Static HTML
    run: npm run build # Outputs clean flat assets into an inner /out directory

  - name: Upload Build Artifacts
    uses: actions/upload-pages-artifact@v3
    with:
      path: ./lava/out # Deploys directly to the target public domain endpoint URL
```

---

## 🧠 Post-Mortem Technical Challenges & Breaks

### **Whitespace Hydration Node Conflicts**
*   **The Problem:** React 19 rules threw critical runtime failures because the formatter injected unexpected space characters or hidden line breaks between structural root tags (`<html>`, `<head>`, and `<body>`).
*   **The Fix:** Re-aligned structural syntax markers flush against each other (e.g., `><head>`) within your core `layout.tsx` wrapper to isolate properties cleanly without structural parsing issues.

### **Legacy Navigation Script Collisions**
*   **The Problem:** Template script structures inside `custom.js` attached smooth-scrolling animation layers onto **every single link**. Clicking the nav dropdown caused fatal errors (`Cannot read properties of undefined (reading 'top')`) because empty path hashes returned undefined layout calculations.
*   **The Fix:** Converted dropdown containers into strict `<button>` components. This bypasses jQuery anchor listener criteria completely, letting React state (`useState`) control menus securely without crashing runtime processes.

### **Production Asset 404 Resolution**
*   **The Problem:** Standard slash shortcuts (`/assets/`) broke when deploying to production because the site serves from a subfolder (`/lava_landing_page_nextjs/`) rather than a domain root.
*   **The Fix:** Configured a persistent `basePath` rule inside your `next.config.ts` mapping framework, and updated source paths to evaluate using clean context variable strings.

---

## 📄 Project Directory Layout Map

```text
📂 lava_landing_page_nextjs/ (Workspace Root)
├── 📂 .github/workflows/
│   └── 📄 deploy.yml             # 🚀 Automated GitHub Actions CI/CD Pipeline Configuration
├── 📂 lava/                      # 🌐 APPLICATION SUBFOLDER WORKSPACE (Next.js Application Root)
│   ├── 📂 app/
│   │   ├── 📄 globals.css        # Global CSS Framework System Overrides
│   │   ├── 📄 layout.tsx         # Root Structural Layout (Asset Scripts & Link Engine Injection)
│   │   └── 📄 page.tsx           # React Component Workspace Migration of the Lava Template
│   ├── 📂 public/
│   │   ├── 📄 .nojekyll          # Instructs GitHub to bypass processing engines for _next subfolders
│   │   └── 📂 assets/            # Native template assets (css, fonts, images, custom scripts)
│   ├── 📄 next.config.ts         # Static Compiler Target Logic & Subfolder BasePath Mapping Rules
│   └── 📄 package.json           # Node Module Tracking & Dependency Framework Scripts
├── 📄 templatemo_540_lava_landing_page.zip # Historical Template Backup Archive File Source
└── 📄 README.md                  # Complete System Technical Documentation Mapping
```

---

## 📜 Open-Source Licensing

All foundational resource blocks and original script codes contained within this workspace are distributed under the **MIT License Rules**. You are free to modify, duplicate, and push additions according to standard usage profiles.
