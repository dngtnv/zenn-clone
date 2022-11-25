import { NextPageContext } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { ReactElement, useContext } from 'react'
import SvgRss from '../components/Icons/rss-icon'
import Layout from '../components/Layout'
import AuthContext from '../context/AuthProvider'
import { NextPageWithLayout } from './_app'

interface Props {
  username: string
  tab?: string
}

const UserProfile: NextPageWithLayout<Props> = ({ username, tab }) => {
  const { me } = useContext(AuthContext)
  return (
    <>
      <Head>
        <title>{`${username} | Zenn`}</title>
      </Head>
      <header>
        <div className='max-w-[960px] mx-auto py-0 px-[14px] mobile:px-5 tablet:px-[25px] laptop:px-10'>
          <div className='tablet:pt-12 py-8 px-0 tablet:pb-[3.2rem] block tablet:flex justify-between items-start'>
            <div className='w-[85px] tablet:w-[120px]'>
              <Image
                className='rounded-[50%] block flex-shrink-0 text-[11px]'
                src='/ingodwhotrust.jpg'
                width={120}
                height={120}
                alt={username}
              />
            </div>
            <div className='mt-[0.8rem] tablet:mt-0 pl-0 tablet:pl-7 flex-1 text-[0.95rem] leading-[1.6]'>
              <div className='flex items-center justify-center'>
                <h1 className='text-[1.4rem] font-bold mt-[0.3rem] leading-[1.3] flex-1 break-all'>
                  {me.username}
                </h1>
                <div className='min-w-[100px] ml-[10px] text-right'>
                  <Link
                    className='text-[0.85rem] py-[0.45em] px-[0.75rem] text-primary border border-gray-bd-lighter rounded-[0.45em] shadow-[0_2px_3px_-2px_#21253840] hover:bg-[#f5fbff] hover:border hover:border-[#d6e3ed] focus:border focus:border-blue-lighter focus:outline-0 focus:shadow-[0_0_0_2.5px_#bfdcff]'
                    href='/settings/profile'
                  >
                    Edit profile
                  </Link>
                </div>
              </div>
              <div className='mt-[0.7rem]'>
                <p className='text-[0.95rem] text-primary leading-[1.6] flex-1'>
                  {me.bio}
                </p>
                <div className='mt-[0.3rem] flex items-center flex-wrap'>
                  <Link
                    className='text-gray-primary hover:text-primary'
                    href='#'
                  >
                    <SvgRss />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className='mx-auto py-0 px-[14px] mobile:px-5 tablet:px-[25px] laptop:px-10  max-w-[960px]'>
        <div className='flex justify-start items-center'>
          <Link
            href={`/${me.username}`}
            className={`${
              !tab
                ? 'text-primary border-b-[2.5px] border-b-primary pointer-events-none'
                : 'text-secondary border-b-[2.5px] border-b-transparent'
            } 'text-base font-semibold mr-6 py-[0.3rem]`}
          >
            Articles
          </Link>
          <Link
            href={`/${me.username}?tab=scraps`}
            className={`${
              tab == 'scraps'
                ? 'text-primary border-b-[2.5px] border-b-primary pointer-events-none'
                : 'text-secondary border-b-[2.5px] border-b-transparent'
            } 'text-base font-semibold mr-6 py-[0.3rem]`}
          >
            Scraps
          </Link>
          <Link
            href={`/${me.username}?tab=comments`}
            className={`${
              tab == 'comments'
                ? 'text-primary border-b-[2.5px] border-b-primary pointer-events-none'
                : 'text-secondary border-b-[2.5px] border-b-transparent'
            } 'text-base font-semibold mr-6 py-[0.3rem]`}
          >
            Comments
          </Link>
        </div>
      </div>
      <div className='px-0 pt-16 pb-[4.5rem] min-h-screen bg-main-gray'>
        <div className='mx-auto max-w-[960px] py-0 px-10'>
          <div className='text-center mt-4'>
            <p className='text-[1.4rem] text-gray-primary leading-[1.6] font-bold'>
              No Articles yet
            </p>
            <div className='mt-6 flex justify-center'>
              <Image src='/user-content.png' width={300} height={243} alt='' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

UserProfile.getLayout = function getLayout(page: ReactElement, data) {
  return <Layout data={data}>{page}</Layout>
}

export const getServerSideProps = async ({ query }: NextPageContext) => {
  return { props: { username: query.username, tab: query.tab || null } }
}

export default UserProfile
