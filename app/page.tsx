export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center bg-[url('/hero.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative text-center z-10 px-6">
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500">
            BLACKFLAG TUNING
          </h1>
          <p className="mt-6 text-2xl md:text-4xl font-light text-zinc-300">
            FULL SEND IT
          </p>
          <button className="mt-12 px-12 py-6 bg-red-600 hover:bg-red-700 text-2xl font-bold rounded-full transition">
            ENTER
          </button>
        </div>
      </section>

      {/* QUICK LINKS GRID */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          <a href="#swag"    className="group p-8 bg-zinc-900 rounded-2xl hover:bg-red-900/20 border border-zinc-800 transition">
            <h3 className="text-2xl font-bold">SWAG</h3>
            <p className="text-zinc-400">Stickers & decals</p>
          </a>
          <a href="#shirts"  className="group p-8 bg-zinc-900 rounded-2xl hover:bg-red-900/20 border border-zinc-800 transition">
            <h3 className="text-2xl font-bold">SHIRTS</h3>
            <p className="text-zinc-400">Limited drops</p>
          </a>
          <a href="#unlocks" className="group p-8 bg-zinc-900 rounded-2xl hover:bg-red-900/20 border border-zinc-800 transition">
            <h3 className="text-2xl font-bold">UNLOCKS</h3>
            <p className="text-zinc-400">ECU & TCU files</p>
          </a>
          <a href="#apps"    className="group p-8 bg-zinc-900 rounded-2xl hover:bg-red-900/20 border border-zinc-800 transition">
            <h3 className="text-2xl font-bold">APPS</h3>
            <p className="text-zinc-400">Dash & logging</p>
          </a>
        </div>

        {/* COIN PRESALE BANNER */}
        <div className="mt-24 max-w-5xl mx-auto text-center p-12 bg-gradient-to-r from-red-900/40 to-yellow-900/40 rounded-3xl border border-red-800">
          <h2 className="text-5xl md:text-7xl font-black mb-4">
            $FLAG COIN PRESALE LIVE
          </h2>
          <p className="text-2xl text-zinc-300 mb-8">
            1 BNB = 1,000,000 $FLAG • Hard cap 100 BNB
          </p>
          <button className="px-16 py-6 bg-yellow-600 hover:bg-yellow-500 text-black text-2xl font-bold rounded-full transition">
            BUY PRESALE NOW
          </button>
        </div>
      </section>
    </main>
  );
}
