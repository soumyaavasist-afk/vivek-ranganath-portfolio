'use client'

import Image from 'next/image'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { contact, heroStats, images, portfolio } from '@/data/site'
import { CtaLink } from './cta-link'

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '8%'])

  const fade = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.2, delay, ease },
  })

  return (
    <section
      id="home"
      ref={ref}
      aria-labelledby="hero-title"
      className="relative flex flex-col pt-20 lg:grid lg:min-h-svh lg:grid-cols-[minmax(0,34fr)_minmax(0,66fr)]"
    >
      <div className="relative order-2 flex flex-col justify-between px-5 pt-10 pb-10 md:px-10 lg:order-1 lg:pt-14 lg:pb-10 xl:pl-14">
        <div>
          <motion.p {...fade(0.2)} className="eyebrow text-warm-grey">
            Visual Artist · Art Consultant · Designer
          </motion.p>

          <motion.h1
            {...fade(0.35)}
            id="hero-title"
            className="mt-8 font-serif text-[clamp(3.5rem,7vw,7.5rem)] leading-[0.88] font-light tracking-[-0.02em] text-charcoal"
          >
            Vivek
            <br />
            <span className="italic">Ranganath</span>
          </motion.h1>

          <motion.div {...fade(0.5)} className="mt-8 flex items-center gap-4">
            <span aria-hidden="true" className="h-px w-12 bg-bronze" />
            <p className="eyebrow text-charcoal">Contemporary Artist</p>
          </motion.div>

          <motion.p {...fade(0.6)} className="mt-6 max-w-sm text-base leading-relaxed text-warm-grey text-pretty">
            Creating site-specific sculptures, murals and art installations for architecture, hospitality, corporate
            and luxury developments.
          </motion.p>

          <motion.div {...fade(0.7)} className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CtaLink href="#projects">View Projects</CtaLink>
            <CtaLink href={portfolio.href} variant="outline" download>
              Download Portfolio
            </CtaLink>
          </motion.div>
        </div>

        <motion.div {...fade(0.9)} className="mt-14">
          <dl className="grid grid-cols-3 border-t border-charcoal/15">
            {heroStats.map((stat) => (
              <div key={stat.label} className="border-r border-charcoal/15 pt-5 pr-3 last:border-r-0 [&:not(:first-child)]:pl-4">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-serif text-xl leading-none text-charcoal xl:text-2xl">{stat.value}</dd>
                <dd aria-hidden="true" className="mt-2 text-[0.6875rem] leading-snug tracking-wide text-warm-grey">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-8 flex items-center justify-between">
            <p className="eyebrow text-warm-grey">{contact.location}</p>
            <a href="#about" className="eyebrow group flex items-center gap-3 text-warm-grey hover:text-charcoal">
              Scroll
              <span aria-hidden="true" className="relative block h-10 w-px overflow-hidden bg-charcoal/15">
                <span className="absolute inset-x-0 top-0 h-1/2 animate-[scrollcue_2.4s_ease-in-out_infinite] bg-charcoal motion-reduce:animate-none" />
              </span>
            </a>
          </div>
        </motion.div>
      </div>

      <div className="relative order-1 aspect-[4/5] overflow-hidden sm:aspect-[16/11] lg:order-2 lg:aspect-auto lg:h-full">
        <motion.div
          style={{ y }}
          initial={reduce ? false : { scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.2, ease }}
          className="absolute inset-0"
        >
          <Image
            src={images.hero}
            alt="Concept image: monumental mural and bronze sculpture integrated into a double-height hotel lobby"
            fill
            priority
            sizes="(min-width: 1024px) 66vw, 100vw"
            className="object-cover object-center"
          />
        </motion.div>
        <p className="eyebrow absolute right-5 bottom-5 bg-ivory/85 px-3 py-2 text-[0.625rem] text-warm-grey md:right-8 md:bottom-8">
          Concept imagery
        </p>
      </div>
    </section>
  )
}
