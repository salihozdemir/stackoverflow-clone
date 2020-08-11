import React from 'react'

import { Formik } from 'formik'
import * as Yup from 'yup'

import FormInput from '../../form-input'
import Button from '../../button'

import styles from './login-form.module.css'

function LoginForm() {
  return (
    <Formik
      initialValues={{ username: '', password: '' }}
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
          .max(50, 'Must be at most 50 characters long')
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
          <Button primary full className={styles.submitButton} type="submit" disabled={isSubmitting}>
            Log in
          </Button>
        </form>
      )}
    </Formik>
  )
}

export default LoginForm
