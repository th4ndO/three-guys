import { FaceMark } from "./FaceMark";
import type { Face } from "@content/site";

const ITEMS: { word: string; face: Face }[] = [
  { word: "Design", face: "thinker" },
  { word: "Entertainment", face: "joker" },
  { word: "Marketing", face: "happy" },
  { word: "Mind over matter", face: "thinker" },
];

/** Decorative scrolling strip. Stops under prefers-reduced-motion. */
export function Ticker() {
  const row = (key: string) => (
    <ul key={key} className="flex shrink-0 items-center gap-8 pr-8 md:gap-12 md:pr-12">
      {ITEMS.map((i) => (
        <li key={i.word} className="flex items-center gap-8 md:gap-12">
          <span className="headline whitespace-nowrap text-3xl md:text-5xl">{i.word}</span>
          <FaceMark face={i.face} decorative className="h-8 w-auto md:h-11" />
        </li>
      ))}
    </ul>
  );
  return (
    <div aria-hidden="true" className="overflow-hidden border-y border-cream/10 bg-midnight py-6 text-cream md:py-8">
      <div className="ticker flex w-max">
        {row("a")}
        {row("b")}
      </div>
    </div>
  );
}
