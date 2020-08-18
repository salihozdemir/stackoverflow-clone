import React from 'react'

import styles from './tag-list.module.css'

const TagList = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}

export default TagList
