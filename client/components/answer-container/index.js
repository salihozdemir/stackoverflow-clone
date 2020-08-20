import React, { useState } from 'react'

import ButtonGroup from '../button-group'
import AnswerWrapper from '../answer/answer-wrapper'
import AnswerVote from '../answer/answer-vote'
import AnswerSummary from '../answer/answer-summary'
import CommentList from '../answer/comment-list'
import CommentItem from '../answer/comment-list/comment-item'

import styles from './answer-container.module.css'

const AnswerContainer = ({ answers, questionId, setAnswers }) => {
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
        answers
          .sort(handleSorting())
          .map(({ id, score, author, created, comments, text, votes }, index) => (
            <AnswerWrapper key={id}>
              <AnswerVote score={score} votes={votes} answerId={id} questionId={questionId} setAnswers={setAnswers} index={index}/>
              <AnswerSummary author={author} created={created}>
                {text}
              </AnswerSummary>
              <CommentList>
                {comments.map(({ id, author, created, body }) => (
                  <CommentItem
                    key={id}
                    author={author.username}
                    isOwner={author.username === question.author.username}
                    created={created}
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
