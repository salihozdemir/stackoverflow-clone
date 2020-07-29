import React from 'react'

import Tags from './Layout/tags'
import Main from './Layout/main'

import styles from './question-detail-container.module.css'

const QuestiondDetailContainer = ({ children }) => {
  return (
    <div className={styles.container}>
      <Main>{children}</Main>
      <Tags>Extra</Tags>
    </div>
  )
}

export default QuestiondDetailContainer
