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
    const transporter = nodemailer.createTransporter({
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
        <div style="font-family: Arial, sans-serif; line-height:1.6;">
          <h2 style="margin:0 0 8px;">Axioniz Test Email</h2>
          <p>This is a test email sent from the Axioniz app via Zoho SMTP.</p>
          <ul>
            <li><strong>Environment:</strong> ${process.env.NODE_ENV || 'unknown'}</li>
            <li><strong>Timestamp:</strong> ${new Date().toISOString()}</li>
            <li><strong>From:</strong> ${zohoEmail}</li>
            <li><strong>To:</strong> ${to}</li>
          </ul>
          <p style="margin-top:16px;">If you received this, Zoho email integration is working perfectly!</p>
        </div>
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