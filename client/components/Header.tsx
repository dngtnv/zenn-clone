import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <header>
            <div>
                <div>
                    <Link href="/"><a>
                        <Image src="/zenn.svg" width={94.03} height={22} alt="Zenn" />
                    </a></Link>
                </div>
            </div>
        </header>
    )
}
export default Header;
