import Link from 'next/link'

const Navbar: React.FC = () => {
	return (
		<nav className='bg-white border-b border-b-gray-border-lighter z-10 sticky top-0'>
			<div className='mx-auto px-[14px] mobile:px-5 tablet:px-[25px] laptop:px-10  max-w-[1200px]'>
				<div className='flex justify-start items-center'>
					<Link href='/'>
						<a className='text-base font-semibold text-primary mr-[27.2px] py-2 border-b-[2.5px] border-b-primary'>
							Trending
						</a>
					</Link>
					<Link href='/following'>
						<a className='text-base font-semibold text-secondary mr-[27.2px] py-2 border-b-[2.5px] border-b-transparent'>
							Following
						</a>
					</Link>
					<Link href='/explore'>
						<a className='text-base font-semibold text-secondary py-2 border-b-[2.5px] border-b-transparent'>
							Explore
						</a>
					</Link>
				</div>
			</div>
		</nav>
	)
}
export default Navbar
