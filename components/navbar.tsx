'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { images, navItems } from '@/data/site'
import { cn } from '@/lib/utils'
import { CtaLink } from './cta-link'

export function Navbar({ homePath = '' }: { homePath?: string }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const homeAnchor = (href: string) => `${homePath}${href}`

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-700',
        scrolled || open ? 'border-b border-charcoal/10 bg-ivory/95 backdrop-blur-sm' : 'border-b border-transparent bg-ivory',
      )}
    >
      <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between gap-6 px-5 md:px-10">
        <a href={homeAnchor('#home')} className="shrink-0" aria-label="Vivek Ranganath — back to top">
          <Image src={images.logo} alt="Vivek Ranganath" width={437} height={103} priority className="h-8 w-auto md:h-9" />
        </a>

        <nav aria-label="Primary" className="hidden xl:block">
          <ul className="flex items-center gap-7">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={homeAnchor(item.href)} className="eyebrow text-warm-grey transition-colors duration-300 hover:text-charcoal">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <CtaLink href={homeAnchor('#contact')} className="hidden md:inline-flex">
            Discuss a Project
          </CtaLink>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="inline-flex size-12 items-center justify-center text-charcoal xl:hidden"
          >
            {open ? <X className="size-5" strokeWidth={1.25} /> : <Menu className="size-5" strokeWidth={1.25} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-x-0 top-20 bottom-0 overflow-y-auto bg-ivory xl:hidden"
          >
            <nav aria-label="Mobile" className="flex min-h-full flex-col justify-between px-5 pt-8 pb-10 md:px-10">
              <ul className="flex flex-col">
                {navItems.map((item, i) => (
                  <li key={item.href} className="border-b border-charcoal/10">
                    <a
                      href={homeAnchor(item.href)}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline justify-between py-4 font-serif text-3xl text-charcoal"
                    >
                      {item.label}
                      <span className="eyebrow font-sans text-bronze">{String(i + 1).padStart(2, '0')}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-col gap-3">
                <CtaLink href={homeAnchor('#contact')}>Discuss a Project</CtaLink>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
