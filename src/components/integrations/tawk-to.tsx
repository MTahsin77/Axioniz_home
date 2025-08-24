'use client'

import { useEffect } from 'react'

export function TawkTo() {
  useEffect(() => {
    // Tawk.to Live Chat Integration
    const script = document.createElement('script')
    script.async = true
    script.src = 'https://embed.tawk.to/YOUR_TAWK_TO_ID/1hqr8qqqq'
    script.charset = 'UTF-8'
    script.setAttribute('crossorigin', '*')
    
    const firstScript = document.getElementsByTagName('script')[0]
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript)
    }

    // Cleanup function
    return () => {
      // Remove Tawk.to widget when component unmounts
      const tawkScript = document.querySelector('script[src*="tawk.to"]')
      if (tawkScript) {
        tawkScript.remove()
      }
      
      // Remove Tawk.to widget elements
      const tawkWidget = document.getElementById('tawk-widget')
      if (tawkWidget) {
        tawkWidget.remove()
      }
    }
  }, [])

  return null
}

// Note: Replace 'YOUR_TAWK_TO_ID' with your actual Tawk.to property ID
// You can get this from your Tawk.to dashboard after creating an account
