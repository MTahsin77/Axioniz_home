import { NextRequest, NextResponse } from 'next/server'
import { getConsultations, updateConsultationStatus } from '@/lib/database-config'

export async function GET() {
  try {
    const consultations = await getConsultations()
    
    return NextResponse.json({
      success: true,
      consultations,
      count: consultations.length
    })
  } catch (error) {
    console.error('Error fetching consultations:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to fetch consultations' },
      { status: 500 }
    )
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const { id, status } = await request.json()
    
    if (!id || !status) {
      return NextResponse.json(
        { success: false, message: 'ID and status are required' },
        { status: 400 }
      )
    }

    await updateConsultationStatus(id, status)
    
    return NextResponse.json({
      success: true,
      message: 'Status updated successfully'
    })
  } catch (error) {
    console.error('Error updating consultation status:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to update status' },
      { status: 500 }
    )
  }
}
