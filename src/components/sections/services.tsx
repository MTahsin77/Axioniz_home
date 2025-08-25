'use client'

import { motion } from 'framer-motion'
import { AnimatedO } from '@/components/ui/animated-o'
import { useState } from 'react'

const services = [
  {
    number: '01',
    title: 'AI Integration & Implementation',
    titleFormatted: (
      <>
        <span className="whitespace-nowrap">AI Integration</span>{' '}
        <span className="whitespace-nowrap">& Implementation</span>
      </>
    ),
    description: 'Seamlessly integrate cutting-edge AI technologies into your existing workflows and systems.',
    marqueeText: 'AI Integration & Implementation',
    link: '/services/ai-integration'
  },
  {
    number: '02',
    title: 'Custom Software Development',
    titleFormatted: (
      <>
        <span className="whitespace-nowrap">Custom Software</span>{' '}
        <span className="whitespace-nowrap">Development</span>
      </>
    ),
    description: 'Tailored software solutions built to meet your specific business requirements and goals.',
    marqueeText: 'Custom Software Development',
    link: '/services/custom-software-development'
  },
  {
    number: '03',
    title: 'Server Management & Hosting',
    titleFormatted: (
      <>
        <span className="whitespace-nowrap">Server Management</span>{' '}
        <span className="whitespace-nowrap">& Hosting</span>
      </>
    ),
    description: 'Comprehensive server management and hosting solutions to keep your systems running smoothly.',
    marqueeText: 'Server Management & Hosting',
    link: '/services/server-management-hosting'
  },
  {
    number: '04',
    title: 'Customer Support Solutions',
    titleFormatted: (
      <>
        <span className="whitespace-nowrap">Customer Support</span>{' '}
        <span className="whitespace-nowrap">Solutions</span>
      </>
    ),
    description: 'Advanced customer support systems including AI-powered chatbots and help desk solutions.',
    marqueeText: 'Customer Support Solutions',
    link: '/services/customer-support-solutions'
  },
  {
    number: '05',
    title: 'Technology Consulting',
    titleFormatted: (
      <>
        <span className="whitespace-nowrap">Technology</span>{' '}
        <span className="whitespace-nowrap">Consulting</span>
      </>
    ),
    description: 'Strategic technology guidance to help your organization make informed decisions about digital transformation.',
    marqueeText: 'Technology Consulting',
    link: '/services/technology-consulting'
  },
  {
    number: '06',
    title: 'Process Automation',
    titleFormatted: (
      <>
        <span className="whitespace-nowrap">Process</span>{' '}
        <span className="whitespace-nowrap">Automation</span>
      </>
    ),
    description: 'Streamline your business operations with intelligent automation solutions that reduce manual work.',
    marqueeText: 'Process Automation',
    link: '/case-studies/process-automation'
  }
]

export function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="services" className="py-24 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          {services.map((service, index) => (
            <a
              key={service.number}
              href={service.link}
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
              <div className="border-b border-border pb-8 hover:border-foreground/20 transition-colors duration-300">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-baseline gap-8 mb-4">
                      <span className="text-sm font-medium text-[#eb5e28] tracking-wider">
                        {service.number}
                      </span>
                    </div>
                    <h3 
                      className="text-xl sm:text-2xl font-bold text-foreground mb-4 service-title"
                      style={{ 
                        wordBreak: 'keep-all', 
                        hyphens: 'none', 
                        overflowWrap: 'normal',
                        whiteSpace: 'normal',
                        lineBreak: 'strict'
                      }}
                    >
                      <AnimatedO>{service.titleFormatted || service.title}</AnimatedO>
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      <AnimatedO disabled={['01', '02', '03', '04', '05', '06'].includes(service.number)}>{service.description}</AnimatedO>
                    </p>
                  </div>
                  <motion.div
                    className="ml-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-sm font-medium text-[#eb5e28]">Learn more →</span>
                  </motion.div>
                </div>
                
                {/* Marquee Animation */}
                <div className="relative overflow-hidden mt-6 h-8">
                  <motion.div
                    className="absolute whitespace-nowrap text-6xl font-light text-[#eb5e28]/40 select-none"
                    animate={hoveredIndex === index ? { x: [0, -1000] } : { x: 0 }}
                    transition={{
                      duration: 15,
                      repeat: hoveredIndex === index ? Infinity : 0,
                      ease: "linear"
                    }}
                  >
                    {Array.from({ length: 10 }, (_, i) => (
                      <span key={i}>
                        {service.marqueeText}—
                      </span>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
