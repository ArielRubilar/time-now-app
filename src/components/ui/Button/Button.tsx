import React, { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  styleType?: 'primary' | 'secondary',
  full?: boolean
}

export const buttonStyles = ( type: 'primary'| 'secondary' , full?: boolean) => {
  const baseStyles = `
      text-sm rounded font-bold p-3 transition-colors text-center 
      transition-bg duration-200
      inline-flex items-center 
      inline-flex items-center justify-center
      ${Boolean(full) ?  'w-full': ''  }
  ` 

  const typeStyles: Record<'primary'| 'secondary'| 'default' , string> = {
    'primary': 'text-tn-neutral-000 bg-tn-primary-500 hover:bg-tn-primary-400 ',
    'secondary': 'hover:bg-tn-neutral-100',
    'default': 'text-tn-neutral-000 bg-tn-primary-500 hover:bg-tn-primary-400'
  }

  return `${baseStyles} ${typeStyles[type] ?? typeStyles.default} `
}

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({styleType= 'primary' , className = '' , full ,...props}: ButtonProps , ref) => {
  return (
    <button
      ref={ref}
      className={`${buttonStyles(styleType, full)} ${className} `}
     {...props}
    />
  )
})

Button.displayName = 'Button'