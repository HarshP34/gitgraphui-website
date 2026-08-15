import { LINKS, VERSION, SCREENSHOTS } from '../data'
import AppScreenshot from './AppScreenshot'

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 border-b border-border">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-2xl animate-fade-up">
          <p className="section-label mb-5">Windows · v{VERSION}</p>

          <h1 className="heading-display text-4xl md:text-[3.25rem] leading-[1.15] mb-6">
            Git history you can see, not scroll through.
          </h1>

          <p className="text-text-muted text-base md:text-lg leading-relaxed mb-8 max-w-xl">
            A desktop Git client built around the commit graph — with split diffs,
            conflict resolution, and everything running locally on your machine.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-3 mb-14">
            <a href="#download" className="btn-primary w-full sm:w-auto">
              <DownloadIcon />
              Download for Windows
            </a>
            <a
              href={LINKS.releases}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full sm:w-auto"
            >
              <GitHubIcon />
              GitHub Releases
            </a>
          </div>
        </div>

        <div className="animate-fade-up" style={{ animationDelay: '0.15s' }}>
          <AppScreenshot
            src={SCREENSHOTS.graph}
            alt="Git Graph UI showing the commit graph with branch lanes, local and remote branches, author avatars, and commit search"
            priority
          />
        </div>
      </div>
    </section>
  )
}

function DownloadIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.395-.135-.345-.72-1.395-1.23-1.89-.42-.405-1.02-.99-.015-1.005.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}
