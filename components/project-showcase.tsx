import Image from 'next/image'
import { projects, type Project } from '@/data/site'
import { cn } from '@/lib/utils'
import { ImageReveal, Reveal } from './reveal'
import { CtaLink, SectionLabel } from './cta-link'

function ProjectMeta({ project }: { project: Project }) {
  const rows = [
    { label: 'Medium', value: project.medium },
    { label: 'Size', value: project.size },
    { label: 'Location', value: project.location },
    { label: 'Application', value: project.application },
  ]
  return (
    <div>
      <p className="font-serif text-6xl leading-none font-light text-bronze md:text-7xl">{project.number}</p>
      <h3 className="mt-6 font-serif text-3xl leading-tight text-charcoal md:text-4xl text-balance">{project.name}</h3>
      <dl className="mt-8 border-t border-charcoal/15">
        {rows.map((row) => (
          <div key={row.label} className="grid grid-cols-[7rem_1fr] gap-4 border-b border-charcoal/15 py-3.5 text-sm">
            <dt className="eyebrow pt-0.5 text-[0.625rem] text-warm-grey">{row.label}</dt>
            <dd className="text-charcoal">{row.value}</dd>
          </div>
        ))}
      </dl>
      {project.customisedForSite && (
        <p className="eyebrow mt-5 flex items-center gap-3 text-[0.625rem] text-bronze">
          <span aria-hidden="true" className="size-1.5 rounded-full bg-bronze" />
          Customised for site
        </p>
      )}
    </div>
  )
}

function ProjectImage({ project, sizes, className }: { project: Project; sizes: string; className?: string }) {
  return (
    <ImageReveal className={cn('relative overflow-hidden bg-stone', className)}>
      <Image src={project.image} alt={project.imageAlt} fill sizes={sizes} className="object-cover" />
      {project.placeholder && (
        <span className="eyebrow absolute top-4 left-4 bg-ivory/85 px-2.5 py-1.5 text-[0.5625rem] text-warm-grey">
          Concept image
        </span>
      )}
    </ImageReveal>
  )
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  if (index === 0) {
    return (
      <article aria-labelledby={`project-${project.number}`} className="grid gap-10 lg:grid-cols-12">
        <ProjectImage project={project} sizes="100vw" className="aspect-[4/3] lg:col-span-12 lg:aspect-[21/9]" />
        <Reveal className="lg:col-span-5 lg:col-start-8" >
          <div id={`project-${project.number}`}>
            <ProjectMeta project={project} />
          </div>
        </Reveal>
      </article>
    )
  }

  const reversed = index % 2 === 0
  return (
    <article aria-labelledby={`project-${project.number}`} className="grid items-end gap-10 lg:grid-cols-12 lg:gap-10">
      <ProjectImage
        project={project}
        sizes="(min-width: 1024px) 58vw, 100vw"
        className={cn('aspect-[4/3] lg:col-span-7', reversed && 'lg:order-2 lg:col-start-6')}
      />
      <Reveal className={cn('lg:col-span-4', reversed ? 'lg:order-1 lg:col-start-1' : 'lg:col-start-9')}>
        <div id={`project-${project.number}`}>
          <ProjectMeta project={project} />
        </div>
      </Reveal>
    </article>
  )
}

export function ProjectShowcase() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10 xl:px-14">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionLabel index="02">Selected Works</SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                id="projects-title"
                className="mt-10 font-serif text-[clamp(2.5rem,5vw,5rem)] leading-[0.98] font-light text-charcoal text-balance"
              >
                Selected <span className="italic">Projects</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="lg:col-span-4 lg:col-start-9">
            <p className="max-w-md text-lg leading-relaxed text-warm-grey text-pretty">
              A selection of works created for architectural, hospitality and commercial environments.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 flex flex-col gap-24 md:mt-28 md:gap-36">
          {projects.map((project, i) => (
            <ProjectRow key={project.number} project={project} index={i} />
          ))}
        </div>

        <Reveal className="mt-24 flex flex-col items-start justify-between gap-8 border-t border-charcoal/15 pt-10 md:flex-row md:items-center">
          <p className="max-w-lg font-serif text-2xl leading-snug text-charcoal md:text-3xl text-balance">
            Planning a space that deserves a signature artwork?
          </p>
          <CtaLink href="#contact">Discuss a Similar Project</CtaLink>
        </Reveal>
      </div>
    </section>
  )
}
