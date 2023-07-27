import { forwardRef, type BaseHTMLAttributes } from 'react'

interface SectionTitleProps extends BaseHTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
}

export const SectionTitle = forwardRef<
HTMLHeadingElement,
SectionTitleProps
>(({ as: Component = 'h1', className = '', ...props }: SectionTitleProps, ref) => {
  return (
        <Component ref={ref} {...props} className={`font-extrabold text-4xl   text-tn-primary-500  ${className}`}/>
  )
})

SectionTitle.displayName = 'SectionTitle'
