import Head from 'next/head'
import { ReactElement, useContext } from 'react'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import { NextPageWithLayout } from './_app'
import SvgArrow from '../components/Icons/arrow-icon'
import Tooltip from '../components/Tooltip'
import ArticleList from '../components/Articles/ArticleList'
import LoginCta from '../components/Login/LoginCta'
import Link from 'next/link'
import AuthContext from '../context/AuthProvider'

const Home: NextPageWithLayout = () => {
  const { me } = useContext(AuthContext)

  return (
    <>
      <Head>
        <title>Zenn | Homepage</title>
        <meta name='keywords' content='zenn' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='description' content='Generated by create next app' />
        <link rel='shortcut icon' href='/zenn-favicon.png' />
      </Head>
      <main>
        <section className='bg-main-blue py-14'>
          <div className='mx-auto max-w-[960px] px-[14px] mobile:px-5 tablet:px-[25px] laptop:px-10'>
            <div className='flex items-center'>
              <h1 className='text-2xl leading-[1.3] font-bold text-primary mr-[6px]'>
                Tech
              </h1>
              <Tooltip
                width={140}
                tagName='button'
                label='Knowledge of technology'
              >
                <span className='flex justify-center w-[17px] h-[17px] leading-[17px] text-white text-[10px] rounded-[50%] bg-gray-lighter group-hover:bg-gray-primary'>
                  ?
                </span>
              </Tooltip>
            </div>
            <div className='mt-[1.1rem]'>
              <ArticleList />
            </div>
            <div className='mt-[2.2rem] text-center font-[1.02rem]'>
              <Link
                href='#'
                className='inline-block text-[0.956rem] tablet:text-[1.02rem] text-blue-darker hover:underline hover:underline-offset-[0.3em]'
              >
                More Trending
                <SvgArrow size={16.31} />
              </Link>
            </div>
          </div>
        </section>
        <section className='bg-main-gray pt-14 pb-16 px-0 mt-[2px]'>
          <div className='mx-auto max-w-[960px] px-[14px] mobile:px-5 tablet:px-[25px] laptop:px-10'>
            <div className='flex items-center'>
              <h1 className='text-2xl leading-[1.3] font-bold text-primary mr-[6px]'>
                Ideas
              </h1>
              <Tooltip
                width={140}
                tagName='button'
                label='Career, team, work theory, poem, etc.'
              >
                <span className='flex justify-center w-[17px] h-[17px] leading-[17px] text-white text-[10px] rounded-[50%] bg-gray-lighter group-hover:bg-gray-primary'>
                  ?
                </span>
              </Tooltip>
            </div>
            <div className='mt-[1.1rem]'>
              <ArticleList />
            </div>
            <div className='mt-[2.2rem] text-center font-[1.02rem]'>
              <Link
                href='#'
                className='inline-block text-[0.956rem] tablet:text-[1.02rem] text-blue-darker hover:underline hover:underline-offset-[0.3em]'
              >
                More articles
                <SvgArrow size={16.31} />
              </Link>
            </div>
          </div>
        </section>
        <section className='bg-white pt-14 pb-16 px-0'>
          <div className='mx-auto max-w-[960px] px-[14px] mobile:px-5 tablet:px-[25px] laptop:px-10'>
            <div className='flex items-center'>
              <h1 className='text-2xl leading-[1.3] font-bold text-primary'>
                Books
              </h1>
            </div>
            <div className='mt-[2.3rem]'>There is no books yet</div>
          </div>
        </section>
        <section className='bg-main-gray mt-4 py-[3.8rem] px-0'>
          <div className='mx-auto max-w-[960px] px-[14px] mobile:px-5 tablet:px-[25px] laptop:px-10'>
            <div className='flex items-center'>
              <h1 className='text-2xl leading-[1.3] font-bold text-primary'>
                Featured
              </h1>
            </div>
            <div className='mt-6 mb-12 mx-0'>
              <ArticleList />
            </div>
          </div>
        </section>
        {Object.keys(me).length === 0 ? <LoginCta /> : null}
      </main>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <Navbar />
      {page}
      {/* <NestedLayout>{page}</NestedLayout> */}
    </Layout>
  )
}

export default Home
