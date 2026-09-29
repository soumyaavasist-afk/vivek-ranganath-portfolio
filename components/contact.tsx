import Image from 'next/image'
import { contact, images, navItems, portfolio } from '@/data/site'
import { Reveal } from './reveal'
import { CtaLink, SectionLabel } from './cta-link'
import { InquiryForm } from './inquiry-form'

export function Contact() {
  const details = [
    { label: 'Phone / WhatsApp', value: contact.phoneDisplay, href: contact.phoneHref },
    { label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
    { label: 'Studio', value: contact.location },
  ]

  return (
    <section id="contact" aria-labelledby="contact-title" className="py-24 md:py-36">
      <div className="mx-auto grid max-w-[1600px] gap-16 px-5 md:px-10 lg:grid-cols-12 xl:px-14">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionLabel index="09">Contact</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              id="contact-title"
              className="mt-10 font-serif text-[clamp(2.5rem,5vw,5rem)] leading-[0.98] font-light text-charcoal text-balance"
            >
              Let&apos;s create something <span className="italic">meaningful.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <dl className="mt-12 border-t border-charcoal/15">
              {details.map((d) => (
                <div key={d.label} className="border-b border-charcoal/15 py-5">
                  <dt className="eyebrow text-[0.625rem] text-warm-grey">{d.label}</dt>
                  <dd className="mt-2 font-serif text-2xl text-charcoal">
                    {d.href ? (
                      <a href={d.href} className="decoration-bronze underline-offset-4 hover:underline">
                        {d.value}
                      </a>
                    ) : (
                      d.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <CtaLink href={contact.whatsappHref}>WhatsApp</CtaLink>
              <CtaLink href={portfolio.href} variant="outline" download>
                Download Portfolio
              </CtaLink>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="lg:col-span-6 lg:col-start-7 lg:pt-28">
          <div className="border border-charcoal/15 bg-paper p-6 md:p-10">
            <p className="eyebrow mb-10 text-charcoal">Project Enquiry</p>
            <InquiryForm />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function Footer() {
  const socials = [
    { label: 'LinkedIn', href: contact.linkedin },
    { label: 'Instagram', href: contact.instagram },
  ]
  return (
    <footer className="border-t border-charcoal/15 bg-stone">
      <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-10 xl:px-14">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Image src={images.logo} alt="Vivek Ranganath" width={437} height={103} className="h-10 w-auto" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-warm-grey">
              Site-specific sculptures, murals and art installations for architectural environments.
            </p>
          </div>
          <nav aria-label="Footer" className="md:col-span-3 md:col-start-7">
            <p className="eyebrow text-[0.625rem] text-warm-grey">Explore</p>
            <ul className="mt-5 grid grid-cols-2 gap-y-2 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-charcoal hover:text-bronze">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="md:col-span-3">
            <p className="eyebrow text-[0.625rem] text-warm-grey">Connect</p>
            <ul className="mt-5 space-y-2 text-sm">
              <li>
                <a href={contact.phoneHref} className="text-charcoal hover:text-bronze">
                  {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="text-charcoal hover:text-bronze">
                  {contact.email}
                </a>
              </li>
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-charcoal hover:text-bronze">
                    {s.label}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-3 border-t border-charcoal/15 pt-6 text-xs text-warm-grey md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} Vivek Ranganath. All rights reserved.</p>
          <p>{contact.location}</p>
        </div>
      </div>
    </footer>
  )
}
