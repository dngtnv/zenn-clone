import useSWR from 'swr'
import { IArticle } from '../types'
import { publicFetcher } from '../utils/fetcher'

type articlesProps = {
  articles: IArticle[]
}

export const useArticles = (username: string) => {
  const { data, error } = useSWR<articlesProps | null>(
    `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/articles?username=${username}`,
    publicFetcher,
    {
      revalidateOnFocus: false,
    }
  )

  return {
    articles: data?.articles,
    isLoading: !error && !data,
  }
}
