import { Request, Response } from 'express';
import logger from '../library/logger';
import {
  CreateArticleInput,
  DeleteArticleInput,
  GetArticleBySlugInput,
  GetArticleInput,
  UpdateArticleInput,
} from '../schema/article.schema';
import {
  createArticle,
  deleteArticle,
  findAndUpdateArticle,
  findArticle,
  findArticlebyUser,
  getArticles,
} from '../service/article.service';
import { findUser } from '../service/user.service';

export const createArticleHandler = async (
  // eslint-disable-next-line @typescript-eslint/ban-types
  req: Request<{}, {}, CreateArticleInput['body']>,
  res: Response
) => {
  const userId = res.locals.user._id;
  const body = req.body;
  try {
    const article = await createArticle({ ...body, user: userId });

    return res.status(200).json({ slug: article.slug });
  } catch (err) {
    logger.error(err);
  }
};

export const updateArticleHandler = async (
  req: Request<UpdateArticleInput['params']>,
  res: Response
) => {
  const userId = res.locals.user._id;
  const slug = req.params.articleSlug;
  const update = req.body;

  await findArticle({ slug })
    .then((article) => {
      if (!article) {
        return res
          .status(404)
          .json({ message: 'This article has been deleted or does not exist' });
      }
      if (String(article.user) !== userId) {
        return res.sendStatus(403);
      }
    })
    .catch((err) => logger.error(err));

  await findAndUpdateArticle({ slug }, update, {
    new: true,
  })
    .then((response) => {
      return res.json({ response });
    })
    .catch((err) => logger.error(err));
};

export const checkArticleExists = async (
  req: Request<GetArticleBySlugInput['params']>,
  res: Response
) => {
  const slug = req.params.articleSlug;
  try {
    const article = await findArticle({ slug });
    if (!article) {
      return res
        .status(404)
        .json({ message: 'This article has been deleted or does not exist' });
    }
    return res.status(200).json({ article: article });
  } catch (err) {
    logger.error(err);
  }
};

export const getEditArticleHandler = async (
  req: Request<GetArticleBySlugInput['params']>,
  res: Response
) => {
  const slug = req.params.articleSlug;
  try {
    const article: any = await findArticle({ slug });
    const returnArticle = {
      id: article.articleId,
      title: article.title,
      articleType: article.articleType,
      bodyMarkdown: article.body,
      emoji: article.emoji,
      published: article.published,
    };
    if (!article) {
      return res.status(404).json({
        message: 'This page may have been deleted or the URL may be incorrect.',
      });
    }
    return res.json({ article: returnArticle });
  } catch (err) {
    logger.error(err);
  }
};

export const getArticleHandler = async (
  req: Request<GetArticleInput['params']>,
  res: Response
) => {
  const articleId = req.params.articleId;
  try {
    const article = await findArticle({ articleId });
    if (!article) {
      return res
        .status(404)
        .json({ message: 'This article has been deleted or does not exist' });
    }
    return res.json({ article });
  } catch (err) {
    logger.error(err);
  }
};

export const getArticlesHandler = async (req: Request, res: Response) => {
  try {
    const username = req.query.username;
    if (!username) {
      const articles = await getArticles({});
      if (!articles) {
        return res.status(403).json({ message: 'No articles found' });
      }
      return res.status(200).json({ articles });
    }

    const user = await findUser({ username: username });
    if (!user) {
      return res.status(403).json({ message: 'User does not exist' });
    }
    const articles = await findArticlebyUser({ user: user._id });
    return res.json({ articles });
  } catch (err) {
    logger.error(err);
  }
};

export const deleteArticleHandler = async (
  req: Request<DeleteArticleInput['params']>,
  res: Response
) => {
  const userId = res.locals.user._id;
  const articleId = req.params.articleId;

  await findArticle({ articleId })
    .then((article) => {
      if (!article) {
        return res
          .status(404)
          .json({ message: 'This article has been deleted or does not exist' });
      }
      if (String(article.user) !== userId) {
        return res.sendStatus(403);
      }
      return res.sendStatus(200);
    })
    .catch((err) => logger.error(err));

  await deleteArticle({ articleId })
    .then((response) => logger.info(response))
    .catch((err) => logger.error(err));
};
