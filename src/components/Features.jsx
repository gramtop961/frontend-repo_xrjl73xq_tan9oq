import { Rocket, Workflow, Shield, Zap } from 'lucide-react';

const items = [
  {
    icon: Rocket,
    title: 'Production-ready agents',
    desc: 'From planning to execution, deploy robust multi-step agents with built-in retries, guardrails, and tracing.',
  },
  {
    icon: Workflow,
    title: 'Composable tools',
    desc: 'Integrate APIs, functions, webhooks, and data sources with type-safe interfaces and versioned schemas.',
  },
  {
    icon: Shield,
    title: 'Security & control',
    desc: 'Permissions, sandboxing, and policy controls ensure safe operations across environments.',
  },
  {
    icon: Zap,
    title: 'Blazing performance',
    desc: 'Streaming responses, caching, and parallelization keep experiences snappy at scale.',
  },
];

export default function Features() {
  return (
    <section id="product" className="relative py-24">
      <div className="pointer-events-none absolute inset-x-0 -top-32 h-64 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(0,240,255,0.2),rgba(0,0,0,0))]" />
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="bg-gradient-to-br from-white via-white to-white/80 bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl">
            Everything you need to ship agentic apps
          </h2>
          <p className="mt-4 text-white/70">
            Powerful primitives with batteries-included DX. Bring your own model, tools, and data.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow transition hover:bg-white/[0.06] backdrop-blur-xl"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[conic-gradient(from_0deg_at_50%_50%,rgba(0,240,255,0.2),rgba(106,93,255,0.2),rgba(177,94,255,0.2),transparent_60%)] blur-2xl" />
              <div className="relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-br from-cyan-400/30 via-indigo-500/30 to-fuchsia-500/30 text-cyan-300">
                  <Icon size={18} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm text-white/70">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
