import Image from "next/future/image";
import Link from "next/link";
import SvgBell from "./icons/bell-icon";
import SvgSearch from "./icons/search-icon";
import SvgZenn from "./icons/zenn-logo";

const Header = () => {
    return (
        <header>
            <div className="mx-auto px-10 max-w-[1200px]">
                <div className="flex justify-between items-center">
                    <Link href="/"><a className="flex items-center h-[62px]">
                        <SvgZenn />
                    </a></Link>
                    <div>
                        <div className="flex items-center">
                            <Link href="/search">
                                <a className="text-secondary hover:text-primary transition duration-[250] ease-out"><SvgSearch size={23} /></a>
                            </Link>
                            <div className="flex items-center content-center ml-4">
                                <div className="text-secondary w-[23px] h-[23px]">
                                    <button className="text-secondary hover:text-primary transition duration-[250ms] ease-out"><SvgBell size={23} /></button>
                                </div>
                                <button className="h-10 ml-[20px]"><Image className="object-cover border border-transparent rounded-[50%]" src="/ingodwhotrust.jpg" width={40} height={40} alt="" /></button>
                                <div>
                                    <button className="inline-flex w-[92px] h-9 items-center justify-center text-white font-semibold text-sm bg-blue-lighter rounded-[7px] ml-[22px] hover:bg-blue-darker transition duration-[250ms] ease-out">Add new</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;
