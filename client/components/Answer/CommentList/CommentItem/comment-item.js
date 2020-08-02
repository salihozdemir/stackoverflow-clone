import React from 'react'
import Link from 'next/link'

import styles from './comment-item.module.css'

const CommentItem = () => {
  return (
    <div className={styles.commentContainer}>
      <p>asdasdasda</p>
      <span>–</span>
      <Link href="/users/[user]" as={`/users/salih`}>
        <a>salih</a>
      </Link>
    </div>
  )
}

export default CommentItem
