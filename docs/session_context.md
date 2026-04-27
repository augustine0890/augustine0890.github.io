# Session Context: augustine0890.github.io

LLM onboarding document for Augustine Nguyen's portfolio site. Covers architecture,
constraints, decisions, and change history. Read this before implementing any feature.

Last updated: 2026-04-27.

---

## Project overview

**Who:** Augustine Nguyen — Data Scientist, 9 years, FPT Software Korea. Domains:
credit risk, fraud detection, growth analytics, generative AI, computer vision.

**Site purpose:** Professional portfolio for hiring managers / recruiters evaluating
DS or ML engineering roles. Foregrounds production impact (scale numbers, hackathon
wins) over academic outputs.

**Live URL:** `https://augustine0890.github.io`

**Success criteria:** Loads fast, correct on mobile/desktop, degrades without JS,
signals quantitative rigor, maintainable by editing Markdown only, stays on GitHub
Pages free tier.

**Non-goals:** Blog, comments, talks, publications, multi-author support.

---

## Architecture

**Stack:** Jekyll static site, academicpages theme fork, GitHub Pages deployment.
Upstream theme is not tracked as a Git remote — all files are fully owned.

**Key directories:**
- `_pages/` — 4 pages: `about.md` (`/`), `cv.md` (`/cv/`), `portfolio.html` (`/portfolio/`), `404.md`
- `_portfolio/` — 7 project files (`01-aisol.md` … `07-investment-securities.md`), numeric prefix controls display order
- `_sass/` — all styling (see Styling section below)
- `_data/navigation.yml` — 3 nav items: About, Projects, CV
- `assets/css/main.scss` — SCSS entry point; import order is load-bearing
- `assets/js/main.min.js` — committed compiled bundle; rebuild only if JS plugins change
- `files/` — static downloadable assets (e.g. `augustine-nguyen-cv.pdf`)
- `_config.yml` — single source of truth for metadata, theme, plugins

**Data flow:** GitHub push → GitHub Pages runs Jekyll → compiles SCSS + Liquid → serves static files. No runtime processing.

---

## Constraints (hard rules — do not break)

1. **GitHub Pages only.** Only gems on the `github-pages` whitelist are usable. `Gemfile` pins `github-pages` as primary dependency.
2. **SCSS import order in `main.scss` is load-bearing.**
   - Theme files (`_latex_light.scss`) must be imported before all layout files.
   - `_latex_extras.scss` must be imported last.
   - Breaking this order causes silent visual regressions.
3. **No server-side logic.** Purely static. Dynamic behavior must be client-side JS or foregone.
4. **No emoji in content.** Emoji clash with the LaTeX typographic register. All pages and portfolio files are emoji-free. `jemoji` plugin is installed but is effectively a no-op.
5. **Keep `files/augustine-nguyen-cv.pdf` filename stable.** The CV download button points to this path; renaming breaks the public URL.
6. **Do not re-merge portfolio files 06 and 07.** `06-qaqc-dashboard.md` (Java/Spring Boot/Chart.js) and `07-investment-securities.md` (Oracle→EDB SQL migration) are distinct projects and must stay separate.

---

## Styling system

**Active theme:** `site_theme: "latex"` in `_config.yml`.

**Files:**
- `_sass/_themes.scss` — shared variables (font stacks, type scale, breakpoints). Imported first.
- `_sass/theme/_latex_light.scss` — light palette, font overrides (`$sans-serif`, `$sans-serif-narrow`, `$global-font-family` all set to EB Garamond stack). Imported second.
- `_sass/theme/_latex_dark.scss` — dark palette via `html[data-theme="dark"]` selector (JS toggle, not OS media query).
- `_sass/layout/_latex_extras.scss` — custom academic layer. Imported last. Contains: justified body text, small-caps headings with red rule, booktabs tables, theorem environments, sidebar/masthead refinements, print stylesheet, `.cv-download-btn` styles.
- `_sass/layout/*.scss` — upstream component files (base, masthead, sidebar, tables, buttons, etc.)

**Key values:**
- Background: `#fffff8` (cream paper)
- Accent: `#8b1a1a` (academic deep red)
- Body font: EB Garamond (Google Fonts)
- Mono font: JetBrains Mono (Google Fonts)
- Google Fonts loaded in `_includes/head.html`; degrades to system serif if unavailable

**Dark mode:** JS sets `data-theme="dark"` on `<html>`. CSS selector is `html[data-theme="dark"]`, not `@media (prefers-color-scheme: dark)`.

**Booktabs table fix:** `_latex_extras.scss` opens its table override with `border: none` before setting `border-top`/`border-bottom`, because the upstream `_tables.scss` uses the `border` shorthand which sets all four sides and longhands alone do not clear it.

---

## Content facts (do not change without confirmation)

**Scale claims (load-bearing for credibility):**
- ABACUS credit scoring: 10M+ users
- AZEN Global database: 5B+ records
- Credit scoring accuracy lift: +3%

**Positioning:** Tri-domain — financial risk · growth analytics · computer vision. Causal inference background (Mendelian Randomization, IV, DiD) is a differentiator; preserve it.

**Hackathon:** FPT AI Hackathon 3 champion, 2025 (AISOL project, Japanese enterprise RAG on Qdrant/Gemini/Qwen). Most prominent credential — keep it featured on About and CV.

**CV download:** Button is in `_pages/cv.md` after the Personal Details section. Links to `/files/augustine-nguyen-cv.pdf` with `download` attribute. Button hidden from print via `@media print` in `_latex_extras.scss`.

**Languages on CV:** English (fluent), Vietnamese (native). Do not add Korean.

**Credentials section** (not "Certifications") — deliberate vocabulary choice.

**Navigation:** 3 items only (About, Projects, CV). Do not add Publications, Talks, Teaching, or Blog.

---

## Local development

**Tested Ruby version:** 3.3.x — use `Ruby+Devkit 3.3.x (x64)` from rubyinstaller.org.
- Ruby 4.x: too new (breaks Jekyll 3.9 — removed `String#tainted?`)
- Ruby 2.x: too old for current gem dependencies

**Windows setup:**
```powershell
# Run once after RubyInstaller — choose option 3 (MSYS2 + MINGW toolchain)
ridk install

gem install bundler
bundle install
bundle exec jekyll serve -l -H localhost
```

**macOS setup:**
```bash
brew install ruby@3.3
# Add to ~/.zshrc:
export PATH="/opt/homebrew/opt/ruby@3.3/bin:$PATH"
export GEM_HOME="$HOME/.gem/ruby/3.3.0"
export PATH="$GEM_HOME/bin:$PATH"
source ~/.zshrc
gem install bundler && bundle install
bundle exec jekyll serve -l -H localhost
```

**Windows-specific gems in Gemfile** (already committed, fixes startup errors):
- `tzinfo-data` — required on Windows; Linux/macOS have system zoneinfo
- `wdm` — faster file-watching on Windows
- `faraday-retry` — suppresses informational warning from older gems

**Site:** `http://localhost:4000` — live reload enabled with `-l` flag.

**JS bundle:** `assets/js/main.min.js` is committed. Rebuild only if JS plugins change: `npm install && npm run build:js`.

**Deploy:** Push to `main` → GitHub Pages rebuilds automatically (1–3 min).

---

## Known gotchas

- **SCSS import order** — see Constraints §2 above. Silent failure if broken.
- **Portfolio file URLs** — renaming `_portfolio/` files changes their URLs. If external links exist, do not rename.
- **`.github/workflows/`** — contains a dead "Scrape Talk Locations" workflow (geocodes `_talks/`). Neither `_talks/` nor `talks/` exist. Workflow never fires; delete it in a future cleanup.
- **Profile image** — `_config.yml` sets `avatar: "profile.png"` → resolves to `images/profile.png`. Missing image degrades silently (no photo shown).
- **Analytics** — `analytics.provider: "false"` in `_config.yml`. Not connected. Adding requires only setting provider + tracking ID in `_config.yml`.

---

## Open questions

- Add analytics? (Google Analytics or Plausible — one-line config change)
- Add custom domain? (update `url` in `_config.yml` + add CNAME file)
- Add favicon? (upstream template may include placeholders in `images/`)

---

## Change history

### 2026-04-24 — Site created + LaTeX theme

Cold start: site built from academicpages fork. Two commits: content skeleton, then LaTeX redesign.

**LaTeX theme decisions (permanent):**
- New `_latex_light.scss` + `_latex_dark.scss` instead of modifying upstream `air` theme files — keeps rollback clean (change one line in `_config.yml`)
- Override `$sans-serif` and `$sans-serif-narrow` in theme file (not just `$global-font-family`) so sidebar and masthead also use EB Garamond
- EB Garamond over Computer Modern web font — better CDN, active maintenance, perceptually equivalent

**CSS bugs fixed at launch:**
1. **Booktabs table** — upstream `border` shorthand survived partial longhand override. Fix: add `border: none` first in the override block.
2. **Dark mode** — initial `_latex_dark.scss` used `@media (prefers-color-scheme: dark)` but JS toggle writes `data-theme="dark"` on `<html>`. Fix: switch to `html[data-theme="dark"]` selector.

---

### 2026-04-26 — CV refresh + cross-tab consistency

**CV updates** (`_pages/cv.md`):
- Added Computer Vision as a third domain (YOLO/SSD, DeepSORT/ByteTrack/StrongSORT, TensorRT, Jetson/ROS 2)
- Removed Korean from languages (do not re-add)
- Added Thompson Sampling and Kaplan-Meier/Cox PH/AFT to skills
- Added Twitter to contact line
- Added tagline blockquote

**Cross-tab alignment** (all tabs aligned against GitHub profile README as source of truth):
- About: added tagline blockquote, expanded Core Toolkit to 11 rows, added Twitter/LinkedIn/GitHub contact
- Portfolio AISOL title: now leads with "Champion, FPT AI Hackathon 3 (2025)"
- **Split `06-qaqc-dashboard.md` and `07-investment-securities.md`** — previously merged incorrectly; must stay separate (see Constraints §6)
- Renamed "Certifications" → "Credentials" site-wide

---

### 2026-04-27 — CV download button + Windows dev setup

**CV download button (complete, live-ready):**
- `files/augustine-nguyen-cv.pdf` — static PDF committed to repo
- `_pages/cv.md` — `<a href="/files/augustine-nguyen-cv.pdf" download class="cv-download-btn">Download CV (PDF)</a>` placed after Personal Details section
- `_sass/layout/_latex_extras.scss` — `.cv-download-btn` block: academic-red (`#8b1a1a`) button + `@media print { display: none }`
- PDF is **auto-regenerated on every push** via `.github/workflows/generate-cv-pdf.yml` — no manual replacement needed

**GitHub Actions PDF auto-generation:**
- Workflow: `.github/workflows/generate-cv-pdf.yml`
- Triggers: push to `main` when `_pages/cv.md`, `_sass/**`, `_layouts/**`, or `_includes/**` change; also `workflow_dispatch` for manual runs
- Process: Ruby 3.3 + `bundle exec jekyll build` → Python HTTP server on port 4000 → Puppeteer (`networkidle2`, print media type, A4) → commits `files/augustine-nguyen-cv.pdf` back with `[skip ci]` to prevent re-triggering
- Script: `.github/scripts/generate-cv-pdf.js` (Puppeteer, `--no-sandbox` for CI)
- The `[skip ci]` tag on the auto-commit prevents an infinite loop since the commit only touches `files/`

**Windows dev environment fixed:**
- Added `tzinfo-data`, `wdm`, `faraday-retry` to `Gemfile` (Windows platform gems)
- `README.md` updated with full Windows + macOS install guides including Ruby 3.3 requirement and `ridk install` option-3 step
