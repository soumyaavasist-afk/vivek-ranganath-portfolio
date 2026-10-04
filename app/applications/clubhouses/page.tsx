import type { Metadata } from 'next'
import { ClubhousesPage } from '@/components/clubhouses-page'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/contact'

export const metadata: Metadata = {
  title: 'Clubhouses | Vivek Ranganath',
  description:
    'Bespoke murals, paintings and sculptural works for premium clubhouses, lounges and shared social spaces.',
}

export default function ClubhousesRoute() {
  return (
    <>
      <a
        href="#clubhouses-main"
        className="eyebrow sr-only z-[60] bg-charcoal px-4 py-3 text-paper focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Skip to content
      </a>
      <Navbar homePath="/" />
      <main id="clubhouses-main">
        <ClubhousesPage />
      </main>
      <Footer homePath="/" />
    </>
  )
}