"use client";

import { useState, type FormEvent } from "react";
import { site } from "@content/site";

const NEEDS = ["Design", "Entertainment", "Marketing", "A bit of everything", "Not sure yet"];

const field =
  "mt-2 block w-full rounded-xl border-2 border-cream/30 bg-midnight px-4 py-3 text-cream placeholder:text-cream/60 focus:border-clay focus:outline-none focus-visible:outline-none";

/** No backend: builds a pre-filled email in the visitor's own mail app. */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const need = String(data.get("need") ?? "");
    const message = String(data.get("message") ?? "").trim();

    const subject = `New enquiry: ${need} — ${name}`;
    const body = `Hi Three Guys,\n\n${message}\n\nWhat I need: ${need}\n\n${name}\n${email}`;
    window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor="cf-name" className="label text-cream">Your name</label>
        <input id="cf-name" name="name" required autoComplete="name" className={field} />
      </div>
      <div>
        <label htmlFor="cf-email" className="label text-cream">Email</label>
        <input id="cf-email" name="email" type="email" required autoComplete="email" className={field} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="cf-need" className="label text-cream">What do you need?</label>
        <select id="cf-need" name="need" required defaultValue="" className={`${field} appearance-none`}>
          <option value="" disabled>Pick one</option>
          {NEEDS.map((n) => (
            <option key={n} value={n}>{n}</option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="cf-message" className="label text-cream">Message</label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={5}
          placeholder="Tell us a bit about the idea. Rough is fine."
          className={field}
        />
      </div>
      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="label inline-flex justify-center rounded-full bg-clay px-7 py-4 text-ink transition-transform hover:-translate-y-0.5"
        >
          Send it over
        </button>
        <p className="text-sm text-cream/85" aria-live="polite">
          {sent
            ? "Your email app should open with everything filled in. Just hit send."
            : "This opens your email app with your message ready to go."}
        </p>
      </div>
    </form>
  );
}
