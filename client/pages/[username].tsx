import { NextPageContext } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { ReactElement } from 'react'
import useSWR from 'swr'
import SvgFavorite from '../components/Icons/favorite-icon'
import SvgRss from '../components/Icons/rss-icon'
import Layout from '../components/Layout'
import Tooltip from '../components/Tooltip'
import { IArticle, IUser } from '../types'
import axios from '../utils/axios'
import { publicFetcher } from '../utils/fetcher'
import { NextPageWithLayout } from './_app'

type Props = {
  user: IUser
  initialActiveItemType?: string
}
type articlesProps = {
  articles: IArticle[]
}

const UserProfile: NextPageWithLayout<Props> = ({
  user,
  initialActiveItemType,
}) => {
  // const { articles, isLoading } = useArticles(user.username)
  const { data, error } = useSWR<articlesProps | null>(
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
                  {user.bio}
                </p>
                <div className='mt-[0.3rem] flex items-center flex-wrap'>
                  <Link
                    className='text-gray-primary hover:text-primary'
                    href='#'
                  >
                    <Tooltip label='RSS'>
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
          {!error && !data && null}
          {data?.articles?.length !== 0 && data ? (
            <div>
              <div className='grid grid-cols-2 gap-y-[2em] gap-x-[1.7em] laptop:grid-cols-3 laptop:gap-y-[2.2em] laptop:gap-x-[1.2em] desktop:gap-x-[1.8em]'>
                {data?.articles?.map((article: IArticle) => (
                  <article
                    key={article.articleId}
                    className='relative flex flex-col bg-white rounded-xl shadow-[0px_4px_8px_-2px_rgba(0,10,60,0.1)] overflow-hidden transition-shadow duration-[0.2s]'
                  >
                    <Link
                      href='#'
                      className='absolute top-3 left-3 text-[10px] font-semibold uppercase bg-blue-lighter text-white text-center py-[3px] px-[6px] leading-[1.3] rounded-[10px]'
                    >
                      {article.articleType}
                    </Link>
                    <Link href='#' className='flex flex-1 flex-col'>
                      <div className='flex justify-center text-[46px] py-[25px] leading-[1.5] bg-[#cfe5ff]'>
                        <span className='inline-flex'>
                          <span className='inline-flex h-[1em] w-[1em] bg-contain bg-[url("https://twemoji.maxcdn.com/v/latest/svg/1f391.svg")]'></span>
                        </span>
                      </div>
                      <div className='pt-[0.8em] flex-1'>
                        <h3 className='font-bold text-base px-[0.9rem] line-clamp-3 text-ellipsis leading-[1.5] max-h-[4.55em]'>
                          {article.title}
                        </h3>
                      </div>
                      <div className='text-[0.74rem] pt-[0.65rem] px-[0.9rem] pb-4 leading-[1.2]'>
                        <div className='flex items-center text-gray-primary'>
                          <time>3 hours ago</time>
                          <span className='inline-flex items-center ml-[6px]'>
                            <SvgFavorite className='mr-[3px] w-[13px] h-[13px]' />
                            3
                          </span>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          ) : !data || data?.articles.length == 0 ? (
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
          ) : null}
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
