import React from 'react'

import cn from 'classnames'
import TAGS from '../../constants/tags'

import Tag from '../tag'

import styles from './extra.module.css'

function Extra() {
  return (
    <div className={cn(styles.container)}>
      <h4>Tags</h4>
      <div>
        {TAGS.map((tag) => (
          <Tag>{tag}</Tag>
        ))}
      </div>
    </div>
  )
}

export default Extra
