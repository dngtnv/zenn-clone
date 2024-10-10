import { boolean, object, string, TypeOf } from 'zod';

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
    published: boolean().optional(),
  }),
};

const params = {
  params: object({
    articleId: string({
      required_error: 'articleId is required',
    }),
  }),
};

const slugParams = {
  params: object({
    articleSlug: string({
      required_error: 'articleSlug is required',
    }),
  }),
};

export const createArticleSchema = object({
  ...payload,
});

export const updateArticleSchema = object({
  ...payload,
  ...slugParams,
});

export const deleteArticleSchema = object({
  ...params,
});

// Get article by articleId
export const getArticleSchema = object({
  ...params,
});

export const getArticleBySlugSchema = object({
  ...slugParams,
});

export type GetArticleBySlugInput = TypeOf<typeof getArticleBySlugSchema>;
export type CreateArticleInput = TypeOf<typeof createArticleSchema>;
export type UpdateArticleInput = TypeOf<typeof updateArticleSchema>;
export type GetArticleInput = TypeOf<typeof getArticleSchema>;
export type DeleteArticleInput = TypeOf<typeof deleteArticleSchema>;
