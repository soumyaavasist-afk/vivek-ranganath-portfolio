import Image from 'next/image'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { CtaLink } from './cta-link'
import { ImageReveal } from './reveal'

type ArtworkImageProps = {
  src: string
  alt: string
  sizes: string
  className: string
  label?: string
  priority?: boolean
}

const disciplines = [
  {
    title: 'Paintings',
    description: 'Works shaped around the character and scale of each room.',
    image: '/images/residences/collection.jpg',
    alt: 'Framed artwork in a contemporary private residence.',
  },
  {
    title: 'Murals',
    description: 'Site-responsive gestures that become part of the architecture.',
    image: '/images/residences/threshold.jpg',
    alt: 'Light-filled residential interior with a sculptural staircase.',
  },
  {
    title: 'Sculpture',
    description: 'Tactile forms placed in dialogue with proportion and light.',
    image: '/images/residences/space-courtyard.jpg',
    alt: 'Quiet residential reading space with natural materials and shelving.',
  },
  {
    title: 'Spatial art',
    description: 'Art conceived for the daily rituals and atmosphere of home.',
    image: '/images/residences/space-private.jpg',
    alt: 'Private residential interior with a restrained material palette.',
  },
]

const selectedWorks = [
  {
    title: 'A softer point of view',
    category: 'Private living',
    description: 'A considered relationship between artwork, light and material.',
    image: '/images/residences/living.jpg',
    alt: 'Open residential living room with a sculptural staircase and warm wood.',
    layout: 'portrait',
  },
  {
    title: 'Room for reflection',
    category: 'Living space',
    description: 'An interior study in proportion, texture and natural light.',
    image: '/images/residences/space-living.jpg',
    alt: 'Contemporary residential living area with a quiet architectural composition.',
    layout: 'wide',
  },
  {
    title: 'Art in the details',
    category: 'Artwork study',
    description: 'A layered composition developed around the home’s material palette.',
    image: '/images/residences/collection.jpg',
    alt: 'Framed contemporary artwork in a private residential interior.',
    layout: 'small',
  },
  {
    title: 'A quieter rhythm',
    category: 'Private living',
    description: 'Light, texture and proportion brought into a calmer balance.',
    image: '/images/residences/space-private.jpg',
    alt: 'Private residential interior with a restrained material palette.',
    layout: 'small',
  },
  {
    title: 'Material in balance',
    category: 'Private residence',
    description: 'Warm surfaces and considered details shape the character of a room.',
    image: '/images/residences/threshold.jpg',
    alt: 'Light-filled home interior with an open staircase and dining area.',
    layout: 'wide',
  },
]

function ArtworkImage({ src, alt, sizes, className, label, priority = false }: ArtworkImageProps) {
  const frameClassName = `group relative overflow-hidden bg-stone ${className}`
  const image = (
    <>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
      />
      {label && (
        <span className="eyebrow absolute top-3 left-3 border border-charcoal/10 bg-ivory/95 px-2.5 py-1.5 text-[0.5rem] text-charcoal md:top-4 md:left-4">
          {label}
        </span>
      )}
    </>
  )

  return priority ? <div className={frameClassName}>{image}</div> : <ImageReveal className={frameClassName}>{image}</ImageReveal>
}

function Caption({ category, title, description }: { category: string; title: string; description: string }) {
  return (
    <figcaption className="mt-3 border-t border-charcoal/15 pt-3">
      <p className="eyebrow text-warm-grey">{category}</p>
      <h3 className="mt-1.5 font-serif text-[1.6rem] leading-tight font-medium text-charcoal md:text-[1.9rem]">{title}</h3>
      <p className="mt-1.5 max-w-[34rem] text-[0.8125rem] leading-relaxed font-medium text-warm-grey md:text-[0.9375rem]">{description}</p>
    </figcaption>
  )
}

export function LuxuryResidencesShowcase() {
  return (
    <>
      <section aria-labelledby="residence-hero-title" className="bg-ivory pt-20">
        <div className="grid md:grid-cols-[39%_61%]">
          <div className="flex items-center px-6 py-12 sm:px-10 md:px-[5.2vw] md:py-8">
            <div className="w-full max-w-[34rem]">
              <p className="eyebrow flex items-center gap-3 text-charcoal/70">
                Luxury Residences
                <span aria-hidden="true" className="h-px w-8 bg-bronze/70" />
              </p>
              <h1 id="residence-hero-title" className="mt-5 font-serif text-[clamp(2.65rem,4.15vw,4.3rem)] leading-[0.94] font-medium text-charcoal text-balance">
                Art made
                <br />
                for <span className="italic text-bronze lg:whitespace-nowrap">living spaces.</span>
              </h1>
              <p className="mt-5 max-w-[28rem] text-sm leading-[1.65] font-medium text-charcoal/75 md:text-base">
                Bespoke paintings, murals, sculptural works and spatial art created in harmony with the architecture, materials and personality of each residence.
              </p>
              <CtaLink href="#selected-work" className="mt-6 min-h-[50px] px-5 text-[0.625rem]">
                Explore Residential Work
              </CtaLink>
            </div>
          </div>
          <ArtworkImage
            src="/images/residences/bespoke.jpg"
            alt="Abstract painting displayed above a sofa in a private living space."
            sizes="(min-width: 768px) 61vw, 100vw"
            className="aspect-[4/3] md:aspect-[10/7]"
            label="Concept image"
            priority
          />
        </div>
      </section>

      <section aria-labelledby="residential-intro-title" className="bg-ivory pt-12 pb-6 md:pt-14 md:pb-5">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 xl:px-14">
          <div className="grid gap-5 md:grid-cols-12 md:items-end md:gap-8">
            <div className="md:col-span-6">
              <p className="eyebrow flex items-center gap-3 text-warm-grey">
                Our approach
                <span aria-hidden="true" className="h-px w-8 bg-charcoal/30" />
              </p>
              <h2 id="residential-intro-title" className="mt-3 font-serif text-[clamp(2.35rem,4vw,3.55rem)] leading-[0.98] font-medium text-charcoal text-balance">
                Art that belongs<br />to the <span className="italic text-bronze">home.</span>
              </h2>
            </div>
            <p className="text-sm leading-relaxed font-medium text-charcoal/70 md:col-span-5 md:col-start-8 md:text-base">
              Each work is developed in conversation with the architecture, materials, light and the way you live. The result is art that feels intentional, personal and seamlessly integrated into the space.
            </p>
          </div>

          <div className="mt-7 grid grid-cols-2 gap-x-4 gap-y-6 border-t border-charcoal/15 pt-4 sm:gap-x-5 md:mt-9 md:grid-cols-4 md:gap-x-6">
            {disciplines.map((discipline) => (
              <figure key={discipline.title} className="min-w-0">
                <ArtworkImage
                  src={discipline.image}
                  alt={discipline.alt}
                  sizes="(min-width: 768px) 22vw, 46vw"
                  className="aspect-[4/3]"
                />
                <figcaption className="mt-2.5">
                  <h3 className="eyebrow text-charcoal">{discipline.title}</h3>
                  <p className="mt-1.5 max-w-[18rem] text-xs leading-relaxed text-warm-grey">{discipline.description}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="featured-residence-title" className="bg-ivory pt-3 pb-6 md:pt-4 md:pb-6">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 xl:px-14">
          <p className="eyebrow mb-4 flex items-center gap-3 text-warm-grey">
            Featured work
            <span aria-hidden="true" className="h-px w-8 bg-charcoal/30" />
          </p>
          <div className="grid gap-5 md:grid-cols-12 md:items-center md:gap-8">
            <ArtworkImage
              src="/images/residences/space-living.jpg"
              alt="Residential living area considered as a setting for a site-responsive artwork."
              sizes="(min-width: 768px) 64vw, 100vw"
              className="aspect-[4/3] md:col-span-8 md:aspect-[16/8]"
              label="Concept image"
            />
            <div className="md:col-span-4">
              <p className="eyebrow text-bronze">Private residence</p>
              <h2 id="featured-residence-title" className="mt-2 font-serif text-[2rem] leading-[1.02] font-medium text-charcoal md:text-[2.5rem]">
                A work in context.
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-warm-grey">Living area · Spatial art study</p>
              <p className="mt-4 max-w-[24rem] text-sm leading-relaxed text-charcoal/70">
                A considered focal point, shaped by the proportions, materials and everyday life of the home.
              </p>
              <a href="#selected-work" className="group mt-5 inline-flex items-center gap-3 eyebrow text-[0.625rem] text-bronze">
                View selected work
                <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.4} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="selected-work" aria-labelledby="selected-work-title" className="bg-ivory pt-8 pb-12 md:pt-7 md:pb-16">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 xl:px-14">
          <header className="mb-6 grid gap-3 border-t border-charcoal/15 pt-4 md:mb-8 md:grid-cols-12 md:items-end md:gap-8">
            <div className="md:col-span-7">
              <p className="eyebrow text-warm-grey">Selected residential work</p>
              <h2 id="selected-work-title" className="mt-2 font-serif text-[clamp(2.3rem,4vw,3.5rem)] leading-none font-medium text-charcoal">
                Created for the home.
              </h2>
            </div>
            <p className="text-xs leading-relaxed text-warm-grey md:col-span-4 md:col-start-9 md:text-sm">
              Visual studies in art, material and the spaces we live in. All imagery shown as concept direction.
            </p>
          </header>

          <div className="grid grid-cols-1 gap-x-4 gap-y-7 sm:grid-cols-2 sm:gap-y-8 xl:grid-cols-12 xl:gap-y-4">
            {selectedWorks.map((work) => {
              const layoutClass = {
                portrait: 'xl:col-span-4 xl:row-span-2 xl:flex xl:flex-col',
                wide: 'xl:col-span-5',
                small: 'xl:col-span-3',
              }[work.layout]
              const imageClass = {
                portrait: 'aspect-[4/3] xl:aspect-auto xl:min-h-0 xl:flex-1',
                wide: 'aspect-[4/3] xl:aspect-[5/2]',
                small: 'aspect-[4/3] xl:aspect-[16/10]',
              }[work.layout]
              return (
                <figure key={work.title} className={`min-w-0 sm:last:col-span-2 xl:last:col-span-5 ${layoutClass}`}>
                  <ArtworkImage
                    src={work.image}
                    alt={work.alt}
                    sizes={work.layout === 'portrait' ? '(min-width: 1280px) 30vw, 100vw' : work.layout === 'wide' ? '(min-width: 1280px) 42vw, 100vw' : '(min-width: 1280px) 26vw, 100vw'}
                    className={imageClass}
                  />
                  <Caption category={work.category} title={work.title} description={work.description} />
                </figure>
              )
            })}
          </div>
        </div>
      </section>

      <section aria-labelledby="residence-close-title" className="grid bg-charcoal text-paper md:grid-cols-[39%_61%]">
        <div className="flex flex-col justify-center px-6 py-12 sm:px-10 md:px-[5.2vw] md:py-10">
          <p className="eyebrow flex items-center gap-3 text-paper/65">
            Luxury Residences
            <span aria-hidden="true" className="h-px w-8 bg-paper/35" />
          </p>
          <h2 id="residence-close-title" className="mt-4 font-serif text-[clamp(2.5rem,4.4vw,4rem)] leading-[0.98] font-medium text-paper">
            A work created<br />for your <span className="italic text-[#c0a17e]">space.</span>
          </h2>
          <p className="mt-4 max-w-[26rem] text-sm leading-relaxed text-paper/75">
            Looking for an artwork, mural or sculptural piece created specifically for a residence?
          </p>
          <CtaLink href="/#contact" variant="solid-light" className="mt-6 w-fit min-h-[50px] px-5 text-[0.625rem]">
            Discuss a Residential Project
          </CtaLink>
        </div>
        <ArtworkImage
          src="/images/residences/arrival.jpg"
          alt="Contemporary private residence at dusk, framed by its landscaped grounds."
          sizes="(min-width: 768px) 61vw, 100vw"
          className="aspect-[4/3] md:aspect-auto md:min-h-[360px]"
          label="Concept image"
        />
      </section>
    </>
  )
}