import type { Metadata } from 'next'
import { CorporateLobbiesPage } from '@/components/corporate-lobbies-page'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/contact'

export const metadata: Metadata = {
  title: 'Corporate Lobbies | Vivek Ranganath',
  description:
    'Site-specific art, sculptures, murals and installations for corporate lobbies and workplace environments.',
}

export default function CorporateLobbiesRoute() {
  return (
    <>
      <a
        href="#corporate-main"
        className="eyebrow sr-only z-[60] bg-charcoal px-4 py-3 text-paper focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Skip to content
      </a>
      <Navbar homePath="/" />
      <main id="corporate-main">
        <CorporateLobbiesPage />
      </main>
      <Footer homePath="/" />
    </>
  )
}