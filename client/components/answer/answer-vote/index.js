import React from 'react'

import Button from '../../button'
import { ArrowUp, ArrowDown } from '../../icons'

import styles from './style.module.css'

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
