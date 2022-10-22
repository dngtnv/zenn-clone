import React from 'react'
import { IArticleList } from '../../types'
import ArticleItem from './ArticleItem'

const ArticleList: React.FC = () => {
	const articles: Array<IArticleList> = [
		{
			icon: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXJ0aWNsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
			title: 'What is React Hooks and how to use it in 3 hours',
			authorAvatar:
				'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
			authorName: 'Dngtnv',
			time: '2 days ago',
			likes: 96,
		},
		{
			icon: 'https://images.unsplash.com/photo-1623039405147-547794f92e9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0aWNsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
			title: 'What is React Hooks and how to use it in 3 hours',
			authorAvatar:
				'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
			authorName: 'Ravix of 4horn',
			time: '3 hours ago',
			likes: 69,
		},
		{
			icon: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXJ0aWNsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
			title: 'What is React Hooks and how to use it in 3 hours',
			authorAvatar:
				'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
			authorName: 'Dngtnv',
			time: '2 days ago',
			likes: 96,
		},
		{
			icon: 'https://images.unsplash.com/photo-1623039405147-547794f92e9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0aWNsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
			title: 'What is React Hooks and how to use it in 3 hours',
			authorAvatar:
				'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
			authorName: 'Ravix of 4horn',
			time: '3 hours ago',
			likes: 69,
		},
		{
			icon: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXJ0aWNsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
			title: 'What is React Hooks and how to use it in 3 hours',
			authorAvatar:
				'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
			authorName: 'Dngtnv',
			time: '2 days ago',
			likes: 96,
		},
		{
			icon: 'https://images.unsplash.com/photo-1623039405147-547794f92e9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0aWNsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
			title: 'What is React Hooks and how to use it in 3 hours',
			authorAvatar:
				'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
			authorName: 'Ravix of 4horn',
			time: '3 hours ago',
			likes: 69,
		},
		{
			icon: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXJ0aWNsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
			title: 'What is React Hooks and how to use it in 3 hours',
			authorAvatar:
				'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
			authorName: 'Dngtnv',
			time: '2 days ago',
			likes: 96,
		},
		{
			icon: 'https://images.unsplash.com/photo-1623039405147-547794f92e9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0aWNsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
			title: 'What is React Hooks and how to use it in 3 hours',
			authorAvatar:
				'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
			authorName: 'Ravix of 4horn',
			time: '3 hours ago',
			likes: 69,
		},
	]
	return (
		<div className='flex flex-wrap justify-between items-start'>
			{articles.map((article, index) => {
				return <ArticleItem key={index} {...article} />
			})}
		</div>
	)
}

export default ArticleList
