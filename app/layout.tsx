import type { Metadata } from 'next'
import './globals.css'

const SITE_URL = 'https://ib-ai-solutions.vercel.app' // TODO: update to .ch domain after March 14 call
const PARTNER_URL = 'https://ki-produkt-video.de'

export const metadata: Metadata = {
  title: 'KI-Produktvideos für die Schweiz | IB AI Solutions',
  description: 'Professionelle KI-Videoproduktion für Schweizer Unternehmen. Produkt-, Werbe- und Erklärvideos ohne Filmteam — schnell, skalierbar, kosteneffizient.',
  keywords: 'KI Video Schweiz, Produktvideo Schweiz, AI Videoproduktion, KI Werbevideo, Produktvideo erstellen lassen Schweiz',
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
    languages: {
      // Our site serves Swiss German market
      'de-CH': SITE_URL,
      // Partner site serves Germany + Austria
      'de-DE': PARTNER_URL,
      'de-AT': PARTNER_URL,
      // x-default: broader German market → partner
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
  return (
    <html lang="de-CH">
      <head>
        {/* hreflang: CH → us, DE+AT → partner, x-default → partner */}
        <link rel="alternate" hrefLang="de-CH" href={SITE_URL} />
        <link rel="alternate" hrefLang="de-DE" href={PARTNER_URL} />
        <link rel="alternate" hrefLang="de-AT" href={PARTNER_URL} />
        <link rel="alternate" hrefLang="x-default" href={PARTNER_URL} />
      </head>
      <body>{children}</body>
    </html>
  )
}
