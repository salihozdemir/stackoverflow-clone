import React from 'react'
import cn from 'classnames'

import TagsInput from 'react-tagsinput'
import { Alert } from '../icons'

import styles from './tag-input.module.css'

function FormInput({
  label,
  inputInfo,
  hasError = false,
  errorMessage,
  tags,
  setTags
}) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      {inputInfo && <p className={styles.inputInfo}>{inputInfo}</p>}
      <div className={styles.inputContainer}>
        <TagsInput
          value={tags}
          onChange={setTags}
          onlyUnique
          className={cn('react-tagsinput', hasError && styles.error)}
          focusedClassName={styles.inputFocused}
        />
        {hasError && <Alert className={styles.alert} />}
      </div>
      {hasError && <p className={styles.errorMessage}>{errorMessage}</p>}
    </div>
  )
}

export default FormInput
