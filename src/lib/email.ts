import nodemailer from 'nodemailer'
import { ConsultationData } from './database'

export interface EmailData extends ConsultationData {
  id: number
}

// Create reusable transporter object using Zoho SMTP
function createTransporter() {
  if (!process.env.ZOHO_EMAIL || !process.env.ZOHO_PASSWORD) {
    console.warn('Zoho email credentials not configured')
    return null
  }

  return nodemailer.createTransport({
    host: 'smtp.zoho.eu',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.ZOHO_EMAIL,
      pass: process.env.ZOHO_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false
    }
  })
}

export async function sendConfirmationEmail(data: EmailData) {
  const transporter = createTransporter()
  
  if (!transporter) {
    console.warn('Zoho email not configured, skipping confirmation email')
    return { success: false, message: 'Email service not configured' }
  }

  try {
    const mailOptions = {
      from: `"Axioniz" <${process.env.ZOHO_EMAIL}>`,
      to: data.email,
      subject: 'Consultation Request Confirmed - Axioniz',
      html: generateConfirmationEmailHTML(data),
    }

    const result = await transporter.sendMail(mailOptions)
    console.log('Confirmation email sent:', result.messageId)
    return { success: true, messageId: result.messageId }
  } catch (error) {
    console.error('Confirmation email failed:', error)
    return { success: false, error }
  }
}

export async function sendTeamNotification(data: EmailData) {
  const transporter = createTransporter()
  
  if (!transporter || !process.env.TEAM_EMAIL) {
    console.warn('Email service or team email not configured, skipping team notification')
    return { success: false, message: 'Team notification not configured' }
  }

  try {
    const mailOptions = {
      from: `"Axioniz" <${process.env.ZOHO_EMAIL}>`,
      to: process.env.TEAM_EMAIL,
      subject: `New Consultation Request - ${data.firstName} ${data.lastName}`,
      html: generateTeamNotificationHTML(data),
    }

    const result = await transporter.sendMail(mailOptions)
    console.log('Team notification sent:', result.messageId)
    return { success: true, messageId: result.messageId }
  } catch (error) {
    console.error('Team notification failed:', error)
    return { success: false, error }
  }
}

function generateConfirmationEmailHTML(data: EmailData): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Consultation Request Confirmed</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #2b2d42; color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
        .logo { font-size: 24px; font-weight: bold; margin-bottom: 10px; }
        .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 8px 8px; }
        .highlight { color: #eb5e28; font-weight: bold; }
        .services { background: white; padding: 20px; border-radius: 6px; margin: 20px 0; }
        .service-item { padding: 8px 0; border-bottom: 1px solid #eee; }
        .service-item:last-child { border-bottom: none; }
        .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
        .button { display: inline-block; background: #eb5e28; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 20px 0; }
      </style>
    </head>
    <body>
      <div class="header">
        <div class="logo">AXIONIZ</div>
        <p>Your consultation request has been confirmed</p>
      </div>
      
      <div class="content">
        <h2>Hello ${data.firstName}!</h2>
        
        <p>Thank you for requesting a consultation with Axioniz. We've received your request and our team will contact you within <span class="highlight">24 hours</span> to schedule your consultation.</p>
        
        <h3>Request Details:</h3>
        <p><strong>Consultation ID:</strong> #${data.id}</p>
        <p><strong>Preferred Date:</strong> ${data.date}</p>
        <p><strong>Preferred Time:</strong> ${data.time}</p>
        ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ''}
        
        <div class="services">
          <h4>Services Requested:</h4>
          ${data.services.map(service => `<div class="service-item">• ${service}</div>`).join('')}
        </div>
        
        ${data.message ? `
        <h4>Your Message:</h4>
        <p style="background: white; padding: 15px; border-radius: 6px; font-style: italic;">"${data.message}"</p>
        ` : ''}
        
        <p>Our technology experts will review your requirements and prepare a customized consultation agenda. We look forward to discussing how we can help transform your business with cutting-edge solutions.</p>
        
        <div style="text-align: center;">
          <a href="https://axioniz.tech" class="button">Visit Our Website</a>
        </div>
        
        <p>If you have any questions before our call, please don't hesitate to reach out to us.</p>
        
        <p>Best regards,<br>
        <span class="highlight">The Axioniz Team</span></p>
      </div>
      
      <div class="footer">
        <p>© 2024 Axioniz. All rights reserved.</p>
        <p>This email was sent regarding your consultation request #${data.id}</p>
      </div>
    </body>
    </html>
  `
}

function generateTeamNotificationHTML(data: EmailData): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Consultation Request</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #eb5e28; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 8px 8px; }
        .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin: 20px 0; }
        .info-item { background: white; padding: 15px; border-radius: 6px; }
        .info-label { font-weight: bold; color: #666; font-size: 12px; text-transform: uppercase; }
        .info-value { margin-top: 5px; }
        .services { background: white; padding: 20px; border-radius: 6px; margin: 20px 0; }
        .priority { background: #eb5e28; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: bold; }
      </style>
    </head>
    <body>
      <div class="header">
        <h2>🔔 New Consultation Request</h2>
        <div class="priority">HIGH PRIORITY</div>
      </div>
      
      <div class="content">
        <h3>Client Information</h3>
        <div class="info-grid">
          <div class="info-item">
            <div class="info-label">Name</div>
            <div class="info-value">${data.firstName} ${data.lastName}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Email</div>
            <div class="info-value">${data.email}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Phone</div>
            <div class="info-value">${data.phone}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Company</div>
            <div class="info-value">${data.company || 'Not specified'}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Preferred Date</div>
            <div class="info-value">${data.date}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Preferred Time</div>
            <div class="info-value">${data.time}</div>
          </div>
        </div>
        
        <div class="services">
          <h4>Requested Services:</h4>
          ${data.services.map(service => `<div style="padding: 5px 0;">• ${service}</div>`).join('')}
        </div>
        
        ${data.message ? `
        <h4>Client Message:</h4>
        <div style="background: white; padding: 20px; border-radius: 6px; border-left: 4px solid #eb5e28;">
          "${data.message}"
        </div>
        ` : ''}
        
        <div style="margin-top: 30px; padding: 20px; background: #e8f4f8; border-radius: 6px;">
          <h4 style="margin-top: 0;">⏰ Next Steps:</h4>
          <ol>
            <li>Review client requirements and services requested</li>
            <li>Check calendar availability for preferred date/time</li>
            <li>Contact client within 24 hours to confirm consultation</li>
            <li>Prepare consultation agenda based on requested services</li>
          </ol>
        </div>
        
        <p><strong>Request ID:</strong> #${data.id}<br>
        <strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
      </div>
    </body>
    </html>
  `
}