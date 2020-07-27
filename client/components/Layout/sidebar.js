import React from 'react'

import styles from './sidebar.module.css'

import cn from 'classnames'

import Navigation from '../Navigation/navigation'

function Sidebar({ className, ...props }) {
  return (
    <nav className={cn(styles.sidebar, className)} {...props}>
      <Navigation />
    </nav>
  )
}

export default Sidebar
