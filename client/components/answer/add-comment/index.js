import React from 'react'

import TextArea from '../../textarea'
import Button from '../../button'

import styles from './add-comment.module.css'

const AddComment = () => {
  return (
    <div className={styles.container}>
      <TextArea />
      <Button className={styles.button} primary full>
        Add Comment
      </Button>
    </div>
  )
}

export default AddComment
