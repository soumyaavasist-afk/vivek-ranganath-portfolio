import type { Metadata } from 'next'
import { ApartmentEntrancesPage } from '@/components/apartment-entrances-page'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/contact'

export const metadata: Metadata = {
  title: 'Apartment Entrances | Vivek Ranganath',
  description:
    'Thoughtful murals, paintings and sculptural works designed to give apartment entrances a distinct sense of arrival, identity and character.',
}

export default function ApartmentEntrancesRoute() {
  return (
    <>
      <a
        href="#apartment-main"
        className="eyebrow sr-only z-[60] bg-charcoal px-4 py-3 text-paper focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Skip to content
      </a>
      <Navbar homePath="/" />
      <main id="apartment-main">
        <ApartmentEntrancesPage />
      </main>
      <Footer homePath="/" />
    </>
  )
}