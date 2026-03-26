import type { Metadata } from 'next'
import './globals.css'

const SITE_URL = 'https://ib-ai-solutions.ch'
const PARTNER_URL = 'https://ki-produkt-video.de'

export const metadata: Metadata = {
  title: 'KI-Produktvideos für die Schweiz | IB AI Solutions',
  description: 'Professionelle KI-Videoproduktion für Schweizer Unternehmen. Produkt-, Werbe- und Erklärvideos ohne Filmteam — schnell, skalierbar, kosteneffizient.',
  keywords: 'KI Video Schweiz, Produktvideo Schweiz, AI Videoproduktion, KI Werbevideo, Produktvideo erstellen lassen Schweiz',
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
    languages: {
      'de-CH': SITE_URL,
      'de-DE': PARTNER_URL,
      'de-AT': PARTNER_URL,
      'x-default': PARTNER_URL,
    },
  },
  openGraph: {
    title: 'KI-Produktvideos für die Schweiz | IB AI Solutions',
    description: 'KI-Videoproduktion für Schweizer Unternehmen — ohne Filmteam, sofort einsatzbereit.',
    url: SITE_URL,
    siteName: 'IB AI Solutions',
    locale: 'de_CH',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'IB AI Solutions – KI-Videoproduktion für die Schweiz',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KI-Produktvideos für die Schweiz | IB AI Solutions',
    description: 'KI-Videoproduktion für Schweizer Unternehmen — ohne Filmteam, sofort einsatzbereit.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'IB AI Solutions',
    url: SITE_URL,
    logo: `${SITE_URL}/ib-logo.png`,
    description: 'Professionelle KI-Videoproduktion für Schweizer Unternehmen — ohne Filmteam, skalierbar und kosteneffizient.',
    foundingDate: '2009',
    areaServed: ['CH', 'DE', 'AT'],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'info@ib-ai-solutions.ch',
      contactType: 'customer service',
      availableLanguage: 'German',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'KI-Videoproduktion',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Produkt-Video',
            description: 'Professionelle Produktpräsentation aus Ihren Produktbildern — ideal für Shops und Marktplätze.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Werbevideo',
            description: 'Emotionale Werbevideos für Social Media, Meta, YouTube & TikTok Ads.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Erklär-Video',
            description: 'Komplexe Produkte und Prozesse verständlich erklärt — ideal für B2B und Industrie.',
          },
        },
      ],
    },
  }

  return (
    <html lang="de-CH">
      <head>
        <link rel="alternate" hrefLang="de-CH" href={SITE_URL} />
        <link rel="alternate" hrefLang="de-DE" href={PARTNER_URL} />
        <link rel="alternate" hrefLang="de-AT" href={PARTNER_URL} />
        <link rel="alternate" hrefLang="x-default" href={PARTNER_URL} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
