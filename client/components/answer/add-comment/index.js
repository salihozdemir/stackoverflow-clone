import React from 'react'

import TextArea from '../../textarea'
import Button from '../../button'

import styles from './add-comment.module.css'

const AddComment = () => {
  return (
    <div className={styles.container}>
      <TextArea />
      <div>
        <Button className={styles.button} primary>
          Add Comment
        </Button>
      </div>
    </div>
  )
}

export default AddComment
