import React from 'react'
import Link from 'next/link'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'

import Tag from '../../tag'

import styles from './answer-summary.module.css'

const AnswerSummary = ({ tags, author, created, children }) => {
  return (
    <div className={styles.postCell}>
      <div className={styles.text}>{children}</div>
      <div className={styles.footer}>
        <div className={styles.tagContainer}>
          {tags?.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <div className={styles.userDetails}>
          <Link href="/users/[user]" as={`/users/${author.username}`}>
            <a>
              <img src={`https://secure.gravatar.com/avatar/${author.id}?s=32&d=identicon`} />
            </a>
          </Link>
          <div className={styles.info}>
            <span>
              {tags ? 'asked' : 'answered'}{' '}
              {formatDistanceToNowStrict(new Date(created), {
                addSuffix: true
              })}
            </span>
            <Link href="/users/[user]" as={`/users/${author.username}`}>
              <a>{author.username}</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnswerSummary
