# augustine0890.github.io

Personal portfolio site for **Augustine Nguyen** — Data Scientist · Financial Risk & Growth Analytics.

Built on [academicpages](https://github.com/academicpages/academicpages.github.io) (Jekyll) and hosted on GitHub Pages.

## Local preview

```bash
bundle install
bundle exec jekyll serve -l -H localhost
# open http://localhost:4000
```

## Deploy to GitHub Pages

1. Create a new **public** repo named exactly `augustine0890.github.io` on github.com.
2. From this directory, push:

   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/augustine0890/augustine0890.github.io.git
   git push -u origin main
   ```

3. On GitHub: Repo → **Settings** → **Pages** → Source: `Deploy from a branch` → Branch: `main` / `(root)`.
4. Wait ~1–2 minutes. Site goes live at <https://augustine0890.github.io/>.

## Customize further

- `_config.yml` — global site info, author sidebar, social links.
- `_pages/about.md` — landing page.
- `_pages/cv.md` — CV page.
- `_portfolio/*.md` — individual project entries (one file per project).
- `_data/navigation.yml` — top menu.
- `images/profile.png` — replace with your own headshot.
