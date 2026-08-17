import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="max-w-[720px]">
        <h1 className="font-display text-[32px] font-extrabold">Privacy Policy</h1>
        <p className="mt-3 text-[13.5px] text-muted">Last updated: August 2026</p>

        <div className="mt-10 flex flex-col gap-8 text-[15px] leading-relaxed text-muted">
          <p>
            5xSME (&quot;we&quot;, &quot;us&quot;) operates 5xsme.in. This page explains what
            information we collect from visitors and how we use it.
          </p>

          <div>
            <h2 className="font-display text-[19px] font-bold text-ink">What we collect</h2>
            <p className="mt-2">
              When you submit our quote form, we collect the name, business
              name, phone number, email, and any message you provide. We don&apos;t
              collect payment information on this site.
            </p>
          </div>

          <div>
            <h2 className="font-display text-[19px] font-bold text-ink">How we use it</h2>
            <p className="mt-2">
              Information submitted through the quote form is used only to
              respond to your enquiry and, if you become a client, to deliver
              our services. We don&apos;t sell your information to third parties.
            </p>
          </div>

          <div>
            <h2 className="font-display text-[19px] font-bold text-ink">Contact</h2>
            <p className="mt-2">
              Questions about this policy or your data can be sent to{" "}
              <a href={`mailto:${siteConfig.email}`} className="font-semibold text-accent-ink underline">
                {siteConfig.email}
              </a>
              .
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
