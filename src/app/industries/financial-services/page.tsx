'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/layout/header'
import { DollarSign, Shield, TrendingUp, Users, BarChart3, CheckCircle, Zap } from 'lucide-react'

const services = [
  {
    icon: DollarSign,
    title: 'Financial Analytics',
    description: 'Advanced data analytics and AI-driven insights to optimize investment strategies and risk management.'
  },
  {
    icon: Shield,
    title: 'Regulatory Compliance',
    description: 'Ensure adherence to financial regulations with automated compliance monitoring and reporting systems.'
  },
  {
    icon: Lock,
    title: 'Cybersecurity Solutions',
    description: 'Robust security frameworks to protect sensitive financial data and prevent cyber threats.'
  },
  {
    icon: Zap,
    title: 'Process Automation',
    description: 'Streamline financial operations through intelligent automation of routine tasks and workflows.'
  },
  {
    icon: TrendingUp,
    title: 'Digital Banking',
    description: 'Modern digital banking platforms that enhance customer experience and operational efficiency.'
  },
  {
    icon: Users,
    title: 'Customer Experience',
    description: 'Personalized financial services platforms that improve client engagement and satisfaction.'
  }
]

const benefits = [
  'Reduced operational costs and risks',
  'Enhanced regulatory compliance',
  'Improved customer satisfaction',
  'Faster transaction processing',
  'Better fraud detection and prevention',
  'Data-driven decision making'
]

export default function FinancialServicesPage() {
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
              Financial <span className="text-[#eb5e28]">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transform your financial services with cutting-edge AI, automation, and engineering expertise that ensures secure, compliant, and efficient operations from initiation to deployment.
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
              Comprehensive financial technology solutions designed to modernize operations and drive sustainable growth in the financial sector.
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
                  {(() => {
                    const IconComponent = service.icon
                    return <IconComponent className="h-12 w-12 text-[#eb5e28] mb-6" />
                  })()}
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
                Financial <span className="text-[#eb5e28]">Innovation</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our team applies engineering, AI, and automation expertise to ensure your financial services initiatives achieve their goals efficiently and securely.
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
              <h3 className="text-2xl font-light mb-6">Modernize Your Operations</h3>
              <p className="mb-8 leading-relaxed">
                Let's discuss how we can help transform your financial services with secure, compliant, and innovative technology solutions.
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
