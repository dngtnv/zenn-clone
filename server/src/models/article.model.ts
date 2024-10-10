import { Document, model, Schema } from 'mongoose';
import { customAlphabet } from 'nanoid';
import { UserDocument } from './user.model';

const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz0123456789', 9);
const slug = customAlphabet('abcdefghijklmnopqrstuvwxyz0123456789', 14);

export interface IArticleInput {
  user: UserDocument['_id'];
  articleType: string;
  postType?: string;
  title: string;
  body: string;
  emoji?: string;
  slug?: string;
  published?: boolean;
}
export interface ArticleDocument extends IArticleInput, Document {
  createdAt: Date;
  updatedAt: Date;
}

const articleSchema = new Schema(
  {
    articleId: {
      type: String,
      required: true,
      unique: true,
      default: () => `${nanoid()}`,
    },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    articleType: { type: String, required: true, default: 'tech' },
    postType: { type: String, required: false },
    title: { type: String, required: false, default: null },
    body: { type: String, required: false, default: null },
    emoji: { type: String, required: true, default: '👋' },
    path: { type: String, required: false },
    slug: {
      type: String,
      required: true,
      unique: true,
      default: () => `${slug()}`,
    },
    status: { type: Boolean, required: true, default: false },
    likedCount: { type: Number, required: true, default: 0 },
    commentedUsers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    commentsCount: { type: Number, required: true, default: 0 },
    currentUserLiked: { type: Boolean, required: true, default: false },
    published: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
);

const ArticleModel = model<ArticleDocument>('Article', articleSchema);

export default ArticleModel;
