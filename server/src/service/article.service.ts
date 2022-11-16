import { FilterQuery, QueryOptions, UpdateQuery } from 'mongoose'
import ArticleModel, {
  ArticleDocument,
  ArticleInput,
} from '../models/article.model'

export async function createArticle(input: ArticleInput) {
  return ArticleModel.create(input)
}

export async function findArticle(
  query: FilterQuery<ArticleDocument>,
  options: QueryOptions = { lean: true }
) {
  return ArticleModel.findOne(query, {}, options)
}

export async function findAndUpdateArticle(
  query: FilterQuery<ArticleDocument>,
  update: UpdateQuery<ArticleDocument>,
  options: QueryOptions
) {
  return ArticleModel.findOneAndUpdate(query, update, options)
}

export async function deleteArticle(query: FilterQuery<ArticleDocument>) {
  return ArticleModel.deleteOne(query)
}
