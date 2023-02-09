import Head from 'next/head'
import React, { ReactElement } from 'react'
import Layout from '../components/Layout'
import { NextPageWithLayout } from './_app'

const Search: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Search | Zenn</title>
      </Head>
      <div>
        <p>Search page</p>
      </div>
    </>
  )
}
Search.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Search
