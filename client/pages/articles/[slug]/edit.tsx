import { Switch } from '@headlessui/react'
import { useQuery } from '@tanstack/react-query'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import SvgDirect from '../../../components/Icons/direct-icon'
import SvgPublishSettings from '../../../components/Icons/publish-settings-icon'
import Tooltip from '../../../components/Tooltip'
import { IArticle } from '../../../types'
import { privateFetcher, publicFetcher } from '../../../utils/fetcher'

type Props = {
  slug: string
}

const Edit: React.FC<Props> = (props) => {
  const router = useRouter()
  const [enabled, setEnabled] = useState(false)

  const baseUrl = `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api`
  const endpoint = `${baseUrl}/articles/${router.query.slug}/edit`
  const { data } = useQuery<any | null>(
    ['article_edit', endpoint],
    () => privateFetcher(endpoint),
    {
      refetchOnWindowFocus: false,
      staleTime: Infinity, // temporary
    }
  )
  console.log('fetcher: ', data)

  return (
    <>
      <Head>
        <title>{`Editing...${
          data === undefined ? '' : data.article.title
        } | Zenn`}</title>
      </Head>
      <div className="flex h-screen overflow-hidden bg-main-green">
        <main className="h-full flex-1 overflow-x-auto">
          <header className="sticky top-0 z-50 h-[62px] border-b border-b-gray-bd-lighter bg-main-green">
            <div className="m-auto max-w-[1600px] px-10 py-0">
              <div className="flex h-[62px] items-center justify-between">
                <Tooltip
                  width={140}
                  TagName="button"
                  label="Go to list of articles"
                >
                  <Link
                    href="/dashboard"
                    aria-label="Go to list of articles"
                    role="tooltip"
                    className="relative ml-[-12px] flex h-[38px] w-[38px] items-center justify-center rounded-[50%] text-[#65717B] hover:cursor-pointer hover:bg-[#ffffffb3]"
                  >
                    <SvgDirect />
                  </Link>
                </Tooltip>
                <div className="flex items-center justify-between">
                  <Tooltip
                    width={140}
                    TagName="button"
                    label="Settings publish"
                    className="flex h-[38px] w-[38px] translate-y-0 items-center justify-center text-[#65717B] hover:cursor-pointer hover:rounded-[50%] hover:bg-[#ffffffb3]"
                  >
                    <SvgPublishSettings />
                  </Tooltip>
                  <span className="ml-5 inline-flex items-center">
                    <div className="flex items-center gap-[0.35rem]">
                      <Switch
                        checked={enabled}
                        onChange={setEnabled}
                        className={`${
                          enabled ? 'bg-blue-lighter' : 'bg-gray-lighter'
                        } relative inline-flex h-[27px] w-[46px] cursor-pointer items-center rounded-full p-[3px]`}
                      >
                        <span className="sr-only">Enable notifications</span>
                        <span
                          className={`${
                            enabled ? 'translate-x-[18px]' : 'translate-x-[1px]'
                          } left-0 inline-block h-full w-[21px] transform rounded-full bg-white transition`}
                        />
                      </Switch>
                      <span className="text-[0.84rem] font-bold text-[#65717B]">
                        Publish
                      </span>
                    </div>
                    <span className="text- ml-[20px] text-sm">
                      <button className="relative inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-[0.6em] border-solid border-[#0000] bg-blue-lighter px-[1em] py-[0.5em] font-bold leading-[1.4] text-white hover:bg-blue-darker">
                        Save draft
                      </button>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </header>
          <div className="mx-auto my-0 mt-14 max-w-[960px] px-10 py-0">
            <div className="relative pb-20">
              <textarea
                onKeyPress={(e) => {
                  e.key === 'Enter' && e.preventDefault()
                }}
                className="mb-8 h-[41px] w-full resize-none overflow-hidden bg-transparent text-[1.7rem] font-bold leading-[1.5] outline-none"
                maxLength={70}
                placeholder="Title"
                rows={1}
                spellCheck={false}
                defaultValue={'This is title'}
              />
              <div className="animate-fadeinup">
                <div className="flex items-start justify-between">
                  <div className="relative w-[calc(100%-110px)] overflow-hidden rounded-[10px] bg-white shadow-[0px_4px_10px_#4b57a90d]">
                    {/* Edit here */}
                  </div>
                </div>
                <div className="mt-4 flex">
                  <div className="flex-1">
                    <p className="text-[0.83rem] leading-[1.6] text-[#65717B]">
                      Please post according to the community guidelines.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <div>
          <aside></aside>
        </div>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const data: any = await publicFetcher(
    `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/articles`
  )
  const articles = data.articles
  const paths = articles.map((article: IArticle) => ({
    params: { slug: article.slug },
  }))
  return {
    paths: paths,
    fallback: 'blocking',
  }
}

export const getStaticProps = async ({ params }: any) => {
  try {
    await publicFetcher(
      `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/articles/${params.slug}`
    )
    return {
      props: {
        slug: params.slug as string,
      },
    }
  } catch (err: any) {
    return {
      notFound: true,
    }
  }
}

export default Edit
