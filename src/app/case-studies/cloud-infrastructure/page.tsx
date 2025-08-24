'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/layout/header'
import { Cloud, Server, Shield, Zap, BarChart3, TrendingUp } from 'lucide-react'

const challenges = [
  'Legacy infrastructure limiting growth',
  'High operational costs and maintenance',
  'Poor scalability during peak periods',
  'Security vulnerabilities and compliance issues'
]

const solutions = [
  {
    icon: Cloud,
    title: 'Cloud-Native Architecture',
    description: 'Designed and implemented a modern cloud-native infrastructure using microservices and containerization.'
  },
  {
    icon: Server,
    title: 'Auto-Scaling Systems',
    description: 'Built intelligent auto-scaling solutions that automatically adjust resources based on demand patterns.'
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'Implemented robust security frameworks and compliance monitoring to protect sensitive data.'
  }
]

const results = [
  {
    metric: '90%',
    description: 'Reduction in infrastructure costs'
  },
  {
    metric: '99.9%',
    description: 'System uptime achieved'
  },
  {
    metric: '5x',
    description: 'Faster deployment cycles'
  },
  {
    metric: '80%',
    description: 'Reduction in manual operations'
  }
]

export default function CloudInfrastructureCaseStudy() {
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
              Scalable <span className="text-[#eb5e28]">Cloud Infrastructure</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover how scalable cloud infrastructure can help growing companies organize and manage their expanding operations with improved efficiency and reduced costs.
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
                Many rapidly growing companies struggle with legacy infrastructure that can't scale with expanding operations. High maintenance costs, frequent downtime, and security concerns often hinder growth potential.
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
                <Cloud className="h-12 w-12 text-[#eb5e28] mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Cloud Expertise</h3>
                  <p className="text-muted-foreground">Cloud architects and DevOps specialists</p>
                </div>
              </div>
              <div className="flex items-center">
                <TrendingUp className="h-12 w-12 text-[#eb5e28] mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Focus Areas</h3>
                  <p className="text-muted-foreground">Scalability, security, and cost optimization</p>
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
              We designed and implemented a comprehensive cloud infrastructure solution that addressed all scalability and security concerns.
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
              Our cloud infrastructure solutions can deliver significant improvements in performance, cost, and operational efficiency.
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
              <Cloud className="h-16 w-16 text-[#eb5e28] mx-auto mb-4" />
              <p className="text-muted-foreground">Cloud-native architecture</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Server className="h-16 w-16 text-[#eb5e28] mx-auto mb-4" />
              <p className="text-muted-foreground">Auto-scaling systems</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Shield className="h-16 w-16 text-[#eb5e28] mx-auto mb-4" />
              <p className="text-muted-foreground">Security & compliance</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <TrendingUp className="h-16 w-16 text-[#eb5e28] mx-auto mb-4" />
              <p className="text-muted-foreground">Cost optimization</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#eb5e28] p-8 rounded-lg text-white text-center"
          >
            <h3 className="text-2xl font-light mb-6">Scale Your Infrastructure with Confidence</h3>
            <p className="mb-8 leading-relaxed max-w-2xl mx-auto">
              Let's discuss how scalable cloud infrastructure can help your company organize and manage expanding operations efficiently.
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
