import mongoose, { Document, Schema } from 'mongoose'
import { customAlphabet } from 'nanoid'
import { UserDocument } from './user.model'

const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz0123456789', 9)

export interface ArticleInput {
  user: UserDocument['_id']
  articleType: string
  postType?: string
  title: string
  body: string
  emoji?: string
  path?: string
  published?: boolean
}
export interface ArticleDocument extends ArticleInput, Document {
  createdAt: Date
  updatedAt: Date
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
    articleType: { type: String, required: true },
    postType: { type: String, required: true },
    title: { type: String, required: true },
    body: { type: String, required: true },
    emoji: { type: String, required: true },
    path: { type: String, required: true },
    published: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  }
)

const ArticleModel = mongoose.model<ArticleDocument>('Article', articleSchema)

export default ArticleModel
