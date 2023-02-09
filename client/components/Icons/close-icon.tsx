import React from 'react'

export default function SvgClose({ size = 15 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 27 27"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m16.3 13.5 9.1-9.1c.3-.3.3-.9 0-1.2l-1.6-1.6c-.3-.3-.9-.3-1.2 0l-9.1 9.1-9.1-9.1c-.4-.4-.9-.4-1.2 0L1.6 3.2c-.4.3-.4.8 0 1.2l9.1 9.1-9.1 9.1c-.3.3-.3.9 0 1.2l1.6 1.6c.3.3.9.3 1.2 0l9.1-9.1 9.1 9.1c.3.3.9.3 1.2 0l1.6-1.6c.3-.3.3-.9 0-1.2l-9.1-9.1z"
        fill="currentColor"
      />
    </svg>
  )
}
