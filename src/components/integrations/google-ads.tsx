'use client'

import Script from 'next/script'
import { useEffect } from 'react'

// Google Ads configuration
const GOOGLE_ADS_ID = 'AW-YOUR_CONVERSION_ID' // You'll get this from Google Ads
const CONVERSION_LABEL = 'YOUR_CONVERSION_LABEL' // You'll get this from Google Ads

declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

export function GoogleAds() {
  return (
    <>
      {/* Google Ads Global Site Tag */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-ads-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GOOGLE_ADS_ID}');
        `}
      </Script>
    </>
  )
}

// Function to track consultation form conversions
export function trackConsultationConversion() {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: `${GOOGLE_ADS_ID}/${CONVERSION_LABEL}`,
      value: 100.0, // Estimated value of a consultation lead
      currency: 'GBP'
    })
    
    console.log('Google Ads conversion tracked: Consultation form submission')
  }
}

// Enhanced conversion tracking with form data
export function trackEnhancedConversion(formData: {
  email: string
  firstName: string
  lastName: string
  phone: string
}) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: `${GOOGLE_ADS_ID}/${CONVERSION_LABEL}`,
      value: 100.0,
      currency: 'GBP',
      user_data: {
        email_address: formData.email,
        first_name: formData.firstName,
        last_name: formData.lastName,
        phone_number: formData.phone
      }
    })
    
    console.log('Enhanced Google Ads conversion tracked with user data')
  }
}
