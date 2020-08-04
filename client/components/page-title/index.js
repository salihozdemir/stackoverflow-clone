import React from 'react'

import cn from 'classnames'

import Button from '../button'

import styles from './page-title.module.css'

function PageTitle({ title, button, borderBottom = true, children }) {
  return (
    <div className={cn(styles.container, borderBottom && styles.borderBottom)}>
      <div className={styles.title}>
        <h1>{title}</h1>
        {button && <Button primary>Ask Question</Button>}
      </div>
      {children && <p className={styles.summary}>{children}</p>}
    </div>
  )
}

export default PageTitle
