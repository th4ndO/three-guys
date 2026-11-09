# Brand files — drop the real SVGs here

Every SVG in this folder is a **placeholder** (dashed outline, "PLACEHOLDER" comment).
Replace each one with the supplied file from the Three Guys brand kit, keeping the
same file name. Copy them unchanged — never edit, recolour or redraw the logo.

| File here | Copy from brand kit |
| --- | --- |
| `three-guys_primary_full-colour.svg` | `Logo/01 Primary/three-guys_primary_full-colour.svg` |
| `three-guys_primary_full-colour-on-dark.svg` | `Logo/01 Primary/three-guys_primary_full-colour-on-dark.svg` |
| `three-guys_primary-slogan_full-colour.svg` | `Logo/02 Primary + Slogan/three-guys_primary-slogan_full-colour.svg` |
| `three-guys_icon_full-colour.svg` | `Logo/05 Icon - Totem/three-guys_icon_full-colour.svg` |
| `three-guys_icon-happy-face_full-colour.svg` | the full-colour SVG in `Logo/06 Icon - Happy Face/` (rename to this) |

Then run `npm run build`. The `prebuild` step regenerates `favicon.ico`, `icon.png`,
`apple-icon.png`, the Open Graph image and the logo dimensions from these files,
and warns while any placeholder is still in place.

After swapping in the slogan logo, set `heroFaceSelectors` in `content/site.ts`
to the ids/selectors of the three face groups inside that SVG so they bob on load.
