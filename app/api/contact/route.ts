import { EmailTemplate } from "@/templates/email";
import { Resend } from "resend";
import * as React from "react";

const resend = new Resend("");

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, text } = body;

  const { data, error } = await resend.emails.send({
    from: "Impact <onboarding@resend.dev>",
    to: ["avalynndev@gmail.com"],
    subject: "New Impact Order",
    react: EmailTemplate({
      name,
      email,
      text: text || "no message",
    }) as React.ReactElement,
  });

  if (error) {
    return Response.json({ error }, { status: 500 });
  }

  return Response.json({ data });
}
