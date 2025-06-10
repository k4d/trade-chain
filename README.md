# Astro + React Example

## About the Project

This project is a web application built with Astro. It focuses on creating a user-friendly interface for managing trade chains. The application utilizes modern web technologies to provide a responsive and efficient experience.

---

## Project Structure

The project is structured as follows:

- `/public`: This directory contains static assets that will be served directly by the web server. This includes files like `/public/favicon.svg`.
- `/src`: This is the main source directory for the application.
  - `/src/pages`: This directory contains the `.astro` files that represent the pages of the application. Each `.astro` file in this directory corresponds to a route. For example, `/src/pages/index.astro` is the homepage.
  - `/src/layouts`: This directory contains `.astro` files that are used as layouts for pages, providing a consistent structure and design. For example, `/src/layouts/Layout.astro`.
  - `/src/styles`: This directory contains global styles for the application, such as `/src/styles/global.css`.
- `/astro.config.mjs`: This is the main configuration file for Astro.
- `/package.json`: This file manages the project's dependencies and scripts.
- `/tsconfig.json`: This file is the configuration for TypeScript, if used in the project.

---

## Technologies Used

This project is built using Astro, a modern static site builder, and utilizes React for component development.

---

```sh
npm create astro@latest -- --template framework-react
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/framework-react)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/framework-react)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/framework-react/devcontainer.json)

This example showcases Astro working with [React](https://react.dev).

Write your React components as `.jsx` or `.tsx` files in your project.
