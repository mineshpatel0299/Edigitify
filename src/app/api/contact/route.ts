import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Phone validation regex (10 digits)
const phoneRegex = /^[0-9]{10}$/;

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, phone, message } = body;

    console.log("📧 Contact form submission received");

    // Validation
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Validate phone number (10 digits only)
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { error: "Phone number must be exactly 10 digits" },
        { status: 400 }
      );
    }

    // Sanitize inputs to prevent XSS
    const sanitizedData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      message: message.trim(),
    };

    console.log("✅ Validation passed, preparing to send email...");
    console.log("SMTP Config:", {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER,
      hasPassword: !!process.env.SMTP_PASSWORD,
    });

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      debug: true, // Enable debug output
      logger: true, // Log to console
    });

    // Email content to send to recipient
    const mailOptions = {
      from: `"Edigitify Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECIPIENT || "info@edigitify.in",
      replyTo: sanitizedData.email,
      subject: `New Contact Form Submission from ${sanitizedData.name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #334155;
                background-color: #f8fafc;
                margin: 0;
                padding: 20px;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                background: #ffffff;
                border-radius: 16px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                overflow: hidden;
              }
              .header {
                background: linear-gradient(135deg, #34d399 0%, #0ea5e9 100%);
                color: #ffffff;
                padding: 30px;
                text-align: center;
              }
              .header h1 {
                margin: 0;
                font-size: 24px;
                font-weight: 600;
              }
              .content {
                padding: 30px;
              }
              .field {
                margin-bottom: 24px;
              }
              .field-label {
                font-size: 12px;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 0.05em;
                color: #64748b;
                margin-bottom: 8px;
              }
              .field-value {
                font-size: 16px;
                color: #0f172a;
                padding: 12px;
                background: #f1f5f9;
                border-radius: 8px;
                border-left: 3px solid #34d399;
              }
              .message-box {
                background: #f1f5f9;
                border-radius: 8px;
                padding: 16px;
                border-left: 3px solid #0ea5e9;
                white-space: pre-wrap;
                word-wrap: break-word;
              }
              .footer {
                background: #f8fafc;
                padding: 20px 30px;
                text-align: center;
                font-size: 14px;
                color: #64748b;
                border-top: 1px solid #e2e8f0;
              }
              .timestamp {
                font-size: 13px;
                color: #94a3b8;
                margin-top: 10px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🚀 New Contact Form Submission</h1>
              </div>

              <div class="content">
                <div class="field">
                  <div class="field-label">Full Name</div>
                  <div class="field-value">${sanitizedData.name}</div>
                </div>

                <div class="field">
                  <div class="field-label">Email Address</div>
                  <div class="field-value">
                    <a href="mailto:${sanitizedData.email}" style="color: #0ea5e9; text-decoration: none;">
                      ${sanitizedData.email}
                    </a>
                  </div>
                </div>

                <div class="field">
                  <div class="field-label">Phone Number</div>
                  <div class="field-value">
                    <a href="tel:+91${sanitizedData.phone}" style="color: #0ea5e9; text-decoration: none;">
                      +91 ${sanitizedData.phone}
                    </a>
                  </div>
                </div>

                <div class="field">
                  <div class="field-label">Message</div>
                  <div class="message-box">${sanitizedData.message}</div>
                </div>

                <div class="timestamp">
                  📅 Received on: ${new Date().toLocaleString('en-IN', {
                    timeZone: 'Asia/Kolkata',
                    dateStyle: 'full',
                    timeStyle: 'long'
                  })}
                </div>
              </div>

              <div class="footer">
                <p>This email was sent from the Edigitify contact form.</p>
                <p>Reply directly to this email to contact ${sanitizedData.name}.</p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
New Contact Form Submission

Name: ${sanitizedData.name}
Email: ${sanitizedData.email}
Phone: +91 ${sanitizedData.phone}

Message:
${sanitizedData.message}

---
Received on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
      `,
    };

    // Verify SMTP connection
    console.log("🔍 Verifying SMTP connection...");
    try {
      await transporter.verify();
      console.log("✅ SMTP connection verified successfully");
    } catch (verifyError) {
      console.error("❌ SMTP verification failed:", verifyError);
      throw new Error(`SMTP connection failed: ${verifyError instanceof Error ? verifyError.message : 'Unknown error'}`);
    }

    // Send email
    console.log("📤 Sending email to:", process.env.CONTACT_RECIPIENT || "info@edigitify.in");
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully!");
    console.log("Message ID:", info.messageId);
    console.log("Response:", info.response);

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully. We'll get back to you shortly!"
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Contact form error:", error);
    console.error("Error details:", {
      name: error instanceof Error ? error.name : 'Unknown',
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : 'No stack trace',
    });

    return NextResponse.json(
      {
        error: "Failed to send message. Please try again later or contact us directly at info@edigitify.in",
        details: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}

// Handle other methods
export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed" },
    { status: 405 }
  );
}
