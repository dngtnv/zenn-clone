import { forwardRef } from 'react'
import Link from 'next/link'

interface Props {
  href: any
  children?: React.ReactNode
}
type MyProps<T extends keyof JSX.IntrinsicElements> = JSX.IntrinsicElements[T]

declare function NextLinkFn(props: MyProps<any>): JSX.Element

const NextLink: React.FC<any> = forwardRef<HTMLAnchorElement, MyProps<any>>(
  (props, ref) => {
    let { href, children, ...rest }: Props = props
    return (
      <Link href={href}>
        <a ref={ref} {...rest}>
          {children}
        </a>
      </Link>
    )
  }
) as typeof NextLinkFn
NextLink.displayName = 'NextLink'

export default NextLink
