export default function WhatWeOffer(){
  return (
    <section className="py-12">
      <div className="container grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h3 className="text-2xl font-semibold mb-3">Oil Products</h3>
          <p className="text-gray-600 mb-4">High performance motor oils for all vehicle types. Full synthetic, semi-synthetic, and mineral oils sourced from trusted suppliers.</p>
          <a href="#products" className="inline-block px-4 py-2 bg-amber-500 text-black rounded">Browse Oils</a>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-3">Custom Blends</h3>
          <p className="text-gray-600 mb-4">We craft fragrance blends for candles, soaps, and aromatherapy. Small-batch, curated scents with consistent quality.</p>
          <a href="#contact" className="inline-block px-4 py-2 border rounded">Request a Sample</a>
        </div>
      </div>
    </section>
  )
}
