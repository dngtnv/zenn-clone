import { boolean, object, string, TypeOf } from 'zod'

const payload = {
  body: object({
    articleType: string({
      required_error: 'Article type is required',
    }),
    title: string({
      required_error: 'Title is required',
    }),
    body: string({
      required_error: 'Article need content',
    }),
    postType: string().optional(),
    emoji: string().optional(),
    path: string({
      required_error: 'Path is required',
    }),
    published: boolean().optional(),
  }),
}

const params = {
  params: object({
    articleId: string({
      required_error: 'articleId is required',
    }),
  }),
}

export const createArticleSchema = object({
  ...payload,
})

export const updateArticleSchema = object({
  ...payload,
  ...params,
})

export const deleteArticleSchema = object({
  ...params,
})

export const getArticleSchema = object({
  ...params,
})

export type CreateArticleInput = TypeOf<typeof createArticleSchema>
export type UpdateArticleInput = TypeOf<typeof updateArticleSchema>
export type GetArticleInput = TypeOf<typeof getArticleSchema>
export type DeleteArticleInput = TypeOf<typeof deleteArticleSchema>
