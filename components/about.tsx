import Image from 'next/image'
import { credentials, images } from '@/data/site'
import { ImageReveal, Reveal } from './reveal'
import { SectionLabel } from './cta-link'

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-paper py-24 md:py-36">
      <div className="mx-auto grid max-w-[1600px] gap-14 px-5 md:px-10 lg:grid-cols-12 lg:gap-10 xl:px-14">
        <div className="lg:col-span-5">
          <ImageReveal className="relative aspect-[4/5] overflow-hidden bg-stone">
            {/* PLACEHOLDER: replace with an approved editorial portrait of Vivek */}
            <Image
              src={images.portrait}
              alt="Vivek Ranganath working on a large-scale canvas in his studio"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </ImageReveal>
          <p className="eyebrow mt-4 text-[0.625rem] text-warm-grey">Studio · Bengaluru</p>
        </div>

        <div className="flex flex-col justify-between lg:col-span-6 lg:col-start-7">
          <div>
            <Reveal>
              <SectionLabel index="01">About the Artist</SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                id="about-title"
                className="mt-10 font-serif text-[clamp(2.25rem,4.2vw,4rem)] leading-[1.02] font-light text-charcoal text-balance"
              >
                Art that responds to <span className="italic">space.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10 max-w-xl space-y-6 text-lg leading-relaxed text-warm-grey text-pretty">
                <p>
                  Vivek Ranganath is a contemporary artist with over two decades of experience creating murals,
                  sculptures and art installations for residential, hospitality, corporate and public environments.
                </p>
                <p>
                  His work combines artistic sensitivity with spatial understanding, allowing each piece to respond to
                  the architecture, purpose and identity of the space it occupies.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.3}>
            <dl className="mt-16 grid grid-cols-2 border-t border-charcoal/15">
              {credentials.map((c, i) => (
                <div
                  key={c.label}
                  className={`border-b border-charcoal/15 py-6 ${i % 2 === 0 ? 'border-r pr-5' : 'pl-5'}`}
                >
                  <dt className="eyebrow text-[0.625rem] text-warm-grey">{c.label}</dt>
                  <dd className="mt-3 font-serif text-2xl leading-tight text-charcoal md:text-3xl">{c.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
