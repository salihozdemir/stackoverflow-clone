import React from 'react'

import cn from 'classnames'

import styles from './textarea.module.css'

const TextArea = ({
  label,
  inputInfo,
  hasError,
  errorMessage,
  className,
  ...props
}) => {
  return (
    <div className={styles.container}>
      {label && <label className={styles.label}>{label}</label>}
      {inputInfo && <p className={styles.inputInfo}>{inputInfo}</p>}
      <textarea
        className={cn(styles.textarea, className, hasError && styles.hasError)}
        {...props}
      />
      {hasError && <p className={styles.errorMessage}>{errorMessage}</p>}
    </div>
  )
}

export default TextArea
