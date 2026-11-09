import type { Face } from "@content/site";
import { faceColour } from "@content/site";

// Static class names so Tailwind can see them.
export const BG: Record<"sunny" | "clay" | "lagoon", string> = {
  sunny: "bg-sunny",
  clay: "bg-clay",
  lagoon: "bg-lagoon",
};
export const RING: Record<"sunny" | "clay" | "lagoon", string> = {
  sunny: "ring-sunny",
  clay: "ring-clay",
  lagoon: "ring-lagoon",
};
export const faceBg = (f: Face) => BG[faceColour[f]];
export const faceRing = (f: Face) => RING[faceColour[f]];

export function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
  dark = false,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  dark?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <p className={`label ${dark ? "text-cream" : "text-ink"}`}>{eyebrow}</p>
      <h2 id={id} className="headline mt-4 text-4xl sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {intro && (
        <p className={`mt-5 text-lg leading-relaxed md:text-xl ${dark ? "text-cream/90" : "text-ink/85"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}
