import Image from 'next/image'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { ImageReveal } from './reveal'

type HotelImageProps = {
  src: string
  alt: string
  sizes: string
  className: string
  priority?: boolean
  objectPosition?: string
}

const imagePath = '/images/hotel-lobbies/'

const images = {
  hero: `${imagePath}hotel-hero.jpg`,
  introduction: `${imagePath}arrival-story.jpg`,
  arrival: `${imagePath}arrival-reception.jpg`,
  lounge: `${imagePath}guest-lounge.jpg`,
  dining: `${imagePath}dining-room.jpg`,
  events: `${imagePath}event-installation.png`,
  wellness: `${imagePath}spa-art.jpg`,
  courtyard: `${imagePath}courtyard-sculpture.jpg`,
  featured: `${imagePath}featured-foyer.jpg`,
  featuredDetail: `${imagePath}featured-tilework.jpg`,
  featuredMaterial: `${imagePath}featured-sculpture.jpg`,
  identity: `${imagePath}identity-installation.png`,
  sculpture: `${imagePath}sculpture-lobby.jpg`,
  sculptureDetail: `${imagePath}sculpture-detail.jpg`,
  sculptureMaterial: `${imagePath}sculpture-material.jpg`,
  integration: `${imagePath}integration-installation.jpg`,
  integrationTile: `${imagePath}integration-tile-art.jpg`,
  integrationMural: `${imagePath}integration-mural.jpg`,
  integrationAtrium: `${imagePath}integration-atrium.jpg`,
  closing: `${imagePath}hotel-closing.jpg`,
  detailMetal: `${imagePath}detail-metal.jpg`,
  detailPaint: `${imagePath}detail-paint.jpg`,
  detailRelief: `${imagePath}detail-relief.jpg`,
  detailCarving: `${imagePath}detail-carving.jpg`,
  detailMetalwork: `${imagePath}detail-metalwork.jpg`,
  detailFacade: `${imagePath}detail-facade.jpg`,
} as const

const spaces = [
  {
    title: 'Entrance & reception',
    description: 'Signature artworks for a memorable arrival.',
    image: images.arrival,
    alt: 'Hotel reception with a contemporary decorative art wall and sculptural desk.',
  },
  {
    title: 'Lounge & seating areas',
    description: 'Inviting artworks for relaxed, social spaces.',
    image: images.lounge,
    alt: 'Warm hotel lounge with curated artwork, comfortable seating and ambient light.',
  },
  {
    title: 'Dining & restaurant spaces',
    description: 'Murals and installations that create atmosphere.',
    image: images.dining,
    alt: 'Hotel restaurant interior with considered material, lighting and table arrangements.',
  },
  {
    title: 'Ballroom & event spaces',
    description: 'Statement artworks for memorable occasions.',
    image: images.events,
    alt: 'Suspended glass installation above a hotel event lobby, glowing in warm architectural light.',
  },
  {
    title: 'Wellness & spa areas',
    description: 'Calmer compositions for rest and rejuvenation.',
    image: images.wellness,
    alt: 'Abstract artwork set beside a quiet spa pool with natural stone finishes.',
  },
  {
    title: 'Outdoor & transition spaces',
    description: 'Sculpture and art that extend the stay beyond interiors.',
    image: images.courtyard,
    alt: 'Sculpture in a lush courtyard framed by warm hotel architecture.',
  },
]

const details = [
  { image: images.detailMetal, alt: 'Close detail of a dark metallic artwork with a tactile geometric surface.', caption: 'Metal · Patina' },
  { image: images.detailPaint, alt: 'Layered abstract painting with warm, gestural strokes and textured pigment.', caption: 'Paint · Gesture' },
  { image: images.detailRelief, alt: 'Softly modeled clay wall with sculptural depth and natural texture.', caption: 'Mixed media · Relief' },
  { image: images.detailCarving, alt: 'Carved wall surface with repeating patterns and subtle highlights.', caption: 'Surface · Rhythm' },
  { image: images.detailMetalwork, alt: 'Close-up of an abstract metal sculpture with fine crafted detail.', caption: 'Sculpture · Form' },
  { image: images.detailFacade, alt: 'Curved metal architectural surface catching warm reflected light.', caption: 'Architecture · Light' },
]

function HotelImage({
  src,
  alt,
  sizes,
  className,
  priority = false,
  objectPosition = 'center',
}: HotelImageProps) {
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

export function HotelLobbiesPage() {
  return (
    <>
      <section aria-labelledby="hotel-hero-title" className="bg-ivory pt-20">
        <div className="relative">
          <HotelImage
            src={images.hero}
            alt="A sculptural artwork anchors a warm, art-led hotel reception and lobby."
            sizes="100vw"
            className="aspect-[4/3] min-h-[36rem] md:aspect-[16/7] md:min-h-[34rem]"
            priority
            objectPosition="center 50%"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/25 to-charcoal/5 md:bg-gradient-to-r md:from-charcoal/75 md:via-charcoal/20 md:to-transparent" />
          <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-9 text-paper sm:px-10 md:inset-y-0 md:left-[6vw] md:flex md:w-[min(44vw,39rem)] md:flex-col md:justify-center md:px-0 md:pb-0">
            <Eyebrow light>Hotel lobbies / Art for hospitality spaces</Eyebrow>
            <h1 id="hotel-hero-title" className="mt-5 max-w-[38rem] font-serif text-[clamp(2.8rem,6.4vw,5.5rem)] leading-[0.91] font-medium text-balance">
              Art that welcomes<br />every <span className="italic text-[#c49a6c]">journey.</span>
            </h1>
            <p className="mt-5 max-w-[32rem] text-sm leading-[1.7] font-medium text-paper/85 md:text-base">
              Murals, sculptures and site-specific artworks created to give hotel lobbies a distinctive identity, memorable atmosphere and a lasting impression.
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
            <Eyebrow>The hospitality experience</Eyebrow>
            <h2 id="experience-title" className="mt-3 max-w-[34rem] font-serif text-[clamp(2.5rem,4vw,4rem)] leading-[0.96] font-medium text-charcoal text-balance">
              Spaces that<br />create a <span className="italic text-bronze">lasting feeling.</span>
            </h2>
            <p className="mt-4 max-w-[31rem] text-sm leading-relaxed font-medium text-charcoal/70">
              A hotel lobby is more than an arrival point. It sets the tone for every stay. Art can create a sense of place, express the hotel&apos;s character and make the experience memorable from the very first moment.
            </p>
          </div>
          <HotelImage
            src={images.introduction}
            alt="A calm, sculptural hotel lobby with deep color, curated objects and generous guest seating."
            sizes="(min-width: 768px) 58vw, 100vw"
            className="aspect-[4/3] md:col-span-7 md:col-start-6 md:row-start-1 md:aspect-[16/8]"
          />
        </div>
      </section>

      <section id="selected-work" aria-labelledby="spaces-title" className="bg-ivory py-9 md:py-12">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 xl:px-14">
          <header className="grid gap-5 border-t border-charcoal/15 pt-5 md:grid-cols-12 md:items-end md:gap-8">
            <div className="md:col-span-7">
              <Eyebrow>Art for the guest experience</Eyebrow>
              <h2 id="spaces-title" className="mt-3 max-w-[43rem] font-serif text-[clamp(2.45rem,4.2vw,4rem)] leading-[0.96] font-medium text-charcoal text-balance">
                Art follows the flow<br className="hidden md:block" /> of the guest experience.
              </h2>
            </div>
            <p className="max-w-[29rem] text-sm leading-relaxed font-medium text-charcoal/70 md:col-span-4 md:col-start-9">
              From grand arrivals to intimate lounges, artwork can enhance every environment within a hotel, creating a cohesive and immersive experience.
            </p>
          </header>
          <div className="mt-7 grid grid-cols-2 gap-x-4 gap-y-7 border-b border-charcoal/15 pb-6 sm:grid-cols-3 md:gap-x-5 xl:grid-cols-6 xl:gap-x-4">
            {spaces.map((space, index) => (
              <figure key={space.title} className="min-w-0">
                <HotelImage src={space.image} alt={space.alt} sizes="(min-width: 1280px) 15vw, (min-width: 640px) 30vw, 46vw" className="aspect-[4/3]" />
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
            <Eyebrow>01 / Featured hotel lobby</Eyebrow>
            <h2 id="featured-title" className="mt-3 font-serif text-[clamp(2.4rem,3.8vw,3.65rem)] leading-[0.96] font-medium text-charcoal">
              A destination<br />with a <span className="italic text-bronze">distinct identity.</span>
            </h2>
            <p className="mt-4 max-w-[27rem] text-sm leading-relaxed font-medium text-charcoal/70">
              A large-scale artistic composition can bring architecture, material and movement together to create an unforgettable sense of arrival.
            </p>
            <a href="#sculpture" className="group mt-5 inline-flex items-center gap-3 eyebrow text-[0.625rem] text-charcoal">
              View full project
              <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.3} />
            </a>
          </div>
          <HotelImage
            src={images.featured}
            alt="Grand hotel foyer with carefully composed reception furniture and sculptural interior details."
            sizes="(min-width: 768px) 42vw, 100vw"
            className="aspect-[4/3] md:col-span-5 md:aspect-[5/4]"
          />
          <div className="grid grid-cols-2 gap-3 md:col-span-3 md:grid-cols-1 md:gap-4">
            <HotelImage
              src={images.featuredDetail}
              alt="Blue-and-white tile artwork set into the stone wall of a heritage hotel."
              sizes="(min-width: 768px) 24vw, 48vw"
              className="aspect-[4/3] md:aspect-[5/3]"
            />
            <HotelImage
              src={images.featuredMaterial}
              alt="A contemporary sculptural artwork presented in a hotel interior."
              sizes="(min-width: 768px) 24vw, 48vw"
              className="aspect-[4/3] md:aspect-[5/3]"
            />
          </div>
        </div>
      </section>

      <section aria-labelledby="atmosphere-title" className="relative bg-charcoal">
        <HotelImage
          src={images.identity}
          alt="Suspended glass chandelier installation cascading through a hotel lobby atrium."
          sizes="100vw"
          className="aspect-[4/3] min-h-[28rem] md:aspect-[16/6] md:min-h-[32rem]"
          objectPosition="center 42%"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-charcoal/75 via-charcoal/25 to-transparent" />
        <div className="absolute inset-y-0 left-0 z-10 flex w-full max-w-[1440px] items-center px-6 sm:px-10 xl:px-14">
          <div className="max-w-[36rem] text-paper">
            <Eyebrow light>Art as</Eyebrow>
            <h2 id="atmosphere-title" className="mt-3 font-serif text-[clamp(3.5rem,7vw,6.5rem)] leading-[0.9] font-medium">ATMOSPHERE.</h2>
            <p className="mt-5 max-w-[27rem] text-sm leading-relaxed font-medium text-paper/85 md:text-base">
              Art evokes emotion, shapes a sense of place and elevates the overall hospitality experience.
            </p>
          </div>
        </div>
      </section>

      <section id="sculpture" aria-labelledby="sculpture-title" className="bg-ivory py-10 md:py-14">
        <div className="mx-auto grid max-w-[1440px] gap-5 px-6 md:grid-cols-12 md:items-end md:gap-5 md:px-10 xl:gap-6 xl:px-14">
          <HotelImage
            src={images.sculpture}
            alt="Bronze figurative sculpture presented as a focal artwork in a hotel interior."
            sizes="(min-width: 768px) 58vw, 100vw"
            className="aspect-[4/3] md:col-span-7 md:row-span-2 md:aspect-[16/10]"
          />
          <div className="md:col-span-5 md:col-start-8 md:row-start-1 md:pb-2">
            <Eyebrow>02 / Sculptural intervention</Eyebrow>
            <h2 id="sculpture-title" className="mt-3 font-serif text-[clamp(2.45rem,4vw,3.85rem)] leading-[0.96] font-medium text-charcoal">
              Sculpture creates<br />a <span className="italic text-bronze">focal point.</span>
            </h2>
            <p className="mt-4 max-w-[31rem] text-sm leading-relaxed font-medium text-charcoal/70">
              A sculptural work can give a hotel lobby a memorable centre, something guests encounter naturally as they arrive and move through the space.
            </p>
            <a href="#art-architecture" className="group mt-5 inline-flex items-center gap-3 eyebrow text-[0.625rem] text-charcoal">
              View more work
              <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.3} />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-3 md:col-span-5 md:col-start-8 md:row-start-2 md:gap-4">
            <HotelImage
              src={images.sculptureDetail}
              alt="Close detail of a bronze sculptural figure with textured surface and patina."
              sizes="(min-width: 768px) 21vw, 48vw"
              className="aspect-[4/3] md:aspect-[5/3]"
            />
            <HotelImage
              src={images.sculptureMaterial}
              alt="Abstract metal sculpture showing a crafted, reflective surface."
              sizes="(min-width: 768px) 21vw, 48vw"
              className="aspect-[4/3] md:aspect-[5/3]"
            />
          </div>
        </div>
      </section>

      <section id="art-architecture" aria-labelledby="integration-title" className="bg-ivory py-10 md:py-14">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 xl:px-14">
          <header className="grid gap-5 border-t border-charcoal/15 pt-5 md:grid-cols-12 md:items-end md:gap-8">
            <div className="md:col-span-6">
              <Eyebrow>Material · Light · Movement</Eyebrow>
              <h2 id="integration-title" className="mt-3 font-serif text-[clamp(2.5rem,4vw,3.9rem)] leading-[0.96] font-medium text-charcoal">
                When art integrates<br />with architecture.
              </h2>
            </div>
            <p className="max-w-[32rem] text-sm leading-relaxed font-medium text-charcoal/70 md:col-span-5 md:col-start-8">
              Every work responds to its space, its materials, light, scale and movement, so the artwork becomes a natural part of the guest experience.
            </p>
          </header>
          <div className="mt-7 grid grid-cols-2 gap-3 md:grid-cols-12 md:gap-4">
            <HotelImage
              src={images.integration}
              alt="Contemporary installation suspended across multiple levels of an atrium."
              sizes="(min-width: 768px) 49vw, 100vw"
              className="col-span-2 aspect-[16/8] md:col-span-6 md:aspect-[16/9]"
            />
            <HotelImage
              src={images.integrationTile}
              alt="Intricate blue tile artwork framed by warm stone at a hotel entrance."
              sizes="(min-width: 768px) 23vw, 48vw"
              className="aspect-[4/3] md:col-span-3 md:aspect-[4/5]"
            />
            <HotelImage
              src={images.integrationMural}
              alt="Historic mural in an intimate hospitality interior, illuminated by warm lamps."
              sizes="(min-width: 768px) 23vw, 48vw"
              className="aspect-[4/3] md:col-span-3 md:aspect-[4/5]"
            />
            <HotelImage
              src={images.integrationAtrium}
              alt="Spiral hotel atrium showing how architecture and lighting shape the guest journey."
              sizes="(min-width: 768px) 100vw, 100vw"
              className="col-span-2 aspect-[16/7] md:col-span-12 md:aspect-[16/5]"
            />
          </div>
        </div>
      </section>

      <section aria-labelledby="details-title" className="bg-ivory py-9 md:py-12">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 xl:px-14">
          <header className="flex flex-col gap-4 border-t border-charcoal/15 pt-5 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow>Craft · Surface · Detail</Eyebrow>
              <h2 id="details-title" className="mt-3 font-serif text-[clamp(2.3rem,3.7vw,3.5rem)] leading-[0.98] font-medium text-charcoal">
                Material, considered closely.
              </h2>
            </div>
            <p className="max-w-[24rem] text-sm leading-relaxed font-medium text-charcoal/70">
              Metal, paint, stone and mixed media bring each work its own character and presence.
            </p>
          </header>
          <div className="mt-6 grid grid-cols-2 gap-3 border-b border-charcoal/15 pb-5 sm:grid-cols-3 md:grid-cols-6 md:gap-4">
            {details.map((detail) => (
              <figure key={detail.caption} className="min-w-0">
                <HotelImage
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

      <section aria-labelledby="closing-title" className="relative bg-charcoal">
        <HotelImage
          src={images.closing}
          alt="A sunlit hotel lobby with artwork and generous architectural detail."
          sizes="100vw"
          className="aspect-[4/3] min-h-[32rem] md:aspect-[16/6] md:min-h-[34rem]"
          objectPosition="center 55%"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/50 to-charcoal/10" />
        <div className="absolute inset-y-0 left-0 z-10 flex w-full max-w-[1440px] items-center px-6 sm:px-10 xl:px-14">
          <div className="max-w-[43rem] text-paper">
            <Eyebrow light>Art for the journey</Eyebrow>
            <h2 id="closing-title" className="mt-4 font-serif text-[clamp(2.9rem,6vw,5.5rem)] leading-[0.94] font-medium text-balance">
              Create a hotel experience that stays in <span className="italic text-[#c49a6c]">people&apos;s memories.</span>
            </h2>
            <p className="mt-5 max-w-[30rem] text-sm leading-relaxed font-medium text-paper/85 md:text-base">
              Looking for artwork for a hotel lobby, resort or hospitality project?
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