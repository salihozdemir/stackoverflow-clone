import React from 'react'

import Button from '../../button'
import { ArrowUp, ArrowDown } from '../../icons'

import styles from './answer-vote.module.css'

function AnswerVote({ score, isUpVoted, isDownVoted }) {
  return (
    <div className={styles.voteCell}>
      <Button className={styles.voteButton}>
        <ArrowUp className={isUpVoted ? styles.voted : ''} />
      </Button>
      <div className={styles.score}>{score}</div>
      <Button className={styles.voteButton}>
        <ArrowDown className={isDownVoted ? styles.voted : ''} />
      </Button>
    </div>
  )
}

export default AnswerVote
