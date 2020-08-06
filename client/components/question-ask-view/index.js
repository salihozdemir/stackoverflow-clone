import React from 'react'

import styles from './question-ask-view.module.css'

const QuestionAskView = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <div className={styles.topForm}>
          <h1>Ask a public question</h1>
        </div>
        {children}
      </div>
    </div>
  )
}

export default QuestionAskView
