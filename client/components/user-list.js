import React from 'react'
import Link from 'next/link'

import USERS from '../constants/users'

import styles from './user-list.module.css'

const UserList = () => {
  return (
    <div className={styles.container}>
      {USERS.map((user) => (
        <div className={styles.card} key={user}>
          <div className={styles.avatar}>
            <Link href="/users/[username]" as={`/users/${user}`}>
              <a>
                <img src="https://www.gravatar.com/avatar/e514b017977ebf742a418cac697d8996?s=96&d=identicon&r=PG" />
              </a>
            </Link>
          </div>
          <div className={styles.body}>
            <Link href="/users/[username]" as={`/users/${user}`}>
              <a>{user}</a>
            </Link>
            <p>created 54 days ago</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default UserList
