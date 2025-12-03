export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-4">
      {/* Hero Section */}
      <div className="text-center py-8">
        <div className="text-6xl mb-4">💀</div>
        <h1 className="text-5xl font-bold text-redflag mb-2">BLACK FLAG TUNING</h1>
        <p className="text-xl mb-8">Unlock Keys & Swag — One Tap To Freedom</p>
      </div>

      {/* Unlocks Section */}
      <section id="unlocks" className="mb-12">
        <h2 className="text-3xl text-center text-redflag mb-6">GOD MODE UNLOCKS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          <button className="bg-redflag text-black p-4 rounded text-left hover:bg-white transition">GM Unlock - $79.99</button>
          <button className="bg-redflag text-black p-4 rounded text-left hover:bg-white transition">Ford Unlock - $99.99</button>
          <button className="bg-redflag text-black p-4 rounded text-left hover:bg-white transition">FCA Unlock - $89.99</button>
          <button className="bg-redflag text-black p-4 rounded text-left hover:bg-white transition">Toyota Unlock - $129.99</button>
          <button className="bg-yellow-500 text-black p-4 rounded text-left hover:bg-white transition col-span-full">5-Key Bundle - $349</button>
          <button className="bg-purple-600 text-white p-4 rounded text-left hover:bg-white transition col-span-full">Shop License - $999</button>
        </div>
      </section>

      {/* Swag Section */}
      <section id="swag" className="mb-12">
        <h2 className="text-3xl text-center text-redflag mb-6">OFFICIAL BLACK FLAG SWAG</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          <div className="bg-gray-800 p-4 rounded text-center">
            <div className="text-4xl mb-2">👕</div>
            <h3>Patriot Pirate Tee</h3>
            <p>$35</p>
            <button className="bg-redflag text-black px-4 py-2 rounded mt-2 w-full">Add to Cart</button>
          </div>
          <div className="bg-gray-800 p-4 rounded text-center">
            <div className="text-4xl mb-2">🧥</div>
            <h3>Black Flag Hoodie</h3>
            <p>$65</p>
            <button className="bg-redflag text-black px-4 py-2 rounded mt-2 w-full">Add to Cart</button>
          </div>
          <div className="bg-gray-800 p-4 rounded text-center">
            <div className="text-4xl mb-2">🧢</div>
            <h3>Betsy Ross Skull Hat</h3>
            <p>$30</p>
            <button className="bg-redflag text-black px-4 py-2 rounded mt-2 w-full">Add to Cart</button>
          </div>
          <div className="bg-gray-800 p-4 rounded text-center">
            <div className="text-4xl mb-2">📍</div>
            <h3>Custom Patch</h3>
            <p>$15</p>
            <button className="bg-redflag text-black px-4 py-2 rounded mt-2 w-full">Add to Cart</button>
          </div>
        </div>
        <div className="text-center mt-6">
          <a href="/shop" className="bg-redflag text-black px-6 py-3 rounded text-lg">Full Store →</a>
        </div>
      </section>

      {/* Coin Presale Section */}
      <section id="coin" className="mb-12 text-center">
        <h2 className="text-3xl text-redflag mb-6">SECOND SHOT COIN PRESALE</h2>
        <p className="mb-4">Join the waitlist for early access.</p>
        <form className="max-w-md mx-auto">
          <input type="email" placeholder="Your Email" className="w-full p-2 bg-gray-800 rounded mb-2 text-black" />
          <button type="submit" className="bg-redflag text-black px-6 py-2 rounded w-full">Join Waitlist</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 border-t border-gray-800">
        <p>&copy; 2025 Black Flag Tuning. All rights reserved.</p>
        <div className="mt-2">
          <a href="/privacy" className="text-redflag mx-2">Privacy</a> |
          <a href="/terms" className="text-redflag mx-2">Terms</a> |
          <a href="/contact" className="text-redflag mx-2">Contact</a>
        </div>
      </footer>
    </main>
  );
}
