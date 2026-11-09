// ─────────────────────────────────────────────────────────────────────────────
// ALL editable business details live here. Every value marked TODO is a
// placeholder — replace it before launch.
// ─────────────────────────────────────────────────────────────────────────────

export type Face = "happy" | "joker" | "thinker";

export const site = {
  name: "Three Guys",
  slogan: "Mind over matter.",
  description:
    "Three Guys is a creative studio for design, entertainment and marketing. Three minds, one studio. Mind over matter.",

  // TODO: real domain (no trailing slash). Used for canonical URL and social previews.
  url: "https://yourdomain.co.za",

  contact: {
    email: "hello@yourdomain.co.za", // TODO
    phone: "+27 00 000 0000", // TODO: shown on the site
    phoneHref: "+27000000000", // TODO: same number, digits only, for tel: links
    whatsapp: "27000000000", // TODO: international format, digits only (no +, no spaces)
    instagramHandle: "yourhandle", // TODO: without the @
  },

  // TODO: real names and roles. Photos: add a square image to /public/team/
  // and set `photo` (e.g. "/team/happy.jpg") — the framed placeholder is used until then.
  team: [
    { face: "happy", title: "The happy one", name: "Name Surname", role: "Role goes here", photo: null },
    { face: "joker", title: "The joker", name: "Name Surname", role: "Role goes here", photo: null },
    { face: "thinker", title: "The thinker", name: "Name Surname", role: "Role goes here", photo: null },
  ] as { face: Face; title: string; name: string; role: string; photo: string | null }[],

  // Testimonials are hidden until real quotes exist. Add quotes (with the
  // client's permission), then set `showTestimonials` to true.
  showTestimonials: false,
  testimonials: [] as { quote: string; name: string; company?: string }[],

  // CSS selectors for the three face groups inside the hero slogan logo SVG,
  // in bob order. TODO: after dropping in the real file, open it and set these
  // to its face group ids (e.g. "#happy"). Unmatched selectors simply don't animate.
  heroFaceSelectors: ["#face-happy", "#face-joker", "#face-thinker"],

  credit: { label: "Website by Profound Productions", href: null as string | null }, // TODO: optional link
};

/** Accent colour token per face. TODO: confirm against the totem tile colours. */
export const faceColour: Record<Face, "sunny" | "clay" | "lagoon"> = {
  happy: "sunny",
  joker: "clay",
  thinker: "lagoon",
};

export const links = {
  mailto: `mailto:${site.contact.email}`,
  tel: `tel:${site.contact.phoneHref}`,
  whatsapp: `https://wa.me/${site.contact.whatsapp}`,
  instagram: `https://instagram.com/${site.contact.instagramHandle}`,
};
