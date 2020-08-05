import React, { useState } from 'react'

import AddComment from '../add-comment'

import styles from './comment-list.module.css'

const CommentList = ({ children }) => {
  const [showAddComment, setShowAddComment] = useState(false)
  const [visibleComments, setVisibleComments] = useState(children.slice(0, 3))
  const difference = children.length - visibleComments.length

  return (
    <div className={styles.commentCell}>
      {visibleComments}

      {difference > 0 ? (
        <a
          className={styles.showMore}
          onClick={() => setVisibleComments(children)}
        >
          show <b>{difference}</b> more comments
        </a>
      ) : (
        !showAddComment && (
          <a
            className={styles.addComment}
            onClick={() => setShowAddComment(true)}
          >
            add comment
          </a>
        )
      )}

      {showAddComment && <AddComment />}
    </div>
  )
}

export default CommentList
