import React from 'react'

import styles from './layout.module.css'

import cn from 'classnames'

import CONST from '../../constants'
import useWindowSize from '../../hooks/useWindowSize'
import Sidebar from './Sidebar/sidebar'
import Main from './Main/main'
import Extra from './Extra/extra'
import Header from './Header/header'

function Layout({ extra = true, children }) {
  const size = useWindowSize()
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.container}>
        <div className={cn(styles.body, !extra && styles.main)}>
          {size.width > CONST.MOBILE_SIZE && <Sidebar>sidebar</Sidebar>}
          <Main>{children}</Main>
          {size.width > CONST.TABLET_SIZE && extra && <Extra />}
        </div>
      </div>
    </div>
  )
}

export default Layout
