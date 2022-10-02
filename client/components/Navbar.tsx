import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
            <div className="mx-auto px-10 max-w-[1200px]">
                <div className="flex justify-start items-center">
                    <Link href="/"><a className="text-base font-semibold text-primary mr-[27.2px] py-2 border-b-2 border-[#000000]">Trending</a></Link>
                    <Link href="/following"><a className="text-base font-semibold text-primary mr-[27.2px] py-2">Following</a></Link>
                    <Link href="/explore"><a className="text-base font-semibold text-primary py-2">Explore</a></Link>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;
