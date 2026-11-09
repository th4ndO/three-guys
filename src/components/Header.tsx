"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { NAV } from "./nav";


export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/95 backdrop-blur supports-[backdrop-filter]:bg-cream/85">
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
        className="border-t border-ink/10 bg-cream md:hidden"
      >
        <ul className="mx-auto flex max-w-6xl flex-col px-5 py-3">
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="headline block py-3 text-3xl"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
