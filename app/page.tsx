import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { ProjectShowcase } from '@/components/project-showcase'
import { Applications } from '@/components/applications'
import { Approach, Process } from '@/components/approach'
import { Clients, Press } from '@/components/clients-press'
import { CommissionCta } from '@/components/commission-cta'
import { Contact, Footer } from '@/components/contact'

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="eyebrow sr-only z-[60] bg-charcoal px-4 py-3 text-paper focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Skip to content
      </a>
      <main id="main">
        <Hero />
        <About />
        <ProjectShowcase />
        <Applications />
        <Approach />
        <Process />
        <Clients />
        <Press />
        <CommissionCta />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
