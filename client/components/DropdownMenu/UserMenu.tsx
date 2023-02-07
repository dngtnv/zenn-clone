import React, { Fragment, useContext } from "react";
import { Menu, Transition } from "@headlessui/react";
import SvgToiletPaper from "../Icons/toiletpaper-icon";
import SvgDocument from "../Icons/document-icon";
import SvgBook from "../Icons/book-icon";
import SvgDeploy from "../Icons/deploy-icon";
import SvgFavorite from "../Icons/favorite-icon";
import SvgBookopen from "../Icons/bookopen-icon";
import SvgYen from "../Icons/jpyen-icon";
import SvgSetting from "../Icons/setting-icon";
import SvgLogout from "../Icons/logout-icon";
import Link from "next/link";
import useLogout from "../../hooks/useLogout";
import AuthContext from "../../context/AuthProvider";

interface Props {
  children: React.ReactNode;
}

const UserMenu: React.FC<Props> = ({ children }) => {
  const logout = useLogout();
  const { me } = useContext(AuthContext);

  const signOut = async () => {
    await logout();
    window.location.assign("/");
  };

  return (
    <Menu as="div" className="relative ml-[20px] h-10">
      <Menu.Button>{children}</Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-[51] w-[236px] origin-top-right divide-y divide-gray-100 overflow-hidden rounded-[7px] bg-white text-[13.5px] shadow-[0_3px_12px_-1px_rgba(4,37,63,25%)] focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <Link
                href={"/" + me.username}
                className={`${
                  active && "bg-main-gray"
                } group flex w-full flex-wrap items-center px-[0.9em] py-[0.7em] text-[14px] leading-[1.5]`}
              >
                <div className="w-full font-bold text-primary">
                  {me.username}
                </div>
                <div className="w-full text-[0.9em] text-gray-primary">
                  @{me.username}
                </div>
              </Link>
            )}
          </Menu.Item>
          <div>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="#"
                  className={`${
                    active && "bg-main-gray"
                  } group flex w-full items-center px-[0.9em] py-[0.7em] text-[14px] leading-[1.5] text-primary`}
                >
                  <SvgToiletPaper
                    className="mr-[0.6em] h-5 w-5 text-gray-primary"
                    aria-hidden="true"
                  />
                  Scraps management
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="#"
                  className={`${
                    active && "bg-main-gray"
                  } group flex w-full items-center px-[0.9em] py-[0.7em] text-[14px] leading-[1.5] text-primary`}
                >
                  <SvgDocument
                    className="mr-[0.6em] h-5 w-5 text-gray-primary"
                    aria-hidden="true"
                  />
                  Articles management
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="#"
                  className={`${
                    active && "bg-main-gray"
                  } group flex w-full items-center px-[0.9em] py-[0.7em] text-[14px] leading-[1.5] text-primary`}
                >
                  <SvgBook
                    className="mr-[0.6em] h-5 w-5 text-gray-primary"
                    aria-hidden="true"
                  />
                  Books management
                </Link>
              )}
            </Menu.Item>
          </div>
          <div>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="#"
                  className={`${
                    active && "bg-main-gray"
                  } group flex w-full items-center px-[0.9em] py-[0.7em] text-[14px] leading-[1.5] text-primary`}
                >
                  <SvgDeploy
                    className="mr-[0.6em] h-5 w-5 text-gray-primary"
                    aria-hidden="true"
                  />
                  Deploy from GitHub
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="#"
                  className={`${
                    active && "bg-main-gray"
                  } group flex w-full items-center px-[0.9em] py-[0.7em] text-[14px] leading-[1.5] text-primary`}
                >
                  <SvgFavorite
                    className="mr-[0.6em] h-5 w-5 text-gray-primary"
                    aria-hidden="true"
                  />
                  Liked posts
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="#"
                  className={`${
                    active && "bg-main-gray"
                  } group flex w-full items-center px-[0.9em] py-[0.7em] text-[14px] leading-[1.5] text-primary`}
                >
                  <SvgBookopen
                    className="mr-[0.6em] h-5 w-5 text-gray-primary"
                    aria-hidden="true"
                  />
                  Recent reading book
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="#"
                  className={`${
                    active && "bg-main-gray"
                  } group flex w-full items-center px-[0.9em] py-[0.7em] text-[14px] leading-[1.5] text-primary`}
                >
                  <SvgYen
                    className="mr-[0.6em] h-5 w-5 text-gray-primary"
                    aria-hidden="true"
                  />
                  Earning Dashboard
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="#"
                  className={`${
                    active && "bg-main-gray"
                  } group flex w-full items-center px-[0.9em] py-[0.7em] text-[14px] leading-[1.5] text-primary`}
                >
                  <SvgSetting
                    className="mr-[0.6em] h-5 w-5 text-gray-primary"
                    aria-hidden="true"
                  />
                  Account settings
                </Link>
              )}
            </Menu.Item>
          </div>
          <div>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={signOut}
                  className={`${
                    active && "bg-main-gray"
                  } group flex w-full items-center px-[0.9em] py-[0.7em] text-[14px] leading-[1.5] text-primary`}
                >
                  <SvgLogout
                    className="mr-[0.6em] h-5 w-5 text-gray-primary"
                    aria-hidden="true"
                  />
                  Log out
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default UserMenu;
