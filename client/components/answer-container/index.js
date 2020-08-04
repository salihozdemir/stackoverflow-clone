import React from 'react'

import ButtonGroup from '../button-group'

import styles from './style.module.css'

const AnswerContainer = ({ answerCount, children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.fill}>
          <h2>{answerCount} Answers</h2>
        </div>
        <ButtonGroup buttons={['Votes', 'Newest', 'Oldest']} />
      </div>
      {children}
    </div>
  )
}

export default AnswerContainer
