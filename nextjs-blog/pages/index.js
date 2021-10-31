import Head from 'next/head'
import Header from '../components/header/header'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>GBMS</title>
      </Head>
      <Header />
    </>
  )
}
