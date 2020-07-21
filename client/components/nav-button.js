import Button from './button'

import styles from './nav-button.module.css'

function NavButton({ children }) {
  return <Button className={styles.navButton}>{children}</Button>
}

export default NavButton
