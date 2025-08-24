'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/layout/header'
import { Code, GitBranch, TestTube, Zap, BarChart3, TrendingUp, Shield, CheckCircle } from 'lucide-react'

const challenges = [
  'Slow deployment cycles and releases',
  'Inconsistent code quality standards',
  'Manual testing and deployment processes',
  'Lack of collaboration between teams'
]

const solutions = [
  {
    icon: GitBranch,
    title: 'CI/CD Pipeline Implementation',
    description: 'Established automated continuous integration and deployment pipelines that streamline code delivery from development to production.'
  },
  {
    icon: Code,
    title: 'Code Quality Standards',
    description: 'Implemented comprehensive code review processes, automated testing, and quality gates to ensure consistent code standards.'
  },
  {
    icon: Shield,
    title: 'DevSecOps Integration',
    description: 'Integrated security testing and compliance checks directly into the development workflow for enhanced security.'
  }
]

const results = [
  {
    metric: '80%',
    description: 'Faster deployment cycles'
  },
  {
    metric: '90%',
    description: 'Reduction in production bugs'
  },
  {
    metric: '60%',
    description: 'Improvement in code quality scores'
  },
  {
    metric: '75%',
    description: 'Increase in developer productivity'
  }
]

export default function DevelopmentPracticesCaseStudy() {
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
              Modern <span className="text-[#eb5e28]">Development Practices</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Learn how modern development practices can reduce deployment time and improve code quality, transforming development workflows.
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
                Many software development teams struggle with slow deployment cycles, inconsistent code quality, and frequent production issues. Modern development practices can improve efficiency and reliability.
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
                <Code className="h-12 w-12 text-[#eb5e28] mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground">DevOps Expertise</h3>
                  <p className="text-muted-foreground">Modern development and deployment specialists</p>
                </div>
              </div>
              <div className="flex items-center">
                <TrendingUp className="h-12 w-12 text-[#eb5e28] mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Focus Areas</h3>
                  <p className="text-muted-foreground">CI/CD, testing, and code quality</p>
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
              Our <span className="text-[#eb5e28]">Capabilities</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our modern development practices can deliver significant improvements in deployment speed, code quality, and team productivity.
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
              The <span className="text-[#eb5e28]">Results</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our modern development practices implementation delivered significant improvements in deployment speed and code quality.
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
              <Code className="h-16 w-16 text-[#eb5e28] mx-auto mb-4" />
              <p className="text-muted-foreground">CI/CD pipelines</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <CheckCircle className="h-16 w-16 text-[#eb5e28] mx-auto mb-4" />
              <p className="text-muted-foreground">Automated testing</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <BarChart3 className="h-16 w-16 text-[#eb5e28] mx-auto mb-4" />
              <p className="text-muted-foreground">Code quality metrics</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Zap className="h-16 w-16 text-[#eb5e28] mx-auto mb-4" />
              <p className="text-muted-foreground">Rapid deployment</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#eb5e28] p-8 rounded-lg text-white text-center"
          >
            <h3 className="text-2xl font-light mb-6">Modernize Your Development Process</h3>
            <p className="mb-8 leading-relaxed max-w-2xl mx-auto">
              Let's discuss how modern development practices can reduce your deployment time and improve code quality.
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
