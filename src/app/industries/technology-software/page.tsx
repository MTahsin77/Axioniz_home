'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/layout/header'
import { Code, Database, Cloud, Zap, Users, TrendingUp } from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'Custom Software Development',
    description: 'Build scalable, modern applications tailored to your specific business needs using cutting-edge technologies.'
  },
  {
    icon: Database,
    title: 'AI & Machine Learning',
    description: 'Implement intelligent solutions that automate processes and provide valuable insights from your data.'
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'Design and deploy robust cloud architectures that scale with your business growth.'
  },
  {
    icon: Zap,
    title: 'Process Automation',
    description: 'Streamline workflows and eliminate manual tasks through intelligent automation solutions.'
  },
  {
    icon: Users,
    title: 'DevOps & CI/CD',
    description: 'Implement modern development practices to accelerate deployment and improve code quality.'
  },
  {
    icon: TrendingUp,
    title: 'Performance Optimization',
    description: 'Enhance system performance and user experience through advanced optimization techniques.'
  }
]

const benefits = [
  'Accelerated time-to-market for new products',
  'Reduced operational costs through automation',
  'Improved scalability and system reliability',
  'Enhanced data security and compliance',
  'Better user experience and customer satisfaction',
  'Competitive advantage through innovation'
]

export default function TechnologySoftwarePage() {
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
              Technology & <span className="text-[#eb5e28]">Software</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transform your technology organization with custom AI solutions, modern software development practices, and intelligent automation that drives innovation and operational excellence.
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
              Comprehensive technology solutions designed to modernize your development processes and accelerate digital transformation.
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
                Why Choose <span className="text-[#eb5e28]">Axioniz</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our team of engineers and data scientists brings fresh perspectives to technology challenges, helping you modernize operations and achieve sustainable growth.
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
              <h3 className="text-2xl font-light mb-6">Ready to Transform?</h3>
              <p className="mb-8 leading-relaxed">
                Let's discuss how we can modernize your technology stack and accelerate your digital transformation journey.
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
