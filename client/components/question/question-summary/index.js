import React from 'react'
import Link from 'next/link'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'
import slug from 'slug'

import Tag from '../../tag'

import styles from './question-summary.module.css'

const QuestionSummary = ({
  id,
  title,
  tags,
  author,
  createdTime,
  children
}) => {
  return (
    <div className={styles.container}>
      <Link href="/questions/[slug]" as={`/questions/${id}-${slug(title)}`}>
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
          <Link href="/users/[user]" as={`/users/${author.username}`}>
            <a>
              <img
                src={`https://secure.gravatar.com/avatar/${author.id}?s=32&d=identicon`}
                alt={author.username}
              />
            </a>
          </Link>
          <div className={styles.info}>
            <span>
              asked{' '}
              {formatDistanceToNowStrict(new Date(createdTime), {
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

export default QuestionSummary
