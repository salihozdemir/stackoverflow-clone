import React from 'react'

import QuestionWrapper from '../components/question/question-wrapper'
import QuestionStats from '../components/question/question-stats'
import QuestionSummary from '../components/question/question-summary'

export default {
  title: 'Question'
}

export const Default = () => (
  <QuestionWrapper>
    <QuestionStats voteCount={21} answerCount={32} view={112} />
    <QuestionSummary
      title={
        'his is a free online calculator which counts the number of characters or letters in a text, useful for your tweets on Twitter, as well as a multitudee'
      }
      tags={['javascript', 'text']}
      author={'salihozdemir'}
      createdTime={'1 min ago'}
    >
      lorem ipsum question question question question question question question
      question'
    </QuestionSummary>
  </QuestionWrapper>
)
