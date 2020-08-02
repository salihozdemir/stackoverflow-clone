import React from 'react'

import Button from '../../Button/button'
import { ArrowUp, ArrowDown } from '../../Icons'

import styles from './answer-vote.module.css'

function AnswerVote({ score }) {
  return (
    <div className={styles.voteCell}>
      <Button className={styles.voteButton}>
        <ArrowUp />
      </Button>
      <div className={styles.score}>{score}</div>
      <Button className={styles.voteButton}>
        <ArrowDown />
      </Button>
    </div>
  )
}

export default AnswerVote
