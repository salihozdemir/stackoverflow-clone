import styles from './nav-item.module.css'

import cn from 'classnames'

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
