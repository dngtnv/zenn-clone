import express from 'express'
import {
  createArticleHandler,
  deleteArticleHandler,
  getArticleHandler,
  getArticlesHandler,
  updateArticleHandler,
} from '../controller/article.controller'
import {
  createArticleSchema,
  deleteArticleSchema,
  getArticleSchema,
  updateArticleSchema,
} from '../schema/article.schema'
import { requireUser } from '../middleware/requireUser'
import validateResource from '../middleware/validateResource'

const router = express.Router()

router.post(
  '/api/articles',
  [requireUser, validateResource(createArticleSchema)],
  createArticleHandler
)

router.put(
  '/api/articles/:articleId',
  [requireUser, validateResource(updateArticleSchema)],
  updateArticleHandler
)

router.get(
  '/api/articles/:articleId',
  validateResource(getArticleSchema),
  getArticleHandler
)

router.get('/api/articles', getArticlesHandler)

router.delete(
  '/api/articles/:articleId',
  [requireUser, validateResource(deleteArticleSchema)],
  deleteArticleHandler
)

export default router
