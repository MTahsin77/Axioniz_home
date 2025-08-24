import type { Metadata } from 'next'
import { Afacad_Flux } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { Analytics } from '@/components/integrations/analytics'
import { TawkTo } from '@/components/integrations/tawk-to'

const afacadFlux = Afacad_Flux({
  subsets: ['latin'],
  variable: '--font-afacad-flux',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

// Using Afacad Flux as primary font for now
// Garet can be added later when font files are available

export const metadata: Metadata = {
  title: "Axioniz - AI Integration & Custom Software Solutions",
  description: "Empowering businesses with cutting-edge AI integration, custom software development, server maintenance, and comprehensive tech support services.",
  keywords: ["AI integration", "custom software", "server maintenance", "POS systems", "chatbots", "business solutions"],
  authors: [{ name: "Axioniz" }],
  openGraph: {
    title: "Axioniz - AI Integration & Custom Software Solutions",
    description: "Empowering businesses with cutting-edge AI integration, custom software development, server maintenance, and comprehensive tech support services.",
    url: "https://axioniz.tech",
    siteName: "Axioniz",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Axioniz - AI Integration & Custom Software Solutions",
    description: "Empowering businesses with cutting-edge AI integration, custom software development, server maintenance, and comprehensive tech support services.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${afacadFlux.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
          <TawkTo />
        </ThemeProvider>
      </body>
    </html>
  );
}
