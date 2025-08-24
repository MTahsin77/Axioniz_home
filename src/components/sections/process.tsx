'use client'

import { motion } from 'framer-motion'
import { MessageSquare, Lightbulb, Code, Rocket, CheckCircle } from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    title: 'Consultation',
    description: 'We start with a comprehensive consultation to understand your business needs, challenges, and goals.',
    details: ['Requirements Analysis', 'Technology Assessment', 'Solution Planning', 'Timeline Discussion'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Lightbulb,
    title: 'Strategy & Design',
    description: 'Our team develops a tailored strategy and creates detailed designs for your custom solution.',
    details: ['Architecture Planning', 'UI/UX Design', 'Technical Specifications', 'Project Roadmap'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Code,
    title: 'Development',
    description: 'We build your solution using cutting-edge technologies and best practices for optimal performance.',
    details: ['Agile Development', 'Regular Updates', 'Quality Assurance', 'Testing & Optimization'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Rocket,
    title: 'Deployment',
    description: 'We deploy your solution and ensure everything runs smoothly in your production environment.',
    details: ['Production Setup', 'Data Migration', 'Performance Tuning', 'Go-Live Support'],
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: CheckCircle,
    title: 'Ongoing Support',
    description: 'We provide continuous support, maintenance, and updates to keep your solution running optimally.',
    details: ['24/7 Monitoring', 'Regular Updates', 'Technical Support', 'Performance Analytics'],
    color: 'from-indigo-500 to-purple-500'
  }
]

export function Process() {
  return (
    <section id="process" className="py-24 bg-white dark:bg-gray-900">
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
            How It Works
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our proven process ensures successful delivery of your technology solutions from concept to completion
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 transform -translate-y-1/2"></div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Step Card */}
                <motion.div
                  className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 text-center relative z-10 hover:shadow-xl transition-all duration-500"
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className={`w-8 h-8 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                      {index + 1}
                    </div>
                  </div>

                  {/* Icon */}
                  <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl mb-6 shadow-lg mt-4`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <step.icon className="h-8 w-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-1">
                    {step.details.map((detail, detailIndex) => (
                      <motion.li
                        key={detail}
                        className="text-xs text-gray-500 dark:text-gray-400 flex items-center justify-center"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: (index * 0.1) + (detailIndex * 0.05) }}
                        viewport={{ once: true }}
                      >
                        <div className={`w-1 h-1 bg-gradient-to-r ${step.color} rounded-full mr-2`}></div>
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Arrow (Desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <motion.div
                      className="w-8 h-8 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center shadow-lg border-2 border-gray-200 dark:border-gray-700"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <div className="w-0 h-0 border-l-4 border-l-gray-400 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                    </motion.div>
                  </div>
                )}

                {/* Arrow (Mobile) */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-4">
                    <motion.div
                      className="w-8 h-8 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center shadow-lg border-2 border-gray-200 dark:border-gray-700"
                      animate={{ y: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <div className="w-0 h-0 border-t-4 border-t-gray-400 border-l-2 border-l-transparent border-r-2 border-r-transparent"></div>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline Stats */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {[
            { label: 'Average Project Timeline', value: '4-12 weeks', icon: '⏱️' },
            { label: 'Client Satisfaction Rate', value: '98%', icon: '⭐' },
            { label: 'Post-Launch Support', value: '24/7', icon: '🛠️' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Ready to start your project with our proven process?
          </p>
          <motion.a
            href="#consultation"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule Your Consultation
            <MessageSquare className="ml-2 h-5 w-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
