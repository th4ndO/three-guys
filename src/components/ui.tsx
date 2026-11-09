import { FaceMark } from "./FaceMark";
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

/**
 * Section heading led by one of the faces as a marker (a face tile and a
 * pill tag), rather than a plain small-caps eyebrow line.
 */
export function SectionHeading({
  id,
  face,
  eyebrow,
  title,
  intro,
  dark = false,
  center = false,
}: {
  id: string;
  face: Face;
  eyebrow: string;
  title: string;
  intro?: string;
  dark?: boolean;
  center?: boolean;
}) {
  return (
    <div data-reveal className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <div className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}>
        <span
          data-reveal="pop"
          className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${faceBg(face)}`}
        >
          <FaceMark face={face} decorative className="h-8 w-auto" />
        </span>
        <span
          className={`label rounded-full border-2 px-3 py-1.5 ${dark ? "border-cream/40 text-cream" : "border-ink/25 text-ink"}`}
        >
          {eyebrow}
        </span>
      </div>
      <h2 id={id} className="headline mt-5 text-[2.4rem] sm:text-5xl md:mt-6 md:text-6xl">
        {title}
      </h2>
      {intro && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg md:mt-5 md:text-xl ${dark ? "text-cream/90" : "text-ink/85"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}
