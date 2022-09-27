import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
            <div>
                <Link href="/"><a className="text-base font-semibold text-primary">Trending</a></Link>
                <Link href="/following"><a className="text-base font-semibold text-primary">Following</a></Link>
                <Link href="/explore"><a className="text-base font-semibold text-primary">Explore</a></Link>
            </div>
        </nav>
    )
}
export default Navbar;
