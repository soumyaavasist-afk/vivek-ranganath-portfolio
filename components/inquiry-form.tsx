'use client'

import { useState, type FormEvent } from 'react'
import { ArrowRight } from 'lucide-react'
import { contact, projectTypes } from '@/data/site'

const fieldClass =
  'w-full border-0 border-b border-charcoal/25 bg-transparent px-0 py-3 text-base text-charcoal placeholder:text-warm-grey/60 focus:border-charcoal focus:outline-none focus-visible:outline-none transition-colors'
const labelClass = 'eyebrow text-[0.625rem] text-warm-grey'

export function InquiryForm() {
  const [sent, setSent] = useState(false)

  // No backend yet: compose the enquiry into the visitor's email client.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const get = (k: string) => String(data.get(k) ?? '').trim()
    const subject = `Project enquiry — ${get('projectType')} — ${get('company') || get('name')}`
    const body = [
      `Name: ${get('name')}`,
      `Company / Firm: ${get('company')}`,
      `Email: ${get('email')}`,
      `Project type: ${get('projectType')}`,
      `Project location: ${get('location')}`,
      '',
      get('message'),
    ].join('\n')
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-8 md:grid-cols-2 md:gap-x-8 md:gap-y-10" aria-describedby="form-note">
      <div>
        <label htmlFor="name" className={labelClass}>
          Name
        </label>
        <input id="name" name="name" required autoComplete="name" className={fieldClass} placeholder="Your full name" />
      </div>
      <div>
        <label htmlFor="company" className={labelClass}>
          Company / Firm
        </label>
        <input
          id="company"
          name="company"
          autoComplete="organization"
          className={fieldClass}
          placeholder="Architecture or development firm"
        />
      </div>
      <div>
        <label htmlFor="email" className={labelClass}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={fieldClass}
          placeholder="name@firm.com"
        />
      </div>
      <div>
        <label htmlFor="projectType" className={labelClass}>
          Project Type
        </label>
        <select id="projectType" name="projectType" required defaultValue="" className={`${fieldClass} cursor-pointer`}>
          <option value="" disabled>
            Select a project type
          </option>
          {projectTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
      <div className="md:col-span-2">
        <label htmlFor="location" className={labelClass}>
          Project Location
        </label>
        <input id="location" name="location" className={fieldClass} placeholder="City, site or development name" />
      </div>
      <div className="md:col-span-2">
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className={`${fieldClass} resize-none`}
          placeholder="Tell us about the space, scale and timeline"
        />
      </div>
      <div className="flex flex-col gap-4 md:col-span-2 md:flex-row md:items-center md:justify-between">
        <p id="form-note" className="text-sm text-warm-grey" aria-live="polite">
          {sent ? 'Your email app should now be open with the enquiry ready to send.' : 'Submitting opens your email app with the details filled in.'}
        </p>
        <button
          type="submit"
          className="group eyebrow inline-flex min-h-12 items-center justify-center gap-3 bg-charcoal px-8 py-3 text-paper transition-colors duration-500 hover:bg-bronze"
        >
          Send Enquiry
          <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-500 group-hover:translate-x-1" strokeWidth={1.25} />
        </button>
      </div>
    </form>
  )
}
