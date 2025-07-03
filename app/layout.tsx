import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Oasis Aquatic Center - Premier Swimming Instruction & Aquatic Programs",
  description:
    "Professional swimming lessons, competitive training, and water safety programs for all ages. State-of-the-art facilities with certified instructors. Learn to swim with confidence at AquaCenter.",
  keywords:
    "swimming lessons, competitive swimming, water safety, lifeguard training, swimming pools, aquatic center, swim instruction, swimming programs, learn to swim",
  authors: [{ name: "AquaCenter Team" }],
  creator: "AquaCenter",
  publisher: "AquaCenter",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aquacenter.com",
    siteName: "AquaCenter",
    title: "AquaCenter - Premier Swimming Instruction & Aquatic Programs",
    description: "Professional swimming lessons and aquatic programs for all ages and skill levels.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AquaCenter - Swimming Instruction",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AquaCenter - Premier Swimming Instruction",
    description: "Professional swimming lessons and aquatic programs for all ages and skill levels.",
    images: ["/og-image.jpg"],
    creator: "@aquacenter",
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://aquacenter.com" />
        <meta name="theme-color" content="#0ea5e9" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsActivityLocation",
              name: "AquaCenter",
              description: "Premier Swimming Instruction & Aquatic Programs",
              url: "https://aquacenter.com",
              logo: "https://aquacenter.com/logo.png",
              image: "https://aquacenter.com/facility-image.jpg",
              telephone: "(555) 123-SWIM",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Aquatic Drive",
                addressLocality: "Swim City",
                addressRegion: "SC",
                postalCode: "12345",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "40.7128",
                longitude: "-74.0060",
              },
              openingHours: ["Mo-Fr 05:00-22:00", "Sa 06:00-21:00", "Su 07:00-20:00"],
              priceRange: "$80-$250",
              sameAs: [
                "https://facebook.com/aquacenter",
                "https://twitter.com/aquacenter",
                "https://instagram.com/aquacenter",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Swimming Programs",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Learn to Swim",
                      description: "Swimming lessons for all ages and skill levels",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Competitive Swimming",
                      description: "Elite training programs for competitive swimmers",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        {children}

        {/* Analytics and Performance Scripts */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Google Analytics
              (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
              (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
              m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
              })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
              
              // Performance monitoring
              if ('performance' in window) {
                window.addEventListener('load', function() {
                  setTimeout(function() {
                    const perfData = performance.getEntriesByType('navigation')[0];
                    console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart);
                  }, 0);
                });
              }
            `,
          }}
        />
      </body>
    </html>
  )
}
