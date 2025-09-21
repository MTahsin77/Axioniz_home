import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export const metadata = {
  title: 'Terms of Service - Axioniz',
  description: 'Terms of Service for Axioniz - Learn about our terms and conditions for using our services.',
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Card className="shadow-2xl">
            <CardHeader className="text-center pb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <CardTitle className="text-4xl font-black text-foreground">Terms of Service</CardTitle>
                <Badge variant="secondary" className="text-xs">Legal</Badge>
              </div>
              <p className="text-lg text-muted-foreground">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              <Separator className="mt-6" />
            </CardHeader>
            <CardContent className="space-y-8">

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
                    <Badge variant="outline" className="w-6 h-6 rounded-full p-0 flex items-center justify-center text-xs">1</Badge>
                    Acceptance of Terms
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    By accessing and using Axioniz services, you accept and agree to be bound by the terms and provision of this agreement.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
                    <Badge variant="outline" className="w-6 h-6 rounded-full p-0 flex items-center justify-center text-xs">2</Badge>
                    Services Description
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Axioniz provides:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>AI integration and implementation services</li>
                    <li>Custom software development</li>
                    <li>Server maintenance and hosting</li>
                    <li>Customer support solutions</li>
                    <li>Technology consultation services</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
                    <Badge variant="outline" className="w-6 h-6 rounded-full p-0 flex items-center justify-center text-xs">3</Badge>
                    User Obligations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    You agree to:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Provide accurate and complete information</li>
                    <li>Use our services in compliance with applicable laws</li>
                    <li>Not interfere with or disrupt our services</li>
                    <li>Respect intellectual property rights</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
                    <Badge variant="outline" className="w-6 h-6 rounded-full p-0 flex items-center justify-center text-xs">4</Badge>
                    Payment Terms
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Payment terms will be specified in individual service agreements. All fees are non-refundable unless otherwise stated in writing.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
                    <Badge variant="outline" className="w-6 h-6 rounded-full p-0 flex items-center justify-center text-xs">5</Badge>
                    Limitation of Liability
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Axioniz shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
                    <Badge variant="outline" className="w-6 h-6 rounded-full p-0 flex items-center justify-center text-xs">6</Badge>
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    For questions about these Terms of Service, contact us at:
                  </p>
                  <Card className="bg-muted/50">
                    <CardContent className="pt-4">
                      <p className="text-foreground font-medium">Email: legal@axioniz.com</p>
                      <p className="text-foreground font-medium">Phone: +1 (555) 123-4567</p>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
