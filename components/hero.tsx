'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowRight, MapPin } from 'lucide-react'
import { contact, heroStats, images } from '@/data/site'

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const reduce = useReducedMotion()

  const fade = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease },
  })

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="mt-20 grid min-h-[calc(100dvh-5rem)] grid-cols-1 bg-ivory md:grid-cols-[44%_56%] lg:h-[calc(100dvh-5rem)] lg:grid-cols-[34%_66%]"
    >
      <motion.div
        {...fade(0.12)}
        className="flex min-h-[680px] flex-col justify-center px-7 py-10 sm:px-10 md:min-h-0 md:px-6 md:py-8 lg:px-8 lg:py-4 xl:px-10 2xl:px-14"
      >
        <div className="w-full">
          <p className="text-[0.68rem] font-medium tracking-[0.2em] text-charcoal/75 uppercase">
            Visual Artist · Art Consultant · Designer
          </p>

          <h1 id="hero-title" className="mt-7 font-serif text-[3.5rem] font-medium leading-[0.9] text-charcoal sm:text-[4rem] md:text-[3.5rem] lg:text-[3.75rem] xl:text-[5rem] 2xl:text-[5.375rem]">
            Vivek
            <br />
            <span className="whitespace-nowrap italic">Ranganath</span>
          </h1>

          <div className="mt-5 flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-8 shrink-0 bg-bronze" />
            <p className="text-[0.66rem] font-medium tracking-[0.18em] text-charcoal uppercase">Contemporary Artist</p>
          </div>

          <p className="mt-6 max-w-[25.625rem] text-justify text-base leading-[1.55] font-medium text-charcoal/80 md:text-[1.0625rem]">
            Creating site-specific sculptures, murals and art installations for architecture, hospitality, corporate and luxury developments.
          </p>

          <a
            href="#projects"
            className="mt-7 inline-flex h-[52px] w-[196px] items-center justify-between bg-charcoal px-5 text-[0.65rem] font-medium tracking-[0.17em] text-paper uppercase transition-colors hover:bg-bronze"
          >
            View Projects
            <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
          </a>

          <dl className="mt-8 grid grid-cols-3 border-y border-charcoal/15 py-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="grid min-w-0 grid-rows-[24px_1fr] border-r border-charcoal/15 px-1 first:pl-0 last:border-r-0 last:pr-0 sm:px-3 md:px-1 xl:px-3">
                <dt className={stat.value === 'Site-Specific' ? 'whitespace-nowrap font-serif font-medium text-[0.78rem] leading-6 text-charcoal md:text-[0.7rem] lg:text-[0.78rem] xl:text-[1.125rem] 2xl:text-xl' : 'font-serif text-xl leading-6 font-medium text-charcoal xl:text-2xl'}>
                  {stat.value}
                </dt>
                <dd className="mt-1 text-[0.55rem] leading-[1.5] font-medium tracking-[0.08em] text-charcoal/75 uppercase sm:text-[0.6rem]">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-5 flex items-center gap-2 text-[0.58rem] font-medium tracking-[0.15em] text-charcoal/70 uppercase">
            <MapPin size={12} strokeWidth={1.5} aria-hidden="true" />
            {contact.location}
          </p>

          <a href="#about" className="mt-4 inline-flex w-fit items-center gap-2 text-[0.56rem] font-medium tracking-[0.18em] text-charcoal/60 uppercase transition-colors hover:text-charcoal">
            Scroll
            <ArrowDown size={12} strokeWidth={1.5} aria-hidden="true" />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={reduce ? false : { scale: 1.04, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease }}
        className="relative min-h-[55svh] overflow-hidden md:min-h-0"
      >
        <Image
          src={images.hero}
          alt="Sculpture and monumental mural in a contemporary architectural lobby"
          fill
          priority
          sizes="(min-width: 1024px) 66vw, 100vw"
          className="object-cover object-[center_52%]"
        />
      </motion.div>
    </section>
  )
}
