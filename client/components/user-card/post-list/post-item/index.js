import React from 'react'
import Link from 'next/link'
import slug from 'slug'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'

import styles from './post-item.module.css'

const PostItem = ({ vote, title, created, id }) => {
  return (
    <div className={styles.container}>
      <div className={styles.vote}>{vote}</div>
      <Link href="/questions/[slug]" as={`/questions/${id}-${slug(title)}`}>
        <a className={styles.title}>{title}</a>
      </Link>
      <div className={styles.created}>
        {formatDistanceToNowStrict(new Date(created), {
          addSuffix: true
        })}
      </div>
    </div>
  )
}

export default PostItem
