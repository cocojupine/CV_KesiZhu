# Kesi Zhu - Product Portfolio & Resume Website

🔗 **GitHub Repository:** [https://github.com/cocojupine/CV_KesiZhu](https://github.com/cocojupine/CV_KesiZhu)

## 🤖 ATTENTION AI ASSISTANTS
This `README_user.md` acts as your master schema and architectural guideline. When asked to generate, refactor, or update code, **you MUST strictly adhere to the rules below.** Do NOT hardcode content into React components. Read data from the Markdown files in the `/content` directory.

---

## 🏗️ Architecture & Routing Logic (Hub & Spoke)

The website follows a "Hub & Spoke" conversion funnel:
1. **The Hub (Main Page - `/src/app/page.tsx`):** A high-density Landing Page containing summaries of all sections (Hero, Skills, Work Experience, Projects, About Me).
2. **The Spokes (Detail Pages):** Immersive standalone pages for specific content (e.g., `/app/about/page.tsx`, `/app/projects/[slug]/page.tsx`).
3. **Global Navbar (`/src/components/Navbar.tsx`):** Sticky frosted-glass navbar. 
   * Links to main page sections use anchor hashes with smooth scroll (e.g., `/#skills`, `/#experience`, `/#projects`).
   * Links to detail pages use standard routing (e.g., `/about`).
   * Includes a prominent "Download Resume" CTA.

---

## 🎨 Design System & UI/UX Guidelines

* **Theme:** Dark Mode Only. Deep dark gradients (e.g., `bg-zinc-950`).
* **Card UI (Bento Box):** Glassmorphism effects `bg-white/5 backdrop-blur-md border border-white/10` with `rounded-3xl` corners and subtle `hover:-translate-y-1` animations.
* **Typography:** Clean sans-serif. High contrast for primary text (`text-zinc-100`), subdued for secondary (`text-zinc-400`).
* **Tags/Badges:** Pill-shaped capsules for skills and tech stacks (`rounded-full px-4 py-1.5 text-sm`).
* **CSS Framework:** We are using Tailwind CSS v4. Custom classes like `.glass-card` and `.glass-badge` must be defined using the `@utility` directive in `src/app/globals.css`.

---

## 📂 Directory Structure

```text
📦 CV_KesiZhu
 ┣ 📂 content/               # 🧠 MASTER DATA: Content source of truth
 ┃ ┣ 📄 Main.md              # Homepage content (Hero, Skills, Experience summaries)
 ┃ ┗ 📂 projects/            # Detail project MDX files
 ┣ 📂 public/                # 🖼️ ASSETS: Images, GIFs, Videos, PDF
 ┃ ┣ 📂 assets/
 ┃ ┗ 📄 CV_KesiZhu.pdf
 ┣ 📂 src/                   # 💻 CODE: React Components
 ┃ ┣ 📂 app/
 ┃ ┃ ┣ 📄 globals.css        # Tailwind v4 utility definitions
 ┃ ┃ ┣ 📄 page.tsx           # Main Landing Page (Hub)
 ┃ ┃ ┣ 📂 about/             # About Me Detail Page
 ┃ ┃ ┗ 📂 projects/          # Dynamic Project Detail Pages
 ┃ ┣ 📂 components/
 ┃ ┃ ┣ 📄 Navbar.tsx         # Global Hybrid Navigation Bar
 ┃ ┃ ┗ 📂 ui/                # Buttons, Cards, Badges
📝 Content Schema Instructions
When parsing Main.md or any content files to generate UI, strictly follow these parsing rules:

Sections: Map ## headings (e.g., "核心技能") to semantic HTML <section> elements with appropriate id attributes for navbar anchoring (e.g., id="skills").

Tags: If you see [标签] Tag1 / Tag2, split by / and render as <span className="glass-badge"> elements.

Proof of Work: Lines starting with ↳ should be rendered as secondary text describing the impact (text-sm text-zinc-400).

Images/Videos: Always map [插入图片<filename.ext>] to <img src="/assets/filename.ext" /> or a <video> tag accordingly. Ensure media uses object-cover.