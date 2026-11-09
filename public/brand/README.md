# Brand files

These are the supplied Three Guys logo files, copied **unchanged** from the brand kit
(`Three Guys - Brand Kit/Logo/`). Never edit, recolour, rotate or redraw them.

| File | From the brand kit |
| --- | --- |
| `three-guys_primary_full-colour.svg` | `01 Primary/` — header (on Cream) |
| `three-guys_primary_full-colour-on-dark.svg` | `01 Primary/` — footer (on Ink) |
| `three-guys_primary-slogan_full-colour.svg` | `02 Primary + Slogan/` — hero (on Sage) |
| `three-guys_icon_full-colour.svg` | `05 Icon - Totem/` — single faces are cropped from it with a viewBox |
| `three-guys_face_full-colour.svg` | `06 Icon - Happy Face/` — favicon and app icons |

`npm run build` regenerates `favicon.ico`, `icon.png`, `apple-icon.png`, the Open Graph
image and the logo dimensions (`src/generated/brand.json`) from these files.

The hero faces bob by targeting the slogan logo's paths by position (see
`heroFaceSelectors` in `content/site.ts`). If this file is ever replaced with a new
version, check those selectors still match the faces.
