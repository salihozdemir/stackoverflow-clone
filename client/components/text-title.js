import React from 'react'

import cn from 'classnames'

import styles from './text-title.module.css'

function TextTitle({ bold = false, children }) {
  return <h2 className={cn(styles.title, bold && styles.bold)}>{children}</h2>
}

export default TextTitle
