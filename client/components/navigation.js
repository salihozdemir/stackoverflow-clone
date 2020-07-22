import NavItem from './nav-item'
import { World } from './icons'

import styles from './navigation.module.css'

function Navigation({ selectedKey }) {
  return (
    <nav className={styles.nav}>
      <NavItem selected={selectedKey == 0}>
        <World />
        <span>Stack Overflow</span>
      </NavItem>

      <NavItem selected={selectedKey == 1}>
        <span>Tags</span>
      </NavItem>

      <NavItem selected={selectedKey == 2}>
        <span>Users</span>
      </NavItem>
    </nav>
  )
}

export default Navigation
