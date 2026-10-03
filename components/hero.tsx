'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { images } from '@/data/site'

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
      className="relative isolate min-h-[min(100svh,620px)] h-[100svh] w-full max-w-[100vw] overflow-x-clip overflow-hidden bg-[#181715] max-md:min-h-[700px]"
    >
      <motion.div
        initial={reduce ? false : { scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease }}
        className="absolute inset-0"
      >
        <Image
          src={images.hero}
          alt="Architectural interior with mural and warm natural light"
          fill
          priority
          sizes="100vw"
          className="scale-[1.04] object-cover object-center"
          style={{ objectPosition: 'center 52%' }}
        />
      </motion.div>

      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-full bg-[linear-gradient(90deg,rgba(245,241,232,0.96)_0%,rgba(245,241,232,0.91)_31%,rgba(245,241,232,0.24)_54%,rgba(245,241,232,0)_68%)] md:w-[62%]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[58%] bg-[linear-gradient(90deg,rgba(34,29,24,0.12)_0%,rgba(34,29,24,0.76)_38%,rgba(34,29,24,0.88)_100%)] md:w-[31%]" />

      <motion.div
        {...fade(0.12)}
        className="absolute left-[7vw] top-1/2 z-20 w-[min(34rem,48vw)] -translate-y-1/2 px-1 text-[#181715] max-md:left-[7vw] max-md:top-[8vh] max-md:w-[82vw] max-md:translate-y-0"
      >
        <p className="text-[0.62rem] font-medium tracking-[0.25em] uppercase text-[#403a33] md:text-[0.7rem]">ART · SPACES · PEOPLE · STORIES</p>

        <h1
          id="hero-title"
          className="mt-4 font-serif text-[clamp(3.8rem,6.1vw,6.6rem)] font-normal leading-[0.83] tracking-[-0.055em] text-[#181715] md:mt-5"
        >
          Vivek
          <br />
          Ranganath
        </h1>

        <p className="mt-5 max-w-[22rem] font-serif text-[clamp(1.55rem,2vw,2.25rem)] font-normal leading-[1.02] tracking-[-0.025em] text-[#28241f] md:mt-6">
          Transforming spaces
          <br />
          through art, culture
          <br />
          and human stories.
        </p>

        <div className="mt-6 flex items-center gap-4 md:mt-7">
          <a
            href="#projects"
            aria-label="Explore my work"
            className="inline-flex size-12 items-center justify-center rounded-full bg-[#181715] text-[#fcfbf8] transition-transform duration-500 hover:scale-105 md:size-[52px]"
          >
            <ArrowRight size={20} strokeWidth={1.5} />
          </a>

          <a href="#projects" className="text-[0.64rem] font-medium uppercase tracking-[0.17em] text-[#181715] transition-opacity hover:opacity-70 md:text-[0.7rem]">
            EXPLORE MY WORK
          </a>
        </div>
      </motion.div>

      <motion.div
        {...fade(0.22)}
        className="absolute right-[5vw] top-1/2 z-20 w-[min(15rem,19vw)] -translate-y-1/2 text-[#fcfbf8] drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] max-md:right-[7vw] max-md:top-auto max-md:bottom-[9vh] max-md:w-[42vw] max-md:translate-y-0"
      >
        <div className="mb-1 text-[2.8rem] leading-none text-[#fcfbf8] md:text-[3.2rem]">“</div>

        <p className="font-serif text-[clamp(1.8rem,2.45vw,3rem)] font-normal leading-[0.94] tracking-[-0.025em] text-[#fcfbf8]">
          Art gives
          <br />
          soul to
          <br />
          spaces.
        </p>

        <div className="mt-4 font-serif text-[1.1rem] italic text-[#fcfbf8]/90 md:mt-5 md:text-[1.2rem]">Vivek Ranganath</div>
      </motion.div>

      <div className="absolute bottom-5 right-[5vw] z-20 max-md:right-auto max-md:left-[7vw] md:bottom-7">
        <div className="flex flex-col items-center gap-2.5 text-[#fcfbf8]">
          <div className="flex size-10 items-center justify-center rounded-full border border-[#fcfbf8]/65 bg-[#181715]/25 text-[0.5rem] font-normal tracking-[0.2em] uppercase backdrop-blur-[8px]">
            <span className="translate-x-[1px]">●</span>
          </div>
          <span className="text-[0.55rem] font-medium tracking-[0.22em] uppercase">SCROLL</span>
          <span className="h-7 w-px bg-[#fcfbf8]/65" />
        </div>
      </div>
    </section>
  )
}
