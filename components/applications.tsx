import Image from 'next/image'
import { applications } from '@/data/site'
import { Reveal } from './reveal'

export function Applications() {
  return (
    <section id="applications" aria-labelledby="applications-title" className="bg-stone pt-10 pb-24 md:pt-16 md:pb-36">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10 xl:px-14">
        <div className="max-w-[680px]">
          <Reveal>
            <h2
              id="applications-title"
              className="font-serif text-[clamp(2.5rem,4.4vw,4rem)] leading-[1.02] font-normal text-charcoal text-balance"
            >
              Art for <span className="italic text-bronze">every space.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-[580px] text-base leading-relaxed font-medium text-warm-grey text-pretty md:text-lg">
              Designed to complement architecture and elevate everyday experiences.
            </p>
          </Reveal>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-x-3 gap-y-8 md:mt-12 md:grid-cols-3 md:gap-x-5 lg:grid-cols-4 lg:gap-y-12">
          {applications.map((app, i) => {
            const figure = (
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
            )

            return (
              <li key={app.name}>
                <Reveal delay={(i % 4) * 0.08} y={16}>
                  {app.href ? <a href={app.href} className="block">{figure}</a> : figure}
                </Reveal>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
