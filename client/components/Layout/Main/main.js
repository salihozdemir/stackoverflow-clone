import React from 'react'

import styles from './main.module.css'

import cn from 'classnames'

function Main({ border = true, children }) {
  return (
    <div className={cn(styles.main, border && styles.border)}>{children}</div>
  )
}

export default Main
