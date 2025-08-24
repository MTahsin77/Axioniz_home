'use client'

import { motion } from 'framer-motion'

const industries = [
  {
    title: 'Technology & Software',
    description: 'Our engineers and data scientists devise custom AI, software development and automation solutions that modernize and transform your tech organization\'s approach to development and operations.',
    link: '/industries/technology-software'
  },
  {
    title: 'Healthcare & Medical',
    description: 'We provide healthcare organizations with management and technology solutions for patient data management, compliance, and operational efficiency.',
    link: '/industries/healthcare-medical'
  },
  {
    title: 'Financial Services',
    description: 'The Axioniz team applies engineering, AI and automation expertise to ensure your financial services initiative goes from initiation to deployment as expected.',
    link: '/industries/financial-services'
  },
  {
    title: 'E-commerce & Retail',
    description: 'We help e-commerce and retail businesses optimize their digital presence with modern web solutions, inventory management systems, and customer experience platforms.',
    link: '/industries/ecommerce-retail'
  },
  {
    title: 'Logistics & Supply Chain',
    description: 'Our consultants analyze your current operations to identify opportunities and design more efficient, customer-focused processes.',
    link: '/industries/logistics-supply-chain'
  },
  {
    title: 'Education & Training',
    description: 'We help educational institutions modernize their technology infrastructure and implement effective learning management systems.',
    link: '/industries/education-training'
  }
]

const caseStudies = [
  {
    title: 'AI integration solutions',
    description: 'Learn how AI integration can help tech companies accelerate time to value for their customer analytics platforms.',
    link: '/case-studies/ai-integration'
  },
  {
    title: 'Scalable cloud infrastructure',
    description: 'Discover how scalable cloud infrastructure can help growing companies organize and manage their expanding operations.',
    link: '/case-studies/cloud-infrastructure'
  },
  {
    title: 'Process automation solutions',
    description: 'Explore how process automation can streamline and standardize workflows to improve operational efficiency.',
    link: '/case-studies/process-automation'
  },
  {
    title: 'Modern development practices',
    description: 'Learn how modern development practices can reduce deployment time and improve code quality.',
    link: '/case-studies/development-practices'
  },
  {
    title: 'Digital transformation approach',
    description: 'Discover our approach to digital transformation and how it can help modernize your entire technology stack.',
    link: '/case-studies/digital-transformation'
  }
]

export function Products() {
  return (
    <section id="industries" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <a href={industry.link} className="block">
                <div className="bg-[#eb5e28] dark:bg-gray-900 p-8 rounded-lg hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <h3 className="text-2xl font-light text-white dark:text-[#eb5e28] mb-4 group-hover:text-white/80 dark:group-hover:text-[#eb5e28]/80 transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-white font-light leading-relaxed mb-6 flex-grow">
                    {industry.description}
                  </p>
                  <motion.div
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-auto"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-sm font-medium text-white dark:text-[#eb5e28]">Learn more →</span>
                  </motion.div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Case Studies Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <a href={study.link} className="block">
                <div className="border-b border-border pb-8 hover:border-foreground/20 transition-colors duration-300">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-2xl sm:text-3xl font-light text-foreground group-hover:text-foreground/80 transition-colors duration-300 mb-4">
                        {study.title}
                      </h3>
                      <p className="text-lg text-[#eb5e28] font-light leading-relaxed max-w-4xl">
                        {study.description}
                      </p>
                    </div>
                    <motion.div
                      className="ml-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-sm font-medium text-foreground">Learn more →</span>
                    </motion.div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
