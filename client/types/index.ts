export interface IArticleList {
  icon: string
  title: string
  authorAvatar: string
  authorName: string
  time: string
  likes: number
}

export interface IUser {
  _id?: string
  email?: string
  name?: string
  username: string
  bio?: string
  avatarUrl: string
}
