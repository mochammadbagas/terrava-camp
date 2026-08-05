<p align="center">
  <img src="public/terrava.svg" alt="Terrava Campground Logo" width="180">
</p>

<p align="center">
  <strong>Terrava, a premium, modern campground and outdoor adventure booking platform.</strong><br>
Designed to provide a luxury camping experience with dynamic cabin, tent, and RV park bookings.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white" alt="Laravel">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
  <img src="https://img.shields.io/badge/Inertia.js-9553E9?style=for-the-badge&logo=Inertia&logoColor=white" alt="Inertia">
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite">
</p>

<hr>

## ✨ Highlights

- **Luxury Dark Theme UI**: Meticulously designed dark theme focusing on a natural forest aesthetic, combining deep moss greens (`#7fa07c`) and warm ember accents (`#e0964f`).
- **Lightning Fast Experience**: Monolithic architecture powered by **Inertia.js 3.0**, providing an SPA-like instant navigation experience without the overhead of a separate API.
- **Component Driven**: Constructed using highly reusable, accessible **React 19** views and layout components.
- **Supercharged Dev Workflow**: Powered by the blazing-fast compilation of **Vite 8** with concurrent asset bundling.

---

## 🚀 Tech Stack

| Domain                 | Technology                                  | Description                                                      |
| :--------------------- | :------------------------------------------ | :--------------------------------------------------------------- |
| **Backend Framework**  | [Laravel 13.x](https://laravel.com)         | Core routing, logic, and elegant backend structure via PHP 8.3+. |
| **Frontend Framework** | [React 19](https://react.dev)               | Interactive and deeply reactive view components.                 |
| **Routing Bridge**     | [Inertia.js 3.0](https://inertiajs.com)     | Seamlessly gluing Laravel and React together.                    |
| **Styling**            | [Tailwind CSS 4.0](https://tailwindcss.com) | Utility-first CSS for exceptionally rapid design implementation. |
| **Module Bundler**     | [Vite 8](https://vitejs.dev)                | Next-generation ultra fast tooling and HMR.                      |
| **Database**           | SQLite _(Default)_                          | Fully adaptable to scalable drivers like PostgreSQL or MySQL.    |

---

## 📋 Prerequisites

To work on this project locally, make sure your development environment meets the following requirements:

- **PHP** `>= 8.3`
- **Composer** (PHP dependency manager)
- **Node.js** (`v20+` recommended) & **npm**
- **Git**

---

## 🛠️ Local Installation Guide

You can easily get this project up and running by following these steps:

<details>
<summary><b>1. Clone & Download Dependencies</b> (Click to expand)</summary>
<br>

First, clone the repository to your local machine:

```bash
git clone https://github.com/mochammadbagas/terrava-camp.git
cd terrava-camp
```

Install backend PHP utilities and frontend Node packages:

```bash
composer install
npm install
```

</details>

<details>
<summary><b>2. Environment & Database Setup</b> (Click to expand)</summary>
<br>

Duplicate the `.env.example` template to scaffold your local environment profile:

```bash
cp .env.example .env
```

Generate your unique Laravel application encryption key:

```bash
php artisan key:generate
```

Run database migrations to scaffold the tables (Laravel will automatically prompt you to create the SQLite database file if it doesn't find one):

```bash
php artisan migrate
```

</details>

<details>
<summary><b>3. Start Development Servers</b> (Click to expand)</summary>
<br>

Run the combined orchestration command. This command spins up your Laravel server, initiates the queue listener, and fires up Vite's HMR compilation concurrently!

```bash
composer run dev
```

🎉 The application is now fully accessible at **[http://localhost:8000](http://localhost:8000)**!

</details>

> 💡 **Quick Start Shortcut**: Instead of performing steps 2 manual setups, you can quickly invoke `composer run setup` after `composer install`, which completely tracks environment copying, key generating, migrations, and package building automatically.

---

## 🏗️ Project Structure

A quick overview of the core directories to help you navigate the codebase:

- `app/` - Laravel backend core logic (Controllers, Models, Middleware).
- `resources/js/pages/` - React page components that correspond to Inertia routing.
- `resources/js/components/` - Highly reusable and stylized UI components.
- `routes/web.php` - The primary entry point for backend routes and Inertia mappings.
- `database/` - Where the SQLite database file, migrations, and seeders live.

---

## 💻 Available Commands

Here are some helpful utility scripts integrated into this project for testing, formatting, and building:

**Frontend Ecosystem:**

- `npm run build` - Compile and minify optimized React/Tailwind assets for production deployment.
- `npm run lint` - Scan JavaScript/TypeScript code using ESLint to spot potential issues.
- `npm run format` - Auto-format React components and code using Prettier.
- `npm run types:check` - Silently check TypeScript syntax error typings.

**Backend Ecosystem:**

- `composer run lint` - Scan, analyze and elegantly fix PHP code styling issues utilizing Laravel Pint.
- `composer test` - Run the automated test suites using Pest.

---

## 📄 License

The Laravel framework and this project template are open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

---

<p align="center">
  <i>Developed and maintained by <b>Mochammad Bagas</b>.</i>
</p>
