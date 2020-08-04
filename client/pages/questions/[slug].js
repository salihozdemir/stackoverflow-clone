import React from 'react'

import Layout from '../../components/layout'
import PageTitle from '../../components/page-title'
import DetailPageContainer from '../../components/detail-page-container'

import AnswerWrapper from '../../components/answer/answer-wrapper'
import AnswerVote from '../../components/answer/answer-vote'
import AnswerSummary from '../../components/answer/answer-summary'
import CommentList from '../../components/answer/comment-list'
import CommentItem from '../../components/answer/comment-list/comment-item'
import AnswerContainer from '../../components/answer-container'

const QuestionDetail = ({ slug }) => {
  return (
    <Layout extra={false}>
      <PageTitle title={slug} button />
      <DetailPageContainer>
        <AnswerWrapper borderBottom={false}>
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
        <AnswerContainer answerCount={10}>
          <AnswerWrapper>
            <AnswerVote score={12} />
            <AnswerSummary></AnswerSummary>
            <CommentList>
              <CommentItem key={1}>
                Don't forget to do a git fetch --all --prune on other machines
                after deleting the remote branch on the server. ||| After
                deleting the local branch with git branch -d and deleting the
                remote branch with git push origin --delete other machines may
                still have "obsolete tracking branches" (to see them do git
                branch -a). To get rid of these do git fetch --all --prune
              </CommentItem>
              <CommentItem key={2}>
                deneme Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laboriosam explicabo pariatur deserunt facere earum perferendis
                architecto natus, minima qui commodi inventore veritatis
                nesciunt sed at dolorum consectetur rem iste. Vero.
              </CommentItem>
              <CommentItem key={3}>
                deneme Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laboriosam explicabo pariatur deserunt facere earum perferendis
                architecto natus, minima qui commodi inventore veritatis
                nesciunt sed at dolorum consectetur rem iste. Vero.
              </CommentItem>
              <CommentItem key={4}>
                deneme Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laboriosam explicabo pariatur deserunt facere earum perferendis
                architecto natus, minima qui commodi inventore veritatis
                nesciunt sed at dolorum consectetur rem iste. Vero.
              </CommentItem>
            </CommentList>
          </AnswerWrapper>
          <AnswerWrapper>
            <AnswerVote score={12} />
            <AnswerSummary></AnswerSummary>
            <CommentList>
              <CommentItem key={1}>
                Don't forget to do a git fetch --all --prune on other machines
                after deleting the remote branch on the server. ||| After
                deleting the local branch with git branch -d and deleting the
                remote branch with git push origin --delete other machines may
                still have "obsolete tracking branches" (to see them do git
                branch -a). To get rid of these do git fetch --all --prune
              </CommentItem>
              <CommentItem key={2}>
                deneme Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laboriosam explicabo pariatur deserunt facere earum perferendis
                architecto natus, minima qui commodi inventore veritatis
                nesciunt sed at dolorum consectetur rem iste. Vero.
              </CommentItem>
              <CommentItem key={3}>
                deneme Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laboriosam explicabo pariatur deserunt facere earum perferendis
                architecto natus, minima qui commodi inventore veritatis
                nesciunt sed at dolorum consectetur rem iste. Vero.
              </CommentItem>
              <CommentItem key={4}>
                deneme Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laboriosam explicabo pariatur deserunt facere earum perferendis
                architecto natus, minima qui commodi inventore veritatis
                nesciunt sed at dolorum consectetur rem iste. Vero.
              </CommentItem>
            </CommentList>
          </AnswerWrapper>
          <AnswerWrapper>
            <AnswerVote score={12} />
            <AnswerSummary></AnswerSummary>
            <CommentList>
              <CommentItem key={1}>
                Don't forget to do a git fetch --all --prune on other machines
                after deleting the remote branch on the server. ||| After
                deleting the local branch with git branch -d and deleting the
                remote branch with git push origin --delete other machines may
                still have "obsolete tracking branches" (to see them do git
                branch -a). To get rid of these do git fetch --all --prune
              </CommentItem>
              <CommentItem key={2}>
                deneme Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laboriosam explicabo pariatur deserunt facere earum perferendis
                architecto natus, minima qui commodi inventore veritatis
                nesciunt sed at dolorum consectetur rem iste. Vero.
              </CommentItem>
              <CommentItem key={3}>
                deneme Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laboriosam explicabo pariatur deserunt facere earum perferendis
                architecto natus, minima qui commodi inventore veritatis
                nesciunt sed at dolorum consectetur rem iste. Vero.
              </CommentItem>
              <CommentItem key={4}>
                deneme Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laboriosam explicabo pariatur deserunt facere earum perferendis
                architecto natus, minima qui commodi inventore veritatis
                nesciunt sed at dolorum consectetur rem iste. Vero.
              </CommentItem>
            </CommentList>
          </AnswerWrapper>
        </AnswerContainer>
      </DetailPageContainer>
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
