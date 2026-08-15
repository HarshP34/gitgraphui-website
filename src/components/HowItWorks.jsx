export default function HowItWorks() {
  const steps = [
    {
      step: '01',
      title: 'Download & install',
      description:
        'Get the Windows installer from GitHub Releases. NSIS setup with desktop and Start Menu shortcuts.',
    },
    {
      step: '02',
      title: 'Open your repository',
      description:
        'Browse your local filesystem or drag a folder. Git operations run on your machine — repos never leave your computer.',
    },
    {
      step: '03',
      title: 'Work with confidence',
      description:
        'Stage, commit, merge, and push with a visual graph, split diffs, and built-in conflict resolution. Real-time sync via WebSocket.',
    },
  ]

  return (
    <section id="how-it-works" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-16">
          <p className="section-label mb-4">How it works</p>
          <h2 className="heading-display text-3xl md:text-4xl mb-4">Runs on your machine</h2>
          <p className="text-text-muted leading-relaxed">
            Git executes locally. Your repos never leave your PC — the optional cloud
            account is only for billing and preferences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((s) => (
            <div key={s.step} className="relative">
              <span className="text-5xl font-bold text-border">{s.step}</span>
              <h3 className="text-lg font-semibold mt-2 mb-2">{s.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>

        <div className="rounded-lg border border-border bg-surface p-6 md:p-8 mb-8">
          <h3 className="text-sm font-medium text-text-muted uppercase tracking-wider mb-6">
            Architecture
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2 text-sm font-mono">
            <ArchBox label="Electron App" sub="React UI" color="accent" />
            <Arrow />
            <ArchBox label="Local Server" sub="Port" color="green" />
            <Arrow />
            <ArchBox label="simple-git" sub="Your .git" color="purple" />
            <div className="hidden md:block w-8" />
            <div className="text-text-muted text-xs text-center md:text-left">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange" />
                WebSocket ← file watcher
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className="w-2 h-2 rounded-full bg-accent" />
                Cloud API (optional) — auth & billing
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-surface p-6 md:p-8">
          <div className="flex gap-4">
            <div className="shrink-0 w-10 h-10 rounded-md border border-border flex items-center justify-center text-text-muted">
              <KeyIcon />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Your SSH keys stay on your machine</h3>
              <p className="text-sm text-text-muted leading-relaxed mb-4">
                When you connect to GitHub, GitLab, or any remote, Git Graph UI uses
                SSH keys that already live on your computer. We do not store, upload,
                or keep copies of your private keys on our servers.
              </p>
              <ul className="grid sm:grid-cols-2 gap-2 text-sm text-text-muted">
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  Keys are read locally for Git commands only
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  No private key data sent to the cloud
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  Same keys you already use in your terminal
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  You pick which key — we never collect it
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ArchBox({ label, sub, color }) {
  const colors = {
    accent: 'border-accent/30 bg-accent/5 text-accent',
    green: 'border-green/30 bg-green/5 text-green',
    purple: 'border-purple/30 bg-purple/5 text-purple',
  }
  return (
    <div className={`px-5 py-3 rounded-xl border text-center min-w-[140px] ${colors[color]}`}>
      <div className="font-semibold">{label}</div>
      <div className="text-xs opacity-70 mt-0.5">{sub}</div>
    </div>
  )
}

function Arrow() {
  return (
    <svg className="w-5 h-5 text-border rotate-90 md:rotate-0 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

function KeyIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-green shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}
