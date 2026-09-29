import Image from 'next/image'
import { images, processSteps } from '@/data/site'
import { ImageReveal, Reveal } from './reveal'
import { SectionLabel } from './cta-link'

export function Approach() {
  return (
    <section id="approach" aria-labelledby="approach-title" className="py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10 xl:px-14">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionLabel index="04">Artistic Approach</SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                id="approach-title"
                className="mt-10 font-serif text-[clamp(2.5rem,5vw,5rem)] leading-[0.98] font-light text-charcoal text-balance"
              >
                Art rooted in <span className="italic">context.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="lg:col-span-6 lg:col-start-7 lg:pt-24">
            <div className="max-w-xl space-y-6 text-lg leading-relaxed text-warm-grey text-pretty">
              <p>
                Every artwork is shaped by its surroundings — scale, material, light, movement and the people who
                experience the space.
              </p>
              <p>
                Through site-specific thinking, Vivek creates works that feel integrated, meaningful and enduring.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <ImageReveal className="relative mt-20 aspect-[4/3] w-full overflow-hidden md:mt-28 md:aspect-[21/9]">
        <Image
          src={images.approach}
          alt="Concept image: a monumental mural spanning the length of a gallery-like corridor"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </ImageReveal>
    </section>
  )
}

export function Process() {
  return (
    <section aria-labelledby="process-title" className="bg-charcoal py-24 text-paper md:py-32">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10 xl:px-14">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionLabel index="05" light>
                Process
              </SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                id="process-title"
                className="mt-10 font-serif text-[clamp(2.5rem,5vw,5rem)] leading-[0.98] font-light text-balance"
              >
                From concept <span className="italic">to installation.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="lg:col-span-4 lg:col-start-9">
            <p className="max-w-md text-lg leading-relaxed text-paper/65 text-pretty">
              A considered process that keeps architects, developers and project teams aligned at every stage.
            </p>
          </Reveal>
        </div>

        <ol className="mt-16 grid border-t border-paper/20 md:mt-24 md:grid-cols-5">
          {processSteps.map((step, i) => (
            <li
              key={step.number}
              className="border-b border-paper/20 py-8 md:border-r md:border-b-0 md:px-6 md:py-10 md:first:pl-0 md:last:border-r-0"
            >
              <Reveal delay={i * 0.1} y={16}>
                <p className="eyebrow text-bronze">{step.number}</p>
                <h3 className="mt-6 font-serif text-3xl font-light md:mt-16 lg:text-4xl">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/60">{step.detail}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
