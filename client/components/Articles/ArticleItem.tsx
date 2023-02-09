import React from 'react'
import Image from 'next/image'
import SvgHeart from '../Icons/heart-icon'
import { IArticleList } from '../../types'
import Link from 'next/link'

const ArticleItem: React.FC<IArticleList> = ({
  icon,
  title,
  authorAvatar,
  authorName,
  time,
  likes,
}: IArticleList) => {
  return (
    <div className="w-full laptop:w-[47%]">
      <article className="flex justify-between py-[15px]">
        <Link
          href="#"
          className="flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-[14px] bg-white text-[37px] tablet:h-[92px] tablet:w-[92px] tablet:text-[42px]"
        >
          <span>
            <span
              style={{
                backgroundImage: `url(${icon})`,
              }}
              className="inline-flex h-[1em] w-[1em] bg-cover bg-center bg-no-repeat"
            ></span>
          </span>
        </Link>
        <div className="w-[calc(100%_-_92px)] tablet:w-[calc(100%_-_108px)]">
          <Link href="#" className="text-primary">
            <h2 className="max-h-[4.55em] overflow-hidden text-ellipsis text-xl font-semibold leading-[1.5] text-primary line-clamp-3">
              {title}
            </h2>
          </Link>
          <div className="mt-[6px] flex items-center mobile:mt-[6.4px]">
            <div className="shrink-0">
              <Link href="#" className="flex">
                <Image
                  className="block aspect-auto h-[26px] w-[26px] shrink-0 rounded-[50%] font-[11px]"
                  src={authorAvatar}
                  width={26}
                  height={26}
                  alt=""
                />
              </Link>
            </div>
            <div className="ml-2 flex flex-1">
              <div className="mr-[7px] flex min-w-0 items-center text-xs leading-[1.1] text-primary">
                <Link
                  href="#"
                  className="truncate hover:underline hover:underline-offset-[0.15em]"
                >
                  {authorName}
                </Link>
              </div>
              <div className="flex flex-shrink-0 items-center text-[11.5px] leading-[1.1] text-secondary">
                <time className="mr-[6px]" dateTime="2022-10-02T11:22:35+00:00">
                  {time}
                </time>
                <span className="flex items-center tracking-[0.07em]">
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
