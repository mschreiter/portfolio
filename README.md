# Personal Portfolio Website

This is a responsive personal portfolio website built with Next.js and TailwindCSS. It features a modern design with dark mode support and multi-language capabilities.

## Features

- 🌓 **Dark Mode Support**: Toggle between light and dark themes
- 🌍 **Internationalization**: Support for multiple languages (English and German)
- 📱 **Fully Responsive**: Works on all devices from mobile to desktop
- 🍔 **Mobile-friendly Navigation**: Burger menu for smaller screens
- ⚡ **Static Site Generation**: Fast loading and optimal performance
- 🎨 **Custom Design**: Modern, clean interface with smooth animations

## Technology Stack

- **Framework**: [Next.js](https://nextjs.org) (v16)
- **Runtime**: [Bun](https://bun.sh)
- **Styling**: [TailwindCSS](https://tailwindcss.com) (v4)
- **Testing**: Jest with Testing Library
- **Internationalization**: next-intl
- **Deployment**: GitHub Pages

## Getting Started

First, install dependencies:

```bash
bun install
```

Then, run the development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for Production

To create a production build:

```bash
bun run build
```

## Deployment

This project is configured for GitHub Pages deployment:

```bash
bun run deploy
```

## Customization

You can modify the theme colors in `tailwind.config.ts` and translations in the `messages` directory.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
