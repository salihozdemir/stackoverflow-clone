import React, { useContext } from 'react'
import { useRouter } from 'next/router'
import { Formik } from 'formik'
import * as Yup from 'yup'

import { publicFetch } from '../../../util/fetcher'
import { AuthContext } from '../../../store/auth'

import FormInput from '../../form-input'
import Button from '../../button'

import styles from './login-form.module.css'

function LoginForm() {
  const router = useRouter()
  const { setAuthState } = useContext(AuthContext)

  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={async (values, { setStatus, resetForm }) => {
        try {
          const { data } = await publicFetch.post('authenticate', values)
          const { token, expiresAt, userInfo } = data
          setAuthState({token, expiresAt, userInfo})
          router.reload()
          resetForm({})
        } catch (error) {
          setStatus(error.response.data.message)
        }
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
          <p className={styles.status}>{status}</p>
          <Button
            primary
            full
            className={styles.submitButton}
            type="submit"
            disabled={isSubmitting}
          >
            Log in
          </Button>
        </form>
      )}
    </Formik>
  )
}

export default LoginForm
