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
  const baseUrl = process.env.NODE_ENV === 'production' 
    ? 'https://axioniz.tech' 
    : 'http://localhost:3000'

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Consultation Request Confirmed - Axioniz</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
          line-height: 1.6;
          color: #2b2d42;
          background-color: #f8f9fa;
          margin: 0;
          padding: 0;
        }
        
        .email-wrapper {
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          box-shadow: 0 4px 20px rgba(43, 45, 66, 0.1);
        }
        
        .header {
          background: linear-gradient(135deg, #2b2d42 0%, #1a1d2e 100%);
          padding: 40px 30px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        
        .header::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(235, 94, 40, 0.1) 0%, transparent 70%);
          animation: pulse 6s ease-in-out infinite;
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.1); opacity: 0.2; }
        }
        
        .logo-container {
          position: relative;
          z-index: 2;
          margin-bottom: 20px;
        }
        
        .logo {
          width: 80px;
          height: 80px;
          background-color: #eb5e28;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 36px;
          font-weight: bold;
          color: white;
          text-decoration: none;
          box-shadow: 0 8px 32px rgba(235, 94, 40, 0.3);
        }
        
        .header-title {
          position: relative;
          z-index: 2;
          font-size: 32px;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 8px 0;
          letter-spacing: -0.5px;
        }
        
        .header-subtitle {
          position: relative;
          z-index: 2;
          font-size: 16px;
          color: #edf2f4;
          opacity: 0.9;
          margin: 0;
        }
        
        .content {
          padding: 40px 30px;
        }
        
        .greeting {
          font-size: 24px;
          font-weight: 600;
          color: #2b2d42;
          margin-bottom: 20px;
        }
        
        .message {
          font-size: 16px;
          color: #2b2d42;
          margin-bottom: 30px;
          line-height: 1.6;
        }
        
        .highlight {
          color: #eb5e28;
          font-weight: 600;
        }
        
        .consultation-details {
          background: linear-gradient(135deg, #edf2f4 0%, #f8f9fa 100%);
          border-left: 4px solid #eb5e28;
          border-radius: 0 8px 8px 0;
          padding: 24px;
          margin: 30px 0;
        }
        
        .detail-title {
          font-size: 18px;
          font-weight: 600;
          color: #2b2d42;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
        }
        
        .detail-icon {
          width: 20px;
          height: 20px;
          background-color: #eb5e28;
          border-radius: 50%;
          display: inline-block;
          margin-right: 8px;
        }
        
        .detail-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 0;
          border-bottom: 1px solid rgba(141, 153, 174, 0.2);
        }
        
        .detail-item:last-child {
          border-bottom: none;
        }
        
        .detail-label {
          font-weight: 500;
          color: #2b2d42;
        }
        
        .detail-value {
          color: #eb5e28;
          font-weight: 600;
        }
        
        .services-section {
          margin: 30px 0;
        }
        
        .services-title {
          font-size: 18px;
          font-weight: 600;
          color: #2b2d42;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
        }
        
        .services-grid {
          display: grid;
          gap: 12px;
        }
        
        .service-item {
          background: #ffffff;
          border: 2px solid #edf2f4;
          border-radius: 8px;
          padding: 16px;
          display: flex;
          align-items: center;
          transition: all 0.3s ease;
        }
        
        .service-item:hover {
          border-color: #eb5e28;
          transform: translateY(-2px);
          box-shadow: 0 4px 16px rgba(235, 94, 40, 0.1);
        }
        
        .service-bullet {
          width: 12px;
          height: 12px;
          background-color: #eb5e28;
          border-radius: 50%;
          margin-right: 12px;
          flex-shrink: 0;
        }
        
        .service-name {
          color: #2b2d42;
          font-weight: 500;
          text-transform: capitalize;
        }
        
        .message-section {
          background: #f8f9fa;
          border-radius: 8px;
          padding: 20px;
          margin: 30px 0;
        }
        
        .message-title {
          font-size: 16px;
          font-weight: 600;
          color: #2b2d42;
          margin-bottom: 12px;
        }
        
        .message-content {
          color: #2b2d42;
          font-style: italic;
          line-height: 1.6;
          padding: 12px;
          background: #ffffff;
          border-radius: 6px;
          border-left: 3px solid #eb5e28;
        }
        
        .next-steps {
          background: linear-gradient(135deg, #eb5e28 0%, #d54e20 100%);
          color: #ffffff;
          padding: 30px;
          border-radius: 12px;
          margin: 30px 0;
          text-align: center;
        }
        
        .next-steps h3 {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 16px;
        }
        
        .next-steps p {
          opacity: 0.95;
          margin-bottom: 20px;
        }
        
        .cta-button {
          display: inline-block;
          background-color: #ffffff;
          color: #eb5e28;
          padding: 12px 24px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        
        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
        }
        
        .footer {
          background-color: #2b2d42;
          color: #edf2f4;
          padding: 30px;
          text-align: center;
        }
        
        .footer-content {
          margin-bottom: 20px;
        }
        
        .footer-title {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 8px;
        }
        
        .footer-text {
          opacity: 0.8;
          font-size: 14px;
        }
        
        .footer-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(235, 94, 40, 0.5), transparent);
          margin: 20px 0;
        }
        
        .footer-bottom {
          font-size: 12px;
          opacity: 0.6;
        }
        
        @media (max-width: 600px) {
          .email-wrapper {
            margin: 0;
            box-shadow: none;
          }
          
          .header, .content, .footer {
            padding: 20px;
          }
          
          .header-title {
            font-size: 28px;
          }
          
          .greeting {
            font-size: 20px;
          }
          
          .consultation-details {
            padding: 16px;
          }
        }
      </style>
    </head>
    <body>
      <div class="email-wrapper">
        <!-- Header -->
        <div class="header">
          <div class="logo-container">
            <div class="logo">O</div>
          </div>
          <h1 class="header-title">AXIONIZ</h1>
          <p class="header-subtitle">Your consultation request has been confirmed</p>
        </div>
        
        <!-- Content -->
        <div class="content">
          <h2 class="greeting">Hello ${data.firstName}!</h2>
          
          <p class="message">
            Thank you for requesting a consultation with Axioniz. We've successfully received your request and our expert team will contact you within <span class="highlight">24 hours</span> to schedule your consultation.
          </p>
          
          <!-- Consultation Details -->
          <div class="consultation-details">
            <h3 class="detail-title">
              <span class="detail-icon"></span>
              Consultation Details
            </h3>
            
            <div class="detail-item">
              <span class="detail-label">Request ID</span>
              <span class="detail-value">#${data.id}</span>
            </div>
            
            <div class="detail-item">
              <span class="detail-label">Preferred Date</span>
              <span class="detail-value">${data.date}</span>
            </div>
            
            <div class="detail-item">
              <span class="detail-label">Preferred Time</span>
              <span class="detail-value">${data.time}</span>
            </div>
            
            ${data.company ? `
            <div class="detail-item">
              <span class="detail-label">Company</span>
              <span class="detail-value">${data.company}</span>
            </div>
            ` : ''}
          </div>
          
          <!-- Services Section -->
          <div class="services-section">
            <h3 class="services-title">
              <span class="detail-icon"></span>
              Services Requested
            </h3>
            <div class="services-grid">
              ${data.services.map(service => `
                <div class="service-item">
                  <div class="service-bullet"></div>
                  <span class="service-name">${service.replace(/-/g, ' ')}</span>
                </div>
              `).join('')}
            </div>
          </div>
          
          ${data.message ? `
          <!-- Message Section -->
          <div class="message-section">
            <h3 class="message-title">Your Message</h3>
            <div class="message-content">"${data.message}"</div>
          </div>
          ` : ''}
          
          <!-- Next Steps -->
          <div class="next-steps">
            <h3>What happens next?</h3>
            <p>Our technology experts will review your requirements and prepare a customized consultation agenda. We look forward to discussing how we can help transform your business with cutting-edge solutions.</p>
            <a href="${baseUrl}" class="cta-button">Visit Our Website</a>
          </div>
          
          <p class="message">
            If you have any questions before our call, please don't hesitate to reach out to us at <a href="mailto:${process.env.ZOHO_EMAIL}" style="color: #eb5e28;">${process.env.ZOHO_EMAIL}</a>.
          </p>
          
          <p class="message">
            Best regards,<br>
            <span class="highlight">The Axioniz Team</span>
          </p>
        </div>
        
        <!-- Footer -->
        <div class="footer">
          <div class="footer-content">
            <div class="footer-title">AXIONIZ</div>
            <div class="footer-text">Empowering businesses with cutting-edge technology solutions</div>
          </div>
          
          <div class="footer-divider"></div>
          
          <div class="footer-bottom">
            <p>&copy; ${new Date().getFullYear()} Axioniz. All rights reserved.</p>
            <p>This email was sent regarding your consultation request #${data.id}</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `
}

function generateTeamNotificationHTML(data: EmailData): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Consultation Request - Axioniz</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
          line-height: 1.6;
          color: #2b2d42;
          background-color: #f8f9fa;
          margin: 0;
          padding: 0;
        }
        
        .email-wrapper {
          max-width: 700px;
          margin: 0 auto;
          background-color: #ffffff;
          box-shadow: 0 4px 20px rgba(43, 45, 66, 0.1);
        }
        
        .header {
          background: linear-gradient(135deg, #eb5e28 0%, #d54e20 100%);
          padding: 30px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        
        .header::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
          animation: rotate 20s linear infinite;
        }
        
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .alert-badge {
          position: relative;
          z-index: 2;
          display: inline-block;
          background-color: rgba(255, 255, 255, 0.2);
          color: #ffffff;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 15px;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        
        .header-title {
          position: relative;
          z-index: 2;
          font-size: 28px;
          font-weight: 700;
          color: #ffffff;
          margin: 0;
          letter-spacing: -0.5px;
        }
        
        .content {
          padding: 40px 30px;
        }
        
        .client-info {
          background: linear-gradient(135deg, #edf2f4 0%, #f8f9fa 100%);
          border-radius: 12px;
          padding: 30px;
          margin-bottom: 30px;
          border-left: 4px solid #eb5e28;
        }
        
        .section-title {
          font-size: 20px;
          font-weight: 600;
          color: #2b2d42;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
        }
        
        .title-icon {
          width: 24px;
          height: 24px;
          background-color: #eb5e28;
          border-radius: 50%;
          margin-right: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 12px;
          font-weight: bold;
        }
        
        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-bottom: 20px;
        }
        
        .info-card {
          background: #ffffff;
          border: 2px solid #edf2f4;
          border-radius: 8px;
          padding: 20px;
          transition: all 0.3s ease;
        }
        
        .info-card:hover {
          border-color: #eb5e28;
          transform: translateY(-2px);
          box-shadow: 0 4px 16px rgba(235, 94, 40, 0.1);
        }
        
        .info-label {
          font-size: 12px;
          color: #8d99ae;
          text-transform: uppercase;
          font-weight: 600;
          letter-spacing: 0.5px;
          margin-bottom: 8px;
        }
        
        .info-value {
          font-size: 16px;
          color: #2b2d42;
          font-weight: 600;
        }
        
        .services-section {
          margin: 30px 0;
        }
        
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 12px;
        }
        
        .service-tag {
          background: linear-gradient(135deg, #eb5e28 0%, #d54e20 100%);
          color: #ffffff;
          padding: 12px 16px;
          border-radius: 8px;
          text-align: center;
          font-weight: 500;
          text-transform: capitalize;
          box-shadow: 0 2px 8px rgba(235, 94, 40, 0.2);
        }
        
        .message-section {
          background: #f8f9fa;
          border-radius: 12px;
          padding: 24px;
          margin: 30px 0;
          border-left: 4px solid #8d99ae;
        }
        
        .message-content {
          color: #2b2d42;
          font-style: italic;
          line-height: 1.6;
          padding: 16px;
          background: #ffffff;
          border-radius: 8px;
          border: 1px solid #edf2f4;
        }
        
        .action-section {
          background: linear-gradient(135deg, #2b2d42 0%, #1a1d2e 100%);
          color: #ffffff;
          padding: 30px;
          border-radius: 12px;
          margin: 30px 0;
        }
        
        .action-title {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
        }
        
        .action-icon {
          width: 20px;
          height: 20px;
          background-color: #eb5e28;
          border-radius: 50%;
          margin-right: 8px;
        }
        
        .action-list {
          list-style: none;
          padding: 0;
        }
        
        .action-item {
          padding: 12px 0;
          border-bottom: 1px solid rgba(237, 242, 244, 0.1);
          display: flex;
          align-items: flex-start;
        }
        
        .action-item:last-child {
          border-bottom: none;
        }
        
        .action-number {
          background-color: #eb5e28;
          color: #ffffff;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: bold;
          margin-right: 12px;
          flex-shrink: 0;
        }
        
        .action-text {
          opacity: 0.9;
          flex: 1;
        }
        
        .priority-section {
          background: linear-gradient(135deg, rgba(235, 94, 40, 0.1) 0%, rgba(235, 94, 40, 0.05) 100%);
          border: 2px solid #eb5e28;
          border-radius: 12px;
          padding: 20px;
          text-align: center;
          margin: 30px 0;
        }
        
        .priority-text {
          color: #eb5e28;
          font-weight: 600;
          font-size: 16px;
        }
        
        .footer {
          background-color: #2b2d42;
          color: #edf2f4;
          padding: 30px;
          text-align: center;
        }
        
        .footer-text {
          opacity: 0.8;
          font-size: 14px;
          margin-bottom: 8px;
        }
        
        .footer-bottom {
          font-size: 12px;
          opacity: 0.6;
        }
        
        @media (max-width: 600px) {
          .email-wrapper {
            margin: 0;
            box-shadow: none;
          }
          
          .header, .content, .footer {
            padding: 20px;
          }
          
          .info-grid {
            grid-template-columns: 1fr;
          }
          
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      </style>
    </head>
    <body>
      <div class="email-wrapper">
        <!-- Header -->
        <div class="header">
          <div class="alert-badge">High Priority</div>
          <h1 class="header-title">New Consultation Request</h1>
        </div>
        
        <!-- Content -->
        <div class="content">
          <!-- Client Information -->
          <div class="client-info">
            <h2 class="section-title">
              <span class="title-icon">i</span>
              Client Information
            </h2>
            
            <div class="info-grid">
              <div class="info-card">
                <div class="info-label">Full Name</div>
                <div class="info-value">${data.firstName} ${data.lastName}</div>
              </div>
              
              <div class="info-card">
                <div class="info-label">Email Address</div>
                <div class="info-value">${data.email}</div>
              </div>
              
              <div class="info-card">
                <div class="info-label">Phone Number</div>
                <div class="info-value">${data.phone}</div>
              </div>
              
              <div class="info-card">
                <div class="info-label">Company</div>
                <div class="info-value">${data.company || 'Not specified'}</div>
              </div>
              
              <div class="info-card">
                <div class="info-label">Preferred Date</div>
                <div class="info-value">${data.date}</div>
              </div>
              
              <div class="info-card">
                <div class="info-label">Preferred Time</div>
                <div class="info-value">${data.time}</div>
              </div>
            </div>
          </div>
          
          <!-- Services Section -->
          <div class="services-section">
            <h2 class="section-title">
              <span class="title-icon">S</span>
              Requested Services
            </h2>
            <div class="services-grid">
              ${data.services.map(service => `
                <div class="service-tag">${service.replace(/-/g, ' ')}</div>
              `).join('')}
            </div>
          </div>
          
          ${data.message ? `
          <!-- Message Section -->
          <div class="message-section">
            <h3 class="section-title">
              <span class="title-icon">M</span>
              Client Message
            </h3>
            <div class="message-content">"${data.message}"</div>
          </div>
          ` : ''}
          
          <!-- Action Required -->
          <div class="action-section">
            <h3 class="action-title">
              <span class="action-icon"></span>
              Next Steps Required
            </h3>
            <ol class="action-list">
              <li class="action-item">
                <span class="action-number">1</span>
                <span class="action-text">Review client requirements and services requested</span>
              </li>
              <li class="action-item">
                <span class="action-number">2</span>
                <span class="action-text">Check calendar availability for preferred date/time</span>
              </li>
              <li class="action-item">
                <span class="action-number">3</span>
                <span class="action-text">Contact client within 24 hours to confirm consultation</span>
              </li>
              <li class="action-item">
                <span class="action-number">4</span>
                <span class="action-text">Prepare consultation agenda based on requested services</span>
              </li>
              <li class="action-item">
                <span class="action-number">5</span>
                <span class="action-text">Send calendar invite with meeting details</span>
              </li>
            </ol>
          </div>
          
          <!-- Priority Alert -->
          <div class="priority-section">
            <div class="priority-text">
              Response required within 24 hours to maintain service quality standards
            </div>
          </div>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <p style="margin: 0; font-size: 14px; color: #2b2d42;">
              <strong>Request ID:</strong> #${data.id}<br>
              <strong>Submitted:</strong> ${new Date().toLocaleString()}<br>
              <strong>Priority:</strong> High (New consultation request)
            </p>
          </div>
        </div>
        
        <!-- Footer -->
        <div class="footer">
          <div class="footer-text">AXIONIZ Team Notification System</div>
          <div class="footer-bottom">
            <p>&copy; ${new Date().getFullYear()} Axioniz. All rights reserved.</p>
            <p>This is an automated notification for consultation request #${data.id}</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `
}