import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Video Production | IB Solutions',
  description: 'Professional AI-powered video production for Swiss businesses',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}
