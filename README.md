# Trade Chain

## About the Project

This project is a web application built with **Astro**, **React** and **Tailwind CSS**, designed to provide an intuitive interface for managing trade chains.

---

## 🚀 Quick Start

```bash
git clone <repo-url> trade-chain
cd trade-chain
npm install         # install deps
npm run dev         # open http://localhost:4321
```

> Open [http://localhost:4321](http://localhost:4321) in your browser to view it.

## 🛠 Tech Stack

| Tool                                      | Purpose                         |
| ----------------------------------------- | ------------------------------- |
| [Astro](https://astro.build)              | Static / hybrid site generation |
| [React](https://reactjs.org)              | Interactive UI components       |
| [Tailwind CSS](https://tailwindcss.com)   | Utility-first styling           |
| ESLint 9 + Prettier + Husky + lint-staged | Lint/format & pre-commit        |
| astro-compress                            | Build-time gzip + brotli        |

## 📁 Project Structure

Here's an overview of the main directories and files:

```
trade-chain
├─ public/            # robots.txt, images, fonts
├─ src/
│  ├─ components/
│  │  ├─ ui/          # reusable building blocks
│  │  └─ features/    # domain-specific blocks
│  │  └─ uikit       # UI Kit demonstration components
│  ├─ layouts/        # Astro layouts
│  ├─ pages/          # file-based routing
│  ├─ styles/         # global CSS / Tailwind overrides
│  └─ utils/          # helpers
├─ .husky/            # git hooks (committed)
├─ .prettierrc        # Prettier configuration
├─ astro.config.mjs   # Astro + compress integration
├─ eslint.config.js   # ESLint configuration
├─ README.md          # ← you are here
└─ tsconfig.json      # TypeScript configuration
```

## 🧪 Available Scripts

| Command                | Description                   |
| ---------------------- | ----------------------------- |
| `npm run dev`          | Start dev server with HMR     |
| `npm run build`        | Production build (compressed) |
| `npm run preview`      | Preview build locally         |
| `npm run lint`         | ESLint check (flat-config)    |
| `npm run lint:fix`     | ESLint + Prettier auto-fix    |
| `npm run format`       | Prettier all files            |
| `npm run format:check` | Prettier dry-run              |

> Pre-commit hook (Husky + lint-staged) runs lint + format only on staged files.

## 🏗 Code Style & Tooling

- ESLint 9 – flat config (eslint.config.js)
- Prettier – .prettierrc with Astro plugin
- Tabs – 4-spaces except package.json/.prettierrc/eslint.config.js (2-spaces)
- Conventional commits – feat:, fix:, chore:… (commitlint ready)

## 🌍 Deployment

Astro builds to dist/ with gzip & brotli.
Push to Vercel, Netlify, GitHub Pages or any static host:

```
npm run build
```

## 🧩 Future Improvements

- [ ] Storybook for component docs
- [ ] Real-time data (CoinGecko / Binance API)
- [ ] i18n routing
- [ ] Unit tests with Vitest

## 📝 License

MIT © Trade Chain Contributors.
