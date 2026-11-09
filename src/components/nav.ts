export type NavIcon = "sparkle" | "people" | "gallery" | "steps" | "chat";
export type NavTone = "sunny" | "clay" | "lagoon";

export const NAV: { href: string; label: string; icon: NavIcon; tone: NavTone }[] = [
  { href: "#services", label: "What we do", icon: "sparkle", tone: "sunny" },
  { href: "#team", label: "The guys", icon: "people", tone: "clay" },
  { href: "#work", label: "Work", icon: "gallery", tone: "lagoon" },
  { href: "#process", label: "How we work", icon: "steps", tone: "sunny" },
  { href: "#contact", label: "Contact", icon: "chat", tone: "clay" },
];
