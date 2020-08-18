import React from 'react'

import Tag from '../../tag'

import styles from './tag-item.module.css'

const TagItem = ({ count, children }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <Tag>{children}</Tag>
      </div>
      <p>{count} questions</p>
    </div>
  )
}

export default TagItem
