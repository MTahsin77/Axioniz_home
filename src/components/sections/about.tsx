'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Main About Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl md:text-5xl font-light text-foreground mb-8 leading-tight"
                style={{ wordBreak: 'keep-all', hyphens: 'none' }}
              >
                <span className="whitespace-nowrap">OUR TEAM</span>{' '}
                <span className="whitespace-nowrap">IS YOUR TEAM</span>
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed"
              >
                <p>
                  At Axioniz, our goal is to always deliver more than one-time projects or temporary results – we strive to deliver progress. We work with every client to provide:
                </p>
                
                <ul className="space-y-3 ml-6">
                  <li>More insight into their business&apos;s critical processes and data.</li>
                  <li>Reliable project management to achieve goals on time and within budget</li>
                  <li>Better tools, systems and training to enhance efficiency and compliance.</li>
                </ul>
                
                <p>
                  Accomplishing these goals requires vision that&apos;s grounded in your organization&apos;s business needs. That&apos;s why we balance digital transformation with collaboration, ensuring that the advanced strategies we develop and the solutions we implement are truly tailored to your organization&apos;s needs.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex justify-center sm:justify-start pt-8"
              >
                <Button 
                  size="lg" 
                  className="px-8 py-4 bg-[#eb5e28] text-white hover:bg-[#eb5e28]/90 dark:bg-gray-800 dark:text-[#eb5e28] dark:hover:bg-gray-700"
                  asChild
                >
                  <a href="#consultation">
                    LEARN MORE ABOUT AXIONIZ
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-muted/30 p-8 rounded-lg">
                <h3 className="text-2xl font-light text-foreground mb-4">
                  Our founder&apos;s vision for Axioniz
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  Our founder established Axioniz to bring together diverse talent that could provide fresh insights to industries struggling to modernize and transform. Axioniz is increasing representation in engineering, AI, and technology consulting. Our collective expertise spans a variety of engineering, design and management disciplines, allowing us to help clients achieve greater quality, efficiency and innovation.
                </p>
                <Button variant="outline" asChild>
                  <a href="#consultation">
                    MEET OUR FOUNDER
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
          
          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center border-t border-border pt-16"
          >
            <h3 className="text-3xl sm:text-4xl font-light text-foreground mb-8">
              Ready to discover what we can do for your business?
            </h3>
            <Button 
              size="lg" 
              className="px-12 py-6 text-lg bg-[#eb5e28] text-white hover:bg-[#eb5e28]/90 dark:bg-gray-800 dark:text-[#eb5e28] dark:hover:bg-gray-700"
              asChild
            >
              <a href="#consultation">
                CONTACT US TO GET STARTED
                <ArrowRight className="ml-3 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
