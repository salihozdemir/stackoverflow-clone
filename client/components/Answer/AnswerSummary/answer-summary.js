import React from 'react'
import Link from 'next/link'

import Tag from '../../Tag/tag'

import styles from './answer-summary.module.css'

const AnswerSummary = () => {
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
          {['javascript', 'css', 'html', 'html'].map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <div className={styles.userDetails}>
          <span>asked 11.25.1234</span>
          <Link href="/users/[user]" as={`/users/salih`}>
            <a>salih</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AnswerSummary
