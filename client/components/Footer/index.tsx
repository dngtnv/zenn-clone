import Link from 'next/link'
import SvgZenn from '../Icons/zenn-logo'

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-12">
      <div className="mx-auto max-w-full px-5 tablet:px-[25px] laptop:px-[40px] desktop:max-w-[1200px]">
        <div className="block desktop:flex">
          <div className="min-w-[220px] text-[0.88rem]">
            <Link href="/" className="inline-flex">
              <SvgZenn width={85} height={20} />
            </Link>
            <p className="my-[0.3rem] pr-0 text-[13.5px] leading-[1.6] text-gray-primary laptop:pr-9">
              Information sharing <br aria-hidden={true} /> community for
              engineers
            </p>
          </div>
          <div className="mt-[2.4rem] grid flex-1 grid-cols-2 gap-8 laptop:grid-cols-4 laptop:gap-8 desktop:mt-0">
            <nav className="text-[0.88rem] text-primary">
              <h4 className="leading[1.5] mb-[0.8rem] text-[1.15em] font-bold">
                About
              </h4>
              <ul>
                <li className="my-[0.6rem]">
                  <Link href="#" className="hover:underline">
                    About Zenn
                  </Link>
                </li>
                <li className="my-[0.6rem]">
                  <Link href="#" className="hover:underline">
                    Operating company
                  </Link>
                </li>
                <li className="my-[0.6rem]">
                  <Link href="#" className="hover:underline">
                    Release Notes
                  </Link>
                </li>
              </ul>
            </nav>
            <nav className="text-[0.88rem] text-primary">
              <h4 className="leading[1.5] mb-[0.8rem] text-[1.15em] font-bold">
                Guides
              </h4>
              <ul>
                <li className="my-[0.6rem]">
                  <Link href="#" className="hover:underline">
                    Usage
                  </Link>
                </li>
                <li className="my-[0.6rem]">
                  <Link href="#" className="hover:underline">
                    Publication
                  </Link>
                </li>
                <li className="my-[0.6rem]">
                  <Link href="#" className="hover:underline">
                    FAG
                  </Link>
                </li>
              </ul>
            </nav>
            <nav className="text-[0.88rem] text-primary">
              <h4 className="leading[1.5] mb-[0.8rem] text-[1.15em] font-bold">
                Links
              </h4>
              <ul>
                <li className="my-[0.6rem]">
                  <Link href="#" className="hover:underline">
                    Twitter
                  </Link>
                </li>
                <li className="my-[0.6rem]">
                  <Link href="#" className="hover:underline">
                    GitHub
                  </Link>
                </li>
                <li className="my-[0.6rem]">
                  <Link href="#" className="hover:underline">
                    RSS
                  </Link>
                </li>
              </ul>
            </nav>
            <nav className="text-[0.88rem] text-primary">
              <h4 className="leading[1.5] mb-[0.8rem] text-[1.15em] font-bold">
                Legal
              </h4>
              <ul>
                <li className="my-[0.6rem]">
                  <Link href="#" className="hover:underline">
                    Terms of service
                  </Link>
                </li>
                <li className="my-[0.6rem]">
                  <Link href="#" className="hover:underline">
                    Privacy policy
                  </Link>
                </li>
                <li className="my-[0.6rem]">
                  <Link href="#" className="hover:underline">
                    Transaction law
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="mt-8 border-t border-t-gray-bd-lighter pt-[0.9rem] pb-[0.8rem] text-center text-gray-primary">
          classmethod
        </div>
      </div>
    </footer>
  )
}
export default Footer
