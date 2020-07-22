import React from 'react'

import styles from './body.module.css'

import cn from 'classnames'

function Body({ children }) {
  return <div className={cn(styles.body)}>{children}</div>
}

export default Body
