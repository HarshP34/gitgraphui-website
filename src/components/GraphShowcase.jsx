import { SCREENSHOTS } from '../data'
import AppScreenshot from './AppScreenshot'

const highlights = [
  {
    title: 'Graph first',
    description: 'Branch lanes, avatars, and badges — without losing commit messages or hashes.',
  },
  {
    title: 'Branches at a glance',
    description: 'Local and remote branches in one panel, with search when history gets long.',
  },
  {
    title: 'Daily Git in the toolbar',
    description: 'Fetch, pull, push, stash. SSH keys stay on your machine.',
  },
]

export default function GraphShowcase() {
  return (
    <div className="mt-20 pt-16 border-t border-border">
      <div className="grid lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] gap-10 lg:gap-x-14 items-start">
        <div className="lg:max-w-sm">
          <p className="section-label mb-4">Commit graph</p>
          <h3 className="heading-display text-2xl md:text-3xl mb-4">
            The view that sold us on building this
          </h3>
          <p className="text-text-muted text-sm leading-relaxed mb-8">
            Most Git tools bury history in a list. We wanted the graph up front —
            readable at a glance, still detailed when you need it.
          </p>
          <ul className="space-y-4">
            {highlights.map((item) => (
              <li key={item.title} className="border-l border-border pl-4">
                <p className="text-sm font-medium mb-0.5">{item.title}</p>
                <p className="text-xs text-text-muted leading-relaxed">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <AppScreenshot
          src={SCREENSHOTS.graphFocus}
          alt="Git Graph UI commit graph with branch lanes, commit messages, and hashes"
          className="w-full lg:mt-8"
        />
      </div>
    </div>
  )
}
