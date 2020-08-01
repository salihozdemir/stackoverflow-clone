import React from 'react'

import Button from '../components/Common/button'
import * as Icons from '../components/icons'

export default {
  title: 'Icons'
}

export const Icon = () => (
  <div className="icons">
    <Icons.World />
    <Icons.Logo />
    <Icons.Menu />
    <Icons.Close />
    <Icons.Alert />
    <Icons.Search />
  </div>
)
