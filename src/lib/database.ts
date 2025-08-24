import sqlite3 from 'sqlite3'
import { open, Database } from 'sqlite'
import path from 'path'

let db: Database<sqlite3.Database, sqlite3.Statement> | null = null

export async function getDatabase() {
  if (db) {
    return db
  }

  const dbPath = path.join(process.cwd(), 'data', 'consultations.db')
  
  db = await open({
    filename: dbPath,
    driver: sqlite3.Database
  })

  // Create consultations table if it doesn't exist
  await db.exec(`
    CREATE TABLE IF NOT EXISTS consultations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      services TEXT NOT NULL,
      date TEXT NOT NULL,
      time TEXT NOT NULL,
      first_name TEXT NOT NULL,
      last_name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      company TEXT,
      message TEXT,
      gdpr_consent BOOLEAN DEFAULT FALSE,
      status TEXT DEFAULT 'pending',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `)

  return db
}

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

export async function saveConsultation(data: ConsultationData) {
  const database = await getDatabase()
  
  const result = await database.run(`
    INSERT INTO consultations (
      services, date, time, first_name, last_name, email, phone, company, message, gdpr_consent
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
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

  return {
    id: result.lastID as number,
    ...data,
    status: 'pending',
    createdAt: new Date().toISOString()
  }
}

export async function getConsultations() {
  const database = await getDatabase()
  return await database.all('SELECT * FROM consultations ORDER BY created_at DESC')
}

export async function updateConsultationStatus(id: number, status: string) {
  const database = await getDatabase()
  
  await database.run(`
    UPDATE consultations 
    SET status = ?, updated_at = CURRENT_TIMESTAMP 
    WHERE id = ?
  `, [status, id])
  
  return { success: true }
}
