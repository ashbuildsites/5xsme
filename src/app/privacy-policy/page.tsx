import type { Metadata } from "next";

import { Shell, PageHeader } from "@/components/landing/Shell";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How 5xSME collects and uses information submitted through 5xsme.in.",
  alternates: { canonical: "/privacy-policy" },
};

const sections = [
  {
    title: "What we collect",
    body: "When you submit our quote form, we collect the name, business name, phone number, email, and any message you provide. We don't collect payment information on this site.",
  },
  {
    title: "How we use it",
    body: "Information submitted through the quote form is used only to respond to your enquiry and, if you become a client, to deliver our services. We don't sell your information to third parties.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <Shell>
      <PageHeader
        kicker="Last updated: August 2026"
        title="PRIVACY POLICY"
        intro={`5xSME ("we", "us") operates ${siteConfig.baseUrl.replace(/^https?:\/\//, "")}. This page explains what information we collect from visitors and how we use it.`}
      />

      <section className="lp-sec on-paper">
        <div className="lp-grid">
          {sections.map((s, i) => (
            <div className="lp-cell" key={s.title}>
              <span className="lp-cell-n">{String(i + 1).padStart(2, "0")}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
          <div className="lp-cell">
            <span className="lp-cell-n">03</span>
            <h3>Contact</h3>
            <p>
              Questions about this policy or your data can be sent to{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                style={{ color: "var(--acc-deep)", fontWeight: 700 }}
              >
                {siteConfig.email}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </Shell>
  );
}
