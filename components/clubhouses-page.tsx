import Image from 'next/image'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { CtaLink } from './cta-link'
import { ImageReveal } from './reveal'

type ClubhouseImageProps = {
  src: string
  alt: string
  sizes: string
  className: string
  priority?: boolean
  label?: string
  objectPosition?: string
}

const images = {
  hero: '/images/clubhouses/hero-mural-lounge.jpg',
  intro: '/images/clubhouses/outdoor-club-lounge.jpg',
  lounge: '/images/clubhouses/glass-lounge.jpg',
  dining: '/images/clubhouses/dining-wall-mural.jpg',
  arrival: '/images/clubhouses/atrium-sculpture.jpg',
  wellness: '/images/clubhouses/wellness-center.jpg',
  pool: '/images/clubhouses/pool-terrace.jpg',
  library: '/images/clubhouses/private-library.jpg',
  feature: '/images/clubhouses/social-lounge-mural.jpg',
  featureDetail: '/images/clubhouses/woven-sculpture-detail.jpg',
  featureContext: '/images/clubhouses/vertical-garden-lobby.jpg',
  atmosphere: '/images/clubhouses/tree-mural-lounge.jpg',
  sculpture: '/images/clubhouses/sculpture-water.jpg',
  sculptureDetail: '/images/clubhouses/abstract-sculpture-detail.jpg',
  sculptureContext: '/images/clubhouses/bird-atrium-installation.jpg',
  artDetail: '/images/clubhouses/geometric-art-room.jpg',
  materialDetail: '/images/clubhouses/material-garden-bench.jpg',
  privateDetail: '/images/clubhouses/members-velvet-lounge.jpg',
  architectureDetail: '/images/clubhouses/clubhouse-exterior.jpg',
  close: '/images/clubhouses/open-air-club-pavilion.jpg',
} as const

const categories = [
  {
    title: 'Lounges',
    description: 'Warm, expressive artwork for relaxed social spaces.',
    image: images.lounge,
    alt: 'Light-filled glass lounge with considered contemporary furniture.',
  },
  {
    title: 'Dining & social spaces',
    description: 'Murals and large-scale works that create atmosphere.',
    image: images.dining,
    alt: 'Abstract mural above a long dining table in an intimate social room.',
  },
  {
    title: 'Arrival & reception',
    description: 'Sculptural focal points that establish identity.',
    image: images.arrival,
    alt: 'Suspended sculptural installation in a naturally lit atrium.',
  },
  {
    title: 'Wellness & recreation',
    description: 'Calmer compositions for wellness and leisure spaces.',
    image: images.wellness,
    alt: 'Quiet wellness lounge with stone, water and soft architectural light.',
  },
  {
    title: 'Pool & terrace spaces',
    description: 'Artwork that responds to landscape and natural light.',
    image: images.pool,
    alt: 'Outdoor pool terrace framed by palms and planted landscape.',
  },
  {
    title: 'Private club rooms',
    description: 'More intimate paintings and collected works.',
    image: images.library,
    alt: 'Private members library lounge with warm wood and leather seating.',
  },
]

const sculptureDetails = [
  {
    image: images.sculptureDetail,
    alt: 'Close detail of an abstract bronze sculpture with a warm textured finish.',
    caption: 'Surface · Form',
  },
  {
    image: images.sculptureContext,
    alt: 'Sculptural installation suspended within an architectural atrium.',
    caption: 'Scale · Movement',
  },
]

const materialDetails = [
  { image: images.artDetail, alt: 'Geometric wall artwork in a restrained architectural interior.', caption: 'Composition' },
  { image: images.materialDetail, alt: 'Natural wood, planted detail and filtered light in a shared space.', caption: 'Material' },
  { image: images.privateDetail, alt: 'Deep green seating and ambient light in a private club room.', caption: 'Atmosphere' },
  { image: images.architectureDetail, alt: 'Contemporary clubhouse architecture and landscape at daylight.', caption: 'Architecture' },
]

function ClubhouseImage({
  src,
  alt,
  sizes,
  className,
  priority = false,
  label,
  objectPosition = 'center',
}: ClubhouseImageProps) {
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

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`eyebrow flex items-center gap-3 ${light ? 'text-paper/70' : 'text-bronze'}`}>
      {children}
      <span aria-hidden="true" className={`h-px w-8 ${light ? 'bg-paper/35' : 'bg-bronze/60'}`} />
    </p>
  )
}

export function ClubhousesPage() {
  return (
    <>
      <section aria-labelledby="clubhouses-hero-title" className="bg-ivory pt-20">
        <div className="relative">
          <ClubhouseImage
            src={images.hero}
            alt="Contemporary clubhouse lounge with a large-scale artwork integrated into a warm architectural interior."
            sizes="100vw"
            className="aspect-[4/3] md:aspect-[16/7]"
            priority
            label="Concept image"
            objectPosition="center 54%"
          />
          <div className="bg-charcoal px-6 py-8 text-paper sm:px-10 md:absolute md:inset-y-0 md:left-[5.2vw] md:z-10 md:flex md:w-[min(40vw,34rem)] md:flex-col md:justify-center md:bg-transparent md:px-0 md:py-0">
            <Eyebrow light>Clubhouses / Art for social spaces</Eyebrow>
            <h1 id="clubhouses-hero-title" className="mt-5 font-serif text-[clamp(2.65rem,5vw,4.6rem)] leading-[0.94] font-medium text-balance">
              Art that brings<br />people together.
            </h1>
            <p className="mt-5 max-w-[29rem] text-sm leading-[1.6] text-paper/80 md:text-[0.9375rem]">
              Bespoke murals, paintings and sculptural works created to give clubhouses a distinct visual identity — from intimate lounges to expansive social spaces.
            </p>
            <a href="#selected-work" className="group mt-6 inline-flex w-fit items-center gap-3 eyebrow text-[0.625rem] text-paper">
              View selected work
              <ArrowDown aria-hidden="true" className="size-4 transition-transform duration-300 group-hover:translate-y-1" strokeWidth={1.3} />
            </a>
          </div>
        </div>
      </section>

      <section aria-labelledby="connection-title" className="bg-ivory py-8 md:py-10">
        <div className="mx-auto grid max-w-[1440px] gap-6 px-6 md:grid-cols-12 md:items-center md:gap-8 md:px-10 xl:px-14">
          <ClubhouseImage
            src={images.intro}
            alt="An indoor-outdoor club lounge opening onto a landscaped social terrace."
            sizes="(min-width: 768px) 58vw, 100vw"
            className="aspect-[4/3] md:col-span-7 md:aspect-[16/8]"
            label="Concept image"
          />
          <div className="md:col-span-4 md:col-start-9">
            <Eyebrow>The clubhouse experience</Eyebrow>
            <h2 id="connection-title" className="mt-3 font-serif text-[clamp(2.25rem,3.6vw,3.4rem)] leading-[0.98] font-medium text-charcoal">
              Spaces designed<br />for <span className="italic text-bronze">connection.</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-charcoal/70">
              A clubhouse is more than a shared facility. It is where architecture, hospitality and everyday life meet. Art can give these spaces a visual identity that members remember and return to.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="categories-title" className="bg-ivory py-8 md:py-10">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 xl:px-14">
          <header className="grid gap-4 border-t border-charcoal/15 pt-4 md:grid-cols-12 md:items-end md:gap-8">
            <div className="md:col-span-7">
              <Eyebrow>Art for shared spaces</Eyebrow>
              <h2 id="categories-title" className="mt-3 font-serif text-[clamp(2.25rem,3.8vw,3.45rem)] leading-[0.98] font-medium text-charcoal text-balance">
                Art follows the way<br />people use the space.
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-charcoal/70 md:col-span-4 md:col-start-9">
              From lounges to poolside areas, artwork can shape the character of every space within a clubhouse.
            </p>
          </header>
          <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-6 border-b border-charcoal/15 pb-5 sm:grid-cols-3 md:gap-x-5 xl:grid-cols-6 xl:gap-x-4">
            {categories.map((category, index) => (
              <figure key={category.title} className="min-w-0">
                <ClubhouseImage src={category.image} alt={category.alt} sizes="(min-width: 1280px) 15vw, (min-width: 640px) 30vw, 46vw" className="aspect-[4/3]" />
                <figcaption className="mt-2.5">
                  <p className="eyebrow text-bronze">{String(index + 1).padStart(2, '0')}</p>
                  <h3 className="mt-1.5 eyebrow text-charcoal">{category.title}</h3>
                  <p className="mt-1 text-[0.68rem] leading-relaxed text-warm-grey">{category.description}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="featured-clubhouse-title" className="bg-ivory py-8 md:py-10">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 xl:px-14">
          <div className="grid gap-5 md:grid-cols-12 md:items-center md:gap-5 xl:gap-6">
            <div className="md:col-span-4">
              <Eyebrow>01 / Featured clubhouse</Eyebrow>
              <h2 id="featured-clubhouse-title" className="mt-3 font-serif text-[clamp(2.15rem,3.45vw,3.15rem)] leading-[0.98] font-medium text-charcoal">
                A social space<br />with a <span className="italic text-bronze">point of view.</span>
              </h2>
              <p className="mt-4 max-w-[26rem] text-sm leading-relaxed text-charcoal/70">
                Large-scale artwork can become the visual anchor of a clubhouse, establishing mood, identity and a sense of place without competing with the architecture.
              </p>
              <a href="#sculpture" className="group mt-5 inline-flex items-center gap-3 eyebrow text-[0.625rem] text-charcoal">
                View full project
                <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.3} />
              </a>
            </div>
            <ClubhouseImage
              src={images.feature}
              alt="Colorful mural and social seating within a concept clubhouse lounge."
              sizes="(min-width: 768px) 42vw, 100vw"
              className="aspect-[4/3] md:col-span-5 md:aspect-[5/4]"
              label="Concept image"
            />
            <div className="grid grid-cols-2 gap-3 md:col-span-3 md:aspect-[3/4] md:grid-cols-1 md:grid-rows-2 md:gap-4">
              <ClubhouseImage src={images.featureDetail} alt="Close material detail from a woven sculptural study." sizes="(min-width: 768px) 22vw, 46vw" className="aspect-[4/3] md:aspect-auto md:min-h-0" />
              <ClubhouseImage src={images.featureContext} alt="A glass-walled lounge with a planted vertical garden." sizes="(min-width: 768px) 22vw, 46vw" className="aspect-[4/3] md:aspect-auto md:min-h-0" />
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="atmosphere-title" className="relative bg-charcoal">
        <ClubhouseImage
          src={images.atmosphere}
          alt="Feature mural and relaxed seating in a concept clubhouse lounge."
          sizes="100vw"
          className="aspect-[4/3] md:aspect-[16/6]"
          label="Concept image"
          objectPosition="center 48%"
        />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(18,16,14,0.82)_0%,rgba(18,16,14,0.58)_34%,rgba(18,16,14,0.04)_72%)]" />
        <div className="absolute inset-y-0 left-0 flex w-full items-center px-6 sm:px-10 md:w-[38%] md:px-[5.2vw]">
          <div className="text-paper">
            <Eyebrow light>Art as</Eyebrow>
            <h2 id="atmosphere-title" className="mt-3 font-serif text-[clamp(2.3rem,4.3vw,3.8rem)] leading-none font-medium">Atmosphere.</h2>
            <p className="mt-4 max-w-[20rem] text-sm leading-relaxed text-paper/80">
              Colour, scale and texture can change the emotional character of a shared space.
            </p>
          </div>
        </div>
      </section>

      <section id="sculpture" aria-labelledby="sculpture-title" className="bg-ivory py-9 md:py-12">
        <div className="mx-auto grid max-w-[1440px] gap-5 px-6 md:grid-cols-12 md:items-center md:gap-6 md:px-10 xl:px-14">
          <ClubhouseImage
            src={images.sculpture}
            alt="Sculptural focal point integrated into a contemporary clubhouse water feature."
            sizes="(min-width: 768px) 57vw, 100vw"
            className="aspect-[4/3] md:col-span-7 md:aspect-[16/10]"
            label="Concept image"
          />
          <div className="md:col-span-5">
            <Eyebrow>02 / Sculptural intervention</Eyebrow>
            <h2 id="sculpture-title" className="mt-3 font-serif text-[clamp(2.25rem,3.5vw,3.2rem)] leading-[0.98] font-medium text-charcoal">
              Sculpture creates<br />the <span className="italic text-bronze">focal point.</span>
            </h2>
            <p className="mt-4 max-w-[28rem] text-sm leading-relaxed text-charcoal/70">
              A sculptural work can give a clubhouse a memorable centre — something members encounter naturally as they move through the space.
            </p>
            <a href="#materials" className="group mt-5 inline-flex items-center gap-3 eyebrow text-[0.625rem] text-charcoal">
              View more work
              <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.3} />
            </a>
            <div className="mt-6 grid grid-cols-2 gap-3 md:gap-4">
              {sculptureDetails.map((detail) => (
                <figure key={detail.caption}>
                  <ClubhouseImage src={detail.image} alt={detail.alt} sizes="(min-width: 768px) 22vw, 46vw" className="aspect-[4/3]" />
                  <figcaption className="mt-2 eyebrow text-warm-grey">{detail.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="materials" aria-labelledby="materials-title" className="bg-ivory py-8 md:py-10">
        <div className="mx-auto grid max-w-[1440px] gap-5 px-6 md:grid-cols-12 md:gap-6 md:px-10 xl:px-14">
          <div className="md:col-span-4">
            <Eyebrow>Material · Light · Space</Eyebrow>
            <h2 id="materials-title" className="mt-3 font-serif text-[clamp(2.15rem,3.25vw,3rem)] leading-[0.98] font-medium text-charcoal">
              When art speaks<br />the language of<br />the <span className="italic text-bronze">space.</span>
            </h2>
            <p className="mt-4 max-w-[25rem] text-sm leading-relaxed text-charcoal/70">
              Every work responds to the architecture — its materials, light, scale and movement — so the artwork feels integrated rather than added.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:col-span-8 md:gap-4">
            {materialDetails.map((detail) => (
              <figure key={detail.caption}>
                <ClubhouseImage src={detail.image} alt={detail.alt} sizes="(min-width: 768px) 18vw, 46vw" className="aspect-[4/5]" />
                <figcaption className="mt-2 eyebrow text-warm-grey">{detail.caption}</figcaption>
              </figure>
            ))}
          </div>
          <p className="eyebrow text-warm-grey md:col-span-12">Concept imagery · Visual references for clubhouse environments</p>
        </div>
      </section>

      <section aria-labelledby="clubhouses-close-title" className="relative bg-charcoal text-paper">
        <ClubhouseImage
          src={images.close}
          alt="Open-air clubhouse pavilion with warm timber structure and lounge seating."
          sizes="100vw"
          className="aspect-[4/3] md:aspect-[16/6]"
          label="Concept image"
          objectPosition="center 52%"
        />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(18,16,14,0.82)_0%,rgba(18,16,14,0.58)_36%,rgba(18,16,14,0.02)_78%)]" />
        <div className="absolute inset-y-0 left-0 flex w-full items-center px-6 sm:px-10 md:w-[46%] md:px-[5.2vw]">
          <div>
            <Eyebrow light>Clubhouses</Eyebrow>
            <h2 id="clubhouses-close-title" className="mt-3 font-serif text-[clamp(2.35rem,4vw,3.7rem)] leading-[0.98] font-medium">
              Create a clubhouse<br />with a <span className="italic text-[#c0a17e]">distinct identity.</span>
            </h2>
            <p className="mt-4 max-w-[28rem] text-sm leading-relaxed text-paper/80">
              Bespoke murals, paintings and sculptures created in dialogue with architecture, interiors and the people who use the space.
            </p>
            <CtaLink href="/#contact" variant="solid-light" className="mt-6 min-h-[50px] px-5 text-[0.625rem]">
              Discuss a Project
            </CtaLink>
          </div>
        </div>
      </section>
    </>
  )
}