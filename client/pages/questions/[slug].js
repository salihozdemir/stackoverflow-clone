import React, { useEffect, useState, useContext } from 'react'

import { publicFetch } from '../../util/fetcher'
import { AuthContext } from '../../store/auth'

import Layout from '../../components/layout'
import PageTitle from '../../components/page-title'
import DetailPageContainer from '../../components/detail-page-container'
import AnswerWrapper from '../../components/answer/answer-wrapper'
import AnswerVote from '../../components/answer/answer-vote'
import AnswerSummary from '../../components/answer/answer-summary'
import CommentList from '../../components/answer/comment-list'
import CommentItem from '../../components/answer/comment-list/comment-item'
import AnswerContainer from '../../components/answer-container'
import AddAnswer from '../../components/answer/add-answer'
import { Spinner } from '../../components/icons'

const QuestionDetail = ({ id, title }) => {
  const { authState } = useContext(AuthContext)

  const [question, setQuestion] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchQuestion = async () => {
      setLoading(true)
      try {
        const { data } = await publicFetch.get(`/question/${id}`)
        setQuestion(data)
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }

    fetchQuestion()
  }, [])

  const isUpVoted = (votes) => {
    return votes.find((v) => v.user === authState.userInfo?.id)?.vote === 1
  }

  const isDownVoted = (votes) => {
    return votes.find((v) => v.user === authState.userInfo?.id)?.vote === -1
  }

  return (
    <Layout extra={false}>
      <PageTitle title={title} button />
      <DetailPageContainer>
        {loading && (
          <div className="loading">
            <Spinner />
          </div>
        )}

        {!loading && (
          <>
            <AnswerWrapper borderBottom={false}>
              <AnswerVote
                score={question.score}
                isUpVoted={isUpVoted(question.votes)}
                isDownVoted={isDownVoted(question.votes)}
              />
              <AnswerSummary
                tags={question.tags}
                author={question.author}
                created={question.created}
              >
                {question.text}
              </AnswerSummary>
              <CommentList>
                {question.comments.map(({ id, author, created, body }) => (
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

            {question.answers.length > 0 && (
              <AnswerContainer
                answers={question.answers}
                isUpVoted={isUpVoted}
                isDownVoted={isDownVoted}
              />
            )}
            <AddAnswer tags={question.tags} id={id} />
          </>
        )}
      </DetailPageContainer>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const slug = context.params.slug
  const id = slug.split('-').shift()
  const title = slug
    ?.substr(slug.indexOf('-') + 1)
    .split('-')
    .join(' ')

  return {
    props: {
      id,
      title
    }
  }
}

export default QuestionDetail
