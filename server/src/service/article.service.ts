import { FilterQuery, QueryOptions, UpdateQuery } from 'mongoose'
import ArticleModel, {
  ArticleDocument,
  IArticleInput,
} from '../models/article.model'

export async function createArticle(input: IArticleInput) {
  return ArticleModel.create(input)
}

export const findArticle = async (
  query: FilterQuery<ArticleDocument>,
  options: QueryOptions = { lean: true }
) => {
  return ArticleModel.findOne(query, {}, options)
}

export const getArticles = async () => {
  return ArticleModel.find({})
}

export const findAndUpdateArticle = async (
  query: FilterQuery<ArticleDocument>,
  update: UpdateQuery<ArticleDocument>,
  options: QueryOptions
) => {
  return ArticleModel.findOneAndUpdate(query, update, options)
}

export const deleteArticle = async (query: FilterQuery<ArticleDocument>) => {
  return ArticleModel.deleteOne(query)
}
