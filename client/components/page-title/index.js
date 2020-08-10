import React from 'react'
import Link from 'next/link'

import cn from 'classnames'

import Button from '../button'

import styles from './page-title.module.css'

function PageTitle({ title, button, borderBottom = true, children }) {
  return (
    <div className={cn(styles.container, borderBottom && styles.borderBottom)}>
      <div className={styles.title}>
        <h1>{title}</h1>
        <div className={styles.buttonContainer}>
          {button && (
            <Button href="/questions/ask" primary>
              Ask Question
            </Button>
          )}
        </div>
      </div>
      {children && <p className={styles.summary}>{children}</p>}
    </div>
  )
}

export default PageTitle
