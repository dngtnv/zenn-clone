import { forwardRef } from 'react'
import Link from 'next/link'

interface Props {
  href?: any
  className?: string
  children?: React.ReactNode
}

const NextLink: React.FC = forwardRef<HTMLAnchorElement>((props, ref) => {
  let { href, className, children, ...rest }: Props = props
  return (
    <Link href={href}>
      <a ref={ref} className={className} {...rest}>
        {children}
      </a>
    </Link>
  )
})

NextLink.displayName = 'NextLink'

export default NextLink
