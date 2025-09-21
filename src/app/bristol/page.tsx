import { Metadata } from 'next'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Consultation } from '@/components/sections/consultation'
import { SmoothScroll } from '@/components/ui/smooth-scroll'
import { AccessibilityPanel } from '@/components/ui/accessibility'
import { BristolHero } from '@/components/sections/bristol-hero'

export const metadata: Metadata = {
  title: "Custom Software Development Bristol | Local Tech Company | Axioniz",
  description: "Leading custom software development company based in Bristol, UK. Local expertise in AI integration, web development & tech consulting. Serving Bristol businesses since 2023. Free consultation available.",
  keywords: [
    "software development Bristol",
    "custom software Bristol UK",
    "web development Bristol",
    "AI integration Bristol",
    "tech company Bristol",
    "software developers Bristol",
    "IT consulting Bristol",
    "Bristol technology services",
    "bespoke software Bristol",
    "mobile app development Bristol"
  ],
  alternates: {
    canonical: "https://axioniz.com/bristol",
  },
  openGraph: {
    title: "Custom Software Development Bristol | Local Tech Company",
    description: "Leading custom software development company based in Bristol, UK. Local expertise in AI integration, web development & tech consulting.",
    url: "https://axioniz.com/bristol",
    type: "website",
    locale: "en_GB"
  }
}

export default function BristolPage() {
  return (
    <div className="min-h-screen bg-background">
      <SmoothScroll />
      <AccessibilityPanel />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-background/50">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-6">
                <span className="text-muted-foreground font-medium">📍 Bristol, UK</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6">
                Bristol's Leading
                <span className="block bg-gradient-to-r from-[#eb5e28] to-[#f97316] bg-clip-text text-transparent">
                  Software Development
                </span>
                Company
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Based in the heart of Bristol, we provide cutting-edge custom software development, 
                AI integration, and technology consulting services to businesses across the South West 
                and throughout the UK.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#consultation"
                  className="bg-[#eb5e28] hover:bg-[#d54e1f] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Get Free Consultation
                </a>
                <a
                  href="mailto:info@axioniz.com"
                  className="border border-[#eb5e28] text-[#eb5e28] hover:bg-[#eb5e28] hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
                >
                  Contact Bristol Team
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Professional Software Development Services in Bristol, UK
              </h2>
              
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-center mb-8">
                  Axioniz is Bristol's premier custom software development company, specializing in 
                  bespoke technology solutions for businesses across the South West. Our expert team 
                  combines cutting-edge AI integration with proven development practices to deliver 
                  exceptional results for Bristol-based companies.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mt-12">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-foreground">Why Choose Axioniz for Bristol Software Development?</h3>
                    <ul className="space-y-2">
                      <li>✅ Local Bristol-based development team</li>
                      <li>✅ Proven track record with UK businesses</li>
                      <li>✅ Expert AI integration and automation</li>
                      <li>✅ Agile development methodology</li>
                      <li>✅ Ongoing support and maintenance</li>
                      <li>✅ Competitive UK pricing</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4 text-foreground">Bristol Areas We Serve</h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <span>• Clifton</span>
                      <span>• Redland</span>
                      <span>• City Centre</span>
                      <span>• Harbourside</span>
                      <span>• Bedminster</span>
                      <span>• Southville</span>
                      <span>• Easton</span>
                      <span>• St Pauls</span>
                      <span>• Cotham</span>
                      <span>• Old Market</span>
                      <span>• Cabot Circus</span>
                      <span>• Stokes Croft</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Consultation />
      </main>

      <Footer />
    </div>
  )
}
