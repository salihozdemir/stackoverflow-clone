import React from 'react'

import styles from './navigation-dropdown.module.css'

import Navigation from '../navigation'

function NavigationDropdown() {
  return (
    <div className={styles.dialog}>
      <div className={styles.sidebar}>
        <Navigation />
      </div>
    </div>
  )
}

export default NavigationDropdown
