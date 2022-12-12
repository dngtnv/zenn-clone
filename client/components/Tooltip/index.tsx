import React from 'react'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  children?: React.ReactNode
  tagName: keyof JSX.IntrinsicElements
  width?: number
}

const Tooltip: React.FC<Props> = (props: Props) => {
  return (
    <props.tagName
      className={`relative group translate-y-[5px] before:bottom-auto before:pointer-events-none before:left-1/2 before:top-full before:-translate-x-1/2 before:border-[6px] before:border-transparent before:border-b-[7px] before:border-b-[#1b1b1d] before:opacity-0 before:transition-opacity before:duration-100 before:ease-in-out before:delay-300 before:absolute before:z-50 before:leading-[1.4] hover:before:opacity-100 after:whitespace-normal ${
        props.width ? `after:w-[${props.width}px]` : null
      } after:bottom-auto after:left-1/2 after:top-full after:-translate-x-1/2 after:mt-3 after:pointer-events-none after:bg-[#1b1b1d] after:text-white after:rounded-md after:content-[attr(aria-label)] after:text-[11px] after:font-normal after:py-[0.4em] after:px-[0.7em] after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-100 after:delay-300 after:ease-in-out after:absolute after:z-50 after:leading-[1.4] after:text-center`}
      role={'tooltip'}
      aria-label={props.label}
    >
      {props.children}
    </props.tagName>
  )
}

export default Tooltip
