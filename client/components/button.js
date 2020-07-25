import React from 'react'

import cn from 'classnames'

import styles from './button.module.css'

function Button({
  primary,
  secondary,
  full = false,
  children,
  className,
  ...props
}) {
  return (
    <a
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
    </a>
  )
}

export default Button
