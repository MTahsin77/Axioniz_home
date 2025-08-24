import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { saveConsultation, initializeDatabase } from '@/lib/database-config'
import { sendConfirmationEmail, sendTeamNotification } from '@/lib/email'

// Validation schema for consultation form
const consultationSchema = z.object({
  services: z.array(z.string()).min(1, 'Please select at least one service'),
  date: z.string().min(1, 'Please select a date'),
  time: z.string().min(1, 'Please select a time'),
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(1, 'Phone number is required'),
  company: z.string().optional(),
  message: z.string().optional(),
  gdprConsent: z.boolean().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Initialize database (important for PostgreSQL on first run)
    await initializeDatabase()
    
    // Validate the request body
    const validatedData = consultationSchema.parse(body)
    
    // Save to database
    const savedConsultation = await saveConsultation(validatedData)
    
    // Send confirmation email to client
    const confirmationResult = await sendConfirmationEmail(savedConsultation)
    
    // Send notification to team
    const teamNotificationResult = await sendTeamNotification(savedConsultation)
    
    console.log('Consultation request processed:', {
      id: savedConsultation.id,
      email: savedConsultation.email,
      services: savedConsultation.services,
      confirmationEmailSent: confirmationResult.success,
      teamNotificationSent: teamNotificationResult.success,
      timestamp: savedConsultation.createdAt,
    })
    
    return NextResponse.json(
      {
        success: true,
        message: 'Consultation request submitted successfully',
        data: {
          id: savedConsultation.id,
          status: savedConsultation.status,
          estimatedResponse: '24 hours',
          emailSent: confirmationResult.success,
        },
      },
      { status: 200 }
    )
    
  } catch (error) {
    console.error('Consultation submission error:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed',
          errors: error.issues,
        },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      {
        success: false,
        message: 'Internal server error',
      },
      { status: 500 }
    )
  }
}

// Handle GET requests (optional - for testing)
export async function GET() {
  return NextResponse.json({
    message: 'Consultation API endpoint is active',
    methods: ['POST'],
  })
}
