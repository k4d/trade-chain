---

# Trade Chain

## About the Project

This project is a web application built with [Astro](https://astro.build), [React](https://reactjs.org) and [Tailwind CSS](https://tailwindcss.com), designed to provide an intuitive interface for managing trade chains.

---

## 📁 Project Structure

Here's an overview of the main directories and files:

```
/project-root
├── /public             # Static assets (e.g., images, fonts, favicon)
├── /src                # Source code
│   ├── /components     # Reusable components
│   │   ├── /ui         # UI components
│   │   └── /features   # Feature-specific components
│   ├── /layouts        # Layout templates used across pages
│   ├── /pages          # Astro pages — each file maps to a route
│   ├── /styles         # Global styles and CSS files
│   ├── /utils          # Utility functions and helpers
├── /astro.config.mjs   # Astro configuration
├── package.json        # Project dependencies and scripts
├── tsconfig.json       # TypeScript configuration (optional)
└── README.md           # Description of the project and its features
```

---

## 🛠 Technologies Used

- **[Astro](https://astro.build)** – A modern static site builder that supports multiple frameworks.
- **[React](https://reactjs.org)** – For building interactive UI components.
- **[Tailwind CSS](https://tailwindcss.com)** – Utility-first CSS framework for styling.
- **TypeScript** *(optional)* – For type-safe development.
- **Markdown & MDX** *(optional)* – For writing documentation or blog content.

---

## ✨ Features Implemented

- Responsive layout using Tailwind CSS
- Reusable `Typography`, `Link`, and `NavLink` components
- Clean global styles with custom font setup
- Separated **UI components** (`/components/ui`) from **feature components** (`/components/features`)

---

## 🧪 Development Setup

To run this project locally:

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser to view it.

---

## 🚀 Deployment

You can deploy the project using any static hosting service such as:
- Vercel

Use the build command:

```bash
npm run build
```

---

## 🧩 Future Improvements

- Add integration with real-time crypto data (e.g., CoinGecko API)
- Add unit tests for components
- Create Storybook documentation for UI components

---

## 📝 License

This project is open source and available under the MIT License.

---
