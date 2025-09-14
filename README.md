# React Virtual Demo

**A professional showcase of scalable and non-scalable user list implementations in React, demonstrating efficient rendering, infinite scrolling, and performance metrics.**

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Best Practices](#best-practices)
- [License](#license)

---

## Overview

This project demonstrates two approaches for rendering large datasets in React:

1. **Scalable Users** – Implements incremental loading with infinite scroll, optimizing performance and memory usage.
2. **Non-Scalable Users** – Loads the entire dataset at once, ideal for comparison and benchmarking purposes.

Both implementations feature **user cards**, a **responsive grid layout**, and display **load time metrics** for performance insight.

---

## Features

- Incremental fetching with infinite scroll (scalable page)
- Full dataset rendering (non-scalable page)
- Responsive grid layout with 4–6 cards per row
- Real-time **load time measurement** for API calls and page fetches
- Production-ready CSS styling
- DRY and reusable code architecture
- TypeScript for type safety and maintainability

---

## Demo

> Placeholder for screenshots or GIFs:
> - <img width="2009" height="1109" alt="image" src="https://github.com/user-attachments/assets/09717a8a-d8e2-432a-8321-d6dbd55f989b" />

> - <img width="2013" height="1112" alt="image" src="https://github.com/user-attachments/assets/7eaf551a-ef7e-4028-8133-ebc717d008a9" />


---

## Installation

1. Clone the repository:
git clone https://github.com/UNAjay/VirtualGrid-scalable.git

2. Install dependencies:
npm install

3. Start the development server:
npm run dev

4. Open your browser at(might vary):
http://localhost:5173/

## Project Structure
react-virtual-demo/
│
├── src/
│   ├── api/           # API calls and TypeScript types
│   ├── components/    # UserCard component
│   ├── hooks/         # Custom hooks (useUsers)
│   ├── pages/         # Scalable.tsx & NonScalable.tsx
│   └── styles/        # CSS files for layout and styling
│
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md

## Technologies Used

React 19 – Functional components with hooks

TypeScript – Type safety and maintainability

Vite – Lightning-fast development and build tool

CSS Grid – Responsive multi-column layout

Fetch API – Mock user data fetching

ESLint – Linting and code quality enforcement

## Best Practices

Modular and DRY architecture

Incremental data fetching for scalable pages

CSS separated into reusable files; no inline styles

Load time monitoring for performance insights

ESLint configured for TypeScript and React hooks

Responsive design for professional production-ready UI

## License

MIT License © 2025 Ajay U N
