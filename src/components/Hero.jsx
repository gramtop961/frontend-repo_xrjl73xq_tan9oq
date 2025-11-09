import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0A0B10] text-white">
      {/* Background grain and gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(88,28,135,0.35),rgba(12,14,23,0)_70%)]" />
        <div className="absolute inset-0 opacity-[0.18]" style={{ backgroundImage: 'url("data:image/svg+xml;utf8,<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'100%\' height=\'100%\' viewBox=\'0 0 600 600\'><filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/>\n<feColorMatrix type=\'saturate\' values=\'0\'/></filter>\n<rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\' opacity=\'0.35\'/></svg>")' }} />
      </div>

      {/* Spline Canvas */}
      <div className="relative h-[60vh] sm:h-[70vh] lg:h-[75vh]">
        <Spline
          scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Content overlay */}
      <div className="absolute inset-x-0 top-0 h-full flex flex-col items-center justify-center px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80">
            <span className="inline-block h-2 w-2 rounded-full bg-violet-400 animate-pulse" />
            Live 3D — move your mouse
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight">
            Boundless AI Interfaces
          </h1>
          <p className="mt-5 text-white/70 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            Build futuristic, interactive experiences with a tactile 3D canvas, realtime responses, and a silky, grainy glow.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#get-started" className="rounded-xl bg-gradient-to-r from-violet-600 to-sky-500 px-5 py-3 text-sm sm:text-base font-semibold shadow-lg shadow-violet-600/20 hover:opacity-90">
              Get Started
            </a>
            <a href="#docs" className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm sm:text-base font-semibold text-white/90 hover:bg-white/10">
              View Docs
            </a>
          </div>
        </div>

        {/* bottom gradient overlay to blend */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0A0B10] to-transparent" />
      </div>
    </section>
  )
}
