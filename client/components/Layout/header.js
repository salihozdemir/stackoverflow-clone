import React, { useEffect } from 'react'

import styles from './header.module.css'

import cn from 'classnames'

import useComponentVisible from '../../hooks/useComponentVisible'
import useWindowSize from '../../hooks/useWindowSize'
import CONST from '../../constants'

import Button from '../button'
import NavigationDropdown from '../navigation-dropdown'
import { Menu, Close } from '../icons'

function Header({ className, ...props }) {
  const {
    ref,
    isComponentVisible,
    setIsComponentVisible
  } = useComponentVisible(false)
  const size = useWindowSize()

  useEffect(() => {
    if (size.width > CONST.MOBILE_SIZE) {
      setIsComponentVisible(false)
    }
  }, [size])

  return (
    <header className={cn(styles.header, className)} {...props}>
      <div className={styles.container}>
        <Button className={styles.menu}>
          {isComponentVisible ? (
            <Close onClick={() => setIsComponentVisible(false)} />
          ) : (
            <Menu onClick={() => setIsComponentVisible(true)} />
          )}
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
      <div ref={ref}>{isComponentVisible && <NavigationDropdown />}</div>
    </header>
  )
}

export default Header
