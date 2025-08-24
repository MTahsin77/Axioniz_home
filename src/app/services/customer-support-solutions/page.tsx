'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/layout/header'
import { MessageCircle, Bot, Users, Clock, CheckCircle, ArrowRight } from 'lucide-react'

const benefits = [
  {
    icon: MessageCircle,
    title: 'Multi-Channel Support',
    description: 'Unified support across chat, email, phone, and social media platforms for seamless customer experience.'
  },
  {
    icon: Bot,
    title: 'AI-Powered Automation',
    description: 'Intelligent chatbots and automated responses to handle common queries and reduce response times.'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Advanced ticketing systems that enable efficient team collaboration and case management.'
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Round-the-clock support capabilities to serve customers across different time zones.'
  }
]

const services = [
  'AI-Powered Chatbot Development',
  'Help Desk and Ticketing Systems',
  'Live Chat Integration',
  'Knowledge Base Creation',
  'Customer Feedback Systems',
  'Support Analytics and Reporting'
]

export default function CustomerSupportSolutionsService() {
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
              Customer Support <span className="text-[#eb5e28]">Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Advanced customer support systems including AI-powered chatbots and help desk solutions to enhance customer satisfaction and streamline support operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-light text-foreground mb-6">
                Support <span className="text-[#eb5e28]">Services</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We build comprehensive customer support solutions that improve response times, enhance customer satisfaction, and streamline your support operations.
              </p>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <motion.li
                    key={service}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <CheckCircle className="h-5 w-5 text-[#eb5e28] mr-3 flex-shrink-0" />
                    <span className="text-foreground">{service}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-muted/30 p-8 rounded-lg"
            >
              <div className="flex items-center mb-6">
                <Bot className="h-12 w-12 text-[#eb5e28] mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground">AI Integration</h3>
                  <p className="text-muted-foreground">Advanced AI and automation specialists</p>
                </div>
              </div>
              <div className="flex items-center">
                <Users className="h-12 w-12 text-[#eb5e28] mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Customer Experience</h3>
                  <p className="text-muted-foreground">Focus on enhancing customer satisfaction</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-light text-foreground mb-4">
              Enhanced Customer <span className="text-[#eb5e28]">Experience</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform your customer support with intelligent solutions that provide faster responses and better service quality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background p-8 rounded-lg border border-border hover:border-[#eb5e28]/20 transition-colors"
              >
                <benefit.icon className="h-12 w-12 text-[#eb5e28] mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#eb5e28] p-8 rounded-lg text-white text-center"
          >
            <h3 className="text-2xl font-light mb-6">Ready to Enhance Your Customer Support?</h3>
            <p className="mb-8 leading-relaxed max-w-2xl mx-auto">
              Let's discuss how our customer support solutions can improve your customer experience and operational efficiency.
            </p>
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-white text-[#eb5e28] hover:bg-white/90"
              asChild
            >
              <a href="/#consultation">
                Schedule Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
