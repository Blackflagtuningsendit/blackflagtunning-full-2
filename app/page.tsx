export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-zinc-900 to-black">
        <div className="text-center z-10">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter">
            BLACKFLAG TUNING
          </h1>
          <p className="mt-6 text-2xl md:text-3xl font-light text-zinc-400">
            Full Send It
          </p>
          <div className="mt-12 flex gap-6 justify-center">
            <a href="#services" className="btn-primary">Services</a>
            <a href="#contact" className="btn-secondary">Contact</a>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <a href="#" className="block p-8 bg-zinc-900 rounded-2xl hover:bg-zinc-800 transition">
            <h3 className="text-2xl font-bold">Dyno Tuning</h3>
            <p className="mt-4 text-zinc-400">Custom ECU & TCU tunes</p>
          </a>
          <a href="#" className="block p-8 bg-zinc-900 rounded-2xl hover:bg-zinc-800 transition">
            <h3 className="text-2xl font-bold">Parts & Installs</h3>
            <p className="mt-4 text-zinc-400">Intakes, exhausts, suspension</p>
          </a>
          <a href="#" className="block p-8 bg-zinc-900 rounded-2xl hover:bg-zinc-800 transition">
            <h3 className="text-2xl font-bold">Track Support</h3>
            <p className="mt-4 text-zinc-400">Data logging & corner weighting</p>
          </a>
        </div>
      </section>
    </main>
  );
}
