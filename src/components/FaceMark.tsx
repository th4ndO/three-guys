import brand from "@/generated/brand.json";
import type { Face } from "@content/site";

// Tile positions in the supplied totem icon's own coordinates (tiles are 100 × 64).
const TILE_Y: Record<Face, number> = { happy: 0, joker: 70, thinker: 140 };
const LABEL: Record<Face, string> = {
  happy: "The happy one",
  joker: "The joker",
  thinker: "The thinker",
};

/**
 * One face, cropped from the supplied totem SVG with a viewBox window.
 * The artwork itself is referenced, never redrawn.
 */
export function FaceMark({
  face,
  className,
  decorative = false,
}: {
  face: Face;
  className?: string;
  decorative?: boolean;
}) {
  const { src, x, y, width, height } = brand.totem;
  return (
    <svg
      viewBox={`0 ${TILE_Y[face]} 100 64`}
      className={className}
      {...(decorative
        ? { "aria-hidden": true }
        : { role: "img", "aria-label": `${LABEL[face]} face` })}
    >
      <image href={src} x={x} y={y} width={width} height={height} />
    </svg>
  );
}
