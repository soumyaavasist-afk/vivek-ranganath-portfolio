import Image from 'next/image'
import { Award, GraduationCap, MapPin, Palette } from 'lucide-react'
import { images } from '@/data/site'
import { CtaLink } from './cta-link'

const aboutStats = [
  { value: '22+', label: 'Years of Experience' },
  { value: '1000+', label: 'Murals & Artworks' },
  { value: 'Across', label: 'India & Beyond' },
]

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-section-title"
      className="bg-ivory lg:h-svh lg:min-h-[720px] lg:max-h-[900px]"
    >
      <div className="mx-auto grid w-full max-w-[1600px] gap-8 px-5 py-8 md:px-10 md:py-10 lg:h-full lg:grid-cols-[min(44vw,75svh,675px)_minmax(0,1fr)] lg:items-center lg:gap-x-8 lg:px-0 lg:py-0">
        <div className="relative mx-auto aspect-[3/4] w-full max-w-[675px] lg:mx-0">
          <Image
            src={images.about}
            alt="Vivek Ranganath in his studio, surrounded by artwork and painting tools"
            fill
            priority
            sizes="(min-width: 1024px) 44vw, 100vw"
            className="object-contain"
          />
        </div>

        <div className="grid min-w-0 content-center gap-8 lg:gap-[52px] lg:py-10">
          <div className="min-w-0">
            <h2
              id="about-section-title"
              className="w-fit border-b border-bronze/60 pb-2 font-serif text-[2rem] leading-none font-normal text-charcoal md:text-[2.125rem]"
            >
              About
            </h2>
            <h3
              id="about-title"
              className="mt-8 max-w-[18ch] font-serif text-[2.75rem] leading-[0.98] font-normal text-charcoal text-balance lg:text-[clamp(3.625rem,4.4vw,4.5rem)]"
            >
              An Artist
              <br />
              <em className="text-bronze">for</em> Living Spaces
            </h3>
            <p className="mt-7 max-w-[640px] text-justify hyphens-auto text-[1rem] leading-[1.55] font-medium text-warm-grey md:text-[1.0625rem]">
              Vivek Ranganath is a visual artist, art consultant and designer based in Bengaluru, India. His practice
              spans <strong className="font-semibold text-charcoal">paintings, murals, sculpture</strong> and{' '}
              <strong className="font-semibold text-charcoal">spatial art</strong>, bringing traditional influences into
              contemporary spaces. His approach begins with a space&apos;s character: its materials, movement and light.
              Each commission grows from that reading, bringing a distinct artistic presence to its surroundings.
            </p>
            <CtaLink href="#projects" variant="text" className="mt-7 min-h-10 w-fit gap-2 px-0 py-2 text-[0.6875rem]">
              Explore Selected Work
            </CtaLink>
          </div>

          <dl className="grid grid-cols-1 border-t border-charcoal/15 sm:grid-cols-3">
            {aboutStats.map(({ value, label }, index) => (
              <div
                key={value}
                className={`min-w-0 py-4 ${index > 0 ? 'border-t border-charcoal/10 sm:border-l sm:border-t-0 sm:pl-5' : 'sm:pr-3'}`}
              >
                <dt className="font-serif text-[1.8rem] leading-none font-normal text-charcoal md:text-[2rem]">
                  {value}
                </dt>
                <dd className="eyebrow mt-2 text-[0.5625rem] leading-[1.55] tracking-[0.15em] text-warm-grey md:text-[0.625rem]">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
