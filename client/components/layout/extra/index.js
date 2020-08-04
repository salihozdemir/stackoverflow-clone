import React from 'react'

import TAGS from '../../../constants/tags'

import Tag from '../../tag'

import styles from './style.module.css'

function Extra() {
  return (
    <div className={styles.container}>
      <div className={styles.tagContainer}>
        <h4>Tags</h4>
        <div>
          {TAGS.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Extra
