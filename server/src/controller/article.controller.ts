import { Request, Response } from 'express'
import {
  CreateArticleInput,
  DeleteArticleInput,
  GetArticleInput,
  UpdateArticleInput,
} from '../schema/article.schema'
import {
  createArticle,
  deleteArticle,
  findAndUpdateArticle,
  findArticle,
} from '../service/article.service'

export async function createArticleHandler(
  // eslint-disable-next-line @typescript-eslint/ban-types
  req: Request<{}, {}, CreateArticleInput['body']>,
  res: Response
) {
  const userId = res.locals.user._id
  const body = req.body
  const article = await createArticle({ ...body, user: userId })

  return res.json({ article })
}

export async function updateArticleHandler(
  req: Request<UpdateArticleInput['params']>,
  res: Response
) {
  const userId = res.locals.user._id
  const articleId = req.params.articleId
  const update = req.body

  const article = await findArticle({ articleId })
  if (!article) {
    return res.sendStatus(404)
  }
  if (String(article.user) !== userId) {
    return res.sendStatus(403)
  }

  const updateArticle = await findAndUpdateArticle({ articleId }, update, {
    new: true,
  })

  return res.json({ updateArticle })
}

export async function getArticleHandler(
  req: Request<GetArticleInput['params']>,
  res: Response
) {
  const articleId = req.params.articleId
  const article = await findArticle({ articleId })

  if (!article) {
    return res.sendStatus(404)
  }
  return res.json({ article })
}

export async function deleteArticleHandler(
  req: Request<DeleteArticleInput['params']>,
  res: Response
) {
  const userId = res.locals.user._id
  const articleId = req.params.articleId

  const article = await findArticle({ articleId })

  if (!article) {
    return res.sendStatus(404)
  }
  if (String(article.user) !== userId) {
    return res.sendStatus(403)
  }
  await deleteArticle({ articleId })

  return res.sendStatus(200)
}
