import Image from 'next/image'
import { applications } from '@/data/site'
import { Reveal } from './reveal'
import { SectionLabel } from './cta-link'

export function Applications() {
  return (
    <section id="applications" aria-labelledby="applications-title" className="bg-stone py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10 xl:px-14">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionLabel index="03">Applications</SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                id="applications-title"
                className="mt-10 font-serif text-[clamp(2.5rem,5vw,5rem)] leading-[0.98] font-light text-charcoal text-balance"
              >
                Art for <span className="italic">every space.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="lg:col-span-4 lg:col-start-9">
            <p className="max-w-md text-lg leading-relaxed text-warm-grey text-pretty">
              Designed to complement architecture and elevate everyday experiences.
            </p>
          </Reveal>
        </div>

        <ul className="mt-16 grid grid-cols-2 gap-x-3 gap-y-8 md:mt-24 md:grid-cols-3 md:gap-x-5 lg:grid-cols-4 lg:gap-y-12">
          {applications.map((app, i) => (
            <li key={app.name}>
              <Reveal delay={(i % 4) * 0.08} y={16}>
                <figure className="group">
                  <div className="relative aspect-[3/4] overflow-hidden bg-ivory">
                    <Image
                      src={app.image}
                      alt={app.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                      className="object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <figcaption className="mt-4 flex items-baseline gap-3 border-t border-charcoal/15 pt-3">
                    <span className="eyebrow text-[0.625rem] text-bronze">{String(i + 1).padStart(2, '0')}</span>
                    <span className="font-serif text-lg leading-tight text-charcoal md:text-xl">{app.name}</span>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
