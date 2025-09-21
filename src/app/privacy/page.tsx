'use client'

import { motion } from 'framer-motion'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Shield, Eye, Lock, Users, AlertTriangle, Mail } from 'lucide-react'

// Note: metadata export removed due to 'use client' directive requirement for animations

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black">
      <Header />
      <main className="pt-32 pb-16">
        {/* Hero Section */}
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Shield className="w-12 h-12 text-[#eb5e28]" />
              <h1 className="text-5xl lg:text-6xl font-light text-gray-900 dark:text-white">
                Privacy <span className="text-[#eb5e28]">Policy</span>
              </h1>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Your privacy matters to us. Learn how we collect, use, and protect your information.
            </p>
          </motion.div>
        </div>

        {/* Content Grid */}
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-[#eb5e28] to-[#eb5e28]/80 text-white">
                  <CardTitle className="text-xl font-bold flex items-center gap-3">
                    <Eye className="w-6 h-6" />
                    Information We Collect
                  </CardTitle>
                </CardHeader>
                <CardContent className="bg-white dark:bg-gray-900 p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    We collect information you provide directly to us, such as when you:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                      <div className="w-2 h-2 bg-[#eb5e28] rounded-full mt-2 flex-shrink-0"></div>
                      Fill out our consultation booking form
                    </li>
                    <li className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                      <div className="w-2 h-2 bg-[#eb5e28] rounded-full mt-2 flex-shrink-0"></div>
                      Subscribe to our newsletter
                    </li>
                    <li className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                      <div className="w-2 h-2 bg-[#eb5e28] rounded-full mt-2 flex-shrink-0"></div>
                      Contact us through our website
                    </li>
                    <li className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                      <div className="w-2 h-2 bg-[#eb5e28] rounded-full mt-2 flex-shrink-0"></div>
                      Use our services or products
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-gray-700 to-gray-600 text-white">
                  <CardTitle className="text-xl font-bold flex items-center gap-3">
                    <Users className="w-6 h-6" />
                    How We Use Your Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="bg-white dark:bg-gray-900 p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                      <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                      Provide, maintain, and improve our services
                    </li>
                    <li className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                      <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                      Process consultation bookings and communicate with you
                    </li>
                    <li className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                      <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                      Send you technical notices and support messages
                    </li>
                    <li className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                      <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                      Respond to your comments and questions
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-gray-800 to-gray-700 text-white">
                  <CardTitle className="text-xl font-bold flex items-center gap-3">
                    <Shield className="w-6 h-6" />
                    Information Sharing
                  </CardTitle>
                </CardHeader>
                <CardContent className="bg-white dark:bg-gray-900 p-6">
                  <p className="text-gray-600 dark:text-gray-300">
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                    except as described in this policy or as required by law.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                  <CardTitle className="text-xl font-bold flex items-center gap-3">
                    <Lock className="w-6 h-6" />
                    Data Security
                  </CardTitle>
                </CardHeader>
                <CardContent className="bg-white dark:bg-gray-900 p-6">
                  <p className="text-gray-600 dark:text-gray-300">
                    We implement appropriate security measures to protect your personal information against unauthorized access, 
                    alteration, disclosure, or destruction.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <Card className="border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-gray-800 to-gray-700 text-white">
                  <CardTitle className="text-xl font-bold flex items-center gap-3">
                    <Users className="w-6 h-6" />
                    Your Rights (GDPR)
                  </CardTitle>
                </CardHeader>
                <CardContent className="bg-white dark:bg-gray-900 p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Under GDPR, you have the right to:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                      <div className="w-2 h-2 bg-gray-700 rounded-full mt-2 flex-shrink-0"></div>
                      Access your personal data
                    </div>
                    <div className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                      <div className="w-2 h-2 bg-gray-700 rounded-full mt-2 flex-shrink-0"></div>
                      Rectify inaccurate personal data
                    </div>
                    <div className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                      <div className="w-2 h-2 bg-gray-700 rounded-full mt-2 flex-shrink-0"></div>
                      Erase your personal data
                    </div>
                    <div className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                      <div className="w-2 h-2 bg-gray-700 rounded-full mt-2 flex-shrink-0"></div>
                      Restrict processing of your personal data
                    </div>
                    <div className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                      <div className="w-2 h-2 bg-gray-700 rounded-full mt-2 flex-shrink-0"></div>
                      Data portability
                    </div>
                    <div className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                      <div className="w-2 h-2 bg-gray-700 rounded-full mt-2 flex-shrink-0"></div>
                      Object to processing
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <Card className="border-[#eb5e28] hover:shadow-xl transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-[#eb5e28] to-red-500 text-white">
                  <CardTitle className="text-xl font-bold flex items-center gap-3">
                    <AlertTriangle className="w-6 h-6" />
                    Custom Solutions Disclaimer
                  </CardTitle>
                </CardHeader>
                <CardContent className="bg-white dark:bg-gray-900 p-6">
                  <div className="bg-gradient-to-r from-[#eb5e28]/10 to-red-50 dark:to-gray-800 p-6 rounded-lg border border-[#eb5e28]/20">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Important Notice Regarding Custom Solutions
                    </h3>
                    <div className="space-y-4">
                      <p className="text-gray-700 dark:text-gray-300">
                        Axioniz provides custom software solutions, applications, and technology services based on client specifications and requirements. 
                        All features, functionalities, and capabilities are developed according to explicit client requests.
                      </p>
                      <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-[#eb5e28]">
                        <p className="text-gray-700 dark:text-gray-300">
                          <strong className="text-[#eb5e28]">Client Responsibility:</strong> Clients are solely responsible for how they use, implement, 
                          and operate any custom solutions provided by Axioniz. This includes ensuring compliance with all applicable laws, regulations, 
                          and industry standards in their jurisdiction.
                        </p>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-red-500">
                        <p className="text-gray-700 dark:text-gray-300">
                          <strong className="text-red-600 dark:text-red-400">Limitation of Liability:</strong> Axioniz does not assume responsibility for any illegal, 
                          unethical, or non-compliant use of our custom solutions by clients. Any actions taken by clients using our software or services 
                          are entirely at their own discretion and risk.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <Card className="border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-gray-600 to-gray-500 text-white">
                  <CardTitle className="text-xl font-bold flex items-center gap-3">
                    <Mail className="w-6 h-6" />
                    Contact Us
                  </CardTitle>
                </CardHeader>
                <CardContent className="bg-white dark:bg-gray-900 p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    If you have any questions about this Privacy Policy, please contact us:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-4 rounded-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <Mail className="w-5 h-5 text-[#eb5e28]" />
                        <span className="font-medium text-gray-900 dark:text-white">Email</span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">privacy@axioniz.com</p>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-4 rounded-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <Users className="w-5 h-5 text-[#eb5e28]" />
                        <span className="font-medium text-gray-900 dark:text-white">Phone</span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
