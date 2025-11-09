import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'

function App() {
  return (
    <div className="min-h-screen bg-[#0A0B10] text-white font-inter">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <footer id="get-started" className="bg-[#0A0B10] border-t border-white/10 py-16">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold">Ready to go unBound?</h3>
            <p className="mt-3 text-white/70 max-w-2xl mx-auto">
              Start with a responsive 3D hero, crisp components, and a gradient glow that feels alive.
            </p>
            <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-2">
              <a href="#" className="rounded-xl bg-gradient-to-r from-violet-600 to-sky-500 px-5 py-3 font-semibold hover:opacity-90">Launch Sandbox</a>
              <a href="#docs" className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-semibold hover:bg-white/10">Documentation</a>
            </div>
            <p className="mt-10 text-xs text-white/50">© {new Date().getFullYear()} unBound.ai clone — built for demo purposes.</p>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
