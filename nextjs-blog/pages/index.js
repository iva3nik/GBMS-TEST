import Head from 'next/head'
import Header from '../components/header/header'
import Navigation from '../components/navigation/navigation'
import AboutHotel from '../components/aboutHotel/aboutHotel'
import Photos from '../components/photos/photos'
import Reviews from '../components/reviews/reviews'
import Information from '../components/information/information'
import Place from '../components/place/place'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <>
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
    </>
  )
}
