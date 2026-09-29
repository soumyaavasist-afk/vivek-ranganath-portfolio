import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const title = 'Vivek Ranganath — Contemporary Artist | Sculptures, Murals & Art Installations'
const description =
  'Vivek Ranganath is a contemporary artist creating site-specific sculptures, murals and art installations for architecture, hospitality, corporate and luxury developments.'

export const metadata: Metadata = {
  title,
  description,
  generator: 'v0.app',
  keywords: [
    'Vivek Ranganath',
    'contemporary artist',
    'site-specific sculpture',
    'murals',
    'art installations',
    'art consultant Bengaluru',
    'architectural art',
    'hospitality art',
  ],
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'en_IN',
    siteName: 'Vivek Ranganath',
    images: [{ url: '/images/hero.png', width: 1536, height: 1024, alt: 'Site-specific artwork in an architectural setting' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/images/hero.png'],
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#F5F1E8',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
