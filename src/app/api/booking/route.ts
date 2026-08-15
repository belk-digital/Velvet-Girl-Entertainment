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
      eventType = "Private Event",
      selectedCity = "Charleston, SC",
      eventDate = "Not selected",
      eventTime = "10:00 PM",
      guestCount = "10-20",
      theme = "Standard",
      costume = "Not selected",
      dancers = 2,
      selectedPerformers = [],
      upgrades = [],
      notes = "None",
      contactMethod = "phone",
      preferredTime = "anytime",
    } = body;

    await saveLeadToCMS({
      type: "BOOKING",
      name,
      email,
      phone,
      city: selectedCity,
      message: notes,
      formData: {
        eventType, eventDate, eventTime, guestCount, theme, costume, dancers, selectedPerformers, upgrades, contactMethod, preferredTime
      },
    });

    const apiKey = process.env.RESEND_API_KEY;
    const adminEmail =
      process.env.LEAD_NOTIFICATION_EMAIL ||
      "bookings@velvetgirlentertainment.com";
    const fromEmail =
      process.env.RESEND_FROM_EMAIL ||
      "Velvet Girl VIP Dispatch <bookings@velvetgirlentertainment.com>";

    // Clean formatting for arrays
    const performersDisplay =
      Array.isArray(selectedPerformers) && selectedPerformers.length > 0
        ? selectedPerformers.join(", ")
        : "Agency Director Choice (Top Rated Available)";

    const upgradesDisplay =
      Array.isArray(upgrades) && upgrades.length > 0
        ? upgrades.join(", ")
        : "None selected";

    const logoUrl = "https://velvetgirlentertainment.com/velvet-logo.png";

    // 1. Admin Notification Email HTML (Internal Lead Dispatch)
    const adminHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #FAF7F2; padding: 24px; border-radius: 12px; border: 1px solid #e2dcd3;">
        <div style="text-align: center; padding-bottom: 16px;">
          <img src="${logoUrl}" alt="Velvet Girl Entertainment" style="height: 56px; width: auto;" />
        </div>
        <div style="background-color: #540403; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 20px; letter-spacing: 2px;">🚨 NEW VIP BOOKING LEAD</h1>
          <p style="color: #C5A880; margin: 4px 0 0 0; font-size: 13px;">VELVET GIRL ENTERTAINMENT DISPATCH</p>
        </div>
        <div style="background-color: #ffffff; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e2dcd3; border-top: none;">
          <h2 style="color: #1a1a1a; font-size: 18px; margin-top: 0;">Client Contact Information</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0eee9; color: #666; font-size: 14px;"><strong>Client Name:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0eee9; color: #1a1a1a; font-size: 14px; text-align: right;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0eee9; color: #666; font-size: 14px;"><strong>Phone Number:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0eee9; color: #1a1a1a; font-size: 14px; text-align: right;">
                <a href="tel:${phone}" style="color: #540403; font-weight: bold;">${phone}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0eee9; color: #666; font-size: 14px;"><strong>Email Address:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0eee9; color: #1a1a1a; font-size: 14px; text-align: right;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0eee9; color: #666; font-size: 14px;"><strong>Preferred Contact:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0eee9; color: #1a1a1a; font-size: 14px; text-align: right;">${contactMethod.toUpperCase()} (${preferredTime})</td>
            </tr>
          </table>

          <h2 style="color: #1a1a1a; font-size: 18px; margin-top: 24px;">Event & Package Details</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0eee9; color: #666; font-size: 14px;"><strong>Event Type:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0eee9; color: #1a1a1a; font-size: 14px; text-align: right; font-weight: bold;">${eventType}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0eee9; color: #666; font-size: 14px;"><strong>City / Market:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0eee9; color: #540403; font-size: 14px; text-align: right; font-weight: bold;">${selectedCity}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0eee9; color: #666; font-size: 14px;"><strong>Event Date & Time:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0eee9; color: #1a1a1a; font-size: 14px; text-align: right;">${eventDate} at ${eventTime}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0eee9; color: #666; font-size: 14px;"><strong>Guest Count:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0eee9; color: #1a1a1a; font-size: 14px; text-align: right;">${guestCount} guests</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0eee9; color: #666; font-size: 14px;"><strong>Theme & Costume:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0eee9; color: #1a1a1a; font-size: 14px; text-align: right;">${theme} / ${costume}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0eee9; color: #666; font-size: 14px;"><strong>Dancers:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0eee9; color: #1a1a1a; font-size: 14px; text-align: right; font-weight: bold;">${dancers} VIP Performers</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0eee9; color: #666; font-size: 14px;"><strong>Selected Performers:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0eee9; color: #1a1a1a; font-size: 14px; text-align: right;">${performersDisplay}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0eee9; color: #666; font-size: 14px;"><strong>VIP Upgrades:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0eee9; color: #1a1a1a; font-size: 14px; text-align: right;">${upgradesDisplay}</td>
            </tr>
          </table>

          <div style="background-color: #f7f5f0; padding: 16px; border-radius: 8px; margin-top: 16px;">
            <p style="margin: 0; color: #666; font-size: 13px;"><strong>Special Notes / Instructions:</strong></p>
            <p style="margin: 8px 0 0 0; color: #1a1a1a; font-size: 14px; font-style: italic;">"${notes}"</p>
          </div>

          <div style="margin-top: 24px; text-align: center;">
            <a href="tel:${phone}" style="display: inline-block; background-color: #540403; color: #ffffff; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 14px;">
              CALL CLIENT NOW
            </a>
          </div>
        </div>
      </div>
    `;

    // 2. Customer Booking Confirmation Email HTML
    const customerHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #FAF7F2; padding: 24px; border-radius: 12px; border: 1px solid #e2dcd3;">
        <div style="text-align: center; padding-bottom: 16px;">
          <img src="${logoUrl}" alt="Velvet Girl Entertainment" style="height: 56px; width: auto;" />
        </div>
        <div style="background-color: #540403; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 20px; letter-spacing: 2px;">VELVET GIRL</h1>
          <p style="color: #C5A880; margin: 4px 0 0 0; font-size: 13px; letter-spacing: 2px; text-transform: uppercase;">PREMIER VIP ENTERTAINMENT</p>
        </div>

        <div style="background-color: #ffffff; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e2dcd3; border-top: none;">
          <h2 style="color: #1a1a1a; font-size: 18px; margin-top: 0;">We Have Received Your VIP Booking Request</h2>
          <p style="color: #4a4a4a; font-size: 15px; line-height: 1.6;">
            Dear <strong>${name}</strong>,<br /><br />
            Thank you for choosing Velvet Girl Entertainment. Your booking request for your upcoming <strong>${eventType}</strong> in <strong>${selectedCity}</strong> has been logged into our VIP dispatch queue.
          </p>

          <div style="background-color: #f7f5f0; border: 1px solid #e2dcd3; border-radius: 8px; padding: 20px; margin: 24px 0;">
            <h3 style="color: #540403; font-size: 14px; text-transform: uppercase; letter-spacing: 1.5px; margin-top: 0; margin-bottom: 16px; border-bottom: 1px solid #e2dcd3; padding-bottom: 8px;">
              Your Package Summary
            </h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 6px 0; color: #666666; font-size: 14px;">Date &amp; Time:</td>
                <td style="padding: 6px 0; color: #1a1a1a; font-size: 14px; text-align: right; font-weight: bold;">${eventDate} at ${eventTime}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #666666; font-size: 14px;">Location:</td>
                <td style="padding: 6px 0; color: #1a1a1a; font-size: 14px; text-align: right; font-weight: bold;">${selectedCity}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #666666; font-size: 14px;">Theme &amp; Costume:</td>
                <td style="padding: 6px 0; color: #1a1a1a; font-size: 14px; text-align: right;">${theme} / ${costume}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #666666; font-size: 14px;">Performers:</td>
                <td style="padding: 6px 0; color: #540403; font-size: 14px; text-align: right; font-weight: bold;">${dancers} Entertainers (${performersDisplay})</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #666666; font-size: 14px;">VIP Upgrades:</td>
                <td style="padding: 6px 0; color: #1a1a1a; font-size: 14px; text-align: right;">${upgradesDisplay}</td>
              </tr>
            </table>
          </div>

          <h3 style="color: #1a1a1a; font-size: 16px; margin-top: 24px;">What Happens Next?</h3>
          <p style="color: #4a4a4a; font-size: 14px; line-height: 1.6;">
            1. A dedicated VIP Booking Specialist is reviewing your entertainer selections and checking roster availability for your date.<br />
            2. We will contact you via <strong>${contactMethod.toUpperCase()}</strong> shortly to finalize your reservation details.<br />
            3. Once confirmed, you will receive your official itinerary and arrival instructions.
          </p>

          <div style="border-top: 1px solid #e2dcd3; margin-top: 32px; padding-top: 20px; text-align: center;">
            <p style="color: #666666; font-size: 13px; margin: 0;">
              Need immediate assistance or have changes to your party?
            </p>
            <p style="margin: 8px 0 0 0;">
              <a href="tel:8439387377" style="color: #540403; font-weight: bold; text-decoration: none; font-size: 16px;">
                CALL VIP DISPATCH: (843) 938-7377
              </a>
            </p>
          </div>
        </div>

        <div style="padding-top: 16px; text-align: center; color: #999999; font-size: 11px;">
          © ${new Date().getFullYear()} Velvet Girl Entertainment. All rights reserved.
        </div>
      </div>
    `;

    // If RESEND_API_KEY is configured, send actual emails
    if (apiKey) {
      const resend = new Resend(apiKey);

      // Send Admin Lead Notification
      const adminPromise = resend.emails.send({
        from: fromEmail,
        to: adminEmail,
        cc: "velvetgirlentertainment@gmail.com",
        subject: `🚨 NEW VIP BOOKING LEAD: ${name} — ${selectedCity} (${eventType})`,
        html: adminHtml,
      });

      // Send Customer Confirmation Email (if email provided)
      const customerPromise = email
        ? resend.emails.send({
            from: fromEmail,
            to: email,
            subject: `✨ Your Velvet Girl VIP Booking Request is Received — ${eventType} in ${selectedCity}`,
            html: customerHtml,
          })
        : Promise.resolve(null);

      const [adminResult, customerResult] = await Promise.all([
        adminPromise,
        customerPromise,
      ]);

      if (adminResult.error) {
        console.error("[RESEND] Admin booking email failed:", adminResult.error);
      }
      if (customerResult && "error" in customerResult && customerResult.error) {
        console.error("[RESEND] Customer booking email failed:", customerResult.error);
      }

      return NextResponse.json({
        success: true,
        message: "Booking received and confirmation emails sent.",
        data: {
          adminEmailId: adminResult?.data?.id || null,
          customerEmailId: customerResult?.data?.id || null,
        },
      });
    }

    // Fallback if no RESEND_API_KEY is configured in development/preview
    console.log(
      "[RESEND DEV FALLBACK] Booking lead received successfully:",
      body
    );

    return NextResponse.json({
      success: true,
      message:
        "Booking received (email sending disabled — RESEND_API_KEY not set).",
    });
  } catch (error: any) {
    console.error("Error processing booking request:", error);
    // Still return a graceful 200 response so the frontend flow never breaks for clients
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Failed to submit booking",
      },
      { status: 500 }
    );
  }
}
