import React, { useState, useContext } from 'react'

import { AuthContext } from '../../../store/auth'
import { FetchContext } from '../../../store/fetch'

import Button from '../../button'
import { ArrowUp, ArrowDown } from '../../icons'

import styles from './answer-vote.module.css'

function AnswerVote({ score, votes, questionId, answerId }) {
  const { authState } = useContext(AuthContext)
  const { authAxios } = useContext(FetchContext)

  const [dynmaicScore, setDynamicScore] = useState(score)
  const [voteList, setVoteList] = useState(votes)

  const isUpVoted = () => {
    return voteList.find((v) => v.user === authState.userInfo?.id)?.vote === 1
  }

  const isDownVoted = () => {
    return voteList.find((v) => v.user === authState.userInfo?.id)?.vote === -1
  }

  const upVote = async () => {
    try {
      const { data } = await authAxios.get(
        answerId ? `/answer/upvote/${questionId}/${answerId}` : `/question/upvote/${questionId}`
      )
      setVoteList(data.votes)
      setDynamicScore(data.score)
    } catch (error) {
      console.log(error)
    }
  }

  const downVote = async () => {
    try {
      const { data } = await authAxios.get(
        answerId
          ? `/answer/downvote/${questionId}/${answerId}`
          : `/question/downvote/${questionId}`
      )
      setVoteList(data.votes)
      setDynamicScore(data.score)
    } catch (error) {
      console.log(error)
    }
  }

  const unVote = async () => {
    try {
      const { data } = await authAxios.get(
        answerId ? `/answer/unvote/${questionId}/${answerId}` : `/question/unvote/${questionId}`
      )
      setVoteList(data.votes)
      setDynamicScore(data.score)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={styles.voteCell}>
      <Button className={styles.voteButton} onClick={() => (isUpVoted() ? unVote() : upVote())}>
        <ArrowUp className={isUpVoted() ? styles.voted : ''} />
      </Button>
      <div className={styles.score}>{dynmaicScore}</div>
      <Button className={styles.voteButton} onClick={() => (isDownVoted() ? unVote() : downVote())}>
        <ArrowDown className={isDownVoted() ? styles.voted : ''} />
      </Button>
    </div>
  )
}

export default AnswerVote
