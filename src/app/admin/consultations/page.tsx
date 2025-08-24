'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Header } from '@/components/layout/header'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, Mail, Phone, Building, MessageSquare, User, RefreshCw } from 'lucide-react'

interface Consultation {
  id: number
  services: string
  date: string
  time: string
  first_name: string
  last_name: string
  email: string
  phone: string
  company: string | null
  message: string | null
  gdpr_consent: boolean
  status: string
  created_at: string
  updated_at: string
}

export default function AdminConsultationsPage() {
  const [consultations, setConsultations] = useState<Consultation[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchConsultations = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/admin/consultations')
      if (!response.ok) throw new Error('Failed to fetch consultations')
      const data = await response.json()
      setConsultations(data.consultations || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error')
    } finally {
      setLoading(false)
    }
  }

  const updateStatus = async (id: number, status: string) => {
    try {
      const response = await fetch('/api/admin/consultations', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status })
      })
      if (!response.ok) throw new Error('Failed to update status')
      await fetchConsultations() // Refresh data
    } catch (err) {
      console.error('Error updating status:', err)
    }
  }

  useEffect(() => {
    fetchConsultations()
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'contacted': return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'scheduled': return 'bg-green-100 text-green-800 border-green-200'
      case 'completed': return 'bg-gray-100 text-gray-800 border-gray-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-32 pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center">
              <RefreshCw className="h-8 w-8 animate-spin text-[#eb5e28]" />
              <span className="ml-2 text-lg">Loading consultations...</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-32 pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-red-600 mb-4">Error Loading Consultations</h1>
              <p className="text-gray-600 mb-4">{error}</p>
              <Button onClick={fetchConsultations} className="bg-[#eb5e28] hover:bg-[#eb5e28]/90">
                Try Again
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">
                Consultation <span className="text-[#eb5e28]">Dashboard</span>
              </h1>
              <p className="text-muted-foreground">
                Manage and track consultation requests
              </p>
            </div>
            <Button 
              onClick={fetchConsultations}
              variant="outline"
              className="border-[#eb5e28] text-[#eb5e28] hover:bg-[#eb5e28] hover:text-white"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">
                  Recent Consultations ({consultations.length})
                </h2>
                <div className="flex gap-2">
                  <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                    Pending: {consultations.filter(c => c.status === 'pending').length}
                  </Badge>
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                    Contacted: {consultations.filter(c => c.status === 'contacted').length}
                  </Badge>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    Scheduled: {consultations.filter(c => c.status === 'scheduled').length}
                  </Badge>
                </div>
              </div>
            </div>

            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {consultations.length === 0 ? (
                <div className="px-6 py-12 text-center">
                  <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
                    No consultations yet
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Consultation requests will appear here when submitted.
                  </p>
                </div>
              ) : (
                consultations.map((consultation) => (
                  <motion.div
                    key={consultation.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="px-6 py-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-3">
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4 text-gray-500" />
                            <span className="font-semibold text-lg">
                              {consultation.first_name} {consultation.last_name}
                            </span>
                          </div>
                          <Badge className={getStatusColor(consultation.status)}>
                            {consultation.status.charAt(0).toUpperCase() + consultation.status.slice(1)}
                          </Badge>
                          <span className="text-sm text-gray-500">
                            #{consultation.id}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                          <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-gray-500" />
                            <span className="text-sm">{consultation.email}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4 text-gray-500" />
                            <span className="text-sm">{consultation.phone}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-gray-500" />
                            <span className="text-sm">{consultation.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-gray-500" />
                            <span className="text-sm">{consultation.time}</span>
                          </div>
                        </div>

                        {consultation.company && (
                          <div className="flex items-center gap-2 mb-3">
                            <Building className="h-4 w-4 text-gray-500" />
                            <span className="text-sm font-medium">{consultation.company}</span>
                          </div>
                        )}

                        <div className="mb-3">
                          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Requested Services:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {JSON.parse(consultation.services).map((service: string, index: number) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {service}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {consultation.message && (
                          <div className="mb-4">
                            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                              Message:
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-3 rounded-md">
                              "{consultation.message}"
                            </p>
                          </div>
                        )}

                        <div className="text-xs text-gray-500">
                          Submitted: {new Date(consultation.created_at).toLocaleString()}
                        </div>
                      </div>

                      <div className="ml-6 flex flex-col gap-2">
                        <Button
                          size="sm"
                          variant={consultation.status === 'contacted' ? 'default' : 'outline'}
                          onClick={() => updateStatus(consultation.id, 'contacted')}
                          className="text-xs"
                        >
                          Mark Contacted
                        </Button>
                        <Button
                          size="sm"
                          variant={consultation.status === 'scheduled' ? 'default' : 'outline'}
                          onClick={() => updateStatus(consultation.id, 'scheduled')}
                          className="text-xs"
                        >
                          Mark Scheduled
                        </Button>
                        <Button
                          size="sm"
                          variant={consultation.status === 'completed' ? 'default' : 'outline'}
                          onClick={() => updateStatus(consultation.id, 'completed')}
                          className="text-xs"
                        >
                          Mark Completed
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
