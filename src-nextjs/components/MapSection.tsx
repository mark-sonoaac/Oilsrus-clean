export default function MapSection(){
  const openMapsUrl = 'https://www.google.com/maps/search/?api=1&query=1123+Clinton+Ave,+Irvington,+NJ+07111'

  return (
    <section id="map" className="py-12">
      <div className="container">
        <h2 className="text-2xl font-semibold mb-4">Visit Our Store</h2>
        <div className="flex items-center">
          <a
            className="inline-flex items-center gap-2 px-4 py-2 rounded bg-amber-500 text-black font-semibold hover:bg-amber-600"
            href={openMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open in Google Maps
          </a>
        </div>
      </div>
    </section>
  )
}
