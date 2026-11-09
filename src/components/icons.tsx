import type { SVGProps } from "react";

// Small line icons (24×24, 2px rounded strokes) drawn to sit with the faces'
// rounded style. Decorative by default — the link/button text carries meaning.
function Icon({ children, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

type P = SVGProps<SVGSVGElement>;

export const MenuIcon = (p: P) => (
  <Icon {...p}><path d="M4 7h16M4 12h16M4 17h16" /></Icon>
);
export const CloseIcon = (p: P) => (
  <Icon {...p}><path d="M18 6 6 18M6 6l12 12" /></Icon>
);
export const ArrowRightIcon = (p: P) => (
  <Icon {...p}><path d="M5 12h14M13 6l6 6-6 6" /></Icon>
);
export const ArrowDownIcon = (p: P) => (
  <Icon {...p}><path d="M12 5v14M6 13l6 6 6-6" /></Icon>
);
export const SendIcon = (p: P) => (
  <Icon {...p}><path d="M21 3 10 14M21 3l-7 18-4-7-7-4 18-7Z" /></Icon>
);
export const CheckIcon = (p: P) => (
  <Icon {...p}><path d="M5 12.5 10 17 19 7.5" /></Icon>
);
export const MailIcon = (p: P) => (
  <Icon {...p}>
    <rect x="2.5" y="4.5" width="19" height="15" rx="3" />
    <path d="m3.5 7 8.5 6 8.5-6" />
  </Icon>
);
export const PhoneIcon = (p: P) => (
  <Icon {...p}>
    <path d="M21 16.5v3a2 2 0 0 1-2.2 2A18 18 0 0 1 2.5 5.2 2 2 0 0 1 4.5 3h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.4 10.9a15 15 0 0 0 4.7 4.7l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
  </Icon>
);
export const WhatsAppIcon = (p: P) => (
  <Icon {...p}>
    <path d="M3.5 20.5 5 16a8.5 8.5 0 1 1 3.2 3.2Z" />
    <path d="M9 8.5c0 3.3 3.2 6.5 6.5 6.5l1-1.5-2-1-1 1a5 5 0 0 1-2.5-2.5l1-1-1-2Z" strokeWidth={1.5} />
  </Icon>
);
export const InstagramIcon = (p: P) => (
  <Icon {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <path d="M17.5 6.5h.01" />
  </Icon>
);
