import { useState } from 'react'

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()

    if (!ACCESS_KEY) {
      setStatus('error')
      setErrorMessage('Contact form is not configured yet. Add VITE_WEB3FORMS_ACCESS_KEY to your environment.')
      return
    }

    setStatus('sending')
    setErrorMessage('')

    const form = e.target
    const formData = new FormData(form)
    formData.append('access_key', ACCESS_KEY)
    formData.append('subject', 'Git Graph UI — Contact form')
    formData.append('from_name', 'Git Graph UI Website')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const data = await res.json()

      if (data.success) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
        setErrorMessage(data.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setErrorMessage('Network error. Please check your connection and try again.')
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="section-label mb-4">Contact</p>
            <h2 className="heading-display text-3xl md:text-4xl mb-4">Get in touch</h2>
            <p className="text-text-muted leading-relaxed mb-6">
              Bug reports, install help, or general feedback — send a note and we&apos;ll reply by email.
            </p>
            <ul className="space-y-3 text-sm text-text-muted">
              <li className="flex items-start gap-2">
                <span className="text-green mt-0.5">✓</span>
                Bug reports and feature requests
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green mt-0.5">✓</span>
                Download or install help
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-border bg-surface p-6 md:p-8">
            {status === 'success' ? (
              <div className="text-center py-8">
                <div className="w-12 h-12 rounded-full bg-green/15 text-green flex items-center justify-center mx-auto mb-4 text-xl">
                  ✓
                </div>
                <h3 className="text-lg font-semibold mb-2">Message sent</h3>
                <p className="text-sm text-text-muted mb-6">
                  Thanks for reaching out. We&apos;ll reply to your email soon.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="text-sm text-accent hover:text-accent-hover transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <Field label="Name" id="name" required>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    disabled={status === 'sending'}
                    className={inputClass}
                    placeholder="Your name"
                  />
                </Field>

                <Field label="Email" id="email" required>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    disabled={status === 'sending'}
                    className={inputClass}
                    placeholder="you@example.com"
                  />
                </Field>

                <Field label="Message" id="message" required>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    disabled={status === 'sending'}
                    className={`${inputClass} resize-y min-h-[120px]`}
                    placeholder="How can we help?"
                  />
                </Field>

                <input type="checkbox" name="botcheck" className="hidden" />

                {status === 'error' && (
                  <p className="text-sm text-pink" role="alert">
                    {errorMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-3 rounded-md bg-text text-bg text-sm font-medium hover:bg-white transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Sending…' : 'Send message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, id, required, children }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium mb-2">
        {label}
        {required && <span className="text-text-muted font-normal"> *</span>}
      </label>
      {children}
    </div>
  )
}

const inputClass =
  'w-full px-4 py-2.5 rounded-xl bg-bg border border-border text-text text-sm placeholder:text-text-muted/60 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-colors disabled:opacity-60'
