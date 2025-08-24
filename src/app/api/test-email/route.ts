import { NextResponse } from 'next/server'
import { Resend } from 'resend'

// Simple test email endpoint
// Sends a test email to TEAM_EMAIL using Resend
// Method: GET /api/test-email
// Note: This endpoint intentionally restricts the recipient to TEAM_EMAIL for safety.
export async function GET() {
  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.TEAM_EMAIL

  if (!apiKey) {
    return NextResponse.json(
      { ok: false, error: 'RESEND_API_KEY is not configured' },
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
    const resend = new Resend(apiKey)
    const { data, error } = await resend.emails.send({
      // Use Resend's default onboarding sender (no domain verification required)
      from: 'Axioniz <onboarding@resend.dev>',
      to: [to],
      subject: 'Axioniz Test Email',
      html: `
        <div style="font-family: Arial, sans-serif; line-height:1.6;">
          <h2 style="margin:0 0 8px;">Axioniz Test Email</h2>
          <p>This is a test email sent from the Axioniz app via Resend.</p>
          <ul>
            <li><strong>Environment:</strong> ${process.env.NODE_ENV || 'unknown'}</li>
            <li><strong>Timestamp:</strong> ${new Date().toISOString()}</li>
          </ul>
          <p style="margin-top:16px;">If you received this, email sending is working.</p>
        </div>
      `,
    })

    if (error) {
      return NextResponse.json(
        { ok: false, error },
        { status: 500 }
      )
    }

    return NextResponse.json({ ok: true, id: data?.id, to })
  } catch (err: unknown) {
    return NextResponse.json(
      { ok: false, error: String(err) },
      { status: 500 }
    )
  }
}
