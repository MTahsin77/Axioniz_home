import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Simple test email endpoint
// Sends a test email to TEAM_EMAIL using Zoho SMTP
// Method: GET /api/test-email
// Note: This endpoint intentionally restricts the recipient to TEAM_EMAIL for safety.
export async function GET() {
  const zohoEmail = process.env.ZOHO_EMAIL
  const zohoPassword = process.env.ZOHO_PASSWORD
  const to = process.env.TEAM_EMAIL

  if (!zohoEmail || !zohoPassword) {
    return NextResponse.json(
      { ok: false, error: 'Zoho email credentials are not configured' },
      { status: 500 }
    )
  }

  if (!to) {
    return NextResponse.json(
      { ok: false, error: 'TEAM_EMAIL is not configured' },
      { status: 500 }
    )
  }

  try {
    // Create transporter using Zoho SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.eu',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: zohoEmail,
        pass: zohoPassword,
      },
      tls: {
        rejectUnauthorized: false
      }
    })

    // Send test email
    const result = await transporter.sendMail({
      from: `"Axioniz" <${zohoEmail}>`,
      to: to,
      subject: 'Axioniz Test Email - Zoho SMTP',
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Axioniz Email Test</title>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
              line-height: 1.6;
              color: #2b2d42;
              background-color: #f8f9fa;
              margin: 0;
              padding: 20px;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              background: #ffffff;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 4px 20px rgba(43, 45, 66, 0.1);
            }
            .header {
              background: linear-gradient(135deg, #eb5e28 0%, #d54e20 100%);
              color: white;
              padding: 30px;
              text-align: center;
            }
            .logo {
              width: 60px;
              height: 60px;
              background-color: rgba(255, 255, 255, 0.2);
              border-radius: 50%;
              display: inline-flex;
              align-items: center;
              justify-content: center;
              font-size: 24px;
              font-weight: bold;
              margin-bottom: 15px;
            }
            .content {
              padding: 30px;
            }
            .status {
              background: #edf2f4;
              border-left: 4px solid #eb5e28;
              padding: 20px;
              border-radius: 0 8px 8px 0;
              margin: 20px 0;
            }
            .info-item {
              display: flex;
              justify-content: space-between;
              padding: 8px 0;
              border-bottom: 1px solid rgba(141, 153, 174, 0.2);
            }
            .info-item:last-child { border-bottom: none; }
            .label { font-weight: 600; color: #2b2d42; }
            .value { color: #eb5e28; font-weight: 500; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">O</div>
              <h1 style="margin: 0; font-size: 24px;">AXIONIZ</h1>
              <p style="margin: 8px 0 0 0; opacity: 0.9;">Email System Test</p>
            </div>
            <div class="content">
              <h2 style="color: #2b2d42; margin-top: 0;">Email Integration Test Successful</h2>
              <p>This is a test email sent from the Axioniz application via Zoho SMTP. If you received this email, the integration is working perfectly!</p>
              
              <div class="status">
                <h3 style="margin-top: 0; color: #2b2d42;">System Information</h3>
                <div class="info-item">
                  <span class="label">Environment:</span>
                  <span class="value">${process.env.NODE_ENV || 'unknown'}</span>
                </div>
                <div class="info-item">
                  <span class="label">Timestamp:</span>
                  <span class="value">${new Date().toISOString()}</span>
                </div>
                <div class="info-item">
                  <span class="label">From:</span>
                  <span class="value">${zohoEmail}</span>
                </div>
                <div class="info-item">
                  <span class="label">To:</span>
                  <span class="value">${to}</span>
                </div>
              </div>
              
              <p style="color: #8d99ae; font-size: 14px; margin-bottom: 0;">
                This email confirms that the Axioniz email notification system is operational and ready to send consultation confirmations and team notifications.
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    })

    return NextResponse.json({ 
      ok: true, 
      messageId: result.messageId,
      from: zohoEmail,
      to: to 
    })
  } catch (err: unknown) {
    return NextResponse.json(
      { ok: false, error: String(err) },
      { status: 500 }
    )
  }
}