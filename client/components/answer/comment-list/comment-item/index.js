import React from 'react'
import Link from 'next/link'

import styles from './style.module.css'

const CommentItem = ({ owner, children }) => {
  return (
    <div className={styles.commentContainer}>
      <p>{children}</p> – &nbsp;
      <Link href="/users/[user]" as={`/users/salih`}>
        <a className={owner && styles.owner}>salih</a>
      </Link>
    </div>
  )
}

export default CommentItem
