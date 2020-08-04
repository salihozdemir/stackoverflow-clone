import React from 'react'

import styles from './question-wrapper.module.css'

function QuestionWrapper({ children }) {
  return <div className={styles.container}>{children}</div>
}

export default QuestionWrapper
