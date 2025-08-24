'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/layout/header'
import { BookOpen, Users, TrendingUp, Monitor, BarChart3, CheckCircle, Shield, GraduationCap } from 'lucide-react'

const services = [
  {
    icon: Monitor,
    title: 'Learning Management Systems',
    description: 'Modern LMS platforms that facilitate online learning, course management, and student engagement across all educational levels.'
  },
  {
    icon: BookOpen,
    title: 'Digital Learning Platforms',
    description: 'Interactive educational platforms with multimedia content, assessments, and personalized learning paths.'
  },
  {
    icon: Users,
    title: 'Student Information Systems',
    description: 'Comprehensive systems for managing student records, enrollment, grades, and administrative processes.'
  },
  {
    icon: BarChart3,
    title: 'Educational Analytics',
    description: 'Data-driven insights into student performance, learning outcomes, and institutional effectiveness.'
  },
  {
    icon: Shield,
    title: 'Secure Infrastructure',
    description: 'FERPA-compliant technology infrastructure that protects student data and ensures educational privacy.'
  },
  {
    icon: GraduationCap,
    title: 'Training Programs',
    description: 'Custom training solutions for corporate learning, professional development, and skill enhancement programs.'
  }
]

const benefits = [
  'Enhanced student engagement and outcomes',
  'Streamlined administrative processes',
  'Improved accessibility and flexibility',
  'Better data-driven decision making',
  'Reduced operational costs',
  'Scalable learning solutions'
]

export default function EducationTrainingPage() {
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
              Education & <span className="text-[#eb5e28]">Training</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Empower educational institutions with modern technology infrastructure and effective learning management systems that enhance student outcomes and streamline operations.
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
              Comprehensive educational technology solutions designed to modernize learning environments and improve educational outcomes.
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
                Educational <span className="text-[#eb5e28]">Innovation</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our educational technology solutions help institutions modernize their infrastructure and implement effective learning systems that improve outcomes for all stakeholders.
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
              <h3 className="text-2xl font-light mb-6">Transform Education</h3>
              <p className="mb-8 leading-relaxed">
                Let's discuss how we can help modernize your educational technology infrastructure and implement effective learning management systems.
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
