'use client'

import { motion } from 'framer-motion'
import { Linkedin } from 'lucide-react'

const footerLinks = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Industries', href: '#industries' },
  { name: 'Contact Us', href: '#consultation' },
]

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl sm:text-4xl font-light text-foreground mb-8">
              Ready to discover what we can do for your <span className="text-[#eb5e28]">business</span>?
            </h3>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-[#eb5e28] transition-colors font-light"
              >
                {link.name}
              </a>
            ))}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-8"
          >
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://linkedin.com/company/axioniz"
                className="text-muted-foreground hover:text-[#eb5e28] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <div className="flex items-center justify-center">
              <a href="mailto:info@axioniz.com" className="text-muted-foreground hover:text-[#eb5e28] transition-colors font-light">
                info@axioniz.com
              </a>
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="border-t border-border pt-8 text-center"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground font-light">
                Axioniz {new Date().getFullYear()}, All Rights Reserved
              </p>
              <a 
                href="/privacy" 
                className="text-sm text-muted-foreground hover:text-[#eb5e28] transition-colors font-light"
              >
                Privacy Policy
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
