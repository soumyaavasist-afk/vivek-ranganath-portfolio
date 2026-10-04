import Image from 'next/image'
import { projects, type Project } from '@/data/site'
import { cn } from '@/lib/utils'
import { ImageReveal, Reveal } from './reveal'
import { CtaLink } from './cta-link'

function ProjectMeta({ project }: { project: Project }) {
  const rows = [
    { label: 'Size', value: project.size.startsWith('00') ? 'To be confirmed' : project.size },
    { label: 'Location', value: project.location.replace('Location to be confirmed', 'To be confirmed') },
  ]

  return (
    <div>
      <h3 id={`project-title-${project.number}`} className="font-serif text-3xl leading-tight font-medium text-charcoal text-balance md:text-[2.5rem]">
        {project.medium}
      </h3>
      <p className="eyebrow mt-2 text-[0.625rem] text-bronze">{project.application}</p>
      <p className="mt-4 max-w-[36rem] text-[0.95rem] leading-relaxed text-warm-grey md:text-base">
        {project.conceptNote}
      </p>
      <dl className="mt-5 border-t border-charcoal/15">
        {rows.map((row) => (
          <div key={row.label} className="grid grid-cols-[7rem_1fr] gap-4 border-b border-charcoal/15 py-3.5 text-[0.9375rem]">
            <dt className="eyebrow pt-0.5 text-[0.625rem] text-warm-grey">{row.label}</dt>
            <dd className="font-medium text-charcoal">{row.value}</dd>
          </div>
        ))}
      </dl>
      {project.customisedForSite && (
        <p className="eyebrow mt-4 text-[0.625rem] text-bronze">Customised for site</p>
      )}
    </div>
  )
}

function ProjectImage({ project, sizes, className }: { project: Project; sizes: string; className?: string }) {
  return (
    <ImageReveal className={cn('relative overflow-hidden bg-stone', className)}>
      <Image src={project.image} alt={project.imageAlt} fill sizes={sizes} className="object-cover" />
      {project.placeholder && (
        <span className="eyebrow absolute top-4 left-4 bg-ivory/90 px-3 py-2 text-[0.5625rem] text-charcoal">
          Concept image
        </span>
      )}
    </ImageReveal>
  )
}

function ProjectRow({ project, position }: { project: Project; position: number }) {
  const imageOnRight = position % 2 === 1
  return (
    <article aria-labelledby={`project-title-${project.number}`} className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
      <ProjectImage
        project={project}
        sizes="(min-width: 1024px) 58vw, 100vw"
        className={cn('aspect-[4/3] lg:col-span-7 lg:aspect-[3/2]', imageOnRight && 'lg:order-2 lg:col-start-6')}
      />
      <Reveal className={cn('lg:col-span-4', imageOnRight ? 'lg:order-1 lg:col-start-1' : 'lg:col-start-9')}>
        <ProjectMeta project={project} />
      </Reveal>
    </article>
  )
}

export function ProjectShowcase() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="pt-10 pb-10 md:pt-14 md:pb-12">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10 xl:px-14">
        <header className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(240px,340px)] lg:items-end">
          <div>
            <h2
              id="projects-title"
              className="font-serif text-[clamp(2.5rem,4.4vw,4rem)] leading-[1.02] font-normal text-charcoal text-balance"
            >
              Selected <span className="italic text-bronze">Projects</span>
            </h2>
            <p className="mt-4 max-w-[580px] text-base leading-relaxed font-medium text-warm-grey text-pretty md:text-lg">
              A selection of works created for architectural, hospitality and commercial environments.
            </p>
          </div>

          <blockquote className="max-w-[340px] border-l border-charcoal/15 pl-5 font-serif text-lg leading-snug font-medium italic text-warm-grey lg:justify-self-end">
            Art that enriches spaces and creates lasting experiences.
            <span aria-hidden="true" className="mt-4 block h-px w-8 bg-bronze" />
          </blockquote>
        </header>

        <div className="mt-10 flex flex-col gap-16 md:mt-14 md:gap-24">
          {projects.map((project, position) => (
            <ProjectRow key={project.number} project={project} position={position} />
          ))}
        </div>

        <Reveal className="mt-16 flex flex-col items-start justify-between gap-8 border-t border-charcoal/15 pt-8 md:flex-row md:items-center">
          <p className="max-w-lg font-serif text-2xl leading-snug text-charcoal md:text-3xl text-balance">
            Planning a space that deserves a signature artwork?
          </p>
          <CtaLink href="#contact">Discuss a Similar Project</CtaLink>
        </Reveal>
      </div>
    </section>
  )
}
