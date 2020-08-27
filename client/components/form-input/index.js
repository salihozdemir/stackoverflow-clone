import React from 'react'
import cn from 'classnames'

import { Alert } from '../icons'

import styles from './form-input.module.css'

const FormInput = ({
  label,
  inputInfo,
  hasError = false,
  errorMessage,
  ...props
}) => {
  return (
    <div className={styles.container}>
      <label id={label} className={styles.label}>
        {label}
        {inputInfo && <p className={styles.inputInfo}>{inputInfo}</p>}
        <div className={styles.inputContainer}>
          <input
            className={cn(styles.input, hasError && styles.hasError)}
            htmlFor={label}
            {...props}
          />
          {hasError && <Alert className={styles.alert} />}
        </div>
      </label>
      {hasError && <p className={styles.inputMessage}>{errorMessage}</p>}
    </div>
  )
}

export default FormInput
