import React from 'react'

import TopHeader from '../components/Layout/Header/header'
import Sidebar from '../components/Layout/Sidebar/sidebar'
import Extra from '../components/Layout/Extra/extra'

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
