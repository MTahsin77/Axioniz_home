'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/layout/header'
import { Zap, Cog, BarChart3, Clock, TrendingUp, Users, Workflow, CheckCircle } from 'lucide-react'

const challenges = [
  'Manual, time-consuming workflows',
  'Inconsistent process execution',
  'High error rates in repetitive tasks',
  'Limited visibility into operations'
]

const solutions = [
  {
    icon: Workflow,
    title: 'Intelligent Process Design',
    description: 'Analyzed existing workflows and designed optimized, automated processes that eliminate bottlenecks and reduce errors.'
  },
  {
    icon: Zap,
    title: 'Automation Implementation',
    description: 'Deployed robotic process automation (RPA) and intelligent automation tools to handle repetitive tasks.'
  },
  {
    icon: BarChart3,
    title: 'Performance Monitoring',
    description: 'Implemented real-time monitoring and analytics to track process performance and identify improvement opportunities.'
  }
]

const results = [
  {
    metric: '85%',
    description: 'Reduction in manual processing time'
  },
  {
    metric: '95%',
    description: 'Decrease in process errors'
  },
  {
    metric: '70%',
    description: 'Improvement in operational efficiency'
  },
  {
    metric: '50%',
    description: 'Reduction in operational costs'
  }
]

export default function ProcessAutomationCaseStudy() {
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
              Process <span className="text-[#eb5e28]">Automation</span> Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore how process automation can streamline and standardize workflows, dramatically improving efficiency and reducing operational costs.
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
                Many companies struggle with inefficient manual processes that consume valuable resources and create inconsistencies across operations. A comprehensive automation strategy can improve efficiency and standardize workflows.
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
                <Zap className="h-12 w-12 text-[#eb5e28] mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Automation Expertise</h3>
                  <p className="text-muted-foreground">Process automation and RPA specialists</p>
                </div>
              </div>
              <div className="flex items-center">
                <BarChart3 className="h-12 w-12 text-[#eb5e28] mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Focus Areas</h3>
                  <p className="text-muted-foreground">Workflow optimization and performance monitoring</p>
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
              We implemented a comprehensive process automation strategy that transformed their operational efficiency.
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
              Our process automation solutions can deliver remarkable improvements in efficiency, accuracy, and cost reduction.
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
              <Workflow className="h-16 w-16 text-[#eb5e28] mx-auto mb-4" />
              <p className="text-muted-foreground">Intelligent process design</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Zap className="h-16 w-16 text-[#eb5e28] mx-auto mb-4" />
              <p className="text-muted-foreground">RPA implementation</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <BarChart3 className="h-16 w-16 text-[#eb5e28] mx-auto mb-4" />
              <p className="text-muted-foreground">Performance monitoring</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <CheckCircle className="h-16 w-16 text-[#eb5e28] mx-auto mb-4" />
              <p className="text-muted-foreground">Quality assurance</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#eb5e28] p-8 rounded-lg text-white text-center"
          >
            <h3 className="text-2xl font-light mb-6">Automate Your Operations</h3>
            <p className="mb-8 leading-relaxed max-w-2xl mx-auto">
              Let's discuss how process automation can streamline your workflows and improve operational efficiency.
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
