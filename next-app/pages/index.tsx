import Head from 'next/head'

import Hero from '../src/components/Hero'
import WhatWeOffer from '../src/components/WhatWeOffer'
import WhyChoose from '../src/components/WhyChoose'
import Testimonials from '../src/components/Testimonials'
import MidCTA from '../src/components/MidCTA'
import ProductsGrid from '../src/components/ProductsGrid'
import MapSection from '../src/components/MapSection'
import Contact from '../src/components/Contact'
import Footer from '../src/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Oil R Us — Premium Fragrance Oils</title>
        <meta name="description" content="Premium fragrance oils for candles, soaps and personal projects." />
      </Head>
      <main>
        <Hero />
        <div className="container py-12">
          <WhatWeOffer />
          <ProductsGrid />
          <MapSection />
          <WhyChoose />
          <Testimonials />
        </div>
        <MidCTA />
        <div className="container py-12">
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  )
}
