import React from 'react'

import styles from './user-card.module.css'

const AvatarCard = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}

export default AvatarCard
