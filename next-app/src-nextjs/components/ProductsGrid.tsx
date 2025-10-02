const products = [
  { name: 'Argan Oil', img: '/images/Argan_oil_product_shot_b79b9e65.png' },
  { name: 'Avocado Oil', img: '/images/Avocado_oil_product_shot_bdd0e8ac.png' },
  { name: 'Coconut Oil', img: '/images/Coconut_oil_product_shot_b031f635.png' },
  { name: 'Essential Oils', img: '/images/Essential_oils_product_shot_d94a6290.png' },
  { name: 'Olive Oil', img: '/images/Olive_oil_product_shot_f21ab873.png' },
  { name: 'Sesame Oil', img: '/images/Sesame_oil_product_shot_6c0bc659.png' },
]

export default function ProductsGrid(){
  return (
    <section id="products" className="py-12">
      <div className="container">
        <h2 className="text-2xl font-semibold mb-6">Our Fragrance Oils</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.name} className="border rounded overflow-hidden bg-white">
              <img src={p.img} alt={p.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold">{p.name}</h3>
                <p className="text-sm text-gray-600 mt-2">High quality natural {p.name.toLowerCase()} for candles, soaps, and cosmetics.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
