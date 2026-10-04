import Image from 'next/image'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { ImageReveal } from './reveal'

type LobbyImageProps = {
  src: string
  alt: string
  sizes: string
  className: string
  priority?: boolean
  objectPosition?: string
}

const imagePath = '/images/corporate-lobbies/'

const images = {
  hero: `${imagePath}lobby-hero.jpg`,
  introduction: `${imagePath}experience.jpg`,
  entrance: `${imagePath}entrance-reception.jpg`,
  atrium: `${imagePath}atrium-installation.jpg`,
  lounge: `${imagePath}lounge-art.jpg`,
  meeting: `${imagePath}meeting-art.jpg`,
  corridor: `${imagePath}corridor-art.jpg`,
  campus: `${imagePath}campus-sculpture.jpg`,
  featured: `${imagePath}featured-lobby.jpg`,
  featuredDetail: `${imagePath}featured-detail.jpg`,
  featuredMaterial: `${imagePath}featured-material.jpg`,
  identity: `${imagePath}identity-installation.png`,
  sculpture: `${imagePath}sculpture-space.jpg`,
  sculptureDetail: `${imagePath}sculpture-detail.jpg`,
  sculptureMaterial: `${imagePath}sculpture-detail-metal.jpg`,
  integration: `${imagePath}integration-atrium.jpg`,
  integrationDetail: `${imagePath}detail-paint-surface.jpg`,
  integrationArchitecture: `${imagePath}architecture-integration.jpg`,
  integrationArt: `${imagePath}detail-wall-art.jpg`,
  closing: `${imagePath}closing-lobby.jpg`,
  detailMetal: `${imagePath}detail-metal-texture.jpg`,
  detailPaint: `${imagePath}detail-painted-surface.jpg`,
  detailClay: `${imagePath}detail-clay-relief.jpg`,
  detailCarved: `${imagePath}detail-carved-wall.jpg`,
  detailSculpture: `${imagePath}detail-metal-sculpture.jpg`,
  detailFacade: `${imagePath}detail-facade.jpg`,
} as const

const spaces = [
  {
    title: 'Entrance & reception',
    description: 'Signature artworks that establish identity.',
    image: images.entrance,
    alt: 'Contemporary office lounge anchored by a sweeping abstract painting and sculptural artwork.',
  },
  {
    title: 'Atrium spaces',
    description: 'Large-scale installations for expansive areas.',
    image: images.atrium,
    alt: 'Colorful suspended art installation rising through a light-filled architectural atrium.',
  },
  {
    title: 'Lounge & waiting areas',
    description: 'Thoughtful artwork for comfortable, inviting spaces.',
    image: images.lounge,
    alt: 'Corporate reception with contemporary artwork, indoor planting and carefully composed seating.',
  },
  {
    title: 'Meeting & board spaces',
    description: 'Curated artworks for focused environments.',
    image: images.meeting,
    alt: 'Modern conference room with botanical artwork and a long meeting table.',
  },
  {
    title: 'Corridors & transitions',
    description: 'Visual moments that carry through the workplace.',
    image: images.corridor,
    alt: 'Office corridor with geometric wall artwork integrated beside glass meeting-room partitions.',
  },
  {
    title: 'Outdoor & campus',
    description: 'Sculpture that extends the experience beyond interiors.',
    image: images.campus,
    alt: 'Contemporary public sculpture set beside a modern office building and landscaped campus.',
  },
]

const details = [
  { image: images.detailMetal, alt: 'Close detail of a dark, textured metallic artwork surface.', caption: 'Metal · Patina' },
  { image: images.detailPaint, alt: 'Close-up of layered abstract brushwork and painted texture.', caption: 'Paint · Gesture' },
  { image: images.detailClay, alt: 'Sculptural clay relief with a softly modeled surface.', caption: 'Mixed media · Relief' },
  { image: images.detailCarved, alt: 'Carved wall surface with a rhythmic architectural pattern.', caption: 'Surface · Rhythm' },
  { image: images.detailSculpture, alt: 'Reflective abstract metal sculpture detail with curved polished forms.', caption: 'Sculpture · Form' },
  { image: images.detailFacade, alt: 'Close detail of a curved modern metal facade catching soft light.', caption: 'Architecture · Light' },
]

function LobbyImage({
  src,
  alt,
  sizes,
  className,
  priority = false,
  objectPosition = 'center',
}: LobbyImageProps) {
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

export function CorporateLobbiesPage() {
  return (
    <>
      <section aria-labelledby="corporate-hero-title" className="bg-ivory pt-20">
        <div className="relative">
          <LobbyImage
            src={images.hero}
            alt="Sculptural abstract artwork and a large mural bring color to a contemporary office reception."
            sizes="100vw"
            className="aspect-[4/3] min-h-[36rem] md:aspect-[16/7] md:min-h-[34rem]"
            priority
            objectPosition="center 52%"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/25 to-charcoal/5 md:bg-gradient-to-r md:from-charcoal/75 md:via-charcoal/20 md:to-transparent" />
          <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-9 text-paper sm:px-10 md:inset-y-0 md:left-[6vw] md:flex md:w-[min(44vw,39rem)] md:flex-col md:justify-center md:px-0 md:pb-0">
            <Eyebrow light>Corporate lobbies / Art for workplaces</Eyebrow>
            <h1 id="corporate-hero-title" className="mt-5 max-w-[38rem] font-serif text-[clamp(2.8rem,6.4vw,5.5rem)] leading-[0.91] font-medium text-balance">
              Art that<br />reflects <span className="italic text-[#c49a6c]">progress.</span>
            </h1>
            <p className="mt-5 max-w-[32rem] text-sm leading-[1.7] font-medium text-paper/85 md:text-base">
              Murals, sculptures, paintings and site-specific artworks created to give corporate environments a distinctive identity and lasting impression.
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
            <Eyebrow>The corporate experience</Eyebrow>
            <h2 id="experience-title" className="mt-3 max-w-[34rem] font-serif text-[clamp(2.5rem,4vw,4rem)] leading-[0.96] font-medium text-charcoal text-balance">
              First impressions<br />inspire what comes <span className="italic text-bronze">next.</span>
            </h2>
            <p className="mt-4 max-w-[31rem] text-sm leading-relaxed font-medium text-charcoal/70">
              A corporate lobby is more than an entry point. It represents a brand&apos;s values, culture and vision. Art can create an environment that feels welcoming, memorable and aligned with the organisation&apos;s identity.
            </p>
          </div>
          <LobbyImage
            src={images.introduction}
            alt="Art installation in a bright corporate lobby with full-height glazing, planting and visitor seating."
            sizes="(min-width: 768px) 58vw, 100vw"
            className="aspect-[4/3] md:col-span-7 md:col-start-6 md:row-start-1 md:aspect-[16/8]"
          />
        </div>
      </section>

      <section id="selected-work" aria-labelledby="spaces-title" className="bg-ivory py-9 md:py-12">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 xl:px-14">
          <header className="grid gap-5 border-t border-charcoal/15 pt-5 md:grid-cols-12 md:items-end md:gap-8">
            <div className="md:col-span-7">
              <Eyebrow>Art for every corporate space</Eyebrow>
              <h2 id="spaces-title" className="mt-3 max-w-[43rem] font-serif text-[clamp(2.45rem,4.2vw,4rem)] leading-[0.96] font-medium text-charcoal text-balance">
                A cohesive art experience<br className="hidden md:block" /> across the workplace.
              </h2>
            </div>
            <p className="max-w-[29rem] text-sm leading-relaxed font-medium text-charcoal/70 md:col-span-4 md:col-start-9">
              From striking entrance installations to curated works in meeting areas and lounges, art can elevate every environment within a corporate space.
            </p>
          </header>
          <div className="mt-7 grid grid-cols-2 gap-x-4 gap-y-7 border-b border-charcoal/15 pb-6 sm:grid-cols-3 md:gap-x-5 xl:grid-cols-6 xl:gap-x-4">
            {spaces.map((space, index) => (
              <figure key={space.title} className="min-w-0">
                <LobbyImage src={space.image} alt={space.alt} sizes="(min-width: 1280px) 15vw, (min-width: 640px) 30vw, 46vw" className="aspect-[4/3]" />
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
            <Eyebrow>01 / Featured corporate lobby</Eyebrow>
            <h2 id="featured-title" className="mt-3 font-serif text-[clamp(2.4rem,3.8vw,3.65rem)] leading-[0.96] font-medium text-charcoal">
              A space that<br />speaks for your <span className="italic text-bronze">brand.</span>
            </h2>
            <p className="mt-4 max-w-[27rem] text-sm leading-relaxed font-medium text-charcoal/70">
              A sculptural and artistic composition brings architecture, material and movement together to create a considered first impression.
            </p>
            <a href="#sculpture" className="group mt-5 inline-flex items-center gap-3 eyebrow text-[0.625rem] text-charcoal">
              View full project
              <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.3} />
            </a>
          </div>
          <LobbyImage
            src={images.featured}
            alt="Sculptural artwork at the centre of a contemporary corporate atrium."
            sizes="(min-width: 768px) 42vw, 100vw"
            className="aspect-[4/3] md:col-span-5 md:aspect-[5/4]"
          />
          <div className="grid grid-cols-2 gap-3 md:col-span-3 md:grid-cols-1 md:gap-4">
            <LobbyImage
              src={images.featuredDetail}
              alt="Close view of a sculptural relief integrated into a double-height atrium wall."
              sizes="(min-width: 768px) 24vw, 48vw"
              className="aspect-[4/3] md:aspect-[5/3]"
              objectPosition="center 35%"
            />
            <LobbyImage
              src={images.featuredMaterial}
              alt="Sculptural stone and steel installation set within a contemporary public interior."
              sizes="(min-width: 768px) 24vw, 48vw"
              className="aspect-[4/3] md:aspect-[5/3]"
            />
          </div>
        </div>
      </section>

      <section aria-labelledby="identity-title" className="relative bg-charcoal">
        <LobbyImage
          src={images.identity}
          alt="Suspended glass installation drawing the eye upward through a dramatic lobby interior."
          sizes="100vw"
          className="aspect-[4/3] min-h-[28rem] md:aspect-[16/6] md:min-h-[32rem]"
          objectPosition="center 42%"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-charcoal/75 via-charcoal/25 to-transparent" />
        <div className="absolute inset-y-0 left-0 z-10 flex w-full max-w-[1440px] items-center px-6 sm:px-10 xl:px-14">
          <div className="max-w-[36rem] text-paper">
            <Eyebrow light>Art as</Eyebrow>
            <h2 id="identity-title" className="mt-3 font-serif text-[clamp(3.5rem,7vw,6.5rem)] leading-[0.9] font-medium">IDENTITY.</h2>
            <p className="mt-5 max-w-[26rem] text-sm leading-relaxed font-medium text-paper/85 md:text-base">
              Art can communicate a company&apos;s values, culture and forward-thinking approach without saying a word.
            </p>
          </div>
        </div>
      </section>

      <section id="sculpture" aria-labelledby="sculpture-title" className="bg-ivory py-10 md:py-14">
        <div className="mx-auto grid max-w-[1440px] gap-5 px-6 md:grid-cols-12 md:items-end md:gap-5 md:px-10 xl:gap-6 xl:px-14">
          <LobbyImage
            src={images.sculpture}
            alt="Sculptures arranged within a tall, light-filled institutional atrium."
            sizes="(min-width: 768px) 58vw, 100vw"
            className="aspect-[4/3] md:col-span-7 md:row-span-2 md:aspect-[16/10]"
          />
          <div className="md:col-span-5 md:col-start-8 md:row-start-1 md:pb-2">
            <Eyebrow>02 / Sculptural intervention</Eyebrow>
            <h2 id="sculpture-title" className="mt-3 font-serif text-[clamp(2.45rem,4vw,3.85rem)] leading-[0.96] font-medium text-charcoal">
              Sculpture creates<br />a <span className="italic text-bronze">focal point.</span>
            </h2>
            <p className="mt-4 max-w-[31rem] text-sm leading-relaxed font-medium text-charcoal/70">
              A sculptural work can give a corporate lobby a memorable centre, something employees and visitors encounter naturally as they move through the space.
            </p>
            <a href="#art-architecture" className="group mt-5 inline-flex items-center gap-3 eyebrow text-[0.625rem] text-charcoal">
              View more work
              <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.3} />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-3 md:col-span-5 md:col-start-8 md:row-start-2 md:gap-4">
            <LobbyImage
              src={images.sculptureDetail}
              alt="Colorful suspended sculpture composed of glass elements and fine hanging lines."
              sizes="(min-width: 768px) 21vw, 48vw"
              className="aspect-[4/3] md:aspect-[5/3]"
            />
            <LobbyImage
              src={images.sculptureMaterial}
              alt="Close-up of a reflective metal sculpture with flowing, polished surfaces."
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
              Every work responds to its space, its materials, light, scale and movement, so the artwork becomes a natural part of the environment.
            </p>
          </header>
          <div className="mt-7 grid grid-cols-2 gap-3 md:grid-cols-12 md:gap-4">
            <LobbyImage
              src={images.integration}
              alt="A colorful art installation in a large contemporary office atrium."
              sizes="(min-width: 768px) 49vw, 100vw"
              className="col-span-2 aspect-[16/8] md:col-span-6 md:aspect-[16/9]"
            />
            <LobbyImage
              src={images.integrationDetail}
              alt="Abstract painted surface with expressive layers and a warm, tactile finish."
              sizes="(min-width: 768px) 23vw, 48vw"
              className="aspect-[4/3] md:col-span-3 md:aspect-[4/5]"
            />
            <LobbyImage
              src={images.integrationArt}
              alt="Contemporary reception interior with an artistic wall composition and natural light."
              sizes="(min-width: 768px) 23vw, 48vw"
              className="aspect-[4/3] md:col-span-3 md:aspect-[4/5]"
            />
            <LobbyImage
              src={images.integrationArchitecture}
              alt="A modern glass-and-stone atrium showing how art, structure and daylight share a space."
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
                <LobbyImage
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
            Photography on this page is illustrative and is not presented as a record of completed Vivek Ranganath commissions.
          </p>
        </div>
      </section>

      <section aria-labelledby="closing-title" className="relative bg-charcoal">
        <LobbyImage
          src={images.closing}
          alt="A large-scale art installation at the glazed edge of a contemporary workplace lobby."
          sizes="100vw"
          className="aspect-[4/3] min-h-[32rem] md:aspect-[16/6] md:min-h-[34rem]"
          objectPosition="center 55%"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/50 to-charcoal/10" />
        <div className="absolute inset-y-0 left-0 z-10 flex w-full max-w-[1440px] items-center px-6 sm:px-10 xl:px-14">
          <div className="max-w-[43rem] text-paper">
            <Eyebrow light>Art for the everyday arrival</Eyebrow>
            <h2 id="closing-title" className="mt-4 font-serif text-[clamp(2.9rem,6vw,5.5rem)] leading-[0.94] font-medium text-balance">
              Create a workplace that leaves a <span className="italic text-[#c49a6c]">lasting impression.</span>
            </h2>
            <p className="mt-5 max-w-[30rem] text-sm leading-relaxed font-medium text-paper/85 md:text-base">
              Looking for artwork for a corporate lobby, office space or business campus?
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