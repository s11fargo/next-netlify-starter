import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body>
        <Header title="Fargo Software" />
        <p className="details">
          Call (818) 370-xxxx 
        </p>
  <img src="software.jpg" alt="software image" width="300" height="200">
      </body>


      <Footer />
    </div>
  )
}
