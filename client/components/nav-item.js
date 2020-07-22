import React from 'react'

import cn from 'classnames'

import styles from './nav-item.module.css'

function NavItem({ children, selected, ...props }) {
  return (
    <a
      className={cn(styles.navItem, selected && styles.navItemSelected)}
      {...props}
    >
      {children}
    </a>
  )
}

export default NavItem
