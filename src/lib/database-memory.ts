// In-memory database for production deployment (temporary solution)
// This will reset on each deployment, but allows testing email functionality

interface ConsultationRecord {
  id: number
  services: string[]
  date: string
  time: string
  firstName: string
  lastName: string
  email: string
  phone: string
  company?: string
  message?: string
  gdprConsent?: boolean
  status: string
  createdAt: string
}

let consultations: ConsultationRecord[] = []
let nextId = 1

export interface ConsultationData {
  services: string[]
  date: string
  time: string
  firstName: string
  lastName: string
  email: string
  phone: string
  company?: string
  message?: string
  gdprConsent?: boolean
}

export async function initializeDatabase() {
  console.log('Using in-memory database (production temporary solution)')
  // No initialization needed for in-memory storage
}

export async function saveConsultation(data: ConsultationData) {
  const consultation: ConsultationRecord = {
    id: nextId++,
    ...data,
    status: 'pending',
    createdAt: new Date().toISOString()
  }
  
  consultations.push(consultation)
  
  console.log('Consultation saved to memory:', {
    id: consultation.id,
    email: consultation.email,
    services: consultation.services
  })
  
  return consultation
}

export async function getConsultations() {
  return consultations.sort((a, b) => 
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  )
}

export async function updateConsultationStatus(id: number, status: string) {
  const consultation = consultations.find(c => c.id === id)
  if (consultation) {
    consultation.status = status
    return { success: true }
  }
  throw new Error('Consultation not found')
}
