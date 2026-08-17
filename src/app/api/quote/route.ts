import { NextResponse } from "next/server";

type QuotePayload = {
  name: string;
  business: string;
  phone: string;
  email?: string;
  service?: string;
  message?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<QuotePayload>;

  if (!body.name || !body.business || !body.phone) {
    return NextResponse.json(
      { ok: false, error: "Name, business, and phone are required." },
      { status: 400 },
    );
  }

  // TODO: wire this up to real delivery before launch — e.g. send via an email
  // provider (Resend/SendGrid) to contact@5xsme.in and/or push into a CRM.
  // For now this just logs server-side so submissions aren't silently lost.
  console.log("[quote request]", {
    ...body,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
