import React from 'react'
import Link from 'next/link'

import styles from './avatar-card.module.css'

const UserAvatar = ({ author = { id: 123124124124, username: 'salih' } }) => {
  return (
    <div className={styles.avatarCard}>
      <div className={styles.avatar}>
        <Link href="/users/[username]" as={`/users/${author.username}`}>
          <a>
            <img
              src={`https://secure.gravatar.com/avatar/${author.id}?s=164&d=identicon`}
            />
          </a>
        </Link>
      </div>
      <h2 className={styles.username}>{author.username}</h2>
      <div className={styles.counts}>
        <div className={styles.cell}>
          <p>Question</p>
          <span>15</span>
        </div>
        <div className={styles.cell}>
          <p>Answer</p>
          <span>12</span>
        </div>
      </div>
    </div>
  )
}

export default UserAvatar
