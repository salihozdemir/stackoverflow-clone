import React from 'react'

import Extra from '../Layout/Extra/extra'
import Main from '../Layout/Main/main'

import styles from './question-detail-container.module.css'

const QuestiondDetailContainer = ({ children }) => {
  return (
    <div className={styles.container}>
      <Main border={false}>{children}</Main>
      <Extra />
    </div>
  )
}

export default QuestiondDetailContainer
