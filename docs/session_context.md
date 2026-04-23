# Session Context: augustine0890.github.io

Durable rationale, decisions, and learnings for Augustine Nguyen's personal
portfolio site. This file is append-only context; execution plans live in
`plan.md` if one exists.

Last substantively updated: April 2026.

---

## 1. Project background

Augustine Nguyen is a Data Scientist with nine years of industry experience
across financial risk modeling, fraud detection, growth analytics, and
enterprise AI systems. He works at FPT Software Korea and is based in the
Republic of Korea. The site exists to present his professional profile — work
history, project portfolio, and skills — to potential employers and
collaborators, primarily in fintech, banking, growth analytics, and enterprise
AI.

The site was created from scratch in a single session in April 2026 as a cold
start: no prior web presence existed. The first commit established the content
skeleton; the second commit introduced the LaTeX-style visual redesign that
defines the current look and feel. There is no legacy codebase to reconcile
with, and no prior design system to preserve. The project is at an early,
actively evolving stage.

The primary audience is hiring managers, technical recruiters, and senior
practitioners evaluating Augustine for DS or ML engineering roles. A secondary
audience is collaborators or conference contacts who want a quick reference
for his background. This shapes the content: the site foregrounds production
impact (scale numbers, hackathon wins, business outcomes) rather than
academic citation counts or publication lists, which distinguishes this from
a standard academicpages deployment.

---

## 2. Project goal and success criteria

The intended end state is a live, professional portfolio at
`https://augustine0890.github.io` that:

- loads quickly, displays correctly on desktop and mobile, and degrades
  gracefully without JavaScript;
- communicates Augustine's identity and positioning clearly within the first
  screen of the home page;
- maintains an academic and analytical visual register that signals
  quantitative rigor without being austere;
- is easy for Augustine to maintain himself by editing Markdown files — no
  build toolchain knowledge required for content changes;
- remains within the GitHub Pages free tier indefinitely.

Success is operational when the site is live and the visual design matches the
academic paper aesthetic described in Section 5. There are no quantitative
traffic or conversion targets. Non-goals include blog functionality, comment
systems (disabled in config), talk maps, publication lists, and multi-author
support — all of which the underlying academicpages theme supports but which
are deliberately not used here.

---

## 3. Constraints and fixed requirements

**Platform constraint — GitHub Pages.** The site must build and deploy using
GitHub's built-in Jekyll pipeline (Deploy from branch: `main`). This means
only plugins included in the `github-pages` gem whitelist are available. Custom
Ruby gems that are not on that whitelist cannot be used. The `Gemfile` pins
`github-pages` as the primary dependency, which in turn pins Jekyll and all
plugin versions. Augustine cannot choose arbitrary plugin versions.

**SCSS compilation model.** The styling system compiles all SCSS at build time
through `assets/css/main.scss`. Import order is load-bearing: variables defined
or overridden in a file take effect for all files imported after it. The theme
file (`_latex_light.scss`) is imported before the layout files, so overriding
SCSS variables in the theme file correctly propagates to all layout files. This
contract must not be broken by reordering imports in `main.scss`.

**No server-side logic.** The site is purely static. There is no backend,
database, authentication, or server-rendered content. All personalization or
dynamic behavior must be done in client-side JavaScript or foregone entirely.

**Google Fonts dependency.** EB Garamond and JetBrains Mono are loaded from
`fonts.googleapis.com` via a `<link>` tag in `_includes/head.html`. The site
degrades to system serif fonts if Google Fonts is unreachable, but the
typographic character of the LaTeX design is substantially diminished in that
case. This is an accepted trade-off: the fonts are free, cached by browsers,
and have high global CDN availability.

**Content language.** All public-facing content is in English. Internal
comments and commit messages are in English. The site does not require
internationalization.

**No analytics as of April 2026.** The `analytics.provider` key in
`_config.yml` is set to `"false"`. Augustine has not connected Google Analytics
or any other tracking service. This is either a deliberate privacy choice or
deferred setup — the record is ambiguous. Adding analytics requires only
setting the provider and tracking ID in `_config.yml`; no code changes are
needed.

---

## 4. System architecture and project shape

The site is a **Jekyll static site** built on a fork of the
[academicpages](https://github.com/academicpages/academicpages.github.io)
theme. The upstream theme is not tracked as a Git remote; changes are applied
directly to the working tree. This means there is no clean upgrade path from
upstream; merging future upstream changes would require manual diffing.

**Major components:**

*Content layer (Markdown files).* All human-readable content lives in
`_pages/` and `_portfolio/`. The four pages are: `about.md` (home, permalink
`/`), `cv.md` (curriculum vitae, permalink `/cv/`), `portfolio.html` (project
index, permalink `/portfolio/`), and `404.md`. The six portfolio projects live
in `_portfolio/` as individually numbered Markdown files (`01-aisol.md`
through `06-qaqc-dashboard.md`). The numbering controls display order.

*Configuration layer (`_config.yml`).* The single source of truth for site
metadata, author profile (name, bio, social links), Jekyll settings, plugin
configuration, collection definitions, and SCSS theme selection. The key that
controls the visual theme is `site_theme: "latex"`, which must match a pair of
files named `_latex_light.scss` and `_latex_dark.scss` in `_sass/theme/`.

*Layout and template layer (`_layouts/`, `_includes/`).* Page structure is
defined by Liquid templates. The `single` layout wraps all pages and portfolio
items; the `archive` layout wraps the CV and portfolio index. These templates
are mostly unmodified from the upstream theme. The `head.html` include was
modified to inject the Google Fonts `<link>` tags.

*Styling layer (`_sass/`).* The SCSS is organized into:
- `_themes.scss` — shared variables (font stacks, type scale, breakpoints,
  brand colors). Imported first.
- `theme/_latex_light.scss` and `theme/_latex_dark.scss` — theme-specific color
  palette, font overrides, and CSS custom properties for light and dark modes.
  Imported second; variable overrides here propagate to everything below.
- `layout/*.scss` — component stylesheets for base elements, masthead,
  sidebar, page content, tables, buttons, etc.
- `layout/_latex_extras.scss` — the custom academic style layer added in April
  2026. Imported last in `main.scss` so it can safely override prior rules.
  Contains: justified body text, small-caps headings with red rule, booktabs
  tables, theorem/definition environments, sidebar and masthead refinements,
  and a clean print stylesheet.

*Asset layer.* Compiled JavaScript lives in `assets/js/main.min.js` and is
built by running `npm run uglify` (bundles jQuery, fitvids, smooth-scroll,
Plotly, and the navigation plugin). This is a one-time build step — the
compiled file is committed to the repository. The CSS is compiled by Jekyll's
built-in SCSS pipeline at build time; there is no separate CSS build step.

*Data layer (`_data/`).* `navigation.yml` defines the three top-navigation
items (About, Projects, CV). `ui-text.yml` contains UI string overrides.
`authors.yml` exists but contains only template placeholders from upstream and
is not used.

**Key data flow.** A visitor requests a URL. GitHub Pages runs Jekyll, which
reads `_config.yml`, processes collections and pages through Liquid templates,
compiles SCSS, and outputs static HTML/CSS/JS. The compiled site is served
directly as static files — no runtime processing. Content changes (editing
`_pages/*.md` or `_portfolio/*.md`) require only a Git push; Jekyll rebuilds
automatically on GitHub's infrastructure.

---

## 5. Key decisions and trade-offs

**Decision: LaTeX-inspired visual theme over the existing "air" theme.**

The "air" theme (the default for this academicpages fork) uses a blue primary
accent, gray background, and system sans-serif fonts. It is functional but
generic — visually indistinguishable from thousands of similar academicpages
deployments. Augustine requested a design that reads as "beautiful and
analytical" for a data scientist and quantitative researcher. The LaTeX
aesthetic (EB Garamond serif, cream paper background `#fffff8`, academic deep
red accent `#8b1a1a`, booktabs tables, small-caps headings, justified text)
directly signals quantitative academic culture — the visual language of
statistical papers, econometrics textbooks, and finance research. The rejected
alternative was incremental tweaking of the air theme, which would have
produced a less distinctive result. The chosen path required creating two new
theme SCSS files and one extras file rather than modifying existing files,
which preserves a clean separation from upstream.

**Decision: Create a new `latex` theme rather than modifying `air`.**

The theme system in `main.scss` selects theme files dynamically using
`site.site_theme`. Creating `_latex_light.scss` and `_latex_dark.scss` as new
files and setting `site_theme: "latex"` in `_config.yml` means the original
"air" theme files are untouched and revertible. If the LaTeX design needs to
be abandoned, switching back requires changing one line in `_config.yml` and
deleting three SCSS files. Modifying the air files in place would have made
rollback harder and obscured the original theme's intent.

**Decision: Override `$sans-serif` and `$sans-serif-narrow` in the theme file,
not just `$global-font-family`.**

Several layout files (`_sidebar.scss`, `_masthead.scss`) reference `$sans-serif`
and `$sans-serif-narrow` directly by name rather than through `$global-font-family`.
Overriding only the global variable would have left the sidebar and masthead
using system sans-serif fonts while the page body used EB Garamond — an
inconsistent and visually jarring result. Overriding all three font variables
in `_latex_light.scss` to point to the EB Garamond stack ensures consistency
throughout the site. This works because the theme file is imported before all
layout files in `main.scss`, so SCSS variable resolution picks up the override.

**Decision: Use EB Garamond via Google Fonts rather than the Computer Modern
web font.**

Computer Modern is available as a web font (e.g., via the
`dreampulse/computer-modern-web-font` CDN) and is the typographically "purest"
choice for a LaTeX aesthetic. It was rejected because the font files are not
hosted on a major CDN with Google-level global caching, the package has not
seen recent maintenance, and EB Garamond is perceptually very similar to
Computer Modern's text weight while being a professionally maintained Google
Font with broad browser support and optical-size variants. The trade-off is
that the font is not byte-for-byte identical to LaTeX output, but this is
imperceptible to non-typographers.

**Decision: Remove emoji from all page content.**

The original site content used emoji as section markers (🏆, 📍, ✉️, 💼, 📂,
📬). This was reversed in the LaTeX redesign because emoji clash with the
typographic register of academic papers — they signal informality and casualness
that undercuts the quantitative-rigor positioning. All emoji were replaced with
Markdown formatting (bold, italic, horizontal rules, em-dashes) that renders
cleanly in the serif font. Note that six portfolio project files (`_portfolio/*.md`)
still contain emoji in their `excerpt:` frontmatter and body text. These were
not updated in the April 2026 session and represent an inconsistency.

**Decision: Keep the three-item navigation (About, Projects, CV).**

The upstream academicpages theme supports arbitrary navigation items including
Publications, Talks, Teaching, Blog, etc. These were all removed in the initial
site creation because Augustine's profile is an industry professional, not an
academic. Adding publication counts, talk maps, or teaching histories would be
false signals for an industry audience. The three items retained are the minimum
necessary to present identity, work, and detailed history.

---

## 6. Domain notes / product notes / data notes

**Positioning.** Augustine occupies an unusual niche: he has nine years of
engineering and data science experience across financial risk (credit scoring,
fraud detection) and growth analytics (experimentation, attribution, CLV) — two
domains that rarely share a practitioner. His causal inference background
(Mendelian Randomization thesis, instrumental variables, DiD) is academically
grounded in a way unusual for industry DS roles. The site should continue to
emphasize this dual-domain positioning and causal rigor as differentiators,
not flatten it into a generic "data scientist" description.

**Scale claims.** Several content items carry specific numbers: 10M+ users
(ABACUS credit scoring), 5B+ records (AZEN Global database), +3% accuracy
lift (credit scoring). These numbers are specific enough to be verifiable and
should not be changed without confirmation from Augustine. They are the primary
evidence of production impact and are load-bearing for the site's credibility.

**Hackathon win (AISOL).** The FPT AI Hackathon 3 championship (2025) is the
most recent and most prominent credential. It is currently featured prominently
on both the home page and CV. If this placement is to change (e.g., moved to
the portfolio as a lesser item), it should be a deliberate decision — the win
is the strongest near-term signal of applied AI capability.

**Portfolio ordering.** The six portfolio files are numbered 01 through 06.
Jekyll renders the portfolio archive in filesystem order, so the numeric prefix
controls display order. AISOL (01) is first because it is the most recent and
most prestigious. If projects are added or re-prioritized, the prefix numbering
must be updated accordingly — renaming files will change URLs, which may break
any external links.

**Thesis and Mendelian Randomization.** Augustine's MPH thesis applied
instrumental variable analysis to a biostatistics problem. The CV explicitly
notes this as "methodology directly transferable to financial econometrics and
policy evaluation." This framing bridges academia and industry for readers who
might otherwise discount health research experience. It should be preserved.

**The `jemoji` plugin.** The `jemoji` plugin is enabled in `_config.yml`. This
converts emoji shortcodes in Markdown to image tags. The portfolio files still
use emoji literals (e.g., `🏆`), not shortcodes, so `jemoji` does not affect
them. However, if shortcode-style emoji are added to Markdown files in the
future, they will be rendered as images, which may not match the intended
LaTeX aesthetic.

---

## 7. Environment and reproducibility

**Local preview.** Standard Jekyll workflow:

```
bundle install
bundle exec jekyll serve -l -H localhost
```

The `-l` flag enables live reload. The site is then available at
`http://localhost:4000`. Ruby and Bundler must be installed. The `Gemfile` does
not pin Ruby version; as of April 2026, GitHub Pages is compatible with Ruby
3.x.

**JavaScript assets.** The compiled `assets/js/main.min.js` is committed to
the repository. It does not need to be rebuilt for content or SCSS changes.
If JavaScript plugins are updated (`npm update`) or new plugins are added, the
file must be rebuilt with `npm run uglify` and committed. Node.js and npm must
be installed for this step.

**SCSS compilation.** Jekyll compiles SCSS automatically during `jekyll serve`
or `jekyll build`. No separate CSS build step is required. The `style: compressed`
setting in `_config.yml` minifies the output CSS.

**Deployment.** Pushing to `origin/main` triggers GitHub Pages to rebuild and
deploy. Typical propagation time is one to three minutes. No secrets,
environment variables, or deploy keys are required beyond the repository being
public and GitHub Pages being enabled in repository settings (Settings → Pages
→ Source: Deploy from a branch → `main` / `(root)`).

**The Docker setup (`docker-compose.yaml`, `.devcontainer/`).** These files
exist in the repository from the upstream academicpages template and provide
an alternative local development path. They have not been validated against the
current site configuration. Their use is optional; the `bundle exec jekyll serve`
path is the tested approach.

---

## 8. Risks, failure modes, and operational gotchas

**SCSS import order is a silent contract.** The fact that `_latex_extras.scss`
must be imported last, and that the theme file must be imported before all
layout files, is not documented anywhere in the code. If someone adds a new
`@import` to `main.scss` without understanding this constraint, they may
introduce hard-to-diagnose visual regressions. The rule is: theme files before
layout files, `latex_extras` last.

**Upstream academicpages is not tracked.** The site was initialized from a
snapshot of academicpages and then customized. If upstream releases bugfixes
or accessibility improvements, there is no clean way to pull them in. Any
attempt to merge upstream would require manually resolving conflicts against the
LaTeX theme customizations. Future contributors should treat the SCSS and
layout files as fully owned, not as vendored dependencies.

**The "Scrape Talk Locations" GitHub Actions workflow is a dead artifact.**
The file `.github/workflows/` contains a workflow that runs a Jupyter notebook
(`talkmap.ipynb`) to geocode talk locations whenever files under `_talks/` or
`talks/` are pushed. Neither directory exists in this repository (talks are out
of scope). The workflow will never trigger, but it is confusing to find in the
repository. It should be deleted in a future cleanup.

**Portfolio emoji inconsistency.** The six `_portfolio/*.md` files still
contain emoji in their titles and excerpts (e.g., `🏆 Champion Prize`). The
main pages (about, CV) were updated to remove emoji. A future contributor
editing portfolio files may be uncertain whether emoji are intended or not.
The answer is: emoji in portfolio files is an oversight from the April 2026
session, not a deliberate exception.

**Google Fonts single point of failure.** The `<link>` preconnect and
stylesheet tags for Google Fonts are in `_includes/head.html` with no
fallback loading strategy. If Google Fonts is blocked (e.g., in China, in
corporate firewalls), the page renders in system serif fonts. The visual
design still functions but loses the EB Garamond character. Adding a
`font-display: swap` hint (which Google's URL already includes by default)
ensures text is visible immediately during font load, which is already handled.

**Dark mode uses the JS attribute toggle, not a media query.** The
`_latex_dark.scss` file applies dark mode colors via the `html[data-theme="dark"]`
selector, which is set by the site's existing JavaScript when the sun/moon icon
in the masthead is clicked. Users can override their system preference using
that toggle. *Superseded on 2026-04-24 by Section 11 — the original
implementation used `@media (prefers-color-scheme: dark)` and was corrected.*

**Profile image path.** The `_config.yml` sets `avatar: "profile.png"`. Jekyll
resolves this against `images/profile.png`. Whether a real photo or a
placeholder exists at that path was not verified during the April 2026 session.
If the image is missing, the sidebar will render without a photo, which may or
may not degrade gracefully depending on browser behavior.

---

## 9. Open questions

**Should portfolio project pages be updated to remove emoji?**
The six `_portfolio/*.md` files were not touched during the LaTeX redesign
session. Their emoji-laden excerpts (rendered on the portfolio index page and
in browser tabs) are inconsistent with the academic register of the main pages.
This matters because the portfolio index is a high-traffic page for anyone
evaluating project work. Resolving this requires Augustine confirming whether
he wants emoji removed from project pages.

**Should analytics be configured?**
The analytics provider is set to `"false"` in `_config.yml`. If Augustine
wants to understand who visits the site and from where (useful for evaluating
job-search strategy), a provider like Google Analytics or Plausible could be
added with minimal configuration. The decision is currently unresolved.

**What is the intended update cadence for content?**
The site has no blog and no news feed. Content (CV, portfolio) will drift from
reality as Augustine changes roles and completes new projects. There is no
mechanism to surface stale content. It is unclear whether Augustine intends to
maintain this actively or treat it as a snapshot.

**Should a favicon be added?**
The `images/` directory contains favicon files from the upstream template
(inferred from standard academicpages structure), but whether a custom favicon
representing Augustine's brand has been set is unconfirmed.

**Will a custom domain be added?**
The site currently lives at `augustine0890.github.io`. A custom domain (e.g.,
`augustine.dev` or similar) could be configured via GitHub Pages' custom domain
setting and a CNAME file. If a custom domain is added, the `url` key in
`_config.yml` must be updated to match, otherwise generated URLs (sitemap,
feeds) will be incorrect.

---

## 10. References and evidence

All facts in this document are grounded in the following artifacts, all of
which exist in the repository as of the April 2026 session:

- `_config.yml` — site metadata, theme selection, plugin configuration,
  social links, author bio.
- `_pages/about.md` — home page content, positioning statement, toolkit table,
  certifications.
- `_pages/cv.md` — full professional history, education, skills, side projects.
- `_portfolio/01-aisol.md` through `_portfolio/06-qaqc-dashboard.md` —
  individual project detail pages.
- `_data/navigation.yml` — navigation structure.
- `assets/css/main.scss` — SCSS import order (the load-bearing contract).
- `_sass/theme/_latex_light.scss` and `_latex_dark.scss` — color palette,
  font variable overrides, CSS custom properties.
- `_sass/layout/_latex_extras.scss` — the complete academic style layer.
- `_sass/_themes.scss` — shared variable definitions.
- `_includes/head.html` — Google Fonts injection.
- `Gemfile` — Ruby gem dependencies and platform constraint.
- `package.json` — JavaScript dependencies and build scripts.
- `README.md` — local preview and deploy instructions.
- Git log (`git log --oneline`): two commits as of April 2026, both authored
  in a single session.
- `.github/workflows/` — the dead "Scrape Talk Locations" workflow.

---

## 11. Post-launch CSS cascade bugs and diagnostic lessons (April 2026)

Two bugs were discovered immediately after the LaTeX theme launched. Both were
CSS cascade problems, not SCSS compilation failures — a distinction that took
some work to establish. The first step in diagnosis was fetching the live CSS
directly from `https://augustine0890.github.io/assets/css/main.css`, which
confirmed the SCSS was compiling and deploying correctly. With SCSS compilation
ruled out, the investigation shifted to whether the generated CSS rules were
winning or losing the cascade against earlier rules from the upstream
`_tables.scss` and the existing dark-mode JavaScript mechanism.

The first bug was in the booktabs table styling. The upstream `_tables.scss`
contains `table { border: 1px solid var(--global-border-color); }`, which is a
CSS shorthand that sets all four border sides simultaneously. The
`_latex_extras.scss` override added `border-top: 2px solid` and `border-bottom:
2px solid` but never cleared the left and right sides. Because longhand
properties (`border-top`, `border-right`) are resolved independently, the
original shorthand's left and right values survived the cascade, leaving visible
vertical rules on every table — the opposite of the academic booktabs style.
The fix was to add `border: none` as the first declaration inside the override
block, which zeroes all four sides before the top and bottom are selectively
restored. This is a non-obvious CSS cascade trap: overriding a shorthand
partially with longhands does not clear the shorthand's other properties.

The second bug was in dark mode activation. The existing academicpages JavaScript
reads a user's toggle preference and writes `data-theme="dark"` onto the `<html>`
element; the existing dark themes (e.g., `_air_dark.scss`) all target
`html[data-theme="dark"]` as their selector. The initial `_latex_dark.scss`
instead used `@media (prefers-color-scheme: dark)`, which responds only to the
OS-level preference and ignores the in-page toggle entirely. Clicking the
sun/moon icon in the masthead had no visible effect. The fix was to replace the
media query with the `html[data-theme="dark"]` attribute selector to match the
existing toggle mechanism. The Section 8 entry on dark mode has been corrected
to reflect the fixed state.

A secondary finding from this session: local Jekyll builds are sensitive to Ruby
version. The system Ruby (2.6) is too old for current gem dependencies; Ruby 4.0
(Homebrew default) is too new for Jekyll 3.9.0 and Liquid 4.0.3, which call the
removed `String#tainted?` method. Ruby 3.3 installed via `brew install ruby@3.3`
is the version that successfully runs `bundle install` and `bundle exec jekyll
serve` for this project. This is worth recording because the `Gemfile` does not
pin a Ruby version, so this compatibility window will not be obvious to a future
contributor setting up locally.

See also: Section 3 (SCSS compilation model), Section 8 (SCSS import-order
contract), `_sass/layout/_latex_extras.scss`, `_sass/theme/_latex_dark.scss`.
