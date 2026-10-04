import type { Metadata } from 'next'
import { LuxuryResidencesShowcase } from '@/components/luxury-residences-showcase'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/contact'

export const metadata: Metadata = {
  title: 'Luxury Residences | Vivek Ranganath',
  description:
    'Bespoke murals, sculptural works and spatial art for luxury residences, created in dialogue with architecture, materials and light.',
}

export default function LuxuryResidencesRoute() {
  return (
    <>
      <a
        href="#residences-main"
        className="eyebrow sr-only z-[60] bg-charcoal px-4 py-3 text-paper focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Skip to content
      </a>
      <Navbar homePath="/" />
      <main id="residences-main">
        <LuxuryResidencesShowcase />
      </main>
      <Footer homePath="/" />
    </>
  )
}