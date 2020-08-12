import React from 'react'
import Link from 'next/link'

import Tag from '../../tag'

import styles from './answer-summary.module.css'

const AnswerSummary = ({ author = 'salih', createdTime = '11.11.1231' }) => {
  return (
    <div className={styles.postCell}>
      <div className={styles.text}>
        <p>
          I have a numpy array of shape (20,512,512). I want to get a list of
          arrays of length 20 matching the array at points (:,100,100)
          (:,105,100), (:,110,100) and so on. I understand i need to use map for
          it, but how do I do it exactly? many thanks Yuval I have a numpy array
          of shape (20,512,512). I want to get a list of arrays of length 20
          matching the array at points (:,100,100) (:,105,100), (:,110,100) and
          so
        </p>
        <p>
          I have a numpy array of shape (20,512,512). I want to get a list of
          arrays of length 20 matching the array at points (:,100,100)
          (:,105,100), (:,110,100) and so on. I understand i need to use map for
          it, but how do I do it exactly? many thanks Yuval I have a numpy array
          of shape (20,512,512). I want to get a list of arrays of length 20
          matching the array at points (:,100,100) (:,105,100), (:,110,100) and
          so
        </p>
      </div>
      <div className={styles.footer}>
        <div className={styles.tagContainer}>
          {['javascript', 'css', 'html'].map((tag) => (
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

export default AnswerSummary
