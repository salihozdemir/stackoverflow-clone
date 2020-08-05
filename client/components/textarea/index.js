import React from 'react'

import cn from 'classnames'

import styles from './textarea.module.css'

const TextArea = ({ hasError, errorMessage, className, ...props }) => {
  return (
    <div>
      <textarea
        className={cn(styles.textarea, className, hasError && styles.hasError)}
        {...props}
      />
      {hasError && <p className={styles.errorMessage}>{errorMessage}</p>}
    </div>
  )
}

export default TextArea
