import React from 'react'

import CommentItem from './CommentItem/comment-item'

import styles from './comment-list.module.css'

const CommentList = () => {
  return (
    <div className={styles.commentCell}>
      <CommentItem></CommentItem>
      <CommentItem></CommentItem>
      <CommentItem></CommentItem>
      <p>add comment</p>
    </div>
  )
}

export default CommentList
