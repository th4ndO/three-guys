import { readFileSync } from "node:fs";
import path from "node:path";
import { site } from "@content/site";

/**
 * Inlines the supplied primary+slogan SVG (unchanged) so its three face groups
 * can bob on load. Runs at build time only. Animation is scoped to the
 * selectors in content/site.ts and disabled under prefers-reduced-motion.
 */
export function HeroLogo({ className }: { className?: string }) {
  const raw = readFileSync(
    path.join(process.cwd(), "public/brand/three-guys_primary-slogan_full-colour.svg"),
    "utf8",
  );
  // Strip only the XML prolog/doctype/comments, which aren't valid inside HTML.
  const markup = raw
    .replace(/<\?xml[\s\S]*?\?>/g, "")
    .replace(/<!DOCTYPE[\s\S]*?>/gi, "")
    .replace(/<!--[\s\S]*?-->/g, "")
    .trim();

  const css = site.heroFaceSelectors
    .map(
      (sel, i) =>
        `.hero-logo :is(${sel}){animation:bob .9s cubic-bezier(.34,1.56,.64,1) both;animation-delay:${(0.25 + i * 0.18).toFixed(2)}s}`,
    )
    .join("");

  return (
    <>
      {css && <style>{`@media (prefers-reduced-motion:no-preference){${css}}`}</style>}
      <div
        role="img"
        aria-label={`Three Guys — ${site.slogan}`}
        className={`hero-logo [&>svg]:block [&>svg]:h-auto [&>svg]:w-full ${className ?? ""}`}
        dangerouslySetInnerHTML={{ __html: markup }}
      />
    </>
  );
}
