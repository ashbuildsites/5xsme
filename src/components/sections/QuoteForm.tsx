"use client";

import { FormEvent, useState } from "react";
import { services } from "@/lib/services-data";

const inputClass =
  "w-full rounded-xl border-2 border-ink bg-paper px-4 py-3.5 text-[15px] text-ink placeholder:text-muted focus:outline-none";

export function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("submitting");

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          business: data.get("business"),
          phone: data.get("phone"),
          email: data.get("email"),
          service: data.get("service"),
          message: data.get("message"),
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border-2 border-ink bg-accent-soft p-8 text-center">
        <h3 className="font-display text-[20px] font-bold">Got it — thank you.</h3>
        <p className="mt-2 text-[14.5px] text-muted">
          We&apos;ll call or WhatsApp you within one business day to set up the
          discovery call.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input name="name" required placeholder="Your name*" className={inputClass} />
        <input name="business" required placeholder="Business name*" className={inputClass} />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input name="phone" required type="tel" placeholder="Phone / WhatsApp*" className={inputClass} />
        <input name="email" type="email" placeholder="Email" className={inputClass} />
      </div>
      <select name="service" defaultValue="" className={inputClass}>
        <option value="" disabled>
          What are you looking for?
        </option>
        {services.map((s) => (
          <option key={s.slug} value={s.name}>
            {s.name}
          </option>
        ))}
        <option value="Not sure yet">Not sure yet — talk me through it</option>
      </select>
      <textarea
        name="message"
        placeholder="Anything else we should know?"
        rows={4}
        className={`${inputClass} resize-none`}
      />

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group mt-2 inline-flex w-fit items-center gap-3 rounded-full bg-accent py-2 pl-6 pr-2 font-body text-[15px] font-semibold text-ink border-2 border-ink disabled:opacity-60"
      >
        <span>{status === "submitting" ? "Sending…" : "Get a Quote"}</span>
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-accent">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 7H13M13 7L7.5 1.5M13 7L7.5 12.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>

      {status === "error" && (
        <p className="text-[13.5px] text-accent-ink">
          Something went wrong — call or WhatsApp us directly instead, details on the right.
        </p>
      )}
    </form>
  );
}
