'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/layout/header'
import { Brain, TrendingUp, Clock, Users, BarChart3, Zap } from 'lucide-react'

const challenges = [
  'Manual data processing causing delays',
  'Limited insights from customer analytics',
  'Slow time-to-value for new features',
  'Difficulty scaling analytics operations'
]

const solutions = [
  {
    icon: Brain,
    title: 'AI-Powered Analytics Engine',
    description: 'Implemented machine learning algorithms to automatically process and analyze customer data in real-time.'
  },
  {
    icon: Zap,
    title: 'Automated Data Pipeline',
    description: 'Built intelligent data pipelines that automatically clean, transform, and prepare data for analysis.'
  },
  {
    icon: BarChart3,
    title: 'Predictive Insights Dashboard',
    description: 'Created intuitive dashboards that provide actionable insights and predictive analytics for business decisions.'
  }
]

const results = [
  {
    metric: '75%',
    description: 'Reduction in data processing time'
  },
  {
    metric: '3x',
    description: 'Faster time-to-value for new features'
  },
  {
    metric: '40%',
    description: 'Increase in customer engagement'
  },
  {
    metric: '60%',
    description: 'Improvement in prediction accuracy'
  }
]

export default function AIIntegrationCaseStudy() {
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
              AI Integration <span className="text-[#eb5e28]">Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Learn how AI integration can help tech companies accelerate time to value for their customer analytics platforms and transform business operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Challenge Section */}
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
                The <span className="text-[#eb5e28]">Challenge</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Many tech companies struggle with manual data processing and limited insights from their analytics platforms. These challenges can prevent scaling and lead to delayed decision-making and missed opportunities.
              </p>
              <ul className="space-y-4">
                {challenges.map((challenge, index) => (
                  <motion.li
                    key={challenge}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <div className="w-2 h-2 bg-[#eb5e28] rounded-full mr-4" />
                    <span className="text-foreground">{challenge}</span>
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
                <Brain className="h-12 w-12 text-[#eb5e28] mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground">AI Expertise</h3>
                  <p className="text-muted-foreground">Machine learning and data science specialists</p>
                </div>
              </div>
              <div className="flex items-center">
                <TrendingUp className="h-12 w-12 text-[#eb5e28] mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Focus Areas</h3>
                  <p className="text-muted-foreground">Analytics, automation, and intelligent insights</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
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
              Our <span className="text-[#eb5e28]">Solution</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We implemented a comprehensive AI-powered analytics solution that transformed their data processing capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background p-8 rounded-lg border border-border"
              >
                <solution.icon className="h-12 w-12 text-[#eb5e28] mb-6" />
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {solution.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
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
              Our <span className="text-[#eb5e28]">Capabilities</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our AI integration solutions can deliver significant improvements across key business areas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Brain className="h-16 w-16 text-[#eb5e28] mx-auto mb-4" />
              <p className="text-muted-foreground">Intelligent data processing</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Zap className="h-16 w-16 text-[#eb5e28] mx-auto mb-4" />
              <p className="text-muted-foreground">Automated workflows</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <BarChart3 className="h-16 w-16 text-[#eb5e28] mx-auto mb-4" />
              <p className="text-muted-foreground">Predictive analytics</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <TrendingUp className="h-16 w-16 text-[#eb5e28] mx-auto mb-4" />
              <p className="text-muted-foreground">Business growth insights</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#eb5e28] p-8 rounded-lg text-white text-center"
          >
            <h3 className="text-2xl font-light mb-6">Ready to Explore AI Integration?</h3>
            <p className="mb-8 leading-relaxed max-w-2xl mx-auto">
              Let's discuss how AI integration can help accelerate your time-to-value and transform your analytics capabilities.
            </p>
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-white text-[#eb5e28] hover:bg-white/90"
              asChild
            >
              <a href="/#consultation">
                Schedule Consultation
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
