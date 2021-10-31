import Head from 'next/head'
import Header from '../components/header/header'
import Navigation from '../components/navigation/navigation'
import AboutHotel from '../components/aboutHotel/aboutHotel'
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
    </>
  )
}
