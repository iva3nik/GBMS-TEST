import Layout from '../components/layout/layout'
import Head from 'next/head'
import Header from '../components/header/header'
import Navigation from '../components/navigation/navigation'
import AboutHotel from '../components/aboutHotel/aboutHotel'
import Photos from '../components/photos/photos'
import Reviews from '../components/reviews/reviews'
import Information from '../components/information/information'
import Place from '../components/place/place'
import Addition from '../components/addition/addition'
import Footer from '../components/footer/footer'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>GBMS</title>
      </Head>
      <Header />
      <Navigation />
      <AboutHotel />
      <Photos />
      <Reviews />
      <Information />
      <Place />
      <Addition />
      <Footer />
    </Layout>
  )
}
