import { NextResponse } from "next/server";
import { Resend } from "resend";
import { saveLeadToCMS } from "@/lib/cms";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name = "Guest",
      phone = "Not provided",
      email = "",
      city = "Not specified",
      eventType = "Not specified",
      message = "None",
    } = body;

    // Save lead to CMS database
    await saveLeadToCMS({
      type: "CONTACT",
      name,
      email,
      phone,
      city,
      message,
      formData: { eventType },
    });

    const apiKey = process.env.RESEND_API_KEY;
    const adminEmail =
      process.env.CONTACT_NOTIFICATION_EMAIL ||
      "inquiries@velvetgirlentertainment.com";
    const fromEmail =
      process.env.RESEND_FROM_EMAIL ||
      "Velvet Girl VIP Dispatch <inquiries@velvetgirlentertainment.com>";

    const logoUrl = "https://velvetgirlentertainment.com/velvet-logo.png";

    const adminHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #FAF7F2; padding: 24px; border-radius: 12px; border: 1px solid #e2dcd3;">
        <div style="text-align: center; padding-bottom: 16px;">
          <img src="${logoUrl}" alt="Velvet Girl Entertainment" style="height: 56px; width: auto;" />
        </div>
        <div style="background-color: #740107; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 20px; letter-spacing: 2px;">📩 NEW CONTACT FORM SUBMISSION</h1>
          <p style="color: #C5A880; margin: 4px 0 0 0; font-size: 13px;">VELVET GIRL ENTERTAINMENT</p>
        </div>
        <div style="background-color: #ffffff; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e2dcd3; border-top: none;">
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0eee9; color: #666; font-size: 14px;"><strong>Name:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0eee9; color: #1a1a1a; font-size: 14px; text-align: right;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0eee9; color: #666; font-size: 14px;"><strong>Phone:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0eee9; color: #1a1a1a; font-size: 14px; text-align: right;">
                <a href="tel:${phone}" style="color: #740107; font-weight: bold;">${phone}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0eee9; color: #666; font-size: 14px;"><strong>Email:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0eee9; color: #1a1a1a; font-size: 14px; text-align: right;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0eee9; color: #666; font-size: 14px;"><strong>City:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0eee9; color: #1a1a1a; font-size: 14px; text-align: right;">${city}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0eee9; color: #666; font-size: 14px;"><strong>Event Type:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0eee9; color: #1a1a1a; font-size: 14px; text-align: right;">${eventType}</td>
            </tr>
          </table>
          <div style="background-color: #f7f5f0; padding: 16px; border-radius: 8px; margin-top: 16px;">
            <p style="margin: 0; color: #666; font-size: 13px;"><strong>Message:</strong></p>
            <p style="margin: 8px 0 0 0; color: #1a1a1a; font-size: 14px; font-style: italic;">"${message}"</p>
          </div>
          <div style="margin-top: 24px; text-align: center;">
            <a href="tel:${phone}" style="display: inline-block; background-color: #740107; color: #ffffff; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 14px;">
              CALL CLIENT NOW
            </a>
          </div>
        </div>
      </div>
    `;

    if (apiKey) {
      const resend = new Resend(apiKey);

      const result = await resend.emails.send({
        from: fromEmail,
        to: adminEmail,
        cc: "velvetgirlentertainment@gmail.com",
        replyTo: email || undefined,
        subject: `📩 New Contact Form: ${name} — ${city}`,
        html: adminHtml,
      });

      if (result.error) {
        console.error("[RESEND] Contact form email failed:", result.error);
      }

      return NextResponse.json({
        success: true,
        message: "Message received and notification sent.",
        data: { emailId: result?.data?.id || null },
      });
    }

    console.log("[RESEND DEV FALLBACK] Contact form submission received:", body);

    return NextResponse.json({
      success: true,
      message: "Message received (email sending disabled — RESEND_API_KEY not set).",
    });
  } catch (error: any) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Failed to submit message",
      },
      { status: 500 }
    );
  }
}
