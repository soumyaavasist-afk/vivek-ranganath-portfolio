import Image from 'next/image'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { ImageReveal } from './reveal'

type ResortImageProps = {
  src: string
  alt: string
  sizes: string
  className: string
  priority?: boolean
  objectPosition?: string
}

const imagePath = '/images/resorts/'

const images = {
  hero: `${imagePath}resort-hero.jpg`,
  introduction: `${imagePath}arrival-story.jpg`,
  arrival: `${imagePath}arrival-art.jpg`,
  pavilion: `${imagePath}lounge-pavilion.jpg`,
  dining: `${imagePath}dining-terrace.jpg`,
  pool: `${imagePath}pool-sculpture.jpg`,
  wellness: `${imagePath}wellness-architecture.jpg`,
  villas: `${imagePath}private-villas.jpg`,
  featured: `${imagePath}featured-resort.jpg`,
  featuredSculpture: `${imagePath}featured-sculpture.jpg`,
  featuredDetail: `${imagePath}featured-detail.jpg`,
  experience: `${imagePath}experience-banner.jpg`,
  sculpture: `${imagePath}sculpture-pool.jpg`,
  sculptureWood: `${imagePath}sculpture-detail-wood.jpg`,
  sculptureStone: `${imagePath}sculpture-detail-stone.jpg`,
  natureSculpture: `${imagePath}nature-sculpture.jpg`,
  natureFountain: `${imagePath}nature-fountain.jpg`,
  natureMural: `${imagePath}nature-mural.jpg`,
  natureLandscape: `${imagePath}nature-landscape.jpg`,
  portfolioPool: `${imagePath}portfolio-pool.jpg`,
  portfolioCourtyard: `${imagePath}portfolio-courtyard.jpg`,
  portfolioAerial: `${imagePath}portfolio-aerial.jpg`,
  portfolioDining: `${imagePath}portfolio-dining.jpg`,
  portfolioShadows: `${imagePath}portfolio-shadows.jpg`,
  portfolioMural: `${imagePath}portfolio-garden-mural.jpg`,
  materialBronze: `${imagePath}material-bronze.jpg`,
  materialStone: `${imagePath}material-stone.jpg`,
  materialPaint: `${imagePath}material-paint.jpg`,
  materialWall: `${imagePath}material-wall.jpg`,
  materialSculpture: `${imagePath}material-sculpture.jpg`,
  materialWood: `${imagePath}material-wood.jpg`,
  collectionVilla: `${imagePath}collection-villa.jpg`,
  collectionTerrace: `${imagePath}collection-terrace.jpg`,
  collectionWicker: `${imagePath}collection-wicker.jpg`,
  collectionPool: `${imagePath}collection-rocky-pool.jpg`,
  collectionFountain: `${imagePath}collection-fountain.jpg`,
  closing: `${imagePath}resort-closing.jpg`,
} as const

const journeySpaces = [
  {
    title: 'Arrival & entrance',
    description: 'Statement artworks that establish a strong sense of place.',
    image: images.arrival,
    alt: 'Architectural resort entrance with tropical gardens, stone, and a reflecting pool.',
  },
  {
    title: 'Lobby & lounge areas',
    description: 'Inviting artworks for relaxed social spaces.',
    image: images.pavilion,
    alt: 'Open-air resort pavilion with a pool, landscape and shaded guest seating.',
  },
  {
    title: 'Dining & restaurant spaces',
    description: 'Murals and installations that create atmosphere.',
    image: images.dining,
    alt: 'Tropical resort restaurant pavilion with open sides and warm natural materials.',
  },
  {
    title: 'Poolside & recreation',
    description: 'Artworks that respond to landscape and outdoor spaces.',
    image: images.pool,
    alt: 'Figurative sculpture set beside a resort pool framed by palms and ocean.',
  },
  {
    title: 'Wellness & spa areas',
    description: 'Calm compositions for rest and rejuvenation.',
    image: images.wellness,
    alt: 'Wood-lined spa interior with a soaking pool and soft architectural light.',
  },
  {
    title: 'Villas & private spaces',
    description: 'Curated artworks for intimate resort environments.',
    image: images.villas,
    alt: 'Aerial view of tropical resort villas, water and abundant green landscape.',
  },
]

const curatedWorks = [
  { image: images.portfolioPool, alt: 'Infinity pool and palms at a secluded tropical resort.', caption: 'Pool terrace · Sculpture' },
  { image: images.portfolioCourtyard, alt: 'Artful courtyard and water garden within a destination retreat.', caption: 'Courtyard · Water work' },
  { image: images.portfolioAerial, alt: 'Aerial landscape view of a resort woven into its tropical setting.', caption: 'Destination · Landscape' },
  { image: images.portfolioDining, alt: 'Open-air dining pavilion nested among resort greenery.', caption: 'Dining pavilion · Installation' },
  { image: images.portfolioShadows, alt: 'Palm frond shadows draw a natural pattern across a warm resort wall.', caption: 'Wall · Natural light' },
  { image: images.portfolioMural, alt: 'Lush green wall artwork integrated with planted resort architecture.', caption: 'Garden wall · Mural' },
]

const materialDetails = [
  { image: images.materialBronze, alt: 'Close detail of bronze sculpture hands revealing patina and crafted surface.', caption: 'Bronze · Patina' },
  { image: images.materialStone, alt: 'Bird motif carved into a weathered stone wall, showing fine tool marks.', caption: 'Stone · Carving' },
  { image: images.materialPaint, alt: 'Painted tropical leaves and small pendant lights against a textured wall.', caption: 'Paint · Layer' },
  { image: images.materialWall, alt: 'Lush leaves cast shadows over a terracotta-toned architectural surface.', caption: 'Wall · Light' },
  { image: images.materialSculpture, alt: 'Close-up of bronze sculptural hands with a warm, burnished finish.', caption: 'Sculpture · Detail' },
  { image: images.materialWood, alt: 'Hand-finished wood grain showing the warm texture of crafted furniture.', caption: 'Wood · Grain' },
]

const resortApplications = [
  { title: 'Resort arrival', subtitle: 'Site-specific sculpture', image: images.collectionVilla, alt: 'Private villa arrival among palms beside a clear infinity pool.' },
  { title: 'Dining terrace', subtitle: 'Site-specific mural', image: images.collectionTerrace, alt: 'Seaside dining terrace set within tropical foliage.' },
  { title: 'Garden retreat', subtitle: 'Sculptural artwork', image: images.collectionWicker, alt: 'Handwoven organic sculpture resting in a landscaped garden.' },
  { title: 'Pool landscape', subtitle: 'Outdoor installation', image: images.collectionPool, alt: 'Natural stone walkways and pool integrated with rocky resort landscape.' },
  { title: 'Water garden', subtitle: 'Art + landscape', image: images.collectionFountain, alt: 'Garden fountain and sculpture surrounded by palms and lush planting.' },
]

function ResortImage({
  src,
  alt,
  sizes,
  className,
  priority = false,
  objectPosition = 'center',
}: ResortImageProps) {
  const frame = `group relative block min-w-0 overflow-hidden bg-stone ${className}`
  const image = (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      style={{ objectPosition }}
      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
    />
  )

  return priority ? <div className={frame}>{image}</div> : <ImageReveal className={frame}>{image}</ImageReveal>
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`eyebrow flex items-center gap-3 ${light ? 'text-paper/75' : 'text-bronze'}`}>
      {children}
      <span aria-hidden="true" className={`h-px w-8 ${light ? 'bg-paper/40' : 'bg-bronze/60'}`} />
    </p>
  )
}

export function ResortsPage() {
  return (
    <>
      <section aria-labelledby="resorts-hero-title" className="bg-ivory pt-20">
        <div className="relative">
          <ResortImage
            src={images.hero}
            alt="A sculptural arch spans the reflecting pool at a tropical destination resort."
            sizes="100vw"
            className="aspect-[4/3] min-h-[36rem] md:aspect-[16/7] md:min-h-[34rem]"
            priority
            objectPosition="center 55%"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/25 to-charcoal/5 md:bg-gradient-to-r md:from-charcoal/75 md:via-charcoal/20 md:to-transparent" />
          <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-9 text-paper sm:px-10 md:inset-y-0 md:left-[6vw] md:flex md:w-[min(44vw,39rem)] md:flex-col md:justify-center md:px-0 md:pb-0">
            <Eyebrow light>Resorts / Art for destination hospitality</Eyebrow>
            <h1 id="resorts-hero-title" className="mt-5 max-w-[38rem] font-serif text-[clamp(2.8rem,6.4vw,5.5rem)] leading-[0.91] font-medium text-balance">
              Art that connects<br />people <span className="italic text-[#c49a6c]">to place.</span>
            </h1>
            <p className="mt-5 max-w-[32rem] text-sm leading-[1.7] font-medium text-paper/85 md:text-base">
              Site-specific murals, sculptures and spatial artworks created for resorts where architecture, nature and experience come together.
            </p>
            <a href="#selected-work" className="group mt-7 inline-flex w-fit items-center gap-3 eyebrow text-[0.625rem] text-paper">
              View selected work
              <ArrowDown aria-hidden="true" className="size-4 transition-transform duration-300 group-hover:translate-y-1" strokeWidth={1.3} />
            </a>
          </div>
        </div>
      </section>

      <section aria-labelledby="experience-title" className="bg-ivory py-10 md:py-14">
        <div className="mx-auto grid max-w-[1440px] gap-7 px-6 md:grid-cols-12 md:items-center md:gap-8 md:px-10 xl:px-14">
          <div className="md:col-span-5 md:col-start-1 md:row-start-1">
            <Eyebrow>The resort experience</Eyebrow>
            <h2 id="experience-title" className="mt-3 max-w-[34rem] font-serif text-[clamp(2.5rem,4vw,4rem)] leading-[0.96] font-medium text-charcoal text-balance">
              Spaces that feel<br />like a <span className="italic text-bronze">destination.</span>
            </h2>
            <p className="mt-4 max-w-[31rem] text-sm leading-relaxed font-medium text-charcoal/70">
              A resort is more than a place to stay. It is an experience shaped by landscape, architecture, culture and atmosphere. Art can deepen that experience by creating a sense of place and giving every arrival, pause and gathering a memorable identity.
            </p>
          </div>
          <ResortImage
            src={images.introduction}
            alt="An open-air beachfront pavilion frames the ocean, with natural wood, palms and sculptural lighting."
            sizes="(min-width: 768px) 58vw, 100vw"
            className="aspect-[4/3] md:col-span-7 md:col-start-6 md:row-start-1 md:aspect-[16/8]"
          />
        </div>
      </section>

      <section id="selected-work" aria-labelledby="journey-title" className="bg-ivory py-9 md:py-12">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 xl:px-14">
          <header className="grid gap-5 border-t border-charcoal/15 pt-5 md:grid-cols-12 md:items-end md:gap-8">
            <div className="md:col-span-7">
              <Eyebrow>Art follows the flow</Eyebrow>
              <h2 id="journey-title" className="mt-3 max-w-[43rem] font-serif text-[clamp(2.45rem,4.2vw,4rem)] leading-[0.96] font-medium text-charcoal text-balance">
                Of the guest journey.
              </h2>
            </div>
            <p className="max-w-[29rem] text-sm leading-relaxed font-medium text-charcoal/70 md:col-span-4 md:col-start-9">
              From arrival to private retreat, artwork can shape every environment within a resort, creating a cohesive and immersive sense of place.
            </p>
          </header>
          <div className="mt-7 grid grid-cols-2 gap-x-4 gap-y-7 border-b border-charcoal/15 pb-6 sm:grid-cols-3 md:gap-x-5 xl:grid-cols-6 xl:gap-x-4">
            {journeySpaces.map((space, index) => (
              <figure key={space.title} className="min-w-0">
                <ResortImage src={space.image} alt={space.alt} sizes="(min-width: 1280px) 15vw, (min-width: 640px) 30vw, 46vw" className="aspect-[4/3]" />
                <figcaption className="mt-2.5">
                  <p className="eyebrow text-bronze">{String(index + 1).padStart(2, '0')}</p>
                  <h3 className="mt-1.5 eyebrow text-charcoal">{space.title}</h3>
                  <p className="mt-1 text-[0.7rem] leading-relaxed text-warm-grey">{space.description}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="featured-title" className="bg-ivory py-9 md:py-12">
        <div className="mx-auto grid max-w-[1440px] gap-5 px-6 md:grid-cols-12 md:items-center md:gap-5 md:px-10 xl:gap-6 xl:px-14">
          <div className="md:col-span-4">
            <Eyebrow>01 / Featured resort</Eyebrow>
            <h2 id="featured-title" className="mt-3 font-serif text-[clamp(2.4rem,3.8vw,3.65rem)] leading-[0.96] font-medium text-charcoal">
              A destination<br />with a <span className="italic text-bronze">distinct identity.</span>
            </h2>
            <p className="mt-4 max-w-[27rem] text-sm leading-relaxed font-medium text-charcoal/70">
              A large-scale artistic composition brings architecture, material, landscape and local inspiration together to create an unforgettable sense of arrival.
            </p>
            <a href="#sculpture" className="group mt-5 inline-flex items-center gap-3 eyebrow text-[0.625rem] text-charcoal">
              View full project
              <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.3} />
            </a>
          </div>
          <ResortImage
            src={images.featured}
            alt="Sculptural water feature among palms and flowering plants, opening toward the ocean."
            sizes="(min-width: 768px) 42vw, 100vw"
            className="aspect-[4/3] md:col-span-5 md:aspect-[5/4]"
          />
          <div className="grid grid-cols-2 gap-3 md:col-span-3 md:grid-cols-1 md:gap-4">
            <ResortImage
              src={images.featuredSculpture}
              alt="Large natural-material sculpture rising through a lush resort garden."
              sizes="(min-width: 768px) 24vw, 48vw"
              className="aspect-[4/3] md:aspect-[5/3]"
            />
            <ResortImage
              src={images.featuredDetail}
              alt="Close detail of an earthy circular mosaic artwork with hand-set stone pieces."
              sizes="(min-width: 768px) 24vw, 48vw"
              className="aspect-[4/3] md:aspect-[5/3]"
            />
          </div>
        </div>
      </section>

      <section aria-labelledby="experience-banner-title" className="relative bg-charcoal">
        <ResortImage
          src={images.experience}
          alt="A beachfront resort entry pavilion opens onto a tropical ocean view at golden hour."
          sizes="100vw"
          className="aspect-[4/3] min-h-[28rem] md:aspect-[16/6] md:min-h-[32rem]"
          objectPosition="center 42%"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-charcoal/75 via-charcoal/25 to-transparent" />
        <div className="absolute inset-y-0 left-0 z-10 flex w-full max-w-[1440px] items-center px-6 sm:px-10 xl:px-14">
          <div className="max-w-[36rem] text-paper">
            <Eyebrow light>Art as</Eyebrow>
            <h2 id="experience-banner-title" className="mt-3 font-serif text-[clamp(3.5rem,7vw,6.5rem)] leading-[0.9] font-medium">EXPERIENCE.</h2>
            <p className="mt-5 max-w-[27rem] text-sm leading-relaxed font-medium text-paper/85 md:text-base">
              Art can evoke emotion, celebrate the character of a destination and elevate the overall resort experience.
            </p>
          </div>
        </div>
      </section>

      <section id="sculpture" aria-labelledby="sculpture-title" className="bg-ivory py-10 md:py-14">
        <div className="mx-auto grid max-w-[1440px] gap-5 px-6 md:grid-cols-12 md:items-end md:gap-5 md:px-10 xl:gap-6 xl:px-14">
          <ResortImage
            src={images.sculpture}
            alt="A sculptural landmark beside the water in a tropical resort garden."
            sizes="(min-width: 768px) 58vw, 100vw"
            className="aspect-[4/3] md:col-span-7 md:row-span-2 md:aspect-[16/10]"
          />
          <div className="md:col-span-5 md:col-start-8 md:row-start-1 md:pb-2">
            <Eyebrow>02 / Sculptural intervention</Eyebrow>
            <h2 id="sculpture-title" className="mt-3 font-serif text-[clamp(2.45rem,4vw,3.85rem)] leading-[0.96] font-medium text-charcoal">
              Sculpture creates<br />a <span className="italic text-bronze">focal point.</span>
            </h2>
            <p className="mt-4 max-w-[31rem] text-sm leading-relaxed font-medium text-charcoal/70">
              A sculptural work can become a memorable landmark within a resort, something guests naturally encounter as they arrive, gather and move through the property.
            </p>
            <a href="#art-nature" className="group mt-5 inline-flex items-center gap-3 eyebrow text-[0.625rem] text-charcoal">
              View more work
              <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.3} />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-3 md:col-span-5 md:col-start-8 md:row-start-2 md:gap-4">
            <ResortImage
              src={images.sculptureWood}
              alt="A driftwood horse sculpture nestled within tropical resort planting."
              sizes="(min-width: 768px) 21vw, 48vw"
              className="aspect-[4/3] md:aspect-[5/3]"
            />
            <ResortImage
              src={images.sculptureStone}
              alt="Leaf motif carved into natural stone, revealing the mark of hand craft."
              sizes="(min-width: 768px) 21vw, 48vw"
              className="aspect-[4/3] md:aspect-[5/3]"
            />
          </div>
        </div>
      </section>

      <section id="art-nature" aria-labelledby="nature-title" className="bg-ivory py-10 md:py-14">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 xl:px-14">
          <header className="grid gap-5 border-t border-charcoal/15 pt-5 md:grid-cols-12 md:items-end md:gap-8">
            <div className="md:col-span-6">
              <Eyebrow>Art · Landscape · Light</Eyebrow>
              <h2 id="nature-title" className="mt-3 font-serif text-[clamp(2.5rem,4vw,3.9rem)] leading-[0.96] font-medium text-charcoal">
                When art integrates<br />with nature.
              </h2>
            </div>
            <p className="max-w-[32rem] text-sm leading-relaxed font-medium text-charcoal/70 md:col-span-5 md:col-start-8">
              Every work responds to its surroundings, landscape, light, materials and movement, so the artwork becomes a natural part of the destination.
            </p>
          </header>
          <div className="mt-7 grid grid-cols-2 gap-3 md:grid-cols-12 md:gap-4">
            <ResortImage
              src={images.natureSculpture}
              alt="A bold sculpture set among palms and tropical planting under open sky."
              sizes="(min-width: 768px) 49vw, 100vw"
              className="col-span-2 aspect-[16/8] md:col-span-6 md:aspect-[16/9]"
            />
            <ResortImage
              src={images.natureFountain}
              alt="A fountain and reflecting water among palm trees at a tropical resort."
              sizes="(min-width: 768px) 23vw, 48vw"
              className="aspect-[4/3] md:col-span-3 md:aspect-[4/5]"
            />
            <ResortImage
              src={images.natureMural}
              alt="A vivid destination mural framed by comfortable seating and tropical color."
              sizes="(min-width: 768px) 23vw, 48vw"
              className="aspect-[4/3] md:col-span-3 md:aspect-[4/5]"
            />
            <ResortImage
              src={images.natureLandscape}
              alt="Resort pools and planting viewed as an integrated landscape composition."
              sizes="(min-width: 768px) 100vw, 100vw"
              className="col-span-2 aspect-[16/7] md:col-span-12 md:aspect-[16/5]"
            />
          </div>
        </div>
      </section>

      <section aria-labelledby="portfolio-title" className="bg-ivory py-10 md:py-14">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 xl:px-14">
          <header className="flex flex-col gap-4 border-t border-charcoal/15 pt-5 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow>Selected resort applications</Eyebrow>
              <h2 id="portfolio-title" className="mt-3 font-serif text-[clamp(2.5rem,4vw,3.9rem)] leading-[0.96] font-medium text-charcoal">
                Art, shaped by place.
              </h2>
            </div>
            <p className="max-w-[28rem] text-sm leading-relaxed font-medium text-charcoal/70">
              From the first arrival to the quietest retreat, each intervention begins with its setting.
            </p>
          </header>
          <div className="mt-7 grid grid-cols-2 gap-3 md:grid-cols-12 md:gap-4">
            <ResortImage src={curatedWorks[0].image} alt={curatedWorks[0].alt} sizes="(min-width: 768px) 58vw, 100vw" className="col-span-2 aspect-[16/8] md:col-span-7 md:row-span-2 md:aspect-[4/3]" />
            <ResortImage src={curatedWorks[1].image} alt={curatedWorks[1].alt} sizes="(min-width: 768px) 40vw, 100vw" className="col-span-2 aspect-[16/8] md:col-span-5 md:aspect-[16/8]" />
            <ResortImage src={curatedWorks[2].image} alt={curatedWorks[2].alt} sizes="(min-width: 768px) 23vw, 48vw" className="aspect-square md:col-span-3" />
            <ResortImage src={curatedWorks[3].image} alt={curatedWorks[3].alt} sizes="(min-width: 768px) 23vw, 48vw" className="aspect-square md:col-span-2" />
            <ResortImage src={curatedWorks[4].image} alt={curatedWorks[4].alt} sizes="(min-width: 768px) 49vw, 100vw" className="aspect-[4/3] md:col-span-6" />
            <ResortImage src={curatedWorks[5].image} alt={curatedWorks[5].alt} sizes="(min-width: 768px) 49vw, 100vw" className="aspect-[4/3] md:col-span-6" />
          </div>
          <div className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2 md:grid-cols-12 md:gap-4">
            {curatedWorks.map((work) => (
              <p key={work.caption} className="eyebrow text-[0.55rem] text-warm-grey md:col-span-4">{work.caption}</p>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="craft-title" className="bg-ivory py-9 md:py-12">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 xl:px-14">
          <header className="flex flex-col gap-4 border-t border-charcoal/15 pt-5 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow>Craft · Material · Place</Eyebrow>
              <h2 id="craft-title" className="mt-3 font-serif text-[clamp(2.3rem,3.7vw,3.5rem)] leading-[0.98] font-medium text-charcoal">
                Made to belong<br className="hidden md:block" /> to the landscape.
              </h2>
            </div>
            <p className="max-w-[26rem] text-sm leading-relaxed font-medium text-charcoal/70">
              Each artwork is developed in response to the architecture, materials, light and character of its setting.
            </p>
          </header>
          <div className="mt-6 grid grid-cols-2 gap-3 border-b border-charcoal/15 pb-5 sm:grid-cols-3 md:grid-cols-6 md:gap-4">
            {materialDetails.map((detail) => (
              <figure key={detail.caption} className="min-w-0">
                <ResortImage
                  src={detail.image}
                  alt={detail.alt}
                  sizes="(min-width: 1280px) 15vw, (min-width: 640px) 30vw, 46vw"
                  className="aspect-[4/5]"
                />
                <figcaption className="mt-2 eyebrow text-[0.55rem] text-charcoal">{detail.caption}</figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-4 text-[0.65rem] leading-relaxed text-warm-grey">
            Photography is illustrative and is not presented as a record of completed Vivek Ranganath commissions.
          </p>
        </div>
      </section>

      <section aria-labelledby="applications-title" className="bg-ivory py-9 md:py-12">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 xl:px-14">
          <header className="flex flex-col gap-4 border-t border-charcoal/15 pt-5 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow>Resort art collection</Eyebrow>
              <h2 id="applications-title" className="mt-3 font-serif text-[clamp(2.3rem,3.7vw,3.5rem)] leading-[0.98] font-medium text-charcoal">
                A sense of place, everywhere.
              </h2>
            </div>
            <p className="max-w-[25rem] text-sm leading-relaxed font-medium text-charcoal/70">
              Site-responsive art for the shared and secluded moments of a stay.
            </p>
          </header>
          <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-6 border-b border-charcoal/15 pb-5 sm:grid-cols-3 md:grid-cols-5 md:gap-4">
            {resortApplications.map((application) => (
              <figure key={application.title} className="min-w-0">
                <ResortImage
                  src={application.image}
                  alt={application.alt}
                  sizes="(min-width: 1280px) 18vw, (min-width: 640px) 30vw, 46vw"
                  className="aspect-[4/3]"
                />
                <figcaption className="mt-2.5">
                  <h3 className="eyebrow text-charcoal">{application.title}</h3>
                  <p className="mt-1 text-[0.68rem] leading-relaxed text-warm-grey">{application.subtitle}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="closing-title" className="relative bg-charcoal">
        <ResortImage
          src={images.closing}
          alt="Tropical resort pools, palms and architecture set within a broad green landscape."
          sizes="100vw"
          className="aspect-[4/3] min-h-[32rem] md:aspect-[16/6] md:min-h-[34rem]"
          objectPosition="center 55%"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/50 to-charcoal/10" />
        <div className="absolute inset-y-0 left-0 z-10 flex w-full max-w-[1440px] items-center px-6 sm:px-10 xl:px-14">
          <div className="max-w-[43rem] text-paper">
            <Eyebrow light>Art for the destination</Eyebrow>
            <h2 id="closing-title" className="mt-4 font-serif text-[clamp(2.9rem,6vw,5.5rem)] leading-[0.94] font-medium text-balance">
              Create a resort experience that stays in <span className="italic text-[#c49a6c]">people&apos;s memories.</span>
            </h2>
            <p className="mt-5 max-w-[30rem] text-sm leading-relaxed font-medium text-paper/85 md:text-base">
              Looking for artwork for a resort, destination property or hospitality project?
            </p>
            <a href="#contact" className="mt-7 inline-flex items-center gap-3 bg-paper px-5 py-3 eyebrow text-[0.625rem] text-charcoal transition-colors hover:bg-[#c49a6c] hover:text-charcoal">
              Discuss a project
              <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.3} />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}