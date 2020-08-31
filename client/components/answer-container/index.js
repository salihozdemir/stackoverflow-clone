import React from 'react'

import ButtonGroup from '../button-group'

import styles from './answer-container.module.css'

const AnswerContainer = ({
  answerCount,
  answerSortType,
  setAnswerSortType,
  children
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.fill}>
          <h2>{answerCount} Answers</h2>
        </div>
        <ButtonGroup
          buttons={['Votes', 'Newest', 'Oldest']}
          selected={answerSortType}
          setSelected={setAnswerSortType}
        />
      </div>
      {children}
    </div>
  )
}

export default AnswerContainer
