import React from 'react'

import styles from './navigation.module.css'

import { useRouter } from 'next/router'

import NavItem from './nav-item'
import { World } from './icons'

function Navigation() {
  const router = useRouter()
  return (
    <nav className={styles.nav}>
      <NavItem href="/" selected={router.pathname == '/'}>
        <World />
        <span>Stack Overflow</span>
      </NavItem>

      <NavItem href="/tags" selected={router.pathname == '/tags'}>
        <span>Tags</span>
      </NavItem>

      <NavItem href="/users" selected={router.pathname == '/users'}>
        <span>Users</span>
      </NavItem>
    </nav>
  )
}

export default Navigation
