import React from 'react'

export default function SvgLink(props: any) {
  return (
    <svg
      {...props}
      width='18'
      height='18'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 27 27'
    >
      <path
        fill='currentColor'
        d='M9.6 23.9c-3.6 0-6.5-3-6.5-6.6 0-1.7.7-3.4 1.9-4.6l2.3-2.3c.5-.4 1.2-.4 1.6.1.4.4.4 1 0 1.5l-2.3 2.3c-1.7 1.7-1.7 4.4 0 6.1s4.4 1.7 6.1 0l2.3-2.3c.5-.4 1.2-.4 1.6.1.4.4.4 1 0 1.5L14.3 22c-1.3 1.2-2.9 1.9-4.7 1.9zm1-6.4c-.6 0-1.1-.5-1.1-1.1 0-.3.1-.6.3-.8l5.8-5.8c.4-.4 1.1-.4 1.6 0 .4.4.4 1.1 0 1.6l-5.8 5.8c-.2.2-.5.3-.8.3zm8.3-.6c-.3 0-.6-.1-.8-.3-.4-.4-.4-1.1 0-1.6l2.3-2.3c1.7-1.7 1.7-4.4 0-6.1s-4.4-1.7-6.1 0L12 8.9c-.5.4-1.2.4-1.6-.1-.4-.4-.4-1 0-1.5L12.7 5c2.6-2.6 6.7-2.6 9.2 0s2.6 6.7 0 9.2l-2.3 2.4c-.2.2-.5.3-.7.3z'
      />
    </svg>
  )
}
