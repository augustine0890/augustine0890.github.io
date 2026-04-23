# augustine0890.github.io

Personal portfolio site for Augustine Nguyen, a Data Scientist focused on financial risk, fraud detection, growth analytics, and enterprise AI.

The site is built with [Jekyll](https://jekyllrb.com/) on top of the [academicpages](https://github.com/academicpages/academicpages.github.io) theme and deployed on GitHub Pages.

## What this site is for

- Show Augustine's professional profile quickly and clearly.
- Highlight work history, portfolio projects, and selected skills.
- Keep the content easy to maintain by editing Markdown files directly.
- Stay within the GitHub Pages free hosting workflow.

## Project structure

- `_config.yml` - site metadata, author profile, navigation, plugins, and theme settings.
- `_pages/` - top-level pages such as About, CV, and 404.
- `_portfolio/` - individual project pages shown on the portfolio index.
- `_data/` - navigation and UI text data.
- `_sass/` - theme and layout styles, including the custom LaTeX-inspired visual design.
- `_includes/` and `_layouts/` - shared templates used by Jekyll.
- `assets/js/main.min.js` - committed compiled JavaScript bundle.
- `images/` - profile images, icons, and homepage screenshots.
- `files/` - downloadable PDFs and related documents.

## Local development

Install dependencies and run the Jekyll server:

```bash
bundle install
bundle exec jekyll serve -l -H localhost
```

Open <http://localhost:4000> in your browser.

If you need to rebuild the JavaScript bundle:

```bash
npm install
npm run build:js
```

## Deploy to GitHub Pages

1. Create a public repository named exactly `augustine0890.github.io`.
2. Push this project to the `main` branch.
3. In GitHub, go to `Settings` -> `Pages` and set Source to `Deploy from a branch`.
4. Choose branch `main` and folder `/ (root)`.
5. Wait for the GitHub Pages build to finish.

## Content editing

Most updates should only require editing Markdown files:

- `_pages/about.md` for the homepage content.
- `_pages/cv.md` for the CV page.
- `_portfolio/*.md` for project entries.
- `_data/navigation.yml` for the top navigation.

The visual style is controlled by the SCSS files in `_sass/`. The active theme is set in `_config.yml` with `site_theme: "latex"`.

## Notes

- The site is static and has no backend.
- Comments and analytics are disabled in the current configuration.
- The layout is tuned for an academic, paper-like presentation rather than a generic blog theme.
