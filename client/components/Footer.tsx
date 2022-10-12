import Link from 'next/link'
import SvgZenn from './icons/zenn-logo'

const Footer: React.FC = () => {
	return (
		<footer className='pt-12 bg-white'>
			<div className='mx-auto px-5 tablet:px-[25px] laptop:px-[40px] max-w-full desktop:max-w-[1200px]'>
				<div className='block tablet:grid tablet:grid-cols-3 tablet:gap-x-5 laptop:grid-cols-4 laptop:gap-x-[3%]'>
					<div className='text-[0.88rem] mb-6 col-span-3 laptop:mb-0 laptop:col-span-1'>
						<Link href='/'>
							<a className='inline-flex'>
								<SvgZenn width={85} height={20} />
							</a>
						</Link>
						<p className='my-[0.3rem] text-gray-primary text-[13.5px] leading-[1.6] pr-0 laptop:pr-9'>
							Information sharing community for engineers
						</p>
					</div>
					<nav className='text-primary text-[0.88rem]'>
						<h4 className='text-[1.15em] font-bold leading[1.5] mt-8 tablet:mt-0 mb-[0.7rem] pb-[0.4rem] tablet:pb-0 border-b border-b-gray-bd-lighter tablet:border-none'>
							About
						</h4>
						<ul>
							<li className='my-[0.6rem]'>
								<Link href='#'>
									<a className='hover:underline'>About Zenn</a>
								</Link>
							</li>
							<li className='my-[0.6rem]'>
								<Link href='#'>
									<a className='hover:underline'>Community guidelines</a>
								</Link>
							</li>
							<li className='my-[0.6rem]'>
								<Link href='#'>
									<a className='hover:underline'>Usage</a>
								</Link>
							</li>
							<li className='my-[0.6rem]'>
								<Link href='#'>
									<a className='hover:underline'>Frequently Asked Questions</a>
								</Link>
							</li>
							<li className='my-[0.6rem]'>
								<Link href='#'>
									<a className='hover:underline'>Release Notes</a>
								</Link>
							</li>
							<li className='my-[0.6rem]'>
								<Link href='#'>
									<a className='hover:underline'>Development Roadmap</a>
								</Link>
							</li>
						</ul>
					</nav>
					<nav className='text-primary text-[0.88rem]'>
						<h4 className='text-[1.15em] font-bold leading[1.5] mt-8 tablet:mt-0 mb-[0.7rem] pb-[0.4rem] tablet:pb-0 border-b border-b-gray-bd-lighter tablet:border-none'>
							Legal
						</h4>
						<ul>
							<li className='my-[0.6rem]'>
								<Link href='#'>
									<a className='hover:underline'>Terms of service</a>
								</Link>
							</li>
							<li className='my-[0.6rem]'>
								<Link href='#'>
									<a className='hover:underline'>Privacy policy</a>
								</Link>
							</li>
							<li className='my-[0.6rem]'>
								<Link href='#'>
									<a className='hover:underline'>Transaction law</a>
								</Link>
							</li>
							<li className='my-[0.6rem]'>
								<Link href='#'>
									<a className='hover:underline'>Classmethod</a>
								</Link>
							</li>
						</ul>
					</nav>
					<nav className='text-primary text-[0.88rem]'>
						<h4 className='text-[1.15em] font-bold leading[1.5] mt-8 tablet:mt-0 mb-[0.7rem] pb-[0.4rem] tablet:pb-0 border-b border-b-gray-bd-lighter tablet:border-none'>
							Links
						</h4>
						<ul>
							<li className='my-[0.6rem]'>
								<Link href='#'>
									<a className='hover:underline'>Media kit</a>
								</Link>
							</li>
							<li className='my-[0.6rem]'>
								<Link href='#'>
									<a className='hover:underline'>Twitter</a>
								</Link>
							</li>
							<li className='my-[0.6rem]'>
								<Link href='#'>
									<a className='hover:underline'>GitHub</a>
								</Link>
							</li>
							<li className='my-[0.6rem]'>
								<Link href='#'>
									<a className='hover:underline'>RSS</a>
								</Link>
							</li>
						</ul>
					</nav>
				</div>
				<div className='mt-8 pt-[0.9rem] pb-[0.8rem] border-t border-t-gray-bd-lighter text-gray-primary text-center'>
					classmethod
				</div>
			</div>
		</footer>
	)
}
export default Footer
