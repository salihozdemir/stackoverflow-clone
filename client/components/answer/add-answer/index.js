import React from 'react'
import Link from 'next/link'

import TextArea from '../../textarea'
import Button from '../../button'
import Tag from '../../tag'

import styles from './add-answer.module.css'

const AddAnswer = ({ tags }) => {
  return (
    <div className={styles.container}>
      <h2>Your answer</h2>
      <TextArea className={styles.textarea} />
      <div className={styles.button}>
        <Button primary>Post Your Answer</Button>
      </div>
      <h3>
        Browse other questions tagged &nbsp;
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
        or &nbsp;
        <Link href="/questions/ask" as="/questions/ask">
          <a>ask your own question.</a>
        </Link>
      </h3>
    </div>
  )
}

export default AddAnswer
