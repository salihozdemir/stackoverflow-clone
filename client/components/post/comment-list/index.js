import React, { useState, useEffect, useContext } from 'react'

import { AuthContext } from '../../../store/auth'
import ModalContext from '../../../store/modal'

import AddComment from '../add-comment'

import styles from './comment-list.module.css'

const CommentList = ({
  children,
  questionId,
  answerId,
  setQuestion,
}) => {
  const { isAuthenticated } = useContext(AuthContext)
  const { handleComponentVisible } = useContext(ModalContext)

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
            onClick={() => isAuthenticated() ? setShowAddComment(true) : handleComponentVisible(true, 'signup')}
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
          setQuestion={setQuestion}
        />
      )}
    </div>
  )
}

export default CommentList
