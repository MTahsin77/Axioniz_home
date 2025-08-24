'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    company: 'TechStart Inc.',
    role: 'CEO',
    content: 'Axioniz transformed our business operations with their AI integration. The chatbot system they built increased our customer satisfaction by 40% and reduced response times significantly.',
    rating: 5,
    image: '/api/placeholder/64/64'
  },
  {
    id: 2,
    name: 'Michael Chen',
    company: 'Restaurant Chain Co.',
    role: 'Operations Manager',
    content: 'The POS system they developed for our restaurant chain is incredible. Real-time inventory tracking and analytics have helped us reduce waste by 30% and improve efficiency.',
    rating: 5,
    image: '/api/placeholder/64/64'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    company: 'Global Enterprises',
    role: 'IT Director',
    content: 'Their server maintenance and hosting services are top-notch. We\'ve had 99.9% uptime since switching to Axioniz, and their 24/7 support team is always responsive.',
    rating: 5,
    image: '/api/placeholder/64/64'
  }
]

const clientLogos = [
  { name: 'TechStart Inc.', logo: '/api/placeholder/120/60' },
  { name: 'Restaurant Chain Co.', logo: '/api/placeholder/120/60' },
  { name: 'Global Enterprises', logo: '/api/placeholder/120/60' },
  { name: 'Innovation Labs', logo: '/api/placeholder/120/60' },
  { name: 'Digital Solutions', logo: '/api/placeholder/120/60' },
  { name: 'Future Systems', logo: '/api/placeholder/120/60' }
]

export function Testimonials() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our services.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center">
                  <Quote className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 dark:text-gray-300 text-center mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-xl font-bold text-gray-600 dark:text-gray-300">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client Logos */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-8">
            Trusted by Leading Companies
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientLogos.map((client, index) => (
              <motion.div
                key={client.name}
                className="flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-24 h-12 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-xs font-medium text-gray-600 dark:text-gray-300 text-center px-2">
                    {client.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {[
            { label: 'Happy Clients', value: '150+', icon: '😊' },
            { label: 'Projects Completed', value: '200+', icon: '🚀' },
            { label: 'Years of Experience', value: '5+', icon: '⭐' },
            { label: 'Client Satisfaction', value: '98%', icon: '💯' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
