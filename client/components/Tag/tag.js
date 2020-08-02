import React from 'react'
import Link from 'next/link'

import cn from 'classnames'

import styles from './tag.module.css'

const Tag = ({ children, className, ...props }) => {
  return (
    <Link href="/questions/tagged/[tag]" as={`/questions/tagged/${children}`}>
      <a className={cn(styles.tag, className)} {...props}>
        {children}
      </a>
    </Link>
  )
}

export default Tag
