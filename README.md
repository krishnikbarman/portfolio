# Portfolio Website - Krishnik Barman

A modern, responsive portfolio website showcasing my work as a junior full-stack web developer. Built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **Modern UI** - Clean, professional interface with smooth animations
- **Project Showcase** - Detailed project cards with GitHub repository links
- **Skills Section** - Organized display of technical skills and competencies
- **Contact Section** - Easy-to-use contact information with social media links
- **Resume Download** - Direct PDF download functionality
- **Dark/Light Theme** - Theme provider support for user preferences

## 🛠️ Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Package Manager:** pnpm

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/krishnikbarman/portfolio-website-for-developer.git
cd portfolio-website-for-developer
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
portfolio-website-for-developer/
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── sections/            # Page sections
│   │   ├── hero-section.tsx
│   │   ├── about-section.tsx
│   │   ├── skills-section.tsx
│   │   ├── projects-section.tsx
│   │   └── contact-section.tsx
│   ├── ui/                  # UI components (shadcn/ui)
│   └── theme-provider.tsx
├── public/                  # Static assets
│   └── Krishnik_Barman_Resume.pdf
├── lib/                     # Utility functions
└── hooks/                   # Custom React hooks
```

## 📝 Customization

### Update Personal Information

1. **Contact Details:** Edit `components/sections/contact-section.tsx`
2. **Projects:** Modify project data in `components/sections/projects-section.tsx`
3. **Skills:** Update skills array in `components/sections/skills-section.tsx`
4. **About Me:** Edit content in `components/sections/about-section.tsx`
5. **Resume:** Replace `public/Krishnik_Barman_Resume.pdf` with your resume

### Styling

- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Component styles: Inline Tailwind classes

## 🚀 Deployment

### Deploy on GitHub Pages

1. Push your code to GitHub repository
2. Run the deployment command:
```bash
npm run deploy
```

This will:
- Build the static site to `/out` folder
- Create `.nojekyll` file (for proper asset loading)
- Deploy to `gh-pages` branch
- Your site will be live at: `https://krishnikbarman.github.io/portfolio-website-for-developer/`

**First-time setup:**
- Go to your GitHub repository settings
- Navigate to Pages section
- Set source to "Deploy from a branch"
- Select `gh-pages` branch and `/ (root)` folder
- Save and wait for deployment

### Deploy on Vercel

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy with one click

**Note:** For Vercel deployment, remove or comment out `basePath` and `assetPrefix` in `next.config.mjs`

### Build for Production

```bash
npm run build
npm start
# or
pnpm build
pnpm start
```

## 🌐 Live Site

**GitHub Pages:** [https://krishnikbarman.github.io/portfolio-website-for-developer/](https://krishnikbarman.github.io/portfolio-website-for-developer/)

## 📱 Sections

- **Hero** - Introduction with call-to-action buttons
- **About** - Professional summary and background
- **Skills** - Technical skills organized by category
- **Projects** - Featured projects with descriptions and links
- **Contact** - Contact information and social media links

## 📫 Contact

- **Email:** krishnikbarman12@gmail.com
- **GitHub:** [github.com/krishnikbarman](https://github.com/krishnikbarman)
- **LinkedIn:** [linkedin.com/in/krishnik-barman-](https://www.linkedin.com/in/krishnik-barman-/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Note:** This portfolio is designed for a junior full-stack developer actively seeking internship opportunities. Feel free to fork and customize it for your own use!
