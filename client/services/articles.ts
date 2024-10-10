import { axiosPrivate } from '../utils/axios'

interface ArticleData {
  id: string
  title: string
  body: string
  articleType: string
  emoji: string
  postType: string
  path: string
  published: boolean
}

export const initArticle = async () => {
  try {
    const res = await axiosPrivate.post('/articles')
    const slug = res.data.slug
    return slug
  } catch (err) {
    console.error('There was an ERROR: ', err)
    throw err
  }
}
