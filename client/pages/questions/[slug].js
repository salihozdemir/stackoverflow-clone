import React from 'react'

import Layout from '../../components/Layout/layout'
import PageTitle from '../../components/PageTitle/page-title'
import QuestiondDetailContainer from '../../components/DetailPageContainer/question-detail-container'

import AnswerWrapper from '../../components/Answer/answer-wrapper'
import AnswerVote from '../../components/Answer/AnswerVote/answer-vote'
import AnswerSummary from '../../components/Answer/AnswerSummary/answer-summary'
import CommentList from '../../components/Answer/CommentList/comment-list'

const QuestionDetail = ({ slug }) => {
  return (
    <Layout extra={false}>
      <PageTitle title={slug} button />
      <QuestiondDetailContainer>
        <AnswerWrapper>
          <AnswerVote score={12} />
          <AnswerSummary></AnswerSummary>
          <CommentList />
        </AnswerWrapper>
      </QuestiondDetailContainer>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const slug = context.params.slug

  return {
    props: {
      slug
    }
  }
}

export default QuestionDetail
