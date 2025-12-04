export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-zinc-900 to-black">
        <div className="text-center px-6">
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-white to-blue-600">
            BLACKFLAG TUNING
          </h1>
          <p className="mt-8 text-4xl md:text-6xl font-light text-zinc-400">
            FULL SEND IT
          </p>
        </div>
      </section>

      {/* UNLOCKS & APPS GRID */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          <a href="https://linktr.ee/myk9biteshard" target="_blank" rel="noopener" className="p-10 bg-zinc-900 rounded-3xl hover:bg-red-900/30 border border-zinc-800 transition text-center group">
            <h3 className="text-3xl font-bold">UNLOCKS</h3>
            <p className="text-zinc-400 mt-2">GM • Ford • FCA • Toyota</p>
            <p className="text-sm text-red-400 group-hover:text-red-300">$199 ea</p>
          </a>
          <a href="https://linktr.ee/myk9biteshard" target="_blank" rel="noopener" className="p-10 bg-zinc-900 rounded-3xl hover:bg-red-900/30 border border-zinc-800 transition text-center group">
            <h3 className="text-3xl font-bold">5-KEY BUNDLE</h3>
            <p className="text-zinc-400 mt-2">All Unlocks</p>
            <p className="text-sm text-red-400 group-hover:text-red-300">$499</p>
          </a>
          <a href="https://linktr.ee/myk9biteshard" target="_blank" rel="noopener" className="p-10 bg-zinc-900 rounded-3xl hover:bg-red-900/30 border border-zinc-800 transition text-center group">
            <h3 className="text-3xl font-bold">APPS</h3>
            <p className="text-zinc-400 mt-2">Dash • Logging • Send It</p>
            <p className="text-sm text-red-400 group-hover:text-red-300">$199</p>
          </a>
          <a href="https://linktr.ee/myk9biteshard" target="_blank" rel="noopener" className="p-10 bg-zinc-900 rounded-3xl hover:bg-red-900/30 border border-zinc-800 transition text-center group">
            <h3 className="text-3xl font-bold">SHOP LICENSE</h3>
            <p className="text-zinc-400 mt-2">Full Tuning Suite</p>
            <p className="text-sm text-red-400 group-hover:text-red-300">$999</p>
          </a>
        </div>

        {/* SWAG GRID */}
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <a href="https://linktr.ee/myk9biteshard" target="_blank" rel="noopener" className="p-10 bg-zinc-900 rounded-3xl hover:bg-red-900/30 border border-zinc-800 transition text-center group">
            <h3 className="text-2xl font-bold">PATRIOT PIRATE TEE</h3>
            <p className="text-zinc-400 mt-2">Limited drop</p>
            <p className="text-sm text-red-400 group-hover:text-red-300">$35</p>
          </a>
          <a href="https://linktr.ee/myk9biteshard" target="_blank" rel="noopener" className="p-10 bg-zinc-900 rounded-3xl hover:bg-red-900/30 border border-zinc-800 transition text-center group">
            <h3 className="text-2xl font-bold">BLACK FLAG HOODIE</h3>
            <p className="text-zinc-400 mt-2">Heavyweight</p>
            <p className="text-sm text-red-400 group-hover:text-red-300">$65</p>
          </a>
          <a href="https://linktr.ee/myk9biteshard" target="_blank" rel="noopener" className="p-10 bg-zinc-900 rounded-3xl hover:bg-red-900/30 border border-zinc-800 transition text-center group">
            <h3 className="text-2xl font-bold">BETSY ROSS SKULL HAT</h3>
            <p className="text-zinc-400 mt-2">Embroidered</p>
            <p className="text-sm text-red-400 group-hover:text-red-300">$28</p>
          </a>
          <a href="https://linktr.ee/myk9biteshard" target="_blank" rel="noopener" className="p-10 bg-zinc-900 rounded-3xl hover:bg-red-900/30 border border-zinc-800 transition text-center group">
            <h3 className="text-2xl font-bold">CUSTOM PATCH</h3>
            <p className="text-zinc-400 mt-2">Decals & stickers</p>
            <p className="text-sm text-red-400 group-hover:text-red-300">$12</p>
          </a>
        </div>

        {/* TWO COINS - BOTH CRO */}
        <div className="mt-32 grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* $SECOND */}
          <div className="text-center p-12 bg-gradient-to-b from-gray-900 to-black rounded-3xl border border-gray-700">
            <h2 className="text-5xl md:text-7xl font-black mb-4">$SECOND</h2>
            <p className="text-2xl text-red-400 mb-6">The Second Shot Heard Round the World</p>
            <p className="text-4xl mb-8">1775-2025</p>
            <p className="text-xl text-zinc-300 mb-6">CRO CHAIN PRESALE</p>
            <a href="https://linktr.ee/myk9biteshard" target="_blank" rel="noopener"
               className="inline-block px-16 py-6 bg-red-600 hover:bg-red-500 text-2xl font-bold rounded-full transition">
              BUY $SECOND NOW
            </a>
          </div>

          {/* $SENDIT */}
          <div className="text-center p-12 bg-gradient-to-b from-purple-900/40 to-black rounded-3xl border border-purple-700">
            <h2 className="text-5xl md:text-7xl font-black mb-4">$SENDIT</h2>
            <p className="text-2xl text-yellow-400 mb-6">FULL SEND MEME COIN</p>
            <p className="text-xl text-zinc-300 mb-6">CRO CHAIN PRESALE</p>
            <p className="text-xl text-zinc-300 mb-4">1 CRO = 1M $SENDIT</p>
            <a href="https://linktr.ee/myk9biteshard" target="_blank" rel="noopener"
               className="inline-block px-16 py-6 bg-yellow-500 hover:bg-yellow-400 text-black text-2xl font-bold rounded-full transition">
              BUY $SENDIT NOW
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
