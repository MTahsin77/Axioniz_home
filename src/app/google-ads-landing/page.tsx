import { Metadata } from 'next'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Consultation } from '@/components/sections/consultation'
import { SmoothScroll } from '@/components/ui/smooth-scroll'
import { AccessibilityPanel } from '@/components/ui/accessibility'
import { motion } from 'framer-motion'

export const metadata: Metadata = {
  title: "FREE Custom Software Consultation | Get Your Quote Today | Axioniz Bristol",
  description: "Get a FREE consultation for custom software development in Bristol. Expert AI integration, web & mobile apps. 24-hour response guaranteed. Book your free consultation now!",
  keywords: [
    "free software consultation bristol",
    "custom software quote bristol", 
    "software development consultation",
    "free tech consultation bristol",
    "bristol software development quote",
    "custom software bristol pricing",
    "free ai consultation bristol",
    "software development bristol cost"
  ],
  alternates: {
    canonical: "https://axioniz.com/google-ads-landing",
  },
  openGraph: {
    title: "FREE Custom Software Consultation | Get Your Quote Today",
    description: "Get a FREE consultation for custom software development in Bristol. Expert AI integration, web & mobile apps. 24-hour response guaranteed.",
    url: "https://axioniz.com/google-ads-landing",
    type: "website",
    locale: "en_GB"
  }
}

export default function GoogleAdsLandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <SmoothScroll />
      <AccessibilityPanel />
      <Header />
      
      <main>
        {/* Hero Section - Optimized for Google Ads */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-background/50 pt-20">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-5xl mx-auto">
              {/* Trust Badge */}
              <div className="flex items-center justify-center gap-2 mb-6">
                <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 px-4 py-2 rounded-full text-sm font-semibold">
                  ✅ FREE Consultation • ⚡ 24hr Response • 📍 Bristol Based
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6">
                Get Your
                <span className="block bg-gradient-to-r from-[#eb5e28] to-[#f97316] bg-clip-text text-transparent">
                  FREE Software 
                </span>
                Consultation Today
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
                <strong>Bristol's #1 custom software developers</strong> are ready to transform your business ideas into reality. 
                Get expert advice on AI integration, web apps, and digital solutions - completely FREE!
              </p>

              {/* Key Benefits */}
              <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
                <div className="bg-card/50 p-6 rounded-xl border">
                  <div className="text-2xl mb-2">🚀</div>
                  <h3 className="font-bold mb-2">24-Hour Response</h3>
                  <p className="text-sm text-muted-foreground">Get your consultation booked within 24 hours</p>
                </div>
                <div className="bg-card/50 p-6 rounded-xl border">
                  <div className="text-2xl mb-2">💰</div>
                  <h3 className="font-bold mb-2">Completely FREE</h3>
                  <p className="text-sm text-muted-foreground">No hidden costs - just expert advice</p>
                </div>
                <div className="bg-card/50 p-6 rounded-xl border">
                  <div className="text-2xl mb-2">🎯</div>
                  <h3 className="font-bold mb-2">Bristol Experts</h3>
                  <p className="text-sm text-muted-foreground">Local team with global expertise</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <a
                  href="#consultation"
                  className="bg-[#eb5e28] hover:bg-[#d54e1f] text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg animate-pulse"
                >
                  📞 Book FREE Consultation Now
                </a>
                <p className="text-sm text-muted-foreground">
                  ⏰ <strong>Limited slots available</strong> - Book today!
                </p>
              </div>

              {/* Social Proof */}
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Trusted by Bristol businesses since 2023
                </p>
                <div className="flex justify-center items-center gap-8 opacity-60">
                  <span className="text-xs">⭐⭐⭐⭐⭐ 5-Star Service</span>
                  <span className="text-xs">💼 100+ Projects Delivered</span>
                  <span className="text-xs">🔒 GDPR Compliant</span>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-muted-foreground/30 rounded-full animate-pulse mt-2"></div>
            </div>
          </div>
        </section>

        {/* Services Preview Section */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What We Can Build For You
              </h2>
              <p className="text-lg text-muted-foreground">
                Our Bristol-based experts specialize in cutting-edge solutions that drive real business results
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">🤖</div>
                <h3 className="font-bold mb-2">AI Integration</h3>
                <p className="text-sm text-muted-foreground">ChatGPT, automation, and smart workflows</p>
              </div>
              <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">💻</div>
                <h3 className="font-bold mb-2">Web Applications</h3>
                <p className="text-sm text-muted-foreground">Custom dashboards, CRM, and business tools</p>
              </div>
              <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">📱</div>
                <h3 className="font-bold mb-2">Mobile Apps</h3>
                <p className="text-sm text-muted-foreground">iOS and Android apps that engage customers</p>
              </div>
              <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">☁️</div>
                <h3 className="font-bold mb-2">Cloud Solutions</h3>
                <p className="text-sm text-muted-foreground">Scalable infrastructure and hosting</p>
              </div>
            </div>
          </div>
        </section>

        {/* Consultation Form */}
        <Consultation />

        {/* FAQ Section */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-card p-6 rounded-xl border">
                  <h3 className="font-bold mb-2">How much does custom software development cost?</h3>
                  <p className="text-muted-foreground">
                    Costs vary based on complexity and features. During your FREE consultation, we'll provide a detailed quote 
                    tailored to your specific requirements and budget.
                  </p>
                </div>
                
                <div className="bg-card p-6 rounded-xl border">
                  <h3 className="font-bold mb-2">How long does it take to build custom software?</h3>
                  <p className="text-muted-foreground">
                    Most projects take 2-6 months depending on scope. We use agile development for faster delivery 
                    and regular updates throughout the process.
                  </p>
                </div>
                
                <div className="bg-card p-6 rounded-xl border">
                  <h3 className="font-bold mb-2">Do you provide ongoing support?</h3>
                  <p className="text-muted-foreground">
                    Yes! We offer comprehensive support packages including maintenance, updates, hosting, 
                    and technical support to keep your software running smoothly.
                  </p>
                </div>
                
                <div className="bg-card p-6 rounded-xl border">
                  <h3 className="font-bold mb-2">Can you integrate AI into existing systems?</h3>
                  <p className="text-muted-foreground">
                    Absolutely! We specialize in adding AI capabilities to existing workflows, including 
                    chatbots, automation, data analysis, and machine learning features.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
