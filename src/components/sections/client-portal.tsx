'use client'

import { motion } from 'framer-motion'
import { Lock, Users, BarChart3, Settings, FileText, Calendar } from 'lucide-react'

export function ClientPortal() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
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
            Client Portal
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Secure access to your project dashboard, documentation, and support resources (Coming Soon)
          </p>
        </motion.div>

        {/* Portal Preview */}
        <motion.div
          className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-blue-900/20 rounded-2xl p-8 mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Streamlined Project Management
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Our upcoming client portal will provide you with real-time access to project progress, 
                documentation, support tickets, and billing information all in one secure location.
              </p>

              {/* Features List */}
              <div className="space-y-4">
                {[
                  { icon: BarChart3, title: 'Project Dashboard', description: 'Real-time project status and analytics' },
                  { icon: FileText, title: 'Documentation Hub', description: 'Access all project documentation and guides' },
                  { icon: Calendar, title: 'Meeting Scheduler', description: 'Book consultations and support sessions' },
                  { icon: Settings, title: 'Account Management', description: 'Manage your account settings and preferences' }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mr-4">
                      <feature.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Portal Mockup */}
            <div className="relative">
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 border border-gray-200 dark:border-gray-700"
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                      <Lock className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-semibold text-gray-900 dark:text-white">Client Portal</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex space-x-4 mb-6">
                  {['Dashboard', 'Projects', 'Documents', 'Support'].map((tab, index) => (
                    <div
                      key={tab}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        index === 0
                          ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400'
                          : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                      }`}
                    >
                      {tab}
                    </div>
                  ))}
                </div>

                {/* Content Area */}
                <div className="space-y-4">
                  {/* Stats Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">3</div>
                      <div className="text-xs text-gray-600 dark:text-gray-300">Active Projects</div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">98%</div>
                      <div className="text-xs text-gray-600 dark:text-gray-300">Completion Rate</div>
                    </div>
                  </div>

                  {/* Project List */}
                  <div className="space-y-2">
                    {['AI Chatbot Integration', 'POS System Upgrade', 'Server Migration'].map((project, index) => (
                      <div key={project} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <span className="text-sm font-medium text-gray-900 dark:text-white">{project}</span>
                        <div className={`w-2 h-2 rounded-full ${
                          index === 0 ? 'bg-green-400' : index === 1 ? 'bg-yellow-400' : 'bg-blue-400'
                        }`}></div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Users className="h-8 w-8 text-white" />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Coming Soon Notice */}
        <motion.div
          className="text-center bg-blue-50 dark:bg-blue-900/20 rounded-xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            🚀 Coming Soon
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            We're working hard to bring you the best client portal experience. 
            Sign up for early access and be the first to know when it launches!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            />
            <motion.button
              className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors whitespace-nowrap"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Early Access
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
