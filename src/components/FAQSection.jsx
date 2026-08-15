import { useState } from 'react'
import { FAQ } from '../data'

export default function FAQSection() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-12">
          <p className="section-label mb-4">FAQ</p>
          <h2 className="heading-display text-3xl md:text-4xl mb-4">Common questions</h2>
        </div>

        <div className="space-y-3">
          {FAQ.map((item, i) => (
            <div
              key={item.q}
              className="rounded-lg border border-border bg-surface overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-5 py-4 text-left text-sm font-medium hover:bg-surface-raised/50 transition-colors"
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
              >
                {item.q}
                <Chevron className={`w-4 h-4 text-text-muted shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`} />
              </button>
              {open === i && (
                <div className="px-5 pb-4 text-sm text-text-muted leading-relaxed">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Chevron({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" d="M6 9l6 6 6-6" />
    </svg>
  )
}
