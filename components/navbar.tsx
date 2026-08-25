'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#approche', label: 'Approche' },
  { href: '#prestations', label: 'Prestations' },
  { href: '#rdv', label: 'RDV' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/90 shadow-sm backdrop-blur-md'
          : 'bg-transparent',
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#hero"
          className="font-serif text-xl font-semibold leading-tight tracking-wide text-foreground"
        >
          Djamila Bereksi
          <span className="block font-sans text-[0.6rem] font-normal uppercase tracking-[0.25em] text-muted-foreground">
            Bioénergéticienne
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm tracking-wide text-foreground/80 transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#rdv"
            className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Prendre rendez-vous
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-foreground md:hidden"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 px-6 py-4 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base tracking-wide text-foreground/80"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#rdv"
              onClick={() => setOpen(false)}
              className="rounded-full bg-primary px-5 py-2 text-center text-sm font-medium text-primary-foreground"
            >
              Prendre rendez-vous
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
