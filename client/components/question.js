import React from 'react'
import Link from 'next/link'

import slug from 'slug'

import Tag from '../components/tag'

import styles from './question.module.css'

function QuestionStats({ voteCount, answerCount, view }) {
  return (
    <div className={styles.statsContainer}>
      <div className={styles.vote}>
        <span>{voteCount}</span>
        <p>votes</p>
      </div>
      <div className={styles.answer}>
        <span>{answerCount}</span>
        <p>answers</p>
      </div>
      <p className={styles.view}>{view} views</p>
    </div>
  )
}

function QuestionSummary({ title, text, tags, author, createdTime }) {
  return (
    <div className={styles.summaryContainer}>
      <Link href="/questions/[slug]" as={`/questions/${slug(title)}`}>
        <a className={styles.questionLink}>{title}</a>
      </Link>
      <p className={styles.excerpt}>{text}</p>
      <div className={styles.footer}>
        <div className={styles.tagContainer}>
          {tags.map((tag) => (
            <Tag>{tag}</Tag>
          ))}
        </div>
        <div className={styles.userDetails}>
          <span>asked {createdTime}</span>
          <Link href="/users/[user]" as={`/users/${author}`}>
            <a>{author}</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

function Question() {
  return (
    <div className={styles.container}>
      <QuestionStats voteCount={21} answerCount={32} view={112} />
      <QuestionSummary
        title={
          'his is a free online calculator which counts the number of characters or letters in a text, useful for your tweets on Twitter, as well as a multitudee'
        }
        text={
          'lorem ipsum question question question question question question question question'
        }
        tags={['javascript', 'text']}
        author={'salihozdemir'}
        createdTime={'1 min ago'}
      />
    </div>
  )
}

export default Question
