'use client'

export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://axioniz.com/#organization",
    "name": "Axioniz",
    "legalName": "Axioniz Limited",
    "url": "https://axioniz.com",
    "logo": "https://axioniz.com/Axioniz-O.svg",
    "description": "Leading custom software development company in Bristol, UK. Expert AI integration, bespoke software solutions, server management & tech consulting.",
    "foundingDate": "2023",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "GB",
      "addressRegion": "England",
      "addressLocality": "Bristol",
      "postalCode": "BS1",
      "streetAddress": "Bristol, UK" // Update with actual address
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+44-XXX-XXX-XXXX", // Update with actual phone
        "contactType": "customer service",
        "email": "info@axioniz.com",
        "availableLanguage": ["English"],
        "areaServed": ["GB", "Bristol", "London", "United Kingdom"]
      },
      {
        "@type": "ContactPoint",
        "email": "m.tahsin@axioniz.com",
        "contactType": "sales",
        "availableLanguage": ["English"]
      }
    ],
    "sameAs": [
      "https://linkedin.com/company/axioniz",
      "https://twitter.com/axioniz"
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Bristol",
        "addressCountry": "GB"
      },
      {
        "@type": "City", 
        "name": "London",
        "addressCountry": "GB"
      },
      {
        "@type": "Country",
        "name": "United Kingdom"
      }
    ],
    "knowsAbout": [
      "Custom Software Development",
      "AI Integration",
      "Machine Learning",
      "Web Development",
      "Mobile App Development",
      "Cloud Computing",
      "DevOps",
      "Digital Transformation",
      "Business Automation",
      "IT Consulting"
    ]
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://axioniz.com/#localbusiness",
    "name": "Axioniz",
    "image": "https://axioniz.com/social-preview.svg",
    "description": "Premier custom software development and AI integration company serving Bristol and the UK. Specializing in bespoke software solutions, digital transformation, and technology consulting.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "GB",
      "addressRegion": "England", 
      "addressLocality": "Bristol",
      "postalCode": "BS1",
      "streetAddress": "Bristol, UK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "51.4545",
      "longitude": "-2.5879"
    },
    "telephone": "+44-XXX-XXX-XXXX",
    "email": "info@axioniz.com",
    "url": "https://axioniz.com",
    "priceRange": "£££",
    "openingHours": "Mo-Fr 09:00-18:00",
    "serviceArea": [
      {
        "@type": "City",
        "name": "Bristol"
      },
      {
        "@type": "City",
        "name": "London" 
      },
      {
        "@type": "Country",
        "name": "United Kingdom"
      }
    ]
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Custom Software Development",
    "provider": {
      "@id": "https://axioniz.com/#organization"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Bristol",
        "addressCountry": "GB"
      },
      {
        "@type": "Country", 
        "name": "United Kingdom"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Software Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Software Development",
            "description": "Bespoke software solutions tailored to your business needs"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "AI Integration Services",
            "description": "Advanced AI and machine learning integration for business automation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Technology Consulting",
            "description": "Strategic technology consulting and digital transformation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Server Management & Hosting",
            "description": "Professional server management and cloud hosting solutions"
          }
        }
      ]
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://axioniz.com/#website",
    "url": "https://axioniz.com",
    "name": "Axioniz - Custom Software Development Bristol UK",
    "description": "Leading custom software development company in Bristol, UK specializing in AI integration and bespoke technology solutions.",
    "publisher": {
      "@id": "https://axioniz.com/#organization"
    },
    "inLanguage": "en-GB",
    "potentialAction": [
      {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://axioniz.com/?s={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    ]
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://axioniz.com"
      },
      {
        "@type": "ListItem", 
        "position": 2,
        "name": "Services",
        "item": "https://axioniz.com/#services"
      },
      {
        "@type": "ListItem",
        "position": 3, 
        "name": "Industries",
        "item": "https://axioniz.com/#industries"
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <script
        type="application/ld+json" 
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
    </>
  )
}
