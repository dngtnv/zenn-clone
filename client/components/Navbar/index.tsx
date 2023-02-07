import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="border-b-gray-border-lighter sticky top-0 z-10 border-b bg-white">
      <div className="mx-auto max-w-[1200px] px-[14px] mobile:px-5 tablet:px-[25px]  laptop:px-10">
        <div className="flex items-center justify-start">
          <Link
            href="/"
            className={`${
              router.pathname == "/"
                ? "border-b-[2.5px] border-b-primary text-primary"
                : "border-b-[2.5px] border-b-transparent text-secondary"
            } 'text-base mr-[27.2px] py-2 font-semibold`}
          >
            Trending
          </Link>
          <Link
            href="/following"
            className={`${
              router.pathname == "/following"
                ? "border-b-[2.5px] border-b-primary text-primary"
                : "border-b-[2.5px] border-b-transparent text-secondary"
            } 'text-base mr-[27.2px] py-2 font-semibold`}
          >
            Following
          </Link>
          <Link
            href="/explore"
            className={`${
              router.pathname == "/explore"
                ? "border-b-[2.5px] border-b-primary text-primary"
                : "border-b-[2.5px] border-b-transparent text-secondary"
            } 'text-base mr-[27.2px] py-2 font-semibold`}
          >
            Explore
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
