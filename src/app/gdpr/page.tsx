import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Shield } from 'lucide-react'

export const metadata = {
  title: 'GDPR Notice - Axioniz',
  description: 'GDPR compliance information for Axioniz - Learn about your data protection rights.',
}

export default function GDPRNotice() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Card className="shadow-2xl">
            <CardHeader className="text-center pb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Shield className="h-8 w-8 text-primary" />
                <CardTitle className="text-4xl font-black text-foreground">GDPR Notice</CardTitle>
                <Badge variant="secondary" className="text-xs">Legal</Badge>
              </div>
              <p className="text-lg text-muted-foreground">
                This notice explains how Axioniz complies with the General Data Protection Regulation (GDPR).
              </p>
              <Separator className="mt-6" />
            </CardHeader>
            <CardContent className="space-y-8">

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
                    <Badge variant="outline" className="w-6 h-6 rounded-full p-0 flex items-center justify-center text-xs">1</Badge>
                    Your Rights Under GDPR
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    As a data subject, you have the following rights:
                  </p>
                  <div className="space-y-3">
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <p className="text-foreground font-medium">Right to be informed:</p>
                      <p className="text-muted-foreground text-sm">You have the right to know how your data is being processed</p>
                    </div>
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <p className="text-foreground font-medium">Right of access:</p>
                      <p className="text-muted-foreground text-sm">You can request a copy of your personal data</p>
                    </div>
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <p className="text-foreground font-medium">Right to rectification:</p>
                      <p className="text-muted-foreground text-sm">You can request correction of inaccurate data</p>
                    </div>
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <p className="text-foreground font-medium">Right to erasure:</p>
                      <p className="text-muted-foreground text-sm">You can request deletion of your personal data</p>
                    </div>
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <p className="text-foreground font-medium">Right to restrict processing:</p>
                      <p className="text-muted-foreground text-sm">You can limit how we use your data</p>
                    </div>
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <p className="text-foreground font-medium">Right to data portability:</p>
                      <p className="text-muted-foreground text-sm">You can request your data in a portable format</p>
                    </div>
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <p className="text-foreground font-medium">Right to object:</p>
                      <p className="text-muted-foreground text-sm">You can object to certain types of processing</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
                    <Badge variant="outline" className="w-6 h-6 rounded-full p-0 flex items-center justify-center text-xs">2</Badge>
                    Legal Basis for Processing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    We process your personal data based on:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li><strong>Consent:</strong> When you explicitly agree to processing</li>
                    <li><strong>Contract:</strong> When processing is necessary for service delivery</li>
                    <li><strong>Legitimate interests:</strong> For business operations and improvements</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
                    <Badge variant="outline" className="w-6 h-6 rounded-full p-0 flex items-center justify-center text-xs">3</Badge>
                    Data Retention
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We retain personal data only as long as necessary for the purposes outlined in our Privacy Policy or as required by law.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
                    <Badge variant="outline" className="w-6 h-6 rounded-full p-0 flex items-center justify-center text-xs">4</Badge>
                    Exercise Your Rights
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    To exercise any of your GDPR rights, please contact us:
                  </p>
                  <Card className="bg-muted/50">
                    <CardContent className="pt-4">
                      <p className="text-foreground font-medium">Email: gdpr@axioniz.tech</p>
                      <p className="text-foreground font-medium">Phone: +1 (555) 123-4567</p>
                      <Alert className="mt-4">
                        <AlertDescription className="text-sm">
                          We will respond to your request within 30 days.
                        </AlertDescription>
                      </Alert>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
                    <Badge variant="outline" className="w-6 h-6 rounded-full p-0 flex items-center justify-center text-xs">5</Badge>
                    Complaints
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Alert>
                    <Shield className="h-4 w-4" />
                    <AlertDescription>
                      If you believe we have not handled your personal data in accordance with GDPR, you have the right to lodge a complaint with your local supervisory authority.
                    </AlertDescription>
                  </Alert>
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
