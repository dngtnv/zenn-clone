import React from 'react'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  children?: React.ReactNode
  TagName: keyof JSX.IntrinsicElements
  width?: number
}

const Tooltip: React.FC<Props> = ({
  label,
  children,
  TagName,
  width,
}: Props) => {
  return (
    <TagName
      className={`group relative translate-y-[5px] before:pointer-events-none before:absolute before:bottom-auto before:left-1/2 before:top-full before:z-50 before:-translate-x-1/2 before:border-[6px] before:border-b-[7px] before:border-transparent before:border-b-[#1b1b1d] before:leading-[1.4] before:opacity-0 before:transition-opacity before:delay-300 before:duration-100 before:ease-in-out after:whitespace-normal focus-within:before:opacity-100 hover:before:opacity-100 ${
        width ? `after:w-[${width.toString()}px]` : `after:w-auto`
      } after:pointer-events-none after:absolute after:bottom-auto after:left-1/2 after:top-full after:z-50 after:mt-3 after:-translate-x-1/2 after:rounded-md after:bg-[#1b1b1d] after:py-[0.4em] after:px-[0.7em] after:text-center after:text-[11px] after:font-normal after:leading-[1.4] after:text-white after:opacity-0 after:transition-opacity after:delay-300 after:duration-100 after:ease-in-out after:content-[attr(aria-label)] focus-within:after:opacity-100 hover:after:opacity-100`}
      role={'tooltip'}
      aria-label={label}
    >
      {children}
    </TagName>
  )
}

export default Tooltip
