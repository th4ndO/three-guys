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

  // The supplied slogan logo is flat paths (no groups), so each face is picked
  // by path position — happy: tile + cheeks + features; joker; thinker. The file
  // itself is never edited. Only update this if the logo file is replaced.
  heroFaceSelectors: [
    "svg > path:nth-of-type(1), svg > path:nth-of-type(4), svg > path:nth-of-type(5), svg > path:nth-of-type(6)",
    "svg > path:nth-of-type(2), svg > path:nth-of-type(7)",
    "svg > path:nth-of-type(3), svg > path:nth-of-type(8)",
  ],

  credit: { label: "Website by Profound Productions", href: null as string | null }, // TODO: optional link
};

/** Face colours, per the brand guide (p.12). */
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
