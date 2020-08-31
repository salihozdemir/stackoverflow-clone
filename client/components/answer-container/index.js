import React, { useState } from 'react'

import ButtonGroup from '../button-group'
import PostWrapper from '../post/post-wrapper'
import PostVote from '../post/post-vote'
import PostSummary from '../post/post-summary'
import CommentList from '../post/comment-list'
import CommentItem from '../post/comment-list/comment-item'

import styles from './answer-container.module.css'

const AnswerContainer = ({
  answers,
  questionId,
  setAnswers,
  questionAuthor
}) => {
  const [selected, setSelected] = useState('Votes')

  const handleSorting = () => {
    switch (selected) {
      case 'Votes':
        return (a, b) => b.score - a.score
      case 'Newest':
        return (a, b) => new Date(b.created) - new Date(a.created)
      case 'Oldest':
        return (a, b) => new Date(a.created) - new Date(b.created)
      default:
        break
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.fill}>
          <h2>{answers.length} Answers</h2>
        </div>
        <ButtonGroup
          buttons={['Votes', 'Newest', 'Oldest']}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
      {answers.length > 0 &&
        answers.sort(handleSorting()).map((answer) => (
          <PostWrapper key={answer.id}>
            <PostVote
              score={answer.score}
              votes={answer.votes}
              answerId={answer.id}
              questionId={questionId}
              setAnswers={setAnswers}
            />
            <PostSummary
              author={answer.author}
              created={answer.created}
              questionId={questionId}
              answerId={answer.id}
              setAnswers={setAnswers}
            >
              {answer.text}
            </PostSummary>
            <CommentList
              questionId={questionId}
              answerId={answer.id}
              setAnswers={setAnswers}
            >
              {answer.comments.map(({ id, author, created, body }) => (
                <CommentItem
                  key={id}
                  commentId={id}
                  questionId={questionId}
                  answerId={answer.id}
                  author={author.username}
                  isOwner={author.username === questionAuthor}
                  created={created}
                  setAnswers={setAnswers}
                >
                  {body}
                </CommentItem>
              ))}
            </CommentList>
          </PostWrapper>
        ))}
    </div>
  )
}

export default AnswerContainer
