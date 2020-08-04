import React from 'react'

import cn from 'classnames'
import TAGS from '../../../constants/tags'

import Tag from '../../tag'

import styles from './style.module.css'

function Extra() {
  return (
    <div className={cn(styles.container)}>
      <h4>Tags</h4>
      <div>
        {TAGS.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </div>
  )
}

export default Extra
