import Link from 'next/link'
import { IArticle } from '../../../../types'
import SvgFavorite from '../../../Icons/favorite-icon'

const ArticleItem: React.FC<IArticle> = ({ ...article }: IArticle) => {
  return (
    <article
      key={article.articleId}
      className='relative flex flex-col bg-white rounded-xl shadow-[0px_4px_8px_-2px_rgba(0,10,60,0.1)] overflow-hidden transition-shadow duration-[0.2s]'
    >
      <Link
        href='#'
        className='absolute top-3 left-3 text-[10px] font-semibold uppercase bg-blue-lighter text-white text-center py-[3px] px-[6px] leading-[1.3] rounded-[10px]'
      >
        {article.articleType}
      </Link>
      <Link href='#' className='flex flex-1 flex-col'>
        <div className='flex justify-center text-[46px] py-[25px] leading-[1.5] bg-[#cfe5ff]'>
          <span className='inline-flex'>
            <span className='inline-flex h-[1em] w-[1em] bg-contain bg-[url("https://twemoji.maxcdn.com/v/latest/svg/1f391.svg")]'></span>
          </span>
        </div>
        <div className='pt-[0.8em] flex-1'>
          <h3 className='font-bold text-base px-[0.9rem] line-clamp-3 text-ellipsis leading-[1.5] max-h-[4.55em]'>
            {article.title}
          </h3>
        </div>
        <div className='text-[0.74rem] pt-[0.65rem] px-[0.9rem] pb-4 leading-[1.2]'>
          <div className='flex items-center text-gray-primary'>
            <time>3 hours ago</time>
            <span className='inline-flex items-center ml-[6px]'>
              <SvgFavorite className='mr-[3px] w-[13px] h-[13px]' />3
            </span>
          </div>
        </div>
      </Link>
    </article>
  )
}

export default ArticleItem
