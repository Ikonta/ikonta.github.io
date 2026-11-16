## v21.2.6 · 16 November 2026 — Escura Hasselback focus correction

Added Escura Hasselback focusing-screen adapter to Make → Other work, with the original Printables model link. The design uses a spacer about 3.8–4.0 mm thick to compensate for the focusing-screen / Instax film-plane offset (focus shift). The author provided version-specific installation guidance; the spacer does **not** guarantee correct focus at all distances. Kept the presentation intentionally brief; no image or layout changes elsewhere.

## v21.2.5 · 15 November 2026 — homepage Research image
Replaced the geometric illustration in the homepage Research card with the supplied documentary photograph (IMG_4633s.jpg). No other page content or styling was changed. RAINFIELD remains under Make, separate from Björn Hedin’s research collaboration.

# v21.2.4 — RAINFIELD belongs to Make (15 November 2026)

RAINFIELD is an independent **maker concept**, not a research collaboration with Björn Hedin. It is now listed on **Make** with a direct link to its interactive mobile demo. All RAINFIELD references have been removed from **Research** and **Learning through touch**. Björn Hedin remains correctly linked only for the separate tangible-learning collaboration. Sensor and rainfall values remain conceptual/simulated. Datamax photography and all other project content remain as in v21.2.3.

# Anders Blomqvist — Website v21.2.2

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


## Version 21 — photographic archive (13 November 2026)

- Adds `/photography/archive/` and pages for F12 / Gruppo F, the 2004–2005 collaboration with Joakim Sebring, and the 2008 Gunnar Smoliansky interview.
- Adds an original portrait by Anders Blomqvist, retrieved from his historic 2009 editorial email correspondence. The photo is credited on its project page. No images by Smoliansky and no original audio are uploaded.
- Updates the Photography index, About, CV and homepage link wording to reflect photographic editorial and collaborative work.
- Adds the author's November 2026 Hasselblad Film Magazine Mount Assembly Guide V5 (10 pages) as a local PDF.
- Clarifies the status of ongoing Japan research manuscripts without asserting publication.
- Old original interviews, source materials and original film series are not republished. The 2009 F Blog article is linked as an external historical source.

### Updating an existing GitHub Pages site

Use the dedicated `Ikonta_v21_UPPDATERING.zip` package when available: extract, then drag *the extracted files and folders themselves* into the repository root's `Add file → Upload files` view. GitHub replaces matching paths. Do not upload the ZIP as a file.

Version 21 contains no change to GitHub Pages settings or deployment structure.


## Version 21.1 — corrections before GitHub upload (14 November 2026)

- CV title corrected to **Deputy Director**.
- Gruppo F period broadened from 2008–2009 to the 2000s–2010s. This is intentionally a broad date range; it does not assert an exact founding or closing year.
- Smoliansky note distinguishes the 12 June 2008 press encounter and the longer conversation on 30 June 2008. An essay drawing on the recordings is in preparation, not published.
- Photography entry no longer implies that all archive activity ended in 2009.
- This update package includes all v21 files as well as these corrections; do not upload the older v21 ZIP as a second step.

To upload via GitHub Pages: extract ZIP locally, open the repository root, use **Add file → Upload files**, drag in the **contents** (preserving folders), review the changed paths, and **Commit changes**.


## 2026-11-14 / V21.2 consolidated update

This update is based on the published v21.1 baseline and replaces the previously prepared standalone Film Developer Timer v21.2 package.

New: `projects/rainfield/` (independent maker concept study), `projects/rainfield/mobile/` (interactive simulated interface), `projects/datamax-thermal/` (thermal-printing case study), and accompanying original visual assets.

Updated: Make with independent RAINFIELD and Datamax concepts; Research with the separate Björn Hedin tangible-learning collaboration; Research/About/CV with ORCID, Google Scholar, KTH, and LinkedIn; Film Developer Timer with two application screenshots.

**Grounding and status:** RAINFIELD is a concept, not an operational rain gauge; all mobile values are simulated. Datamax custom printer output succeeded at the simple test-mark stage; 80 mm photographic strips and the adapter's final physical fit are not verified. The contact-strip image is an illustrative digital rendering using archive photographs, not an actual printer output.

Technical reference for MP Compact4 Mark II direct-thermal capabilities: Datamax–O'Neil MP Compact4 Mark II datasheet (2010); 8 dots/mm, 104 mm max print width, 40–115 mm media width.

**GitHub upload:** Extract `Ikonta_v21_2_SAMLAD_UPPDATERING.zip`, then drag **all its folders** from File Explorer to GitHub's `Add file → Upload files` area at the repository root. Verify full paths before committing (particularly `projects/rainfield/mobile/index.html`, `projects/datamax-thermal/index.html`, `assets/images/rainfield-mobile-views.png`). Do NOT upload the ZIP file itself.


## V21.2 revised final / Datamax print evidence (15 November 2026)

This package supersedes the original V21.2 preparation package. It includes all previously queued V21.2 pages, the RAINFIELD interactive mobile, researcher profile links, and Film Developer Timer screenshots. **Do not upload the old V21.2 ZIP after this one.**

The Datamax project now features original photographs of actual thermal photographic prints taken on 15 November 2026 and a screen capture of the FILM ROLL print interface. The physical-output status on the project page was updated from prospective to demonstrated. The illustration `datamax-contact-strip-study.webp` is retained only as a legacy asset, not shown on the current Datamax page.

The log supplied by the owner records seven print sections (jobs 67–73, each HTTP 200 ok=true) and a separate 10 mm feed (job 74), but no record of section 8/8. Queue acceptance is not itself confirmation of physical printing of all seven segments. Photographs independently show physical thermal output. Avoid claiming full 8/8 completion.

Source files for the new original photographic assets: `24659.jpg`–`24663.jpg` and `image(20261115-083914).png`. Files have been converted to optimized WebP for the website.

To publish, unpack the REVISED UPDATE ZIP and drag its root-level contents to the GitHub repository root using Add file → Upload files, preserving directories. This has not been published to GitHub by the packaging operation.


### 21.2.1 · 15 November 2026 — image scale correction
- Datamax: compact, linked print contact sheet; smaller printer and interface photographs. Original images remain full-resolution files.
- RAINFIELD: constrained scientific illustrations and mobile previews.
- Film Developer Timer: smaller reference screenshots.
- No project text or measurement claims changed.
- Further site-wide review: constrained the stand-alone Smoliansky portrait and PiCa135 technical illustrations; image grids and photographic lightbox are unchanged.


## v21.2.2 — compact images and RAINFIELD app navigation
- Reduced Datamax hero to 240px max width and gallery images to 154px height on desktop. Original image assets are unchanged and openable separately.
- Reduced Make spotlight and RAINFIELD concept illustrations.
- Added visible one-click `Open rain app` links on Research, Tangible Learning and RAINFIELD concept pages.
- The app exists at `/projects/rainfield/mobile/`; ensure this entire subfolder is uploaded.
- Added CSS query version `?v=21.2.2` on amended pages to avoid stale cached styling.


### Datamax image revision · 15 November 2026 (v21.2.3)
Replaced the earlier Datamax image collection with exactly three authentic photographs supplied by Anders. The page now contains one compact three-image strip, with no large hero image and no extra FILM ROLL screenshot. The Make overview teaser uses the first of these same three photographs. RAINFIELD app and all other site sections are unchanged.
