import { ContactForm } from "@/components/ContactForm";
import { FaceMark } from "@/components/FaceMark";
import { Header } from "@/components/Header";
import {
  ArrowDownIcon,
  ArrowRightIcon,
  CheckIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { NAV } from "@/components/nav";
import { HeroLogo } from "@/components/HeroLogo";
import { Logo } from "@/components/Logo";
import { RevealObserver } from "@/components/Reveal";
import { Ticker } from "@/components/Ticker";
import { SectionHeading, faceBg, faceRing } from "@/components/ui";
import { projects, type Category } from "@content/projects";
import { links, site, type Face } from "@content/site";

const wrap = "mx-auto max-w-6xl px-5 md:px-8";
const section = "py-14 md:py-28";

// TODO: draft copy — review and edit before launch.
const SERVICES: { face: Face; title: Category; blurb: string; items: string[] }[] = [
  {
    face: "thinker",
    title: "Design",
    blurb: "Brands that make sense before they look good. Then they look good too.",
    items: ["Logos and brand identity", "Print, packaging and signage", "Website design", "Social media graphics"],
  },
  {
    face: "joker",
    title: "Entertainment",
    blurb: "Events and content people actually want to show up for, and stay for.",
    items: ["Event concepts and planning", "Video and content production", "Brand activations", "Live entertainment"],
  },
  {
    face: "happy",
    title: "Marketing",
    blurb: "Getting the right people to notice you. Then getting them to come back.",
    items: ["Campaign ideas and strategy", "Social media management", "Content calendars", "Launch plans"],
  },
];

// TODO: draft copy — review and edit before launch.
const STEPS = [
  { n: "01", title: "Think", face: "thinker" as Face, text: "Mind first. We ask good questions, listen properly and find the idea worth making." },
  { n: "02", title: "Make", face: "joker" as Face, text: "Then the matter. We design, write, film and build, and show you as we go. No big reveals, no surprises." },
  { n: "03", title: "Launch", face: "happy" as Face, text: "We put it out into the world, see how it lands, and tweak what needs tweaking." },
];

const CATEGORY_FACE: Record<Category, Face> = { Design: "thinker", Entertainment: "joker", Marketing: "happy" };

const buttonDark =
  "press group label inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-ink px-7 py-3.5 text-cream md:py-4";
const buttonLine =
  "press group label inline-flex min-h-12 items-center justify-center gap-3 rounded-full border-2 border-ink px-7 py-3.5 text-ink transition-colors hover:bg-ink/10 md:py-4";

export default function Home() {
  return (
    <>
      <Header />
      <RevealObserver />
      <main id="main" tabIndex={-1} className="focus:outline-none">
        {/* 1 ─ Hero: centred and stacked, logo first */}
        <section id="top" aria-labelledby="hero-title" className="overflow-hidden bg-sage">
          <div className={`${wrap} flex flex-col items-center pb-14 pt-5 text-center md:pb-28 md:pt-16`}>
            <HeroLogo className="hero-in w-full max-w-[176px] sm:max-w-[360px] md:max-w-[480px]" />
            <h1 id="hero-title" className="headline mt-5 text-[2.6rem] sm:mt-8 sm:text-7xl lg:text-[7.5rem]">
              <span className="hero-in inline-block" style={{ "--d": "0.15s" } as React.CSSProperties}>Three minds.</span>{" "}
              <span className="hero-in relative inline-block whitespace-nowrap" style={{ "--d": "0.3s" } as React.CSSProperties}>
                One studio.
                <span aria-hidden className="absolute inset-x-0 -bottom-2.5 flex h-2 gap-1.5 md:-bottom-3 md:h-3">
                  <span className="bar flex-1 rounded-full bg-sunny" style={{ "--d": "0.7s" } as React.CSSProperties} />
                  <span className="bar flex-1 rounded-full bg-clay" style={{ "--d": "0.85s" } as React.CSSProperties} />
                  <span className="bar flex-1 rounded-full bg-lagoon" style={{ "--d": "1s" } as React.CSSProperties} />
                </span>
              </span>
            </h1>
            <p className="hero-in mt-6 max-w-xl text-base leading-relaxed sm:mt-8 sm:text-lg md:text-xl" style={{ "--d": "0.45s" } as React.CSSProperties}>
              {/* TODO: draft copy */}
              We&rsquo;re a creative studio for design, entertainment and marketing. We think it through, then we make it happen.
            </p>
            <div className="hero-in mt-6 flex w-full flex-col gap-2.5 sm:mt-9 sm:w-auto sm:flex-row sm:gap-3" style={{ "--d": "0.6s" } as React.CSSProperties}>
              <a href="#work" className={buttonDark}>See our work <ArrowDownIcon className="nudge-down h-5 w-5" /></a>
              <a href="#contact" className={buttonLine}>Let&rsquo;s talk <ArrowRightIcon className="nudge-right h-5 w-5" /></a>
            </div>
          </div>
        </section>

        <Ticker />

        {/* 2 ─ What we do */}
        <section id="services" aria-labelledby="services-title" className={`bg-cream ${section}`}>
          <div className={wrap}>
            <SectionHeading
              id="services-title"
              face="happy"
              eyebrow="What we do"
              title="Three things. Done properly."
              intro="Most projects need a bit of all three. That's the point of us." /* TODO: draft copy */
            />
            <ul className="mt-10 grid gap-5 md:mt-14 md:grid-cols-3 md:gap-6">
              {SERVICES.map((s, idx) => (
                <li
                  key={s.title}
                  data-reveal
                  style={{ "--d": `${idx * 0.12}s` } as React.CSSProperties}
                  className="lift press group flex flex-col overflow-hidden rounded-[var(--radius-card)] bg-sage"
                >
                  <div className={`${faceBg(s.face)} flex items-center justify-center px-6 py-5 md:py-8`}>
                    <FaceMark face={s.face} className="hop h-14 w-auto md:h-20" />
                  </div>
                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <h3 className="headline text-3xl">{s.title}</h3>
                    <p className="mt-3 leading-relaxed">{s.blurb}</p>
                    <ul className="mt-5 space-y-2 border-t border-ink/15 pt-4 md:mt-6 md:pt-5">
                      {s.items.map((i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span aria-hidden className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${faceBg(s.face)}`}>
                            <CheckIcon className="h-3.5 w-3.5" strokeWidth={3} />
                          </span>
                          {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 3 ─ Meet the guys: faces on Midnight, as in the brand guide (p.12) */}
        <section id="team" aria-labelledby="team-title" className={`on-dark bg-midnight text-cream ${section}`}>
          <div className={wrap}>
            <SectionHeading
              id="team-title"
              face="joker"
              eyebrow="Meet the guys"
              title="One of each. You'll see."
              intro="Three different heads, one shared way of working." /* TODO: draft copy */
              dark
            />
            <ul className="mt-10 grid gap-5 sm:grid-cols-2 sm:gap-10 md:mt-14 md:grid-cols-3 md:gap-8">
              {site.team.map((m, idx) => (
                <li
                  key={m.face}
                  data-reveal
                  style={{ "--d": `${idx * 0.12}s` } as React.CSSProperties}
                  className="group flex items-center gap-5 sm:block"
                >
                  <div
                    className={`relative aspect-square w-28 shrink-0 overflow-hidden rounded-[20px] bg-cream ring-[6px] ring-inset sm:w-full sm:max-w-[320px] sm:rounded-[28px] sm:ring-8 ${faceRing(m.face)}`}
                  >
                    {m.photo ? (
                      <img src={m.photo} alt={`${m.name}, ${m.title.toLowerCase()}`} className="h-full w-full object-cover" loading="lazy" />
                    ) : (
                      <div className="flex h-full flex-col items-center justify-center gap-4">
                        <FaceMark face={m.face} decorative className="hop h-10 w-auto opacity-90 sm:h-20" />
                        <span className="label hidden text-ink/80 sm:block">Photo coming soon</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="headline text-2xl sm:mt-6 sm:text-3xl">{m.name}</h3>
                  <p className="mt-1 text-cream/85">{m.role}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 4 ─ Work */}
        <section id="work" aria-labelledby="work-title" className={`bg-cream ${section}`}>
          <div className={wrap}>
            <SectionHeading
              id="work-title"
              face="thinker"
              eyebrow="Work"
              title="Things we've made."
              intro="A few favourites. Ask us for the full story behind any of them." /* TODO: draft copy */
            />
            <p className="label mt-8 flex items-center gap-2 text-ink/80 sm:hidden" aria-hidden="true">
              Swipe <ArrowRightIcon className="nudge-hint h-4 w-4" />
            </p>
            <ul
              aria-label="Projects"
              tabIndex={0}
              className="-mx-5 mt-4 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] sm:mx-0 sm:mt-14 sm:grid sm:snap-none sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3 [&::-webkit-scrollbar]:hidden"
            >
              {projects.map((p, idx) => {
                const face = CATEGORY_FACE[p.category];
                const card = (
                  <article className="lift press group h-full overflow-hidden rounded-[var(--radius-card)] bg-sage">
                    <div className={`relative aspect-[4/3] ${p.image ? "" : faceBg(face)}`}>
                      {p.image ? (
                        <img src={p.image.src} alt={p.image.alt} className="zoom h-full w-full object-cover" loading="lazy" />
                      ) : (
                        <div className="flex h-full items-center justify-center">
                          <FaceMark face={face} decorative className="zoom h-16 w-auto opacity-80" />
                          <span className="label absolute bottom-4 left-4 text-ink">Image coming soon</span>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <span className="label inline-block rounded-full bg-cream px-3 py-1.5">{p.category}</span>
                      <h3 className="headline mt-4 text-2xl">{p.title}</h3>
                      <p className="mt-1 text-ink/85">{p.client}</p>
                    </div>
                  </article>
                );
                return (
                  <li key={p.slug} data-reveal style={{ "--d": `${(idx % 3) * 0.1}s` } as React.CSSProperties} className="w-[82%] shrink-0 snap-start sm:w-auto">
                    {p.href ? (
                      <a href={p.href} className="block h-full rounded-[var(--radius-card)] transition-transform hover:-translate-y-1">
                        {card}
                      </a>
                    ) : (
                      card
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* 5 ─ How we work */}
        <section id="process" aria-labelledby="process-title" className={`bg-sage ${section}`}>
          <div className={wrap}>
            <SectionHeading
              id="process-title"
              face="happy"
              eyebrow={site.slogan}
              title="How we work."
              intro="Mind over matter means we think before we make. It saves you time, money and a few headaches." /* TODO: draft copy */
            />
            <ol className="mt-10 grid gap-5 md:mt-14 md:grid-cols-3 md:gap-6">
              {STEPS.map((s, i) => (
                <li
                  key={s.title}
                  data-reveal
                  style={{ "--d": `${i * 0.15}s` } as React.CSSProperties}
                  className="lift press group relative rounded-[var(--radius-card)] bg-cream p-6 md:p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="label">Step {s.n}</span>
                    <span className={`flex h-14 w-14 items-center justify-center rounded-xl ${faceBg(s.face)}`}>
                      <FaceMark face={s.face} decorative className="hop h-9 w-auto" />
                    </span>
                  </div>
                  <h3 className="headline mt-5 text-3xl md:mt-6 md:text-4xl">
                    {s.title}
                    {i < STEPS.length - 1 && <ArrowRightIcon className="nudge-right ml-2 inline h-8 w-8 align-middle text-ink/40" />}
                  </h3>
                  <p className="mt-3 leading-relaxed">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Testimonials — hidden until real quotes exist (site.showTestimonials). */}
        {site.showTestimonials && site.testimonials.length > 0 && (
          <section id="testimonials" aria-labelledby="testimonials-title" className={`bg-cream ${section}`}>
            <div className={wrap}>
              <SectionHeading id="testimonials-title" face="joker"
              eyebrow="Kind words" title="Don't take our word for it." />
              <ul className="mt-14 grid gap-6 md:grid-cols-3">
                {site.testimonials.map((t) => (
                  <li key={t.name} className="rounded-[var(--radius-card)] bg-sage p-7">
                    <blockquote className="text-lg leading-relaxed">&ldquo;{t.quote}&rdquo;</blockquote>
                    <p className="label mt-5">
                      {t.name}
                      {t.company ? ` · ${t.company}` : ""}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* 6 ─ Contact */}
        <section id="contact" aria-labelledby="contact-title" className={`on-dark bg-midnight text-cream ${section}`}>
          <div className={`${wrap} grid gap-14 md:grid-cols-[1fr_1.3fr]`}>
            <div>
              <SectionHeading
                id="contact-title"
                face="joker"
              eyebrow="Contact"
                title="Got an idea? Let's talk."
                intro="Big, small or still a bit fuzzy. Tell us what you're thinking and we'll get back to you." /* TODO: draft copy */
                dark
              />
              <ul className="mt-8 space-y-2 text-lg md:mt-10">
                <ContactRow icon={<MailIcon />} label="Email" href={links.mailto} text={site.contact.email} />
                <ContactRow icon={<PhoneIcon />} label="Phone" href={links.tel} text={site.contact.phone} />
                <ContactRow icon={<WhatsAppIcon />} label="WhatsApp" href={links.whatsapp} text="Send us a message" external />
                <ContactRow icon={<InstagramIcon />} label="Instagram" href={links.instagram} text={`@${site.contact.instagramHandle}`} external />
              </ul>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      {/* 7 ─ Footer */}
      <footer className="on-dark bg-ink py-12 text-cream md:py-14">
        <div className={`${wrap} flex flex-col gap-10 md:flex-row md:items-end md:justify-between`}>
          <div>
            <Logo variant="primaryOnDark" alt="Three Guys" className="h-auto w-[160px] md:w-[180px]" />
            <p className="label mt-6 text-cream">{site.slogan}</p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-1">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="inline-flex min-h-11 min-w-11 items-center hover:underline">{n.label}</a>
                </li>
              ))}
            </ul>
            <ul className="mt-6 flex gap-3 md:justify-end" aria-label="Social">
              {[
                { href: links.instagram, label: "Instagram", icon: <InstagramIcon /> },
                { href: links.whatsapp, label: "WhatsApp", icon: <WhatsAppIcon /> },
                { href: links.mailto, label: "Email", icon: <MailIcon /> },
              ].map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    aria-label={s.label}
                    {...(s.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-cream/30 transition-colors hover:border-cream hover:bg-cream hover:text-ink [&>svg]:h-5 [&>svg]:w-5"
                  >
                    {s.icon}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className={`${wrap} mt-10 flex flex-col gap-2 border-t border-cream/15 pt-6 text-sm text-cream/80 sm:flex-row sm:justify-between`}>
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>
            {site.credit.href ? (
              <a href={site.credit.href} className="hover:underline" rel="noopener" target="_blank">{site.credit.label}</a>
            ) : (
              site.credit.label
            )}
          </p>
        </div>
      </footer>
    </>
  );
}

function ContactRow({
  icon,
  label,
  href,
  text,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
  text: string;
  external?: boolean;
}) {
  return (
    <li>
      <a
        href={href}
        className="press group flex min-h-12 items-center gap-4 rounded-full pr-3"
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        <span aria-hidden className="pop inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cream/10 text-cream [&>svg]:h-5 [&>svg]:w-5">
          {icon}
        </span>
        <span className="sr-only">{label}: </span>
        <span className="font-medium underline decoration-clay decoration-2 underline-offset-4 group-hover:decoration-cream">
          {text}
        </span>
        {external && <span className="sr-only"> (opens in a new tab)</span>}
      </a>
    </li>
  );
}
