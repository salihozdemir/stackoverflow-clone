import React from 'react'

import styles from './header.module.css'

import cn from 'classnames'

function Header({ children }) {
  return <div className={cn(styles.header)}>{children}</div>
}

export default Header
