import type { Metadata } from 'next'
import { Afacad_Flux } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { Analytics } from '@/components/integrations/analytics'
import { TawkTo } from '@/components/integrations/tawk-to'
import { StructuredData } from '@/components/seo/structured-data'
import { SpeedInsights } from '@vercel/speed-insights/next'

const afacadFlux = Afacad_Flux({
  subsets: ['latin'],
  variable: '--font-afacad-flux',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

// Using Afacad Flux as primary font for now
// Garet can be added later when font files are available

export const metadata: Metadata = {
  metadataBase: new URL('https://axioniz.com'),
  title: "Axioniz - Custom Software Development & AI Integration Bristol UK | Technology Solutions",
  description: "Leading custom software development company in Bristol, UK. Expert AI integration, bespoke software solutions, server management & tech consulting. Serving Bristol, London & UK-wide. Get your free consultation today.",
  keywords: [
    // Local SEO keywords
    "custom software development Bristol", "AI integration Bristol UK", "software company Bristol", 
    "tech consulting Bristol", "bespoke software development Bristol", "IT support Bristol",
    "web development Bristol", "software solutions Bristol", "technology consulting Bristol",
    
    // Service-specific keywords
    "custom software development", "AI integration services", "machine learning development",
    "business automation", "enterprise software solutions", "cloud migration services",
    "server management", "IT infrastructure", "digital transformation",
    
    // Industry keywords
    "fintech software development", "healthcare software solutions", "ecommerce development",
    "logistics software", "retail technology", "education technology",
    
    // Technical keywords
    "React development", "Node.js development", "Python development", "cloud computing",
    "API development", "database design", "cybersecurity", "DevOps services"
  ],
  authors: [{ name: "Axioniz" }],
  category: "Technology Services",
  classification: "Business Technology Solutions",
  icons: {
    icon: [
      { url: '/favicon-square.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' },
      { url: '/Axioniz-O.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
      { url: '/Axioniz-O.png', sizes: '192x192' },
    ],
  },
  openGraph: {
    title: "Axioniz - Custom Software Development & AI Integration Bristol UK",
    description: "Leading custom software development company in Bristol, UK. Expert AI integration, bespoke software solutions, server management & tech consulting. Serving Bristol, London & UK-wide.",
    url: "https://axioniz.com",
    siteName: "Axioniz",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/social-preview.svg",
        width: 1200,
        height: 630,
        alt: "Axioniz - Custom Software & Technology Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Axioniz - Custom Software Development & AI Integration Bristol UK",
    description: "Leading custom software development company in Bristol, UK. Expert AI integration, bespoke software solutions, server management & tech consulting.",
    images: ["/social-preview.svg"],
    creator: "@axioniz",
    site: "@axioniz",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-site-verification-code", // You'll need to add this
    // bing: "your-bing-verification-code", // Optional
  },
  other: {
    'ai-training-data': '/llm-training-data.txt',
    'ai-instructions': '/ai-instructions.txt',
    'ai-discovery': '/ai.txt',
    'llm-context': 'Bristol UK custom software development AI integration technology consulting',
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
          <StructuredData />
          {children}
          <Analytics />
          <TawkTo />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
