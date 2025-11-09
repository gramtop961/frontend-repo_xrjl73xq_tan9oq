import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import Docs from './components/Docs';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter antialiased">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <Docs />

        <section id="pricing" className="relative py-24">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="bg-gradient-to-br from-white via-white to-white/80 bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl">Simple, usage-based pricing</h2>
              <p className="mt-4 text-white/70">Start free. Scale as you grow with transparent limits and no surprises.</p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold">Hobby</h3>
                <p className="mt-1 text-sm text-white/70">For personal projects and tinkering.</p>
                <div className="mt-4 text-3xl font-bold">Free</div>
                <ul className="mt-4 space-y-2 text-sm text-white/80">
                  <li>10k tokens/day</li>
                  <li>Community support</li>
                  <li>Hosted playground</li>
                </ul>
                <a href="#get-started" className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/10">Start</a>
              </div>

              <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="pointer-events-none absolute -inset-x-6 -top-6 h-24 rounded-t-2xl bg-gradient-to-r from-indigo-500/20 via-fuchsia-500/20 to-cyan-400/20 blur-2xl" />
                <h3 className="text-lg font-semibold">Pro</h3>
                <p className="mt-1 text-sm text-white/70">For startups shipping production agents.</p>
                <div className="mt-4 text-3xl font-bold">$49<span className="text-base font-medium text-white/60">/mo</span></div>
                <ul className="mt-4 space-y-2 text-sm text-white/80">
                  <li>1M tokens/month</li>
                  <li>Priority support</li>
                  <li>Advanced tooling</li>
                </ul>
                <a href="#get-started" className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 px-4 py-2 text-sm font-medium text-white shadow hover:opacity-95">Upgrade</a>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold">Enterprise</h3>
                <p className="mt-1 text-sm text-white/70">Custom SLAs, SSO, on-prem options.</p>
                <div className="mt-4 text-3xl font-bold">Contact</div>
                <ul className="mt-4 space-y-2 text-sm text-white/80">
                  <li>Unlimited seats</li>
                  <li>Dedicated support</li>
                  <li>Compliance & security</li>
                </ul>
                <a href="#get-started" className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/10">Talk to us</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-12">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <p className="text-sm text-white/60">© {new Date().getFullYear()} unBound.ai — All rights reserved.</p>
            <a href="#get-started" className="inline-flex items-center rounded-md bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 px-4 py-2 text-sm font-medium text-white">Get started</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
