import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import Docs from './components/Docs';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#03030A] text-white font-inter antialiased">
      {/* Global ambient gradient + grain (non-interactive) */}
      <div className="pointer-events-none absolute inset-0 opacity-60" style={{ background: 'radial-gradient(1200px_800px_at_50%_-10%, rgba(0,240,255,0.15), rgba(177,94,255,0.08) 45%, rgba(0,0,0,0) 70%)' }} />
      <div className="pointer-events-none absolute inset-0 opacity-[0.14] mix-blend-soft-light" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 64 64\' width=\'64\' height=\'64\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.25\'/%3E%3C/svg%3E")' }} />

      <Navbar />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <Docs />

        {/* Pricing with glass + neon accents */}
        <section id="pricing" className="relative py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="bg-gradient-to-br from-white via-white to-white/80 bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl">Simple, usage-based pricing</h2>
              <p className="mt-4 text-white/70">Start free. Scale as you grow with transparent limits and no surprises.</p>
            </div>

            <div className="relative mt-12 grid gap-6 lg:grid-cols-3">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
                <div className="pointer-events-none absolute inset-px rounded-[1rem] bg-gradient-to-br from-white/10 to-transparent opacity-60" />
                <h3 className="relative text-lg font-semibold">Hobby</h3>
                <p className="relative mt-1 text-sm text-white/70">For personal projects and tinkering.</p>
                <div className="relative mt-4 text-3xl font-bold">Free</div>
                <ul className="relative mt-4 space-y-2 text-sm text-white/80">
                  <li>10k tokens/day</li>
                  <li>Community support</li>
                  <li>Hosted playground</li>
                </ul>
                <a href="#get-started" className="relative mt-6 inline-flex w-full items-center justify-center rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/10">Start</a>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-cyan-400/30 bg-white/[0.05] p-6 shadow-[0_0_40px_-12px_rgba(0,240,255,0.25)] backdrop-blur-xl">
                <div className="pointer-events-none absolute -inset-8 bg-[conic-gradient(from_120deg_at_50%_50%,rgba(0,240,255,0.18),rgba(106,93,255,0.18),rgba(177,94,255,0.18),transparent_60%)] blur-2xl" />
                <h3 className="relative text-lg font-semibold">Pro</h3>
                <p className="relative mt-1 text-sm text-white/70">For startups shipping production agents.</p>
                <div className="relative mt-4 text-3xl font-bold">$49<span className="text-base font-medium text-white/60">/mo</span></div>
                <ul className="relative mt-4 space-y-2 text-sm text-white/80">
                  <li>1M tokens/month</li>
                  <li>Priority support</li>
                  <li>Advanced tooling</li>
                </ul>
                <a href="#get-started" className="relative mt-6 inline-flex w-full items-center justify-center rounded-md bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 px-4 py-2 text-sm font-medium text-white shadow transition hover:opacity-95">Upgrade</a>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
                <div className="pointer-events-none absolute inset-px rounded-[1rem] bg-gradient-to-br from-white/10 to-transparent opacity-60" />
                <h3 className="relative text-lg font-semibold">Enterprise</h3>
                <p className="relative mt-1 text-sm text-white/70">Custom SLAs, SSO, on-prem options.</p>
                <div className="relative mt-4 text-3xl font-bold">Contact</div>
                <ul className="relative mt-4 space-y-2 text-sm text-white/80">
                  <li>Unlimited seats</li>
                  <li>Dedicated support</li>
                  <li>Compliance & security</li>
                </ul>
                <a href="#get-started" className="relative mt-6 inline-flex w-full items-center justify-center rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/10">Talk to us</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative border-t border-white/10 py-14">
        <div className="pointer-events-none absolute inset-x-0 -top-24 h-24 bg-[radial-gradient(60%_100%_at_50%_0%,rgba(0,240,255,0.15),rgba(0,0,0,0))]" />
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <p className="text-sm text-white/60">© {new Date().getFullYear()} unBound.ai — All rights reserved.</p>
            <a href="#get-started" className="inline-flex items-center rounded-md bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 px-4 py-2 text-sm font-medium text-white">Get started</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
