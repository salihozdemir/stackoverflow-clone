import React, { useState } from 'react'

import Button from '../../button'
import Textarea from '../../textarea'
import FormInput from '../../form-input'
import TagInput from '../../tag-input'

import styles from './question-form.module.css'

const QuestionForm = () => {
  const [tags, setTags] = useState([])
  const [error, setError] = useState(false)
  return (
    <>
      <div className={styles.container}>
        <FormInput
          label="Title"
          inputInfo="Be specific and imagine you’re asking a question to another person"
          placeholder="e.g Is there an R function for finding the index of an element in a vendor?"
        />
        <Textarea
          label="Body"
          inputInfo="Include all the information someone would need to answer your question"
        />
        <TagInput
          label="Tags"
          inputInfo="Add up to 5 tags to describe what your question is about"
          hasError={error}
          errorMessage="Required"
          tags={tags}
          setTags={setTags}
        />
      </div>
      <div className={styles.buttonContainer}>
        <Button onClick={() => setError(!error)} primary>
          Review your question
        </Button>
      </div>
    </>
  )
}

export default QuestionForm
