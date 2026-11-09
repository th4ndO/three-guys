import { ContactForm } from "@/components/ContactForm";
import { FaceMark } from "@/components/FaceMark";
import { Header } from "@/components/Header";
import { NAV } from "@/components/nav";
import { HeroLogo } from "@/components/HeroLogo";
import { Logo } from "@/components/Logo";
import { SectionHeading, faceBg, faceRing } from "@/components/ui";
import { projects, type Category } from "@content/projects";
import { links, site, type Face } from "@content/site";

const wrap = "mx-auto max-w-6xl px-5 md:px-8";
const section = "py-20 md:py-28";

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
  "label inline-flex items-center justify-center rounded-full bg-ink px-7 py-4 text-cream transition-transform hover:-translate-y-0.5";
const buttonLine =
  "label inline-flex items-center justify-center rounded-full border-2 border-ink px-7 py-4 text-ink transition-colors hover:bg-ink/10";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main" tabIndex={-1} className="focus:outline-none">
        {/* 1 ─ Hero */}
        <section id="top" aria-labelledby="hero-title" className="bg-sage">
          <div className={`${wrap} grid items-center gap-12 pb-20 pt-12 md:grid-cols-[1.05fr_1fr] md:gap-16 md:pb-28 md:pt-20`}>
            <HeroLogo className="mx-auto w-full max-w-[300px] sm:max-w-[380px] md:order-2 md:max-w-[460px]" />
            <div>
              <h1 id="hero-title" className="headline text-[3.25rem] sm:text-7xl lg:text-8xl">
                Three minds.
                <br />
                One studio.
              </h1>
              <p className="mt-6 max-w-md text-lg leading-relaxed md:text-xl">
                {/* TODO: draft copy */}
                We&rsquo;re a creative studio for design, entertainment and marketing. We think it through, then we make it happen.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="#work" className={buttonDark}>See our work</a>
                <a href="#contact" className={buttonLine}>Let&rsquo;s talk</a>
              </div>
            </div>
          </div>
        </section>

        {/* 2 ─ What we do */}
        <section id="services" aria-labelledby="services-title" className={`bg-cream ${section}`}>
          <div className={wrap}>
            <SectionHeading
              id="services-title"
              eyebrow="What we do"
              title="Three things. Done properly."
              intro="Most projects need a bit of all three. That's the point of us." /* TODO: draft copy */
            />
            <ul className="mt-14 grid gap-6 md:grid-cols-3">
              {SERVICES.map((s) => (
                <li key={s.title} className="flex flex-col overflow-hidden rounded-[var(--radius-card)] bg-sage">
                  <div className={`${faceBg(s.face)} flex items-center justify-center px-6 py-8`}>
                    <FaceMark face={s.face} className="reveal h-20 w-auto" />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="headline text-3xl">{s.title}</h3>
                    <p className="mt-3 leading-relaxed">{s.blurb}</p>
                    <ul className="mt-6 space-y-2 border-t border-ink/15 pt-5">
                      {s.items.map((i) => (
                        <li key={i} className="flex gap-3">
                          <span aria-hidden className={`mt-2 h-2 w-2 shrink-0 rounded-full ${faceBg(s.face)} ring-1 ring-ink/30`} />
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

        {/* 3 ─ Meet the guys */}
        <section id="team" aria-labelledby="team-title" className={`bg-sage ${section}`}>
          <div className={wrap}>
            <SectionHeading
              id="team-title"
              eyebrow="Meet the guys"
              title="One of each. You'll see."
              intro="Three different heads, one shared way of working." /* TODO: draft copy */
            />
            <ul className="mt-14 grid gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
              {site.team.map((m) => (
                <li key={m.face} className="text-center sm:text-left">
                  <div
                    className={`relative mx-auto aspect-square w-full max-w-[320px] overflow-hidden rounded-[28px] bg-cream ring-8 ring-inset ${faceRing(m.face)} sm:mx-0`}
                  >
                    {m.photo ? (
                      <img src={m.photo} alt={`${m.name}, ${m.title.toLowerCase()}`} className="h-full w-full object-cover" loading="lazy" />
                    ) : (
                      <div className="flex h-full flex-col items-center justify-center gap-4">
                        <FaceMark face={m.face} decorative className="reveal h-20 w-auto opacity-90" />
                        <span className="label text-ink/80">Photo coming soon</span>
                      </div>
                    )}
                  </div>
                  <p className="label mt-6">{m.title}</p>
                  <h3 className="headline mt-2 text-3xl">{m.name}</h3>
                  <p className="mt-1 text-ink/85">{m.role}</p>
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
              eyebrow="Work"
              title="Things we've made."
              intro="A few favourites. Ask us for the full story behind any of them." /* TODO: draft copy */
            />
            <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((p) => {
                const face = CATEGORY_FACE[p.category];
                const card = (
                  <article className="group h-full overflow-hidden rounded-[var(--radius-card)] bg-sage">
                    <div className={`relative aspect-[4/3] ${p.image ? "" : faceBg(face)}`}>
                      {p.image ? (
                        <img src={p.image.src} alt={p.image.alt} className="h-full w-full object-cover" loading="lazy" />
                      ) : (
                        <div className="flex h-full items-center justify-center">
                          <FaceMark face={face} decorative className="h-16 w-auto opacity-80" />
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
                  <li key={p.slug}>
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
              eyebrow={site.slogan}
              title="How we work."
              intro="Mind over matter means we think before we make. It saves you time, money and a few headaches." /* TODO: draft copy */
            />
            <ol className="mt-14 grid gap-6 md:grid-cols-3">
              {STEPS.map((s, i) => (
                <li key={s.title} className="relative rounded-[var(--radius-card)] bg-cream p-7">
                  <div className="flex items-center justify-between">
                    <span className="label">Step {s.n}</span>
                    <span className={`reveal flex h-14 w-14 items-center justify-center rounded-xl ${faceBg(s.face)}`}>
                      <FaceMark face={s.face} decorative className="h-9 w-auto" />
                    </span>
                  </div>
                  <h3 className="headline mt-6 text-4xl">
                    {s.title}
                    {i < STEPS.length - 1 && <span aria-hidden className="text-ink/40"> →</span>}
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
              <SectionHeading id="testimonials-title" eyebrow="Kind words" title="Don't take our word for it." />
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
                eyebrow="Contact"
                title="Got an idea? Let's talk."
                intro="Big, small or still a bit fuzzy. Tell us what you're thinking and we'll get back to you." /* TODO: draft copy */
                dark
              />
              <ul className="mt-10 space-y-4 text-lg">
                <ContactRow label="Email" href={links.mailto} text={site.contact.email} />
                <ContactRow label="Phone" href={links.tel} text={site.contact.phone} />
                <ContactRow label="WhatsApp" href={links.whatsapp} text="Send us a message" external />
                <ContactRow label="Instagram" href={links.instagram} text={`@${site.contact.instagramHandle}`} external />
              </ul>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      {/* 7 ─ Footer */}
      <footer className="on-dark bg-ink py-14 text-cream">
        <div className={`${wrap} flex flex-col gap-10 md:flex-row md:items-end md:justify-between`}>
          <div>
            <Logo variant="primaryOnDark" alt="Three Guys" className="h-auto w-[180px]" />
            <p className="label mt-5 text-cream">{site.slogan}</p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="hover:underline">{n.label}</a>
                </li>
              ))}
              <li><a href={links.instagram} className="hover:underline" rel="noopener noreferrer" target="_blank">Instagram</a></li>
              <li><a href={links.whatsapp} className="hover:underline" rel="noopener noreferrer" target="_blank">WhatsApp</a></li>
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

function ContactRow({ label, href, text, external }: { label: string; href: string; text: string; external?: boolean }) {
  return (
    <li className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
      <span className="label w-28 shrink-0 text-cream/85">{label}</span>
      <a
        href={href}
        className="font-medium underline decoration-sunny decoration-2 underline-offset-4 hover:decoration-cream"
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {text}
        {external && <span className="sr-only"> (opens in a new tab)</span>}
      </a>
    </li>
  );
}
