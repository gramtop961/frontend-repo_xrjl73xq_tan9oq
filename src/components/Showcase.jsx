import { motion } from 'framer-motion';

const cards = [
  {
    title: 'Tool orchestration',
    desc: 'Agents compose search, scraping, and internal APIs to accomplish goals with minimal prompts.',
  },
  {
    title: 'Structured generation',
    desc: 'Define JSON schemas and enforce outputs for reliable integrations.',
  },
  {
    title: 'Observability',
    desc: 'Trace decisions, tokens, and actions with step-by-step visualizations.',
  },
];

export default function Showcase() {
  return (
    <section id="solutions" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="bg-gradient-to-br from-white via-white to-white/80 bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl">
            Built for real-world complexity
          </h2>
          <p className="mt-4 text-white/70">A platform that scales from prototype to production.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, idx) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.03] p-6 backdrop-blur-xl"
            >
              <div className="pointer-events-none absolute inset-px rounded-[1rem] bg-gradient-to-br from-white/10 to-transparent opacity-60" />
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[conic-gradient(from_120deg_at_50%_50%,rgba(0,240,255,0.18),rgba(106,93,255,0.18),rgba(177,94,255,0.18),transparent_60%)] blur-3xl" />
              <h3 className="relative text-lg font-semibold text-white">{c.title}</h3>
              <p className="relative mt-2 text-sm text-white/70">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
