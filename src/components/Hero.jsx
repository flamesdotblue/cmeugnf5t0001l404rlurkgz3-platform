import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 text-xs text-neutral-300">
              <Sparkles className="h-3.5 w-3.5 text-fuchsia-400" />
              New 2025 Lineup just dropped
            </div>
            <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
              Intelligent robots for work, play, and everything in between
            </h1>
            <p className="mt-4 text-neutral-300 max-w-2xl">
              Meet your next autonomous assistant. Precision engineered, safety certified, and ready to deploy in minutes.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#products" className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 hover:opacity-90 transition">
                Shop Robots
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-md border border-neutral-800 bg-neutral-900 px-5 py-3 text-sm font-medium hover:bg-neutral-800 transition">
                Explore Features
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-tr from-fuchsia-500/20 to-cyan-400/20 blur-xl" />
            <img
              src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1400&auto=format&fit=crop"
              alt="Futuristic service robot"
              className="relative z-10 w-full rounded-2xl border border-neutral-800 shadow-2xl"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
