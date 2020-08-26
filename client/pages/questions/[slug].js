import React, { useEffect, useState } from 'react'
import Head from 'next/head'

import { publicFetch } from '../../util/fetcher'

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

const QuestionDetail = ({ questionId, title }) => {
  const [question, setQuestion] = useState(null)
  const [answers, setAnswers] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchQuestion = async () => {
      setLoading(true)
      const { data } = await publicFetch.get(`/question/${questionId}`)
      setQuestion(data)
      setAnswers(data.answers)
      setLoading(false)
    }

    fetchQuestion()
  }, [])

  return (
    <Layout extra={false}>
      <Head>
        <title>{title}</title>
      </Head>

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
                votes={question.votes}
                questionId={questionId}
                setQuestion={setQuestion}
              />
              <AnswerSummary
                tags={question.tags}
                author={question.author}
                created={question.created}
                questionId={questionId}
              >
                {question.text}
              </AnswerSummary>
              <CommentList questionId={questionId} setQuestion={setQuestion}>
                {question.comments.map(({ id, author, created, body }) => (
                  <CommentItem
                    key={id}
                    commentId={id}
                    questionId={questionId}
                    author={author.username}
                    isOwner={author.username === question.author.username}
                    created={created}
                    setQuestion={setQuestion}
                  >
                    {body}
                  </CommentItem>
                ))}
              </CommentList>
            </AnswerWrapper>

            {answers.length > 0 && (
              <AnswerContainer
                answers={answers}
                questionId={questionId}
                setAnswers={setAnswers}
                questionAuthor={question.author.username}
              />
            )}
            <AddAnswer
              tags={question.tags}
              setAnswers={setAnswers}
              id={questionId}
            />
          </>
        )}
      </DetailPageContainer>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const slug = context.params.slug
  const questionId = slug.split('-').shift()
  const title = slug
    ?.substr(slug.indexOf('-') + 1)
    .split('-')
    .join(' ')

  return {
    props: {
      questionId,
      title
    }
  }
}

export default QuestionDetail
