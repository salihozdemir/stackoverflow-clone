import React from 'react'

import cn from 'classnames'

import FormInput from './form-input'
import Button from './button'

import styles from './login-form.module.css'

function LoginForm({ className, ...props }) {
  return (
    <div className={cn(styles.loginForm, className)} {...props}>
      <FormInput
        label="Email"
        errorMessage="The email is not a valid email address."
        hasError
      />
      <FormInput
        label="Password"
        errorMessage="The email is not a valid email address."
      />
      <Button primary full className={styles.submitButton}>
        Log In
      </Button>
    </div>
  )
}

export default LoginForm
