import { useState, useEffect } from 'react'
import { LINKS } from '../data'
import Logo from './Logo'

const navLinks = [
  { href: '#features', label: 'Features' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg/80 backdrop-blur-xl border-b border-border' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <Logo className="w-8 h-8 group-hover:opacity-90 transition-opacity" />
          <span className="font-semibold text-text">Git Graph UI</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-muted hover:text-text transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={LINKS.releases}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-muted hover:text-text transition-colors"
          >
            GitHub
          </a>
          <a
            href="#download"
            className="text-sm font-medium px-4 py-2 rounded-md border border-border hover:bg-surface transition-colors"
          >
            Download
          </a>
        </div>

        <button
          className="md:hidden p-2 text-text-muted hover:text-text"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-surface border-b border-border px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm text-text-muted hover:text-text py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#download"
            className="block text-sm font-medium text-accent py-1"
            onClick={() => setMenuOpen(false)}
          >
            Download
          </a>
          <a
            href={LINKS.releases}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm text-text-muted hover:text-text py-1"
            onClick={() => setMenuOpen(false)}
          >
            GitHub
          </a>
        </div>
      )}
    </header>
  )
}

function MenuIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
    </svg>
  )
}
