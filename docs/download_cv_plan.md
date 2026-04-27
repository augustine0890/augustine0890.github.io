# Plan: CV Download Button

Add a "Download CV (PDF)" button on the CV tab (`/cv/`) that lets visitors
download a PDF copy of Augustine's CV with a single click. The button appears
at the bottom of the CV content after Personal Details and links to a static
PDF committed to `files/`. See `session_context.md` Sections 3-5 for site
architecture and styling constraints.

---

## 1. Scope

In scope:
- `files/augustine-nguyen-cv.pdf` - the generated static PDF file to be committed
- `_pages/cv.md` - add the download button HTML near the top of the page
- `_sass/layout/_latex_extras.scss` - add `.cv-download-btn` styles matching the LaTeX theme
- `docs/download_cv_plan.md` - keep execution status accurate

Out of scope:
- Adding PDF generation to CI
- Adding runtime JavaScript for print or download behavior
- Changes to any other page or layout file

---

## 2. Approach

Generate `files/augustine-nguyen-cv.pdf` once from the current CV content and
commit it as a static asset. The website should not generate PDFs at runtime;
the download button should remain a normal anchor using the `download`
attribute.

If the CV content changes later, regenerate or replace
`files/augustine-nguyen-cv.pdf` in place while keeping the filename stable.

---

## 3. Execution Steps

| # | Step | Status |
|---|------|--------|
| 1 | Generate `files/augustine-nguyen-cv.pdf` from the current CV content | Done |
| 2 | Add `.cv-download-btn` CSS block to `_sass/layout/_latex_extras.scss` (bottom-of-page academic-red button, hover darken, print-hidden) | Done |
| 3 | Insert download button HTML snippet at the bottom of `_pages/cv.md` after Personal Details using `<a href="/files/augustine-nguyen-cv.pdf" download class="cv-download-btn">` | Done |
| 4 | Verify the PDF exists and the CV button points to it | Done |
| 5 | Run available static checks; run Jekyll build if Bundler is available | Partial - static checks passed; Bundler unavailable |

---

## 4. Verification

- `files/augustine-nguyen-cv.pdf` exists and is non-empty.
- Extracted text from `files/augustine-nguyen-cv.pdf` starts with the CV title
  and current CV content, not a browser error page.
- `pdffonts files/augustine-nguyen-cv.pdf` shows embedded EB Garamond fonts.
- Paragraph and list text in the PDF render with justified alignment.
- `_pages/cv.md` contains a `Download CV (PDF)` link to `/files/augustine-nguyen-cv.pdf`.
- `window.print()` or browser print output does not show the button because
  `@media print { .cv-download-btn { display: none; } }` is present.
- Jekyll build succeeds when `bundle` is available locally.

---

## 5. Rollback

- Remove the `<a>` tag from `_pages/cv.md` and the `.cv-download-btn` block from `_latex_extras.scss`.
- Delete `files/augustine-nguyen-cv.pdf` from the repo.
- One commit reverts all three feature changes.

---

## 6. Notes

- Button label: **"Download CV (PDF)"** - concise and self-describing.
- Accent color: `#8b1a1a` (academic deep red, per the LaTeX theme palette).
- The `download` attribute on the `<a>` tag prompts a file-save dialog instead
  of opening the PDF inline in the browser tab, which is the desired UX.
- Keep the PDF filename stable (`augustine-nguyen-cv.pdf`) to avoid breaking
  the URL if the file is updated; replace the file content in place.
