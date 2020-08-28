import React from 'react'
import Link from 'next/link'
import cn from 'classnames'

import styles from './tag.module.css'

const Tag = ({ children, className, count, ...props }) => {
  return count ? (
    <div>
      <Link href={{ pathname: '/', query: { tag: children } }}>
        <a className={cn(styles.tag, className)} {...props}>
          {children}
        </a>
      </Link>
      <span className={styles.multiplier}>×</span>
      &nbsp;
      <span className={styles.count}>{count}</span>
    </div>
  ) : (
    <Link href={{ pathname: '/', query: { tag: children } }}>
      <a className={cn(styles.tag, className)} {...props}>
        {children}
      </a>
    </Link>
  )
}

export default Tag
