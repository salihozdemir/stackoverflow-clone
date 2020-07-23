import React from 'react'

import styles from './header.module.css'

import cn from 'classnames'

import Button from '../button'
import { Menu } from '../icons'

function Header({ className, ...props }) {
  return (
    <header className={cn(styles.header, className)} {...props}>
      <div className={styles.container}>
        <Button className={styles.menu}>
          <Menu />
        </Button>
        <Button className={styles.logo}>
          <span></span>
        </Button>
        <div style={{ flex: 1 }}></div>
        <Button className={styles.auth} secondary>
          Login
        </Button>
        <Button className={styles.auth} primary>
          Sign Up
        </Button>
      </div>
    </header>
  )
}

export default Header
