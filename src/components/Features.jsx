import { Sparkles, Cursor, Layers, Shield } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Generative UX Blocks',
    desc: 'Compose complex interfaces from intelligent primitives that adapt to context.',
  },
  {
    icon: Cursor,
    title: 'Live 3D Interactions',
    desc: 'Mouse-reactive scenes, silky motion, and zero-latency feel built-in.',
  },
  {
    icon: Layers,
    title: 'Composable Pipelines',
    desc: 'Chain models, tools, and data into reusable flows with guardrails.',
  },
  {
    icon: Shield,
    title: 'Trust & Safety',
    desc: 'Runtime policies, red-teaming, and observability baked into every action.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative bg-[#0A0B10] text-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">Everything you need to ship faster</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            From dynamic 3D canvases to robust safety, unBound-style building blocks optimize for velocity and control.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.07] transition-colors">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-gradient-to-br from-violet-600/30 to-sky-500/30 p-2.5">
                  <f.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-semibold">{f.title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
