import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden" id="home">
      {/* Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#03030A] via-[#03030A]/50 to-[#03030A]" />
      <div className="pointer-events-none absolute -inset-x-20 -top-20 h-[60vh] bg-[radial-gradient(100%_60%_at_50%_0%,rgba(177,94,255,0.35),rgba(0,0,0,0))]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.2] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 64 64\' width=\'64\' height=\'64\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.25\'/%3E%3C/svg%3E")' }} />

      {/* Floating glass orbs */}
      <div className="pointer-events-none absolute left-1/2 top-24 h-64 w-64 -translate-x-1/2 rounded-full bg-gradient-to-br from-cyan-400/20 via-indigo-500/20 to-fuchsia-500/20 blur-3xl" />
      <div className="pointer-events-none absolute right-10 bottom-10 h-40 w-40 rounded-full bg-cyan-400/10 blur-2xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center px-6 pt-36 text-center sm:px-8">
        <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 shadow backdrop-blur">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
          Introducing the next generation of AI agents
        </p>
        <h1 className="mt-6 bg-gradient-to-br from-white via-white to-white/80 bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-5xl md:text-6xl">
          Build unbounded, autonomous AI systems
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base text-white/70 sm:text-lg">
          Compose tools, data, and models into intelligent agents that plan, act, and learn. Ship from idea to production with delightful DX.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a href="#get-started" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 px-5 py-3 text-sm font-medium text-white shadow transition hover:opacity-95">
            Get Started
          </a>
          <a href="#docs" className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur hover:bg-white/10">
            Read the Docs
          </a>
        </div>
      </div>
    </section>
  );
}
