import React from 'react'

import styles from './sidebar.module.css'

import cn from 'classnames'

import Navigation from '../navigation'

function Sidebar({ className, ...props }) {
  return (
    <div className={cn(styles.sidebar, className)} {...props}>
      <Navigation></Navigation>
    </div>
  )
}

export default Sidebar
