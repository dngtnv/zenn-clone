import Head from 'next/head'
import { ReactElement } from 'react'
import Layout from '../components/Layout'
import NextLink from '../utils/NextLink'
import { NextPageWithLayout } from './_app'

const NotFound: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Not Found | Zenn</title>
      </Head>
      <div>
        <h1 className='text-primary text-2xl'>This page could not be found</h1>
        <NextLink href='/'>
          <a>Go back</a>
        </NextLink>
      </div>
    </>
  )
}

NotFound.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default NotFound
