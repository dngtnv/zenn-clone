import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import SvgHeart from '../Icons/heart-icon'
import { IArticleList } from '../../types'

const ArticleItem: React.FC<IArticleList> = ({
  icon,
  title,
  authorAvatar,
  authorName,
  time,
  likes,
}: IArticleList) => {
  return (
    <div className='w-full laptop:w-[47%]'>
      <article className='flex justify-between py-[15px]'>
        <Link href='#'>
          <a className='shrink-0 w-[76px] h-[76px] text-[37px] tablet:w-[92px] tablet:h-[92px] flex items-center justify-center tablet:text-[42px] bg-white rounded-[14px]'>
            <span>
              <span
                style={{
                  backgroundImage: `url(${icon})`,
                }}
                className='inline-flex w-[1em] h-[1em] bg-no-repeat bg-cover bg-center'
              ></span>
            </span>
          </a>
        </Link>
        <div className='w-[calc(100%_-_92px)] tablet:w-[calc(100%_-_108px)]'>
          <Link href='#'>
            <a className='text-primary'>
              <h2 className='text-xl text-primary leading-[1.5] font-semibold text-ellipsis overflow-hidden line-clamp-3 max-h-[4.55em]'>
                {title}
              </h2>
            </a>
          </Link>
          <div className='flex items-center mt-[6px] mobile:mt-[6.4px]'>
            <div className='shrink-0'>
              <Link href='#'>
                <a className='flex'>
                  <Image
                    className='rounded-[50%] block w-[26px] aspect-auto h-auto shrink-0 font-[11px]'
                    src={authorAvatar}
                    width={26}
                    height={26}
                    alt=''
                  />
                </a>
              </Link>
            </div>
            <div className='ml-2 flex flex-1'>
              <div className='flex items-center text-xs text-primary mr-[7px] leading-[1.1] min-w-0'>
                <Link href='#'>
                  <a className='truncate hover:underline hover:underline-offset-[0.15em]'>
                    {authorName}
                  </a>
                </Link>
              </div>
              <div className='flex items-center text-secondary text-[11.5px] leading-[1.1] flex-shrink-0'>
                <time className='mr-[6px]' dateTime='2022-10-02T11:22:35+00:00'>
                  {time}
                </time>
                <span className='flex items-center tracking-[0.07em]'>
                  <SvgHeart />
                  {likes}
                </span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

export default ArticleItem
