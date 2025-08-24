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
