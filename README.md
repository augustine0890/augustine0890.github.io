# augustine0890.github.io

Project onboarding document for Augustine Nguyen's personal portfolio site.
This README is written for both humans and LLM/code-agent sessions. Read it
before editing the repository.

## 1. Project Purpose

This repository powers `https://augustine0890.github.io`, a professional
portfolio site for Augustine Nguyen.

Augustine is a Data Scientist based in the Republic of Korea with experience
across financial risk, fraud detection, growth analytics, generative AI, and
computer vision. The primary audience is hiring managers, technical recruiters,
and senior practitioners evaluating him for data science or ML engineering
roles. The secondary audience is collaborators who need a fast, credible
reference for his background.

The site should communicate production impact and quantitative rigor quickly.
It should not read like a generic blog, a generic academicpages clone, or an
academic publication archive.

## 2. Current Positioning

The portfolio positions Augustine around three connected domains:

- Financial risk and fraud detection
- Growth analytics and experimentation
- Computer vision and perception systems

The causal inference background is important. His Mendelian Randomization,
instrumental variable, DiD, and experimental-methods experience should be
preserved as a differentiator rather than flattened into generic analytics
language.

High-signal facts that should not be changed without confirmation:

- ABACUS credit scoring served 10M+ users.
- AZEN Global systems handled 5B+ records.
- Credit scoring accuracy improved by 3%.
- AISOL won Champion, FPT AI Hackathon 3, in 2025.
- CV languages are English (fluent) and Vietnamese (native). Do not add Korean.
- The section label is "Credentials", not "Certifications".

## 3. Stack And Deployment Model

This is a static Jekyll site based on a fork of the
`academicpages.github.io` theme.

Runtime model:

- No backend
- No database
- No authentication
- No server-side rendering
- No runtime PDF generation
- GitHub Pages builds the static site from the `main` branch

Deployment:

- Public repository name should be `augustine0890.github.io`.
- GitHub Pages source should be `main` / root.
- Pushing to `main` triggers the GitHub Pages build.
- Typical propagation time is 1-3 minutes.

The upstream academicpages theme is not tracked as a Git remote. Treat this
repository as owned code, not as a clean vendored dependency that can be
updated by pulling upstream.

## 4. Repository Map

This section is the quickest way to orient yourself in the repo. Read it
before editing anything substantial.

Core configuration:

- `_config.yml` - site metadata, author profile, theme selection, collections,
  plugins, analytics settings, GitHub Pages settings. This is the first place
  to inspect when navigation, theme selection, author metadata, collection
  behavior, or deploy behavior looks wrong.
- `Gemfile` - Ruby/Jekyll dependencies. Uses `github-pages` as the main
  compatibility constraint. Windows-only support gems also live here.
- `package.json` - JavaScript bundling scripts for the committed JS bundle.
  Usually irrelevant for content-only work.

Content:

- `_pages/about.md` - home page at `/`. Contains positioning, toolkit,
  credentials, and the highest-level narrative about Augustine.
- `_pages/cv.md` - CV page at `/cv/`. Contains the chronological professional
  record and the markup for the CV download button.
- `_pages/portfolio.html` - portfolio index at `/portfolio/`. Usually only
  changes if the collection archive behavior or wording needs adjustment.
- `_pages/404.md` - 404 page.
- `_portfolio/*.md` - individual project pages. These are the source of truth
  for project detail pages and portfolio card excerpts.
- `files/augustine-nguyen-cv.pdf` - downloadable static CV PDF. Replace the
  file in place when refreshing the public CV PDF.

Navigation and data:

- `_data/navigation.yml` - top navigation. Current nav is About, Projects, CV.
  This should stay minimal unless site scope changes deliberately.
- `_data/ui-text.yml` - UI string overrides inherited from academicpages.
  Usually untouched unless a stock theme label is leaking into the UI.
- `_data/authors.yml` - mostly upstream placeholder data; not central to this
  single-author site.

Templates:

- `_layouts/` - Liquid layouts. `single` and `archive` are the layouts that
  matter most for pages and portfolio items.
- `_includes/` - reusable Liquid includes. `_includes/head.html` loads Google
  Fonts and the main compiled CSS; it is the key file for typography-related
  head changes.

Styling:

- `assets/css/main.scss` - Jekyll SCSS entrypoint. Import order is important
  and is effectively a contract.
- `_sass/_themes.scss` - shared variables.
- `_sass/theme/_latex_light.scss` - active light theme colors and font
  overrides. Use this when changing the theme palette or global font behavior.
- `_sass/theme/_latex_dark.scss` - active dark theme colors. Must stay aligned
  with the JS theme toggle behavior.
- `_sass/layout/_latex_extras.scss` - custom LaTeX-style academic layer and
  final overrides. This is the first styling file to inspect for most custom
  presentation behavior, including the CV download button and print rules.
- `_sass/layout/*.scss` - inherited layout/component styles.

Assets:

- `assets/js/main.min.js` - committed compiled JavaScript bundle. This is the
  file GitHub Pages serves; do not edit it manually.
- `assets/js/_main.js` and `assets/js/plugins/` - source files for the bundle.
  Only relevant if behavior changes require JavaScript work.
- `images/` - profile images, icons, and static images.
- `files/` - downloadable static documents.

Durable docs:

- `docs/session_context.md` - long-lived rationale, decisions, constraints,
  and change history. Read this for why the site is shaped the way it is.
- `docs/download_cv_plan.md` - execution plan for the CV download feature.

High-frequency edit paths:

- Profile or messaging change: `_pages/about.md`, `_pages/cv.md`,
  `_portfolio/*.md`
- Visual change: `_sass/theme/_latex_light.scss`,
  `_sass/layout/_latex_extras.scss`
- Navigation or labels: `_data/navigation.yml`, `_data/ui-text.yml`
- Deploy/config behavior: `_config.yml`, `Gemfile`
- CV PDF refresh: `_pages/cv.md`, `files/augustine-nguyen-cv.pdf`,
  `_sass/layout/_latex_extras.scss`

## 5. Hard Constraints

Do not break these without an explicit decision.

1. GitHub Pages compatibility comes first.
   Only use plugins supported by the `github-pages` gem whitelist unless the
   deployment model changes.

2. Keep the site static.
   No backend service, database, server-rendered personalization, or runtime
   document generation.

3. Preserve the SCSS import order in `assets/css/main.scss`.
   Theme files must load before layout files. `_sass/layout/_latex_extras.scss`
   must stay last so it can override the upstream academicpages styles.

4. Keep the active theme name stable unless intentionally changing the design.
   `_config.yml` uses `site_theme: "latex"`, which maps to
   `_sass/theme/_latex_light.scss` and `_sass/theme/_latex_dark.scss`.

5. Keep the no-emoji rule.
   The visual system is academic and paper-like. Emoji in page or portfolio
   content undercuts that register. The `jemoji` plugin is enabled but should
   remain effectively unused.

6. Keep portfolio projects 06 and 07 separate.
   `_portfolio/06-qaqc-dashboard.md` is the QA/QC dashboard.
   `_portfolio/07-investment-securities.md` is the Oracle to EDB SQL migration.
   Do not merge them back into one project.

7. Keep the CV PDF filename stable.
   The public link is `/files/augustine-nguyen-cv.pdf`. Replace the file in
   place when updating the CV PDF.

8. Do not add unused academicpages sections by default.
   Blog, Publications, Talks, Teaching, maps, and multi-author workflows are
   out of scope for this industry portfolio.

## 6. Styling System

The active visual direction is LaTeX-inspired: serif typography, cream paper
background, academic red rules, justified body text, and booktabs-style tables.

Core style decisions:

- Body font: EB Garamond from Google Fonts.
- Mono font: JetBrains Mono from Google Fonts.
- Paper background: `#fffff8`.
- Accent color: `#8b1a1a`.
- Headings use small caps and thin red rules.
- Body paragraphs and list text are justified.
- Tables should use horizontal rules only, not vertical gridlines.

Important implementation details:

- `_includes/head.html` loads EB Garamond and JetBrains Mono from Google Fonts.
- `_sass/theme/_latex_light.scss` overrides `$sans-serif`,
  `$sans-serif-narrow`, and `$global-font-family`. This matters because the
  masthead and sidebar reference those variables directly.
- `_sass/theme/_latex_dark.scss` uses `html[data-theme="dark"]`, because the
  existing JavaScript toggles the `data-theme` attribute on `<html>`.
- Do not replace dark mode with only `@media (prefers-color-scheme: dark)`;
  that would ignore the site's toggle.
- `_sass/layout/_latex_extras.scss` is the final override layer.

Booktabs gotcha:

The upstream table CSS uses a `border` shorthand. If a custom table rule only
sets `border-top` and `border-bottom`, the left and right borders can survive.
The fix is to clear `border: none` before restoring top and bottom borders.

## 7. Content Model

Top-level pages:

- About (`_pages/about.md`) introduces Augustine, his positioning, toolkit,
  credentials, and contact routes.
- Projects (`_pages/portfolio.html`) lists the portfolio collection.
- CV (`_pages/cv.md`) is the chronological professional record.

Portfolio collection:

- Files are numbered `01-*.md` through `07-*.md`.
- Numeric prefixes control display order.
- Renaming a portfolio file changes the URL because collection permalinks use
  `/:collection/:path/`.

Current portfolio files:

- `01-aisol.md` - AISOL, Champion FPT AI Hackathon 3 (2025).
- `02-blockstream.md` - real-time blockchain data system.
- `03-discord-emotion-tracker.md` - Discord NLP/sentiment/translation work.
- `04-nft-staking.md` - NFT staking and earning backend.
- `05-insightflow.md` - customer behavior analytics platform.
- `06-qaqc-dashboard.md` - QA/QC dashboard.
- `07-investment-securities.md` - Oracle to EDB SQL migration.

## 8. Local Development

Tested Ruby version: Ruby 3.3.x.

Do not use Ruby 4.x for this site. Jekyll 3.9 and Liquid 4 call APIs removed
from Ruby 4, such as `String#tainted?`. Ruby 2.x is too old for current gem
dependencies.

### Windows Setup

Install Ruby+Devkit 3.3.x (x64) from `https://rubyinstaller.org/downloads/`.

On the final installer screen, leave the MSYS2 setup checkbox enabled. When
prompted:

```text
Which components shall be installed? If unsure press ENTER [1,2,3]
```

Type `3` and press Enter. This installs the MSYS2 and MINGW toolchain needed
for native gem compilation.

If you missed that step:

```powershell
ridk install
```

Then open a new PowerShell window:

```powershell
ruby --version
gem install bundler
bundle install
bundle exec jekyll serve -l -H localhost
```

Open `http://localhost:4000`.

If PowerShell cannot find Ruby, add the Ruby bin directory to PATH. Typical
path:

```text
C:\Ruby33-x64\bin
```

Windows-specific gems already in `Gemfile`:

- `tzinfo-data` - Windows timezone support.
- `wdm` - faster file watching.
- `faraday-retry` - suppresses compatibility warnings from older gems.

### macOS Setup

Use Homebrew Ruby 3.3:

```bash
brew install ruby@3.3
```

Add Ruby 3.3 to the shell path:

```bash
export PATH="/opt/homebrew/opt/ruby@3.3/bin:$PATH"
export GEM_HOME="$HOME/.gem/ruby/3.3.0"
export PATH="$GEM_HOME/bin:$PATH"
```

Then:

```bash
ruby --version
gem install bundler
bundle install
bundle exec jekyll serve -l -H localhost
```

Open `http://localhost:4000`.

### JavaScript Bundle

The compiled JavaScript file is committed at `assets/js/main.min.js`. Most
content and SCSS changes do not require rebuilding JavaScript.

Only rebuild JS if you change `assets/js/_main.js`, `assets/js/plugins/`, or
JavaScript dependencies:

```bash
npm install
npm run build:js
```

`npm run build:js` delegates to `npm run uglify`.

## 9. Common Edit Workflows

### Update Homepage Content

Edit:

- `_pages/about.md`

Check:

- First screen communicates identity and positioning.
- Contact links remain correct.
- No emoji.
- Claims remain consistent with CV and portfolio.

### Update CV Page

Edit:

- `_pages/cv.md`
- `files/augustine-nguyen-cv.pdf` if public PDF content should match.

Check:

- Languages remain English and Vietnamese unless Augustine confirms otherwise.
- CV download button remains after Personal Details.
- CV download button remains right-aligned and hidden in print.
- PDF filename remains `augustine-nguyen-cv.pdf`.
- Regenerated PDF contains the current CV content.
- `pdffonts` should show embedded EB Garamond fonts after regeneration.

### Update Portfolio Projects

Edit:

- `_portfolio/*.md`

Check:

- Numeric prefix still gives desired display order.
- File renames are intentional because they change URLs.
- QA/QC dashboard and Investment Securities remain separate.
- Project titles/excerpts stay aligned with About and CV.

### Update Styling

Edit:

- `_sass/theme/_latex_light.scss`
- `_sass/theme/_latex_dark.scss`
- `_sass/layout/_latex_extras.scss`
- Avoid touching upstream layout files unless the behavior genuinely belongs
  there.

Check:

- `assets/css/main.scss` import order stays intact.
- Tables still use booktabs-style horizontal rules.
- Dark-mode toggle still works through `html[data-theme="dark"]`.
- Print output remains clean.

### Update Navigation

Edit:

- `_data/navigation.yml`

Check:

- Keep About, Projects, CV unless there is a deliberate scope change.
- Do not add academicpages defaults just because the theme supports them.

## 10. Verification Checklist

Run what is available in the environment.

Basic static checks:

```powershell
rg -n "\x{00E2}|\x{00C2}|\x{00F0}|\x{FFFD}|\x{00C3}|\x{00E1}\x{00BA}|\x{00E1}\x{00BB}" --glob "*.md"
git diff --check
```

Local build:

```powershell
bundle exec jekyll build
```

Local preview:

```powershell
bundle exec jekyll serve -l -H localhost
```

JavaScript rebuild, only when needed:

```powershell
npm install
npm run build:js
```

CV PDF checks:

```powershell
Get-Item files/augustine-nguyen-cv.pdf
pdftotext files/augustine-nguyen-cv.pdf -
pdffonts files/augustine-nguyen-cv.pdf
```

Manual browser checks:

- `/` loads and explains who Augustine is.
- `/portfolio/` lists all projects.
- `/cv/` shows the CV and bottom download button.
- CV PDF download works.
- Mobile viewport does not overlap text or controls.
- Dark-mode toggle changes theme.
- Print preview hides the download button.

## 11. Known Gotchas

Encoding:

- Markdown files should be UTF-8.
- Watch for common mojibake markers produced when UTF-8 text is decoded with
  the wrong Windows code page.
- Use the scan command in the verification checklist after editing docs.

Ruby:

- Ruby 4.x can fail with Jekyll 3.9 because removed APIs are still referenced.
- Ruby 2.x is too old.
- Ruby 3.3.x is the compatible target.

GitHub Pages:

- Custom gems outside the GitHub Pages whitelist will not deploy through the
  default Pages build.
- The site uses static files under `files/`; `_config.yml` includes that
  directory.

Dead upstream artifacts:

- `.github/workflows/` contains a "Scrape Talk Locations" workflow inherited
  from academicpages.
- This site has no talks collection, so that workflow is a dead artifact and
  can be removed in a cleanup.

Profile image:

- `_config.yml` sets `avatar: "profile.png"`.
- Jekyll resolves this to `images/profile.png`.
- If missing, the sidebar can render without a photo.

Analytics:

- `analytics.provider` is currently `"false"`.
- Adding analytics should be a deliberate privacy/product decision.

## 12. LLM/Agent Instructions

When starting a session:

1. Read this README first.
2. Read `docs/session_context.md` for durable rationale and prior decisions.
3. Inspect relevant files before editing.
4. Preserve existing design language and content positioning.
5. Keep changes scoped to the requested behavior.
6. Do not revert unrelated dirty worktree changes.

When updating durable context:

- Use `docs/session_context.md`.
- Add durable rationale, not temporary progress notes.
- Prefer one new numbered section at the end.
- Use absolute dates.
- Do not duplicate command logs or status tables there.

When adding plans:

- Use specific plan names, for example `docs/download_cv_plan.md`.
- Keep plan files operational.
- Keep durable rationale in `docs/session_context.md`, not in plans.

When proposing commits:

- Check `git status --short`.
- Notice unrelated dirty files and do not include them in the message unless
  the user wants a full-worktree commit.
- Base the message on the actual diff.

Change history and open questions live in `docs/session_context.md`.
