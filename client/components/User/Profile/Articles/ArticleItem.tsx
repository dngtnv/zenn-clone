import Link from "next/link";
import { IArticle } from "../../../../types";
import SvgFavorite from "../../../Icons/favorite-icon";

const ArticleItem: React.FC<IArticle> = ({ ...article }: IArticle) => {
  return (
    <article
      key={article.articleId}
      className="relative flex flex-col overflow-hidden rounded-xl bg-white shadow-[0px_4px_8px_-2px_rgba(0,10,60,0.1)] transition-shadow duration-[0.2s]"
    >
      <Link
        href="#"
        className="absolute top-3 left-3 rounded-[10px] bg-blue-lighter py-[3px] px-[6px] text-center text-[10px] font-semibold uppercase leading-[1.3] text-white"
      >
        {article.articleType}
      </Link>
      <Link href="#" className="flex flex-1 flex-col">
        <div className="flex justify-center bg-[#cfe5ff] py-[25px] text-[46px] leading-[1.5]">
          <span className="inline-flex">
            <span className='inline-flex h-[1em] w-[1em] bg-[url("https://twemoji.maxcdn.com/v/latest/svg/1f391.svg")] bg-contain'></span>
          </span>
        </div>
        <div className="flex-1 pt-[0.8em]">
          <h3 className="max-h-[4.55em] text-ellipsis px-[0.9rem] text-base font-bold leading-[1.5] line-clamp-3">
            {article.title}
          </h3>
        </div>
        <div className="px-[0.9rem] pt-[0.65rem] pb-4 text-[0.74rem] leading-[1.2]">
          <div className="flex items-center text-gray-primary">
            <time>3 hours ago</time>
            <span className="ml-[6px] inline-flex items-center">
              <SvgFavorite className="mr-[3px] h-[13px] w-[13px]" />3
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ArticleItem;
