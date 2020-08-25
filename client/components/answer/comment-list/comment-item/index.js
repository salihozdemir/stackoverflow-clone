import React from 'react'
import Link from 'next/link'
import format from 'date-fns/format'

import styles from './comment-item.module.css'

const CommentItem = ({ author, created, isOwner, children }) => {
  return (
    <div className={styles.commentContainer}>
      <p>{children}</p> – &nbsp;
      <Link href="/users/[user]" as={`/users/${author}`}>
        <a className={isOwner ? styles.owner: undefined}>salih</a>
      </Link>
      <p className={styles.dateText}>
        {' '}
        {format(new Date(created), 'dd MMM p')}
      </p>
    </div>
  )
}

export default CommentItem
