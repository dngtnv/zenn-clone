import { useQuery } from '@tanstack/react-query'
import { NextPageContext } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { ReactElement, useContext } from 'react'
import SvgGithub from '../components/Icons/github-icon'
import SvgLink from '../components/Icons/link-icon'
import SvgRss from '../components/Icons/rss-icon'
import SvgTwitter from '../components/Icons/twitter-icon'
import Layout from '../components/Layout'
import Tooltip from '../components/Tooltip'
import ArticleList from '../components/User/Profile/Articles/ArticleList'
import AuthContext from '../context/AuthProvider'
import { IArticle, IUser } from '../types'
import { publicFetcher } from '../utils/fetcher'
import { NextPageWithLayout } from './_app'

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
  const { auth } = useContext(AuthContext)
  const notMe = auth.username !== user.username

  const baseUrl = `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/`
  const endpoint =
    initialActiveItemType === 'articles'
      ? `${baseUrl}articles?username=${user.username}`
      : initialActiveItemType === 'scraps'
      ? `${baseUrl}scraps?username=${user.username}`
      : `${baseUrl}users/${user.username}/comments`

  const { data, isLoading } = useQuery<profileProps | null>(
    ['profile_items', endpoint],
    () => publicFetcher(endpoint),
    {
      refetchOnWindowFocus: false,
      staleTime: Infinity, // temporary
    }
  )

  return (
    <>
      <Head>
        <title>{`${user.username}'s ${initialActiveItemType} list | Zenn`}</title>
      </Head>
      <header>
        <div className="mx-auto max-w-[960px] px-[14px] py-0 mobile:px-5 tablet:px-[25px] laptop:px-10">
          <div className="block items-start justify-between px-0 py-8 tablet:flex tablet:pb-[3.2rem] tablet:pt-12">
            <div className="w-[85px] tablet:w-[120px]">
              <Image
                className="block flex-shrink-0 rounded-[50%] text-[11px]"
                src={user.avatarUrl || '/ingodwhotrust.jpg'}
                width={120}
                height={120}
                alt={user.username}
                priority={true}
              />
            </div>
            <div className="mt-[0.8rem] flex-1 pl-0 text-[0.95rem] leading-[1.6] tablet:mt-0 tablet:pl-7">
              <div className="flex items-center justify-center">
                <h1 className="mt-[0.3rem] flex-1 break-all text-[1.4rem] font-bold leading-[1.3]">
                  {user.name}
                </h1>
                <div className="ml-[10px] min-w-[100px] text-right">
                  {Object.keys(auth).length !== 0 &&
                  auth.username == user.username ? (
                    <Link
                      className="rounded-[0.45em] border border-gray-bd-lighter px-[0.75rem] py-[0.45em] text-[0.85rem] text-primary shadow-[0_2px_3px_-2px_#21253840] hover:border hover:border-[#d6e3ed] hover:bg-[#f5fbff] focus:border focus:border-blue-lighter focus:shadow-[0_0_0_2.5px_#bfdcff] focus:outline-0"
                      href="/settings/profile"
                    >
                      Edit profile
                    </Link>
                  ) : null}
                  {Object.keys(auth).length === 0 || notMe ? (
                    <button className="inline-flex h-9 w-[100px] items-center justify-center whitespace-nowrap rounded-[99rem] border border-secondary text-[14.5px] text-secondary">
                      Follow
                    </button>
                  ) : null}
                </div>
              </div>
              <div className="mt-[0.7rem]">
                <p className="flex-1 text-[0.95rem] leading-[1.6] text-primary">
                  {user.bio}
                </p>
                <div className="mt-[0.3rem] flex flex-wrap items-center">
                  {user.githubUsername ? (
                    <Link
                      className="mr-[0.7rem] text-gray-primary hover:text-primary"
                      href={`https://github.com/${user.githubUsername}`}
                    >
                      <Tooltip TagName="span" label={`@${user.githubUsername}`}>
                        <SvgGithub />
                      </Tooltip>
                    </Link>
                  ) : null}
                  {user.twitterUsername ? (
                    <Link
                      className="mr-[0.7rem] text-gray-primary hover:text-primary"
                      href={`https://twitter.com/${user.twitterUsername}`}
                    >
                      <Tooltip
                        TagName="span"
                        label={`@${user.twitterUsername}`}
                      >
                        <SvgTwitter />
                      </Tooltip>
                    </Link>
                  ) : null}
                  {user.websiteUrl ? (
                    <Link
                      className="mr-[0.7rem] text-gray-primary hover:text-primary"
                      href={user.websiteUrl}
                    >
                      <Tooltip TagName="span" label={user.websiteUrl}>
                        <SvgLink />
                      </Tooltip>
                    </Link>
                  ) : null}
                  <Link
                    className="mr-[0.7rem] text-gray-primary hover:text-primary"
                    href="#"
                  >
                    <Tooltip TagName="span" label="RSS">
                      <SvgRss />
                    </Tooltip>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="mx-auto max-w-[960px] px-[14px] py-0 mobile:px-5 tablet:px-[25px]  laptop:px-10">
        <div className="flex items-center justify-start">
          <Link
            href={`/${user.username}`}
            scroll={false}
            replace
            className={`${
              initialActiveItemType == 'articles'
                ? 'pointer-events-none border-b-[2.5px] border-b-primary text-primary'
                : 'border-b-[2.5px] border-b-transparent text-secondary hover:text-primary'
            } 'text-base mr-6 py-[0.3rem] font-semibold`}
          >
            Articles
          </Link>
          <Link
            href={`/${user.username}?tab=scraps`}
            scroll={false}
            replace
            className={`${
              initialActiveItemType == 'scraps'
                ? 'pointer-events-none border-b-[2.5px] border-b-primary text-primary'
                : 'border-b-[2.5px] border-b-transparent text-secondary hover:text-primary'
            } 'text-base mr-6 py-[0.3rem] font-semibold`}
          >
            Scraps
          </Link>
          <Link
            href={`/${user.username}?tab=comments`}
            replace
            scroll={false}
            className={`${
              initialActiveItemType == 'comments'
                ? 'pointer-events-none border-b-[2.5px] border-b-primary text-primary'
                : 'border-b-[2.5px] border-b-transparent text-secondary hover:text-primary'
            } 'text-base mr-6 py-[0.3rem] font-semibold`}
          >
            Comments
          </Link>
        </div>
      </div>
      <div className="min-h-screen bg-main-gray px-0 pb-[4.5rem] pt-16">
        <div className="mx-auto max-w-[960px] px-10 py-0">
          {isLoading ? null : data?.articles && data?.articles?.length !== 0 ? (
            <div className="animate-fadeinup">
              <ArticleList articles={data?.articles} />
            </div>
          ) : (
            <div className="mt-4 text-center">
              <p className="text-[1.4rem] font-bold leading-[1.6] text-gray-primary">
                {`No ${initialActiveItemType} yet`}
              </p>
              <div className="mt-6 flex justify-center">
                <Image
                  src="/user-content.png"
                  width={300}
                  height={243}
                  priority={true}
                  alt=""
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
    const data: any = await publicFetcher(
      `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/users/${query.username}`
    )
    let tabType: string | string[] = 'articles'
    if (query.tab) {
      tabType = query.tab
    }
    return {
      props: {
        user: data.user,
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
