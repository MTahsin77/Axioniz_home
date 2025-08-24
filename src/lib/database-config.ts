// Database configuration that switches between SQLite (development) and PostgreSQL (production)

export const isDevelopment = process.env.NODE_ENV !== 'production'
export const usePostgreSQL = process.env.DATABASE_URL !== undefined

// Import functions from appropriate database module
import * as sqliteDb from './database'
import * as postgresDb from './database-postgres'

export type ConsultationData = sqliteDb.ConsultationData

// Export the appropriate database functions based on environment
export const initializeDatabase = usePostgreSQL 
  ? postgresDb.initializeDatabase 
  : async () => { console.log('Using SQLite database (development mode)') }

export const saveConsultation = usePostgreSQL 
  ? postgresDb.saveConsultation 
  : sqliteDb.saveConsultation

export const getConsultations = usePostgreSQL 
  ? postgresDb.getConsultations 
  : sqliteDb.getConsultations

export const updateConsultationStatus = usePostgreSQL 
  ? postgresDb.updateConsultationStatus 
  : sqliteDb.updateConsultationStatus
