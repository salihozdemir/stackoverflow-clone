import React from 'react'
import Link from 'next/link'
import cn from 'classnames'

import styles from './button.module.css'

function LinkButton({ href, children, ...props }) {
  return (
    <Link href={href}>
      <a {...props}>{children}</a>
    </Link>
  )
}

function BaseButton({ children, ...props }) {
  return (
    <button type="button" {...props}>
      {children}
    </button>
  )
}

function Button({
  primary,
  secondary,
  full = false,
  children,
  className,
  ...props
}) {
  const Comp = props.href ? LinkButton : BaseButton
  return (
    <Comp
      className={cn(
        styles.button,
        primary && styles.primary,
        secondary && styles.secondary,
        full && styles.full,
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}

export default Button
