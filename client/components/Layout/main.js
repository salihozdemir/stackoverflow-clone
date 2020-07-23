import React from 'react'

import styles from './main.module.css'

import cn from 'classnames'

function Main({ children }) {
  return <div className={cn(styles.main)}>{children}</div>
}

export default Main
