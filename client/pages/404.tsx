import Head from 'next/head'
import Link from 'next/link'
import { ReactElement } from 'react'
import Layout from '../components/Layout'
import { NextPageWithLayout } from './_app'

const NotFound: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Not Found | Zenn</title>
      </Head>
      <div>
        <h1 className="text-2xl text-primary">This page could not be found</h1>
        <Link href="/">Go back</Link>
      </div>
    </>
  )
}

NotFound.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default NotFound
