import React from 'react'

import { Formik } from 'formik'
import * as Yup from 'yup'

import FormInput from '../../form-input'
import Button from '../../button'

import styles from './signup-form.module.css'

function SignupForm() {
  return (
    <Formik
      initialValues={{ username: '', password: '', passwordConfirmation: '' }}
      onSubmit={async (values, { setStatus, resetForm }) => {
        console.log(values)
      }}
      validationSchema={Yup.object({
        username: Yup.string()
          .required('Required')
          .max(32, 'Must be at most 32 characters long')
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
            hasError={touched.passwordConfirmation && errors.passwordConfirmation}
            errorMessage={errors.passwordConfirmation && errors.passwordConfirmation}
          />
          <Button
            primary
            full
            className={styles.submitButton}
            disabled={isSubmitting}
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
