"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { NAV } from "./nav";
import { site } from "@content/site";


export function Header() {
  const [open, setOpen] = useState(false);

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
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream">
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
                    className="label inline-flex rounded-full bg-ink px-5 py-3 text-cream transition-colors hover:bg-midnight"
                  >
                    Let&rsquo;s talk
                  </a>
                </li>
              ) : (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="label rounded-full px-3 py-3 transition-colors hover:bg-ink/10"
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
          className="label inline-flex items-center gap-2 rounded-full border-2 border-ink px-4 py-2 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Main"
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-24 overflow-y-auto overscroll-contain bg-cream md:hidden"
      >
        <div className="flex min-h-full flex-col px-5 pb-10 pt-6">
          <ul className="flex flex-col">
            {NAV.map((item) => (
              <li key={item.href} className="border-b border-ink/10">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="headline block py-4 text-4xl"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="label mt-8 inline-flex justify-center rounded-full bg-ink px-7 py-4 text-cream"
          >
            Let&rsquo;s talk
          </a>
          <p className="label mt-auto pt-10 text-center">{site.slogan}</p>
        </div>
      </nav>
    </header>
  );
}
