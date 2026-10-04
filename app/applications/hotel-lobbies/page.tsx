import type { Metadata } from 'next'
import { HotelLobbiesPage } from '@/components/hotel-lobbies-page'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/contact'

export const metadata: Metadata = {
  title: 'Hotel Lobbies | Vivek Ranganath',
  description:
    'Site-specific murals, sculptures, paintings and installations for hotel lobbies and hospitality spaces.',
}

export default function HotelLobbiesRoute() {
  return (
    <>
      <a
        href="#hotel-main"
        className="eyebrow sr-only z-[60] bg-charcoal px-4 py-3 text-paper focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Skip to content
      </a>
      <Navbar homePath="/" />
      <main id="hotel-main">
        <HotelLobbiesPage />
      </main>
      <Footer homePath="/" />
    </>
  )
}