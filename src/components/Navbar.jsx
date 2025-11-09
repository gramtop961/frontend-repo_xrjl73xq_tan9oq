import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#product', label: 'Product' },
    { href: '#solutions', label: 'Solutions' },
    { href: '#docs', label: 'Docs' },
    { href: '#pricing', label: 'Pricing' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-xl border border-white/10 bg-black/30 backdrop-blur supports-[backdrop-filter]:bg-black/30">
          <nav className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#" className="flex items-center gap-2">
              <div className="h-6 w-6 rounded bg-gradient-to-tr from-fuchsia-500 via-indigo-500 to-cyan-400" />
              <span className="font-semibold tracking-tight text-white">unBound.ai</span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#get-started"
                className="inline-flex items-center rounded-md bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 px-3 py-2 text-sm font-medium text-white shadow hover:opacity-95 transition"
              >
                Launch App
              </a>
            </div>

            <button
              type="button"
              aria-label="Toggle menu"
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </nav>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3 sm:px-6">
              <div className="grid gap-3">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="rounded-md px-2 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 transition"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="#get-started"
                  className="mt-1 inline-flex items-center justify-center rounded-md bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 px-3 py-2 text-sm font-medium text-white shadow hover:opacity-95 transition"
                  onClick={() => setOpen(false)}
                >
                  Launch App
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
