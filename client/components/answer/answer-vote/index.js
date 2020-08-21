import React, { useContext } from 'react'

import { AuthContext } from '../../../store/auth'
import { FetchContext } from '../../../store/fetch'

import Button from '../../button'
import { ArrowUp, ArrowDown } from '../../icons'

import styles from './answer-vote.module.css'

const AnswerVote = ({
  score,
  votes,
  questionId,
  answerId,
  setQuestion,
  setAnswers
}) => {
  const { authState } = useContext(AuthContext)
  const { authAxios } = useContext(FetchContext)

  const isUpVoted = () => {
    return votes.find((v) => v.user === authState.userInfo?.id)?.vote === 1
  }

  const isDownVoted = () => {
    return votes.find((v) => v.user === authState.userInfo?.id)?.vote === -1
  }

  const upVote = async () => {
    try {
      const { data } = await authAxios.get(
        answerId
          ? `/answer/upvote/${questionId}/${answerId}`
          : `/question/upvote/${questionId}`
      )
      if (answerId) {
        setAnswers((prevState) => {
          return prevState.map((el) => (el.id === answerId ? data : el))
        })
      } else {
        setQuestion((prevState) => ({
          ...prevState,
          votes: data.votes,
          score: data.score
        }))
      }
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
      if (answerId) {
        setAnswers((prevState) => {
          return prevState.map((el) => (el.id === answerId ? data : el))
        })
      } else {
        setQuestion((prevState) => ({
          ...prevState,
          votes: data.votes,
          score: data.score
        }))
      }
    } catch (error) {
      console.log(error)
    }
  }

  const unVote = async () => {
    try {
      const { data } = await authAxios.get(
        answerId
          ? `/answer/unvote/${questionId}/${answerId}`
          : `/question/unvote/${questionId}`
      )
      if (answerId) {
        setAnswers((prevState) => {
          return prevState.map((el) => (el.id === answerId ? data : el))
        })
      } else {
        setQuestion((prevState) => ({
          ...prevState,
          votes: data.votes,
          score: data.score
        }))
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={styles.voteCell}>
      <Button
        className={styles.voteButton}
        onClick={() => (isUpVoted() ? unVote() : upVote())}
      >
        <ArrowUp className={isUpVoted() ? styles.voted : ''} />
      </Button>
      <div className={styles.score}>{score}</div>
      <Button
        className={styles.voteButton}
        onClick={() => (isDownVoted() ? unVote() : downVote())}
      >
        <ArrowDown className={isDownVoted() ? styles.voted : ''} />
      </Button>
    </div>
  )
}

export default AnswerVote
