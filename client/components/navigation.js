import NavButton from './nav-button'
import { World } from './icons'

import styles from './navigation.module.css'

function Navigation() {
  return (
    <nav className={styles.nav}>
      <NavButton>
        <World></World>
        <span>Stack Overflow</span>
      </NavButton>

      <NavButton>
        <span>Tags</span>
      </NavButton>

      <NavButton>
        <span>Users</span>
      </NavButton>
    </nav>
  )
}

export default Navigation
