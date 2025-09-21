# Axioniz Consultation Backend Setup Guide

This guide will walk you through setting up the complete consultation form backend functionality for your Axioniz.com website.

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- A Resend account for email service (free tier available)

## Step 1: Environment Variables Setup

### 1.1 Create Environment File
Create a `.env.local` file in your project root:

```bash
cp env.example .env.local
```

### 1.2 Configure Email Service (Resend)

1. **Sign up for Resend** (if you haven't already):
   - Go to https://resend.com
   - Create a free account
   - Verify your email address

2. **Get your API Key**:
   - Log into your Resend dashboard
   - Go to "API Keys" section
   - Click "Create API Key"
   - Name it "Axioniz Website"
   - Copy the generated key

3. **Add to .env.local**:
```env
RESEND_API_KEY=re_your_actual_api_key_here
TEAM_EMAIL=your-team-email@axioniz.com
```

### 1.3 Domain Verification (For Production)

For production emails, you'll need to verify your domain:

1. In Resend dashboard, go to "Domains"
2. Click "Add Domain"
3. Enter your domain (e.g., `axioniz.com`)
4. Follow the DNS setup instructions
5. Wait for verification (usually takes a few minutes)

**Note**: For development/testing, you can use any verified email address.

## Step 2: Install Dependencies

All required dependencies are already installed:
- `resend` - Email service
- `sqlite3` - Database driver
- `sqlite` - Promise-based SQLite wrapper

If you need to reinstall:
```bash
npm install resend sqlite3 sqlite
```

## Step 3: Database Setup

The database is automatically created when the first consultation is submitted. No manual setup required!

**Database file location**: `./consultations.db` (created automatically)

### Database Schema
The system creates a `consultations` table with these fields:
- `id` - Auto-incrementing primary key
- `services` - JSON array of requested services
- `date` - Preferred consultation date
- `time` - Preferred consultation time
- `first_name` - Client's first name
- `last_name` - Client's last name
- `email` - Client's email address
- `phone` - Client's phone number
- `company` - Client's company (optional)
- `message` - Additional message (optional)
- `gdpr_consent` - GDPR consent status
- `status` - Consultation status (pending, contacted, scheduled, completed)
- `created_at` - Timestamp when submitted
- `updated_at` - Timestamp when last updated

## Step 4: Start Development Server

```bash
npm run dev
```

Your site will be available at `http://localhost:3000` (or next available port).

## Step 5: Testing the Consultation Form

### 5.1 Test Form Submission

1. Navigate to your website homepage
2. Scroll down to the "Get Your Free Consultation" section
3. Fill out the multi-step form:
   - **Step 1**: Select services (e.g., "AI Integration", "Custom Software Development")
   - **Step 2**: Choose preferred date and time
   - **Step 3**: Enter contact information
   - **Step 4**: Add any additional details
   - **Step 5**: Accept GDPR consent and submit

### 5.2 Verify Database Storage

After submission, check the console logs for:
```
Consultation request processed: {
  id: 1,
  email: "client@example.com",
  services: ["AI Integration", "Custom Software Development"],
  confirmationEmailSent: true,
  teamNotificationSent: true,
  timestamp: "2024-08-24T11:10:32.000Z"
}
```

### 5.3 Check Email Delivery

1. **Client Confirmation Email**: Check the submitted email address
2. **Team Notification**: Check your team email address
3. **Email Content**: Verify branding, consultation details, and formatting

### 5.4 Test Admin Dashboard

1. Navigate to `/admin/consultations`
2. View submitted consultations
3. Test status updates (pending → contacted → scheduled → completed)
4. Verify refresh functionality

## Step 6: Production Deployment

### 6.1 Environment Variables for Production

Set these environment variables in your hosting platform:

```env
RESEND_API_KEY=your_production_resend_api_key
TEAM_EMAIL=team@yourdomain.com
```

### 6.2 Database Considerations

**For Production**, consider upgrading to a more robust database:
- **PostgreSQL** (recommended for scalability)
- **MySQL** (good alternative)
- **Keep SQLite** (fine for low-medium traffic)

### 6.3 Email Domain Setup

1. Verify your domain in Resend
2. Update email templates if needed
3. Test email delivery from production environment

## Step 7: Monitoring and Maintenance

### 7.1 Monitor Consultation Submissions

- Check `/admin/consultations` regularly
- Monitor email delivery success rates
- Review database growth and performance

### 7.2 Backup Strategy

**SQLite Database Backup**:
```bash
# Create backup
cp consultations.db consultations_backup_$(date +%Y%m%d).db

# Automated backup (add to cron)
0 2 * * * cp /path/to/consultations.db /path/to/backups/consultations_$(date +\%Y\%m\%d).db
```

### 7.3 Email Template Updates

Email templates are in `/src/lib/email.ts`. Update branding, content, or styling as needed.

## Troubleshooting

### Common Issues

1. **Email not sending**:
   - Check RESEND_API_KEY is correct
   - Verify domain is verified in Resend
   - Check console logs for error messages

2. **Database errors**:
   - Ensure write permissions in project directory
   - Check SQLite installation
   - Review console logs for specific errors

3. **Form submission fails**:
   - Check browser console for JavaScript errors
   - Verify API endpoint is accessible
   - Review server logs

### Debug Mode

Add debug logging to `/src/app/api/consultation/route.ts`:

```typescript
console.log('Form data received:', validatedData)
console.log('Database save result:', savedConsultation)
console.log('Email results:', { confirmationResult, teamNotificationResult })
```

## Security Considerations

1. **Environment Variables**: Never commit `.env.local` to version control
2. **API Keys**: Use different keys for development and production
3. **Email Validation**: Form includes proper email validation
4. **GDPR Compliance**: GDPR consent checkbox is required
5. **Rate Limiting**: Consider adding rate limiting for production

## Support

If you encounter issues:
1. Check the console logs first
2. Verify environment variables are set correctly
3. Test each component individually (database, email, form)
4. Review the troubleshooting section above

---

**Congratulations!** Your Axioniz consultation form now has complete backend functionality with database storage, email confirmations, and admin management capabilities.
