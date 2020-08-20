import React from 'react'
import cn from 'classnames'

import styles from './main.module.css'

const Main = ({ border = true, children }) => {
  return (
    <div className={cn(styles.main, border && styles.border)}>{children}</div>
  )
}

export default Main
