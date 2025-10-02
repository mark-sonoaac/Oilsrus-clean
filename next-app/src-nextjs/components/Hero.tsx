import React from 'react'

export default function Hero(): JSX.Element {
  return (
    <section
      className="relative bg-center text-white bg-no-repeat"
      style={{
        backgroundImage: `url('/images/hero.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative container mx-auto flex items-center justify-center text-center px-4"
           style={{ minHeight: '70vh' }}>
        <div className="py-24">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Oils R US</h1>
          <p className="text-lg md:text-xl text-gray-100 mb-6">My premium source for quality fragrance oils and curated blends for candles, soaps, and personal projects.</p>
          <div className="flex justify-center">
            <a className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded" href="#products">Shop Oils</a>
          </div>
        </div>
      </div>
    </section>
  )
}
