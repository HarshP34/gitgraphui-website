import { VERSION, LINKS } from '../data'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-3">
              <Logo className="w-7 h-7" />
              <span className="font-semibold">Git Graph UI</span>
            </div>
            <p className="text-sm text-text-muted max-w-sm leading-relaxed">
              A local, Electron-based Git GUI with a visual commit graph, split
              diffs, and conflict resolution. Your repos stay on your machine.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3">Product</h4>
            <ul className="space-y-2 text-sm text-text-muted">
              <li><a href="#features" className="hover:text-text transition-colors">Features</a></li>
              <li><a href="#download" className="hover:text-text transition-colors">Download</a></li>
              <li><a href="#faq" className="hover:text-text transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-text transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3">Resources</h4>
            <ul className="space-y-2 text-sm text-text-muted">
              <li>
                <a
                  href={LINKS.releases}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-text transition-colors"
                >
                  GitHub Releases
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border text-xs text-text-muted">
          <span>© {new Date().getFullYear()} Git Graph UI · v{VERSION}</span>
          <span className="font-mono">com.gitgraphui.app</span>
        </div>
      </div>
    </footer>
  )
}
