import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import scrapPic from "../../public/scrap.png";
import articlePic from "../../public/article.png";
import bookPic from "../../public/book.png";
import Image from "next/image";
import Link from "next/link";

interface Props {
  children: string;
  className: string;
}

const AddnewMenu: React.FC<Props> = ({ children, className }: Props) => {
  return (
    <Menu as="div" className="relative">
      <Menu.Button className={className}>{children}</Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-[51] mt-[0.6rem] w-[200px] origin-top-right divide-y divide-gray-100 overflow-hidden rounded-[7px] bg-white text-[13.5px] shadow-[0_3px_12px_-1px_rgba(4,37,63,25%)] focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <Link
                href="#"
                className={`${
                  active && "bg-main-gray"
                } group flex w-full flex-wrap items-center px-[0.9em] py-[0.7em] text-[14px] leading-[1.5]`}
              >
                <span className="mr-[0.6em] inline-flex">
                  <Image src={scrapPic} width={40} height={34} alt="" />
                </span>
                Create scrap
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link
                href="#"
                className={`${
                  active && "bg-main-gray"
                } group flex w-full flex-wrap items-center px-[0.9em] py-[0.7em] text-[14px] leading-[1.5]`}
              >
                <span className="mr-[0.6em] inline-flex">
                  <Image src={articlePic} width={40} height={34} alt="" />
                </span>
                Create article
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link
                href="#"
                className={`${
                  active && "bg-main-gray"
                } group flex w-full flex-wrap items-center px-[0.9em] py-[0.7em] text-[14px] leading-[1.5]`}
              >
                <span className="mr-[0.6em] inline-flex">
                  <Image src={bookPic} width={40} height={34} alt="" />
                </span>
                Create a book
              </Link>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default AddnewMenu;
