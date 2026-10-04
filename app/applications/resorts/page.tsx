import type { Metadata } from 'next'
import { ResortsPage } from '@/components/resorts-page'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/contact'

export const metadata: Metadata = {
  title: 'Resorts | Vivek Ranganath',
  description:
    'Site-specific murals, sculptures and spatial artworks created for resorts where architecture, nature and hospitality come together.',
}

export default function ResortsRoute() {
  return (
    <>
      <a
        href="#resorts-main"
        className="eyebrow sr-only z-[60] bg-charcoal px-4 py-3 text-paper focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Skip to content
      </a>
      <Navbar homePath="/" />
      <main id="resorts-main">
        <ResortsPage />
      </main>
      <Footer homePath="/" />
    </>
  )
}