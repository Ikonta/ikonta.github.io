# Anders Blomqvist — Website v20

A rebuilt static website with **three entry points**: Research, Make, Photography. No blog, no achievements on the home page.

## Publish with GitHub Pages

1. Extract the archive.
2. Create (or update) the repository `Ikonta/ikonta.github.io`.
3. Upload the **contents** of the site folder (not the enclosing folder) to the repository root.
4. Open Settings → Pages; select Deploy from branch `main`, folder `/ (root)`.
5. The expected site address is `https://ikonta.github.io/` after GitHub finishes deploying.

The publication step is **not performed** by this archive.

## Typography

Bahnschrift Light / Bahnschrift preferred where available. Barlow is loaded via Google Fonts as the fallback. Doto is available as an archive reference font; it is used sparingly for photo file identifiers. No font binaries are bundled.

## Images and accuracy

- The six Japan photos are provided by the site owner; source filenames are listed on the gallery pages and the mapping below.
- The Hasselblad mount photograph comes from the earlier portfolio package.
- `research-form.svg` and `tangible-object-diagram.svg` are editorial diagrams, **not images of a specific research experiment**.
- PiCa135, Developer Timer, Mentor Reflex, and accessory project cards awaiting photos are explicitly marked rather than assigned invented documentation images.
- No negative numbers have been fabricated. Digital filenames are used when actual film/frame identifiers are not known.

## Original photographs
- `assets/images/tokyo-architecture.jpg` ⇐ `PXL_20260818_093254771.jpg`
- `assets/images/fuji-at-dusk.jpg` ⇐ `PXL_20260806_094116087.jpg`
- `assets/images/hat-and-mountain.jpg` ⇐ `PXL_20260801_034704347.jpg`
- `assets/images/mist-trail.jpg` ⇐ `PXL_20260727_022417440(1).jpg`
- `assets/images/forest-negative.jpg` ⇐ `PXL_20260714_102436s020.jpg`
- `assets/images/breakwater-negative.jpg` ⇐ `PXL_20260714_1s02751981.jpg`

## Structure
- `/` — three-way entrance
- `/research/` — research narrative with project links
- `/make/` — product catalogue with technical documentation
- `/photography/` — series overview; separate series views allow grid selection and keyboard-controlled full-image lightbox
- `/about/` — brief biography
- `/cv/` — chronological record
- `/projects/` — project details and sources

## To complete before public release
- Add actual learning/workshop photographs with proper permissions and attribution.
- PiCa135 now has original manual-derived photographs and diagrams; verify future additions to other camera projects against their underlying source material.
- Add actual Japan STL files (with authorship and version history) to Objects for Thinking.
- Review biography and CV dates for publication.
- Optionally replace external Google Fonts loading with licensed self-hosted alternatives; do not distribute Bahnschrift files without permission.


## Version 14 — minimalist homepage

The oversized repeated name was removed from the visible home hero. The name remains in the navigation; a screen-reader-only h1 preserves page semantics. Role descriptor is provisionally **researcher · developer · photographer**, with the same three destination routes.

## V15 visual adjustments

- Single uppercase letterspaced header name (CSS `letter-spacing`; accessible text unchanged).
- Smaller Research / Make / Photography labels; all other content from v14 preserved.


## PiCa135 example project page

`projects/pica135/index.html` contains the revised product case study. The large optical diagram is **illustrative**, not a CAD drawing or a photograph of PiCa135. To replace it with an actual camera photograph, place a JPG in `assets/images/` and change the `src` attribute in the project page. The exact Printables publication is linked for source files and detailed assembly instructions. The Make overview thumbnail uses the same illustrative SVG until a verified original image is available.


## PiCa135 (revised from original creator's manual)

The PiCa135 page has been reworked as an authored case study based on Anders Blomqvist's PiCa135 Assembly Manual v1.0 (December 2020) and his design rationale. It uses the actual camera photograph and original construction diagrams extracted from the manual. Files under assets/images/pica135-*.webp are based on this PDF. 

The design rationale emphasizes: integrated shutter/shift; the two-cassette film path; steel-wire perforation counting; and interchangeable film gates. The format-and-click table reproduces the usage guide from manual page 9 verbatim. In the parts inventory (page 5) some dimensions are differently oriented/rounded, so consult the full manual and current Printables files before production.

The manual is included at assets/docs/PiCa135_assembly_manual_v1_2020.pdf and is licensed CC BY-NC-SA 4.0 per its cover and page 2. Do not imply the author's design is licensed for commercial use.


## PiCa135 presentation, v18

The genuine camera photographs lead. The simple optical explanation from the first draft (centred versus shifted pinhole) has been restored and paired with a practical explanation of perspective correction. Tinkercad assembly screenshots are retained under an optional disclosure at the bottom, never presented as fine-art renders. The PDF is included locally.

## Version 19 — Film Developer Timer

The Make index links to a dedicated Film Developer Timer project page, and the page points to https://lovable.dev/products/filmdevtimer and https://lovable.dev/@spotmatic. The static countdown is labelled as a conceptual illustration, not a screenshot of the application. Current app features were not independently verifiable from Lovable, so descriptions are restricted to project intent.


## Version 20 — Make editorial revision (8 November 2026)

- Keeps the homepage and the Research / Make / Photography architecture. No blog or extra promotional panels.
- Reorganizes Make around three featured projects: PiCa135, Hasselblad Film Magazine Mount, and Film Developer Timer. Other work remains available in compact rows.
- Rewrites Film Developer Timer as a digital instrument for analogue film processing. The two circular indicators are an original **static design illustration**, not a screenshot or a functioning timer.
- Describes the separation between preparation and the running display, numeric clarity, agitation and elapsed/overdue indication, and the restrained Rams/Braun design reference. Temperature-adjustment models are discussed as part of the design work; actual deployed functionality is not asserted.
- Rewrites the Hasselblad project as a concise case study explaining the independent use of an older C-series magazine, modular fronts, stepped support-free cone, adjustable hooks and PET cap. Original photographs remain unchanged.
- Adds a cross-project navigation at the bottom of PiCa135 while preserving the original source-backed engineering explanation and assembly manual.
- Adds a Lovable link to the Make-related page footers; it was not introduced as a separate fourth homepage entrance.
- Source availability: the Lovable product page was not publicly retrievable during this build. Do not treat the illustrative timer as an implementation screenshot.
