import { FEATURES, SCREENSHOTS, INCLUDED_FEATURES } from '../data'
import GraphShowcase from './GraphShowcase'
import AppScreenshot from './AppScreenshot'

const icons = {
  graph: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <circle cx="6" cy="6" r="2" /><circle cx="18" cy="8" r="2" /><circle cx="12" cy="18" r="2" />
      <path d="M6 6 L12 18 M12 18 L18 8 M6 6 L18 8" />
    </svg>
  ),
  diff: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <rect x="3" y="4" width="8" height="16" rx="1" />
      <rect x="13" y="4" width="8" height="16" rx="1" />
      <path d="M6 9h2M6 13h2M16 9h2M16 15h2" />
    </svg>
  ),
  conflict: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path d="M12 3 L3 21h18L12 3z" />
      <path d="M12 10v4M12 18h.01" />
    </svg>
  ),
  branch: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <circle cx="6" cy="6" r="2" /><circle cx="18" cy="6" r="2" /><circle cx="6" cy="18" r="2" />
      <path d="M6 8v8M6 18h10a2 2 0 002-2v-8" />
    </svg>
  ),
  remote: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path d="M12 3v12M8 11l4 4 4-4" />
      <path d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
    </svg>
  ),
  tabs: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <rect x="3" y="6" width="18" height="14" rx="2" />
      <path d="M3 10h18M8 6V4" />
    </svg>
  ),
}

export default function Features() {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-16">
          <p className="section-label mb-4">Features</p>
          <h2 className="heading-display text-3xl md:text-4xl mb-4">
            Built for the work you do every day
          </h2>
          <p className="text-text-muted leading-relaxed">
            Graph, diffs, conflicts, remotes — free to download, no account required.
          </p>
        </div>

        <GraphShowcase />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature) => (
            <article
              key={feature.title}
              className="p-6 rounded-lg border border-border bg-surface hover:border-text-muted/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-md border border-border flex items-center justify-center mb-4 text-text-muted">
                {icons[feature.icon]}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-4">{feature.description}</p>
              <ul className="space-y-1.5">
                {feature.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-xs text-text-muted">
                    <span className="w-1 h-1 rounded-full bg-green shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <FeatureScreenshot
            title="Split Diff Viewer"
            src={SCREENSHOTS.diff}
            alt="Git Graph UI split diff viewer with side-by-side BEFORE and AFTER panels"
          />
          <FeatureScreenshot
            title="Conflict Resolver"
            src={SCREENSHOTS.conflict}
            alt="Git Graph UI conflict resolver with Ours vs Theirs view"
          />
        </div>

        <div className="mt-20 pt-16 border-t border-border">
          <div className="grid md:grid-cols-[1fr_1.2fr] gap-10 items-start">
            <div>
              <p className="section-label mb-4">Free</p>
              <h3 className="heading-display text-2xl md:text-3xl mb-4">
                Everything included in the download
              </h3>
              <p className="text-text-muted text-sm leading-relaxed mb-8">
                No subscription, no paywall. Grab the Windows installer and you get the full
                feature set below.
              </p>
              <a href="#download" className="btn-primary">
                Download for Windows
              </a>
            </div>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {INCLUDED_FEATURES.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-text-muted">
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-green shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

function FeatureScreenshot({ title, src, alt }) {
  return (
    <div>
      <h3 className="text-sm font-semibold mb-3">{title}</h3>
      <AppScreenshot src={src} alt={alt} />
    </div>
  )
}
