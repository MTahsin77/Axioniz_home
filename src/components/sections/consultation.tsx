'use client'

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
  Headphones 
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
  company: z.string().min(2, 'Company name must be at least 2 characters'),
  message: z.string().optional(),
  gdprConsent: z.boolean().optional()
})

type FormData = z.infer<typeof formSchema>

export function Consultation() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [selectedTime, setSelectedTime] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const { register, handleSubmit, formState: { errors }, watch, setValue, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const onSubmit = async (data: FormData) => {
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

      if (result.success) {
        // Reset form and show success message
        reset()
        setSelectedServices([])
        setCurrentStep(1)
        alert('Consultation request submitted successfully! We will contact you within 24 hours.')
      } else {
        alert('Failed to submit consultation request. Please try again.')
      }
    } catch (error) {
      console.error('Submission error:', error)
      alert('An error occurred. Please try again.')
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
      <section id="consultation" className="py-24 bg-muted/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/50 mb-8">
              <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-400" />
            </div>
            
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Consultation Booked Successfully!
            </h2>
            
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  What happens next?
                </h3>
                
                <ul className="text-left space-y-4 text-muted-foreground">
                  <li>• You'll receive a confirmation email within 5 minutes</li>
                  <li>• Our team will review your requirements and prepare for the consultation</li>
                  <li>• We'll send you a calendar invite with the meeting link 24 hours before</li>
                  <li>• During the consultation, we'll discuss your project in detail</li>
                  <li>• We'll provide you with a customized proposal within 48 hours</li>
                  <li>• We'll contact you if we need any additional information</li>
                </ul>
              </CardContent>
            </Card>
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

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <motion.div
                  className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                    currentStep >= step.number
                      ? 'bg-[#eb5e28] border-[#eb5e28] text-white'
                      : 'bg-background border-border text-muted-foreground'
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  <step.icon className={`h-5 w-5 ${
                    currentStep >= step.number ? 'text-white' : ''
                  }`} />
                </motion.div>
                
                <div className="ml-3 hidden sm:block">
                  <p className={`text-sm font-medium ${
                    currentStep >= step.number ? 'text-[#eb5e28]' : 'text-muted-foreground'
                  }`}>
                    Step {step.number}
                  </p>
                  <p className={`text-xs ${
                    currentStep >= step.number ? 'text-foreground' : 'text-muted-foreground'
                  }`}>
                    {step.title}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className={`w-8 sm:w-16 h-0.5 mx-4 transition-colors duration-300 ${
                  currentStep > step.number ? 'bg-[#eb5e28]' : 'bg-border'
                }`} />
                )}
              </div>
            ))}
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
                                    : 'bg-transparent text-[#eb5e28] border-[#eb5e28] hover:bg-[#eb5e28]/10 dark:bg-transparent dark:text-[#eb5e28] dark:border-[#eb5e28]'
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
                      type="submit"
                      className="flex items-center px-8 bg-[#eb5e28] hover:bg-[#eb5e28]/90 text-white dark:text-gray-300"
                    >
                      Book Consultation
                      <Calendar className="h-4 w-4 ml-2" />
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
