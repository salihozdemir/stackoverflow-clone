import React from 'react'
import Link from 'next/link'

import slug from 'slug'

import Tag from '../../tag'

import styles from './question-summary.module.css'

function QuestionSummary({ title, tags, author, createdTime, children }) {
  return (
    <div className={styles.container}>
      <Link href="/questions/[slug]" as={`/questions/${slug(title)}`}>
        <a className={styles.link}>{title}</a>
      </Link>
      <div className={styles.excerpt}>{children}</div>
      <div className={styles.footer}>
        <div className={styles.tagContainer}>
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <div className={styles.userDetails}>
          <Link href="/users/[user]" as={`/users/${author}`}>
            <a>
              <img
                src={`https://secure.gravatar.com/avatar/${author}?s=32&d=identicon`}
              />
            </a>
          </Link>
          <div className={styles.info}>
            <span>asked {createdTime}</span>
            <Link href="/users/[user]" as={`/users/${author}`}>
              <a>{author}</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuestionSummary
