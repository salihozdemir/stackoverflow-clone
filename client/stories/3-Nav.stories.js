import React from 'react'

import NavItem from '../components/nav-item'
import Navigation from '../components/navigation'
import { World } from '../components/icons'

export default {
  title: 'Navigation'
}

export const NavigationItem = () => (
  <>
    <label>Unselected</label>
    <NavItem>
      <World />
      <span>Stack Overflow</span>
    </NavItem>
    <label>Selected</label>
    <NavItem selected={true}>
      <World />
      <span>Stack Overflow</span>
    </NavItem>
  </>
)

export const Nav = () => <Navigation selectedKey="0" />
