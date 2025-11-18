# Portfolio - Sabera Banu

A modern, responsive portfolio website showcasing the work and expertise of **Sabera Banu**, an ML/AI Developer and Python Instructor specializing in Natural Language Processing, Machine Learning, and full-stack development.

🌐 **Live Site:** [saberabanu.netlify.app](https://saberabanu.netlify.app)

---

## ✨ Features

- 🎨 **Modern Dark Theme** - Elegant dark mode design with purple accents
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- ⚡ **Fast Performance** - Built with Vite for lightning-fast builds and hot module replacement
- ✨ **Smooth Animations** - Powered by Framer Motion for engaging user interactions
- 🧠 **Data-Driven** - Content managed through a centralized configuration file
- 🎯 **Accessible** - WCAG-compliant design with semantic HTML and proper contrast ratios
- 🔗 **Interactive Elements** - Clickable project cards, smooth scrolling navigation, and hover effects

---

## 🛠️ Tech Stack

### Core Technologies
- **React 18** - Modern UI library for building component-based interfaces
- **TypeScript** - Type-safe JavaScript for better development experience
- **Vite** - Next-generation frontend build tool for faster development
- **Framer Motion** - Production-ready motion library for React animations

### Styling
- **CSS3** - Custom styling with CSS variables for easy theming
- **Responsive Design** - Mobile-first approach with flexible layouts

---

## 📦 Project Structure

```
portfolio-sabera/
├── public/                 # Static assets
│   ├── calmate-ai-dashboard.png
│   ├── image.png
│   └── sabera-profile-pic.jpeg
├── src/
│   ├── components/         # React components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Icons.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   ├── styles/            # Component-specific CSS
│   ├── content.ts         # Centralized content configuration
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css          # Global styles and CSS variables
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 16.0 or higher
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/saberabanu0001/portfolio-sabera.git
   cd portfolio-sabera
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

4. **Build for production:**
   ```bash
   npm run build
   ```
   Output will be in the `dist/` directory

5. **Preview production build:**
   ```bash
   npm run preview
   ```

---

## 🎨 Customization

### Updating Content

All portfolio content is managed in `src/content.ts`. Simply edit the data objects to update:

- **`heroContent`** - Hero section greeting, name, title, description, and CTAs
- **`aboutContent`** - About section paragraphs, highlights, and guiding principles
- **`projects`** - Project showcase with titles, descriptions, tags, and links
- **`experiences`** - Work experience timeline
- **`skills`** - Technical skills with proficiency levels and soft skills
- **`education`** - Education background and achievements
- **`contact`** - Contact information and social media links

### Changing Colors

Modify CSS variables in `src/index.css`:

```css
:root {
  --bg-primary: #0a0a0a;
  --bg-secondary: #111111;
  --text-primary: #ffffff;
  --text-secondary: #a0a0a0;
  --accent: #6366f1;
  --accent-hover: #4f46e5;
  --border: #1f1f1f;
  --card-bg: #151515;
}
```

### Adding Project Screenshots

1. Place your images in the `public/` directory
2. Update the `image` field in the project object in `src/content.ts`:
   ```typescript
   {
     title: 'Your Project',
     image: '/your-screenshot.png',
     imageAlt: 'Project preview',
     // ... other fields
   }
   ```

---

## 📝 Sections Overview

### 🏠 Hero
- Personal introduction and headline
- Profile picture with gradient background
- Call-to-action buttons

### 👤 About
- Professional background and story
- Focus areas and current learning
- Guiding principles

### 💼 Experience
- Work history with detailed responsibilities
- Clickable organization links
- Timeline layout

### 🎓 Education
- Academic achievements
- University logo integration
- Extracurricular activities

### 🛠️ Skills
- Technical skills with proficiency bars
- Categorized by expertise areas
- Soft skills and learning goals

### 🚀 Projects
- Featured project showcases
- Screenshot previews
- Technology tags
- GitHub and live demo links

### 📬 Contact
- Contact form
- Email and social media links
- Availability information

---

## 🚀 Deployment

### Netlify (Recommended)

1. Push your code to GitHub
2. Connect your repository in Netlify
3. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Deploy!

The site is currently deployed at: [saberabanu.netlify.app](https://saberabanu.netlify.app)

### Other Platforms

- **Vercel:** Connect GitHub repo or deploy `dist` folder
- **GitHub Pages:** Follow Vite's static site deployment guide
- **AWS S3 + CloudFront:** Upload `dist` folder to S3 bucket

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Sabera Banu**

- 🌐 Portfolio: [saberabanu.netlify.app](https://saberabanu.netlify.app)
- 💼 LinkedIn: [linkedin.com/in/sabera-banu-6047a02b3](https://www.linkedin.com/in/sabera-banu-6047a02b3/)
- 💻 GitHub: [@saberabanu0001](https://github.com/saberabanu0001)
- 📧 Email: saberabanu677@gmail.com

---

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- UI animations by [Framer Motion](https://www.framer.com/motion/)
- Deployed on [Netlify](https://www.netlify.com/)

---

**⭐ Star this repo if you find it helpful!**
