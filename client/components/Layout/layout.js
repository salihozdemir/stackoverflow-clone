import React from 'react'

import styles from './layout.module.css'

import cn from 'classnames'

import CONST from '../../constants'
import useWindowSize from '../../hooks/useWindowSize'
import Sidebar from './sidebar'
import Main from './main'
import Tags from './tags'
import Header from './header'

function Layout({ children }) {
  const size = useWindowSize()
  return (
    <div className={cn(styles.layout)}>
      <Header>Header</Header>
      <div className={styles.container}>
        <div className={styles.body}>
          {size.width > CONST.MOBILE_SIZE && <Sidebar>sidebar</Sidebar>}
          <Main>{children}</Main>
          {size.width > CONST.TABLET_SIZE && <Tags>extra</Tags>}
        </div>
      </div>
    </div>
  )
}

export default Layout
