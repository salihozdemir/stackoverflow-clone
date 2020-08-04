import React from 'react'

import Extra from '../layout/extra'
import Main from '../layout/main'

import styles from './style.module.css'

const QuestiondDetailContainer = ({ children }) => {
  return (
    <div className={styles.container}>
      <Main border={false}>{children}</Main>
      <Extra />
    </div>
  )
}

export default QuestiondDetailContainer
