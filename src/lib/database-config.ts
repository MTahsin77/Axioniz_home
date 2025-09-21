// Database configuration that switches between SQLite (development) and PostgreSQL (production)

export const isDevelopment = process.env.NODE_ENV !== 'production'
// Force SQLite usage for now (can be changed later when PostgreSQL is set up)
export const usePostgreSQL = false && process.env.DATABASE_URL !== undefined

// Import functions from appropriate database module
import * as sqliteDb from './database'
import * as postgresDb from './database-postgres'
import * as memoryDb from './database-memory'

export type ConsultationData = sqliteDb.ConsultationData

// Export the appropriate database functions based on environment
export const initializeDatabase = usePostgreSQL 
  ? postgresDb.initializeDatabase 
  : isDevelopment 
    ? async () => { console.log('Using SQLite database (development mode)') }
    : memoryDb.initializeDatabase

export const saveConsultation = usePostgreSQL 
  ? postgresDb.saveConsultation 
  : isDevelopment 
    ? sqliteDb.saveConsultation
    : memoryDb.saveConsultation

export const getConsultations = usePostgreSQL 
  ? postgresDb.getConsultations 
  : isDevelopment 
    ? sqliteDb.getConsultations
    : memoryDb.getConsultations

export const updateConsultationStatus = usePostgreSQL 
  ? postgresDb.updateConsultationStatus 
  : isDevelopment 
    ? sqliteDb.updateConsultationStatus
    : memoryDb.updateConsultationStatus
