export default function Docs() {
  return (
    <section id="docs" className="relative py-24">
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-24 bg-[radial-gradient(60%_100%_at_50%_0%,rgba(0,240,255,0.15),rgba(0,0,0,0))]" />
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-px rounded-[1rem] bg-gradient-to-br from-white/10 to-transparent opacity-60" />
            <h2 className="relative text-2xl font-semibold text-white">Developer quickstart</h2>
            <p className="relative mt-2 text-white/70">
              Install the SDK and spin up your first agent in minutes. This in-page guide mirrors the hosted docs.
            </p>

            <div className="relative mt-6 grid gap-4 sm:grid-cols-2">
              <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/40 p-4">
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/10 blur-xl" />
                <p className="text-xs font-mono text-white/70">Terminal</p>
                <pre className="mt-2 overflow-x-auto rounded-md bg-black/60 p-3 text-xs text-emerald-300"><code>npm i @unbound/agents
npx unbound init
npx unbound dev</code></pre>
              </div>

              <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/40 p-4">
                <div className="pointer-events-none absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-fuchsia-400/10 blur-xl" />
                <p className="text-xs font-mono text-white/70">JavaScript</p>
                <pre className="mt-2 overflow-x-auto rounded-md bg-black/60 p-3 text-xs text-indigo-200"><code>{`import { Agent, tool } from '@unbound/agents'

const search = tool('search', async (q) => fetch(...))

const agent = new Agent({ tools: [search] })
const reply = await agent.chat("Find trending AI news and summarize.")
console.log(reply)
`}</code></pre>
              </div>
            </div>

            <div className="relative mt-6 flex flex-wrap gap-3">
              <a href="#" className="inline-flex items-center rounded-md bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 px-4 py-2 text-sm font-medium text-white">
                Open full documentation
              </a>
              <a href="#" className="inline-flex items-center rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/10">
                API reference
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
