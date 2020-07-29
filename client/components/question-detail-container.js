import React from 'react'

import Extra from './Layout/extra'
import Main from './Layout/main'

import styles from './question-detail-container.module.css'

const QuestiondDetailContainer = ({ children }) => {
  return (
    <div className={styles.container}>
      <Main>{children}</Main>
      <Extra />
    </div>
  )
}

export default QuestiondDetailContainer
