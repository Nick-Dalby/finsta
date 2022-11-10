import Head from 'next/head'
import Feed from '../components/Feed'
import Header from '../components/Header'
import Modal from '../components/Modal'

export default function Home() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Finsta</title>
        <meta name="Finsta" content="Fotos of Friends..." />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📷</text></svg>"
        ></link>
      </Head>
      {/* header */}
      <Header />

      {/* feed */}
      <Feed />

      {/* modal */}
      <Modal />
    </div>
  )
}
