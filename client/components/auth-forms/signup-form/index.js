import React, { useState, useContext } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'

import { publicFetch } from '../../../util/fetcher'
import { AuthContext } from '../../../store/auth'
import ModalContext from '../../../store/modal'

import FormInput from '../../form-input'
import Button from '../../button'

import styles from './signup-form.module.css'

const SignupForm = () => {
  const { setAuthState } = useContext(AuthContext)
  const { setIsComponentVisible } = useContext(ModalContext)

  const [loading, setLoading] = useState(false)

  return (
    <Formik
      initialValues={{ username: '', password: '', passwordConfirmation: '' }}
      onSubmit={async (values, { setStatus, resetForm }) => {
        setLoading(true)
        try {
          const { data } = await publicFetch.post('signup', values)
          const { token, expiresAt, userInfo } = data
          setAuthState({ token, expiresAt, userInfo })
          resetForm({})
          setIsComponentVisible(false)
        } catch (error) {
          setStatus(error.response.data.message)
        }
        setLoading(false)
      }}
      validationSchema={Yup.object({
        username: Yup.string()
          .required('Required')
          .max(16, 'Must be at most 16 characters long')
          .matches(/^[a-zA-Z0-9_-]+$/, 'Contains invalid characters'),
        password: Yup.string()
          .required('Required')
          .min(6, 'Must be at least 6 characters long')
          .max(50, 'Must be at most 50 characters long'),
        passwordConfirmation: Yup.string().oneOf(
          [Yup.ref('password'), null],
          'Passwords must match'
        )
      })}
    >
      {({
        values,
        errors,
        touched,
        status,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
      }) => (
        <form onSubmit={handleSubmit} className={styles.form}>
          <FormInput
            label="Username"
            type="text"
            name="username"
            autoComplete="off"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            hasError={touched.username && errors.username}
            errorMessage={errors.username && errors.username}
          />
          <FormInput
            label="Password"
            type="password"
            name="password"
            autoComplete="off"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            hasError={touched.password && errors.password}
            errorMessage={errors.password && errors.password}
          />
          <FormInput
            label="Password Confirm"
            type="password"
            name="passwordConfirmation"
            autoComplete="off"
            value={values.passwordConfirmation}
            onChange={handleChange}
            onBlur={handleBlur}
            hasError={
              touched.passwordConfirmation && errors.passwordConfirmation
            }
            errorMessage={
              errors.passwordConfirmation && errors.passwordConfirmation
            }
          />
          <p className={styles.status}>{status}</p>
          <Button
            primary
            full
            className={styles.submitButton}
            disabled={isSubmitting}
            isLoading={loading}
            type="submit"
          >
            Sign up
          </Button>
        </form>
      )}
    </Formik>
  )
}

export default SignupForm
