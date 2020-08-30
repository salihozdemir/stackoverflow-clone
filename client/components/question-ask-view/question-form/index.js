import React, { useState, useContext } from 'react'
import { useRouter } from 'next/router'
import { Formik } from 'formik'
import * as Yup from 'yup'

import { FetchContext } from '../../../store/fetch'

import Button from '../../button'
import Textarea from '../../textarea'
import FormInput from '../../form-input'
import TagInput from '../../tag-input'

import styles from './question-form.module.css'

const QuestionForm = () => {
  const router = useRouter()
  const { authAxios } = useContext(FetchContext)

  const [loading, setLoading] = useState(false)

  return (
    <Formik
      initialValues={{ title: '', text: '', tags: [] }}
      onSubmit={async (values, { setStatus, resetForm }) => {
        setLoading(true)
        try {
          await authAxios.post('questions', values)
          resetForm({})
          router.push('/')
        } catch (error) {
          setStatus(error.response.data.message)
        }
        setLoading(false)
      }}
      validationSchema={Yup.object({
        title: Yup.string()
          .required('Title is missing.')
          .max(150, 'Title cannot be longer than 150 characters.')
          .min(15, 'Title must be at least 15 characters.'),
        text: Yup.string()
          .required('Body is missing.')
          .min(30, 'Body must be at least 30 characters.')
          .max(30000, 'Body cannot be longer than 30000 characters.'),
        tags: Yup.array()
          .required('Please enter at least one tag.')
          .max(5, 'Please enter no more than 5 tags.')
          .of(Yup.string().max(15, 'Tag cannot be longer than 15 characters. '))
      })}
    >
      {({
        values,
        errors,
        touched,
        status,
        handleChange,
        setFieldValue,
        handleBlur,
        handleSubmit,
        isSubmitting
      }) => (
        <form onSubmit={handleSubmit}>
          <div className={styles.container}>
            <FormInput
              label="Title"
              inputInfo="Be specific and imagine you’re asking a question to another person"
              type="text"
              name="title"
              autoComplete="off"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
              hasError={touched.title && errors.title}
              errorMessage={errors.title && errors.title}
              placeholder="e.g Is there an R function for finding the index of an element in a vendor?"
            />
            <Textarea
              label="Body"
              inputInfo="Include all the information someone would need to answer your question"
              name="text"
              autoComplete="off"
              value={values.text}
              onChange={handleChange}
              onBlur={handleBlur}
              hasError={touched.text && errors.text}
              errorMessage={errors.text && errors.text}
            />
            <TagInput
              label="Tags"
              inputInfo="Add up to 5 tags to describe what your question is about"
              type="text"
              name="tags"
              value={values.tags}
              onChange={(e) => setFieldValue('tags', e, true)}
              onBlur={handleBlur}
              hasError={touched.tags && errors.tags}
              errorMessage={errors.tags && errors.tags}
            />
          </div>
          <div className={styles.buttonContainer}>
            <p className={styles.status}>{status}</p>
            <div>
              <Button
                type="submit"
                primary
                isLoading={loading}
                disabled={isSubmitting}
              >
                Review your question
              </Button>
            </div>
          </div>
        </form>
      )}
    </Formik>
  )
}

export default QuestionForm
