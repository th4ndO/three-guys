import type { NavIcon, NavTone } from "./nav";
import { ChatIcon, GalleryIcon, PeopleIcon, SparkleIcon, StepsIcon } from "./icons";

const ICONS = { sparkle: SparkleIcon, people: PeopleIcon, gallery: GalleryIcon, steps: StepsIcon, chat: ChatIcon };
const TONE: Record<NavTone, string> = { sunny: "bg-sunny", clay: "bg-clay", lagoon: "bg-lagoon" };

/** A section icon on a face-colour tile (ink on face colours, per the brand guide p.10). */
export function NavIconTile({
  icon,
  tone,
  size = "lg",
  round = false,
}: {
  icon: NavIcon;
  tone: NavTone;
  size?: "lg" | "sm";
  round?: boolean;
}) {
  const Svg = ICONS[icon];
  return size === "lg" ? (
    <span aria-hidden className={`pop inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-ink ${TONE[tone]}`}>
      <Svg className="h-6 w-6" />
    </span>
  ) : (
    <span
      aria-hidden
      className={`pop inline-flex h-7 w-7 shrink-0 items-center justify-center text-ink ${round ? "rounded-full" : "rounded-lg"} ${TONE[tone]}`}
    >
      <Svg className="h-4 w-4" />
    </span>
  );
}
