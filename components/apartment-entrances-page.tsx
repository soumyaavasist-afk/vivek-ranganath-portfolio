import Image from 'next/image'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { CtaLink } from './cta-link'
import { ImageReveal } from './reveal'

type SceneImageProps = {
  src: string
  alt: string
  sizes: string
  className: string
  label?: string
  priority?: boolean
  objectPosition?: string
}

const apartmentImages = {
  abstract: '/images/apartments/Luxurious Lobby with Abstract Gold Art.png',
  atrium: '/images/apartments/Aurora Residences Lobby Atrium.png',
  colorful: '/images/apartments/Colorful Luxury Lobby Lounge.png',
  sculptural: '/images/apartments/Luxurious Lobby with Sculptural Mural and Rattan Lights.png',
}

const disciplines = [
  {
    title: 'Paintings',
    description: 'Statement works that create an immediate sense of place.',
    image: apartmentImages.abstract,
    alt: 'Abstract gold and charcoal artwork anchoring an apartment entrance.',
  },
  {
    title: 'Murals',
    description: 'Site-specific compositions integrated with the architecture.',
    image: apartmentImages.sculptural,
    alt: 'Sculptural wall mural and rattan lighting within a residential lobby.',
  },
  {
    title: 'Sculpture',
    description: 'Three-dimensional forms that add texture and presence.',
    image: apartmentImages.atrium,
    alt: 'Faceted sculptural feature at the center of a residential lobby atrium.',
  },
  {
    title: 'Spatial art',
    description: 'Artistic interventions for shared arrival spaces.',
    image: apartmentImages.colorful,
    alt: 'Colorful mural integrated into a warmly lit shared residential lounge.',
  },
]

const arrivalJourney = [
  {
    title: 'Arrive',
    detail: 'A first visual encounter that establishes identity.',
    image: apartmentImages.abstract,
    alt: 'Artwork wall beside the entrance to a residential lobby.',
    position: 'left center',
  },
  {
    title: 'Pause',
    detail: 'Art creates a moment of attention within the foyer.',
    image: apartmentImages.atrium,
    alt: 'Lobby atrium arranged around a central sculptural feature.',
    position: 'center center',
  },
  {
    title: 'Discover',
    detail: 'Material and detail reveal themselves up close.',
    image: apartmentImages.sculptural,
    alt: 'Close view of textured sculptural mural in a residential lobby.',
    position: 'center center',
  },
  {
    title: 'Enter',
    detail: 'The artwork becomes part of the transition into home.',
    image: apartmentImages.colorful,
    alt: 'Residential lounge opening into a colorful mural-lined interior.',
    position: 'right center',
  },
]

const selectedWorks = [
  {
    number: '01',
    category: 'Entrance wall',
    title: 'The first impression',
    medium: 'Sculptural installation',
    image: apartmentImages.sculptural,
    alt: 'Large sculptural wall composition integrated into a luxury apartment entrance.',
    layout: 'portrait',
  },
  {
    number: '02',
    category: 'Apartment foyer',
    title: 'A mural with a sense of place',
    medium: 'Large-scale painting · Mixed media',
    image: apartmentImages.abstract,
    alt: 'Large abstract gold and charcoal mural across the wall of a residential foyer.',
    layout: 'wide',
  },
  {
    number: '03',
    category: 'Lift lobby',
    title: 'Sculpture as a point of arrival',
    medium: 'Sculptural intervention',
    image: apartmentImages.atrium,
    alt: 'Sculptural architectural feature in an apartment lobby atrium.',
    layout: 'detail',
  },
  {
    number: '04',
    category: 'Corridor art',
    title: 'Art along the threshold',
    medium: 'Spatial art intervention',
    image: apartmentImages.colorful,
    alt: 'Colorful mural in a warm-toned residential entrance lounge.',
    layout: 'detail',
  },
  {
    number: '05',
    category: 'Material detail',
    title: 'Colour, texture and movement',
    medium: 'Mixed media on panel',
    image: apartmentImages.abstract,
    alt: 'Close crop of the abstract gold, charcoal and ivory entrance artwork.',
    layout: 'detail',
  },
  {
    number: '06',
    category: 'Feature sculpture',
    title: 'Sculptural focal point',
    medium: 'Residential entrance',
    image: apartmentImages.atrium,
    alt: 'Sculptural architectural feature framed by the residential lobby atrium.',
    layout: 'small',
  },
]

const processSteps = [
  ['01', 'Understand', 'The architecture, material palette and character of the residence.'],
  ['02', 'Develop', 'Concepts, composition, materials and visual direction.'],
  ['03', 'Create', 'Artwork, mural or sculptural elements made for the space.'],
  ['04', 'Integrate', 'The final work becomes part of the arrival experience.'],
]

function SceneImage({
  src,
  alt,
  sizes,
  className,
  label,
  priority = false,
  objectPosition = 'center',
}: SceneImageProps) {
  const frameClassName = `group relative overflow-hidden bg-stone ${className}`
  const image = (
    <>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        style={{ objectPosition }}
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

function WorkCaption({
  number,
  category,
  title,
  medium,
}: {
  number?: string
  category: string
  title?: string
  medium?: string
}) {
  return (
    <figcaption className="mt-2.5 border-t border-charcoal/15 pt-2.5">
      <p className="eyebrow text-charcoal">
        {number && <span className="mr-2 text-bronze">{number} /</span>}
        {category}
      </p>
      {title && <h3 className="mt-1.5 font-serif text-lg leading-tight font-medium text-charcoal md:text-xl">{title}</h3>}
      {medium && <p className="mt-1 text-xs leading-relaxed text-warm-grey">{medium}</p>}
    </figcaption>
  )
}

export function ApartmentEntrancesPage() {
  return (
    <>
      <section aria-labelledby="apartment-hero-title" className="bg-ivory pt-20">
        <div className="grid md:grid-cols-[60%_40%]">
          <SceneImage
            src={apartmentImages.abstract}
            alt="Gold, charcoal and ivory artwork integrated into a luxury apartment entrance lobby."
            sizes="(min-width: 768px) 60vw, 100vw"
            className="aspect-[4/3] md:aspect-[1.4]"
            label="Concept image"
            priority
          />
          <div className="flex items-center px-6 py-10 sm:px-10 md:px-8 md:py-8 xl:px-[5.2vw]">
            <div className="w-full max-w-[34rem]">
              <p className="eyebrow flex items-center gap-3 text-bronze">
                Apartment Entrances
                <span aria-hidden="true" className="h-px w-8 bg-bronze/70" />
                <span className="text-charcoal/55">Residential Art</span>
              </p>
              <h1 id="apartment-hero-title" className="mt-5 font-serif text-[clamp(2.1rem,4.2vw,3.85rem)] leading-[0.96] font-medium text-charcoal text-balance">
                Art that begins
                <br />
                at the <span className="italic text-bronze">threshold.</span>
              </h1>
              <p className="mt-5 max-w-[30rem] text-sm leading-[1.65] font-medium text-charcoal/75 md:text-[0.9375rem] xl:text-base">
                Thoughtful murals, paintings and sculptural works designed to give apartment entrances a distinct sense of arrival, identity and character.
              </p>
              <a href="#selected-work" className="group mt-6 inline-flex items-center gap-3 eyebrow text-[0.625rem] text-charcoal">
                View selected work
                <ArrowDown aria-hidden="true" className="size-4 transition-transform duration-300 group-hover:translate-y-1" strokeWidth={1.3} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="arrival-title" className="bg-ivory py-9 md:py-10">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 xl:px-14">
          <div className="grid gap-4 md:grid-cols-12 md:items-end md:gap-8">
            <div className="md:col-span-6">
              <p className="eyebrow flex items-center gap-3 text-bronze">
                The arrival experience
                <span aria-hidden="true" className="h-px w-8 bg-bronze/60" />
              </p>
              <h2 id="arrival-title" className="mt-3 font-serif text-[clamp(2.25rem,4vw,3.5rem)] leading-[0.98] font-medium text-charcoal text-balance">
                Where architecture<br />meets <span className="italic text-bronze">first impression.</span>
              </h2>
            </div>
            <p className="text-sm leading-relaxed font-medium text-charcoal/70 md:col-span-5 md:col-start-8 md:text-[0.9375rem]">
              An entrance is more than a passage into a building. It is the moment where architecture, identity and atmosphere meet. Each artwork is conceived to respond to the scale, materials, light and character of the arrival space.
            </p>
          </div>

          <div className="mt-7 grid grid-cols-2 gap-x-4 gap-y-6 border-t border-charcoal/15 pt-4 sm:gap-x-5 md:mt-8 md:grid-cols-4 md:gap-x-6">
            {disciplines.map((discipline) => (
              <figure key={discipline.title} className="min-w-0">
                <SceneImage src={discipline.image} alt={discipline.alt} sizes="(min-width: 768px) 22vw, 46vw" className="aspect-[4/3]" />
                <figcaption className="mt-2.5">
                  <p className="eyebrow text-charcoal">{discipline.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-warm-grey">{discipline.description}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="featured-entrance-title" className="bg-ivory py-5 md:py-7">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 xl:px-14">
          <p className="eyebrow mb-4 flex items-center gap-3 text-charcoal">
            01 <span className="text-bronze">/</span> Featured work
            <span aria-hidden="true" className="h-px w-8 bg-charcoal/30" />
          </p>
          <div className="grid gap-5 md:grid-cols-12 md:items-center md:gap-8">
            <SceneImage
              src={apartmentImages.sculptural}
              alt="A monumental sculptural mural anchors a warm-toned apartment lobby."
              sizes="(min-width: 768px) 64vw, 100vw"
              className="aspect-[4/3] md:col-span-8 md:aspect-[16/8]"
              label="Concept image"
            />
            <div className="md:col-span-4">
              <p className="eyebrow text-bronze">Residential lobby</p>
              <h2 id="featured-entrance-title" className="mt-2 font-serif text-[2rem] leading-[1.02] font-medium text-charcoal md:text-[2.45rem]">
                The entrance becomes the first impression.
              </h2>
              <p className="mt-3 text-xs leading-relaxed text-warm-grey">Lift lobby · Mural · Mixed media</p>
              <p className="mt-4 text-sm leading-relaxed text-charcoal/70">
                A considered artwork can transform a functional arrival space into an experience, establishing identity before a visitor enters the residence.
              </p>
              <a href="#selected-work" className="group mt-5 inline-flex items-center gap-3 eyebrow text-[0.625rem] text-bronze">
                View project
                <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.4} />
              </a>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-3 md:mt-6 md:gap-4">
            <SceneImage src={apartmentImages.abstract} alt="Close detail of gold and charcoal mural textures." sizes="(min-width: 768px) 30vw, 33vw" className="aspect-[4/3]" />
            <SceneImage src={apartmentImages.colorful} alt="Wide view of an artwork integrated with residential lounge architecture." sizes="(min-width: 768px) 30vw, 33vw" className="aspect-[4/3]" />
            <SceneImage src={apartmentImages.atrium} alt="Architectural detail of the residential arrival atrium." sizes="(min-width: 768px) 30vw, 33vw" className="aspect-[4/3]" />
          </div>
        </div>
      </section>

      <section aria-labelledby="journey-title" className="bg-ivory py-7 md:py-9">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 xl:px-14">
          <p id="journey-title" className="eyebrow flex items-center gap-3 text-charcoal">
            The arrival journey
            <span aria-hidden="true" className="h-px w-8 bg-charcoal/30" />
          </p>
          <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-4 md:gap-x-6">
            {arrivalJourney.map((step, index) => (
              <figure key={step.title} className="relative min-w-0">
                <SceneImage
                  src={step.image}
                  alt={step.alt}
                  sizes="(min-width: 768px) 22vw, 46vw"
                  className="aspect-[4/3]"
                  objectPosition={step.position}
                />
                <figcaption className="mt-2.5">
                  <p className="eyebrow text-charcoal">{step.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-warm-grey">{step.detail}</p>
                </figcaption>
                {index < arrivalJourney.length - 1 && index % 2 === 0 && (
                  <ArrowRight aria-hidden="true" className="absolute top-1/3 -right-3 z-10 hidden size-4 text-warm-grey md:block" strokeWidth={1.2} />
                )}
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="selected-work" aria-labelledby="selected-work-title" className="bg-ivory py-9 md:py-11">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 xl:px-14">
          <header className="mb-5 grid gap-3 border-t border-charcoal/15 pt-4 md:mb-7 md:grid-cols-12 md:items-end md:gap-8">
            <div className="md:col-span-7">
              <p className="eyebrow text-charcoal">Selected entrance work</p>
              <h2 id="selected-work-title" className="mt-2 font-serif text-[clamp(2.35rem,4vw,3.5rem)] leading-none font-medium text-charcoal">Art in the arrival space.</h2>
            </div>
            <p className="text-xs leading-relaxed text-warm-grey md:col-span-4 md:col-start-9 md:text-sm">
              A curated selection exploring artwork, material and architectural context.
            </p>
          </header>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-12 xl:gap-4">
            {selectedWorks.map((work) => {
              const layout = {
                portrait: 'xl:col-span-4 xl:row-span-2 xl:flex xl:flex-col',
                wide: 'xl:col-span-5',
                detail: 'xl:col-span-3',
                small: 'xl:col-span-2',
              }[work.layout]
              const imageClass = {
                portrait: 'aspect-[4/3] xl:aspect-auto xl:min-h-0 xl:flex-1',
                wide: 'aspect-[4/3] xl:aspect-[5/2]',
                detail: 'aspect-[4/3] xl:aspect-[16/10]',
                small: 'aspect-[4/3]',
              }[work.layout]
              return (
                <figure key={work.number} className={`min-w-0 ${layout}`}>
                  <SceneImage
                    src={work.image}
                    alt={work.alt}
                    sizes={work.layout === 'portrait' ? '(min-width: 1280px) 30vw, 100vw' : work.layout === 'wide' ? '(min-width: 1280px) 42vw, 100vw' : work.layout === 'small' ? '(min-width: 1280px) 18vw, 100vw' : '(min-width: 1280px) 26vw, 100vw'}
                    className={imageClass}
                    label="Concept image"
                  />
                  <WorkCaption number={work.number} category={work.category} title={work.title} medium={work.medium} />
                </figure>
              )
            })}
          </div>
        </div>
      </section>

      <section aria-labelledby="context-title" className="bg-paper py-9 md:py-12">
        <div className="mx-auto grid max-w-[1440px] gap-6 px-6 md:grid-cols-12 md:items-center md:gap-8 md:px-10 xl:px-14">
          <SceneImage
            src={apartmentImages.atrium}
            alt="An artwork-led lobby composition in the context of a residential atrium."
            sizes="(min-width: 768px) 58vw, 100vw"
            className="aspect-[4/3] md:col-span-7 md:aspect-[16/9]"
            label="Concept image"
          />
          <div className="md:col-span-4 md:col-start-9">
            <p className="eyebrow flex items-center gap-3 text-bronze">
              Art in context
              <span aria-hidden="true" className="h-px w-8 bg-bronze/60" />
            </p>
            <h2 id="context-title" className="mt-3 font-serif text-[clamp(2.15rem,3.2vw,3rem)] leading-[1] font-medium text-charcoal">
              Art should feel like it belongs there.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-charcoal/70">
              Every work begins with the character of the space — its scale, materials, light and movement. The result is artwork that feels considered rather than added afterwards.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="process-title" className="bg-ivory py-9 md:py-11">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 xl:px-14">
          <div className="flex items-end justify-between gap-6 border-b border-charcoal/15 pb-4">
            <div>
              <p className="eyebrow text-warm-grey">Art direction</p>
              <h2 id="process-title" className="mt-2 font-serif text-[clamp(2rem,3.2vw,2.8rem)] leading-none font-medium text-charcoal">From first encounter to lasting presence.</h2>
            </div>
          </div>
          <ol className="grid grid-cols-1 gap-x-6 sm:grid-cols-2 md:grid-cols-4 md:gap-5">
            {processSteps.map(([number, title, detail]) => (
              <li key={number} className="border-b border-charcoal/15 py-4 md:border-b-0 md:py-5">
                <p className="eyebrow text-bronze">{number}</p>
                <h3 className="mt-2 font-serif text-[1.45rem] leading-tight font-medium text-charcoal">{title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-warm-grey">{detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="entrance-close-title" className="grid bg-charcoal text-paper md:grid-cols-[40%_60%]">
        <div className="flex flex-col justify-center px-6 py-11 sm:px-10 md:px-[5.2vw] md:py-10">
          <p className="eyebrow flex items-center gap-3 text-paper/65">
            Apartment Entrances
            <span aria-hidden="true" className="h-px w-8 bg-paper/35" />
          </p>
          <h2 id="entrance-close-title" className="mt-4 font-serif text-[clamp(2.4rem,4vw,3.8rem)] leading-[0.98] font-medium text-paper">
            Create an entrance<br />worth <span className="italic text-[#c0a17e]">remembering.</span>
          </h2>
          <p className="mt-4 max-w-[28rem] text-sm leading-relaxed text-paper/75">
            Looking to bring a bespoke artwork, mural or sculptural installation into a residential development?
          </p>
          <CtaLink href="/#contact" variant="solid-light" className="mt-6 w-fit min-h-[50px] px-5 text-[0.625rem]">
            Discuss a Project
          </CtaLink>
        </div>
        <SceneImage
          src={apartmentImages.sculptural}
          alt="Warm apartment entrance with a monumental textured mural and sculptural artwork."
          sizes="(min-width: 768px) 60vw, 100vw"
          className="aspect-[4/3] md:aspect-auto md:min-h-[360px]"
          label="Concept image"
        />
      </section>
    </>
  )
}