# Legalisierung Jetzt

A multilingual Nuxt website for the Legalisierung Jetzt campaign, focused on the demand for legalisation for undocumented migrants in Berlin and a wider push for open borders and equal rights.

## Overview

This project is a static multilingual content site built with Nuxt and the Nuxt Content module. It combines campaign pages, localized copy, and a CMS-driven editorial workflow for publishing content in multiple languages.

The site supports:

- German, English, Spanish, and Arabic
- locale-aware routing and navigation
- static generation for deployment on Netlify
- content-driven pages via Nuxt Content
- CMS access through Decap Admin
- Netlify Identity login flow for admin access

## Stack

- Nuxt 4
- Vue 3
- @nuxt/content
- @nuxtjs/i18n
- @nuxt/icon
- Sass for styling
- Decap CMS / Netlify CMS admin interface
- Cloudinary image delivery

## Project structure

- `app.vue` — app shell
- `pages/` — page views and route components
- `content/` — markdown content and localized entries
- `components/` — reusable UI blocks and layout
- `assets/scss/` — global styles and design tokens
- `public/admin/` — admin configuration and static CMS assets
- `nuxt.config.ts` — Nuxt and i18n configuration

## Local development

Requirements:

- Node.js 18+
- npm

Install dependencies:

```bash
yarn install
```

Start the app locally:

```bash
yarn dev
```

Then open:

- http://localhost:3000
- http://localhost:3000/admin for the CMS admin UI

## Admin / CMS

This project includes a Netlify-based admin interface. The admin entry point is served under `/admin`, and Netlify Identity is configured in the site head to redirect logged-in users to the CMS dashboard.

The admin UI is intended to be used in a Netlify deployment environment. If you want to run the CMS locally, make sure the frontend is already running and follow the relevant Netlify/Decap setup for your environment.

## Build and deploy

Generate a production build:

```bash
npm run generate
```

Preview the generated site locally:

```bash
npm run preview
```

### Netlify

Recommended Netlify settings:

- Build command: `npm run generate`
- Publish directory: `dist`

## Content model

The content lives mainly in the `content/` folder and is organized by section, such as home, header, footer, letter, signatures, and page data. The homepage and page content are localized via the i18n configuration and content frontmatter.

## Notes

- The default locale is German.
- The site uses prefix routing except for the default locale.
- Browser language detection is enabled, with redirect choice stored in a cookie.
- Arabic content is configured with RTL support.
