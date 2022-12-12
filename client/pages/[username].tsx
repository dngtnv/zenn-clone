import { NextPageContext } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { ReactElement, useContext } from 'react'
import useSWR from 'swr'
import SvgRss from '../components/Icons/rss-icon'
import Layout from '../components/Layout'
import Tooltip from '../components/Tooltip'
import AuthContext from '../context/AuthProvider'
import { IArticle, IUser } from '../types'
import axios from '../utils/axios'
import { publicFetcher } from '../utils/fetcher'
import { NextPageWithLayout } from './_app'
import ArticleList from '../components/User/Profile/Articles/ArticleList'

type Props = {
  user: IUser
  initialActiveItemType?: string
}
type profileProps = {
  articles: IArticle[]
  scraps: any[]
  comments: any[]
}

const UserProfile: NextPageWithLayout<Props> = ({
  user,
  initialActiveItemType,
}) => {
  const { me } = useContext(AuthContext)
  // const { articles, isLoading } = useArticles(user.username)
  const { data, error } = useSWR<profileProps | null>(
    initialActiveItemType === 'articles'
      ? `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/articles?username=${user.username}`
      : initialActiveItemType === 'scraps'
      ? `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/scraps?username=${user.username}`
      : `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/users/${user.username}/comments`,
    publicFetcher,
    {
      revalidateOnFocus: false,
    }
  )

  return (
    <>
      <Head>
        <title>{`${user.username}'s ${initialActiveItemType} list | Zenn`}</title>
      </Head>
      <header>
        <div className='max-w-[960px] mx-auto py-0 px-[14px] mobile:px-5 tablet:px-[25px] laptop:px-10'>
          <div className='tablet:pt-12 py-8 px-0 tablet:pb-[3.2rem] block tablet:flex justify-between items-start'>
            <div className='w-[85px] tablet:w-[120px]'>
              <Image
                className='rounded-[50%] block flex-shrink-0 text-[11px]'
                src={user.avatarUrl || '/ingodwhotrust.jpg'}
                width={120}
                height={120}
                alt={user.username}
                priority={true}
              />
            </div>
            <div className='mt-[0.8rem] tablet:mt-0 pl-0 tablet:pl-7 flex-1 text-[0.95rem] leading-[1.6]'>
              <div className='flex items-center justify-center'>
                <h1 className='text-[1.4rem] font-bold mt-[0.3rem] leading-[1.3] flex-1 break-all'>
                  {user.username}
                </h1>
                <div className='min-w-[100px] ml-[10px] text-right'>
                  {Object.keys(me).length === 0 ||
                  me.username == user.username ? (
                    <Link
                      className='text-[0.85rem] py-[0.45em] px-[0.75rem] text-primary border border-gray-bd-lighter rounded-[0.45em] shadow-[0_2px_3px_-2px_#21253840] hover:bg-[#f5fbff] hover:border hover:border-[#d6e3ed] focus:border focus:border-blue-lighter focus:outline-0 focus:shadow-[0_0_0_2.5px_#bfdcff]'
                      href='/settings/profile'
                    >
                      Edit profile
                    </Link>
                  ) : (
                    <button className='inline-flex items-center justify-center whitespace-nowrap w-[100px] h-9 text-[14.5px] rounded-[99rem] text-secondary border border-secondary'>
                      Follow
                    </button>
                  )}
                </div>
              </div>
              <div className='mt-[0.7rem]'>
                <p className='text-[0.95rem] text-primary leading-[1.6] flex-1'>
                  {user.bio}
                </p>
                <div className='mt-[0.3rem] flex items-center flex-wrap'>
                  <Link
                    className='text-gray-primary hover:text-primary'
                    href='#'
                  >
                    <Tooltip tagName='span' label='RSS'>
                      <SvgRss />
                    </Tooltip>
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
            href={`/${user.username}`}
            scroll={false}
            replace
            className={`${
              initialActiveItemType == 'articles'
                ? 'text-primary border-b-[2.5px] border-b-primary pointer-events-none'
                : 'text-secondary border-b-[2.5px] border-b-transparent'
            } 'text-base font-semibold mr-6 py-[0.3rem]`}
          >
            Articles
          </Link>
          <Link
            href={`/${user.username}?tab=scraps`}
            scroll={false}
            replace
            className={`${
              initialActiveItemType == 'scraps'
                ? 'text-primary border-b-[2.5px] border-b-primary pointer-events-none'
                : 'text-secondary border-b-[2.5px] border-b-transparent'
            } 'text-base font-semibold mr-6 py-[0.3rem]`}
          >
            Scraps
          </Link>
          <Link
            href={`/${user.username}?tab=comments`}
            replace
            scroll={false}
            className={`${
              initialActiveItemType == 'comments'
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
          {!error && !data ? null : data?.articles &&
            data?.articles?.length !== 0 ? (
            <div className='animate-fadeinup'>
              <ArticleList articles={data?.articles} />
            </div>
          ) : (
            <div className='text-center mt-4'>
              <p className='text-[1.4rem] text-gray-primary leading-[1.6] font-bold'>
                {`No ${initialActiveItemType} yet`}
              </p>
              <div className='mt-6 flex justify-center'>
                <Image
                  src='/user-content.png'
                  width={300}
                  height={243}
                  priority={true}
                  alt=''
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

UserProfile.getLayout = function getLayout(page: ReactElement, data) {
  return <Layout data={data}>{page}</Layout>
}

export const getServerSideProps = async ({ query }: NextPageContext) => {
  try {
    const response: any = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/users/${query.username}`
    )
    let tabType: string | string[] = 'articles'
    if (query.tab) {
      tabType = query.tab
    }
    return {
      props: {
        user: response.data.user,
        initialActiveItemType: tabType || null,
      },
    }
  } catch (err: any) {
    return {
      notFound: true,
    }
  }
}

export default UserProfile
