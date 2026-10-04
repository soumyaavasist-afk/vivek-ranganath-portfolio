import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { clients, press } from '@/data/site'
import { Reveal } from './reveal'
import { SectionLabel } from './cta-link'

export function Clients() {
  return (
    <section id="clients" aria-labelledby="clients-title" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10 xl:px-14">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionLabel index="06">Clients</SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                id="clients-title"
                className="mt-10 font-serif text-[clamp(2.25rem,4.2vw,4rem)] leading-[1.02] font-light text-charcoal text-balance"
              >
                Trusted by <span className="italic">leading brands.</span>
              </h2>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.2}>
          <ul className="mt-16 grid grid-cols-2 border-t border-l border-charcoal/15 lg:grid-cols-4">
            {clients.map((client) => (
              <li
                key={client.name}
                className="group flex aspect-[3/2] items-center justify-center border-r border-b border-charcoal/15 bg-paper/30 p-6 transition-colors duration-300 hover:bg-paper/70 md:aspect-[2/1] md:p-8"
              >
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={client.width}
                  height={client.height}
                  className={`w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.03] ${client.logoClassName}`}
                />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

export function Press() {
  return (
    <section id="press" aria-labelledby="press-title" className="bg-paper py-24 md:py-32">
      <div className="mx-auto grid max-w-[1600px] gap-14 px-5 md:px-10 lg:grid-cols-12 xl:px-14">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionLabel index="07">Press</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              id="press-title"
              className="mt-10 font-serif text-[clamp(2.25rem,4.2vw,4rem)] leading-[1.02] font-light text-charcoal text-balance"
            >
              In the <span className="italic">press.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-sm text-lg leading-relaxed text-warm-grey">
              Featured in <span className="text-charcoal">{press.publication}</span>.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="lg:col-span-6 lg:col-start-7">
          <figure className="border border-charcoal/15 bg-ivory">
            <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden border-b border-charcoal/15 bg-stone">
              {press.image ? (
                <Image
                  src={press.image}
                  alt={`Article feature in ${press.publication}`}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              ) : (
                <div className="px-8 text-center">
                  <p className="font-serif text-3xl text-charcoal md:text-5xl">{press.publication}</p>
                  <p className="eyebrow mt-4 text-[0.625rem] text-warm-grey">Article image to be added</p>
                </div>
              )}
            </div>
            <figcaption className="flex items-center justify-between gap-6 p-6 md:p-8">
              <p className="text-sm leading-relaxed text-warm-grey">
                {press.excerpt ?? 'Feature article — verified excerpt to be added.'}
              </p>
              {press.articleUrl && (
                <a
                  href={press.articleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="eyebrow inline-flex shrink-0 items-center gap-2 text-charcoal hover:text-bronze"
                >
                  Read
                  <ArrowUpRight aria-hidden="true" className="size-4" strokeWidth={1.25} />
                  <span className="sr-only">the article (opens in a new tab)</span>
                </a>
              )}
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
