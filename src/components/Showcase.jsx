import { motion } from 'framer-motion'

const cards = [
  {
    title: 'Realtime Agent Handoff',
    desc: 'Stream decisions and UI updates with subframe latency.',
  },
  {
    title: '3D Prompt Spaces',
    desc: 'Blend natural language, code, and geometry for richer control.',
  },
  {
    title: 'Toolformer Playground',
    desc: 'Preview and trace tool calls with visual feedback loops.',
  },
]

export default function Showcase() {
  return (
    <section id="showcase" className="relative bg-[#0A0B10] text-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">Showcase</h2>
            <p className="mt-3 text-white/70 max-w-xl">
              A selection of interactions you can craft with the unBound-inspired toolkit.
            </p>
          </div>

          <a href="#get-started" className="rounded-xl bg-gradient-to-r from-violet-600 to-sky-500 px-5 py-2.5 font-semibold shadow-lg shadow-violet-600/20 hover:opacity-90">
            Build yours
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.03] p-6"
            >
              <div className="absolute -top-20 -right-10 h-40 w-40 rounded-full bg-violet-600/20 blur-3xl" />
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{c.desc}</p>
              <div className="mt-6 h-32 rounded-xl bg-black/30 border border-white/10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
