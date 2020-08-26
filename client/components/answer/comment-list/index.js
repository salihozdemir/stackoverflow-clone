import React, { useState, useEffect } from 'react'

import AddComment from '../add-comment'

import styles from './comment-list.module.css'

const CommentList = ({
  children,
  questionId,
  answerId,
  setQuestion,
  setAnswers
}) => {
  const [showAddComment, setShowAddComment] = useState(false)
  const [visibleComments, setVisibleComments] = useState(children.slice(0, 3))
  const [difference, setDiffrence] = useState(null)
  
  useEffect(() => {
    setVisibleComments(children.slice(0,3))  
  }, [children])

  useEffect(() => {
    setDiffrence(children.length - visibleComments.length)
  }, [visibleComments])


  return (
    <div className={styles.commentCell}>
      {visibleComments}

      {difference > 0  ? (
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

      {showAddComment && (
        <AddComment
          questionId={questionId}
          answerId={answerId}
          setShowAddComment={setShowAddComment}
          setAnswers={setAnswers}
          setQuestion={setQuestion}
        />
      )}
    </div>
  )
}

export default CommentList
