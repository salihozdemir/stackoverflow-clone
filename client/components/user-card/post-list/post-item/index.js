import React from 'react'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'

import styles from './post-item.module.css'

const PostItem = ({ vote, title, created }) => {
  return (
    <div className={styles.container}>
      <div className={styles.vote}>{vote}</div>
      <a className={styles.title}>{title}</a>
      <div className={styles.created}>
        {formatDistanceToNowStrict(new Date(created), {
          addSuffix: true
        })}
      </div>
    </div>
  )
}

export default PostItem
