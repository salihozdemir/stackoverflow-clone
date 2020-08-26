import React, { useState } from 'react'

import ButtonGroup from '../button-group'
import AnswerWrapper from '../answer/answer-wrapper'
import AnswerVote from '../answer/answer-vote'
import AnswerSummary from '../answer/answer-summary'
import CommentList from '../answer/comment-list'
import CommentItem from '../answer/comment-list/comment-item'

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
          <AnswerWrapper key={answer.id}>
            <AnswerVote
              score={answer.score}
              votes={answer.votes}
              answerId={answer.id}
              questionId={questionId}
              setAnswers={setAnswers}
            />
            <AnswerSummary
              author={answer.author}
              created={answer.created}
              questionId={questionId}
              answerId={answer.id}
              setAnswers={setAnswers}
            >
              {answer.text}
            </AnswerSummary>
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
          </AnswerWrapper>
        ))}
    </div>
  )
}

export default AnswerContainer
