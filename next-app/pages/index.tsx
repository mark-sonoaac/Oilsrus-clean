import Head from 'next/head'

import Header from '../src-nextjs/components/Header'
import Hero from '../src-nextjs/components/Hero'
import WhatWeOffer from '../src-nextjs/components/WhatWeOffer'
import WhyChoose from '../src-nextjs/components/WhyChoose'
import Testimonials from '../src-nextjs/components/Testimonials'
import MidCTA from '../src-nextjs/components/MidCTA'
import ProductsGrid from '../src-nextjs/components/ProductsGrid'
import MapSection from '../src-nextjs/components/MapSection'
import Contact from '../src-nextjs/components/Contact'
import Footer from '../src-nextjs/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Oil R Us — Premium Fragrance Oils</title>
        <meta name="description" content="Premium fragrance oils for candles, soaps and personal projects." />
      </Head>
      <Header />
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
