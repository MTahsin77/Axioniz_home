'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/layout/header'
import { Heart, Shield, Database, Users, TrendingUp, CheckCircle, BarChart3, FileText } from 'lucide-react'

const services = [
  {
    icon: Database,
    title: 'Patient Data Management',
    description: 'Secure, HIPAA-compliant systems for managing patient records and medical data with advanced analytics capabilities.'
  },
  {
    icon: Shield,
    title: 'Compliance & Security',
    description: 'Ensure regulatory compliance with HIPAA, HITECH, and other healthcare standards through robust security frameworks.'
  },
  {
    icon: Heart,
    title: 'Telehealth Solutions',
    description: 'Modern telemedicine platforms that connect patients and providers with seamless, secure communication tools.'
  },
  {
    icon: BarChart3,
    title: 'Healthcare Analytics',
    description: 'Transform medical data into actionable insights for improved patient outcomes and operational efficiency.'
  },
  {
    icon: Users,
    title: 'Practice Management',
    description: 'Streamline administrative processes, scheduling, and billing systems for healthcare practices of all sizes.'
  },
  {
    icon: FileText,
    title: 'Electronic Health Records',
    description: 'Implement and optimize EHR systems that improve care coordination and clinical decision-making.'
  }
]

const benefits = [
  'Enhanced patient care and safety',
  'Improved operational efficiency',
  'Reduced administrative burden',
  'Better compliance and risk management',
  'Streamlined workflows and processes',
  'Data-driven clinical insights'
]

export default function HealthcareMedicalPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-[#eb5e28]/10 to-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-foreground mb-6">
              Healthcare & <span className="text-[#eb5e28]">Medical</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Empower healthcare organizations with secure, compliant technology solutions that improve patient outcomes, streamline operations, and enhance care delivery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-light text-foreground mb-4">
              Our <span className="text-[#eb5e28]">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive healthcare technology solutions designed to meet the unique needs of medical organizations and improve patient care.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-muted/30 p-8 rounded-lg hover:shadow-lg transition-all duration-300 h-full border border-border hover:border-[#eb5e28]/30">
                  <service.icon className="h-12 w-12 text-[#eb5e28] mb-6" />
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-light text-foreground mb-6">
                Healthcare <span className="text-[#eb5e28]">Excellence</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our healthcare technology solutions are designed with patient safety, regulatory compliance, and operational efficiency at their core.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <div className="w-2 h-2 bg-[#eb5e28] rounded-full mr-4" />
                    <span className="text-foreground">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-[#eb5e28] p-8 rounded-lg text-white"
            >
              <h3 className="text-2xl font-light mb-6">Improve Patient Care</h3>
              <p className="mb-8 leading-relaxed">
                Let's discuss how our healthcare technology solutions can enhance your organization's ability to deliver exceptional patient care.
              </p>
              <Button 
                variant="secondary" 
                size="lg"
                className="w-full bg-white text-[#eb5e28] hover:bg-white/90"
                asChild
              >
                <a href="/#consultation">
                  Schedule Consultation
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
