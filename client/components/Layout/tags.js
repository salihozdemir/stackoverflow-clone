import React from 'react'

import styles from './tags.module.css'

import cn from 'classnames'

function Tags({ children }) {
  return <div className={cn(styles.tags)}>{children}</div>
}

export default Tags
