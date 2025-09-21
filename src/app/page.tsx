import { Metadata } from 'next'
import { Hero } from '@/components/sections/hero'
import { Services } from '@/components/sections/services'
import { Products } from '@/components/sections/products'
import { About } from '@/components/sections/about'
import { Consultation } from '@/components/sections/consultation'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Analytics } from '@/components/integrations/analytics'
import { TawkTo } from '@/components/integrations/tawk-to'
import { SmoothScroll } from '@/components/ui/smooth-scroll'
import { AccessibilityPanel } from '@/components/ui/accessibility'

export const metadata: Metadata = {
  title: "Custom Software Development Bristol UK | AI Integration & Tech Consulting | Axioniz",
  description: "⭐ #1 Custom Software Development Company in Bristol, UK. Expert AI integration, bespoke web & mobile apps, cloud solutions. Serving Bristol, London & UK-wide. Free consultation - Call today!",
  keywords: [
    "custom software development Bristol",
    "software company Bristol UK", 
    "AI integration Bristol",
    "web development Bristol",
    "mobile app development Bristol",
    "tech consulting Bristol",
    "bespoke software Bristol",
    "software developers Bristol",
    "IT solutions Bristol",
    "digital transformation Bristol"
  ],
  alternates: {
    canonical: "https://axioniz.com",
  },
  openGraph: {
    title: "Custom Software Development Bristol UK | AI Integration & Tech Consulting",
    description: "⭐ #1 Custom Software Development Company in Bristol, UK. Expert AI integration, bespoke web & mobile apps, cloud solutions. Free consultation available.",
    url: "https://axioniz.com",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/social-preview.svg",
        width: 1200,
        height: 630,
        alt: "Axioniz - Custom Software Development Bristol UK"
      }
    ]
  }
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SmoothScroll />
      <AccessibilityPanel />
      <Header />
      <main>
        <Hero />
        <Services />
        <Products />
        <About />
        <Consultation />
      </main>
      <Footer />
      <Analytics />
      <TawkTo />
    </div>
  )
}
