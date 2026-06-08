# 🚀 Premium Interactive Developer Portfolio

Welcome to my developer portfolio repository! This is a modern, fast, and fully responsive single-page web application designed to showcase my expertise, career milestones, technical skill categories, and deep-dive specializations as a **Full Stack Software, AI, Cloud & DevOps Engineer**.

This portfolio has been built from the ground up using **Angular 21 (Standalone Components)**, modular TypeScript, and vanilla CSS with custom variables for theme transitions, glowing indicators, and clean layout patterns.

---

## 🌟 Key Features

* **Glassmorphism & Neon Theme Engine:** A fully customizable, accessible Dark/Light mode theme system utilizing CSS custom properties for seamless transitions.
* **Interactive Skills Dashboard:** Real-time search and filter functionality across 11 distinct technology domains (Frontend, Backend, DevOps, Data Science, Deep Learning, GenAI, Agentic AI, etc.) powered by Angular signals.
* **Desktop S-Curve Winding Timeline:** A custom CSS Grid timeline that renders your academic and professional journey as a winding snake path on desktop screens and falls back to a clean vertical list on mobile devices.
* **Specialization deep-dive (DevOps, Cloud, Mobile & AI):** Interactive tabs showcasing granular expertise in AWS services, Kubernetes deployment strategies, Terraform IaC, Docker, PyTorch Neural Networks, LangChain/LangGraph Agentic workflows, and database tuning.
* **Dynamic Portfolio Slider:** Touch-friendly, smooth-scrolling portfolio slider displaying real-world projects with customizable technology tags and live deployment links.
* **Programmatic PDF Resume Generator:** Contains the integration pattern for a custom Python ReportLab engine that compiles database details into a single-page pixel-perfect resume (`public/resume.pdf`).
* **Custom 404 Page:** An interactive "Page Not Found" component with navigation assistance and a clean fallback mechanism.

---

## 🛠️ Technology Stack & Architecture

* **Core Framework:** [Angular 21](https://angular.dev/) (Standalone Component Architecture)
* **Programming Languages:** TypeScript, HTML5, Vanilla CSS3 (custom layouts & animations)
* **Reactive State:** Angular Signals (for reactive searching, filtering, and state mapping)
* **Routing:** Angular Router (for clean URL handling, resume paths, and 404 routing)
* **Icons & Typography:** FontAwesome 6, Google Fonts (Inter & Outfit)
* **Testing & Tooling:** Vitest (unit testing) & Angular CLI

---

## 📁 Key File Map

If you want to inspect the implementation of specific features, refer to the following codebase links:

* **Core Routing:** [app.routes.ts](file:///d:/ishtiaqahmad/ishtiaqahmadportfolio/src/app/app.routes.ts) — Dynamic route wiring for `/resume`, `/home`, and fallback `/404` pages.
* **Timeline Logic:** [about.component.ts](file:///d:/ishtiaqahmad/ishtiaqahmadportfolio/src/app/components/about.component.ts) — The matrix grid mapping math and connector lines for the winding snake timeline.
* **Skills Panel:** [skills.component.ts](file:///d:/ishtiaqahmad/ishtiaqahmadportfolio/src/app/components/skills.component.ts) — Search signals, categorized list array, and interactive filtering.
* **Expertise Tabs:** [expertise.component.ts](file:///d:/ishtiaqahmad/ishtiaqahmadportfolio/src/app/components/expertise.component.ts) — In-depth breakdown details for cloud, containers, orchestration, deep learning, and databases.
* **PDF Resume Viewer:** [resume.component.ts](file:///d:/ishtiaqahmad/ishtiaqahmadportfolio/src/app/components/resume.component.ts) — The page component hosting the embedded canvas and direct download link.
* **404 Not Found:** [not-found.component.ts](file:///d:/ishtiaqahmad/ishtiaqahmadportfolio/src/app/components/not-found.component.ts) — Styled user-friendly error landing page.

---

## 🚀 Getting Started

### 📋 Prerequisites

Make sure you have Node.js installed (v18 or higher recommended) along with `npm`.

### 1️⃣ Installation

Clone the repository and install the project dependencies:

```bash
git clone https://github.com/ishtiaqahmadbhatti/ishtiaqahmadportfolio.git
cd ishtiaqahmadportfolio
npm install
```

### 2️⃣ Running the Development Server

To launch the application locally on `http://localhost:4200/`:

```bash
npm run start
```

The application will automatically watch files and reload whenever modifications are saved.

### 3️⃣ Building the Application

To compile the project and bundle all optimized assets into the `dist/` production folder:

```bash
npm run build
```

### 4️⃣ Running Unit Tests

To execute component unit tests using the high-performance Vitest test runner:

```bash
npm run test
```

---

## 📄 Automated Resume PDF Generation (Python)

The resume downloaded from the website (`public/resume.pdf`) is programmatically generated using a custom Python layout engine to ensure a single-page structure.

To run the generator yourself:

1. Ensure Python 3.x is installed.
2. Install the ReportLab package:

   ```bash
   pip install reportlab
   ```

3. Run the compiler script (found under the scripts or artifact backup directories) to rebuild and output the PDF directly into `public/resume.pdf`.

---

## ✉️ Contact & Social Links

* **Location:** Rawalpindi, Pakistan
* **Email:** [ishtiaq.ahmad.devpro@gmail.com](mailto:ishtiaq.ahmad.devpro@gmail.com)
* **LinkedIn:** [linkedin.com/in/ishtiaqahmadbhatti/](https://www.linkedin.com/in/ishtiaqahmadbhatti/)
* **GitHub Profile:** [github.com/ishtiaqahmadbhatti](https://github.com/ishtiaqahmadbhatti)
* **GitLab Profile:** [gitlab.com/ishtiaqahmadbhatti](https://gitlab.com/ishtiaqahmadbhatti)
