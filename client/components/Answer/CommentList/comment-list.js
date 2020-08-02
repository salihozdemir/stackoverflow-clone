import React, { useState } from 'react'

import styles from './comment-list.module.css'

const CommentList = ({ children }) => {
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
        <a className={styles.addComment}>add comment</a>
      )}
    </div>
  )
}

export default CommentList
