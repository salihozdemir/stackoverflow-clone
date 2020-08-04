import React from 'react'

import TopHeader from '../components/layout/header'
import Sidebar from '../components/layout/sidebar'
import Extra from '../components/layout/extra'

export default {
  title: 'Layout'
}

export const Header = () => <TopHeader />

export const Navigation = () => (
  <div className="sidebar">
    <Sidebar />
  </div>
)

export const RightSidebar = () => (
  <div className="extra">
    <Extra />
  </div>
)
