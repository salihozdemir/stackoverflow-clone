import React from 'react'

import styles from './user-list.module.css'

const UserList = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}

export default UserList
