import Head from 'next/head'
import { ReactElement } from 'react'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import { NextPageWithLayout } from './_app'
import Link from 'next/link'
import SvgArrow from '../components/icons/arrow-icon'
import Tooltip from '../components/tooltip'
import ArticleList from '../components/articles/ArticleList'

const Home: NextPageWithLayout = () => {
	return (
		<>
			<Head>
				<title>Zenn | Homepage</title>
				<meta name='keywords' content='zenn' />
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<meta name='description' content='Generated by create next app' />
				<link rel='shortcut icon' href='/zenn-favicon.png' />
			</Head>
			<main>
				<section className='bg-main-blue py-14'>
					<div className='mx-auto max-w-[960px] px-[14px] mobile:px-5 tablet:px-[25px] laptop:px-10'>
						<div className='flex items-center'>
							<h1 className='text-2xl leading-[1.3] font-bold text-primary mr-[6px]'>
								Tech
							</h1>
							<Tooltip label='Knowledge of technology'>
								<span className='flex justify-center w-[17px] h-[17px] leading-[17px] text-white text-[10px] rounded-[50%] bg-gray-lighter group-hover:bg-gray-primary'>
									?
								</span>
							</Tooltip>
						</div>
						<div className='mt-[1.1rem]'>
							<ArticleList />
						</div>
						<div className='mt-[2.2rem] text-center font-[1.02rem]'>
							<Link href='#'>
								<a className='inline-block text-[0.956rem] tablet:text-[1.02rem] text-blue-darker hover:underline hover:underline-offset-[0.3em]'>
									More Trending
									<SvgArrow size={16.31} />
								</a>
							</Link>
						</div>
					</div>
				</section>
			</main>
		</>
	)
}

Home.getLayout = function getLayout(page: ReactElement) {
	return (
		<Layout>
			<Navbar />
			{page}
			{/* <NestedLayout>{page}</NestedLayout> */}
		</Layout>
	)
}

export default Home
