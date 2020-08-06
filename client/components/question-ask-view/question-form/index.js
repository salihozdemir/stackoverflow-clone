import React from 'react'

import Button from '../../button'
import Textarea from '../../textarea'
import FormInput from '../../form-input'

import styles from './question-form.module.css'

const QuestionForm = () => {
  return (
    <div className={styles.container}>
      <FormInput
        label="Title"
        inputInfo="Be specific and imagine you’re asking a question to another person"
        placeholder="asdasd asdasd asd"
      />
      <Textarea
        label="Body"
        inputInfo="Include all the information someone would need to answer your question"
      />
      <Button primary>Review your question</Button>
    </div>
  )
}

export default QuestionForm
