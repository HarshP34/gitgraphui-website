import { useState } from 'react'
import { LINKS, VERSION } from '../data'

export default function Download() {
  const [showInstallHelp, setShowInstallHelp] = useState(false)

  return (
    <section id="download" className="pt-12 pb-24 md:pt-16 md:pb-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-10">
          <p className="section-label mb-4">Download</p>
          <h2 className="heading-display text-3xl md:text-4xl mb-4">
            Install on Windows
          </h2>
          <p className="text-text-muted leading-relaxed">
            Grab the latest installer from GitHub releases — the same file linked below.
            Requires Git for Windows for SSH remotes.
          </p>
        </div>

        <div className="rounded-lg border border-border bg-surface p-8 md:p-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
            <a
              href={LINKS.download}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <WindowsIcon />
              Download for Windows
            </a>
            <a
              href={LINKS.releases}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <GitHubIcon />
              View on GitHub
            </a>
          </div>

          <p className="text-xs text-text-muted mb-8">
            v{VERSION} · Windows x64 · NSIS installer
          </p>

          <div className="max-w-xl">
            <button
              type="button"
              onClick={() => setShowInstallHelp(!showInstallHelp)}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-md border border-border bg-surface-raised text-sm text-left hover:bg-bg transition-colors"
            >
              <ShieldIcon />
              <span className="flex-1 min-w-0 text-text-muted leading-snug">
                SmartScreen says unknown publisher — that&apos;s normal for now
              </span>
              <Chevron className={`w-4 h-4 text-text-muted shrink-0 transition-transform ${showInstallHelp ? 'rotate-180' : ''}`} />
            </button>

            {showInstallHelp && (
              <div className="mt-3 px-4 py-4 rounded-md border border-border text-sm text-text-muted space-y-4">
                <p>
                  We haven&apos;t signed the installer with a commercial certificate yet,
                  so Windows may warn you. The app only runs locally — your repos stay on your PC.
                </p>
                <ol className="space-y-2 list-decimal list-inside text-text">
                  <li>Run the downloaded <code className="text-xs font-mono text-accent">.exe</code></li>
                  <li>On the SmartScreen prompt, click <strong>More info</strong></li>
                  <li>Click <strong>Run anyway</strong></li>
                </ol>
                <p className="text-xs">
                  Download only from this page or{' '}
                  <a
                    href={LINKS.releases}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent-hover underline underline-offset-2"
                  >
                    GitHub releases
                  </a>
                  .
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function WindowsIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 5.5L10.5 4.4v7.1H3V5.5zm0 8.1h7.5v7.1L3 19.6V13.6zm9-9.3L21 3.1v8.5h-9V4.3zm0 10.2h9v8.5l-9 1.3v-9.8z" />
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

function ShieldIcon() {
  return (
    <svg className="w-4 h-4 shrink-0 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" d="M12 3 4 7v6c0 5 3.5 8 8 8s8-3 8-8V7l-8-4z" />
    </svg>
  )
}

function Chevron({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" d="M6 9l6 6 6-6" />
    </svg>
  )
}
