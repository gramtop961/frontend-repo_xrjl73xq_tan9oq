import { useState } from 'react'
import { Rocket, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Showcase', href: '#showcase' },
    { label: 'Docs', href: '#docs' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/5 border border-white/10 rounded-2xl px-4 py-3 sm:py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-white">
            <div className="bg-gradient-to-br from-violet-500 to-sky-400 p-2 rounded-lg">
              <Rocket className="h-5 w-5" />
            </div>
            <span className="font-semibold tracking-tight">unBound.ai</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a
              href="#get-started"
              className="inline-flex items-center rounded-xl bg-gradient-to-r from-violet-500 to-sky-400 px-4 py-2 font-medium text-white shadow-lg shadow-violet-500/20 hover:opacity-90"
            >
              Get Started
            </a>
          </nav>

          <button
            className="md:hidden text-white/90"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-3 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/5 border border-white/10 rounded-2xl p-4 text-white">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="py-2 px-2 rounded-lg hover:bg-white/5">
                  {item.label}
                </a>
              ))}
              <a
                href="#get-started"
                className="mt-2 inline-flex justify-center items-center rounded-xl bg-gradient-to-r from-violet-500 to-sky-400 px-4 py-2 font-medium text-white"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
