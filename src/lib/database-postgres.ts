import { Pool } from 'pg'

let pool: Pool | null = null

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

function getPool() {
  if (!pool) {
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
    })
  }
  return pool
}

export async function initializeDatabase() {
  const client = getPool()
  
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS consultations (
        id SERIAL PRIMARY KEY,
        services JSONB NOT NULL,
        date VARCHAR(255) NOT NULL,
        time VARCHAR(255) NOT NULL,
        first_name VARCHAR(255) NOT NULL,
        last_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(255) NOT NULL,
        company VARCHAR(255),
        message TEXT,
        gdpr_consent BOOLEAN DEFAULT false,
        status VARCHAR(50) DEFAULT 'pending',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)
    
    console.log('PostgreSQL database initialized successfully')
  } catch (error) {
    console.error('Database initialization error:', error)
    throw error
  }
}

export async function saveConsultation(data: ConsultationData) {
  const client = getPool()
  
  try {
    const result = await client.query(`
      INSERT INTO consultations (
        services, date, time, first_name, last_name, email, phone, company, message, gdpr_consent
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      RETURNING *
    `, [
      JSON.stringify(data.services),
      data.date,
      data.time,
      data.firstName,
      data.lastName,
      data.email,
      data.phone,
      data.company || null,
      data.message || null,
      data.gdprConsent || false
    ])

    const consultation = result.rows[0]
    return {
      id: consultation.id,
      ...data,
      status: consultation.status,
      createdAt: consultation.created_at.toISOString()
    }
  } catch (error) {
    console.error('Error saving consultation:', error)
    throw error
  }
}

export async function getConsultations() {
  const client = getPool()
  
  try {
    const result = await client.query('SELECT * FROM consultations ORDER BY created_at DESC')
    return result.rows
  } catch (error) {
    console.error('Error fetching consultations:', error)
    throw error
  }
}

export async function updateConsultationStatus(id: number, status: string) {
  const client = getPool()
  
  try {
    await client.query(`
      UPDATE consultations 
      SET status = $1, updated_at = CURRENT_TIMESTAMP 
      WHERE id = $2
    `, [status, id])
    
    return { success: true }
  } catch (error) {
    console.error('Error updating consultation status:', error)
    throw error
  }
}
