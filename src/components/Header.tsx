"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { NAV } from "./nav";
import { site } from "@content/site";
import { ArrowRightIcon } from "./icons";


export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    // Close if the screen grows to desktop width while the menu is open.
    const mq = window.matchMedia("(min-width: 768px)");
    const onMq = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    document.body.style.overflow = "hidden"; // no page scroll behind the menu
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`sticky top-0 z-50 border-b bg-cream transition-shadow duration-300 ${scrolled ? "border-ink/10 shadow-[0_8px_24px_-12px_rgba(30,31,34,0.35)]" : "border-transparent"}`}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-cream"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-24 max-w-6xl items-center justify-between gap-6 px-3 md:px-6">
        <a href="#top" aria-label="Three Guys — back to top" className="shrink-0">
          <Logo variant="primary" alt="" className="h-auto w-[140px] md:w-[150px]" priority />
        </a>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1 lg:gap-2">
            {NAV.map((item) =>
              item.href === "#contact" ? (
                <li key={item.href} className="ml-2">
                  <a
                    href={item.href}
                    className="group label inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-cream transition-colors hover:bg-midnight"
                  >
                    Let&rsquo;s talk
                    <ArrowRightIcon className="nudge-right h-4 w-4" />
                  </a>
                </li>
              ) : (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="navlink label relative rounded-full px-3 py-3"
                  >
                    {item.label}
                  </a>
                </li>
              ),
            )}
          </ul>
        </nav>

        <button
          type="button"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-ink transition-colors hover:bg-ink hover:text-cream md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {/* Three lines that morph into an ✕ */}
          <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" className="burger" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M4 7h16" />
            <path d="M4 12h16" />
            <path d="M4 17h16" />
          </svg>
        </button>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Main"
        hidden={!open}
        className="menu-panel fixed inset-x-0 bottom-0 top-24 overflow-y-auto overscroll-contain bg-cream md:hidden"
      >
        <div className="flex min-h-full flex-col px-5 pb-10 pt-6">
          <ul className="flex flex-col">
            {NAV.map((item, i) => (
              <li key={item.href} className="menu-item border-b border-ink/10" style={{ "--d": `${0.05 + i * 0.06}s` } as React.CSSProperties}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="group headline flex items-center justify-between py-4 text-4xl"
                >
                  {item.label}
                  <ArrowRightIcon className="nudge-right h-7 w-7 shrink-0" />
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="menu-item group label mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-ink px-7 py-4 text-cream"
            style={{ "--d": "0.4s" } as React.CSSProperties}
          >
            Let&rsquo;s talk
            <ArrowRightIcon className="nudge-right h-5 w-5" />
          </a>
          <p className="label mt-auto pt-10 text-center">{site.slogan}</p>
        </div>
      </nav>
    </header>
  );
}
