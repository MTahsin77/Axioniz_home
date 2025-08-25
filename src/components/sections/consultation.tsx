'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { 
  Calendar, 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  User, 
  Mail, 
  Phone, 
  Building, 
  MessageSquare, 
  CheckCircle, 
  Code, 
  Smartphone, 
  Globe, 
  Database, 
  Shield, 
  Zap, 
  Brain, 
  Server, 
  Headphones,
  Rocket,
  Sparkles,
  Search,
  MessageCircle,
  FileText,
  Handshake
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { DatePicker } from '@/components/ui/date-picker'
import { Checkbox } from '@/components/ui/checkbox'

const services = [
  { id: 'ai-integration', name: 'AI Integration', icon: Brain, description: 'LLM integration and AI workflows' },
  { id: 'custom-software', name: 'Custom Software', icon: Code, description: 'Tailored software solutions' },
  { id: 'server-maintenance', name: 'Server Maintenance', icon: Server, description: 'Hosting and server management' },
  { id: 'customer-support', name: 'Customer Support', icon: Headphones, description: 'Support systems and chatbots' }
]

const timeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
]

const formSchema = z.object({
  date: z.string().min(1, 'Please select a date'),
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  company: z.string().optional(),
  message: z.string().optional(),
  gdprConsent: z.boolean().optional()
})

type FormData = z.infer<typeof formSchema>

export function Consultation() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [selectedTime, setSelectedTime] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [validationError, setValidationError] = useState('')

  const { register, handleSubmit, formState: { errors }, watch, setValue, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const nextStep = () => {
    setValidationError('') // Clear previous errors
    
    // Add validation for each step when user tries to proceed
    if (currentStep === 1 && selectedServices.length === 0) {
      setValidationError('Please select at least one service before continuing.')
      return
    }
    if (currentStep === 2 && (!watch('date') || !selectedTime)) {
      setValidationError('Please select both a date and time before continuing.')
      return
    }
    if (currentStep === 3) {
      const formData = watch()
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
        setValidationError('Please fill in all required contact information (First Name, Last Name, Email, Phone).')
        return
      }
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (formData.email && !emailRegex.test(formData.email)) {
        setValidationError('Please enter a valid email address.')
        return
      }
    }
    if (currentStep < 4) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    setValidationError('') // Clear errors when going back
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const validateSubmission = () => {
    // Validate services
    if (selectedServices.length === 0) {
      setValidationError('Please select at least one service before submitting.')
      setCurrentStep(1)
      return false
    }

    // Validate date and time
    if (!watch('date') || !selectedTime) {
      setValidationError('Please select both a date and time before submitting.')
      setCurrentStep(2)
      return false
    }

    // Validate required contact fields
    const formData = watch()
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      setValidationError('Please fill in all required contact information (First Name, Last Name, Email, Phone).')
      setCurrentStep(3)
      return false
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setValidationError('Please enter a valid email address.')
      setCurrentStep(3)
      return false
    }

    return true
  }

  const onSubmit = async (data: FormData) => {
    // Validate before submission
    if (!validateSubmission()) {
      return
    }

    setIsSubmitting(true)
    try {
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          services: selectedServices,
          date: data.date,
          time: selectedTime,
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          company: data.company,
          message: data.message,
          gdprConsent: data.gdprConsent,
        }),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        // Show success screen
        setIsSubmitted(true)
        setValidationError('') // Clear any previous errors
        // Reset form data after showing success
        setTimeout(() => {
          reset()
          setSelectedServices([])
          setSelectedTime('')
          setCurrentStep(1)
        }, 100)
      } else {
        setValidationError(`Failed to submit consultation request: ${result.message || 'Please try again.'}`)
      }
    } catch (error) {
      console.error('Submission error:', error)
      setValidationError('An error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const steps = [
    { number: 1, title: 'Services', icon: Building },
    { number: 2, title: 'Schedule', icon: Calendar },
    { number: 3, title: 'Contact', icon: User },
    { number: 4, title: 'Details', icon: MessageSquare }
  ]

  // Success screen
  if (isSubmitted) {
    return (
      <section id="consultation" className="py-24 bg-gradient-to-br from-[#eb5e28]/5 via-background to-[#eb5e28]/10 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-[#eb5e28]/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#eb5e28]/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            {/* Animated Logo/Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                duration: 1, 
                delay: 0.2,
                type: "spring",
                stiffness: 200,
                damping: 20
              }}
              className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-[#eb5e28] to-[#eb5e28]/80 mb-8 shadow-2xl"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <CheckCircle className="h-12 w-12 text-white" />
              </motion.div>
            </motion.div>
            
            {/* Main heading with staggered animation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-2">
                <span className="bg-gradient-to-r from-[#eb5e28] to-[#eb5e28]/80 bg-clip-text text-transparent">
                  Success!
                </span>
              </h2>
              <motion.p
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-xl text-muted-foreground mb-8"
              >
                Your consultation has been successfully booked
              </motion.p>
            </motion.div>
            
            {/* Premium card with enhanced styling */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Card className="max-w-3xl mx-auto bg-gradient-to-br from-background via-background to-[#eb5e28]/5 border border-[#eb5e28]/20 shadow-2xl backdrop-blur-sm">
                <CardContent className="p-8 sm:p-12">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                  >
                    <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                      What happens next?
                    </h3>
                    
                    <div className="grid gap-6 text-left">
                      {[
                        { icon: Mail, text: "You'll receive a confirmation email within 5 minutes", delay: 1.2 },
                        { icon: Search, text: "Our expert team will review your requirements and prepare for the consultation", delay: 1.4 },
                        { icon: Calendar, text: "We'll send you a calendar invite with the meeting link 24 hours before", delay: 1.6 },
                        { icon: MessageCircle, text: "During the consultation, we'll discuss your project in detail", delay: 1.8 },
                        { icon: FileText, text: "We'll provide you with a customized proposal within 48 hours", delay: 2.0 },
                        { icon: Handshake, text: "We'll contact you if we need any additional information", delay: 2.2 }
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: item.delay }}
                          className="flex items-start gap-4 p-4 rounded-lg bg-[#eb5e28]/5 hover:bg-[#eb5e28]/10 transition-colors duration-300"
                        >
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#eb5e28]/10 flex items-center justify-center">
                            <item.icon className="h-5 w-5 text-[#eb5e28]" />
                          </div>
                          <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                        </motion.div>
                      ))}
                    </div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 2.4 }}
                      className="mt-10 text-center"
                    >
                      <div className="mb-6">
                        <p className="text-sm text-muted-foreground mb-2">Ready to transform your business?</p>
                        <div className="w-20 h-1 bg-gradient-to-r from-[#eb5e28] to-[#eb5e28]/60 mx-auto rounded-full"></div>
                      </div>
                      
                      <Button
                        onClick={() => {
                          setIsSubmitted(false)
                          setValidationError('')
                          reset()
                          setSelectedServices([])
                          setSelectedTime('')
                          setCurrentStep(1)
                        }}
                        className="bg-gradient-to-r from-[#eb5e28] to-[#eb5e28]/90 hover:from-[#eb5e28]/90 hover:to-[#eb5e28]/80 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                      >
                        <Calendar className="h-4 w-4 mr-2" />
                        Book Another Consultation
                      </Button>
                    </motion.div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="consultation" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Book Your Free <span className="text-[#eb5e28]">Consultation</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how we can transform your business with cutting-edge technology solutions.
          </p>
        </motion.div>

        {/* Validation Error Alert */}
        {validationError && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
          >
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-red-800 dark:text-red-200">
                  {validationError}
                </p>
              </div>
              <div className="ml-auto pl-3">
                <div className="-mx-1.5 -my-1.5">
                  <button
                    type="button"
                    onClick={() => setValidationError('')}
                    className="inline-flex bg-red-50 dark:bg-red-900/20 rounded-md p-1.5 text-red-500 hover:bg-red-100 dark:hover:bg-red-900/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    <span className="sr-only">Dismiss</span>
                    <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex justify-center">
            <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
              {steps.map((step, index) => (
                <React.Fragment key={step.number}>
                  <div className="flex flex-col items-center">
                    <motion.div
                      className={`flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border-2 transition-all duration-300 ${
                        currentStep >= step.number
                          ? 'bg-[#eb5e28] border-[#eb5e28] text-white'
                          : 'bg-background border-border text-muted-foreground'
                      }`}
                      whileHover={{ scale: 1.05 }}
                    >
                      <step.icon className={`h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 ${
                        currentStep >= step.number ? 'text-white' : ''
                      }`} />
                    </motion.div>
                    
                    <div className="mt-3 text-center">
                      <p className={`text-xs sm:text-sm font-medium ${
                        currentStep >= step.number ? 'text-[#eb5e28]' : 'text-muted-foreground'
                      }`}>
                        <span className="hidden sm:inline">Step </span>{step.number}
                      </p>
                      <p className={`text-xs sm:text-sm ${
                        currentStep >= step.number ? 'text-foreground' : 'text-muted-foreground'
                      }`} style={{ wordBreak: 'keep-all', hyphens: 'none', whiteSpace: 'nowrap' }}>
                        {step.title}
                      </p>
                    </div>
                  </div>

                  {index < steps.length - 1 && (
                    <div className={`w-8 sm:w-12 md:w-16 lg:w-20 h-0.5 transition-colors duration-300 ${
                      currentStep > step.number ? 'bg-[#eb5e28]' : 'bg-border'
                    }`} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Form */}
        <Card className="shadow-2xl border-[#eb5e28]">
          <CardContent className="p-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit(onSubmit)}>
                <AnimatePresence mode="wait">
                  {/* Step 1: Select Services */}
                  {currentStep === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-2xl font-bold text-foreground mb-6">
                        Which services are you interested in<span className="text-[#eb5e28]">?</span>
                      </h3>

                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        {services.map((service) => (
                          <motion.div
                            key={service.id}
                            className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-lg ${
                              selectedServices.includes(service.id)
                                ? 'bg-[#eb5e28] border-[#eb5e28]'
                                : 'bg-[#eb5e28]/10 border-[#eb5e28]/30 hover:bg-[#eb5e28]/20 hover:border-[#eb5e28]'
                            }`}
                            onClick={() => {
                              if (selectedServices.includes(service.id)) {
                                setSelectedServices(selectedServices.filter(s => s !== service.id))
                              } else {
                                setSelectedServices([...selectedServices, service.id])
                              }
                            }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className="flex items-center mb-3">
                              <service.icon className={`h-6 w-6 mr-3 ${
                                selectedServices.includes(service.id) ? 'text-white' : 'text-[#eb5e28]'
                              }`} />
                              <h4 className={`font-semibold ${
                                selectedServices.includes(service.id) ? 'text-white' : 'text-[#eb5e28]'
                              }`}>
                                {service.name}
                              </h4>
                            </div>
                            <p className={`text-sm ${
                              selectedServices.includes(service.id) ? 'text-white/80' : 'text-[#eb5e28]/80'
                            }`}>
                              {service.description}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Select Date & Time */}
                  {currentStep === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-2xl font-bold text-foreground mb-6">
                        Choose your preferred date and <span className="text-[#eb5e28]">time</span>
                      </h3>

                      
                      <div className="space-y-6">
                        <div>
                          <Label className="text-sm font-medium text-foreground mb-2 block">
                            Preferred Date
                          </Label>
                          <DatePicker
                            date={watch('date') ? new Date(watch('date')) : undefined}
                            onDateChange={(date) => {
                              setValue('date', date ? date.toISOString().split('T')[0] : '')
                            }}
                            placeholder="DD/MM/YYYY"
                            minDate={new Date()}
                            className="w-full"
                          />
                          {errors.date && (
                            <p className="text-destructive text-sm mt-1">{errors.date.message}</p>
                          )}
                        </div>

                        <div>
                          <Label className="text-sm font-medium text-foreground mb-2 block">
                            Preferred Time
                          </Label>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {timeSlots.map((time) => (
                              <Button
                                key={time}
                                type="button"
                                variant="outline"
                                onClick={() => setSelectedTime(time)}
                                className={`w-full transition-all duration-300 ${
                                  selectedTime === time 
                                    ? 'bg-[#eb5e28] text-white border-[#eb5e28] hover:bg-[#eb5e28]/90 dark:bg-[#eb5e28] dark:text-white dark:border-[#eb5e28]' 
                                    : 'bg-transparent text-[#eb5e28] border-black dark:border-white hover:bg-[#eb5e28]/10 hover:border-[#eb5e28] dark:bg-transparent dark:text-[#eb5e28]'
                                }`}
                              >
                                {time}
                              </Button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Contact Information */}
                  {currentStep === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-2xl font-bold text-foreground mb-6">
                        Tell us about <span className="text-[#eb5e28]">yourself</span>
                      </h3>
                      
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="firstName" className="text-sm font-medium text-foreground mb-2 block">
                              First Name
                            </Label>
                            <Input
                              id="firstName"
                              {...register('firstName')}
                              placeholder="John"
                              className="text-[#eb5e28] border-black dark:border-white hover:border-[#eb5e28] focus:border-[#eb5e28] focus:ring-[#eb5e28]/20 placeholder:text-[#eb5e28]/60"
                            />
                            {errors.firstName && (
                              <p className="text-destructive text-sm mt-1">{errors.firstName.message}</p>
                            )}
                          </div>
                          
                          <div>
                            <Label htmlFor="lastName" className="text-sm font-medium text-foreground mb-2 block">
                              Last Name
                            </Label>
                            <Input
                              id="lastName"
                              {...register('lastName')}
                              placeholder="Doe"
                              className="text-[#eb5e28] border-black dark:border-white hover:border-[#eb5e28] focus:border-[#eb5e28] focus:ring-[#eb5e28]/20 placeholder:text-[#eb5e28]/60"
                            />
                            {errors.lastName && (
                              <p className="text-destructive text-sm mt-1">{errors.lastName.message}</p>
                            )}
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                            Email Address
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            {...register('email')}
                            placeholder="john@company.com"
                            className="text-[#eb5e28] border-black dark:border-white hover:border-[#eb5e28] focus:border-[#eb5e28] focus:ring-[#eb5e28]/20 placeholder:text-[#eb5e28]/60"
                          />
                          {errors.email && (
                            <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                          )}
                        </div>

                        <div>
                          <Label htmlFor="phone" className="text-sm font-medium text-foreground mb-2 block">
                            Phone Number
                          </Label>
                          <Input
                            id="phone"
                            type="tel"
                            {...register('phone')}
                            placeholder="+1 (555) 123-4567"
                            className="text-[#eb5e28] border-black dark:border-white hover:border-[#eb5e28] focus:border-[#eb5e28] focus:ring-[#eb5e28]/20 placeholder:text-[#eb5e28]/60"
                          />
                          {errors.phone && (
                            <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>
                          )}
                        </div>

                        <div>
                          <Label htmlFor="company" className="text-sm font-medium text-foreground mb-2 block">
                            Company Name
                          </Label>
                          <Input
                            id="company"
                            {...register('company')}
                            placeholder="Acme Corp"
                            className="text-[#eb5e28] border-black dark:border-white hover:border-[#eb5e28] focus:border-[#eb5e28] focus:ring-[#eb5e28]/20 placeholder:text-[#eb5e28]/60"
                          />
                          {errors.company && (
                            <p className="text-destructive text-sm mt-1">{errors.company.message}</p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 4: Additional Details */}
                  {currentStep === 4 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-2xl font-bold text-foreground mb-6">
                        Additional <span className="text-[#eb5e28]">Information</span>
                      </h3>
                      
                      <div className="space-y-6">
                        <div>
                          <Label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">
                            Tell us about your project or requirements
                          </Label>
                          <Textarea
                            id="message"
                            {...register('message')}
                            placeholder="Describe your project, goals, timeline, or any specific requirements..."
                            rows={5}
                            className="text-[#eb5e28] border-black dark:border-white hover:border-[#eb5e28] focus:border-[#eb5e28] focus:ring-[#eb5e28]/20 placeholder:text-[#eb5e28]/60"
                          />
                          {errors.message && (
                            <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
                          )}
                        </div>

                        <div className="flex items-start space-x-3">
                          <Checkbox
                            id="gdprConsent"
                            checked={watch('gdprConsent') || false}
                            onCheckedChange={(checked) => setValue('gdprConsent', !!checked)}
                            className="border-[#eb5e28] data-[state=checked]:bg-[#eb5e28] data-[state=checked]:border-[#eb5e28]"
                          />
                          <Label htmlFor="gdprConsent" className="text-sm text-muted-foreground leading-relaxed">
                            I agree to the{' '}
                            <a href="/privacy" className="text-[#eb5e28] hover:underline hover:text-[#eb5e28]/80">Privacy Policy</a>{' '}
                            and consent to being contacted about this consultation.
                          </Label>
                        </div>
                        {errors.gdprConsent && (
                          <p className="text-destructive text-sm">{errors.gdprConsent.message}</p>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8 pt-6 border-t border-[#eb5e28]">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className="flex items-center"
                  >
                    <ChevronLeft className="h-4 w-4 mr-2" />
                    Previous
                  </Button>

                  {currentStep < 4 ? (
                    <Button
                      type="button"
                      onClick={nextStep}
                      className="flex items-center bg-[#eb5e28] hover:bg-[#eb5e28]/90 text-white dark:text-gray-300"
                    >
                      Next
                      <ChevronRight className="h-4 w-4 ml-2" />
                    </Button>
                  ) : (
                    <Button
                      type="button"
                      onClick={async (e) => {
                        e.preventDefault()
                        // Get form data directly and submit
                        const formData = watch()
                        await onSubmit(formData)
                      }}
                      disabled={isSubmitting}
                      className="flex items-center px-8 bg-[#eb5e28] hover:bg-[#eb5e28]/90 text-white dark:text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Submitting...
                        </>
                      ) : (
                        <>
                          Book Consultation
                          <Calendar className="h-4 w-4 ml-2" />
                        </>
                      )}
                    </Button>
                  )}
                </div>
              </form>
            </motion.div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
