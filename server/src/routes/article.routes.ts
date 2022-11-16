import express from 'express'
import {
  createArticleHandler,
  deleteArticleHandler,
  getArticleHandler,
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
  '/api/article',
  [requireUser, validateResource(createArticleSchema)],
  createArticleHandler
)

router.put(
  '/api/article/:articleId',
  [requireUser, validateResource(updateArticleSchema)],
  updateArticleHandler
)

router.get(
  '/api/article/:articleId',
  validateResource(getArticleSchema),
  getArticleHandler
)

router.delete(
  '/api/article/:articleId',
  [requireUser, validateResource(deleteArticleSchema)],
  deleteArticleHandler
)

export default router
