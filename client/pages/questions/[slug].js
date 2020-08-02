import React from 'react'

import Layout from '../../components/Layout/layout'
import PageTitle from '../../components/PageTitle/page-title'
import QuestiondDetailContainer from '../../components/DetailPageContainer/question-detail-container'

import AnswerWrapper from '../../components/Answer/answer-wrapper'
import AnswerVote from '../../components/Answer/AnswerVote/answer-vote'
import AnswerSummary from '../../components/Answer/AnswerSummary/answer-summary'
import CommentList from '../../components/Answer/CommentList/comment-list'
import CommentItem from '../../components/Answer/CommentList/CommentItem/comment-item'

const QuestionDetail = ({ slug }) => {
  return (
    <Layout extra={false}>
      <PageTitle title={slug} button />
      <QuestiondDetailContainer>
        <AnswerWrapper>
          <AnswerVote score={12} />
          <AnswerSummary></AnswerSummary>
          <CommentList>
            <CommentItem key={1}>
              Don't forget to do a git fetch --all --prune on other machines
              after deleting the remote branch on the server. ||| After deleting
              the local branch with git branch -d and deleting the remote branch
              with git push origin --delete other machines may still have
              "obsolete tracking branches" (to see them do git branch -a). To
              get rid of these do git fetch --all --prune
            </CommentItem>
            <CommentItem key={2}>
              deneme Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laboriosam explicabo pariatur deserunt facere earum perferendis
              architecto natus, minima qui commodi inventore veritatis nesciunt
              sed at dolorum consectetur rem iste. Vero.
            </CommentItem>
            <CommentItem key={3}>
              deneme Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laboriosam explicabo pariatur deserunt facere earum perferendis
              architecto natus, minima qui commodi inventore veritatis nesciunt
              sed at dolorum consectetur rem iste. Vero.
            </CommentItem>
            <CommentItem key={4}>
              deneme Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laboriosam explicabo pariatur deserunt facere earum perferendis
              architecto natus, minima qui commodi inventore veritatis nesciunt
              sed at dolorum consectetur rem iste. Vero.
            </CommentItem>
          </CommentList>
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
