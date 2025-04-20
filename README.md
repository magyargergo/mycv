# My CV - Professional Resume Website

A modern, responsive resume website built with Next.js, Tailwind CSS, and Flowbite.

## Project Structure

The project follows a clean, organized structure for better maintainability:

```
app/
├── site/              # Root site layout and pages
│   ├── page.tsx       # Homepage
│   ├── layout.tsx     # Root layout
│   ├── error.tsx      # Error handling
│   └── loading.tsx    # Loading states
│
├── components/        # UI components organized by feature/purpose
│   ├── Content/       # Content-related components
│   ├── Navigation/    # Navigation components
│   └── ...            # Other components
│
├── theme/             # Theme-related code
│   ├── config.ts      # Theme configuration
│   ├── provider.tsx   # Theme provider component
│   ├── toggle.tsx     # Theme toggle component
│   └── hydration.ts   # Theme hydration script
│
├── styles/            # Global styles
│   └── globals.css    # Global CSS including theme variables
│
├── lib/               # Utilities and helpers
│   └── data.ts        # Data fetching functions
│
├── data/              # Data files (JSON)
│   ├── about.json
│   ├── education.json
│   └── experience.json
```

## Features

- 🌓 Dark/Light mode toggle with system preference detection
- 📱 Fully responsive design for all device sizes
- 🎨 Custom themeable UI with CSS variables
- ⚡ Fast performance with Next.js App Router
- 🔍 SEO optimized
- 🧩 Component-based architecture

## Theme System

The theme system is implemented with:

- CSS variables for colors and design tokens
- React context for theme state management
- localStorage for persisting user preferences
- Server/client hydration handling to prevent flicker

## Development

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Adding New Features

When adding new features or components:

- Place components in the appropriate directory based on their purpose
- Follow the existing naming conventions
- Use the theme system for consistent styling
- Update this README if you add major new functionality

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
