'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

const ease = [0.22, 1, 0.36, 1] as const

export function Reveal({
  children,
  delay = 0,
  className,
  y = 24,
}: {
  children: ReactNode
  delay?: number
  className?: string
  y?: number
}) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 1.1, delay, ease }}
    >
      {children}
    </motion.div>
  )
}

export function ImageReveal({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, scale: 1.04 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 1.6, ease }}
    >
      {children}
    </motion.div>
  )
}
