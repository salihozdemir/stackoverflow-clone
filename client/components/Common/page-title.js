import React from 'react'

import Button from './button'

import styles from './page-title.module.css'

function PageTitle({ title, button, children }) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>{title}</h1>
        {button && <Button primary>Ask Question</Button>}
      </div>
      <p className={styles.summary}>{children}</p>
    </div>
  )
}

export default PageTitle
