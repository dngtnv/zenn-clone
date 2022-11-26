import { Request, Response } from 'express'
import logger from '../library/logger'
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
  findArticlebyUser,
  getArticles,
} from '../service/article.service'
import { findUser } from '../service/user.service'

export const createArticleHandler = async (
  // eslint-disable-next-line @typescript-eslint/ban-types
  req: Request<{}, {}, CreateArticleInput['body']>,
  res: Response
) => {
  const userId = res.locals.user._id
  const body = req.body
  try {
    const article = await createArticle({ ...body, user: userId })

    return res.status(201).json({ article })
  } catch (err) {
    logger.error(err)
  }
}

export const updateArticleHandler = async (
  req: Request<UpdateArticleInput['params']>,
  res: Response
) => {
  const userId = res.locals.user._id
  const articleId = req.params.articleId
  const update = req.body

  await findArticle({ articleId })
    .then((article) => {
      if (!article) {
        return res
          .status(404)
          .json({ message: 'This article has been deleted or does not exist' })
      }
      if (String(article.user) !== userId) {
        return res.sendStatus(403)
      }
    })
    .catch((err) => logger.error(err))

  await findAndUpdateArticle({ articleId }, update, {
    new: true,
  })
    .then((response) => {
      return res.json({ response })
    })
    .catch((err) => logger.error(err))
}

export const getArticleHandler = async (
  req: Request<GetArticleInput['params']>,
  res: Response
) => {
  const articleId = req.params.articleId
  try {
    const article = await findArticle({ articleId }, { populate: 'user' })
    if (!article) {
      return res
        .status(404)
        .json({ message: 'This article has been deleted or does not exist' })
    }
    return res.json({ article })
  } catch (err) {
    logger.error(err)
  }
}

export const getArticlesHandler = async (req: Request, res: Response) => {
  try {
    const username = req.query.username
    if (!username) {
      const articles = await getArticles({ populate: 'user' })
      if (!articles) {
        return res.status(403).json({ message: 'No articles found' })
      }
      return res.status(200).json({ articles })
    }

    const user = await findUser({ username: username })
    if (!user) {
      return res.status(404).json({ message: 'User does not exist' })
    }
    const articles = await findArticlebyUser({ username }, { populate: 'user' })
    return res.json({ articles })
  } catch (err) {
    logger.error(err)
  }
}

export const deleteArticleHandler = async (
  req: Request<DeleteArticleInput['params']>,
  res: Response
) => {
  const userId = res.locals.user._id
  const articleId = req.params.articleId

  await findArticle({ articleId })
    .then((article) => {
      if (!article) {
        return res
          .status(404)
          .json({ message: 'This article has been deleted or does not exist' })
      }
      if (String(article.user) !== userId) {
        return res.sendStatus(403)
      }
      return res.sendStatus(200)
    })
    .catch((err) => logger.error(err))

  await deleteArticle({ articleId })
    .then((response) => logger.info(response))
    .catch((err) => logger.error(err))
}
