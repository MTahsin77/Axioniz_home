'use client'

import Script from 'next/script'

interface AnalyticsProps {
  gaId?: string
}

export function Analytics({ gaId = 'G-XXXXXXXXXX' }: AnalyticsProps) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  )
}

// Note: Replace 'G-XXXXXXXXXX' with your actual Google Analytics 4 measurement ID
// You can get this from your Google Analytics dashboard
