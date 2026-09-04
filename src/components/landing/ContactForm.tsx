"use client";

import { useState } from "react";
import { services } from "@/lib/services-data";
import { budgetPills } from "@/lib/landing-data";

type State = "idle" | "sending" | "ok" | "error";

export function ContactForm() {
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState("");
  const [budget, setBudget] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    setState("sending");
    setError("");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          message: budget
            ? `[Budget: ${budget}] ${String(data.message ?? "")}`.trim()
            : data.message,
        }),
      });
      const body = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !body.ok) throw new Error(body.error ?? "Something went wrong.");
      setState("ok");
      form.reset();
      setBudget("");
    } catch (err) {
      setState("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <form className="lp-form" onSubmit={onSubmit}>
      <div className="lp-fg-row">
        <div className="lp-fg">
          <label htmlFor="lp-name">Your Name *</label>
          <input id="lp-name" name="name" required autoComplete="name" />
        </div>
        <div className="lp-fg">
          <label htmlFor="lp-business">Business *</label>
          <input id="lp-business" name="business" required autoComplete="organization" />
        </div>
      </div>

      <div className="lp-fg-row">
        <div className="lp-fg">
          <label htmlFor="lp-phone">Phone / WhatsApp *</label>
          <input id="lp-phone" name="phone" type="tel" required autoComplete="tel" />
        </div>
        <div className="lp-fg">
          <label htmlFor="lp-email">Email</label>
          <input id="lp-email" name="email" type="email" autoComplete="email" />
        </div>
      </div>

      <div className="lp-fg">
        <label htmlFor="lp-service">What do you need?</label>
        <select id="lp-service" name="service" defaultValue="">
          <option value="">Not sure yet — help me figure it out</option>
          {services.map((s) => (
            <option key={s.slug} value={s.name}>
              {s.name}
            </option>
          ))}
        </select>
      </div>

      <p className="lp-budget-lbl">Monthly budget</p>
      <div className="lp-pills">
        {budgetPills.map((b) => (
          <button
            key={b}
            type="button"
            className={`lp-pill${budget === b ? " is-on" : ""}`}
            onClick={() => setBudget((cur) => (cur === b ? "" : b))}
            aria-pressed={budget === b}
          >
            {b}
          </button>
        ))}
      </div>

      <div className="lp-fg">
        <label htmlFor="lp-message">Tell us about it</label>
        <textarea id="lp-message" name="message" />
      </div>

      <button className="lp-send" type="submit" disabled={state === "sending"}>
        {state === "sending" ? "Sending…" : "Send The Brief"}
      </button>

      {state === "ok" && (
        <p className="lp-form-note is-ok">
          Got it. We&apos;ll come back to you within one working day.
        </p>
      )}
      {state === "error" && <p className="lp-form-note is-error">{error}</p>}
      {state !== "ok" && state !== "error" && (
        <p className="lp-form-note">
          No lock-in contracts. We reply within one working day.
        </p>
      )}
    </form>
  );
}
