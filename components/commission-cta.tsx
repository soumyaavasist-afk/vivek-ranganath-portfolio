import { commissionOfferings, contact, portfolio } from '@/data/site'
import { Reveal } from './reveal'
import { CtaLink, SectionLabel } from './cta-link'

export function CommissionCta() {
  return (
    <section aria-labelledby="commission-title" className="bg-charcoal py-24 text-paper md:py-36">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10 xl:px-14">
        <Reveal>
          <SectionLabel index="08" light>
            Commissions
          </SectionLabel>
        </Reveal>
        <div className="mt-10 grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <h2
                id="commission-title"
                className="font-serif text-[clamp(2.75rem,6vw,6.25rem)] leading-[0.95] font-light text-balance"
              >
                Commission a <span className="italic">signature artwork.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-paper/65 text-pretty">
                Working with architects, developers and design teams to create customised artworks for architectural
                environments.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.25} className="lg:col-span-4 lg:col-start-9 lg:pt-4">
            <ul className="border-t border-paper/20">
              {commissionOfferings.flat().map((item) => (
                <li key={item} className="flex items-center gap-4 border-b border-paper/20 py-4 font-serif text-xl">
                  <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-bronze" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.3} className="mt-16 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:mt-20">
          <CtaLink href={contact.whatsappHref} variant="solid-light">
            WhatsApp {contact.phoneDisplay}
          </CtaLink>
          <CtaLink href={`mailto:${contact.email}?subject=Commission%20enquiry`} variant="outline-light">
            Email Us
          </CtaLink>
          <CtaLink href={portfolio.href} variant="outline-light" download>
            Download Portfolio
          </CtaLink>
        </Reveal>
      </div>
    </section>
  )
}
