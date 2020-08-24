import React, { useContext } from 'react'

import { AuthContext } from '../../../store/auth'
import { FetchContext } from '../../../store/fetch'
import ModalContext from '../../../store/modal'

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
  const { authState, isAuthenticated } = useContext(AuthContext)
  const { authAxios } = useContext(FetchContext)
  const { handleComponentVisible } = useContext(ModalContext)

  const isUpVoted = () => {
    return votes.find((v) => v.user === authState.userInfo?.id)?.vote === 1
  }

  const isDownVoted = () => {
    return votes.find((v) => v.user === authState.userInfo?.id)?.vote === -1
  }

  const upVote = async () => {
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
  }

  const downVote = async () => {
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
  }

  const unVote = async () => {
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
  }

  return (
    <div className={styles.voteCell}>
      <Button
        className={styles.voteButton}
        onClick={() =>
          isAuthenticated()
            ? isUpVoted()
              ? unVote()
              : upVote()
            : handleComponentVisible(true, 'login')
        }
      >
        <ArrowUp className={isUpVoted() ? styles.voted : ''} />
      </Button>
      <div className={styles.score}>{score}</div>
      <Button
        className={styles.voteButton}
        onClick={() =>
          isAuthenticated()
            ? isDownVoted()
              ? unVote()
              : downVote()
            : handleComponentVisible(true, 'login')
        }
      >
        <ArrowDown className={isDownVoted() ? styles.voted : ''} />
      </Button>
    </div>
  )
}

export default AnswerVote
