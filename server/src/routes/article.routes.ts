import express from 'express';
import {
  checkArticleExists,
  createArticleHandler,
  deleteArticleHandler,
  getArticleHandler,
  getArticlesHandler,
  getEditArticleHandler,
  updateArticleHandler,
} from '../controller/article.controller';
import { requireUser } from '../middleware/requireUser';
import validateResource from '../middleware/validateResource';
import {
  createArticleSchema,
  deleteArticleSchema,
  getArticleBySlugSchema,
  getArticleSchema,
  updateArticleSchema,
} from '../schema/article.schema';

const router = express.Router();

router.post('/api/articles', requireUser, createArticleHandler);

router.put(
  '/api/articles/:articleSlug',
  [requireUser, validateResource(updateArticleSchema)],
  updateArticleHandler
);

router.get(
  '/api/articles/:articleSlug/edit',
  [requireUser, validateResource(getArticleBySlugSchema)],
  getEditArticleHandler
);

router.get('/api/articles/:articleSlug', checkArticleExists);

router.get(
  '/api/articles/:articleId',
  validateResource(getArticleSchema),
  getArticleHandler
);

router.get('/api/articles', getArticlesHandler);

router.delete(
  '/api/articles/:articleId',
  [requireUser, validateResource(deleteArticleSchema)],
  deleteArticleHandler
);

export default router;
