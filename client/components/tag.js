import React from 'react'

import cn from 'classnames'

import styles from './tag.module.css'

const Tag = ({ href, children, className, ...props }) => {
  return (
    <a href={href} className={cn(styles.tag, className)} {...props}>
      {children}
    </a>
  )
}

export default Tag
