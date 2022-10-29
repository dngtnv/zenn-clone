import React from 'react'
import { IArticleList } from '../../types'
import ArticleItem from './ArticleItem'

const ArticleList: React.FC = () => {
  const articles: Array<IArticleList> = [
    {
      icon: 'https://twemoji.maxcdn.com/v/latest/svg/1f391.svg',
      title: 'What is React Hooks and how to use it in 3 hours',
      authorAvatar:
        'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      authorName: 'Dngtnv',
      time: '2 days ago',
      likes: 96,
    },
    {
      icon: 'https://twemoji.maxcdn.com/v/latest/svg/1f4c8.svg',
      title: 'What is React Hooks and how to use it in 3 hours',
      authorAvatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      authorName: 'Ravix of 4horn',
      time: '3 hours ago',
      likes: 69,
    },
    {
      icon: 'https://twemoji.maxcdn.com/v/latest/svg/1faa6.svg',
      title: 'What is React Hooks and how to use it in 3 hours',
      authorAvatar:
        'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      authorName: 'Dngtnv',
      time: '2 days ago',
      likes: 96,
    },
    {
      icon: 'https://twemoji.maxcdn.com/v/latest/svg/1f250.svg',
      title: 'What is React Hooks and how to use it in 3 hours',
      authorAvatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      authorName: 'Ravix of 4horn',
      time: '3 hours ago',
      likes: 69,
    },
    {
      icon: 'https://twemoji.maxcdn.com/v/latest/svg/1f3f3-fe0f-200d-1f308.svg',
      title: 'What is React Hooks and how to use it in 3 hours',
      authorAvatar:
        'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      authorName: 'Dngtnv',
      time: '2 days ago',
      likes: 96,
    },
    {
      icon: 'https://twemoji.maxcdn.com/v/latest/svg/1f1fb-1f1f3.svg',
      title: 'What is React Hooks and how to use it in 3 hours',
      authorAvatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      authorName: 'Ravix of 4horn',
      time: '3 hours ago',
      likes: 69,
    },
    {
      icon: 'https://twemoji.maxcdn.com/v/latest/svg/2696.svg',
      title: 'What is React Hooks and how to use it in 3 hours',
      authorAvatar:
        'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      authorName: 'Dngtnv',
      time: '2 days ago',
      likes: 96,
    },
    {
      icon: 'https://twemoji.maxcdn.com/v/latest/svg/1f30b.svg',
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
