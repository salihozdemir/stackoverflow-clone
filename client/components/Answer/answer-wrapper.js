import React from 'react'

import styles from './answer-wrapper.module.css'

function AnswerWrapper({ children }) {
  return <div className={styles.layout}>{children}</div>
}

export default AnswerWrapper
