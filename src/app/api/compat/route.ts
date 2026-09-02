import { NextResponse } from "next/server";
import { SITE_EMAIL } from "@/lib/site";

export async function POST(request: Request) {
  const body = (await request.json()) as Record<string, unknown>;
  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const consent = body.consent === true;
  if (!name || !email || !consent) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const photo =
    typeof body.photo === "string" && body.photo.startsWith("data:image/")
      ? body.photo
      : typeof body.chassisPhoto === "string" && body.chassisPhoto.startsWith("data:image/")
        ? body.chassisPhoto
        : "";
  const payload = {
    ...body,
    photo: photo || undefined,
    chassisPhoto: photo || undefined,
    hasChassisPhoto: Boolean(photo),
    to: SITE_EMAIL,
    source: "distanz-compat",
  };

  const webhook = process.env.COMPAT_WEBHOOK_URL;
  if (webhook) {
    await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  }

  return NextResponse.json({ ok: true });
}
