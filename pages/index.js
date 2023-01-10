import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Fargo Software</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Fargo Software" />
        <p className="details">
          For Software needs (Automations, Integrations, Software Applications, Windows Apps, Services, and more...), Call (818) 370-4234 or Email: FargoSoftware@yahoo.com 
        </p>
      </main>
  
      <body>
        <img src="Software.jpg" width="600" height="400"></img>
      </body>

      <Footer />
    </div>
  )
}
