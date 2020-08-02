import React from 'react'

import Layout from '../../components/Layout/layout'
import PageTitle from '../../components/PageTitle/page-title'
import QuestiondDetailContainer from '../../components/DetailPageContainer/question-detail-container'

const QuestionDetail = ({ slug }) => {
  return (
    <Layout extra={false}>
      <PageTitle title={slug} button />
      <QuestiondDetailContainer>Detail</QuestiondDetailContainer>
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
