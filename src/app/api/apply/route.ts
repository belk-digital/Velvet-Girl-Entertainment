import { NextResponse } from "next/server";
import { Resend } from "resend";
import { saveLeadToCMS } from "@/lib/cms";

const MAX_ATTACHMENT_BYTES = 8 * 1024 * 1024; // 8MB per file safety cap

async function fileToAttachment(file: File | null) {
  if (!file || file.size === 0) return null;
  if (file.size > MAX_ATTACHMENT_BYTES) return null;
  const buffer = Buffer.from(await file.arrayBuffer());
  return { filename: file.name || "upload", content: buffer };
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const get = (key: string) => (formData.get(key)?.toString() || "").trim();

    const name = get("name") || "Applicant";
    const age = get("age") || "Not provided";
    const phone = get("phone") || "Not provided";
    const email = get("email") || "";
    const hairColor = get("hairColor") || "Not specified";
    const eyeColor = get("eyeColor") || "Not specified";
    const height = get("height") || "Not specified";
    const weight = get("weight") || "Not specified";
    const applyCity = get("applyCity") || "Not specified";
    const hearAbout = get("hearAbout") || "Not specified";
    const instagram = get("instagram") || "Not provided";
    const priorExperience = get("priorExperience") || "Not answered";
    const experienceDetails = get("experienceDetails") || "";
    const transportation = get("transportation") || "Not answered";
    const comfortablePhotos = get("comfortablePhotos") || "Not answered";
    const startDate = get("startDate") || "Not specified";
    const days = get("days") || "Not specified";
    const timeBlocks = get("timeBlocks") || "Not specified";

    await saveLeadToCMS({
      type: "APPLICATION",
      name,
      email,
      phone,
      city: applyCity,
      message: priorExperience + (experienceDetails ? ` — ${experienceDetails}` : ""),
      formData: {
        age, hairColor, eyeColor, height, weight, hearAbout, instagram, transportation, comfortablePhotos, startDate, days, timeBlocks
      },
    });

    const apiKey = process.env.RESEND_API_KEY;
    const adminEmail =
      process.env.APPLICATION_NOTIFICATION_EMAIL ||
      "inquiries@velvetgirlentertainment.com";
    const fromEmail =
      process.env.RESEND_FROM_EMAIL ||
      "Velvet Girl VIP Dispatch <inquiries@velvetgirlentertainment.com>";

    const row = (label: string, value: string) => `
      <tr>
        <td style="padding: 8px 0; border-bottom: 1px solid #f0eee9; color: #666; font-size: 14px;"><strong>${label}:</strong></td>
        <td style="padding: 8px 0; border-bottom: 1px solid #f0eee9; color: #1a1a1a; font-size: 14px; text-align: right;">${value}</td>
      </tr>`;

    const logoUrl = "https://velvetgirlentertainment.com/velvet-logo.png";

    const adminHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #FAF7F2; padding: 24px; border-radius: 12px; border: 1px solid #e2dcd3;">
        <div style="text-align: center; padding-bottom: 16px;">
          <img src="${logoUrl}" alt="Velvet Girl Entertainment" style="height: 56px; width: auto;" />
        </div>
        <div style="background-color: #4C0C0A; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 20px; letter-spacing: 2px;">💃 NEW PERFORMER APPLICATION</h1>
          <p style="color: #C5A880; margin: 4px 0 0 0; font-size: 13px;">VELVET GIRL ENTERTAINMENT</p>
        </div>
        <div style="background-color: #ffffff; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e2dcd3; border-top: none;">
          <h2 style="color: #1a1a1a; font-size: 18px; margin-top: 0;">Personal Profile</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            ${row("Name", name)}
            ${row("Age", age)}
            ${row("Phone", `<a href="tel:${phone}" style="color:#4C0C0A;font-weight:bold;">${phone}</a>`)}
            ${row("Email", email)}
            ${row("Hair / Eye Color", `${hairColor} / ${eyeColor}`)}
            ${row("Height / Weight", `${height} / ${weight}`)}
          </table>

          <h2 style="color: #1a1a1a; font-size: 18px; margin-top: 24px;">Experience &amp; Location</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            ${row("Applying For", applyCity)}
            ${row("Heard About Us Via", hearAbout)}
            ${row("Instagram", instagram)}
            ${row("Prior Experience", priorExperience + (experienceDetails ? ` — ${experienceDetails}` : ""))}
            ${row("Reliable Transportation", transportation)}
            ${row("Comfortable w/ Promo Photos", comfortablePhotos)}
          </table>

          <h2 style="color: #1a1a1a; font-size: 18px; margin-top: 24px;">Availability</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            ${row("Days Available", days)}
            ${row("Time Blocks", timeBlocks)}
            ${row("Earliest Start Date", startDate)}
          </table>

          <p style="color: #666; font-size: 13px;">Headshot / full-body photos are attached to this email, if provided.</p>

          <div style="margin-top: 24px; text-align: center;">
            <a href="tel:${phone}" style="display: inline-block; background-color: #4C0C0A; color: #ffffff; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 14px;">
              CALL APPLICANT NOW
            </a>
          </div>
        </div>
      </div>
    `;

    const headshotAttachment = await fileToAttachment(
      formData.get("headshot") as File | null
    );
    const fullBodyAttachment = await fileToAttachment(
      formData.get("fullBody") as File | null
    );
    const attachments = [headshotAttachment, fullBodyAttachment].filter(
      (a): a is NonNullable<typeof headshotAttachment> => a !== null
    );

    if (apiKey) {
      const resend = new Resend(apiKey);

      const result = await resend.emails.send({
        from: fromEmail,
        to: adminEmail,
        cc: "velvetgirlentertainment@gmail.com",
        replyTo: email || undefined,
        subject: `💃 New Performer Application: ${name} — ${applyCity}`,
        html: adminHtml,
        attachments: attachments.length > 0 ? attachments : undefined,
      });

      if (result.error) {
        console.error("[RESEND] Application email failed:", result.error);
      }

      return NextResponse.json({
        success: true,
        message: "Application received and notification sent.",
        data: { emailId: result?.data?.id || null },
      });
    }

    console.log("[RESEND DEV FALLBACK] Application received:", {
      name,
      age,
      phone,
      email,
      applyCity,
      attachmentCount: attachments.length,
    });

    return NextResponse.json({
      success: true,
      message: "Application received (email sending disabled — RESEND_API_KEY not set).",
    });
  } catch (error: any) {
    console.error("Error processing application:", error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Failed to submit application",
      },
      { status: 500 }
    );
  }
}
