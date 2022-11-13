export interface IArticleList {
  icon: string
  title: string
  authorAvatar: string
  authorName: string
  time: string
  likes: number
}

export interface IUser {
  _id: string
  email: string
  name: string
  bio: string
  avatarUrl: string
  createdAt: Date
  updatedAt: Date
  __v: number
  session: string
  iat: number
  exp: number
}
