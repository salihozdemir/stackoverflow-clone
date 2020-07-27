import React from 'react'

import cn from 'classnames'

import { Alert } from '../icons'

import styles from './form-input.module.css'

function FormInput({ label, hasError = false, errorMessage }) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <div className={styles.inputContainer}>
        <input className={cn(styles.input, hasError && styles.hasError)} />
        {hasError && <Alert className={styles.alert} />}
      </div>
      {hasError && <p className={styles.inputMessage}>{errorMessage}</p>}
    </div>
  )
}

export default FormInput
