# Portfolio - Sabera Banu

A modern, responsive portfolio website built with React, TypeScript, and Vite.

## Features

- 🎨 Modern, section-based storytelling for Sabera Banu
- 📱 Fully responsive layout with polished micro-interactions
- ⚡ Built with Vite + React + TypeScript for fast iteration
- ✨ Motion choreography powered by Framer Motion
- 🧠 Data-driven configuration via `src/content.ts`
- ♿ Accessibility-focused typography and contrast

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Framer Motion** - Animations
- **CSS3** - Styling

## Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Customization

### Update Personal Information

Almost all content lives in `src/content.ts`. Update the following blocks:

- `heroContent` for headline, summary, and CTAs
- `aboutContent` for story paragraphs, highlights, and principles
- `projects`, `experiences`, `education`, `activities` arrays for résumé data
- `skills` object for technical/soft skill categories and learning goals
- `contact` block for email and social links

### Color Scheme

The color scheme can be customized in `index.css` by modifying the CSS variables:

```css
:root {
  --bg-primary: #0a0a0a;
  --bg-secondary: #111111;
  --accent: #6366f1;
  --accent-hover: #4f46e5;
}
```

## Deployment

You can deploy this portfolio to various platforms:

- **Vercel**: `npm run build` then deploy the `dist` folder
- **Netlify**: Connect your GitHub repo or drag and drop the `dist` folder
- **GitHub Pages**: Follow the Vite deployment guide

## License

This project is open source and available under the MIT License.

