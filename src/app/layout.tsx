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
  title: "Axioniz - Custom Software & Technology Solutions",
  description: "Empowering businesses with cutting-edge AI integration, custom software development, server maintenance, and comprehensive tech support services.",
  keywords: ["AI integration", "custom software", "server maintenance", "POS systems", "chatbots", "business solutions"],
  authors: [{ name: "Axioniz" }],
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' },
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
      { url: '/icon.png', sizes: '192x192' },
    ],
  },
  openGraph: {
    title: "Axioniz - Custom Software & Technology Solutions",
    description: "Empowering businesses with cutting-edge AI integration, custom software development, server maintenance, and comprehensive tech support services.",
    url: "https://axioniz.tech",
    siteName: "Axioniz",
    type: "website",
    images: [
      {
        url: "/Axioniz_Logo.png",
        width: 1200,
        height: 630,
        alt: "Axioniz - Custom Software & Technology Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Axioniz - Custom Software & Technology Solutions",
    description: "Empowering businesses with cutting-edge AI integration, custom software development, server maintenance, and comprehensive tech support services.",
    images: ["/Axioniz_Logo.png"],
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
