import React from 'react'

import TAGS from '../../constants/tags'

import Tag from '../tag'

import styles from './tags-view.module.css'

const tagList = () => {
  return (
    <div className={styles.container}>
      {TAGS.map((tag) => (
        <div className={styles.card} key={tag}>
          <div className={styles.header}>
            <Tag>{tag}</Tag>
          </div>
          <p>
            lorem ipsum lorem lorem lorem lorem ipsum lorem lorem lorem lorem
            ipsum lorem lorem lorem lorem ipsum lorem lorem lorem lorem ipsum
            lorem lorem lorem
          </p>
        </div>
      ))}
    </div>
  )
}

export default tagList
