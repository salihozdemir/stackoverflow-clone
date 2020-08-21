import React from 'react'
import cn from 'classnames'

import Navigation from '../../navigation'

import styles from './sidebar.module.css'

const Sidebar = ({ className, ...props }) => {
  return (
    <nav className={cn(styles.sidebar, className)} {...props}>
      <Navigation />
    </nav>
  )
}

export default Sidebar
