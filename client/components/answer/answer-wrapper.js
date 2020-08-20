import React from 'react'
import cn from 'classnames'

import styles from './answer-wrapper.module.css'

const AnswerWrapper = ({ borderBottom = true, children }) => {
  return (
    <div className={cn(styles.layout, borderBottom && styles.borderBottom)}>
      {children}
    </div>
  )
}

export default AnswerWrapper
