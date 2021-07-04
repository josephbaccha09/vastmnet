import Head from 'next/head'
import { useRouter } from 'next/router'

import Navbar from '../components/Navbar'
import FileListing from '../components/FileListing'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'

import { getTitle } from '../utils/tools'
export default function Folders() {
  const { query } = useRouter()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>{getTitle()}</title>
      </Head>

      <main className="flex flex-col w-full flex-1 bg-gray-50">
        <Navbar />
        <div className="mx-auto w-full max-w-4xl p-4">
          <Breadcrumb query={query} />
          <FileListing query={query} />
        </div>
      </main>

      <Footer />
    </div>
  )
}
