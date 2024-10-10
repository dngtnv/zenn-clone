import { FilterQuery, QueryOptions, UpdateQuery } from 'mongoose';
import ArticleModel, {
  ArticleDocument,
  IArticleInput,
} from '../models/article.model';

export async function createArticle(input: IArticleInput) {
  return ArticleModel.create(input);
}

export const findArticle = async (
  query: FilterQuery<ArticleDocument>,
  options: QueryOptions = { lean: true }
) => {
  return ArticleModel.findOne(query, {}, options);
};

export const findArticlebyUser = async (
  query: FilterQuery<ArticleDocument>,
  options: QueryOptions = { lean: true }
) => {
  return ArticleModel.find(query, {}, options).populate('user');
};

export const getArticles = async (options: QueryOptions = { lean: true }) => {
  return ArticleModel.find({}, options).populate('user');
};

export const findAndUpdateArticle = async (
  query: FilterQuery<ArticleDocument>,
  update: UpdateQuery<ArticleDocument>,
  options: QueryOptions
) => {
  return ArticleModel.findOneAndUpdate(query, update, options);
};

export const deleteArticle = async (query: FilterQuery<ArticleDocument>) => {
  return ArticleModel.deleteOne(query);
};
