import { IArticle } from '../../../../types'
import ArticleItem from './ArticleItem'

type Props = {
  articles: IArticle[] | undefined
}

const ArticleList = ({ articles }: Props) => {
  return (
    <div className="grid grid-cols-2 gap-x-[1.7em] gap-y-[2em] laptop:grid-cols-3 laptop:gap-x-[1.2em] laptop:gap-y-[2.2em] desktop:gap-x-[1.8em]">
      {articles?.map((article) => (
        <ArticleItem key={article.articleId} {...article} />
      ))}
    </div>
  )
}

export default ArticleList
