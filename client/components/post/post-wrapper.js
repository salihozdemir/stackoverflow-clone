import React from 'react'
import cn from 'classnames'

import styles from './post-wrapper.module.css'

const PostWrapper = ({ borderBottom = true, children }) => {
  return (
    <div className={cn(styles.layout, borderBottom && styles.borderBottom)}>
      {children}
    </div>
  )
}

export default PostWrapper
